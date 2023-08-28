import React, { useState } from 'react';
import "./Captcha.css"

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
        console.log(captchaText,enteredCaptchaText);
        if ( captchaText === enteredCaptchaText) {
            onCaptchaVerified()
        } else {
            alert("Enter Correct Captcha")
           handleRefresh()
        }
    };

    return (
        <div className='captcha'>
            <div>Captcha Code:</div>
            <div>
                <span className='captcha_text'>{captchaText}</span>
                <button onClick={handleRefresh} className='refresh' >Refresh</button>
            </div>
            <form onSubmit={(e) => handleVerify(e)}>
                <input type="text" onChange={(e) => setEnteredCaptchaText(e.target.value)} className='input'/>
                {
                    !isCaptchaVerified ? <button type="submit" className='verify'>Verify</button> : <button type="submit" className='verified'>Verified</button>
                }
            </form>
        </div>
    );
};

export default Captcha;
