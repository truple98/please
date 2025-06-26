@echo off
echo ==============================================
echo 도시밖 지방 체험 프로젝트 패키지 설치 시작
echo ==============================================
echo.

echo [1/3] 루트 디렉토리 패키지 설치 중...
echo 현재 위치: %cd%
npm install
if %errorlevel% neq 0 (
    echo ❌ 루트 디렉토리 패키지 설치 실패!
    pause
    exit /b 1
)
echo ✅ 루트 디렉토리 패키지 설치 완료!
echo.

echo [2/3] Frontend 디렉토리 패키지 설치 중...
cd frontend
echo 현재 위치: %cd%
npm install
if %errorlevel% neq 0 (
    echo ❌ Frontend 패키지 설치 실패!
    cd ..
    pause
    exit /b 1
)
echo ✅ Frontend 패키지 설치 완료!
cd ..
echo.

echo [3/3] Shared 디렉토리 패키지 설치 중...
cd shared
echo 현재 위치: %cd%
npm install
if %errorlevel% neq 0 (
    echo ❌ Shared 패키지 설치 실패!
    cd ..
    pause
    exit /b 1
)
echo ✅ Shared 패키지 설치 완료!
cd ..
echo.

echo ==============================================
echo 🎉 모든 패키지 설치가 완료되었습니다!
echo ==============================================
