import React from 'react';
import ReactDOM from 'react-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLongArrowAltLeft, faLongArrowAltRight, faCheck, faTimes, faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import { Carousel } from 'react-responsive-carousel';

// Stylesheets
import '../../../assets/styles/layout.css';
import '../../../assets/styles/typography.css';
import '../../../assets/styles/interactions.css';
import '../../../assets/styles/img.css';

// Images
import LogoDarkBG from '../../../assets/img/general/logo-dark-bg.svg';
import { AuthenticationCheckAccount } from '../../../api';

class WaitingList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container content" style={{height: '100vh'}}>
                <div className="long logo container">
                    <div className="container company" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <a href="/" style={{textDecoration: 'none', color: 'black'}}>
                            <img src={LogoDarkBG} className="icon" style={{width: '50px'}} />
                            <a className="text nav logo" style={{marginTop: '0.5rem'}}>Taga</a>
                        </a>
                    </div>
                </div>
                <div className="container onboarding">
                    <div className="container onboarding content">
                        <div className="container onboarding content interior">
                            <a className="text tagline">You're on the <span className="text keyword tagline">waitlist.</span></a>
                            <br />
                            <br />
                            <br />
                            <a className="text paragraph main" style={{fontSize: '3vh'}}>Taga will be arriving Q2 2022</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            identifier: null,
            password: null,
            errorCheck: null
        };

        this.onIdentifierChange = this.onIdentifierChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onIdentifierChange(e) {
        const value = e.target.value;

        this.setState({identifier: value});
    }

    onPasswordChange(e) {
        const value = e.target.value;

        this.setState({password: value});
    }

    onSubmit(e) {
        e.preventDefault();

        AuthenticationCheckAccount({identifier: this.state.identifier, password: this.state.password}).then((results) => {
            var response = results.data;
            console.log(response)
            if(response.error) {
                this.setState({errorCheck: true});
            } else if(response.success) {
                this.props.functions.nextSlide();
            }
        });
    }

    render() {
        return(
                <div className="container content" style={{height: '100vh'}}>
                    <div id="signin-half" className="container content half">

                    </div>
                    <div className="container content half" style={{textAlign: 'left'}}>
                        <div className="container content half inner">
                            <div className="container signin form">
                                <div className="container company" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <a href="/" style={{textDecoration: 'none', color: 'black', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <img src={LogoDarkBG} className="icon" style={{width: '50px'}} />
                                        <a className="text nav logo">Taga</a>
                                    </a>
                                </div>
                                <br />
                                <br />
                                <a className="text signin header">Let's Get You Signed In.</a>
                                <br />
                                <br />
                                <form onSubmit={this.onSubmit}>
                                <a className="text paragraph about register">Email or Username</a>
                                <div ref={this.identifierRef} onFocus={() => {this.setState({focus: 1})}} className={(this.state.focus == 1) ? "input container selected" : "input container"}>
                                    <div className={"icon container input"}>
                                        <FontAwesomeIcon icon={faUser} color={"lightgray"} />
                                    </div>
                                    <input onChange={this.onIdentifierChange} className="input create" placeholder="enter an identifier..." />
                                    <div className={"icon container input"}>
                                        {(this.state.identifierCheck == true) ? <FontAwesomeIcon icon={faCheck} color={"#0ad48b"} /> : (this.state.identifierCheck == false) ? <FontAwesomeIcon icon={faTimes} color={"red"} /> : <FontAwesomeIcon icon={faCheck} color={"transparent"} />}
                                    </div>
                                </div>
                                <br />
                                <a className="text paragraph about register">Your Password</a>
                                <div ref={this.password1Ref} onFocus={() => {this.setState({focus: 2})}} className={(this.state.focus == 2) ? "input container selected" : "input container"}>
                                    <div className={"icon container input"}>
                                        <FontAwesomeIcon icon={faLock} color={"lightgray"} />
                                    </div>
                                    <input onChange={(e) => { this.onPasswordChange(e) }} className="input create" type="password" placeholder="choose a password" />
                                    <div className={"icon container input"}>
                                        {(this.state.passwordCheck == true) ? <FontAwesomeIcon icon={faCheck} color={"#0ad48b"} /> : (this.state.passwordCheck == false) ? <FontAwesomeIcon icon={faTimes} color={"red"} /> : <FontAwesomeIcon icon={faTimes} color={"transparent"} />}
                                    </div>
                                </div>
                                <br />
                                <button type="submit" className="button signin">Continue <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                                <div className="container error message">
                                    <br />
                                    {/* { (this.state.identifierType) ? <a className="text message error">Username or email already in use.</a> : <></> }  */}
                                    { (this.state.errorCheck) ? <a className="text message error">Your username / email or password is incorrect.</a> : <></> }
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default class defaultExport extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSlide: 0
        }

        this.nextSlide = this.nextSlide.bind(this);

        this.functions = {
            nextSlide: this.nextSlide
        }
    }

    nextSlide() {
        this.setState({currentSlide: 1});
    }

    render() {
        return(
            <div className="container overall">
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    swipeable={false}
                    showThumbs={false}
                    selectedItem={this.state.currentSlide}
                    showIndicators={false}
                >
                    <SignIn functions={this.functions} />
                    <WaitingList />
                </Carousel>
            </div>
        )
    }
}