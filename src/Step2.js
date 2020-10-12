import React, {Component} from 'react';

class Step2 extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null;
        }

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
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="asstEmail">Executive Assistant's Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="asstEmail"
                                placeholder="Required"
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
                                name="eophone"
                                placeholder="(111)-222-3333"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="emphone">EA's Mobile Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="emphone"
                                name="emphone"
                                placeholder="(111)-222-3333"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
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
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="diet">Special Diet or Food Allergies</label>
                            <textarea
                                className="form-control"
                                id="diet"
                                rows="3"
                                placeholder="Optional"
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
                                name="emerphone"
                                placeholder="(111)-222-3333"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="needs">ADA/Special Needs</label>
                            <textarea
                                className="form-control"
                                id="needs"
                                rows="3"
                                placeholder="Optional"
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputState">Jacket Size (for giveaway)</label>
                            <select id="inputState" className="form-control">
                                <option selected>Women's - Extra Small</option>
                                <option>Women's - Small</option>
                                <option>Women's - Medium</option>
                                <option>Women's - Large</option>
                                <option>Women's - Extra Large</option>
                                <option>Men's - Extra Small</option>
                                <option>Men's - Small</option>
                                <option>Men's - Medium</option>
                                <option>Men's - Large</option>
                                <option>Men's - Extra Large</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step2;
