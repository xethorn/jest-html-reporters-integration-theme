import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const noAttr = () => {
  return {
    name: "no-attribute",
    // eslint-disabled-next-line
    transformIndexHtml(html: any) {
      return html.replace(`type="module" crossorigin`, 'async ')
        .replace('/index-', './index-');
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    noAttr()
  ],
  build: {
    assetsDir: '.',
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
})
