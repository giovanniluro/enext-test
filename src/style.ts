import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body, #root {
    height: 100%;
    width: 100%;
  }

  button {
    cursor: pointer;
  }

`