import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    text-align: center;
    background-color: #45969b;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    -webkit-font-smoothing: antialiased;
  }

 #root {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
