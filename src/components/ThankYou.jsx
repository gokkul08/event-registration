import React, { useContext } from "react";
import { auth, signOut } from "../firebase";
import { ResponsesContext } from '../providers/ResponsesProvider';
import XLSX from 'xlsx';
import close from "../images/close.png";

const ThankYou = (props) => {
    const responses = useContext(ResponsesContext);
    const storedUserResponse = responses.find(response => response.id === auth.currentUser.uid);
    // if(storedUserResponse && storedUserResponse.user.uid === auth.currentUser.uid) {
    //     auth.currentUser.sendEmailVerification().then(() => {
    //         // Verification Sent
    //     }, (error) => {
    //         console.log(error);
    //     });
    // }
    const exportData = (response) => {
        if (response) {
            const { firstName, lastName, company, title, officePhone, mobilePhone, emailAddress, addressLine1, addressLine2, city, stateUS, zipCode, executiveAsstName, executiveAsstEmail, executiveAsstOfficePhone, executiveAsstMobilePhone, emergencyContactName, emergencyEmail, emergencyContactNumber, specialDiet, specialNeeds, jacketSize, originAndDestination, commercialOrPrivate, arrivalDate, departureDate, arrivalTime, departureTime, arrivalAirport, departureAirport, arrivalFlight, departureFlight, arrivalAirline, departureAirline, origin, destination, arrivalInfo, departureInfo   } = response;
            let responseData = [["First Name", "Last Name", "Company", "Title", "Office Phone", "Mobile Phone", "Email Address", "Address Line 1", "Address Line 2", "City", "State", "Zip Code", "Executive Assistant's Name", "Executive Assistant's Email", "EA's Office Phone", "EA's Mobile Phone", "Emergency Contact Name", "Emergency Contact Email", "Emergency Contact Phone", "Special Diet or Food Allergies", "ADA/Special Needs", "Jacket Size", "Origin/Destination-NYC", "Are you flying Commercial/Private", "Arrival Date", "Departure Date","Arrival Time", "Departure Time", "Arrival Airport", "Departure Airport", "Arrival Flight#", "Departure Flight#", "Arrival Airline", "Departure Airline", "Origin City", "Destination City", "Arrival Info", "Departure Info"]];
            let responseArray = [firstName, lastName, company, title, officePhone, mobilePhone, emailAddress, addressLine1, addressLine2, city, stateUS, zipCode, executiveAsstName, executiveAsstEmail, executiveAsstOfficePhone, executiveAsstMobilePhone, emergencyContactName, emergencyEmail, emergencyContactNumber, specialDiet, specialNeeds, jacketSize, originAndDestination, commercialOrPrivate, arrivalDate, departureDate, arrivalTime, departureTime, arrivalAirport, departureAirport, arrivalFlight, departureFlight, arrivalAirline, departureAirline, origin, destination, arrivalInfo, departureInfo];
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
                <div className="welcome">Thank you</div>
                <br /><br />
                <div className="form-group">
                    <div className="form-row thank-you">
                        Thank you for registering for the IAC Annual Planning Meeting. We will be sending more information about the agenda and activities soon
                    </div>
                    <br/>
                    <div className="form-row thank-you">
                        If you have any questions or concerns please contact Marites Gonzales in the IAC Events Department at APM2020@iac.com
                    </div>
                </div>
                <div className="bottom">
                    <hr className="breaker" />
                    <div className="btn sign-out float-left"
                         onClick={handleSignOut}>
                        <img src={close} alt="sign out"/>&nbsp;SIGN OUT
                    </div>
                    <button className="btn btn-warning float-right download button-style" onClick={() => exportData(storedUserResponse)}>DOWNLOAD CONFIRMATION</button>
                </div>
            </div>
        </div>
    )
};

export default ThankYou;
