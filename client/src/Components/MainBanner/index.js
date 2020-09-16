import React from "react";
import Button from '../Button'
import { Banner, BannerRow, BannerColumn, TextWrapper, Heading } from "./index.style";
import { Container } from "../../index.globalStyle";
const MainBanner = ({ lightBg, imgStart }) => {
  return (
    <div>
      <Banner lightBg={lightBg}>
        <Container>
          <BannerRow imgStart={imgStart}>
            <BannerColumn>
              <TextWrapper>
                <Heading>
                <h1 style={{fontFamily: 'Serif', fontSize: '4rem'}}>Dive deeper on topics that matter to you.</h1>
                <Button value="Get Started" bigBtn/>
                </Heading>
              </TextWrapper>
            </BannerColumn>
          </BannerRow>
        </Container>
      </Banner>
    </div>
  );
};

export default MainBanner;
