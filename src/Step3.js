import React, { Component } from 'react';

class Step3 extends Component {
    render() {
        if (this.props.currentStep !== 3) {
            return null;
        }

        return(
            <React.Fragment>
                <div>
                    <p className="lead">Travel Information:</p>
                    <div className="form-group">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputState">Is your Origin and Return Destination in the New York City Area?</label>
                                <select id="inputState" className="form-control">
                                    <option selected>No</option>
                                    <option>Yes</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputState">Are you flying Commercial or Private?</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Commercial</option>
                                    <option>Private</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="arrival">Arrival Date & Time</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="arrival"
                                    name="arrival"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="adot">Departure Date & Time</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="departure"
                                    name="departure"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="arrivalAirport">Arrival Airport</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="arrivalAirport"
                                    name="arrivalAirport"
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
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="arrivalAirline">Arrival Airline</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="arrivalAirline"
                                    name="arrivalAirline"
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
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="origin">Origin City of Arrival Flight:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="origin"
                                    name="origin"
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
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="arrivalInfo">Arrival Connection Info</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="arrivalInfo"
                                    name="arrivalInfo"
                                    placeholder="Optional"
                                    rows="2"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="departureInfo">Departure Connection Info</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="departureInfo"
                                    name="departureInfo"
                                    placeholder="Optional"
                                    rows="2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-success float-right">Submit</button>
            </React.Fragment>
        )
    }
}

export default Step3;
