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


    /* Small Height Devices */
    @media(max-height: 600px) {
      height: 800px;
    }
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
    transition: .4s;

    &:focus {
      outline: 0;
    }

    &:hover{
      background: #17263A;
    }
  }

`