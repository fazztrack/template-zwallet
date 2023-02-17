import React from "react";
import loginPhoneImg from "../assets/login-phone.svg"
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="content-auth">
      <div className="left-side">
        <div className="container">
          <Link to="/" className="text-decoration-none"><h1>Zwallet</h1></Link>
          <div className="left-side-content">
            <img src={loginPhoneImg} alt="" srcSet="" />
            <h1>App that Covering Banking Needs.</h1>
            <p>
              Zwallet is an application that focussing in banking needs for all users
              in the world. Always updated and always following world trends.
              5000+ users registered in Zwallet everyday with worldwide
              users coverage.
            </p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <h1>
          Start Accessing Banking Needs
          With All Devices and All Platforms
          With 30.000+ Users
        </h1>
        <p>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" className="form-control" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className="form-control" placeholder="Enter your e-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" className="form-control" placeholder="Enter your password" />
          </div>
          <div className="form-group mt-5">
            <button className="btn btn-primary btn-full">Sign Up</button>
          </div>
          <div className="form-group">
            <p className="text-center w-100">Already have an account? Let’s <Link to="/login" className="text-decoration-none">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};
