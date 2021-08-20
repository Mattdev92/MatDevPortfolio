import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 100px 15px 20px;
  grid-row: 1 / 4;
  grid-column: 1 / 11;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  @media (max-width: 580px) {
    position: absolute;
    top: 80px;
    margin: auto;
  }
`;
