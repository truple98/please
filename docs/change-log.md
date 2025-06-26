# 도시밖 지방 체험 - 변경 로그

## 📅 2025-01-27

### 🔄 기술 스택 전면 전환

#### 변경 사항
- **프론트엔드 프레임워크**: React + Vite → Next.js 14 (App Router)
- **라우팅 시스템**: react-router-dom → Next.js 파일 기반 라우팅
- **백엔드 서버**: Express.js → Next.js API Routes (서버리스 함수)
- **빌드 도구**: Vite → Next.js 기본 빌드 시스템
- **디렉토리 구조**: /src → /app, /components, /lib 중심으로 변경

#### 새로 생성된 문서
1. **docs/tech-stack.md** - Next.js 기반 기술 스택 문서
2. **docs/dir-structure.md** - Next.js App Router 디렉토리 구조
3. **docs/specification.md** - Next.js 기반 기능 명세서
4. **docs/api-spec.md** - Next.js API Routes 명세서
5. **docs/change-log.md** - 변경 로그 (현재 문서)

#### 수정된 문서
1. **docs/커서_프롬프트_초기세팅.txt** - Next.js 기반으로 전면 수정

#### 주요 변경 이유
1. **개발 생산성 향상**: Next.js의 파일 기반 라우팅으로 더 직관적인 개발
2. **성능 최적화**: SSR, SSG, 이미지 최적화 등 Next.js 내장 기능 활용
3. **배포 간소화**: Vercel 등 Next.js 최적화 플랫폼 활용
4. **API 통합**: 프론트엔드와 백엔드를 하나의 프로젝트로 통합
5. **SEO 최적화**: 서버 사이드 렌더링을 통한 검색 엔진 최적화

#### 기술 스택 상세 변경 내역

##### Frontend
- **이전**: React 18 + Vite + TypeScript + TailwindCSS
- **현재**: Next.js 14 + TypeScript + TailwindCSS + Framer Motion

##### Backend
- **이전**: Node.js + Express + TypeScript
- **현재**: Next.js API Routes (서버리스 함수)

##### 라우팅
- **이전**: react-router-dom 기반 클라이언트 사이드 라우팅
- **현재**: Next.js App Router 기반 파일 시스템 라우팅

##### 상태 관리
- **이전**: React Context API
- **현재**: Zustand + React Context API (선택적)

##### API 구조
- **이전**: Express.js 서버 기반 REST API
- **현재**: Next.js API Routes 기반 서버리스 함수

#### 디렉토리 구조 변경

##### 이전 구조
```
hp/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   └── index.ts
│   └── package.json
├── mock/
└── docs/
```

##### 현재 구조
```
hp/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── chatbot/
│   ├── experience/
│   ├── mypage/
│   └── api/
├── components/
├── lib/
├── public/
├── mock/
└── docs/
```

#### API 엔드포인트 변경

##### 이전 (Express)
- `GET /api/experiences` → Express 라우터
- `POST /api/chat` → Express 라우터

##### 현재 (Next.js API Routes)
- `GET /api/experiences` → `app/api/experiences/route.ts`
- `POST /api/chat` → `app/api/chat/route.ts`

#### 개발 환경 설정 변경

##### 이전
```bash
# Frontend
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install

# Backend
mkdir backend
cd backend
npm init -y
npm install express
```

##### 현재
```bash
# Next.js 프로젝트 생성
npx create-next-app@latest hp --typescript --tailwind --app
cd hp
npm install
```

#### 다음 단계
1. Next.js 프로젝트 초기화
2. 기본 디렉토리 구조 생성
3. API Routes 구현
4. 컴포넌트 개발
5. 챗봇 기능 구현

#### 영향도 분석
- **긍정적 영향**: 개발 생산성 향상, 배포 간소화, 성능 최적화
- **주의사항**: 기존 React 지식은 그대로 활용 가능, Next.js 학습 필요
- **마이그레이션**: 점진적 전환 가능, 기존 코드 재사용 가능

---

## 📝 변경 로그 작성 규칙

### 작성 형식
```
## 📅 YYYY-MM-DD

### 🔄 변경 유형

#### 변경 사항
- 구체적인 변경 내용

#### 영향도
- 변경으로 인한 영향

#### 다음 단계
- 향후 계획
```

### 변경 유형 분류
- 🔄 **기술 스택 변경**: 프레임워크, 라이브러리 변경
- ✨ **기능 추가**: 새로운 기능 구현
- 🐛 **버그 수정**: 오류 수정
- 📝 **문서 업데이트**: 문서 수정 및 추가
- 🎨 **UI/UX 개선**: 디자인 및 사용자 경험 개선
- ⚡ **성능 최적화**: 성능 개선
- 🔒 **보안 강화**: 보안 관련 수정 