import React from 'react'
import "./Email.css";
import { AiOutlineTwitter, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
const Email = () => {
    return (
        <div className="Email_header">
            <div className="main" />
            <div className="Email_header-hede">

                <div className="Email_header-title" >
                    <h1 >Welcome !</h1>
                    <p>we are excited to have you get started First.You need to confirm your account,just press the button below.</p>
                </div>
                <div className="Email_header-button">
                    <button type="button">Confirm Account</button>
                </div>

            </div>
            <div className="Email_header-footer">
                <h3>Stay in touch</h3>
                <div className="Email_header-icon">
                    <div >

                        <AiOutlineTwitter color="blue" size="30px" />
                    </div>
                    <div>

                        <AiOutlineGithub size="30px" />
                    </div>
                    <div>

                        <AiFillLinkedin color="midnightblue" size="30px" />
                    </div>
                </div>

                <p>
                    Copyright © 2021 - imagecolorpicker.com | V: rcxvqZGrm7X3jAISxjRLy | Privacy Policy | Imprint
                </p>
            </div>


        </div>
    )
}

export default Email;
