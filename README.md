<p align="center">
  <img src="./src/assets/images/viact.png" alt="Viact Logo" width="300"> 
</p>

# ⚡️ Viact

<p>Viact is a starter template for React TypeScript that uses Vitejs, which supports RTL for specific styles, proxy fetching API (to fix CORS errors) and a simple mock REST API server. <br />Additionally, Is set up VScode, Storybook, ErrorBoundary, UnoCss (atomic CSS engine), Eslint, Prettier, and more.</p>

# Synopsis & Motivation

<p>It's an opinionated setup for modern web applications (a GitHub template). This is a set of essential (and minimal) libraries, components, and utilities that developers typically require when developing React applications.</p>
<p>Almost all projects need to have a router, a UI framework, error handling, base file/folder structure, a builder, some developer tools (eslint, prettier, postcss, etc), and many more. As a starter kit, we tried to include the best options available in the above fields.</p>

# Features

<p>Viact is a minimalist starter template, it includes:</p>

-  ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
-  ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
-  🏄 [React Router DOM](https://reactrouter.com/)https://reactrouter.com/
-  💎 [TypeScript (of course)](https://www.typescriptlang.org/)
-  🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine
-  ✅ Safety - Https is enabled by default in development `https://localhost:3000/`
-  🔨 [EsLint](https://eslint.org/) - Pluggable JavaScript linter
-  🌀 [Prettier](https://prettier.io) - Opinionated Code Formatter
-  📭 [PostCss](https://postcss.org/) - Supports RTL for specific styles & autoprefixer (add vendor prefixes)
-  ☄️ [Conventional Commit](https://commitlint.js.org/#/)
-  🎯 Absolute import by using `~/...`
-  ⚙️ Proxying API Requests in Development
-  🔥 The easiest way to mock REST APIs! `json-server`
-  📕 [Storybook](https://storybook.js.org/)

# Prerequisites
-  📦 [Node.js >=16](https://nodejs.org/)
-  📦 [Yarn >=1](https://yarnpkg.com/)
# Getting Started

### GitHub Template

[Create a repo from this template on GitHub.](https://github.com/MR-Mostafa/Viact/generate)

### Clone to local

<p>If you would prefer to do it manually, use the following:</p>

```bash
git clone https://github.com/MR-Mostafa/Viact.git
cd Viact
```

<p>After that, follow these steps to clean the git history and install the dependencies:</p>

```bash
yarn run reset       # Reset and clean all files you don't need, and clean git history
yarn install         # Install all dependencies
```

# Folder Structure

<p>Simple folder structures, no configuration needed, just the files you need:</p>

```
Viact
├── .storybook          # Storybook configuration
├── .vite-cache         # Vite cache (for faster builds)
├── .vscode             # VSCode configuration
├── mock                # Full fake REST API server (Create a mock API server with `json-server`)
├── node_modules        # Node modules
├── postcss             # Postcss RTLCSS Plugin
└── src                 # Your source code that will be compiled to dist folder
|    ├── api
|    ├── assets
|    |    ├── fonts
|    |    ├── images
|    |    └── styles
|    |        ├── utils                # Utility styles
|    |        ├── styles.rtl.scss      # Global rtl styles
|    |        └── styles.scss          # Global styles
|    ├── components
|    ├── constants
|    ├── containers
|    ├── env
|    ├── pages
|    ├── sections
|    ├── store
|    ├── types
|    ├── utils
|    ├── App.tsx
|    ├── main.tsx
|    └── Routes.tsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
...
```

# Available Scripts
<p>In this project, you can run the following scripts:</p>

| Script                   | Description                                                                    |
| ------------------------ | ------------------------------------------------------------------------------ |
| yarn run dev             | Runs the app in the development mode. (With HTTPS)                             |
| yarn run dev:http        | Runs the app in the development mode. (**Without** HTTPS)                      |
| yarn run build           | Builds the app for production to the `dist` folder.                            |
| yarn run preview         | Builds the app for production to the `dist` folder, and run locally server.    |
| yarn run analyze         | Builds the app for production to the `dist` folder, and active analyze mode.   |
| yarn run reset           | Reset and clean all files you don't need, and clean git history.               |
| yarn run mock:server     | Run the server for the fake rest API.                                          |
| yarn run storybook       | Run the documentation for the UI.                                              |
| yarn run build-storybook | Builds the documentation for the UI.                                           |

