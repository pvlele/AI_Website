import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // This is necessary because the Google GenAI SDK and the provided code 
      // rely on `process.env.API_KEY`, which isn't available in the browser by default.
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})