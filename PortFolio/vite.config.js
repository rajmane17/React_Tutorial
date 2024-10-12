import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',  // Set loader to handle JSX syntax in .js files
    include: /src\/.*\.js$/,  // Apply this loader to all .js files in the src folder
    exclude: [],  // Exclude files you don't want to process as JSX (if any)
  },
})
