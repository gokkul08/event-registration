import React, { Component } from 'react';
import arrowForward from "../images/arrow_forward.png";

class Step3 extends Component {
    render() {
        const { currentStep, value } = this.props;
        const {
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
        } = value;

        if (currentStep !== 3) {
            return null;
        }

        const handleChange = (e) => {
            this.props.handleChange(e);
        };

        return(
            <div>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="lead">Travel Information</div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <div className="light-label">Is your Origin and Return Destination in the NYC Area?</div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="light-label">Are you flying Commercial or Private?</div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <select id="inputState" className="form-control" onChange={handleChange} value={originAndDestination} name="originAndDestination">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <select id="inputState" className="form-control" onChange={handleChange}
                                        value={commercialOrPrivate} name="commercialOrPrivate">
                                    <option value="Commercial">Commercial</option>
                                    <option value="Private">Private</option>
                                </select>
                            </div>
                        </div>
                        { originAndDestination==='Yes' &&
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <div className="alert alert-warning alert-note" role="alert">
                                        <b>*Note:</b> If you are leaving from the New York City Area, please do not book travel until you hear from someone in the IAC Events Department.
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            originAndDestination === 'No' &&
                            <hr className="breaker"/>
                        }
                        {
                            originAndDestination==='No' &&
                             <div className="form-row">
                                 <div className="form-group col-md-5">
                                     <div className="lead">Arrival Information</div>
                                 </div>
                                 <div className="form-group col-md-1">
                                     <div className="optional">*optional</div>
                                 </div>
                                 <div className="form-group col-md-5">
                                     <div className="lead">Departure Information</div>
                                 </div>
                                 <div className="form-group col-md-1">
                                     <div className="optional">*optional</div>
                                 </div>
                             </div>
                        }
                        { originAndDestination==='No' &&
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="arrival"
                                        placeholder="Date"
                                        name="arrivalDate"
                                        value={arrivalDate.length > 0 ? arrivalDate : 'Date'}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <input
                                        type="time"
                                        className="form-control"
                                        id="arrival"
                                        placeholder="Time"
                                        name="arrivalTime"
                                        value={arrivalTime.length > 0 ? arrivalTime : 'Date'}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="departure"
                                        placeholder="Date"
                                        name="departureDate"
                                        value={departureDate.length > 0 ? departureDate : 'Date'}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <input
                                        type="time"
                                        className="form-control"
                                        id="departure"
                                        placeholder="Time"
                                        name="departureTime"
                                        value={departureTime.length > 0 ? departureTime : 'Date'}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        }
                        { originAndDestination==='No' &&
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="arrivalAirport"
                                        placeholder="Airport"
                                        name="arrivalAirport"
                                        value={arrivalAirport}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="arrivalFlight"
                                        placeholder="Flight No."
                                        name="arrivalFlight"
                                        value={arrivalFlight}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="departureAirport"
                                        placeholder="Airport"
                                        name="departureAirport"
                                        value={departureAirport}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="departureFlight"
                                        placeholder="Flight No."
                                        name="departureFlight"
                                        value={departureFlight}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        }
                        { originAndDestination==='No' &&
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="arrivalAirline"
                                        placeholder="Arrival Airline"
                                        name="arrivalAirline"
                                        value={arrivalAirline}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="origin"
                                        placeholder="Origin City"
                                        name="origin"
                                        value={origin}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="departureAirline"
                                        placeholder="Departure Airline"
                                        name="departureAirline"
                                        value={departureAirline}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="destination"
                                        placeholder="Destination City"
                                        name="destination"
                                        value={destination}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        }
                        { originAndDestination==='No' &&
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="arrivalInfo" className="light-label">Arrival Connection Info</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="arrivalInfo"
                                        placeholder="Optional"
                                        rows="2"
                                        name="arrivalInfo"
                                        value={arrivalInfo}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="departureInfo" className="light-label">Departure Connection Info</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="departureInfo"
                                        placeholder="Optional"
                                        rows="2"
                                        name="departureInfo"
                                        value={departureInfo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        }
                        <hr className="breaker" />
                    </div>
                <button
                    className="btn btn-warning float-right next button-style">
                    Submit&nbsp;<img src={arrowForward} alt="forward-arrow"/>
                </button>
            </div>
        )
    }
}

export default Step3;
