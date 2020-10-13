import React, {Component} from 'react';
import { auth, createUserProfileDocument, signInWithGoogle } from '../firebase';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    state = { displayName: '', email: '', password: '' };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password, displayName } = this.state;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
        } catch (error) {
            console.error(error);
        }

        this.setState({ displayName: '', email: '', password: '' });
        this.props.history.push('/');
    };

    render() {
        const { displayName, email, password } = this.state;
        return (
            <div className="jumbotron bg-transparent">
                <form className="container text-center sign-in" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="displayName"
                                    placeholder="Display Name"
                                    value={displayName}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group col-md-6">
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
                            </div>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary btn-lg sign-up" value="Register"/>
                    <Link to="/">
                        <button className="btn btn-secondary btn-lg sign-up" onClick={signInWithGoogle}>Register With Google</button>
                        <button className="btn btn-outline-light btn-sm">Sign In</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default SignUp;
