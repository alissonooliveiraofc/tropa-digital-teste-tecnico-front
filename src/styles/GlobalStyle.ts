import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    // display: flex;
    // justify-content: center;
    // align-items: center;
    font-family: 'Roboto', 'sans-serif';
    background: #f7f7f9;
    color: #333;
    min-width: 300px;
  }

  button, input {
    font-family: 'Roboto', 'sans-serif';
  }

  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
  display: none;
}
  input[type="password"]::-webkit-credentials-auto-fill-button {
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
}
`;