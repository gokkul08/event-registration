import React, { useContext } from "react";
import { signOut } from "../firebase";
import { ResponsesContext } from '../providers/ResponsesProvider';
import XLSX from 'xlsx';
import close from "../images/close.png";

const ThankYouAdmin = (props) => {
    const responses = useContext(ResponsesContext);
    const updatedUser =  props.location.search.split('?confirm=');

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

    const handleSignOut = async () => {
        await signOut();
        props.history.push('/');
    };

    const handleUser = () => {
        props.history.push('/');
    };

    return (
        <div>
            <div className="jumbotron">
                <div className="welcome">Thank you</div>
                <br /><br />
                <div className="form-group mobile">
                    <div className="form-row thank-you">
                        Thank you for updating the data for {updatedUser}
                    </div>
                    <br/>
                    <div className="form-row thank-you">
                        If you have any questions or concerns please contact Marites Gonzales in the IAC Events Department at APM2020@iac.com
                    </div>
                </div>
                <div className="bottom">
                    <hr className="breaker" />
                    <div className="btn sign-out float-left move-top"
                         onClick={handleSignOut}>
                        <img src={close} alt="sign out"/>&nbsp;SIGN OUT
                    </div>
                    <button className="btn btn-secondary next button-style" onClick={handleUser}>EDIT USER</button>
                    <button className="btn btn-warning float-right download button-style" onClick={() => exportData(responses)}>DOWNLOAD ALL DATA</button>
                </div>
            </div>
        </div>
    )
};

export default ThankYouAdmin;
