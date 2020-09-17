import styled from "styled-components";

export const Banner = styled.div`
  color: #000;
  /* padding: 10rem 0; */
  margin-top: 7rem;
  background: ${({ lightBg }) => (lightBg ? "#101522" : "#fff")};
  @media screen and (max-width: 768px) {
    margin-top: 5rem;
  }
`;

export const BannerRow = styled.div`
  display: flex;
  margin: 0 -.5rem -.5rem -.5rem;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const BannerColumn = styled.div`
  /* margin-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem; */
  display: flex;
  justify-content: center;
  /* flex: 1; */
  max-width: 100%;
  flex-basis: 100%;

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
`;

export const HeadingOne = styled.h1`
  font-family: Serif;
  font-size: 3rem;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    
  }
`;

export const HeadingTwo = styled.h1`
  font-family: Serif;
  font-size: 3rem;
  margin-left: 1.2rem;

  @media screen and (max-width: 768px) {
    margin-left: -.1rem;
    /* max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center; */
  }
`;