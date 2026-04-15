import React, { useState } from "react";
import Images from "../../themes/Images";
import "./signup.css";
import InputText from "../../components/InputText/InputText";

export default function Signup({ setIsSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="login_container">
      <div className="Image_box">
        <img src={Images.catLogin} alt="" className="cat_image" />
      </div>

      <div className="signup_box">
        <h2 className="login_title">Signup</h2>

        <InputText placeholder="Name" value={name} onChange={setName} />
        <InputText placeholder="Email" value={email} onChange={setEmail} />
        <InputText placeholder="Password" value={password} onChange={setPassword} />
        <InputText placeholder="Confirm Password" value={confirmPassword} onChange={setConfirmPassword} />

        <button className="signup_button">Signup</button>

        <div>
          <span className="signup_text">Already have an account? </span>
          <span
            onClick={() => setIsSignup(false)}
            className="signup_link"
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
}

