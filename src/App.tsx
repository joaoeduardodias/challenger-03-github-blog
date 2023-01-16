import { ThemeProvider } from 'styled-components'
import { GlobalTheme } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme />
    </ThemeProvider>
  )
}
