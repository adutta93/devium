import React from "react";
import Button from "../Button";
// import { Icon } from "../Header/index.style";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinkItems,
  // FooterLinkTitle,
  FooterLink,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  SocialIconLink,
  WebsiteRights,
  SocialIcons,
} from "./index.style";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our premium membership to receive the latest tech and dev news.
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at anytime.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button value="Subscribe" />
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLink to="/register">Get Started</FooterLink>
            <FooterLink>Testimonials</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLink>Subscribe</FooterLink>
            <FooterLink>Carrers</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLink to="/signin">Sign In</FooterLink>
            <FooterLink>Investors</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLink>Newsletter</FooterLink>
            <FooterLink>Terms and conditions</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo>
            <SocialIcon />
            Devium
          </SocialLogo>
          <WebsiteRights>© 2020 A Devium Corporation</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria_label="Facebook">
              <FaFacebook />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria_label="Twitter">
              <FaTwitter />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria_label="Instagram">
              <FaInstagram />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria_label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
