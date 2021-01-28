@echo off
rem oh my, ...
for /f "delims=''" %%h in ( 'cmd /c python -c "from cdb import CADDOK; print CADDOK.HOME"' ) do (
    call "%%h\sphinx\sphinx.bat" %1 
)

