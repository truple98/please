# 도시밖 지방 체험 - 기술 스택 문서

## 🚀 기술 스택 개요

이 프로젝트는 Next.js 14 App Router를 기반으로 한 현대적인 웹 애플리케이션입니다.

### Frontend Framework
- **Next.js 14** - React 기반 풀스택 프레임워크
- **App Router** - 파일 기반 라우팅 시스템
- **TypeScript** - 타입 안정성 및 개발 생산성 향상

### Styling & UI
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **CSS Modules** - 컴포넌트 스코프 스타일링 (선택적)
- **Framer Motion** - 애니메이션 라이브러리 (선택적)

### State Management
- **React Context API** - 전역 상태 관리
- **useState, useEffect** - 로컬 상태 관리
- **Zustand** - 경량 상태 관리 라이브러리 (선택적)

### API & Data
- **Next.js API Routes** - 서버리스 API 엔드포인트
- **OpenAI API** - GPT 모델을 활용한 챗봇 기능
- **Axios** - HTTP 클라이언트
- **JSON 더미 데이터** - 초기 개발용 데이터 소스

### Development Tools
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **TypeScript** - 정적 타입 검사

## 📦 주요 패키지 목록

### Core Dependencies
```bash
npm install next@latest react@latest react-dom@latest
npm install typescript @types/node @types/react @types/react-dom
npm install tailwindcss postcss autoprefixer
npm install axios
npm install openai
npm install zustand
npm install framer-motion
npm install lucide-react
```

### Development Dependencies
```bash
npm install -D eslint eslint-config-next
npm install -D prettier
npm install -D @types/node
```

## 🏗️ 아키텍처 특징

### Server-Side Rendering (SSR)
- Next.js의 SSR 기능을 활용한 SEO 최적화
- 초기 로딩 성능 향상

### API Routes
- `/app/api/` 디렉토리 기반 서버리스 함수
- Express 서버 없이도 백엔드 기능 구현

### File-based Routing
- `/app` 디렉토리 기반 자동 라우팅
- 동적 라우팅 지원 (`[id]` 폴더)

### Data Flow
1. **Client Side**: React 컴포넌트에서 상태 관리
2. **API Routes**: Next.js API Routes에서 비즈니스 로직 처리
3. **External APIs**: OpenAI API 연동
4. **Mock Data**: JSON 파일 기반 더미 데이터

## 🔧 개발 환경 설정

### Next.js 설정
```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
```

### Tailwind CSS 설정
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 📊 성능 최적화

### Image Optimization
- Next.js Image 컴포넌트 활용
- 자동 이미지 최적화

### Code Splitting
- 자동 코드 분할
- 페이지별 번들 최적화

### Caching
- Next.js 내장 캐싱 시스템
- API 응답 캐싱

## 🔒 보안 고려사항

### Environment Variables
- `.env.local` 파일을 통한 환경 변수 관리
- API 키 등 민감 정보 보호

### API Security
- Next.js API Routes를 통한 서버 사이드 로직
- 클라이언트에 민감 정보 노출 방지

## 🚀 배포 전략

### Vercel 배포 (권장)
- Next.js 공식 플랫폼
- 자동 배포 및 스케일링

### 기타 플랫폼
- Netlify
- AWS Amplify
- Railway

## 📈 확장성 고려사항

### 데이터베이스 연동
- PostgreSQL (Supabase)
- MongoDB (MongoDB Atlas)
- Firebase Firestore

### 상태 관리 확장
- Zustand → Redux Toolkit (필요시)
- React Query (서버 상태 관리)

### 모니터링
- Vercel Analytics
- Sentry (에러 추적) 