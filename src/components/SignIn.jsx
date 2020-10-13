import React, {Component} from 'react';
import { auth, createUserProfileDocument, signInWithGoogle } from '../firebase';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    state = { email: '', password: '', forgotPassword: false, };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password, forgotPassword } = this.state;

        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);

            createUserProfileDocument(user);
        } catch (error) {
            this.setState({ forgotPassword: true });
            console.error(error);
        }

        this.setState({ email: '', password: '' });
    };

    render() {
        const { email, password, forgotPassword } = this.state;
        return (
            <div className="jumbotron bg-transparent">
                <form className="container text-center sign-in" onSubmit={this.handleSubmit}>
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
                                {forgotPassword && <label className="forgot text-danger">Forgot Password - Click here!</label>}
                            </div>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary btn-lg sign-up" value="Sign In"/>
                    <button className="btn btn-secondary btn-lg sign-up" onClick={signInWithGoogle}>Sign In With Google</button>
                    <Link to="/signup">
                        <button className="btn btn-outline-light btn-sm">Click here to Register!</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default SignIn;