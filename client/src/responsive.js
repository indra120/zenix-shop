import { css } from 'styled-components'

export default function mobile(styles) {
  return css`
    @media only screen and(max-width: 380px) {
      ${styles}
    }
  `
}