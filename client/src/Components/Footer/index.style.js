import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const FooterContainer = styled.div`
  background-color: black;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #fff;
`;

export const FooterSubHeading = styled.p`
  font-family: serif;
  margin-bottom: 1.5rem;
  font-size: 2rem;
`;

export const FooterSubText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100px;
  }
`;

export const FooterLinkTitle = styled.div`
  margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.8rem;
  cursor: pointer;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 62rem;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  max-width: 62rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.5rem auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 1rem;
`;
