import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'zorro-purple': '#3919b0',
        'zorro-pink': '#ff5a8b',
        'zorro-grey': '#3f4042',
        'zorro-light-purple': '#aea2db',
        'zorro-yellow': '#fbcc5d',
        'zorro-hot-yellow': '#f0ff00',
        'zorro-green': '#19c144',
        'zorro-light-pink': '#ffd9e3',
        'zorro-bg-grey-1': '#f7f7f7',
        'zorro-bg-grey-2': '#efefef',
        'zorro-bg-grey-3': '#e8e8e8',
        'zorro-light-grey': '#eaeaea',
        'zorro-social-grey': '#676970',
        'zorro-pastel-blue': '#9ce1e6',
        'zorro-pastel-orange': '#f76844',
        'zorro-pastel-peach': '#fed4af',
        'zorro-brown': '#7d532e',
        'zorro-light-peach': '#ffe0cd'
      },
      width: {
        '128': '32rem',
        '240': '60rem'
      },
      gridTemplateColumns: {
        '2-1-1': '2fr 1fr 1fr'
      }
    },
  },
  plugins: [],
}
export default config
