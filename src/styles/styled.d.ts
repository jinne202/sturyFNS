import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode : {
      mainBg: string;
      textColor: string;
    }
  }
}