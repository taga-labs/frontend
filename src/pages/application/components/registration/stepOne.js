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



class CreateAccount extends React.Component {
    constructor(props) {
        super(props)

        
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

        this.functions = this.props.functions;
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
                password: this.state.password1,
                type: null
            }

            var lengthCheck = (obj.password.length > 8);
            var specialCharCheck = obj.password.includes(".") || obj.password.includes("/") || obj.password.includes("*") || obj.password.includes("[") || obj.password.includes("]") || obj.password.includes("!") || obj.password.includes(":") || obj.password.includes(";") || obj.password.includes("'") || obj.password.includes("-") || obj.password.includes("-") || obj.password.includes("+") || obj.password.includes("=") || obj.password.includes("`") || obj.password.includes("~");

            if(!lengthCheck || !specialCharCheck) {
                this.setState({passwordLengthCheck: lengthCheck, passwordSpecialCharCheck: specialCharCheck});
            } else {
                this.functions.nextStep(true, {identifier: this.state.identifier, password: obj.password}, "stepOne");
            }
        // }
    }

    render() {
        return(
            <div className="container onboarding content">
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
            </div>
        )
    }
}