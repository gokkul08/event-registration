import React, { Component } from 'react';

class Step3 extends Component {
    render() {
        const { currentStep, value } = this.props;
        const {
            originAndDestination,
            commercialOrPrivate,
            arrivalDateTime,
            departureDateTime,
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
                <div>
                    <p className="lead">Travel Information:</p>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputState">Is your Origin and Return Destination in the New York City Area?</label>
                                <select id="inputState" className="form-control" onChange={handleChange} value={originAndDestination} name="originAndDestination">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            { originAndDestination==='Yes' &&
                                <div className="form-group col-md-6">
                                    <div className="alert alert-primary" role="alert">
                                        <b>Note:</b> If you are leaving from the New York City Area, please do not book travel until you hear from someone in the IAC Events Department.
                                    </div>
                                </div>
                            }
                        </div>
                        { originAndDestination==='No' &&
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState">Are you flying Commercial or Private?</label>
                                    <select id="inputState" className="form-control" onChange={handleChange}
                                            value={commercialOrPrivate} name="commercialOrPrivate">
                                        <option value="Commercial">Commercial</option>
                                        <option value="Private">Private</option>
                                    </select>
                                </div>
                            </div>
                        }
                        { originAndDestination==='No' &&
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="arrival">Arrival Date & Time</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="arrival"
                                        name="arrivalDateTime"
                                        value={arrivalDateTime}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="adot">Departure Date & Time</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="departure"
                                        name="departureDateTime"
                                        value={departureDateTime}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        }
                        { originAndDestination==='No' &&
                            <div className="form-row">
                                <div className="col">
                                    <label htmlFor="arrivalAirport">Arrival Airport</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="arrivalAirport"
                                        name="arrivalAirport"
                                        value={arrivalAirport}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="arrivalFlight">Arrival Flight#</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="arrivalFlight"
                                        name="arrivalFlight"
                                        value={arrivalFlight}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="departureAirport">Departure Airport</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="departureAirport"
                                        name="departureAirport"
                                        value={departureAirport}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="departureFlight">Departure Flight#</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="departureFlight"
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
                                <div className="form-group col-md-6">
                                    <label htmlFor="arrivalAirline">Arrival Airline</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="arrivalAirline"
                                        name="arrivalAirline"
                                        value={arrivalAirline}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="departureAirline">Departure Airline</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="departureAirline"
                                        name="departureAirline"
                                        value={departureAirline}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        }
                        { originAndDestination==='No' &&
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="origin">Origin City of Arrival Flight:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="origin"
                                        name="origin"
                                        value={origin}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="destination">Destination City of Departure Flight:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="destination"
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
                                    <label htmlFor="arrivalInfo">Arrival Connection Info</label>
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
                                    <label htmlFor="departureInfo">Departure Connection Info</label>
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
                    </div>
                </div>
                <button className="btn btn-success float-right">Submit</button>
            </div>
        )
    }
}

export default Step3;
