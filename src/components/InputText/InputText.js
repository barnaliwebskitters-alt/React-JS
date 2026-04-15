import React from 'react'
import "./inputText.css"

function InputText({ placeholder, value, onChange }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange()}
        placeholder={placeholder}
        className="login_input"
      />


    </div>
  )
}

export default InputText;
