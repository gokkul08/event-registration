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
            dietaryRestrictions,
            allergies,
            allergyOther,
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
                            <label htmlFor="inputState" className="light-label">Jacket Size<span className="required-break">*required</span></label>
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
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="light-label">
                                Dietary Restrictions
                                <span className="required-break">*required</span>
                            </label>
                            <select id="inputDiet" className="form-control" onChange={handleChange} value={dietaryRestrictions} name="dietaryRestrictions">
                                <option value="None">None</option>
                                <option value="Halal">Halal</option>
                                <option value="Kosher">Kosher</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Vegetarian">Vegetarian</option>
                            </select>
                        </div>
                        <div className="form-group col-md-12">
                            <label className="light-label">
                                Allergies
                                <span className="required-break">*required</span>
                            </label>
                            <select id="inputAllergies" className="form-control" onChange={handleChange} value={allergies} name="allergies">
                                <option value="None">None</option>
                                <option value="Dairy/Milk">Dairy/Milk</option>
                                <option value="Eggs">Eggs</option>
                                <option value="Fish">Fish</option>
                                <option value="Gluten">Gluten</option>
                                <option value="Peanuts">Peanuts</option>
                                <option value="Shellfish">Shellfish</option>
                                <option value="Soy">Soy</option>
                                <option value="Tree Nuts">Tree Nuts</option>
                                <option value="Wheat">Wheat</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        { allergies === 'Other' && 
                            <div className="form-group col-md-12">
                                <label className="light-label">(Allergies) Please specify<span className="required-break">*required</span></label>
                                <input
                                    type="text"
                                    className={hasError("allergyOther") ? "form-control is-invalid" : "form-control"}
                                    id="allergyOther"
                                    placeholder=""
                                    name="allergyOther"
                                    value={allergyOther}
                                    onChange={handleChange}
                                    required
                                />
                                {
                                    hasError("allergyOther") &&
                                    <div className="invalid-feedback">
                                        (Allergies) Please specify 
                                    </div>
                                }
                            </div>
                        }
                        <div className="form-group col-md-12">
                            <label className="light-label">
                                ADA / Special Requirements
                                <span className="required-break">*required</span>
                            </label>
                            <textarea
                                className={hasError("specialNeeds") ? "form-control is-invalid" : "form-control"}
                                id="needs"
                                rows="2"
                                placeholder="List special needs or type 'None'"
                                name="specialNeeds"
                                value={specialNeeds}
                                onChange={handleChange}
                                required
                            />
                            {
                                hasError("specialNeeds") &&
                                <div className="invalid-feedback">
                                    Please complete
                                </div>
                            }
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="alert alert-warning alert-note-disclaimer" role="alert">
                                <i>Allergy Disclaimer: We make every effort to identify ingredients that may cause allergic reactions for those individuals with food allergies. 
                                    Effort is made to instruct our food production partners on the severity of food allergies. Because of the number of meals served and the number of items used each day, 
                                    along with food product changes from food vendors, it cannot be guaranteed that every allergen in the food served will be identified and labeled. 
                                    There is the possibility that manufacturers of commercial foods or our catering partners could change the formulation at any time, without notice to us. 
                                    Attendees concerned with food allergies must be aware of this risk. We cannot assume any liability for adverse reactions to food consumed, 
                                    or items one may come in contact with while eating at the Conference or catered event. Attendees with life-threatening food allergies who may need to use an epi-pen should be carrying their own. 
                                    Conference and hotel staff are NOT trained to administer epi-pens and CANNOT provide or administer them.</i>
                            </div>
                        </div>
                    </div>
                    <hr className="breaker"/>
                </div>
        )
    }
}

export default Step2;
