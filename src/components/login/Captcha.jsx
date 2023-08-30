import React, { useState } from 'react';
import "./Captcha.css"
import { ArrowPathIcon } from '@heroicons/react/24/solid'


const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const Captcha = ({ onCaptchaVerified  , isCaptchaVerified }) => {
    const [captchaText, setCaptchaText] = useState(generateRandomString(6));
    const [enteredCaptchaText, setEnteredCaptchaText] = useState("");



    const handleRefresh = () => {
        setCaptchaText(generateRandomString(6));
    };

    const handleVerify = (e) => {
        e.preventDefault();
        
        if ( captchaText === enteredCaptchaText) {
            onCaptchaVerified()
        } else {
            alert("Enter Correct Captcha")
           handleRefresh()
        }
    };

    return (
        <div className='captcha'>
            <div>Captcha</div>
            <div>
                <span className='captcha_text'>{captchaText}</span>
                <ArrowPathIcon onClick={handleRefresh} className='refresh'/>
            </div>
            <form onSubmit={(e) => handleVerify(e)}>
                <input type="text" onChange={(e) => setEnteredCaptchaText(e.target.value)} className='input' />
            </form>
        </div>
    );
};

export default Captcha;
