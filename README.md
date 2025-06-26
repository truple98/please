# 도시밖 지방 체험

도시 청년들이 일상에서 벗어나 지방의 공방, 농장, 축제 등 체험을 탐색하고, AI 챗봇의 추천을 통해 자신에게 맞는 체험을 발견할 수 있도록 돕는 웹 플랫폼입니다.

## 🚀 실행 방법

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 9.0.0 이상

### 설치 및 실행

1. **프로젝트 클론**
```bash
git clone [repository-url]
cd hp
```

2. **Frontend 의존성 설치**
```bash
cd frontend
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

4. **브라우저에서 확인**
```
http://localhost:5173
```

## 📁 프로젝트 구조

```
hp/
├── frontend/          # React + TypeScript 프로젝트
│   ├── src/
│   │   ├── components/    # 공통 컴포넌트
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── App.tsx        # 메인 앱 컴포넌트
│   │   └── main.tsx       # 앱 진입점
│   ├── public/        # 정적 파일들
│   └── package.json   # 의존성 관리
├── backend/           # Node.js + Express (선택적)
├── mock/              # 더미 데이터 JSON 파일들
│   ├── experiences.json
│   ├── users.json
│   └── recommendations.json
├── docs/              # 프로젝트 문서들
└── README.md          # 프로젝트 소개
```

## 🛠️ 기술 스택

### Frontend
- **React 18** - 사용자 인터페이스
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **TailwindCSS** - 스타일링
- **React Router** - 라우팅

### Backend (선택적)
- **Node.js** - 서버 런타임
- **Express.js** - 웹 프레임워크
- **OpenAI API** - AI 챗봇

## 🎯 주요 기능

- **AI 기반 개인화 추천**: 사용자 성향 분석을 통한 맞춤형 체험 추천
- **체험 탐색**: 다양한 지방 체험 정보 제공
- **챗봇 인터페이스**: 자연스러운 대화를 통한 체험 추천
- **찜하기 기능**: 관심 체험 저장
- **후기 시스템**: 체험 후기 작성 및 공유

## 📝 개발 기록

프로젝트 개발 과정은 `/docs` 폴더의 다음 문서들에서 확인할 수 있습니다:

- `progress-checklist.md` - 개발 진행 체크리스트
- `debug-log.md` - 디버깅 로그
- `change-log.md` - 변경 로그
- `dev-diary.md` - 개발 일지

## 🤝 기여하기

1. 이슈를 생성하여 개선사항을 제안해주세요
2. Pull Request를 통해 코드를 기여해주세요
3. 개발 가이드라인을 준수해주세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**개발팀**: 도시밖 지방 체험 개발팀  
**문의**: [contact@example.com](mailto:contact@example.com) 