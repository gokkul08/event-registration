import React from "react";
import {  signOut } from "../firebase";
import close from "../images/close.png";

const ThankYou = (props) => {

    const handleSignOut = async () => {
        await signOut();
        props.history.push('/');
    };

    return (
        <div>
            <div className="jumbotron">
                <div className="welcome">Thank you</div>
                <br /><br />
                <div className="form-group mobile">
                    <div className="form-row thank-you">
                        Thank you for registering for the IAC Annual Planning Meeting. Kindly check your email for your confirmation. We will be sending more information about the agenda and activities soon
                    </div>
                    <br/>
                    <div className="form-row thank-you">
                        <span>If you have any questions or concerns please contact Marites Gonzales in the IAC Events Department at <a href="mailto: APM2020@iac.com">APM2020@iac.com</a></span>
                    </div>
                    <br />
                    <div className="form-row thank-you">
                        <span>Click&nbsp;<a href="./faq" target="_blank" rel="noopener noreferrer">here</a>&nbsp;for frequently asked questions and COVID related information.</span>
                    </div>
                </div>
                <div className="bottom">
                    <hr className="breaker" />
                    <div className="btn sign-out float-left move-top"
                         onClick={handleSignOut}>
                        <img src={close} alt="sign out"/>&nbsp;SIGN OUT
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ThankYou;
