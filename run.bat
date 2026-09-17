@echo off
title Muhammadyusuf Mahmudov — Portfolio Sayti
cd /d "%~dp0"

echo ========================================================
echo    MUHAMMADYUSUF MAHMUDOV - PORTFOLIO SAYTI
echo    Head of Sales ^| B2B Manager ^| Investment Consultant
echo    Aloqa uchun: 50-053-48-12
echo ========================================================
echo.

python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [XATOLIK] Python tizimingizda topilmadi!
    echo Iltimos, Python dasturini o'rnating.
    pause
    exit /b
)

echo [1/2] Flask server ishga tushirilmoqda...
start http://127.0.0.1:5500

echo [2/2] Sayt ochilmoqda: http://127.0.0.1:5500
echo Serverni to'xtatish uchun: Ctrl + C tugmalarini bosing.
echo.

python app.py
pause
