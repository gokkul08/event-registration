import React, { useState, useContext } from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { firestore, signOut } from "../firebase";
import { ResponsesContext } from '../providers/ResponsesProvider';
import { Route } from 'react-router-dom';
import arrowForward from '../images/arrow_forward.png'
import arrowBack from '../images/arrow_back.png';
import arrowDown from '../images/arrow_down.png';
import close from '../images/close.png'
import XLSX from "xlsx";

const Admin = (props) => {
    const responses = useContext(ResponsesContext);
    const initialFormState = {
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
        massageOrFacial: "Choose option",
        maleOrFemaleTherapist: "Choose option",
        tennisPro: "Yes/No",
        golfPro: "Yes/No",
        golfGroup: "Yes/No",
    };

    const [state, setFormState] = useState(initialFormState);
    const [error, setError] = useState([]);

    const [step, setStep] = useState(1);
    const [edit, setEdit] = useState(false);
    const initialEditValue = '';
    const [editValue, setEditValue] = useState(initialEditValue);

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

        const { commercialOrPrivate, privateAirport } = state;
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
            const response = responses.find(response => response.user.email === editValue);

            firestore.collection('responses').doc(response.id).update(state);
            history.history.push({
                pathname: '/thankyouadmin',
                search: `?confirm=${editValue}`
            });
        }
    };

    const handleUserChange = (event) => {
        setEdit(true);
        const {value} = event.target;
        const storedUserResponse = responses.find(response => response.user.email === value);
        setFormState({...state, ...storedUserResponse});
        setEditValue(value);
        setError([]);
    };

    const cancelEdit = () => {
      setEdit(false);
      setFormState(initialFormState);
      setEditValue(initialEditValue);
      setStep(1);
    };

    const exportData = (responses) => {
        let responseData = [["First Name", "Last Name", "Company", "Title", "Office Phone", "Mobile Phone", "Email Address", "Address Line 1", "Address Line 2", "City", "State", "Zip Code", "Executive Assistant's Name", "Executive Assistant's Email", "EA's Office Phone", "EA's Mobile Phone", "Emergency Contact Name", "Emergency Contact Email", "Emergency Contact Phone", "Special Diet or Food Allergies", "ADA/Special Needs", "Jacket Size", "Origin/Destination-NYC", "Are you flying Commercial/Private", "Arrival Date", "Departure Date","Arrival Time", "Departure Time", "Arrival Airport", "Departure Airport", "Arrival Flight#", "Departure Flight#", "Arrival Airline", "Departure Airline", "Origin City", "Destination City", "Arrival Info", "Departure Info", "Massage or Facial", "Therapist Gender", "Tennis Professional Session", "Golf Professional Session", "Group Golf Session"]];
        if (responses && responses.length > 0) {
            responses.forEach(response => {
                const { firstName, lastName, company, title, officePhone, mobilePhone, emailAddress, addressLine1, addressLine2, city, stateUS, zipCode, executiveAsstName, executiveAsstEmail, executiveAsstOfficePhone, executiveAsstMobilePhone, emergencyContactName, emergencyEmail, emergencyContactNumber, specialDiet, specialNeeds, jacketSize, originAndDestination, commercialOrPrivate, arrivalDate, departureDate, arrivalTime, departureTime, arrivalAirport, departureAirport, arrivalFlight, departureFlight, arrivalAirline, departureAirline, origin, destination, arrivalInfo, departureInfo, massageOrFacial, maleOrFemaleTherapist,tennisPro,golfPro,golfGroup } = response;
                let responseArray = [firstName, lastName, company, title, officePhone, mobilePhone, emailAddress, addressLine1, addressLine2, city, stateUS, zipCode, executiveAsstName, executiveAsstEmail, executiveAsstOfficePhone, executiveAsstMobilePhone, emergencyContactName, emergencyEmail, emergencyContactNumber, specialDiet, specialNeeds, jacketSize, originAndDestination, commercialOrPrivate, arrivalDate, departureDate, arrivalTime, departureTime, arrivalAirport, departureAirport, arrivalFlight, departureFlight, arrivalAirline, departureAirline, origin, destination, arrivalInfo, departureInfo, massageOrFacial, maleOrFemaleTherapist,tennisPro,golfPro,golfGroup];
                responseData.push(responseArray);
            });
            const wb = XLSX.utils.book_new();
            const wsAll = XLSX.utils.aoa_to_sheet(responseData);
            XLSX.utils.book_append_sheet(wb, wsAll, "User");
            XLSX.writeFile(wb, "registration-details.xlsx");
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
                    <img src={arrowBack} alt="backward-arrow" />&nbsp;Previous
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
                    Next&nbsp;<img src={arrowForward} alt="forward-arrow" />
                </button>
            )
        }
        return null;
    };

    return (
        <div className={`jumbotron ${step}`}>
            <span className="step">{step} / 4</span>
                <div className="form-group">
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div className="welcome admin">Welcome Admin</div>
                        </div>
                        <div className="form-group col-md-5">
                            <select id="editResponse" className={`form-control admin-top ${step}`} onChange={handleUserChange} name="editResponse" value={editValue}>
                                <option value='' disabled>Edit User</option>
                                {
                                    responses.map(response =>
                                        <option key={response.id} value={response.user.email}>{response.user.email}</option>
                                    )}
                            </select>
                        </div>
                    </div>
                </div>
            {
                edit &&
                <Route render={(history) => (
                    <form onSubmit={handleSubmit(history)} className="admin-form">
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
                )} />
            }
            {
                !edit &&
                    <hr className="breaker" />
            }
            <div className="btn sign-out"
                 onClick={signOut}>
                <img src={close} alt="close"/>&nbsp;SIGN OUT
            </div>
            {
                !edit &&
                <button className="btn btn-warning download button-style" type="button" onClick={() => exportData(responses)}>
                    DOWNLOAD&nbsp;<img src={arrowDown} alt="download" />
                </button>
            }
            {
                edit &&
                <button className="btn btn-warning download button-style" type="button" onClick={cancelEdit}>
                    CANCEL
                </button>
            }
        </div>
    );
};

export default Admin;
