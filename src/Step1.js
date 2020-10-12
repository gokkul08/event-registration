import React, { Component } from 'react';

class Step1 extends Component {
    render() {
        if (this.props.currentStep !== 1) {
            return null;
        }

        return (
            <div>
                <p className="lead">Attendee Information:</p>
                <div className="form-group">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="company">Company</label>
                            <input
                                type="text"
                                className="form-control"
                                id="company"
                                placeholder="Company"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Title"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="ophone">Office Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="ophone"
                                name="ophone"
                                placeholder="(111)-222-3333"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="mphone">Mobile Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="mphone"
                                name="mphone"
                                placeholder="(111)-222-3333"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email address</label>
                            <input
                                className="form-control"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={this.props.email} // Prop: The email input data
                                onChange={this.props.handleChange} // Prop: Puts data into state
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="address1">Address Line 1</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address1"
                                placeholder="Address Line 1"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                placeholder="City"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="address2">Address Line 2</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address2"
                                placeholder="Address Line 2"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                placeholder="State"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="Zip">Zip Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id="zip"
                                placeholder="Zip Code"
                                pattern="[0-9]*"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step1;
