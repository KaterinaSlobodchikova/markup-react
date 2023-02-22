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

  img {
    width: 100px;
  }

  .btn-primary {
    height: 48px;
    width: 240px;
    border-radius: 8px;
    border: 1px solid #2a63b0;
    background: #1a75ed;
    cursor: pointer;
    font-size: 15px;
    color: #ffffff;
  }

  .btn-primary:active {
    border: 1px solid #1f4373;
  }
`;
