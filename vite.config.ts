import { loadEnv } from "vite"
import type { ConfigEnv, UserConfigExport } from "vite"
import path, { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import UnoCSS from "unocss/vite"

/** 配置项文档：https://cn.vitejs.dev/config */
export default (configEnv: ConfigEnv): UserConfigExport => {

  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv

  const { VITE_PUBLIC_PATH } = viteEnv

  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    server: {
      https: false,
      host: true, // host: "0.0.0.0"
      port: 3333,
      open: false,
      cors: true,
      strictPort: false
      /** 接口代理 */
      // proxy: {
      //   "/mock-api": {
      //     target: "https://vue-typescript-admin-mock-server-armour.vercel.app/mock-api",
      //     ws: true,
      //     /** 是否允许跨域 */
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace("/mock-api", "")
      //   }
      // }
    },
    build: {
      chunkSizeWarningLimit: 2000,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true,
          pure_funcs: ["console.log"]
        },
        format: {
          comments: false
        }
      },
      assetsDir: "static"
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/components/icons/svg")],
        symbolId: "icon-[dir]-[name]"
      }),
      UnoCSS()
      /** 自动按需引入 (已更改为完整引入，所以注释了) */
      // AutoImport({
      //   dts: "./types/auto-imports.d.ts",
      //   /** 自动按需导入 Element-Plus 相关函数，比如 ElMessage */
      //   resolvers: [ElementPlusResolver()],
      //   /** 根据自动按需导入的相关 API，生成 .eslintrc-auto-import.json 文件供 Eslint 识别 */
      //   eslintrc: {
      //     enabled: true, // 默认 false
      //     filepath: "./types/.eslintrc-auto-import.json", // 默认 "./.eslintrc-auto-import.json"
      //     globalsPropValue: true // 默认 true (true | false | "readonly" | "readable" | "writable" | "writeable")
      //   }
      // }),
      // Components({
      //   dts: "./types/components.d.ts",
      //   /** 自动按需导入 Element-Plus 组件 */
      //   resolvers: [ElementPlusResolver()]
      // })
    ]
  }
}
