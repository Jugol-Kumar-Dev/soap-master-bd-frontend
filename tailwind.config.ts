import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        william:{
          '50': '#f4f9f9',
          '100': '#dbeceb',
          '200': '#b6d9d9',
          '300': '#8abcbe',
          '400': '#629b9f',
          '500': '#487f84',
          '600': '#39676c',
          '700': '#305055',
          '800': '#294346',
          '900': '#26383b',
          '950': '#121e21',
        },
      },
      fontFamily: {
        'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
    }
  }
}
