import React from "react";
import { useState } from "react";
import './authMain.css';
import Template from "../../layout/Template";
import Signup from "../signup/Signup";
import Login from "../login/Login";
import ForgotPasswordModal from "../forgotPassword/ForgotPasswordModal";


export default function AuthMain() {


    const [isSignup, setIsSignup] = useState(false);
    const [showForgotModal, setShowForgotModal] = useState(false);
    return (
        <Template>
            {
                isSignup ?
                    <Signup setIsSignup={setIsSignup} />

                    :
                    <Login setIsSignup={setIsSignup}
                        showForgotModal={showForgotModal}
                        setShowForgotModal={setShowForgotModal} />

            }

                {showForgotModal && <ForgotPasswordModal setShowForgotModal={setShowForgotModal} />} 
        </Template>
    );
}
