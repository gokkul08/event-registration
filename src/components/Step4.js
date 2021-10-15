import React, { Component } from 'react';
import arrowForward from "../images/arrow_forward.png";

class Step4 extends Component {
    render() {
        const { currentStep, value } = this.props;
        const {
            riseAndShineYoga,
            guidedMorningHike,
            massageOrFacial,
            maleOrFemaleTherapist,
            tennisPro,
            golfPro,
            // golfGroup,
        } = value;

        if (currentStep !== 4) {
            return null;
        }

        const handleChange = (e) => {
            this.props.handleChange(e);
        };

        return(
            <div>
                    <div className="form-group">
                    <div className="form-row">
                            <div className="lead">Activities</div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <div className="alert alert-warning alert-note" role="alert">
                                    We have organized a variety of activities designed for you to connect with your colleagues and enjoy the beauty of the Sonoran Desert.  
                                    Activities will be available throughout the day on Tuesday 11/9 and Wednesday 11/10 for you to drop into as your schedule allows. 
                                    You’ll receive more information on these activities upon arrival. Additionally, we are offering the following OPTIONAL activities that require prior registration. Please indicate your interest below.
                                    <br/><br/>
                                    We will do our best to accommodate your preferences as your schedule and availability permits. Please contact <a href="mailto: Activities@iac.com">Activities@iac.com</a> with any activity related questions.
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="lead">Rise & Shine Yoga <span className="light-lead">(All Levels; Available daily from 6:30am-7:30am; Yoga Mat, Water and Towels will be provided)</span></div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <div className="alert alert-info alert-note" role="alert">
                                    <b>Enjoy yoga amidst the saguaro and surrounding mountains</b>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <span className="light-label">Are you interested in participating in Rise & Shine Yoga?</span>
                                <select id="riseAndShineYoga" className="form-control" onChange={handleChange} value={riseAndShineYoga} name="riseAndShineYoga">
                                    <option value="Choose option" disabled>Choose option</option>
                                    <option value="Tuesday 11/9">Tuesday 11/9</option>
                                    <option value="Wednesday 11/10">Wednesday 11/10</option>
                                    <option value="Thursday 11/11">Thursday 11/11</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <hr className="breaker"/>
                        <div className="form-row">
                            <div className="lead">Guided Morning Hike<span className="light-lead">(All Levels; Available daily from 6:30am-7:30am)</span></div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <div className="alert alert-info alert-note" role="alert">
                                    <b>Start your morning off exploring the Sonoran Desert</b>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <span className="light-label">Are you interested in participating in a Guided Morning Hike?</span>
                                <select id="guidedMorningHike" className="form-control" onChange={handleChange} value={guidedMorningHike} name="guidedMorningHike">
                                    <option value="Choose option" disabled>Choose option</option>
                                    <option value="Tuesday 11/9">Tuesday 11/9</option>
                                    <option value="Wednesday 11/10">Wednesday 11/10</option>
                                    <option value="Thursday 11/11">Thursday 11/11</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <hr className="breaker"/>
                        <div className="form-row">
                            <div className="lead">Spa Services <span className="light-lead">(Please note, you will be asked to complete a health questionnaire upon arrival at the spa.)</span></div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <div className="alert alert-info alert-note" role="alert">
                                    <b>Experience a 50 minute relaxing massage or 50 minute holistic facial at Ritz-Carlton’s award winning spa</b>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <span className="light-label">Are you interested in a 50 minute relaxing massage or 50 minute holistic facial?</span>
                                <select id="massageOrFacial" className="form-control" onChange={handleChange} value={massageOrFacial} name="massageOrFacial">
                                    <option value="Choose option" disabled>Choose option</option>
                                    <option value="Massage">Massage</option>
                                    <option value="Facial">Facial</option>
                                    <option value="Neither">Neither</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <span className="light-label">Preference for male or female therapist</span>
                                <select id="maleOrFemaleTherapist" className="form-control" onChange={handleChange} value={maleOrFemaleTherapist} name="maleOrFemaleTherapist">
                                    <option value="Choose option" disabled>Choose option</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="No Preference">No preference on male/female therapist</option>
                                    <option value="Not Applicable">Not applicable</option>
                                </select>
                            </div>
                        </div>
                        <hr className="breaker"/>
                        <div className="form-row">
                            <div className="lead">Tennis Clinic 1:1 with Tennis Pro</div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <div className="alert alert-info alert-note" role="alert">
                                    <b>Spend an hour with a Tennis Pro at the Tennis Club at Dove Mountain for a private, 1-on-1 clinic</b>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <span className="light-label">Are you interested in participating in a tennis clinic with a Tennis Pro?</span>
                                <select id="tennisPro" className="form-control" onChange={handleChange} value={tennisPro} name="tennisPro">
                                    <option value="Choose option" disabled>Choose option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <hr className="breaker"/>
                        <div className="form-row">
                            <div className="lead">Golf Clinic 1:1 with Golf Pro</div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <div className="alert alert-info alert-note" role="alert">
                                    <b>Spend an hour with a Golf Pro at the renowned Golf Club at Dove Mountain for a private, 1-on-1 clinic</b>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <span className="light-label">Are you interested in participating in a golf clinic with a Golf Pro?</span>
                                <select id="golfPro" className="form-control" onChange={handleChange} value={golfPro} name="golfPro">
                                    <option value="Choose option" disabled>Choose option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        {/* <div className="form-row">
                            <div className="form-group col-md-12">
                                <span className="light-label">If there are enough participating, would you be interested in joining a group round of golf?</span>
                                <select id="golfGroup" className={hasError("golfGroup") ? "form-control is-invalid select-error" : "form-control"} onChange={handleChange}
                                        value={golfGroup} name="golfGroup">
                                    <option value="Choose option" disabled>Choose option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                {
                                    hasError("golfGroup") &&
                                    <div className="invalid-feedback">
                                        Please select an option
                                    </div>
                                }
                            </div>
                        </div> */}
                        <hr className="breaker" />
                    </div>
                <button
                    className="btn btn-warning float-right next button-style">
                    Submit&nbsp;<img src={arrowForward} alt="forward-arrow"/>
                </button>
            </div>
        )
    }
}

export default Step4;
