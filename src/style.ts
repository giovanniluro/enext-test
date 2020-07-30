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

  p, h1, h2, h3, h4 {
    color: #0F0F0F;
  }

  button {
    cursor: pointer;
    border: 0;
    padding: 15px 30px;
    font-size: 18px;
    font-weight: 500;

    &:focus {
      outline: 0;
    }
  }

`