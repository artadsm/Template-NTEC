import { createGlobalStyle } from 'styled-components';
import NunitoFont from './Fonts.js';
const GlobalStyle = createGlobalStyle`
  ${NunitoFont}
  body {
    font: 1rem Nunito, sans-serif;
  }
`;

export default GlobalStyle;