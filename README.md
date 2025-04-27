#  <img src="https://i.imgur.com/iUTRSbw.png" width=20> 虫の模版

该模板为本虫使用的 React 启动模板，内置了 TailwindCSS V4、React Router V7 以及 Axios。你可以基于此模板快速搭建前端项目。

## 前置要求

- **Node.js**（建议版本 ≥ 14）
- **npm** 或 **yarn**
## 相关技术库

[![Static Badge](https://img.shields.io/badge/React-white?style=social&logo=react&logoColor=%2361DAFB)](https://reactjs.org/) [![Static Badge](https://img.shields.io/badge/TailwindCSS-06B6D4?style=social&logo=tailwindcss&logoColor=%2306B6D4)](https://tailwindcss.com/) [![Static Badge](https://img.shields.io/badge/Axios-5A29E4?style=social&logo=axios&logoColor=%235A29E4)](https://axios-http.com/) [![Static Badge](https://img.shields.io/badge/React%20Router-CA4245?style=social&logo=react-router&logoColor=%23#CA4245)](https://reactrouter.com/)

## 快速开始

1. **克隆项目仓库**  
   打开终端，执行以下命令：
   ```bash
   git clone https://github.com/Bearisbug/React-Template.git
   cd react-template
   ```

2. **安装依赖**  
   使用 npm 或 yarn 安装项目依赖：
   ```bash
   npm install
   # 或者
   yarn install
   ```

3. **启动开发服务器**  
   安装完成后，启动开发服务器：
   ```bash
   npm start
   # 或者
   yarn start
   ```
   启动后，浏览器会自动打开（默认端口为 2004），你即可开始开发。

## 项目结构

```
react-template/
├── public/                 # 公共资源
├── app/                    # 源代码目录
│   ├── routes/             # 路由配置
│   ├── app.css             # 主风格 CSS
│   ├── routes.ts           # 全局路由配置
│   └── root.tsx            # 入口文件
├── vite.config.ts          # Vite 构建配置
├── react-router.config.ts  # router 配置
├── package.json            # 项目依赖及脚本配置
└── README.md               # 本文档
```

## 注意事项

- 如需安装额外依赖，请确保版本兼容并使用 npm 或 yarn 安装。
- 在开发过程中，如遇到问题或有建议，欢迎进行反馈和交流，共同完善模板。
