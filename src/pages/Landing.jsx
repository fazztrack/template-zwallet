import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero.svg";
import phoneImg from "../assets/phone.svg";
import aboutPhoneImg from "../assets/about-phone.svg";
import aboutLockImg from "../assets/about-lock.svg";
import aboutDownloadImg from "../assets/about-download.svg";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="wrap-content">
        <section className="landing-hero">
          <div className="container">
            <img src={heroImg} alt="" className="landing-hero-img" />
            <img src={phoneImg} alt="" className="landing-phone-img" />
            <div className="landing-jumbotroon">
              <h1 className="landing-jumbotroon-h1">
                Awesome App For Saving <span>Time.</span>
              </h1>
              <p className="landing-jumbotroon-p">
                We bring you a mobile app for banking problems that oftenly wasting
                much of your times.
              </p>
              <Link to="/dashboard" className="landing-action landing-action-try">
                Try It Free
              </Link>
            </div>
          </div>
        </section>
        <section className="landing-about">
          <div className="container">
            <h1 className="landing-about-h1">
              <span>About</span> the Application
            </h1>
            <div className="d-flex justify-content-center">
              <p className="landing-about-p">We have some great features from the application and it’s totally free to use by all users around the world.</p>
            </div>
            <div className="mt-5">
              <div className="row">
                <div className="col-12 col-md-4 p-2">
                  <div className="card-about">
                    <img src={aboutPhoneImg} className="about-icon" alt="" />
                    <h1 className="card-about-h1">24/7 Support</h1>
                    <p className="card-about-p">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                  </div>
                </div>
                <div className="col-12 col-md-4 p-2">
                  <div className="card-about">
                    <img src={aboutLockImg} className="about-icon" alt="" />
                    <h1 className="card-about-h1">Data Privacy</h1>
                    <p className="card-about-p">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                  </div>
                </div>
                <div className="col-12 col-md-4 p-2">
                  <div className="card-about">
                    <img src={aboutDownloadImg} className="about-icon" alt="" />
                    <h1 className="card-about-h1">Easy Download</h1>
                    <p className="card-about-p">Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
