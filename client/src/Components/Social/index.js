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
const Social = ({
  social: { twitter, facebook, linkedin, youtube, stackOverflow, instagram },
}) => {
  return (
    <div className="social-icons">
      {twitter ? (
        <div>
          <a href={twitter} target="blank">
            {" "}
            <FaTwitter size={25} color="#00acee" />
          </a>
        </div>
      ) : null}
      {linkedin ? (
        <div>
          <a href={linkedin} target="blank">
            {" "}
            <FaLinkedinIn size={25} color="#0e76a8" />
          </a>
        </div>
      ) : null}
      {youtube ? (
        <div>
          <a href={youtube} target="blank">
            {" "}
            <FaGithub size={25} color="black" />
          </a>
        </div>
      ) : null}
      {facebook ? (
        <div>
          <a href={facebook} target="blank">
            {" "}
            <FaFacebook size={25} color="#4267B2" />
          </a>
        </div>
      ) : null}
      {instagram ? (
        <div>
          <a href={instagram} target="blank">
            {" "}
            <FaInstagram size={25} color="#dd2a7b" />
          </a>
        </div>
      ) : null}
      {stackOverflow ? (
        <div>
          <a href={stackOverflow} target="blank">
            {" "}
            <FaStackOverflow size={25} color="#f48024" />
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Social;
