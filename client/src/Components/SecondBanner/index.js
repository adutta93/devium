import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import {
  Banner,
  BannerRow,
  BannerColumn,
  TextWrapper,
  HeadingOne,
  HeadingTwo,
} from "./index.style";
import { Container } from "../../index.globalStyle";
const SecondBanner = () => {
  return (
    <div>
      <Banner>
        <Container>
          <BannerRow>
            <BannerColumn>
              <TextWrapper>
                <HeadingOne>Expand your reading.</HeadingOne>
                <HeadingTwo>Expand your mind.</HeadingTwo>
                <Link to="/register">
                  <Button value="Get Started" bigBtn largeMargin />
                </Link>
              </TextWrapper>
            </BannerColumn>
          </BannerRow>
        </Container>
      </Banner>
    </div>
  );
};

export default SecondBanner;
