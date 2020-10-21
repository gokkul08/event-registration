import React, {Component} from 'react';
import {auth} from '../firebase';
import {Link} from 'react-router-dom';
import Welcome from "./Welcome";

class ForgotPassword extends Component {
    state = {email: '', emailSent: false,};

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = async event => {
        event.preventDefault();
        const {email} = this.state;

        try {
            await auth.sendPasswordResetEmail(email);
            this.setState({emailSent: true});
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        const {email, emailSent} = this.state;
        return (
            <div>
                <Welcome/>
                <div className="jumbotron sign">
                    <form className="container text-center sign-in" onSubmit={this.handleSubmit}>
                        { !emailSent &&
                            <div>
                                <div className="form-group">
                                    <div className="form-row request">
                                        Reset your password:
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="submit" className="btn btn-primary btn-lg sign-up"
                                               value="Reset Password"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <Link to="/">
                                            <label className="forgot cancel">Cancel</label>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        }
                        { emailSent &&
                        <div>
                            <div className="form-group">
                                <div className="form-row request">
                                    Thank you
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="form-group col-md-12 reset text-left">
                                        <p>Check {email} for the link to reset your password</p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Link to="/">
                                        <button className="btn btn-primary btn-lg sign-up">
                                            SIGN IN
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        }
                        {/*{emailSent &&*/}
                        {/*<div>*/}
                        {/*    <hr className="line-break"/>*/}
                        {/*    <div className="account">Verification email sent. Verify and &nbsp;*/}
                        {/*        <Link to="/">*/}
                        {/*            <span className="register text-decoration-none">Sign In</span>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*}*/}

                    </form>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;
