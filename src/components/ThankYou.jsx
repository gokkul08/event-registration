import React, { useContext } from "react";
import { auth, signOut } from "../firebase";
import successMark from "../images/successMark.png";
import { ResponsesContext } from '../providers/ResponsesProvider';
import XLSX from 'xlsx';

const ThankYou = (props) => {
    const responses = useContext(ResponsesContext);
    const storedUserResponse = responses.find(response => response.id === auth.currentUser.uid);
    console.log(storedUserResponse);

    const exportData = (response) => {
        if (response) {
            const { firstName, lastName, company, title, officePhone, mobilePhone, emailAddress, addressLine1, addressLine2, city, stateUS, zipCode, executiveAsstName, executiveAsstEmail, executiveAsstOfficePhone, executiveAsstMobilePhone, emergencyContactName, emergencyContactNumber, specialDiet, specialNeeds, jacketSize, originAndDestination, commercialOrPrivate, arrivalDateTime, departureDateTime, arrivalAirport, departureAirport, arrivalFlight, departureFlight, arrivalAirline, departureAirline, origin, destination, arrivalInfo, departureInfo   } = response;
            let responseData = [["First Name", "Last Name", "Company", "Title", "Office Phone", "Mobile Phone", "Email Address", "Address Line 1", "Address Line 2", "City", "State", "Zip Code", "Executive Assistant's Name", "Executive Assistant's Email", "EA's Office Phone", "EA's Mobile Phone", "Emergency Contact Name", "Emergency Contact Phone", "Special Diet or Food Allergies", "ADA/Special Needs", "Jacket Size", "Origin/Destination-NYC", "Are you flying Commercial/Private", "Arrival Date & Time", "Departure Date & Time", "Arrival Airport", "Departure Airport", "Arrival Flight#", "Departure Flight#", "Arrival Airline", "Departure Airline", "Origin City", "Destination City", "Arrival Info", "Departure Info"]];
            let responseArray = [firstName, lastName, company, title, officePhone, mobilePhone, emailAddress, addressLine1, addressLine2, city, stateUS, zipCode, executiveAsstName, executiveAsstEmail, executiveAsstOfficePhone, executiveAsstMobilePhone, emergencyContactName, emergencyContactNumber, specialDiet, specialNeeds, jacketSize, originAndDestination, commercialOrPrivate, arrivalDateTime, departureDateTime, arrivalAirport, departureAirport, arrivalFlight, departureFlight, arrivalAirline, departureAirline, origin, destination, arrivalInfo, departureInfo];
            console.log(responseArray);
            responseData.push(responseArray);
            const wb = XLSX.utils.book_new();
            const wsAll = XLSX.utils.aoa_to_sheet(responseData);
            XLSX.utils.book_append_sheet(wb, wsAll, "User");
            XLSX.writeFile(wb, "registration-details.xlsx");
        }
    };

    const handleSignOut = async () => {
        await signOut();
        props.history.push('/');
    };

    return (
        <div>
            <div className="jumbotron">
                <img src={successMark} className="successMark" alt="Success" />
                <h3 className="text-center">Success!</h3>
                <p className="text-center">
                    Thank you for registering for the IAC Executive Retreat. We will be sending more information about the agenda and activities soon. In the meantime, if you have any questions or concerns please contact Emily Somers in the IAC Events Department at Emily.somers@iac.com or (212) 314-7347.
                </p>
                <button className="btn btn-primary float-left" onClick={() => exportData(storedUserResponse)}>Download</button>
                <button className="btn btn-danger float-right" onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>
    )
};

export default ThankYou;
