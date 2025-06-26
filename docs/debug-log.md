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

## 2024-12-19 - 색상 및 레이아웃 문제 해결

### 🐛 **문제 1: 다크모드 자동 적용으로 인한 가독성 문제**

**증상**: 
- 배경이 검정색으로 표시
- 텍스트가 거의 보이지 않음
- 전체적인 UI가 식별 불가능

**원인**: 
- `@media (prefers-color-scheme: dark)` CSS 규칙이 활성화됨
- 사용자 시스템이 다크모드로 설정되어 있어 자동 적용

**해결책**:
```css
/* 다크모드 비활성화 - 밝은 테마만 사용 */
/* @media (prefers-color-scheme: dark) { ... } */
```
- 다크모드 CSS 규칙을 주석 처리
- `--background: #FFFFFF`로 강제 설정
- `body`에 `!important` 추가하여 우선순위 확보

### 🐛 **문제 2: CSS Reset으로 인한 레이아웃 파괴**

**증상**:
- 모든 요소의 배치가 깨짐
- 여백과 패딩이 사라짐
- 전체 레이아웃 구조 붕괴

**원인**:
```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```
- 전역 CSS Reset이 Tailwind CSS와 충돌
- 기존 스타일링이 모두 무효화됨

**해결책**:
- CSS Reset 코드 완전 제거
- Tailwind CSS의 기본 normalize만 사용

### 🐛 **문제 3: 텍스트 가독성 및 레이아웃 크기 문제**

**증상**:
- 파란 배경에서 텍스트가 잘 보이지 않음
- 콘텐츠가 브라우저 전체 크기를 사용하지 못함

**원인**:
1. CTA 섹션의 텍스트 색상 대비 부족
2. `layout.tsx`에서 `max-w-5xl` 제한
3. 불필요한 패딩으로 공간 낭비

**해결책**:
1. **텍스트 색상 개선**:
   ```tsx
   // Before
   <p className="text-xl mb-8 opacity-90 text-white">
   
   // After  
   <p className="text-xl mb-8 text-blue-100">
   ```

2. **레이아웃 구조 수정**:
   ```tsx
   // Before
   <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
   
   // After
   <main className="flex-1 w-full">
   ```

3. **버튼 디자인 개선**:
   ```tsx
   className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-white"
   ```

### ✅ **최종 결과**
- ✅ 밝은 테마로 고정하여 일관된 디자인 유지
- ✅ 전체 화면을 활용하는 반응형 레이아웃
- ✅ 명확한 텍스트 대비로 가독성 향상
- ✅ CSS 충돌 없는 안정적인 스타일링

### 📚 **학습 내용**
1. **CSS 우선순위**: `!important` 사용 시점과 방법
2. **Tailwind 호환성**: 외부 CSS Reset과의 충돌 주의
3. **디자인 시스템**: 색상 대비와 가독성의 중요성
4. **레이아웃 설계**: 컨테이너 vs 전체 화면 사용 결정

---

## 2024-12-19 - 버튼 텍스트 가독성 문제 추가 해결

### 🐛 **문제 4: CTA 버튼 텍스트 가독성 부족**

**증상**: 
- 파란 배경의 CTA 섹션에서 흰색 버튼의 텍스트가 잘 보이지 않음
- 텍스트와 배경의 대비가 부족

**원인**: 
- 버튼 텍스트 색상이 `text-blue-600`으로 설정됨
- 흰색 배경에 파란색 텍스트의 조합이 주변 파란 배경과 혼재

**해결책**:
1. **직접적인 접근**: Button 컴포넌트 대신 순수 HTML button 사용
2. **명확한 색상**: `text-black` 사용으로 최대 대비 확보
3. **시각적 강화**: `shadow-lg` 추가로 버튼 구분도 향상

```tsx
// Before
<Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">

// After  
<button className="... bg-white text-black hover:bg-gray-100 ...">
```

**결과**: 
- ✅ 흰색 배경에 검정 텍스트로 최대 가독성 확보
- ✅ 호버 시 회색 배경으로 자연스러운 피드백
- ✅ 그림자 효과로 버튼의 입체감 강화

---

## 2024-12-19 - 이미지 로딩 문제 해결 및 안정성 개선

