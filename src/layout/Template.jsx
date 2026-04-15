import React from 'react'
import "./layout.css"
import Images from '../themes/Images';

function Template({ children }) {
    return (
        <div className='template'>
            <div className='auth_body'
                style={{
                    backgroundImage: `url(${Images.loginback})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>

                {children}
            </div>
        </div>
    )
}

export default Template;
