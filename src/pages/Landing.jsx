import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import navigationPhoto from "../assets/images/landing/navigation-photo.png";
import landingPhoto from "../assets/images/landing/landing-photo.png";
import aboutPhoto1 from "../assets/images/landing/about-photo-1.png";
import aboutPhoto2 from "../assets/images/landing/about-photo-2.png";
import aboutPhoto3 from "../assets/images/landing/about-photo-3.png";
import becomeAMember1 from "../assets/images/landing/become-a-member-1.png";
import becomeAMember2 from "../assets/images/landing/become-a-member-2.png";
import becomeAMember3 from "../assets/images/landing/become-a-member-3.png";
import becomeAMember4 from "../assets/images/landing/become-a-member-4.png";
import officialLogo from "../assets/svg/official-logo.svg";
import facebookIcon from "../assets/svg/facebook.svg";
import instagramIcon from "../assets/svg/instagram.svg";
import twitterIcon from "../assets/svg/twitter.svg";
import threadsIcon from "../assets/svg/threads.svg";
import useScrollToTop from "../custom/hooks/scrollToTop";

const LandingPage = () => {
//   useScrollToTop();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isNavigatingLogin = useRef(false);
  const isNavigatingSignUp = useRef(false);

  const handleLoginButton = async () => {
    if (isNavigatingLogin.current) return;
    isNavigatingLogin.current = true;

    try {
      navigate(`/login`);
    } catch (error) {
      setError("An error occurred. Please try again later");
    } finally {
      isNavigatingLogin.current = false;
    }
  };

  const handleSignupButton = async () => {
    if (isNavigatingSignUp.current) return;
    isNavigatingSignUp.current = true;

    try {
      navigate(`/signup`);
    } catch (error) {
      setError("An error occurred. Please try again later");
    } finally {
      isNavigatingSignUp.current = false;
    }
  };

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="w-full bg-background">
      <div className="h-screen">
        <div className="flex justify-between mt-10 relative z-20">
          <div className="ml-10">
            <img src={officialLogo} alt="official logo urban oasis" />
          </div>
          <div className="flex items-end mr-10">
            <div className="flex flex-col text-right mr-5 text-font font-urbanist font-semibold">
              <a
                href="#about-section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about-section");
                }}
              >
                about
              </a>
              <a
                href="#become-a-member-section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("become-a-member");
                }}
              >
                become a member
              </a>
            </div>
            <div>
              <img src={navigationPhoto} alt="photo with a garden" />
            </div>
          </div>
        </div>

        <div className="-mb-20">
          <h2 className="font-urbanist text-xl font-extralight ml-36">
            Green lifestyle
          </h2>
        </div>
        <div className="flex items-center -ml-11 relative z-10">
          <h1 className="font-montage text-250xl">BREATHE LIFE</h1>
          <div className="w-2/4 h-1px bg-font opacity-50"></div>
        </div>
        <div className="-mt-36">
          <div>
            <h1 className="font-montage text-250xl">
              INTO <span className="ml-36">YOUR CITY</span>{" "}
              <span className="font-urbanist text-xl -ml-12 font-extralight">
                Healthy Living
              </span>
            </h1>
          </div>
          <div className="flex items-end absolute -mt-96 ml-64">
            <div>
              <img src={landingPhoto} alt="photo with a green space" />
            </div>
            <div>
              <h2 className="font-urbanist text-xl ml-2 font-extralight">
                Urban Oasis
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center rotate-90">
            <div>
              <p className="font-urbanist text-sm">scroll for more</p>
            </div>
            <div className="h-1px w-10 bg-font ml-2 opacity-30"></div>
          </div>
        </div>
      </div>
      <div id="about-section" className="w-full h-auto">
        <div className="h-1px bg-font opacity-30"></div>
        <div className="flex flex-col">
          <div className="flex justify-end">
            <h1 className="font-montage text-250xl -mr-10">
              ABOUT URBAN OASIS
            </h1>
          </div>
          <div className="flex items-end justify-end -mt-40 -mr-5">
            <div>
              <p className="font-urbanist mr-2 text-lg font-semibold">
                our mission
              </p>
            </div>
            <div className="mr-5">
              <img src={aboutPhoto1} alt="green space 1" />
            </div>
            <div className="mr-5">
              <img src={aboutPhoto2} alt="green space 2" />
            </div>
            <div>
              <img src={aboutPhoto3} alt="green space 3" />
            </div>
          </div>
        </div>
        <div className="text-left font-urbanist font-semibold text-5xl w-900 mt-36 ml-48">
          <p>
            Urban Oasis is a vibrant community platform dedicated to greening
            urban spaces, sharing gardening tips, and inspiring community
            stories. Join us in fostering a greener, more sustainable urban
            environment!
          </p>
        </div>
      </div>
      <div id="become-a-member" className="w-full h-screen">
        <div className="h-1px bg-font opacity-30 mt-28"></div>
        <div className="flex justify-evenly items-center mt-28">
          <div className="flex items-center">
            <div className="mr-5">
              <img src={becomeAMember1} alt="garden photo 1" />
            </div>
            <div>
              <img src={becomeAMember2} alt="garden photo 2" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="font-montage text-8xl">BECOME A MEMBER</h1>
            </div>
            <div className="text-center font-urbanist text-3xl mt-20">
              <div>
                <p onClick={() => handleLoginButton()}>Login</p>
              </div>
              <div className="mt-6">
                <p onClick={() => handleSignupButton()}>Create an account</p>

              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-5">
              <img src={becomeAMember3} alt="garden photo 3" />
            </div>
            <div>
              <img src={becomeAMember4} alt="garden photo 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
