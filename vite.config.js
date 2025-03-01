import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '#assets': path.resolve(__dirname, 'src/assets'),
      '#components': path.resolve(__dirname, 'src/components'),
      '#context': path.resolve(__dirname, 'src/context'),
      '#hooks': path.resolve(__dirname, 'src/hooks'),
      '#pages': path.resolve(__dirname, 'src/pages'),
      '#services': path.resolve(__dirname, 'src/services'),
      '#utils': path.resolve(__dirname, 'src/utils')
    }
  }
})
