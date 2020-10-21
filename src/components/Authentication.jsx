import React, { useContext } from 'react';
import SignIn from "./SignIn";
import Admin from "./Admin";
import FormsContainer from './FormsContainer';
import { UserContext } from "../providers/UserProvider";

const Authentication = () => {
    const user = useContext(UserContext);
    if (user && (user.email === 'iacapmevents@gmail.com' || user.email === 'APM2020@iac.com')) {
        return <div><Admin /></div>
    }
    return <div>{user ? <FormsContainer {...user} /> : <SignIn />}</div>;
};

export default Authentication;
