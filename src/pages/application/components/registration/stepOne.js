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

// API
import {
    AuthenticationCreateAccount
} from '../../../../api/index';

// Images
import InvestorGraphic from '../../../../assets/img/investor-graphic.svg';
import ShareholderGraphic from '../../../../assets/img/shareholder-graphic.svg';
import StartupGraphic from '../../../../assets/img/startup-graphic.svg';

class AccountType extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            investor: false,
            shareholder: false,
            company: false
        }

        this.setType = this.setType.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

    setType(type) {
        var obj = {
            investor: (type == "investor") ? !this.state.investor : this.state.investor,
            shareholder: (type == "shareholder") ? !this.state.shareholder : this.state.shareholder,
            company: (type == "company") ? !this.state.company : this.state.company
        }

        this.setState(obj);
    }

    nextStep() {
        var obj = {
            identifier: this.props.state.accountInfo.identifier,
            password: this.props.state.accountInfo.password,
            types: this.state
        }

        this.props.functions.nextStep(true, "step_one", obj)
    }

    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <div className="container account types">
                        <a className="text signin header">What kind of user are you?</a>
                        <br />
                        <br />
                        <br />
                        <div className="container account types interior">
                            <button onClick={() => {this.setType("investor")}} className={(this.state.investor) ? "button account type selected" : "button account type"} style={{marginRight: '3vw'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={InvestorGraphic} className="icon account type" />
                                    <br />
                                    <a className="text account type header">An Investor / Trader</a>
                                    {(this.state.investor) ? <FontAwesomeIcon style={{position: 'absolute', top: '1vh', right: '1vh'}} color={"#4F68B1"} icon={faCheck} /> : <></> }
                                </div>
                            </button>
                            <button onClick={() => {this.setType("shareholder")}} className={(this.state.shareholder) ? "button account type selected" : "button account type"} style={{marginRight: '3vw'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={ShareholderGraphic} className="icon account type" />
                                    <br />
                                    <a className="text account type header">An Existing Shareholder</a>
                                    {(this.state.shareholder) ? <FontAwesomeIcon style={{position: 'absolute', top: '1vh', right: '1vh'}} color={"#4F68B1"} icon={faCheck} /> : <></> }
                                </div>
                            </button>
                            <button onClick={() => {this.setType("company")}} className={(this.state.company) ? "button account type selected" : "button account type"}>
                                <div style={{position: 'relative'}}>
                                    <img src={StartupGraphic} className="icon account type" />
                                    <br />
                                    <a className="text account type header">A Startup / Private Company</a>
                                    {(this.state.company) ? <FontAwesomeIcon style={{position: 'absolute', top: '1vh', right: '1vh'}} color={"#4F68B1"} icon={faCheck} /> : <></> }
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container onboarding footer content">
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <a onClick={() => {this.props.functions.NextSection(false, this.props.state.accountInfo)}} className="text signin link"><FontAwesomeIcon icon={faLongArrowAltLeft} color={"#4F68B1"} /> Back to Account Credentials</a>
                        <a onClick={this.nextStep} className="text signin link">Keep Going <FontAwesomeIcon icon={faLongArrowAltRight} color={"#AF6AAC"} /></a>
                    </div>
                </div>
            </div>
        )
    }
}

class CreateAccount extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            identifier: null,
            password1: null,
            password2: null,
            focus: null,
            idCheck: null,
            passwordCheck: null,
            passwordLengthCheck: null,
            passwordNumberCheck: null,
            passwordSpecialCharCheck: null
        }

        this.identifierRef = React.createRef();
        this.password1Ref = React.createRef();
        this.password2Ref = React.createRef();

        this.onIdentifierChange = this.onIdentifierChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.onFocus = this.onFocus.bind(this);
    }

    componentDidMount() {
        console.log(this.state.passwordCheck)
    }

    onIdentifierChange(e) {
        const value = e.target.value;

        this.setState({identifier: value});
    }

    onPasswordChange(type, e) {
        const value = e.target.value;

        var obj = (type == 1) ? {password1 : (value != "") ? value : null} : {password2 : (value != "") ? value : null};

        if(type == 1) {
            if(this.state.password2 != null) {
                obj.passwordCheck = (value == this.state.password2)
            }
        } else {
            if(this.state.password1 != null) {
                obj.passwordCheck = (value == this.state.password1)
            }
        }

        this.setState(obj);
    }

    onFocus(target) {
        this.setState({focus: target});
    }

    onSubmit(e) {
        e.preventDefault();

        // if(this.state.idCheck && this.state.passwordCheck) {
            var obj = {
                identifier: this.state.identifier,
                password: this.state.password1
            }

            var lengthCheck = (obj.password.length > 8);
            var specialCharCheck = obj.password.includes(".") || obj.password.includes("/") || obj.password.includes("*") || obj.password.includes("[") || obj.password.includes("]") || obj.password.includes("!") || obj.password.includes(":") || obj.password.includes(";") || obj.password.includes("'") || obj.password.includes("-") || obj.password.includes("-") || obj.password.includes("+") || obj.password.includes("=") || obj.password.includes("`") || obj.password.includes("~");

            if(!lengthCheck || !specialCharCheck) {
                this.setState({passwordLengthCheck: lengthCheck, passwordSpecialCharCheck: specialCharCheck});
            } else {
                this.props.functions.NextSection(true, {identifier: this.state.identifier, password: obj.password});
            }
        // }
    }

    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <div className="container form onboarding">
                        <form onSubmit={this.onSubmit}>
                            <a className="text signin header">Create Account</a>
                            <br />
                            <br />
                            <br />
                            <a className="text paragraph about register">Email or Username</a>
                            <div ref={this.identifierRef} onFocus={() => {this.setState({focus: 1})}} className={(this.state.focus == 1) ? "input container selected" : "input container"}>
                                <div className={"icon container input"}>
                                    <FontAwesomeIcon icon={faUser} color={"lightgray"} />
                                </div>
                                <input onFocus={() => { this.onFocus(1) }} onChange={this.onIdentifierChange} className="input create" placeholder="enter an identifier..." />
                                <div className={"icon container input"}>
                                    {(this.state.idCheck) ? <FontAwesomeIcon icon={faCheck} color={"#0ad48b"} /> : <FontAwesomeIcon icon={faCheck} color={"white"} />}
                                </div>
                            </div>
                            <br />
                            <a className="text paragraph about register">Set a Password</a>
                            <div ref={this.password1Ref} onFocus={() => {this.setState({focus: 2})}} className={(this.state.focus == 2) ? "input container selected" : "input container"}>
                                <div className={"icon container input"}>
                                    <FontAwesomeIcon icon={faLock} color={"lightgray"} />
                                </div>
                                <input onFocus={() => { this.onFocus(1) }} onChange={(e) => { this.onPasswordChange(1, e) }} className="input create" type="password" placeholder="choose a password" />
                                <div className={"icon container input"}>
                                    {(this.state.passwordCheck == true) ? <FontAwesomeIcon icon={faCheck} color={"#0ad48b"} /> : (this.state.passwordCheck == false) ? <FontAwesomeIcon icon={faTimes} color={"red"} /> : <FontAwesomeIcon icon={faTimes} color={"transparent"} />}
                                </div>
                            </div>
                            <br />
                            <a className="text paragraph about register">Re-enter that Password</a>
                            <div ref={this.password2Ref} onFocus={() => {this.setState({focus: 3})}} className={(this.state.focus == 3) ? "input container selected" : "input container"}>
                                <div className={"icon container input"}>
                                    <FontAwesomeIcon icon={faLock} color={"lightgray"} />
                                </div>
                                <input onChange={(e) => { this.onPasswordChange(2, e) }} className="input create" type="password" placeholder="reenter that password" />
                                <div className={"icon container input"}>
                                    {(this.state.passwordCheck == true) ? <FontAwesomeIcon icon={faCheck} color={"#0ad48b"} /> : (this.state.passwordCheck == false) ? <FontAwesomeIcon icon={faTimes} color={"red"} /> : <FontAwesomeIcon icon={faTimes} color={"transparent"} />}
                                </div>
                            </div>
                            <br />
                            <button type="submit" className="button signin">Continue <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                            <div className="container error message">
                                <br />
                                { (this.state.idCheck) ? <a className="text message error">Username or email already in use.</a> : <></> } 
                                { (this.state.passwordLengthCheck || this.state.passwordSpecialCharCheck) ? <a className="text message error">Password must be at least 8 characters long and contain at least one number and symbol.</a> : <></> }
                            </div>
                        </form>
                    </div>
                    <div className="container onboarding footer content">
                        <a href="/signin" className="text signin link"><FontAwesomeIcon icon={faLongArrowAltLeft} color={"#4F68B1"} /> Back to Sign In</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default class StepOne extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSlide: 0,
            accountInfo: {
                identifier: null,
                password: null,
                type: null
            }
        }

        this.functions = this.props.functions;

        this.functions.NextSection = this.NextSection.bind(this);
    }

    NextSection(direction, info) {
        this.setState({
            currentSlide: (direction) ? this.state.currentSlide + 1 : this.state.currentSlide - 1,
            accountInfo: info
        })
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
                    <CreateAccount state={this.state} functions={this.functions} />
                    <AccountType state={this.state} functions={this.functions} />
                </Carousel>
            </div>
        )
    }
}