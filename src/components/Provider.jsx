import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'

export default function Provider({ children, emotion, theme }) {
  return (
    <CacheProvider value={emotion}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  )
}