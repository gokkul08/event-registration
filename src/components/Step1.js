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
                <div className="form-group">
                    <div className="form-row break">
                        <div className="form-group col-md-11 colm-1">
                            <div className="lead">Attendee Information</div>
                        </div>
                        <div className="form-group col-md-1 colm-2">
                            <div className="required">*required</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="First Name *"
                                name="firstName"
                                required
                                value={firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Last Name *"
                                name="lastName"
                                required
                                value={lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                id="company"
                                placeholder="Company"
                                name="company"
                                required
                                value={company}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Title"
                                name="title"
                                required
                                value={title}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input
                                type="tel"
                                className="form-control"
                                id="ophone"
                                placeholder="Office Phone"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                                name="officePhone"
                                required
                                value={officePhone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <input
                                type="tel"
                                className="form-control"
                                id="mphone"
                                placeholder="Mobile Phone *"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                                name="mobilePhone"
                                required
                                value={mobilePhone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <input
                                className="form-control"
                                id="email"
                                type="email"
                                placeholder="Email *"
                                name="emailAddress"
                                required
                                value={emailAddress}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <hr className="breaker"/>
                    <div className="form-row">
                        <p className="lead">Address</p>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
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
                        <div className="form-group col-md-12">
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
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
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
                        <div className="form-group col-md-3">
                            <select id="state" className="form-control" onChange={handleChange} value={stateUS} name="stateUS" defaultValue={'STATE'}>
                                <option value="State" disabled>State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <input
                                type="text"
                                className="form-control"
                                id="zip"
                                placeholder="Zip"
                                name="zipCode"
                                value={zipCode}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <hr className="breaker"/>
                </div>
            </div>
        )
    }
}

export default Step1;
