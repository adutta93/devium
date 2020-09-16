import React from "react";
import Button from "../Button";
import svgOne from '../../Assets/svg-1.svg'
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
  Img
} from "./index.style";
import { Container } from "../../index.globalStyle";
const MainBanner = ({ lightBg, imgStart}) => {
  return (
    <div>
      <Banner lightBg={lightBg}>
        <Container>
          <BannerRow imgStart={imgStart}>
            <BannerColumn>
              <TextWrapper>
                <Heading>Dive deeper on topics that matter to you.</Heading>
                <BottomLine>
                  Select what you're into. We'll help you find great things to
                  read. Getting your hands into modern technology is now just
                  once click away from you.
                </BottomLine>
                <Link to="/register">
                  <Button value="Get Started" bigBtn />
                </Link>
                <SignInAccount>
                  Already have an account ? <span>Sign in</span>
                </SignInAccount>
              </TextWrapper>
            </BannerColumn>
            <BannerColumn>
              <ImgWrapper>
                <Img src={svgOne} />
              </ImgWrapper>
            </BannerColumn>
          </BannerRow>
        </Container>
      </Banner>
    </div>
  );
};

export default MainBanner;
