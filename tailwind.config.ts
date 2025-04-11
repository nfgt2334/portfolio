import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {},
  plugins: [animate],
}

export default config
