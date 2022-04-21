import React, { useState } from "react";
import "./login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { auth, provider } from "../../Firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  
const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <h3>PUBLIC EXCHANGE</h3>
        </div>
        <div className="login__desc">

          <p>A Place to Share knowledge and better understand the world</p>
          
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={handleSubmit}>Continue With Google</p>
            </div>

            
            
        
            
            
        
        <div className="login__footer">
          <p>About</p>
          <p>Languages</p>
          <p>Careers</p>
          <p>Businesses</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>&copy; Public Exchange Fake Inc. 2022</p>
          </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Login;