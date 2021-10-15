import React, {Component} from 'react';
import {auth, createUserProfileDocument} from '../firebase';
import {Link} from 'react-router-dom';
import Welcome from "./Welcome";

class SignUp extends Component {
    state = {displayName: '', email: '', password: '', alreadyRegistered: false, hasError: false,};

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password, displayName} = this.state;

        try {
            this.setState({alreadyRegistered: false});
            this.setState({hasError: false});
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            .catch(error => {   
                console.log(error);
                switch(error.code) {
                    case 'auth/email-already-in-use':
                        this.setState({ alreadyRegistered: true});
                        break;
                    default:
                        this.setState({ hasError: true});
                        break;
               }
             });

            await createUserProfileDocument(user, {displayName});
        } catch (error) {
            console.error(error);
        }

        console.log(this.state.alreadyRegistered);
        console.log(this.state.hasError);
        this.setState({displayName: '', email: '', password: ''});
        if (!this.state.alreadyRegistered && !this.state.hasError) {
            this.props.history.push('/');
        }
        
    };

    render() {
        const {displayName, email, password, alreadyRegistered, hasError} = this.state;
        return (
            <div className="form-group">
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <Welcome/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <div className="jumbotron sign">
                            <form className="container text-center sign-in" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <div className="form-row request">
                                        Please register:
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="displayName"
                                                placeholder="Display Name"
                                                value={displayName}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
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
                                            {alreadyRegistered && <span className="icon-padding"><i className="material-icons">error_outline</i><label className="forgot password">The email address is already in use. Please sign in</label></span>}
                                            {hasError && <span className="icon-padding"><i className="material-icons">error_outline</i><label className="forgot password">There was an error trying to Register your account.</label></span>}
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input type="submit" className="btn btn-primary btn-lg sign-up" value="REGISTER"/>
                                        </div>
                                    </div>
                                    <hr className="line-break"/>
                                    <div className="account">Already have an account?&nbsp;
                                        <Link to="/">
                                            <span className="register text-decoration-none">SIGN IN</span>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
