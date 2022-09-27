import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viewDepthKey } from 'vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
