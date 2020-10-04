import React from "react";
import "./index.css";
import {
  FaFacebook,
  FaLinkedinIn,
  FaStackOverflow,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
// : { twitter, facebook, linkedin, youtube, stackOverflow, instagram }
const Social = ({ social }) => {
  return (
    <div className="social-icons">
      {social && social.twitter ? (
        <div>
          <a href={social.twitter} target="blank">
            {" "}
            <FaTwitter size={25} color="#00acee" />
          </a>
        </div>
      ) : null}
      {social && social.linkedin ? (
        <div>
          <a href={social.linkedin} target="blank">
            {" "}
            <FaLinkedinIn size={25} color="#0e76a8" />
          </a>
        </div>
      ) : null}
      {social && social.youtube ? (
        <div>
          <a href={social.youtube} target="blank">
            {" "}
            <FaGithub size={25} color="black" />
          </a>
        </div>
      ) : null}
      {social && social.facebook ? (
        <div>
          <a href={social.facebook} target="blank">
            {" "}
            <FaFacebook size={25} color="#4267B2" />
          </a>
        </div>
      ) : null}
      {social && social.instagram ? (
        <div>
          <a href={social.instagram} target="blank">
            {" "}
            <FaInstagram size={25} color="#dd2a7b" />
          </a>
        </div>
      ) : null}
      {social && social.stackOverflow ? (
        <div>
          <a href={social.stackOverflow} target="blank">
            {" "}
            <FaStackOverflow size={25} color="#f48024" />
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Social;
