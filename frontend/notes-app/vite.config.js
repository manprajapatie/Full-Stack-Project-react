import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  theme:{
    extend:{
      //Colors used in the project
      colors:{
        primary: "white",
        secondary: "white",
      },
    }
  }
})
