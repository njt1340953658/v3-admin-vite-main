import { loadEnv } from "vite"
import UnoCSS from "unocss/vite"
import path, { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import type { ConfigEnv, UserConfigExport } from "vite"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"

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
    ]
  }
}
