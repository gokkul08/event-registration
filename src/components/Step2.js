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
                            <div className="optional">*optional</div>
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
                            <label htmlFor="inputState" className="light-label">Jacket Size (for giveaway)</label>
                            <select id="inputState" className="form-control" onChange={handleChange} value={jacketSize} name="jacketSize">
                                <option value="Women's - Extra Small">Women's - Extra Small</option>
                                <option value="Women's - Small">Women's - Small</option>
                                <option value="Women's - Medium">Women's - Medium</option>
                                <option value="Women's - Large">Women's - Large</option>
                                <option value="Women's - Extra Large">Women's - Extra Large</option>
                                <option value="Men's - Extra Small">Men's - Extra Small</option>
                                <option value="Men's - Small">Men's - Small</option>
                                <option value="Men's - Medium">Men's - Medium</option>
                                <option value="Men's - Large">Men's - Large</option>
                                <option value="Men's - Extra Large">Men's - Extra Large</option>
                            </select>
                        </div>
                    </div>
                    <hr className="breaker"/>
                </div>
        )
    }
}

export default Step2;
