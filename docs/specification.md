# 도시밖 지방 체험 - 기능 명세서 (Next.js 기반)

## 📋 프로젝트 개요

**프로젝트명**: 도시밖 지방 체험  
**기술 스택**: Next.js 14 (App Router) + TypeScript + Tailwind CSS  
**목적**: AI 챗봇을 통한 개인화된 지방 체험 추천 플랫폼

## 🎯 핵심 기능 명세

### 1. 홈페이지 (`/`)
**파일 위치**: `app/page.tsx`

#### 기능 요구사항
- 서비스 소개 및 메인 CTA
- 추천 체험 미리보기 (3개)
- 챗봇 시작 버튼
- 반응형 디자인 (모바일 퍼스트)

#### UI 구성
```typescript
// 주요 컴포넌트
- Hero Section (서비스 소개)
- Featured Experiences (추천 체험 미리보기)
- CTA Button (챗봇 시작)
- Footer
```

### 2. 챗봇 추천 시스템 (`/chatbot`)
**파일 위치**: `app/chatbot/page.tsx`

#### 기능 요구사항
- OpenAI GPT API 연동
- 사용자 성향 분석 (5-7개 질문)
- 실시간 대화 인터페이스
- 추천 결과 카드 형태 출력

#### 대화 플로우
1. **초기 인사** → 사용자 기분 파악
2. **성향 질문** → 관심사, 선호도, 이동 가능 거리
3. **추천 생성** → AI 기반 맞춤형 추천
4. **결과 표시** → 체험 카드 리스트

#### API 연동
```typescript
// POST /api/chat
{
  "messages": [
    { "role": "user", "content": "요즘 지루해요" }
  ],
  "userPreferences": {
    "mood": "bored",
    "interests": ["craft", "nature"],
    "travelDistance": "2hours"
  }
}
```

### 3. 체험 목록 페이지 (`/experience`)
**파일 위치**: `app/experience/page.tsx`

#### 기능 요구사항
- 전체 체험 목록 표시
- 필터링 (지역, 카테고리, 가격)
- 검색 기능
- 무한 스크롤 또는 페이지네이션

#### 데이터 구조
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
}
```

### 4. 체험 상세 페이지 (`/experience/[id]`)
**파일 위치**: `app/experience/[id]/page.tsx`

#### 기능 요구사항
- 체험 상세 정보 표시
- 이미지 갤러리
- 후기 및 별점
- 찜하기 기능
- 외부 예약 링크
- 지도 표시

#### API 엔드포인트
```typescript
// GET /api/experiences/[id]
// POST /api/favorites (찜하기)
// GET /api/reviews?experienceId=[id] (후기 조회)
```

### 5. 마이페이지 (`/mypage`)
**파일 위치**: `app/mypage/page.tsx`

#### 탭 구성
- **찜한 체험** (`/mypage/favorites`)
- **예약 내역** (`/mypage/bookings`)
- **후기 관리** (`/mypage/reviews`)

#### 기능 요구사항
- 사용자 프로필 정보
- 찜한 체험 목록
- 작성한 후기 목록
- 후기 작성/수정 기능

### 6. 후기 시스템
**파일 위치**: `app/mypage/reviews/[id]/page.tsx`

#### 기능 요구사항
- 별점 평가 (1-5점)
- 텍스트 후기 작성
- 이미지 업로드 (선택)
- 후기 수정/삭제

## 🔌 API 명세 (Next.js API Routes)

### 1. 챗봇 API
```typescript
// POST /api/chat
export async function POST(request: Request) {
  const { messages, userPreferences } = await request.json();
  
  // OpenAI API 호출
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      { role: "system", content: "당신은 체험 큐레이터입니다..." },
      ...messages
    ]
  });
  
  return NextResponse.json({ 
    recommendations: processedRecommendations 
  });
}
```

### 2. 체험 API
```typescript
// GET /api/experiences
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const location = searchParams.get('location');
  
  // 더미 데이터에서 필터링
  const experiences = await getExperiences({ category, location });
  
  return NextResponse.json(experiences);
}

// GET /api/experiences/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const experience = await getExperienceById(params.id);
  return NextResponse.json(experience);
}
```

### 3. 찜하기 API
```typescript
// POST /api/favorites
export async function POST(request: Request) {
  const { userId, experienceId } = await request.json();
  
  // 로컬 스토리지 또는 세션 기반 저장
  const result = await toggleFavorite(userId, experienceId);
  
  return NextResponse.json({ success: result });
}
```

### 4. 후기 API
```typescript
// POST /api/reviews
export async function POST(request: Request) {
  const { userId, experienceId, rating, comment, images } = await request.json();
  
  const review = await createReview({
    userId,
    experienceId,
    rating,
    comment,
    images
  });
  
  return NextResponse.json(review);
}
```

## 📊 데이터 관리

### 1. 더미 데이터 구조
```typescript
// mock/experiences.json
{
  "experiences": [
    {
      "id": "exp001",
      "title": "도자기 만들기 클래스",
      "location": "경기도 여주",
      "description": "흙을 만지며 마음을 정리하는 체험",
      "tags": ["혼자", "힐링", "자연", "조용함"],
      "image": "/images/pottery.jpg",
      "price": "50,000원",
      "duration": "3시간",
      "maxParticipants": 8,
      "difficulty": "초급",
      "category": "공방"
    }
  ]
}
```

### 2. 상태 관리
```typescript
// lib/store/chatStore.ts (Zustand)
interface ChatStore {
  messages: Message[];
  userPreferences: UserPreferences;
  recommendations: Experience[];
  isLoading: boolean;
  
  addMessage: (message: Message) => void;
  setUserPreferences: (preferences: UserPreferences) => void;
  setRecommendations: (recommendations: Experience[]) => void;
  resetChat: () => void;
}
```

## 🎨 UI/UX 설계

### 1. 디자인 시스템
- **색상**: 자연스러운 그린 톤 + 중성색
- **타이포그래피**: 가독성 좋은 산세리프 폰트
- **아이콘**: Lucide React 아이콘 세트
- **애니메이션**: Framer Motion 활용

### 2. 반응형 디자인
- **모바일 퍼스트** 접근법
- **브레이크포인트**: 640px, 768px, 1024px, 1280px
- **터치 친화적** 인터페이스

### 3. 접근성
- **키보드 네비게이션** 지원
- **스크린 리더** 호환성
- **색상 대비** WCAG 2.1 AA 준수

## 🔧 개발 환경 설정

### 1. 환경 변수
```bash
# .env.local
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 2. TypeScript 설정
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 🚀 성능 최적화

### 1. 이미지 최적화
```typescript
import Image from 'next/image';

<Image
  src="/images/experience.jpg"
  alt="체험 이미지"
  width={400}
  height={300}
  priority={true}
/>
```

### 2. 코드 분할
- **동적 임포트** 활용
- **페이지별 번들** 최적화
- **컴포넌트 지연 로딩**

### 3. 캐싱 전략
- **Next.js 내장 캐싱** 활용
- **API 응답 캐싱**
- **정적 자산 캐싱**

## 📈 확장 계획

### Phase 1 (MVP)
- 기본 챗봇 기능
- 체험 목록/상세 페이지
- 찜하기 기능

### Phase 2 (고도화)
- 사용자 인증 시스템
- 결제 시스템 연동
- 실시간 알림

### Phase 3 (확장)
- 관리자 대시보드
- 데이터 분석 도구
- 모바일 앱 개발 