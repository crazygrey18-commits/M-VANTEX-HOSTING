@echo off
setlocal
cd /d "%~dp0"
title M VANTEX HOSTING V5
where node.exe >nul 2>&1
if errorlevel 1 (
 echo Node.js missing. Install Node.js LTS from https://nodejs.org and reopen this launcher.
 pause
 exit /b 1
)
node.exe engine.js --open
 echo Engine stopped. Read the error above if present.
 pause
