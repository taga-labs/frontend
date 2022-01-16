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

// Stylesheets
import '../../../assets/styles/layout.css';
import '../../../assets/styles/typography.css';
import '../../../assets/styles/interactions.css';
import '../../../assets/styles/img.css';

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
                    password: null
                }
            }
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

    render() {
        return(
            <div className="container overall">
                <div className="container content">
                    <div className="container onboarding">
                        <StepNav currentStep={this.state.currentStep} />
                        <div className="container onboarding content">

                        </div>
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