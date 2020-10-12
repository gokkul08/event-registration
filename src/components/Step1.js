import React, { Component } from 'react';

class Step1 extends Component {
    render() {
        const { currentStep, value } = this.props;
        const {
            firstName,
            lastName,
            company,
            title,
            officePhone,
            mobilePhone,
            emailAddress,
            addressLine1,
            addressLine2,
            city,
            stateUS,
            zipCode,
        } = value;

        if (currentStep !== 1) {
            return null;
        }

        const handleChange = (e) => {
            this.props.handleChange(e);
        };

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
                                name="firstName"
                                value={firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
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
                                name="company"
                                value={company}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Title"
                                name="title"
                                value={title}
                                onChange={handleChange}
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
                                placeholder="(111)-222-3333"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                                name="officePhone"
                                value={officePhone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="mphone">Mobile Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="mphone"
                                placeholder="(111)-222-3333"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                                name="mobilePhone"
                                value={mobilePhone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email address</label>
                            <input
                                className="form-control"
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="emailAddress"
                                value={emailAddress}
                                onChange={handleChange}
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
                                name="addressLine1"
                                value={addressLine1}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                placeholder="City"
                                name="city"
                                value={city}
                                onChange={handleChange}
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
                                name="addressLine2"
                                value={addressLine2}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                placeholder="State"
                                name="stateUS"
                                value={stateUS}
                                onChange={handleChange}
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
                                name="zipCode"
                                value={zipCode}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step1;
