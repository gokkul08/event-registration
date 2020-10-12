import React, { useState, useContext, useEffect } from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { firestore, auth, signOut } from "../firebase";
import { ResponsesContext } from '../providers/ResponsesProvider';

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
        stateUS: "",
        zipCode: "",
        executiveAsstName: "",
        executiveAsstEmail: "",
        executiveAsstOfficePhone: "",
        executiveAsstMobilePhone: "",
        emergencyContactName: "",
        emergencyContactNumber: "",
        specialDiet: "",
        specialNeeds: "",
        jacketSize: "Women's - Extra Small",
        originAndDestination: "Yes",
        commercialOrPrivate: "Commercial",
        arrivalDateTime: "",
        departureDateTime: "",
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
    }, [userExists]);

    const handleChange = event => {
        const {name, value} = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = event => {
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
            emergencyContactNumber,
            specialDiet,
            specialNeeds,
            jacketSize,
            originAndDestination,
            commercialOrPrivate,
            arrivalDateTime,
            departureDateTime,
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
            emergencyContactNumber,
            specialDiet,
            specialNeeds,
            jacketSize,
            originAndDestination,
            commercialOrPrivate,
            arrivalDateTime,
            departureDateTime,
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
                    className="btn btn-secondary float-right previous"
                    type="button" onClick={_prev}>
                    Previous
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
                    className="btn btn-primary float-right"
                    type="button" onClick={_next}>
                    Next
                </button>
            )
        }
        return null;
    };

    return (
        <div className="jumbotron">
            <div className="text-center welcome">Welcome {displayName}</div>
            <form onSubmit={handleSubmit}>
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
            <button className="btn btn-danger" onClick={signOut}>Sign Out</button>
        </div>
    );
};

export default FormsContainer;
