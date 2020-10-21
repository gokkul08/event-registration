import React, { useState, useContext, useEffect } from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { firestore, auth, signOut } from "../firebase";
import { ResponsesContext } from '../providers/ResponsesProvider';
import { Route } from 'react-router-dom';
import arrowForward from '../images/arrow_forward.png'
import arrowBack from '../images/arrow_back.png';
import close from '../images/close.png'

const FormsContainer = (props) => {
    const responses = useContext(ResponsesContext);
    const {displayName} = props;
    const [state, setFormState] = useState({
        firstName: "",
        lastName: "",
        company: "",
        title: "",
        officePhone: "",
        mobilePhone: "",
        emailAddress: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        stateUS: "State",
        zipCode: "",
        executiveAsstName: "",
        executiveAsstEmail: "",
        executiveAsstOfficePhone: "",
        executiveAsstMobilePhone: "",
        emergencyContactName: "",
        emergencyEmail: "",
        emergencyContactNumber: "",
        specialDiet: "",
        specialNeeds: "",
        jacketSize: "Women's - Extra Small",
        originAndDestination: "Yes",
        commercialOrPrivate: "Commercial",
        arrivalDate: "",
        departureDate: "",
        arrivalTime: "",
        departureTime: "",
        arrivalAirport: "",
        departureAirport: "",
        arrivalFlight: "",
        departureFlight: "",
        arrivalAirline: "",
        departureAirline: "",
        origin: "",
        destination: "",
        arrivalInfo: "",
        departureInfo: "",
    });

    const [step, setStep] = useState(1);

    const userExists = responses.some(response => response.id === auth.currentUser.uid);
    const storedUserResponse = responses.find(response => response.id === auth.currentUser.uid);

    useEffect(() => {
        if (userExists) {
            setFormState({...state, ...storedUserResponse});
        }
        // eslint-disable-next-line
    }, [userExists]);

    const handleChange = event => {
        const {name, value} = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = history => event => {
        event.preventDefault();
        const { uid, displayName, email } = auth.currentUser;

        const {
            firstName,
            lastName,
            company,
            title,
            officePhone,
            mobilePhone,
            emailAddress,
            addressLine1,
            addressLine2,
            city,
            stateUS,
            zipCode,
            executiveAsstName,
            executiveAsstEmail,
            executiveAsstOfficePhone,
            executiveAsstMobilePhone,
            emergencyContactName,
            emergencyEmail,
            emergencyContactNumber,
            specialDiet,
            specialNeeds,
            jacketSize,
            originAndDestination,
            commercialOrPrivate,
            arrivalDate,
            departureDate,
            arrivalTime,
            departureTime,
            arrivalAirport,
            departureAirport,
            arrivalFlight,
            departureFlight,
            arrivalAirline,
            departureAirline,
            origin,
            destination,
            arrivalInfo,
            departureInfo,
        } = state;

        const response = {
            id: uid,
            createdAt: new Date(),
            firstName,
            lastName,
            company,
            title,
            officePhone,
            mobilePhone,
            emailAddress,
            addressLine1,
            addressLine2,
            city,
            stateUS,
            zipCode,
            executiveAsstName,
            executiveAsstEmail,
            executiveAsstOfficePhone,
            executiveAsstMobilePhone,
            emergencyContactName,
            emergencyEmail,
            emergencyContactNumber,
            specialDiet,
            specialNeeds,
            jacketSize,
            originAndDestination,
            commercialOrPrivate,
            arrivalDate,
            departureDate,
            arrivalTime,
            departureTime,
            arrivalAirport,
            departureAirport,
            arrivalFlight,
            departureFlight,
            arrivalAirline,
            departureAirline,
            origin,
            destination,
            arrivalInfo,
            departureInfo,
            user: {
                uid,
                displayName,
                email,
            }
        };

        firestore.collection('responses').doc(response.id).set(response);
        history.history.push({
            pathname: '/thankyou',
            search: `?confirm=${email}`
        });
    };

    const _next = () => {
        let currentStep = step;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        setStep(currentStep);
    };

    const _prev = () => {
        let currentStep = step;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        setStep(currentStep);
    };

    const previousButton = () => {
        let currentStep = step;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary float-right previous button-style"
                    type="button" onClick={_prev}>
                    <img src={arrowBack} alt="backward-arrow" />&nbsp;Previous
                </button>
            )
        }
        return null;
    };

    const nextButton = () => {
        let currentStep = step;
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-warning float-right next button-style"
                    type="button" onClick={_next}>
                    Next&nbsp;<img src={arrowForward} alt="forward-arrow" />
                </button>
            )
        }
        return null;
    };

    return (
        <div className="jumbotron">
            <span className="step">{step} / 3</span>
            <div className="welcome">Welcome {displayName}</div>
            <Route render={(history) => (
                <form onSubmit={handleSubmit(history)}>
                    <Step1
                        currentStep={step}
                        handleChange={handleChange}
                        value={state}
                    />
                    <Step2
                        currentStep={step}
                        handleChange={handleChange}
                        value={state}
                    />
                    <Step3
                        currentStep={step}
                        handleChange={handleChange}
                        value={state}
                    />
                    {nextButton()}
                    {previousButton()}
                </form>
            )} />
            <div className="btn sign-out"
                 onClick={signOut}>
                <img src={close} alt="close"/>&nbsp;SIGN OUT
            </div>
        </div>
    );
};

export default FormsContainer;
