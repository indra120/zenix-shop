import { styled } from '@mui/material/styles'

export const Wrapper = styled('div')(({ theme: { palette } }) => ({
  height: '30px',
  backgroundColor: palette.info.main,
  color: palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: 500,
}))