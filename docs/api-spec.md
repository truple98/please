# 도시밖 지방 체험 - API 명세서 (Next.js API Routes)

## 📋 개요

이 문서는 Next.js 14 App Router의 API Routes를 기반으로 한 REST API 명세서입니다. 모든 API 엔드포인트는 `/app/api/` 디렉토리 내에 위치하며, 서버리스 함수로 구현됩니다.

## 🔌 API 엔드포인트 목록

### 1. 챗봇 관련 API

#### POST /api/chat
**파일 위치**: `app/api/chat/route.ts`

**설명**: OpenAI GPT API를 활용한 챗봇 대화 처리

**요청 본문**:
```typescript
{
  "messages": [
    {
      "role": "user" | "assistant" | "system",
      "content": string
    }
  ],
  "userPreferences": {
    "mood": "bored" | "excited" | "tired" | "curious",
    "interests": string[],
    "travelDistance": "1hour" | "2hours" | "3hours" | "unlimited",
    "preferredActivity": "solo" | "group" | "both"
  }
}
```

**응답**:
```typescript
{
  "success": boolean,
  "message": string,
  "recommendations": [
    {
      "experienceId": string,
      "reason": string,
      "confidence": number
    }
  ],
  "nextQuestion": string
}
```

**구현 예시**:
```typescript
// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { messages, userPreferences } = await request.json();

    const systemPrompt = `당신은 도시 청년들에게 맞춤형 지방 체험을 추천해주는 AI 큐레이터입니다.
    사용자의 성향과 선호도를 파악하여 적절한 체험을 추천해주세요.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      temperature: 0.7,
    });

    const aiResponse = response.choices[0].message.content;
    
    // 추천 로직 처리
    const recommendations = await processRecommendations(userPreferences);

    return NextResponse.json({
      success: true,
      message: aiResponse,
      recommendations,
      nextQuestion: generateNextQuestion(userPreferences)
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "챗봇 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
```

### 2. 체험 관련 API

#### GET /api/experiences
**파일 위치**: `app/api/experiences/route.ts`

**설명**: 체험 목록 조회 (필터링 지원)

**쿼리 파라미터**:
```typescript
{
  category?: string;        // 카테고리 필터
  location?: string;        // 지역 필터
  price?: string;          // 가격 범위
  difficulty?: string;     // 난이도
  page?: number;           // 페이지 번호
  limit?: number;          // 페이지당 항목 수
}
```

**응답**:
```typescript
{
  "success": boolean,
  "data": {
    "experiences": Experience[],
    "total": number,
    "page": number,
    "totalPages": number
  }
}
```

**구현 예시**:
```typescript
// app/api/experiences/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getExperiences } from '@/lib/utils/experiences';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const filters = {
      category: searchParams.get('category'),
      location: searchParams.get('location'),
      price: searchParams.get('price'),
      difficulty: searchParams.get('difficulty'),
      page: parseInt(searchParams.get('page') || '1'),
      limit: parseInt(searchParams.get('limit') || '10')
    };

    const result = await getExperiences(filters);

    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "체험 목록 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
```

#### GET /api/experiences/[id]
**파일 위치**: `app/api/experiences/[id]/route.ts`

**설명**: 개별 체험 상세 정보 조회

**경로 파라미터**:
```typescript
{
  id: string;  // 체험 ID
}
```

**응답**:
```typescript
{
  "success": boolean,
  "data": Experience
}
```

**구현 예시**:
```typescript
// app/api/experiences/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getExperienceById } from '@/lib/utils/experiences';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const experience = await getExperienceById(params.id);

    if (!experience) {
      return NextResponse.json(
        { success: false, error: "체험을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: experience
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "체험 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
```

### 3. 추천 시스템 API

#### POST /api/recommendations
**파일 위치**: `app/api/recommendations/route.ts`

**설명**: 사용자 선호도 기반 체험 추천

**요청 본문**:
```typescript
{
  "userId": string;
  "preferences": {
    "tags": string[];
    "mood": string;
    "travelDistance": string;
    "activityType": string;
  };
  "excludeIds": string[];  // 제외할 체험 ID 목록
}
```

**응답**:
```typescript
{
  "success": boolean,
  "recommendations": [
    {
      "experienceId": string;
      "reason": string;
      "score": number;
      "matchTags": string[];
    }
  ]
}
```

### 4. 찜하기 API

#### POST /api/favorites
**파일 위치**: `app/api/favorites/route.ts`

**설명**: 체험 찜하기/해제

**요청 본문**:
```typescript
{
  "userId": string;
  "experienceId": string;
  "action": "add" | "remove";
}
```

**응답**:
```typescript
{
  "success": boolean;
  "message": string;
  "isFavorited": boolean;
}
```

#### GET /api/favorites
**설명**: 사용자의 찜한 체험 목록 조회

**쿼리 파라미터**:
```typescript
{
  userId: string;
}
```

**응답**:
```typescript
{
  "success": boolean;
  "data": {
    "favorites": Experience[];
    "total": number;
  }
}
```

### 5. 후기 관련 API

#### GET /api/reviews
**파일 위치**: `app/api/reviews/route.ts`

**설명**: 후기 목록 조회

**쿼리 파라미터**:
```typescript
{
  experienceId?: string;  // 특정 체험의 후기만 조회
  userId?: string;        // 특정 사용자의 후기만 조회
  page?: number;
  limit?: number;
}
```

**응답**:
```typescript
{
  "success": boolean;
  "data": {
    "reviews": Review[];
    "total": number;
    "averageRating": number;
  }
}
```

#### POST /api/reviews
**설명**: 후기 작성

**요청 본문**:
```typescript
{
  "userId": string;
  "experienceId": string;
  "rating": number;  // 1-5
  "comment": string;
  "images": string[];  // 이미지 URL 배열
}
```

**응답**:
```typescript
{
  "success": boolean;
  "data": Review;
}
```

#### PUT /api/reviews/[id]
**파일 위치**: `app/api/reviews/[id]/route.ts`

**설명**: 후기 수정

**요청 본문**:
```typescript
{
  "rating": number;
  "comment": string;
  "images": string[];
}
```

#### DELETE /api/reviews/[id]
**설명**: 후기 삭제

### 6. 사용자 관련 API

#### GET /api/user
**파일 위치**: `app/api/user/route.ts`

**설명**: 사용자 정보 조회

**쿼리 파라미터**:
```typescript
{
  userId: string;
}
```

**응답**:
```typescript
{
  "success": boolean;
  "data": User;
}
```

#### POST /api/user/preferences
**파일 위치**: `app/api/user/preferences/route.ts`

**설명**: 사용자 선호도 저장/수정

**요청 본문**:
```typescript
{
  "userId": string;
  "preferences": {
    "interests": string[];
    "travelDistance": string;
    "activityType": string;
    "budget": string;
  };
}
```

## 📊 데이터 타입 정의

### Experience 타입
```typescript
interface Experience {
  id: string;
  title: string;
  location: string;
  description: string;
  tags: string[];
  image: string;
  price: string;
  duration: string;
  maxParticipants: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  externalBookingUrl?: string;
}
```

### User 타입
```typescript
interface User {
  id: string;
  name: string;
  age: number;
  location: string;
  job: string;
  preferenceTags: string[];
  favorites: string[];
  reviews: Review[];
}
```

### Review 타입
```typescript
interface Review {
  id: string;
  userId: string;
  experienceId: string;
  rating: number;
  comment: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}
```

### Message 타입
```typescript
interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
}
```

## 🔧 유틸리티 함수

### 더미 데이터 처리
```typescript
// lib/utils/experiences.ts
import experiencesData from '@/mock/experiences.json';

export async function getExperiences(filters: any) {
  let filteredExperiences = experiencesData.experiences;

  // 필터링 로직
  if (filters.category) {
    filteredExperiences = filteredExperiences.filter(
      exp => exp.category === filters.category
    );
  }

  if (filters.location) {
    filteredExperiences = filteredExperiences.filter(
      exp => exp.location.includes(filters.location)
    );
  }

  // 페이지네이션
  const startIndex = (filters.page - 1) * filters.limit;
  const endIndex = startIndex + filters.limit;
  const paginatedExperiences = filteredExperiences.slice(startIndex, endIndex);

  return {
    experiences: paginatedExperiences,
    total: filteredExperiences.length,
    page: filters.page,
    totalPages: Math.ceil(filteredExperiences.length / filters.limit)
  };
}

export async function getExperienceById(id: string) {
  return experiencesData.experiences.find(exp => exp.id === id);
}
```

## 🚨 에러 처리

### 공통 에러 응답 형식
```typescript
{
  "success": false;
  "error": string;
  "code": string;  // 선택적 에러 코드
  "details": any;  // 추가 에러 정보
}
```

### HTTP 상태 코드
- `200`: 성공
- `201`: 생성 성공 (POST 요청)
- `400`: 잘못된 요청
- `401`: 인증 실패
- `404`: 리소스를 찾을 수 없음
- `500`: 서버 내부 오류

## 🔒 보안 고려사항

### API 키 보호
```typescript
// 환경 변수를 통한 API 키 관리
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
```

### 입력 검증
```typescript
import { z } from 'zod';

const chatRequestSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant', 'system']),
    content: z.string().min(1)
  })),
  userPreferences: z.object({
    mood: z.enum(['bored', 'excited', 'tired', 'curious']),
    interests: z.array(z.string()),
    travelDistance: z.enum(['1hour', '2hours', '3hours', 'unlimited'])
  })
});
```

## 📈 성능 최적화

### 캐싱 전략
```typescript
// Next.js 캐싱 활용
export async function GET(request: NextRequest) {
  const experiences = await getExperiences();
  
  return NextResponse.json(experiences, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
```

### 응답 압축
```typescript
// Next.js 자동 압축 활용
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
``` 