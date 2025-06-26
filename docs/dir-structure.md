# 도시밖 지방 체험 - 디렉토리 구조 문서

## 📁 Next.js App Router 기반 프로젝트 구조

```
hp/
├── app/                          # Next.js App Router 메인 디렉토리
│   ├── globals.css              # 전역 스타일
│   ├── layout.tsx               # 루트 레이아웃
│   ├── page.tsx                 # 홈페이지 (/)
│   ├── chatbot/                 # 챗봇 관련 페이지
│   │   ├── page.tsx             # 챗봇 메인 페이지 (/chatbot)
│   │   └── loading.tsx          # 챗봇 페이지 로딩 상태
│   ├── experience/              # 체험 관련 페이지
│   │   ├── page.tsx             # 체험 목록 페이지 (/experience)
│   │   ├── [id]/                # 동적 라우팅 - 개별 체험
│   │   │   ├── page.tsx         # 체험 상세 페이지 (/experience/[id])
│   │   │   └── loading.tsx      # 체험 상세 로딩 상태
│   │   └── loading.tsx          # 체험 목록 로딩 상태
│   ├── mypage/                  # 마이페이지
│   │   ├── page.tsx             # 마이페이지 메인 (/mypage)
│   │   ├── favorites/           # 찜한 체험
│   │   │   └── page.tsx         # 찜한 체험 목록 (/mypage/favorites)
│   │   ├── reviews/             # 후기 관리
│   │   │   ├── page.tsx         # 후기 목록 (/mypage/reviews)
│   │   │   └── [id]/            # 후기 작성/수정
│   │   │       └── page.tsx     # 후기 작성 페이지 (/mypage/reviews/[id])
│   │   └── loading.tsx          # 마이페이지 로딩 상태
│   ├── api/                     # Next.js API Routes
│   │   ├── chat/                # 챗봇 API
│   │   │   └── route.ts         # POST /api/chat
│   │   ├── experiences/         # 체험 관련 API
│   │   │   ├── route.ts         # GET /api/experiences
│   │   │   └── [id]/            # 개별 체험 API
│   │   │       └── route.ts     # GET /api/experiences/[id]
│   │   ├── recommendations/     # 추천 시스템 API
│   │   │   └── route.ts         # POST /api/recommendations
│   │   ├── favorites/           # 찜하기 API
│   │   │   └── route.ts         # POST /api/favorites
│   │   ├── reviews/             # 후기 API
│   │   │   ├── route.ts         # GET, POST /api/reviews
│   │   │   └── [id]/            # 개별 후기 API
│   │   │       └── route.ts     # GET, PUT, DELETE /api/reviews/[id]
│   │   └── user/                # 사용자 관련 API
│   │       ├── route.ts         # GET /api/user
│   │       └── preferences/     # 사용자 선호도
│   │           └── route.ts     # GET, POST /api/user/preferences
│   ├── error.tsx                # 전역 에러 페이지
│   ├── loading.tsx              # 전역 로딩 페이지
│   └── not-found.tsx            # 404 페이지
├── components/                  # 재사용 가능한 컴포넌트
│   ├── common/                  # 공통 컴포넌트
│   │   ├── Header.tsx           # 헤더 컴포넌트
│   │   ├── Footer.tsx           # 푸터 컴포넌트
│   │   ├── Button.tsx           # 버튼 컴포넌트
│   │   ├── Card.tsx             # 카드 컴포넌트
│   │   ├── Loading.tsx          # 로딩 컴포넌트
│   │   └── ErrorBoundary.tsx    # 에러 바운더리
│   ├── chatbot/                 # 챗봇 관련 컴포넌트
│   │   ├── ChatInterface.tsx    # 챗봇 인터페이스
│   │   ├── MessageBubble.tsx    # 메시지 버블
│   │   ├── ChatInput.tsx        # 채팅 입력창
│   │   └── RecommendationCard.tsx # 추천 카드
│   ├── experience/              # 체험 관련 컴포넌트
│   │   ├── ExperienceCard.tsx   # 체험 카드
│   │   ├── ExperienceList.tsx   # 체험 목록
│   │   ├── ExperienceDetail.tsx # 체험 상세
│   │   ├── FavoriteButton.tsx   # 찜하기 버튼
│   │   └── ReviewSection.tsx    # 후기 섹션
│   ├── mypage/                  # 마이페이지 컴포넌트
│   │   ├── UserProfile.tsx      # 사용자 프로필
│   │   ├── FavoriteList.tsx     # 찜한 체험 목록
│   │   ├── ReviewList.tsx       # 후기 목록
│   │   └── ReviewForm.tsx       # 후기 작성 폼
│   └── ui/                      # UI 기본 컴포넌트
│       ├── Modal.tsx            # 모달 컴포넌트
│       ├── Tabs.tsx             # 탭 컴포넌트
│       ├── Rating.tsx           # 별점 컴포넌트
│       └── ImageUpload.tsx      # 이미지 업로드
├── lib/                         # 유틸리티 및 설정
│   ├── api/                     # API 관련 유틸리티
│   │   ├── client.ts            # API 클라이언트 설정
│   │   ├── openai.ts            # OpenAI API 설정
│   │   └── types.ts             # API 타입 정의
│   ├── utils/                   # 유틸리티 함수
│   │   ├── constants.ts         # 상수 정의
│   │   ├── helpers.ts           # 헬퍼 함수
│   │   ├── validation.ts        # 유효성 검사
│   │   └── formatting.ts        # 포맷팅 함수
│   ├── hooks/                   # 커스텀 훅
│   │   ├── useChat.ts           # 챗봇 관련 훅
│   │   ├── useExperiences.ts    # 체험 관련 훅
│   │   ├── useFavorites.ts      # 찜하기 관련 훅
│   │   └── useUser.ts           # 사용자 관련 훅
│   └── store/                   # 상태 관리
│       ├── chatStore.ts         # 챗봇 상태 관리
│       ├── userStore.ts         # 사용자 상태 관리
│       └── experienceStore.ts   # 체험 상태 관리
├── public/                      # 정적 파일
│   ├── images/                  # 이미지 파일
│   │   ├── experiences/         # 체험 이미지
│   │   ├── icons/               # 아이콘
│   │   └── logos/               # 로고
│   ├── fonts/                   # 폰트 파일
│   └── favicon.ico              # 파비콘
├── mock/                        # 더미 데이터
│   ├── experiences.json         # 체험 데이터
│   ├── users.json               # 사용자 데이터
│   ├── recommendations.json     # 추천 데이터
│   └── reviews.json             # 후기 데이터
├── docs/                        # 프로젝트 문서
│   ├── tech-stack.md            # 기술 스택
│   ├── dir-structure.md         # 디렉토리 구조
│   ├── api-spec.md              # API 명세
│   ├── specification.md         # 기능 명세
│   ├── change-log.md            # 변경 로그
│   └── cursor-prompt-initial-setup.txt # Cursor 설정
├── styles/                      # 추가 스타일 (필요시)
│   └── components.css           # 컴포넌트별 스타일
├── .env.local                   # 환경 변수
├── .env.example                 # 환경 변수 예시
├── next.config.js               # Next.js 설정
├── tailwind.config.js           # Tailwind CSS 설정
├── tsconfig.json                # TypeScript 설정
├── package.json                 # 프로젝트 의존성
└── README.md                    # 프로젝트 설명
```

