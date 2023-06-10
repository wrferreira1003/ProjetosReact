import { useState } from 'react'
import { Button } from './components/Button'
import {ThemeProvider} from 'styled-components'
import { DefaultTheme } from './components/styles/themes/default'

export function App() {

  return (
    
    <ThemeProvider theme={DefaultTheme}>
    
      <Button variant='primary'/>
      <Button variant='secondary'/>
      <Button variant='success'/>
      <Button variant='danger'/>
      <Button />
    
    </ThemeProvider>
  )
}

