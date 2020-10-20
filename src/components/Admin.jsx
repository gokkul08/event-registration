import React, { useState, useContext, useEffect } from 'react';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { firestore, auth, signOut } from "../firebase";
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
    };

    const [state, setFormState] = useState(initialFormState);

    const [step, setStep] = useState(1);
    const [edit, setEdit] = useState(false);
    const initialEditValue = '';
    const [editValue, setEditValue] = useState(initialEditValue);

    const handleChange = event => {
        const {name, value} = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = history => event => {
        event.preventDefault();

        const response = responses.find(response => response.user.email === editValue);

        firestore.collection('responses').doc(response.id).update(state);
        history.history.push({
            pathname: '/thankyouadmin',
            search: `?confirm=${editValue}`
        });
    };

    const handleUserChange = (event) => {
        setEdit(true);
        console.log(edit);
        const {value} = event.target;
        const storedUserResponse = responses.find(response => response.user.email === value);
        console.log(storedUserResponse);
        setFormState({...state, ...storedUserResponse});
        setEditValue(value);
    };

    const cancelEdit = () => {
      setEdit(false);
      setFormState(initialFormState);
      setEditValue(initialEditValue);
      setStep(1);
    };

    const exportData = (responses) => {
        let responseData = [["First Name", "Last Name", "Company", "Title", "Office Phone", "Mobile Phone", "Email Address", "Address Line 1", "Address Line 2", "City", "State", "Zip Code", "Executive Assistant's Name", "Executive Assistant's Email", "EA's Office Phone", "EA's Mobile Phone", "Emergency Contact Name", "Emergency Contact Email", "Emergency Contact Phone", "Special Diet or Food Allergies", "ADA/Special Needs", "Jacket Size", "Origin/Destination-NYC", "Are you flying Commercial/Private", "Arrival Date", "Departure Date","Arrival Time", "Departure Time", "Arrival Airport", "Departure Airport", "Arrival Flight#", "Departure Flight#", "Arrival Airline", "Departure Airline", "Origin City", "Destination City", "Arrival Info", "Departure Info"]];
        if (responses && responses.length > 0) {
            responses.forEach(response => {
                const { firstName, lastName, company, title, officePhone, mobilePhone, emailAddress, addressLine1, addressLine2, city, stateUS, zipCode, executiveAsstName, executiveAsstEmail, executiveAsstOfficePhone, executiveAsstMobilePhone, emergencyContactName, emergencyEmail, emergencyContactNumber, specialDiet, specialNeeds, jacketSize, originAndDestination, commercialOrPrivate, arrivalDate, departureDate, arrivalTime, departureTime, arrivalAirport, departureAirport, arrivalFlight, departureFlight, arrivalAirline, departureAirline, origin, destination, arrivalInfo, departureInfo   } = response;
                let responseArray = [firstName, lastName, company, title, officePhone, mobilePhone, emailAddress, addressLine1, addressLine2, city, stateUS, zipCode, executiveAsstName, executiveAsstEmail, executiveAsstOfficePhone, executiveAsstMobilePhone, emergencyContactName, emergencyEmail, emergencyContactNumber, specialDiet, specialNeeds, jacketSize, originAndDestination, commercialOrPrivate, arrivalDate, departureDate, arrivalTime, departureTime, arrivalAirport, departureAirport, arrivalFlight, departureFlight, arrivalAirline, departureAirline, origin, destination, arrivalInfo, departureInfo];
                console.log(responseArray);
                responseData.push(responseArray);
            });
            const wb = XLSX.utils.book_new();
            const wsAll = XLSX.utils.aoa_to_sheet(responseData);
            XLSX.utils.book_append_sheet(wb, wsAll, "User");
            XLSX.writeFile(wb, "registration-details.xlsx");
        }
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
                <div className="form-group">
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div className="welcome admin">Welcome Admin</div>
                        </div>
                        <div className="form-group col-md-5">
                            <select id="editResponse" className="form-control admin-top" onChange={handleUserChange} name="editResponse" value={editValue}>
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
            }
            {
                !edit &&
                    <hr className="breaker setter" />
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