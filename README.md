# v3-vite

```
npm install

npm run dev

npm run build:prod
```

├─ public
│ ├─ favicon.ico
├─ src
│ ├─ api # api 接口
│ ├─ assets # 静态资源
│ ├─ components # 全局组件
| | ├─ icons # svg icon
| | ├─ layout # 布局
│ ├─ config # 全局配置
│ ├─ constant # 常量/枚举
│ ├─ directives # 全局指令
│ ├─ router # 路由
│ ├─ store # pinia store
│ ├─ styles # 全局样式
│ ├─ utils # 全局公共方法
│ └─ views # 所有页面
│ ├─ App.vue # 入口页面
│ └─ main.ts # 入口文件
├─ types # ts 声明
├─ .env.development # 开发环境
├─ .env.production # 正式环境
├─ .eslintrc.js # eslint 配置
├─ .prettier.config.js # prettier 配置
├─ tsconfig.json # ts 编译配置
├─ unocss.config.ts # unocss 配置
└─ vite.config.ts # vite 配置
