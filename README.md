# typescript-empty-project

Simplistic TypeScript empty project:

- Install [node.js](https://nodejs.org/):
  - on Ubuntu: `sudo apt-get install nodejs-legacy`
  - on Mac with Homebrew: `brew update && brew install node`
- Download [this project's zip archive](https://github.com/ochafik/typescript-empty-project/archive/master.zip), unzip it and cd to its directory in a new terminal
- To start developing, just type:

  ```bash
  # Fetches dependencies
  npm i
  # Starts a server with live-reload, and recompiles files when they're saved:
  npm start
  ```

This setup:
- TypeScript with strict settings (null-awareness, no implicit any, no implicit returns) and down-compilation to ES5
- Optimized bundle creation with Rollup + Uglify
- Immutable.js import to get you started with decent collections :-)
