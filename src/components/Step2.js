import React, {Component} from 'react';

class Step2 extends Component {
    render() {
        const { currentStep, value } = this.props;
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
                        <div className="form-group col-md-5">
                            <div className="lead">Executive Assistant Information</div>
                        </div>
                        <div className="form-group col-md-1">
                            <div className="required">*required</div>
                        </div>
                        <div className="form-group col-md-5">
                            <div className="lead">Emergency Contact Information</div>
                        </div>
                        <div className="form-group col-md-1">
                            <div className="required">*required</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                id="asstName"
                                placeholder="Name *"
                                name="executiveAsstName"
                                required
                                value={executiveAsstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                id="emerName"
                                placeholder="Name"
                                name="emergencyContactName"
                                required
                                value={emergencyContactName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input
                                type="email"
                                className="form-control"
                                id="asstEmail"
                                placeholder="Email"
                                name="executiveAsstEmail"
                                required
                                value={executiveAsstEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <input
                                type="email"
                                className="form-control"
                                id="emergencyEmail"
                                placeholder="Email"
                                name="emergencyEmail"
                                required
                                value={emergencyEmail}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-3">
                            <input
                                type="tel"
                                className="form-control"
                                id="eophone"
                                placeholder="Office Phone"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                                name="executiveAsstOfficePhone"
                                value={executiveAsstOfficePhone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <input
                                type="tel"
                                className="form-control"
                                id="emphone"
                                placeholder="Mobile Phone *"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                                name="executiveAsstMobilePhone"
                                value={executiveAsstMobilePhone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <input
                                type="tel"
                                className="form-control"
                                id="emerphone"
                                placeholder="Phone"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                                name="emergencyContactNumber"
                                value={emergencyContactNumber}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <hr className="breaker"/>
                    <div className="form-row">
                        <div className="lead">Preferences</div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <div className="light-label">Special Diet or Food Allergies</div>
                        </div>
                        <div className="form-group col-md-1">
                            <div className="optional">*optional</div>
                        </div>
                        <div className="form-group col-md-5">
                            <div className="light-label">ADA / Special Requirements</div>
                        </div>
                        <div className="form-group col-md-1">
                            <div className="optional">*optional</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
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
                            <select id="inputState" className="form-control" onChange={handleChange} value={jacketSize} name="jacketSize">
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
                        </div>
                    </div>
                    <hr className="breaker"/>
                </div>
        )
    }
}

export default Step2;
