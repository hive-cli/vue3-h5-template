import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  theme: {
    extend: {
      colors: {
        primary: '#007DD4'
      },
      cursor: {
        grab: 'grab'
      },
      fontFamily: {
        roboto: ['Roboto']
      },
      screens: {
        '3xl': '2560px'
      }
    }
  },
  plugins: []
})
