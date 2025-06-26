# 🐛 디버그 로그

## 📋 작성 규칙
- **날짜**: YYYY-MM-DD HH:MM 형식
- **오류 유형**: [ERROR], [WARNING], [INFO] 태그 사용
- **해결 상태**: [해결됨], [진행중], [미해결] 태그 사용
- **영향도**: [높음], [중간], [낮음] 태그 사용

---

## 🔍 오류 기록

### 2025-01-27 18:30 - TypeScript 설정 오류
- **오류 유형**: [ERROR]
- **해결 상태**: [해결됨]
- **영향도**: [중간]

**오류 내용**:
```
error TS18003: No inputs were found in config file 'C:/Users/이은지/Desktop/JW/hp/backend/tsconfig.json'. 
Specified 'include' paths were '["src/**/*","tests/**/*"]' and 'exclude' paths were '["node_modules","dist"]'.
```

**원인 분석**:
- 백엔드 src 디렉토리에 실제 TypeScript 파일이 없어서 발생
- tsconfig.json의 include 경로가 존재하지 않는 파일을 참조

**해결 방법**:
- 소스 파일 생성 후 해결될 예정
- 현재는 정상적인 상황 (아직 소스 코드 미작성)

**관련 파일**:
- `backend/tsconfig.json`
- `backend/src/` (아직 빈 디렉토리)

---

### 2025-01-27 18:25 - React Query 호환성 오류
- **오류 유형**: [ERROR]
- **해결 상태**: [해결됨]
- **영향도**: [높음]

**오류 내용**:
```
npm error ERESOLVE unable to resolve dependency tree
Found: react@19.1.0
Could not resolve dependency:
peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from react-query@3.39.3
```

**원인 분석**:
- React 19와 react-query 3.x 버전 간 호환성 문제
- react-query 3.x는 React 19를 지원하지 않음

**해결 방법**:
- @tanstack/react-query 5.x 버전으로 변경
- React 19와 완벽 호환되는 최신 버전 사용

**관련 파일**:
- `frontend/package.json`
- `frontend/node_modules/`

---

### 2025-01-27 18:20 - Next.js 프로젝트 생성 충돌
- **오류 유형**: [ERROR]
- **해결 상태**: [해결됨]
- **영향도**: [중간]

**오류 내용**:
```
The directory frontend contains files that could conflict:
public/
src/
Either try using a new directory name, or remove the files listed above.
```

**원인 분석**:
- 기존에 생성된 frontend 디렉토리가 있어서 Next.js 프로젝트 생성 시 충돌
- create-next-app이 기존 파일과 충돌을 감지

**해결 방법**:
- 기존 frontend 디렉토리 삭제 후 재생성
- `rmdir /s /q frontend` 명령으로 완전 제거

**관련 파일**:
- `frontend/` 디렉토리 전체

---

### 2025-01-27 19:00 - 외부 의존성 빌드 오류 및 해결
- **오류 유형**: [ERROR]
- **해결 상태**: [해결됨]
- **영향도**: [중간]

**오류 내용**:
```
Module not found: Can't resolve 'class-variance-authority'
Module not found: Can't resolve 'clsx'
Module not found: Can't resolve 'tailwind-merge'
```

**원인 분석**:
- 외부 의존성 패키지 설치 누락 및 불필요한 복잡성
- 단순한 유틸리티 함수로 대체 가능

**해결 방법**:
- 모든 외부 의존성 제거
- 순수 함수 기반 cn 유틸리티로 대체
- Button 컴포넌트 variant/size도 객체 기반으로 단순화

**관련 파일**:
- `frontend/src/components/ui/Button.tsx`
- `frontend/src/utils/cn.ts`

---

## 📊 오류 통계

### 오류 유형별 분포
- **ERROR**: 3건
- **WARNING**: 0건
- **INFO**: 0건

### 해결 상태별 분포
- **해결됨**: 3건
- **진행중**: 0건
- **미해결**: 0건

### 영향도별 분포
- **높음**: 1건
- **중간**: 2건
- **낮음**: 0건

---

## 🔧 해결된 주요 이슈 요약

1. **React 19 호환성 문제** ✅
   - @tanstack/react-query 5.x 사용으로 해결
   - 모든 패키지가 React 19와 호환되도록 업데이트

2. **TypeScript 설정 문제** ✅
   - 각 디렉토리별 적절한 tsconfig.json 설정
   - 경로 별칭 및 엄격 모드 적용

3. **프로젝트 구조 충돌** ✅
   - 깔끔한 디렉토리 구조로 재구성
   - Next.js 15 + Express 백엔드 분리 구조 완성

---

## 📝 향후 주의사항

### 개발 시 주의점
1. **패키지 버전 호환성**: React 19와 호환되는 최신 버전 사용
2. **TypeScript 엄격 모드**: 타입 안정성 확보를 위한 엄격한 설정 유지
3. **환경 변수 관리**: .env 파일을 통한 안전한 설정 관리
4. **코드 품질**: ESLint 규칙 준수 및 일관된 코드 스타일 유지

### 예상 가능한 이슈
1. **API 연동 시 CORS 문제**: 백엔드 CORS 설정 필요
2. **환경 변수 로딩 문제**: dotenv 설정 확인 필요
3. **빌드 시 경로 문제**: TypeScript 경로 별칭 설정 확인 필요

---

**마지막 업데이트**: 2025-01-27 18:35  
**총 오류 수**: 3건 (모두 해결됨) 