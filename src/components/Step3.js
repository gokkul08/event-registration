import React, { Component } from 'react';

class Step3 extends Component {
    render() {
        const { currentStep, hasError, value } = this.props;
        const {
            // commercialOrPrivate,
            privateAirportDeparture,
            otherPrivateAirportDeparture,
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
            returnCitySelect,
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
                            <div className="form-group col-md-12">
                                <div className="alert alert-warning alert-note" role="alert">
                                    We are assessing flight arrangements and will likely have private departures and returns from NYC (Teterboro), Oakland and other locations if feasible. 
                                    Please indicate your anticipated departure and return location below. We will contact you to confirm your private or commercial travel.
                                    <br/><br/>
                                    If the IAC Events Team has confirmed that you will be traveling commercially, please book your flight into either <b>Tucson International Airport</b> (45 minute drive from airport to hotel) 
                                    or <b>Phoenix Sky Harbor Airport</b> (1.5-2 hour drive from airport to hotel).  All ground transportation will be arranged by the IAC Events Team.  
                                    Please plan your travel accordingly to arrive at the hotel for a 6:30pm Welcome Reception on Monday, November 8th.
                                    <br/><br/>
                                    <b><u>Hotel address:</u> <br/>
                                    The Ritz-Carlton Dove Mountain </b><br/>
                                    15000 N Secret Springs Drive <br/>
                                    Marana, AZ 85658 <br/>
                                    Phone: (520) 572-3000 
                                    <br/><br/>
                                    If you have questions regarding travel, please contact the IAC Events Team at <a href="mailto: APM2021@iac.com">APM2021@iac.com</a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="form-row">
                            <div className="form-group col-md-6">
                                <span className="light-label">Are you flying Commercial or Private?</span>
                                <select id="inputState" className={hasError("commercialOrPrivate") ? "form-control is-invalid select-error" : "form-control"} onChange={handleChange}
                                        value={commercialOrPrivate} name="commercialOrPrivate">
                                    <option value="Choose option" disabled>Choose option</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Private">Private</option>
                                </select>
                                {
                                    hasError("commercialOrPrivate") &&
                                    <div className="invalid-feedback">
                                        Please select an option
                                    </div>
                                }
                            </div>
                        </div> */}
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <span className="light-label">Which airport is closest to you for departure?</span>
                                {/* <input
                                    type="text"
                                    className={hasError("privateAirportDeparture") ? "form-control is-invalid" : "form-control"}
                                    id="privateAirportDeparture"
                                    placeholder="Departing Airport * (ex: Teterboro)"
                                    name="privateAirportDeparture"
                                    value={privateAirportDeparture}
                                    onChange={handleChange}
                                    required
                                /> */}
                                <select id="inputDeparture" className={hasError("privateAirportDeparture") ? "form-control is-invalid select-error" : "form-control"} onChange={handleChange}
                                        value={privateAirportDeparture} name="privateAirportDeparture">
                                    <option value="Choose airport" disabled>Choose airport</option>
                                    <option value="Teterboro">Teterboro-- Jet Aviation: 112 Charles Lindberg Dr., Teterboro, NJ 07608</option>
                                    <option value="Oakland">Oakland-–Metropolitan Oakland International KaiserAir: 8735 Earhart Rd., Oakland, CA 94621</option>
                                    <option value="Other">Other</option>
                                </select>
                                {
                                    hasError("privateAirportDeparture") &&
                                    <div className="invalid-feedback">
                                        Please enter an airport for departure
                                    </div>
                                }
                            </div>
                            { privateAirportDeparture === 'Other' && 
                                <div className="form-group col-md-12">
                                    <label className="light-label">Please specify the closest airport to you for departure<span className="required-break">*required</span></label>
                                    <input
                                        type="text"
                                        className={hasError("otherPrivateAirportDeparture") ? "form-control is-invalid" : "form-control"}
                                        id="otherPrivateAirportDeparture"
                                        placeholder=""
                                        name="otherPrivateAirportDeparture"
                                        value={otherPrivateAirportDeparture}
                                        onChange={handleChange}
                                        required
                                    />
                                    {
                                        hasError("otherPrivateAirportDeparture") &&
                                        <div className="invalid-feedback">
                                            Please specify 
                                        </div>
                                    }
                                </div>
                            }
                            <div className="form-group col-md-12">
                                <span className="light-label">Is your return city the same as your departure city? If No or Other, please specify:</span>
                                <select id="inputReturn" className="form-control" onChange={handleChange} value={returnCitySelect} name="returnCitySelect">
                                    <option value="Yes">Yes</option>
                                    <option value="No or Other">No or Other</option>
                                </select>
                            </div>
                            { returnCitySelect === 'No or Other' && 
                                <div className="form-group col-md-12">
                                    <label className="light-label">Please specify<span className="required-break">*required</span></label>
                                    <input
                                        type="text"
                                        className={hasError("privateAirportReturn") ? "form-control is-invalid" : "form-control"}
                                        id="privateAirportReturn"
                                        placeholder=""
                                        name="privateAirportReturn"
                                        value={privateAirportReturn}
                                        onChange={handleChange}
                                        required
                                    />
                                    {
                                        hasError("privateAirportReturn") &&
                                        <div className="invalid-feedback">
                                            Please specify 
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                        <hr className="breaker"/>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <span className="sub-lead">Commercial Travel Information</span>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label className="lead">
                                            Inbound Flight Arrival Time
                                            <span className="optional">
                                                *optional
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="arrival"
                                            placeholder="Date"
                                            name="arrivalDate"
                                            value={arrivalDate.length > 0 ? arrivalDate : 'Date'}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="arrival"
                                            placeholder="Time"
                                            name="arrivalTime"
                                            value={arrivalTime.length > 0 ? arrivalTime : 'Date'}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="arrivalAirport"
                                            placeholder="Airport"
                                            name="arrivalAirport"
                                            value={arrivalAirport}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="arrivalFlight"
                                            placeholder="Flight No."
                                            name="arrivalFlight"
                                            value={arrivalFlight}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="arrivalAirline"
                                            placeholder="Arrival Airline"
                                            name="arrivalAirline"
                                            value={arrivalAirline}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="origin"
                                            placeholder="Origin City"
                                            name="origin"
                                            value={origin}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="arrivalInfo" className="light-label">Arrival Connection Info</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
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
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label className="lead">
                                            Outbound Flight Departure Time
                                            <span className="optional">
                                                *optional
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="departure"
                                            placeholder="Date"
                                            name="departureDate"
                                            value={departureDate.length > 0 ? departureDate : 'Date'}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="time"
                                            className="form-control"
                                            id="departure"
                                            placeholder="Time"
                                            name="departureTime"
                                            value={departureTime.length > 0 ? departureTime : 'Date'}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="departureAirport"
                                            placeholder="Airport"
                                            name="departureAirport"
                                            value={departureAirport}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="departureFlight"
                                            placeholder="Flight No."
                                            name="departureFlight"
                                            value={departureFlight}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="departureAirline"
                                            placeholder="Departure Airline"
                                            name="departureAirline"
                                            value={departureAirline}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="destination"
                                            placeholder="Destination City"
                                            name="destination"
                                            value={destination}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="departureInfo" className="light-label">Departure Connection Info</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
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
                            </div>
                        </div>
                        <hr className="breaker" />
                    </div>
            </div>
        )
    }
}

export default Step3;