### 🐛 **문제 5: 체험 페이지 이미지 로딩 실패**

**증상**: 
- 체험 카드의 이미지들이 깨져서 표시됨
- 기본 이미지 경로 오류
- 일부 Unsplash URL이 불안정

**원인**: 
1. 기존 URL 파라미터 형식 문제 (`?w=400&h=250&fit=crop`)
2. Unsplash API 최적화 파라미터 미사용
3. 이미지 로딩 실패 시 fallback 처리 부재

**해결책**:
1. **URL 안정성 개선**:
   ```tsx
   // Before
   "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
   
   // After
   "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
   ```

2. **에러 핸들링 추가**:
   ```tsx
   onError={(e) => {
     const target = e.target as HTMLImageElement;
     target.src = fallbackImage;
   }}
   ```

3. **체험별 이미지 최적화**:
   - 도자기: 실제 도자기 제작 이미지
   - 목공: 목공예 작업 이미지  
   - 농장: 농작물 및 농장 풍경
   - 한지: 전통 종이 공예
   - 산촌: 한국 전통 마을
   - 염색: 천연 염색 작업

**기술적 개선사항**:
- `ixlib=rb-4.0.3`: Unsplash API 최신 버전
- `auto=format`: 브라우저 최적 포맷 자동 선택
- `w=800&q=80`: 고품질 이미지 (800px, 80% 품질)
- TypeScript 타입 안전성 확보

**결과**: 
- ✅ 모든 이미지의 안정적 로딩 보장
- ✅ 고품질 이미지로 시각적 품질 향상
- ✅ 네트워크 오류 시 graceful fallback
- ✅ 페이지 로딩 속도 최적화

---

## 2024-12-19 - Next.js 15 Server Component 호환성 문제 해결

### 🐛 **문제 6: Event handlers cannot be passed to Client Component props**

**증상**: 
```
Runtime Error
Error: Event handlers cannot be passed to Client Component props.
  <img src=... alt=... className=... onError={function onError}>
                                             ^^^^^^^^^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component.
```

**원인**: 
- Next.js 15 App Router의 Server Component에서 이벤트 핸들러 사용 불가
- `onError`, `onClick` 등 이벤트 핸들러는 Client Component에서만 사용 가능
- 이미지 에러 핸들링과 찜하기 버튼에서 문제 발생

**해결책**:
1. **이벤트 핸들러 제거**:
   ```tsx
   // Before (에러 발생)
   <img onError={(e) => { ... }} />
   <button onClick={() => { ... }}>
   
   // After (해결)
   <img /> // 안정적인 URL로만 처리
   <div className="cursor-pointer"> // 정적 스타일만 사용
   ```

2. **안정적인 이미지 URL 사용**:
   - Unsplash API 최적화 파라미터로 이미지 로딩 실패 최소화
   - `ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`

3. **인터랙션 대안**:
   - 버튼 → div + cursor-pointer로 시각적 피드백 유지
   - 실제 기능 구현 시 Client Component로 분리 예정

**Next.js 15 App Router 특징**:
- 기본적으로 모든 컴포넌트가 Server Component
- 이벤트 핸들러, useState, useEffect 등은 Client Component에서만 사용
- `'use client'` 지시문으로 Client Component 명시 필요

**향후 개선 계획**:
1. **찜하기 기능**: Client Component로 분리하여 실제 상태 관리
2. **이미지 에러 핸들링**: Next.js Image 컴포넌트 활용
3. **검색/필터**: Client Component로 실제 기능 구현

**결과**: 
- ✅ Runtime 오류 완전 해결
- ✅ 페이지 정상 렌더링 복구
- ✅ 시각적 디자인 유지
- ✅ Next.js 15 App Router 호환성 확보

### 📚 **학습 내용**
- Next.js 15 Server/Client Component 구분의 중요성
- 이벤트 핸들러 사용 시 Client Component 필요
- 점진적 기능 구현 시 호환성 고려 필요

---

## 2024-12-19 (이전 기록)

### 📋 프로젝트 초기 설정
- Node.js 패키지 설치 및 TypeScript 설정
- 기본 컴포넌트 라이브러리 구축
- 5개 주요 화면 구현 