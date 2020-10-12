import React, {Component} from 'react';
import {signInWithGoogle} from '../firebase';

class SignIn extends Component {

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="jumbotron">
                <form className="container text-center sign-in" onSubmit={this.handleSubmit}>
                    <button className="btn btn-success btn-lg" onClick={signInWithGoogle}>Authenticate</button>
                </form>
            </div>
        );
    }
}

export default SignIn;
