import { createGlobalStyle } from 'styled-components';
import NunitoFont from './Fonts.js';

export const GlobalStyles = createGlobalStyle`
    ${NunitoFont}
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    html{
        font-size: 62.5%;// Isso existe para que 1rem seja igual a 10px, caso não tiver usando rem pode apagar;
    
    }
  body {
    font: 1rem Nunito, sans-serif;
  }
`;
