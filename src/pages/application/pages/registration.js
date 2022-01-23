import React from 'react';
import ReactDOM from 'react-dom';

// Router
import {
    useLocation,
    useParams
} from "react-router-dom";

import {
    SessionGetRegistration,
    SessionCreateRegistration
} from '../../../api/index';

import {
    StepOne
} from '../components';

// Stylesheets
import '../../../assets/styles/layout.css';
import '../../../assets/styles/typography.css';
import '../../../assets/styles/interactions.css';
import '../../../assets/styles/img.css';

// Images
import LogoDarkBG from '../../../assets/img/logo-dark-bg.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLongArrowAltLeft, faLongArrowAltRight, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// Components
import {
    StepNav
} from '../components';

class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentStep: 1,
            data: {
                stepOne: {
                    email: null,
                    password: null,
                    type: null
                }
            }
        }

        this.nextStep = this.nextStep.bind(this);

        this.functions = {
            nextStep: this.nextStep
        }
    }

    componentDidMount() {
        var currentRegistration = SessionGetRegistration();

        var acceptedSteps = ["step-one", "step-two", "step-three", "step-four"];

        if(!this.props.params.step) {
            if(currentRegistration) {
                var redirectURL = (currentRegistration.currentStep == 1 ?
                    "step-one" : (currentRegistration.currentStep == 2) ?
                    "step-two" : (currentRegistration.currentStep == 3) ?
                    "step-three" : (currentRegistration.currentStep == 4) ? 
                    "step-four" : "step-one"
                );

                if(redirectURL != this.props.location.pathname.replace("/get-started/", "")) {
                    window.location.href = "/get-started/" + redirectURL;
                }
            } else {
                SessionCreateRegistration();
                window.location.href = "/get-started/step-one";
            }
        } else {
            if(currentRegistration) {
                var redirectURL = (currentRegistration.currentStep == 1 ?
                    "step-one" : (currentRegistration.currentStep == 2) ?
                    "step-two" : (currentRegistration.currentStep == 3) ?
                    "step-three" : (currentRegistration.currentStep == 4) ? 
                    "step-four" : "step-one"
                );

                if(redirectURL != this.props.location.pathname.replace("/get-started/", "")) {
                    window.location.href = "/get-started/" + redirectURL;
                }
            } else {
                SessionCreateRegistration();
                window.location.href = "/get-started/step-one";
            }
        }

        this.setState(currentRegistration);
    }

    nextStep(direction, info) {
        console.log(direction)
    }

    render() {
        return(
            <div className="container overall" style={{overflow: 'hidden'}}>
                <div className="container content">
                    <div className="long logo container">
                        <div className="container company">
                            <a href="/" style={{textDecoration: 'none', color: 'black'}}>
                                <img src={LogoDarkBG} className="icon" />
                                <a className="text nav logo">Taga</a>
                            </a>
                        </div>
                    </div>
                    <div className="container onboarding">
                        <StepNav currentStep={this.state.currentStep} />
                        {(this.state.currentStep == 1) ? <StepOne functions={this.functions} /> : <></>}
                    </div>
                </div>
            </div>
        )
    }
}

const withRouter = Registration => props => {
    const params = useParams();
    const location = useLocation();

    return (
        <Registration params={params} location={location} />
    )
}

export default withRouter(Registration);