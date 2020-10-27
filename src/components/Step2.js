import React, {Component} from 'react';

class Step2 extends Component {
    render() {
        const { currentStep, hasError,  value } = this.props;
        const {
            executiveAsstName,
            executiveAsstEmail,
            executiveAsstOfficePhone,
            executiveAsstMobilePhone,
            emergencyContactName,
            emergencyEmail,
            emergencyContactNumber,
            specialDiet,
            specialNeeds,
            jacketSize,
        } = value;

        if (currentStep !== 2) {
            return null;
        }

        const handleChange = (e) => {
            this.props.handleChange(e);
        };

        return (
                <div className="form-group">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label className="lead">
                                        Executive Assistant Information
                                        <span className="required-break">*required</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input
                                        type="text"
                                        className={hasError("executiveAsstName") ? "form-control is-invalid" : "form-control"}
                                        id="asstName"
                                        placeholder="Name *"
                                        name="executiveAsstName"
                                        value={executiveAsstName}
                                        onChange={handleChange}
                                        required
                                    />
                                    {
                                        hasError("executiveAsstName") &&
                                        <div className="invalid-feedback">
                                            Please enter assistant name
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                <input
                                    type="email"
                                    className={hasError("executiveAsstEmail") ? "form-control is-invalid" : "form-control"}
                                    id="asstEmail"
                                    placeholder="Email *"
                                    name="executiveAsstEmail"
                                    value={executiveAsstEmail}
                                    onChange={handleChange}
                                    required
                                />
                                    {
                                        hasError("executiveAsstEmail") &&
                                        <div className="invalid-feedback">
                                            Please enter valid email
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="eophone"
                                        placeholder="Office Phone"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        name="executiveAsstOfficePhone"
                                        value={executiveAsstOfficePhone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group col-md-12">
                                    <input
                                        type="tel"
                                        className={hasError("executiveAsstMobilePhone") ? "form-control is-invalid" : "form-control"}
                                        id="emphone"
                                        placeholder="Mobile Phone *"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        name="executiveAsstMobilePhone"
                                        value={executiveAsstMobilePhone}
                                        onChange={handleChange}
                                        required
                                    />
                                    {
                                        hasError("executiveAsstMobilePhone") &&
                                        <div className="invalid-feedback">
                                            Please enter valid 9 digits
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label className="lead">
                                        Emergency Contact Information
                                        <span className="required-break">*required</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input
                                        type="text"
                                        className={hasError("emergencyContactName") ? "form-control is-invalid" : "form-control"}
                                        id="emerName"
                                        placeholder="Name *"
                                        name="emergencyContactName"
                                        value={emergencyContactName}
                                        onChange={handleChange}
                                        required
                                    />
                                    {
                                        hasError("emergencyContactName") &&
                                        <div className="invalid-feedback">
                                            Please enter your emergency name
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input
                                        type="email"
                                        className={hasError("emergencyEmail") ? "form-control is-invalid" : "form-control"}
                                        id="emergencyEmail"
                                        placeholder="Email *"
                                        name="emergencyEmail"
                                        value={emergencyEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                    {
                                        hasError("emergencyEmail") &&
                                        <div className="invalid-feedback">
                                            Please enter a valid email
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <input
                                        type="tel"
                                        className={hasError("emergencyContactNumber") ? "form-control is-invalid" : "form-control"}
                                        id="emerphone"
                                        placeholder="Phone *"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        name="emergencyContactNumber"
                                        value={emergencyContactNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                    {
                                        hasError("emergencyContactNumber") &&
                                        <div className="invalid-feedback">
                                            Please enter valid 9 digits
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="breaker"/>
                    <div className="form-row">
                        <div className="lead">Preferences</div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="light-label">
                                Special Diet or Food Allergies
                                <span className="optional">*optional</span>
                            </label>
                            <textarea
                                className="form-control"
                                id="diet"
                                rows="2"
                                placeholder="Optional"
                                name="specialDiet"
                                value={specialDiet}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="light-label">
                                ADA / Special Requirements
                                <span className="optional">*optional</span>
                            </label>
                            <textarea
                                className="form-control"
                                id="needs"
                                rows="2"
                                placeholder="Optional"
                                name="specialNeeds"
                                value={specialNeeds}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputState" className="light-label">Jacket Size</label>
                            <select id="inputState" className={hasError("jacketSize") ? "form-control is-invalid select select-error" : "form-control"} onChange={handleChange} value={jacketSize} name="jacketSize">
                                <option value="Choose size" disabled>Choose size</option>
                                <option value="Womens - Small">Womens - Small</option>
                                <option value="Womens - Medium">Womens - Medium</option>
                                <option value="Womens - Large">Womens - Large</option>
                                <option value="Womens - XL">Womens - XL</option>
                                <option value="Mens - Small">Mens - Small</option>
                                <option value="Mens - Medium">Mens - Medium</option>
                                <option value="Mens - Large">Mens - Large</option>
                                <option value="Mens - XL">Mens - XL</option>
                                <option value="Mens - XXL">Mens - XXL</option>
                            </select>
                            {
                                hasError("jacketSize") &&
                                <div className="invalid-feedback">
                                    Please select a size
                                </div>
                            }
                        </div>
                    </div>
                    <hr className="breaker"/>
                </div>
        )
    }
}

export default Step2;
