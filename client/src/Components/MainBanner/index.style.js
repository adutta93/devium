import styled from "styled-components";

export const Banner = styled.div`
  color: #000;
  padding: 10rem 0;
  background: ${({ lightBg }) => (lightBg ? "#101522" : "#fff")};
`;
export const BannerRow = styled.div`
  display: flex;
  margin: 0 -1rem -1rem -1rem;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;
export const BannerColumn = styled.div`
  margin-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const TextWrapper = styled.div`
  max-width: 34rem;
  padding-top: 0;
  padding-bottom: 4rem;
  @media screen and (max-width: 768px) {
    padding-bottom: 4rem;
  }
`;

export const Heading = styled.div`
  display: inline;
  justify-content: center;
  align-items: center;
  font-family: Serif;
  @media screen and (max-width: 768px) {
    padding-bottom: 4rem;
  }
`;
