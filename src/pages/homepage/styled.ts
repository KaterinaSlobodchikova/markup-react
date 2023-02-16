import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ArticleWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 15px 0;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
`;
