import React, { Component } from 'react';

class Step3 extends Component {
    render() {
        const { currentStep, hasError, value } = this.props;
        const {
            commercialOrPrivate,
            privateAirportDeparture,
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
                                    <b>*Note:</b> IAC will attempt to make private flight arrangements from New York, San Francisco, and possibly other cities (depending on interest and participant locations). Please let us know your planned departure city but note that private travel is not guaranteed at this time. We will follow up with confirmation/instructions when available.
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
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
                        </div>
                        { commercialOrPrivate==='Private' &&
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <span className="light-label">Which airport is closest to you for departure?</span>
                                    <input
                                        type="text"
                                        className={hasError("privateAirportDeparture") ? "form-control is-invalid" : "form-control"}
                                        id="privateAirportDeparture"
                                        placeholder="Departing Airport * (ex: Teterboro)"
                                        name="privateAirportDeparture"
                                        value={privateAirportDeparture}
                                        onChange={handleChange}
                                        required
                                    />
                                    {/* <select id="airport" className={hasError("privateAirport") ? "form-control is-invalid select-error" : "form-control"} onChange={handleChange}
                                            value={privateAirport} name="privateAirport">
                                        <option value="Choose airport" disabled>Choose airport</option>
                                        <option value="Teterboro-112 Charles Lindberg Drive, Teterboro, NJ 08608">Teterboro—112 Charles Lindberg Drive, Teterboro, NJ 08608</option>
                                        <option value="Denver—Rocky Mountain Metro 9107 Rocky Road, Broomfield, CO 80021">Denver—Rocky Mountain Metro 9107 Rocky Road, Broomfield, CO 80021</option>
                                        <option value="Oakland–Metropolitan Oakland international, 8735 Earhart Road, Airport station, Oakland CA 94621">Oakland–Metropolitan Oakland international, 8735 Earhart Road, Airport station, Oakland CA 94621</option>
                                    </select> */}
                                    {
                                        hasError("privateAirportDeparture") &&
                                        <div className="invalid-feedback">
                                            Please enter an airport for departure
                                        </div>
                                    }
                                </div>
                                <div className="form-group col-md-12">
                                    <span className="light-label">Which airport do you want to return to?</span>
                                    <input
                                        type="text"
                                        className={hasError("privateAirportReturn") ? "form-control is-invalid" : "form-control"}
                                        id="privateAirportReturn"
                                        placeholder="Returning Airport * (ex: Teterboro)"
                                        name="privateAirportReturn"
                                        value={privateAirportReturn}
                                        onChange={handleChange}
                                        required
                                    />
                                    {
                                        hasError("privateAirportReturn") &&
                                        <div className="invalid-feedback">
                                            Please enter an airport for your return
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                        {
                            commercialOrPrivate === 'Commercial' &&
                            <hr className="breaker"/>
                        }
                        { commercialOrPrivate==='Commercial' &&
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
                        }
                        <hr className="breaker" />
                    </div>
            </div>
        )
    }
}

export default Step3;
