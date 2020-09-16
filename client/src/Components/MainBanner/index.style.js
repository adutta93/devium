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
`;

export const Heading = styled.h1`
  font-family: Serif;
  font-size: 4rem;
`;

export const BottomLine = styled.div`
  margin-top: 1rem;
  font-family: Serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.3;
`;

export const SignInAccount = styled.h5`
  margin-top: 0.7rem;
  margin-left: 0.9rem;
  font-family: Serif;
  font-size: 1.1rem;
  font-weight: 100;
  span {
    font-family: Serif;
    color: #03a87c;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  margin-left: 2rem;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  margin-top: -4rem;
`;
