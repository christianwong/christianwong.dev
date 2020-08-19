import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  h3 {
    padding: 20px 0;
  }

  p {
    max-width: 430px;

    & + p {
      padding: 10px 0;
    }
  }
`;
