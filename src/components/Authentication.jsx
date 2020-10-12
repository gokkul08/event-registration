import React, { useContext } from 'react';
import SignIn from "./SignIn";
import FormsContainer from './FormsContainer';
import { UserContext } from "../providers/UserProvider";

const Authentication = ({ loading }) => {
    const user = useContext(UserContext);
    if (loading) return null;

    return <div>{user ? <FormsContainer {...user} /> : <SignIn />}</div>;
};

export default Authentication;
