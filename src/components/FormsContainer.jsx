import React, {useState, useContext, useEffect} from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import {firestore, auth, signOut} from "../firebase";
import {ResponsesContext} from '../providers/ResponsesProvider';
import {Route} from 'react-router-dom';
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
        jacketSize: "Choose size",
        commercialOrPrivate: "Choose option",
        privateAirport: "Choose airport",
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

    const [error, setError] = useState([]);

    const [step, setStep] = useState(1);

    const userExists = responses.some(response => response.id === auth.currentUser.uid);
    const storedUserResponse = responses.find(response => response.id === auth.currentUser.uid);

    useEffect(() => {
        if (userExists) {
            setFormState({...state, ...storedUserResponse});
        }
        // eslint-disable-next-line
    }, [userExists]);

    const handlePhoneInput = (value, previousValue) => {
        if (!value) return value;
        const currentValue = value.replace(/[^\d]/g, '');
        const cvLength = currentValue.length;

        if (!previousValue || value.length > previousValue.length) {
            if (cvLength < 4) return currentValue;
            if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
            return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
        }
    };

    const handleChange = event => {
        const {name, value} = event.target;
        if (name === 'officePhone' || name === 'mobilePhone' || name === 'executiveAsstOfficePhone' || name === 'executiveAsstMobilePhone' || name === 'emergencyContactNumber') {
            setFormState(prevState => ({
                ...prevState,
                [name]: handlePhoneInput(value, prevState[name])
            }));
        } else {
            setFormState(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const hasError = key => {
        return error.indexOf(key) !== -1;
    };

    const handleSubmit = history => event => {
        event.preventDefault();
        const {uid, displayName, email} = auth.currentUser;

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
            commercialOrPrivate,
            privateAirport,
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

        let submitErrors = [];

        // Flight Dropdown Validation
        if(commercialOrPrivate === 'Choose option') {
            submitErrors.push("commercialOrPrivate");
        }

        //Private Airport Validation
        if(commercialOrPrivate === 'Private' && privateAirport === 'Choose airport') {
            submitErrors.push("privateAirport");
        }

        setError(submitErrors);

        if (submitErrors.length === 0) {
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
                commercialOrPrivate,
                privateAirport,
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
        }
    };

    const _next = () => {
        const {
            firstName,
            lastName,
            mobilePhone,
            emailAddress,
            stateUS,
            executiveAsstName,
            executiveAsstEmail,
            executiveAsstMobilePhone,
            emergencyContactName,
            emergencyEmail,
            emergencyContactNumber,
            jacketSize,
        } = state;

        let errors = [];
        const expression = /\S+@\S+/;
        const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        if(step === 1) {
            // First Name
            if (firstName === '') {
                errors.push('firstName');
            }

            // Last Name
            if (lastName === '') {
                errors.push('lastName');
            }

            // Personal Email
            let validEmail = expression.test(String(emailAddress).toLowerCase());

            if (!validEmail) {
                errors.push("emailAddress");
            }

            // Mobile Phone
            let validMobile = mobilePhone.match(phoneno);

            if (!validMobile) {
                errors.push("mobilePhone");
            }

            // State Dropdown
            if(stateUS === 'State') {
                errors.push("stateUS");
            }
        }

        if(step === 2) {
            // Executive Assistant Name
            if (executiveAsstName === '') {
                errors.push('executiveAsstName');
            }

            // Executive Assistant Mobile
            let validAssistantMobile = executiveAsstMobilePhone.match(phoneno);
            if (!validAssistantMobile) {
                errors.push("executiveAsstMobilePhone");
            }

            // Executive Assistant Email
            let validAssistantEmail = expression.test(String(executiveAsstEmail).toLowerCase());

            if (!validAssistantEmail) {
                errors.push("executiveAsstEmail");
            }

            // Emergency Name
            if (emergencyContactName === '') {
                errors.push('emergencyContactName');
            }

            // Emergency Mobile
            let validEmergencyMobile = emergencyContactNumber.match(phoneno);
            if (!validEmergencyMobile) {
                errors.push("emergencyContactNumber");
            }

            // Emergency Email
            let validEmergencyEmail = expression.test(String(emergencyEmail).toLowerCase());

            if (!validEmergencyEmail) {
                errors.push("emergencyEmail");
            }

            // Giveaway Dropdown
            if(jacketSize === 'Choose size') {
                errors.push("jacketSize");
            }
        }

        setError(errors);

        if (errors.length > 0) {
            setStep(step);
        } else {
            let currentStep = step;
            currentStep = currentStep >= 2 ? 3 : currentStep + 1;
            setStep(currentStep);
        }
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
                    <img src={arrowBack} alt="backward-arrow"/>&nbsp;Previous
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
                    Next&nbsp;<img src={arrowForward} alt="forward-arrow"/>
                </button>
            )
        }
        return null;
    };

    return (
        <div className={`jumbotron ${step}`}>
            <span className="step">{step} / 3</span>
            <div className="welcome">Welcome {displayName}</div>
            <Route render={(history) => (
                <form onSubmit={handleSubmit(history)}>
                    <Step1
                        currentStep={step}
                        handleChange={handleChange}
                        hasError={hasError}
                        value={state}
                    />
                    <Step2
                        currentStep={step}
                        handleChange={handleChange}
                        hasError={hasError}
                        value={state}
                    />
                    <Step3
                        currentStep={step}
                        handleChange={handleChange}
                        hasError={hasError}
                        value={state}
                    />
                    {nextButton()}
                    {previousButton()}
                </form>
            )}/>
            <div className="btn sign-out"
                 onClick={signOut}>
                <img src={close} alt="close"/>&nbsp;SIGN OUT
            </div>
        </div>
    );
};

export default FormsContainer;
