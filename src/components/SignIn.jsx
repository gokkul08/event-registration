import React, {Component} from 'react';
import { auth, createUserProfileDocument } from '../firebase';
import Welcome from "./Welcome";
import { Link } from 'react-router-dom';

class SignIn extends Component {
    state = { email: '', password: '', forgotPassword: false, };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);

            createUserProfileDocument(user);
        } catch (error) {
            this.setState({ forgotPassword: true });
            console.error(error);
        }

        this.setState({ email: '', password: '' });
    };

    handlePasswordReset = () => {
      console.log(this.state);
    };

    render() {
        const { email, password, forgotPassword } = this.state;
        return (
            <div>
            <Welcome/>
            <div className="jumbotron sign">
                <form className="container text-center sign-in" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="form-row request">
                            Please sign in:
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
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={this.handleChange}
                                />
                                {forgotPassword && <label className="forgot text-danger">Wrong Password!</label>}
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="submit" className="btn btn-primary btn-lg sign-up" value="SIGN IN"/>
                        </div>
                        <div className="form-group col-md-6">
                            <Link to="/forgotpassword">
                                <label className="forgot" onClick={this.handlePasswordReset}>Forgot Password?</label>
                            </Link>
                        </div>
                    </div>
                    <hr className="line-break"/>
                    <div className="account">Don't have an account?
                        <Link to="/signup">
                             <span className="register text-decoration-none"> Register Now</span>
                        </Link>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default SignIn;
