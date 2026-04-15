import React, { useState } from "react";
import InputText from "../../components/InputText/InputText";
import './forgotpassword.css'

export default function ForgotPasswordModal({ setShowForgotModal }) {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // if ( !newPassword || !confirmPassword) {
    //   alert("Please fill all fields");
    //   return;
    // }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // 👉 API call here
    console.log("Reset password:", { email, newPassword });

    setShowForgotModal(false);
  };

  return (
    <div
      className="modal_overlay"
      onClick={() => setShowForgotModal(false)}
    >
      <div
        className="modal_box"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="modal_title">Reset Password</h2>

        <InputText
          placeholder="Enter Email"
          value={email}
          onChange={(val) => setEmail(val)}
        />

        <InputText
          placeholder="New Password"
          value={newPassword}
          onChange={(val) => setNewPassword(val)}
        />

        <InputText
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(val) => setConfirmPassword(val)}
        />

        <button className="login_button" onClick={handleSubmit}>
          Update Password
        </button>

        <span
          className="close_modal"
          onClick={() => setShowForgotModal(false)}
        >
          Cancel
        </span>
      </div>
    </div>
  );
}