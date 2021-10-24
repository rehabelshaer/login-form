import React, { Component } from "react";
import "./style.css";
import undraw from "../images/undraw.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import axios from "axios";

const Login = ()=>{ 

    return (
      <div className="container">
        <div className="form-container">

        <div className="signin">
          <form>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              {/* <FontAwesomeIcon className="user" icon="user"/> */}
              <input type="email" placeholder="Email"/>
            </div>
            <div className="input-field">
              {/* <FontAwesomeIcon className="lock" icon="lock"/> */}
              <input type="password" placeholder="Password" />
            </div>
            <div className="button">

            <button type="submit" value="Login">Login</button>

            </div>
            <p className="social-text">Or Sign in with social media</p>
            <div className="social-media">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
              <a href="#" className="social-icon">
              <FontAwesomeIcon icon={["fab", "microsoft"]} />
               </a>
              <a href="#" className="social-icon">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a href="#" className="social-icon">
              <FontAwesomeIcon icon={["fab", "apple"]} />
              </a>
            </div>

          </form>
         </div> 

        </div>

      <div className="photos-container">
      <div className="photos">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Welcome To Our Websites Enjoy with our features..
            </p>
          </div>
         <div className="my-image"> 
            <img src={undraw} className="image" alt="" /> 
        </div>
      </div>
      </div>

  </div>  
     
    );
}
export default Login;