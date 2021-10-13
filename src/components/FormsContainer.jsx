import React, {useState, useContext, useEffect} from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
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
        dietaryRestrictions: "None",
        allergies: "None",
        allergyOther: "",
        specialNeeds: "",
        jacketSize: "Choose size",
        commercialOrPrivate: "Choose option",
        privateAirportDeparture: "Choose airport",
        otherPrivateAirportDeparture: "",
        returnCitySelect: "Yes",
        privateAirportReturn: "",
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
        massageOrFacial: "Choose option",
        maleOrFemaleTherapist: "Choose option",
        tennisPro: "Choose option",
        golfPro: "Choose option",
        // golfGroup: "Choose option",
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
            dietaryRestrictions,
            allergies,
            allergyOther,
            specialNeeds,
            jacketSize,
            commercialOrPrivate,
            privateAirportDeparture,
            otherPrivateAirportDeparture,
            returnCitySelect,
            privateAirportReturn,
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
            massageOrFacial,
            maleOrFemaleTherapist,
            tennisPro,
            golfPro,
            // golfGroup,
        } = state;

        let submitErrors = [];

        // Flight Dropdown Validation
        if(commercialOrPrivate === 'Choose option') {
            submitErrors.push("commercialOrPrivate");
        }

        //Private Airport Validation
        if(commercialOrPrivate === 'Private') {
            // test departure 
            if (privateAirportDeparture === '') {
                submitErrors.push("privateAirportDeparture");
            }
            // test return 
            if (privateAirportReturn === '') {
                submitErrors.push("privateAirportReturn");
            }
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
                dietaryRestrictions,
                allergies,
                allergyOther,
                specialNeeds,
                jacketSize,
                commercialOrPrivate,
                privateAirportDeparture,
                otherPrivateAirportDeparture,
                returnCitySelect,
                privateAirportReturn,
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
                massageOrFacial,
                maleOrFemaleTherapist,
                tennisPro,
                golfPro,
                // golfGroup,
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
            company,
            title,
            mobilePhone,
            emailAddress,
            stateUS,
            executiveAsstName,
            executiveAsstEmail,
            executiveAsstMobilePhone,
            emergencyContactName,
            emergencyEmail,
            emergencyContactNumber,
            allergies,
            allergyOther,
            specialNeeds,
            jacketSize,
            commercialOrPrivate,
            privateAirportDeparture,
            otherPrivateAirportDeparture,
            returnCitySelect,
            privateAirportReturn,
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

            // Company 
            if (company === '') {
                errors.push('company')
            }

            // Title
            if (title === '') {
                errors.push('title')
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

            // Test Allergy
            if (allergies === 'Other') {
                // Test if allergy is specified
                if (allergyOther === '') {
                    errors.push('allergyOther');
                }
            }

            // Test special needs
            if (specialNeeds === '') {
                errors.push('specialNeeds');
            }

            // Giveaway Dropdown
            if(jacketSize === 'Choose size') {
                errors.push("jacketSize");
            }
        }

        if (step === 3) {
            // Commercial or Private?
            if (commercialOrPrivate === "Choose option") {
                errors.push("commercialOrPrivate");
            }
            
            // if we are private check for departure and return info 
            if (commercialOrPrivate === 'Private') {
                // test departure 
                if (privateAirportDeparture === 'Choose airport') {
                    errors.push("privateAirportDeparture");
                }

                if (returnCitySelect === 'No or Other') {
                    // test return 
                    if (privateAirportReturn === '') {
                        errors.push("privateAirportReturn");
                    }
                }

                // test for private "other"
                if (privateAirportDeparture === 'Other') {
                    if (otherPrivateAirportDeparture === '') {
                        errors.push("otherPrivateAirportDeparture");
                    }
                }
            }
        }

        setError(errors);

        if (errors.length > 0) {
            setStep(step);
        } else {
            let currentStep = step;
            currentStep = currentStep >= 3 ? 4 : currentStep + 1;
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
        if (currentStep < 4) {
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
            <span className="step">{step} / 4</span>
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
                    <Step4
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
