import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viewDepthKey } from 'vue-router'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/test-task-vite-vue3/',
  plugins: [vue()]
})
