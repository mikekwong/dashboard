import { css } from 'styled-components'

const size = {
  tabletDesktop: '400px',
  mobile: '399px',
}

export const device = {
  tabletDesktop: `(min-width: ${size.tabletDesktop})`,
  mobile: `(max-width: ${size.mobile})`,
}

export const colors = {
  white: '#FFF',
  gray: '#ADAAAA',
  opaqueBlue: 'rgba(89, 141, 193, .25)',
  darkBlue: '#2D557C',
  navyBlue: '#102345',
  mobileNavBlue: '#428be5',
}

export const borderRadius = 30

export const fonts = {
  roboto: css`
    font-family: 'Roboto', 'Helvetica', sans-serif;
  `,
}
