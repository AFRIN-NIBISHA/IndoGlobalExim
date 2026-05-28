@echo off
title SecureAgri Impex Website Runner
color 0B
echo ===================================================
echo             SECUREAGRI IMPEX WEBSITE RUNNER
echo ===================================================
echo.
echo [1/2] Checking environment...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed! Please install Node.js first.
    pause
    exit /b
)
echo Node.js is installed.
echo.
echo [2/2] Starting local web development server...
echo.
echo Website will be available at the URL shown below (typically http://localhost:5173)
echo Press Ctrl+C in this terminal window to stop the server.
echo.
cd Client
npm run dev
pause
