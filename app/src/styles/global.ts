import { createGlobalStyle } from 'styled-components';
import marvelLogo from '../assets/MarvelLogo.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }


  body {
    background-color: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  body::after{
    content: "";
    background: url(${marvelLogo}) no-repeat 60% top;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  body, input, button {
    font: 16px Comfortaa, sans-serif;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button{
    cursor: pointer;
  }
`;
