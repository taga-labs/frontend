import React from 'react';
import ReactDOM from 'react-dom';

// Router
import {
    useLocation,
    useParams
} from "react-router-dom";

import {
    SessionGetRegistration,
    SessionCreateRegistration,
    SessionModifyRegistration
} from '../../../api/index';

// Carousel module
import { Carousel } from 'react-responsive-carousel';

// Stylesheets
import '../../../assets/styles/layout.css';
import '../../../assets/styles/typography.css';
import '../../../assets/styles/interactions.css';
import '../../../assets/styles/img.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Images
import LogoDarkBG from '../../../assets/img/logo-dark-bg.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLongArrowAltLeft, faLongArrowAltRight, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// Components
import {
    RegistrationStepNav as StepNav,
    RegistrationStepOne as StepOne,
    RegistrationStepTwo as StepTwo,
    RegistrationStepThree as StepThree
} from '../components';

class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentStep: 0,
            data: {
                stepOne: {
                    identifier: null,
                    password: null
                },
                stepTwo: {
                    type: null,
                    shareholderInfo: null,
                    companyInfo: null
                },
                stepThree: {
                    metaMaskWallets: null,
                    walletConnectWallets: null,

                }
            }
        }

        this.nextStep = this.nextStep.bind(this);

        this.functions = {
            nextStep: this.nextStep
        }
    }

    nextStep(direction, data, step) {
        var incStep = (direction) ? this.state.currentStep+1 : this.state.currentStep-1;

        this.setState({currentStep: incStep, data: data});
    }

    completeRegistration() {
        
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
                        <Carousel
                            showArrows={false}
                            showStatus={false}
                            swipeable={false}
                            showThumbs={false}
                            selectedItem={this.state.currentStep}
                        >
                            {/* <StepOne functions={this.functions} state={this.state} />
                            <StepTwo functions={this.functions} state={this.state} /> */}
                            <StepThree functions={this.functions} state={this.state} />
                        </Carousel>
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