## 🛣️ 라우팅 구조

### 페이지 라우팅
- `/` - 홈페이지
- `/chatbot` - 챗봇 추천 페이지
- `/experience` - 체험 목록 페이지
- `/experience/[id]` - 체험 상세 페이지
- `/mypage` - 마이페이지
- `/mypage/favorites` - 찜한 체험 목록
- `/mypage/reviews` - 후기 목록
- `/mypage/reviews/[id]` - 후기 작성/수정

### API 라우팅
- `POST /api/chat` - 챗봇 대화 처리
- `GET /api/experiences` - 체험 목록 조회
- `GET /api/experiences/[id]` - 체험 상세 조회
- `POST /api/recommendations` - 추천 생성
- `POST /api/favorites` - 찜하기/해제
- `GET /api/reviews` - 후기 목록 조회
- `POST /api/reviews` - 후기 작성
- `GET /api/user` - 사용자 정보 조회
- `GET /api/user/preferences` - 사용자 선호도 조회

## 📦 컴포넌트 구조

### 공통 컴포넌트
- **Header**: 네비게이션 및 로고
- **Footer**: 푸터 정보
- **Button**: 재사용 가능한 버튼
- **Card**: 카드 레이아웃
- **Loading**: 로딩 상태 표시
- **ErrorBoundary**: 에러 처리

### 챗봇 컴포넌트
- **ChatInterface**: 메인 챗봇 인터페이스
- **MessageBubble**: 메시지 표시
- **ChatInput**: 사용자 입력
- **RecommendationCard**: 추천 결과 카드

### 체험 컴포넌트
- **ExperienceCard**: 체험 정보 카드
- **ExperienceList**: 체험 목록
- **ExperienceDetail**: 체험 상세 정보
- **FavoriteButton**: 찜하기 기능
- **ReviewSection**: 후기 섹션

### 마이페이지 컴포넌트
- **UserProfile**: 사용자 프로필
- **FavoriteList**: 찜한 체험 목록
- **ReviewList**: 작성한 후기 목록
- **ReviewForm**: 후기 작성 폼

## 🔄 데이터 플로우

1. **사용자 입력** → 챗봇 컴포넌트
2. **API 호출** → Next.js API Routes
3. **데이터 처리** → 더미 데이터 또는 외부 API
4. **상태 업데이트** → Zustand/Context
5. **UI 렌더링** → React 컴포넌트

## 🎯 개발 우선순위

### Phase 1: 기본 구조
- Next.js 프로젝트 설정
- 기본 라우팅 구성
- 공통 컴포넌트 개발

### Phase 2: 핵심 기능
- 챗봇 인터페이스
- 체험 목록/상세 페이지
- API Routes 구현

### Phase 3: 고급 기능
- 마이페이지
- 후기 시스템
- 찜하기 기능

### Phase 4: 최적화
- 성능 최적화
- SEO 개선
- 사용자 경험 향상 