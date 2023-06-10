import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyled />
    </ThemeProvider>
  )
}
