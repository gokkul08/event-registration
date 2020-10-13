import React, { useContext } from 'react';
import SignIn from "./SignIn";
import FormsContainer from './FormsContainer';
import { UserContext } from "../providers/UserProvider";

const Authentication = () => {
    const user = useContext(UserContext);

    return <div>{user ? <FormsContainer {...user} /> : <SignIn />}</div>;
};

export default Authentication;
