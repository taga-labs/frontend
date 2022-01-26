import React from 'react';
import ReactDOM from 'react-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLongArrowAltLeft, faLongArrowAltRight, faCheck, faTimes, faUser, faLock } from '@fortawesome/free-solid-svg-icons';

// Stylesheets
import '../../../../assets/styles/layout.css';
import '../../../../assets/styles/typography.css';
import '../../../../assets/styles/interactions.css';
import '../../../../assets/styles/img.css';

export default class StepThree extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <div className="container wallet selection">
                        <div className="container half wallet selection">
                            
                        </div>
                        <div className="container half wallet creation">

                        </div>
                    </div>
                </div>
                <div className="container onboarding footer content">
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <a onClick={() => {this.props.functions.nextStep(false, this.props.state.accountInfo, "stepTwo")}} className="text signin link"><FontAwesomeIcon icon={faLongArrowAltLeft} color={"#4F68B1"} /> Back to Personal Questions</a>
                    </div>
                </div>
            </div>
        )
    }
}