import React from "react";
import Button from "../Button";

import { Link } from "react-router-dom";
import {
  Banner,
  BannerRow,
  BannerColumn,
  TextWrapper,
  Heading,
  BottomLine,
  SignInAccount,
  ImgWrapper,
  Img,
} from "./index.style";
import { Container } from "../../index.globalStyle";
const MainBanner = ({
  lightBg,
  imgStart,
  headline,
  bottomline,
  signaccount,
  span,
  img,
}) => {
  return (
    <div>
      <Banner lightBg={lightBg}>
        <Container>
          <BannerRow imgStart={imgStart}>
            <BannerColumn>
              <TextWrapper>
                <Heading>{headline}</Heading>
                <BottomLine>{bottomline}</BottomLine>
                <Link to="/register">
                  <Button value="Get Started" bigBtn />
                </Link>
                <SignInAccount>
                  {signaccount}
                  <Link to="/signin">
                    <span>{span}</span>
                  </Link>
                </SignInAccount>
              </TextWrapper>
            </BannerColumn>
            <BannerColumn>
              <ImgWrapper>
                <Img src={img} alt="image" />
              </ImgWrapper>
            </BannerColumn>
          </BannerRow>
        </Container>
      </Banner>
    </div>
  );
};

export default MainBanner;
