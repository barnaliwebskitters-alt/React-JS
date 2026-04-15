import React from "react";
import "./login.css";
import { useState } from "react";
import InputText from "../../components/InputText/InputText";
import Images from "../../themes/Images";


export default function Login({ setIsSignup, showForgotModal, setShowForgotModal }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <div className="login_container">
            <div className="Image_box">
                <img src={Images.catLogin} alt="" className="cat_image" />
            </div>

            <div className="login_box">
                <h2 className="login_title">Login</h2>
                <InputText placeholder="Email" value={email} onChange={(val) => setEmail(val)} />
                <InputText placeholder="Password" value={password} onChange={(val) => setPassword(val)} />
                <div style={{ justifyContent: 'flex-end', display: 'flex', width: '100%', marginBottom: '20px' }}>
                    <span

                        onClick={() => setShowForgotModal(true)}
                        className="forgot_password">Forgot Password?</span>
                </div>
                <button className="login_button" >Login</button>
                <div>
                    <span className="signup_text">Don't have an account? </span>
                    <span
                        onClick={() => setIsSignup(true)}
                        style={{
                            color: '#4da6ff',
                            cursor: 'pointer'
                        }}
                    >
                        Signup
                    </span>
                </div>
            </div>


        </div>

    );
}
