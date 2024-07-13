import React from "react";
import facebookIcon from "../assets/svg/facebook.svg";
import instagramIcon from "../assets/svg/instagram.svg";
import twitterIcon from "../assets/svg/twitter.svg";
import threadsIcon from "../assets/svg/threads.svg";

const Footer = () => {
  return (
    <div className="w-full bg-font h-80 mt-20">
      <div className="flex justify-between items-center">
        <div>
          <h1>CONNECT</h1>
          <div>
            <p>Business email</p>
            <a href="mailto:urbanoasis@gmail.com">urbanoasis@gmail.com</a>
          </div>
          <div>
            <p>Personal email</p>
            <a href="mailto:elizadoltuofficial@gmail.com">
              elizadoltuofficial@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h1>SOCIAL MEDIA</h1>
          <div>
            <div>
              <img src={facebookIcon} alt="facebook logo" />
              <p>Facebook</p>
            </div>
            <div>
              <img src={twitterIcon} alt="twitter logo" />
              <p>Twitter</p>
            </div>
            <div>
              <img src={instagramIcon} alt="instagram logo" />
              <p>Instagram</p>
            </div>
            <div>
              <img src={threadsIcon} alt="threads logo" />
              <p>Threads</p>
            </div>
          </div>
        </div>
        <div>
          <h1>POLICY</h1>
          <div>
            <div>
              <p>&copy;2024. all rights reserved</p>
              <p>
                elizadoltu <span>TM</span>
              </p>
            </div>
          </div>
          <div>
            <p>terms & conditions</p>
            <p>cookies</p>
            <p>privacy</p>
          </div>
          elizadoltuoff1Urban2Oasis
        </div>
      </div>
    </div>
  );
};

export default Footer;
