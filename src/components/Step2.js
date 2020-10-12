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
            <div>
                <p className="lead">Miscellaneous Information:</p>
                <div className="form-group">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="asstName">Executive Assistant's Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="asstName"
                                placeholder="Required"
                                name="executiveAsstName"
                                value={executiveAsstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="asstEmail">Executive Assistant's Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="asstEmail"
                                placeholder="Required"
                                name="executiveAsstEmail"
                                value={executiveAsstEmail}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="eophone">EA's Office Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="eophone"
                                placeholder="(111)-222-3333"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                                name="executiveAsstOfficePhone"
                                value={executiveAsstOfficePhone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="emphone">EA's Mobile Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="emphone"
                                placeholder="(111)-222-3333"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                                name="executiveAsstMobilePhone"
                                value={executiveAsstMobilePhone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="emerName">Emergency Contact Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="emerName"
                                placeholder="Required"
                                name="emergencyContactName"
                                value={emergencyContactName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="diet">Special Diet or Food Allergies</label>
                            <textarea
                                className="form-control"
                                id="diet"
                                rows="3"
                                placeholder="Optional"
                                name="specialDiet"
                                value={specialDiet}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="emerphone">Emergency Contact Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="emerphone"
                                placeholder="(111)-222-3333"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                                name="emergencyContactNumber"
                                value={emergencyContactNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="needs">ADA/Special Needs</label>
                            <textarea
                                className="form-control"
                                id="needs"
                                rows="3"
                                placeholder="Optional"
                                name="specialNeeds"
                                value={specialNeeds}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputState">Jacket Size (for giveaway)</label>
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
                </div>
            </div>
        )
    }
}

export default Step2;
