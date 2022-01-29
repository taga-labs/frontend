import React from 'react';
import ReactDOM from 'react-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLongArrowAltLeft, faLongArrowAltRight, faCheck, faTimes, faUser, faLock } from '@fortawesome/free-solid-svg-icons';

// Carousel module
import { Carousel } from 'react-responsive-carousel';

// Stylesheets
import '../../../../assets/styles/layout.css';
import '../../../../assets/styles/typography.css';
import '../../../../assets/styles/interactions.css';
import '../../../../assets/styles/img.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Images
import InvestorGraphic from '../../../../assets/img/investor-graphic.svg';
import ShareholderGraphic from '../../../../assets/img/shareholder-graphic.svg';
import StartupGraphic from '../../../../assets/img/startup-graphic.svg';

class AdditionalQuestionsStartup extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <div className="container account types">
                        <a className="text signin header">Additional questions for existing shareholders.</a>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className="container onboarding footer content">
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <a onClick={() => {this.props.functions.NextSection(false, this.props.state.accountInfo)}} className="text signin link"><FontAwesomeIcon icon={faLongArrowAltLeft} color={"#4F68B1"} /> Back to Account Type</a>
                        <a onClick={this.nextStep} className="text signin link">Carry On <FontAwesomeIcon icon={faLongArrowAltRight} color={"#AF6AAC"} /></a>
                    </div>
                </div>
            </div>
        )
    }
}

class AdditionalQuestionsShareholder extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <div className="container account types">
                        <a className="text signin header">Additional questions for <span className="text signin header keyword">existing shareholders.</span></a>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className="container onboarding footer content">
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <a onClick={() => {this.props.functions.NextSection(false, this.props.state.accountInfo)}} className="text signin link"><FontAwesomeIcon icon={faLongArrowAltLeft} color={"#4F68B1"} /> Back to Account Type</a>
                        <a onClick={this.nextStep} className="text signin link">Carry On <FontAwesomeIcon icon={faLongArrowAltRight} color={"#AF6AAC"} /></a>
                    </div>
                </div>
            </div>
        )
    }
}

class AdditionalQuestions extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSlide: 0
        }

    }

    componentDidUpdate() {
        console.log(this.props.state)
    }

    render() {
        return(
            <Carousel
                showArrows={false}
                showStatus={false}
                swipeable={false}
                showThumbs={false}
                selectedItem={this.state.currentSlide}
            >
                <AdditionalQuestionsShareholder state={this.props.state} functions={this.props.functions} />
                {/* {(this.props.state.type.) ? <AdditionalQuestionsStartup state={this.props.state} functions={this.props.functions}/>} */}
            </Carousel>
        )
    }
}

class AccountType extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSlide: 0,
            data: {
                investor: false,
                shareholder: false,
                company: false
            }
        }

        this.setType = this.setType.bind(this);
        this.toAdditionalQuestions = this.toAdditionalQuestions.bind(this);
    }

    setType(type) {
        var obj = {
            currentSlide: this.state.currentSlide,
            data: {
                investor: (type == "investor") ? !this.state.data.investor : this.state.data.investor,
                shareholder: (type == "shareholder") ? !this.state.data.shareholder : this.state.data.shareholder,
                company: (type == "company") ? !this.state.data.company : this.state.data.company
            }
        }

        this.setState(obj);
    }

    toAdditionalQuestions() {

    }

    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <div className="container account types">
                        <a className="text signin header">What kind of <span className="text signin header keyword">user</span> are you?</a>
                        <br />
                        <br />
                        <br />
                        <div className="container account types interior">
                            <button onClick={() => {this.setType("investor")}} className={(this.state.data.investor) ? "button account type selected" : "button account type"} style={{marginRight: '3vw'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={InvestorGraphic} className="icon account type" />
                                    <br />
                                    <a className="text account type header">An Investor / Trader</a>
                                    {(this.state.data.investor) ? <FontAwesomeIcon style={{position: 'absolute', top: '1vh', right: '1vh'}} color={"#4F68B1"} icon={faCheck} /> : <></> }
                                </div>
                            </button>
                            <button onClick={() => {this.setType("shareholder")}} className={(this.state.data.shareholder) ? "button account type selected" : "button account type"} style={{marginRight: '3vw'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={ShareholderGraphic} className="icon account type" />
                                    <br />
                                    <a className="text account type header">An Existing Shareholder</a>
                                    {(this.state.data.shareholder) ? <FontAwesomeIcon style={{position: 'absolute', top: '1vh', right: '1vh'}} color={"#4F68B1"} icon={faCheck} /> : <></> }
                                </div>
                            </button>
                            <button onClick={() => {this.setType("company")}} className={(this.state.data.company) ? "button account type selected" : "button account type"}>
                                <div style={{position: 'relative'}}>
                                    <img src={StartupGraphic} className="icon account type" />
                                    <br />
                                    <a className="text account type header">A Startup / Private Company</a>
                                    {(this.state.data.company) ? <FontAwesomeIcon style={{position: 'absolute', top: '1vh', right: '1vh'}} color={"#4F68B1"} icon={faCheck} /> : <></> }
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container onboarding footer content">
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <a onClick={() => {this.props.functions.nextStep(false, this.props.state.accountInfo, "stepOne")}} className="text signin link"><FontAwesomeIcon icon={faLongArrowAltLeft} color={"#4F68B1"} /> Back to Account Credentials</a>
                        <a onClick={() => { (!this.state.data.shareholder && !this.state.data.company && this.state.data.investor) ? this.props.functions.nextStep(true, this.state, "stepTwo") : this.toAdditionalQuestions()}} className="text signin link">Keep Going <FontAwesomeIcon icon={faLongArrowAltRight} color={"#AF6AAC"} /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default class StepTwo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            type: {
                investor: false,
                shareholder: false,
                company: false
            },
            shareholderInfo: false,
            companyInfo: false
        }

        this.functions = this.props.functions;
    }

    render() {
        return(
            <div className="container onboarding content">
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    swipeable={false}
                    showThumbs={false}
                    selectedItem={this.state.currentSlide}
                >
                    <AccountType state={this.state} functions={this.functions} />
                </Carousel>
            </div>
        )
    }
}