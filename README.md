# React Project Template

## Table of Contents
- [Technical Stack](#technical-stack)
- [Environment Requirements](#environment-requirements)
- [File Structure](#file-structure)
- [NPM Common Command](#npm-common-command)
- [Initialization](#initialization)
- [Git Message](#git-message)

<hr>

### Technical Stack
- React - v18
- React router - v6
- TypeScript
- tailwindcss

### Environment Requirements
- Node.js >= 20.11.1 LTS
- VSCode
- React 18

### File Structure
```sh
.
├── .husky                        # 設定 git hook
├── dist                          # 專案編譯後的路徑
├── node_modules                  # 存放安裝的套件
├── src                           # 原始碼
│   ├── core                      # 存放核心模組 (singleton)
│   ├── features                  # 存放功能模組
│   │   └── pages                 # 主要開發的功能頁面
│   ├── layout                    # layout 首頁
│   ├── shared                    # 共用模組 (非 singleton)
│   ├── routes                    # 路由配置
│   ├── assets                    # 靜態資源
│   │   ├── i18n                  # 多國語系
│   │   ├── images                # 圖片
│   │   └── styles                # scss
│   └── environments              # 各環境設定檔
├── .editorconfig                 # VSCode 編譯格式設定檔
├── .eslintrc.cjs                 # eslint 設定檔
├── .gitattributes                # git 環境格式設定檔
├── .gitignore                    # git 忽略配置  
├── .nvmrc                        # Node.js 版本配置
├── CODING-GUIDLINES.md           # 程式風格規定
├── commitlint.config.ts          # git commit 格式設定檔
├── index.html                    # 入口頁面
├── package-lock.json             # package-lock.json
├── package.json                  # package.json
├── README.md                     # README.md
└── tsconfig.json                 # TypeScript 配置檔
```

### NPM Common Command
- `npm install` 安裝 package.json 所有套件
- `npm install [package]` 安裝套件
- `npm install -D [package]` 安裝 dev 套件
- `npm install -g [package]` 安裝在電腦全域中
- `npm uninstall [package]` 移除專案套件

### Initialization
#### Initiate Project
1. install packages
```
npm ci
```
> P.S. please make sure your version of node.js is the same as the version in `.nvmrc`

2. activate project
```
npm run dev
```

### Git Message
#### the type of the commit
在撰寫 git commit 時，需要按照該次 commit 的類型，加入以下其中一種 type 在該 commit 的 header line <br>
e.g.:
    <div>
        <code>git commit -m "<span style="color: red;">chore</span>: rename a file</code> // <em>the header line of this commit where the commit type should be added </em> <br>
        <code>1. renamed a.txt to b.txt"</code><br>
        <code>2. bla bla bla bla"</code>
    </div>
- chore: 其他瑣事
- core: 核心
- docs: 文件
- feat: 功能/修改
- fix: 修正
- perf: 優化
- refactor: 重構
- revert: 恢復
- style: 排版樣式
- test: 單元測試

#### the check of commit message
在每次送出 git commit 的時候，除了會執行 git commit linter 的檢查之外，也會同時執行整個專案的 eslint 檢查。
若該次檢查發現有任何錯誤的話，則該次 commit 將無法成功被創建。