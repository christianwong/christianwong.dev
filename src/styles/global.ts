import styled, { createGlobalStyle } from 'styled-components';

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
    /* display: flex; */
    /* flex-direction: column; */
    align-items: center;
    /* justify-content: center; */
    font-size: calc(10px + 2vmin);
    -webkit-font-smoothing: antialiased;

    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -moz-osx-font-smoothing: grayscale;
  }

 #root {
    /* max-width: 900px; */
    margin: 0 auto;
    /* padding: 40px 20px; */
  }
`;

export const PlaceHolderLight = styled.div`
  background-color: #f2eaec;
  padding: 120px 40px;
  color: #45969b;

  a {
    color: #50b6bb;
  }
`;

export const PlaceHolderDark = styled.div`
  background-color: #45969b;
  padding: 120px 40px;
  color: #f2eaec;

  a {
    color: #0ce5e1;
  }
`;

export const PlaceHolder = styled.div`
  &:nth-of-type(odd) {
    background-color: #45969b;
    color: #f2eaec;

    a {
      color: #0ce5e1;
    }
  }

  &:nth-of-type(even) {
    background-color: #f2eaec;
    color: #45969b;

    a {
      color: #50b6bb;
    }
  }

  padding: 120px 40px;
`;
