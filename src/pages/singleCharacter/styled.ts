import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-family: Roboto, sans-serif;
    font-size: 15px;

    p {
      font-size: 20px;
    }
  }
`;
