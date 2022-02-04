import React from 'react';
import ReactDOM from 'react-dom';

// Stylesheets
import '../../../assets/styles/layout.css';
import '../../../assets/styles/typography.css';
import '../../../assets/styles/interactions.css';
import '../../../assets/styles/img.css';

// Images
import LogoDarkBG from '../../../assets/img/logo-dark-bg.svg';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            identifier: null,
            password: null
        };

        this.onIdentifierChange = this.onIdentifierChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onIdentifierChange(e) {
        const value = e.target.value;

        this.setState({identifier: value});
    }

    onPasswordChange(e) {
        const value = e.target.value;

        this.setState({password: value});
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div className="container overall">
                <div className="container content">
                    <div id="signin-half" className="container content half">

                    </div>
                    <div className="container content half">
                        <div className="container content half inner">
                            <div className="container signin form">
                                <div className="container company">
                                    <a href="/" style={{textDecoration: 'none', color: 'black'}}>
                                        <img src={LogoDarkBG} className="icon" />
                                        <a className="text nav logo">Taga</a>
                                    </a>
                                </div>
                                <br />
                                <br />
                                <a className="text signin header">Let's Get You Signed In.</a>
                                <br />
                                <br />
                                <form onSubmit={this.handleSubmit} style={{textAlign: 'center', width: '100%'}}>
                                    <input autoFocus onChange={this.onIdentifierChange} placeholder={"email or username"} className="input signin" />
                                    <br />
                                    <br />
                                    <input onChange={this.onPasswordChange} placeholder={"password"} type="password" className="input signin" />
                                    <br />
                                    <br />
                                    <button className="button signin">Sign In</button>
                                    <br />
                                    <br />
                                    <a className="text under signin">Don't have an account? <span className="text under signin link"><a href="get-started">Get Started!</a></span></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}