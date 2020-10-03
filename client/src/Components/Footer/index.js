import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
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
            <FooterLink>
              <Link to="/register">Get Started</Link>
            </FooterLink>
            <FooterLink>Testimonials</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLink>Subscribe</FooterLink>
            <FooterLink>Carrers</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLink>
              {" "}
              <Link to="/signin">Sign In</Link>
            </FooterLink>
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
          <SocialLogo to="/">
            <SocialIcon />
            Devium
          </SocialLogo>
          <WebsiteRights>
            © 2020 Devium | Made with <span role="img">🧡</span> by
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/akash-dutta-au7"
              aria_label="GitHub"
            >
              <span style={{ color: "white" }}>Akash Dutta</span>{" "}
            </a>
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria_label="Facebook">
              <FaFacebook />
            </SocialIconLink>

            <SocialIconLink
              href="https://twitter.com/mernstackdev93"
              target="_blank"
              aria_label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>

            <SocialIconLink
              href="https://www.instagram.com/aaakash.js/"
              target="_blank"
              aria_label="Instagram"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIconLink>

            <SocialIconLink
              href="https://www.linkedin.com/in/akash-dutta-0a4993173/"
              target="_blank"
              aria_label="Linkedin"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
