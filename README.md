# World Map

A webpage using D3 to draw world map and mark visited countries.

## Reference
[**Let's Make a Map**](https://bost.ocks.org/mike/map/), Mike Bostock, December 30, 2012

## Preview
[https://emilieczq.github.io/World-Map/](https://emilieczq.github.io/World-Map/)

## Installation
Download the files _world.json_, _index.html_, _main.js_, _style.css_ in a same folder.

I use **http-server** to fire up a local web server to view the example. On MacOS, you can use Homebrew to download **http-server**.
`brew install http-server`
You can find more installation methods on [https://github.com/http-party/http-server](https://github.com/http-party/http-server).

## Usage
`http-server -p 8008` to start http-server, open _index.html_ in a browser (Chrome prefered).
Hit CTRL-C to stop the server. If the server is not stopped by hitting CTRL-C, run `sudo lsof -i tcp:8008` to get **PID**, then `sudo kill -9 PID` (replace PID by the PID number you get).