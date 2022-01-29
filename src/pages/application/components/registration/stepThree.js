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
import MetaMaskLogo from '../../../../assets/img/3rd-party/metamask-fox.svg';
import WalletConnectLogo from '../../../../assets/img/3rd-party/walletconnect-square-white.svg';
import LogoLightBG from '../../../../assets/img/logo-light-bg.svg';

import NodeWalletConnect from "@walletconnect/node";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";

const walletConnector = new NodeWalletConnect({
    bridge: "https://bridge.walletconnect.org"
},{
    clientMeta: {
        description: "WalletConnect NodeJS Client",
        url: "https://nodejs.org/en/",
        icons: ["https://nodejs.org/static/images/logo.svg"],
        name: "WalletConnect",
    }
});

class WalletGeneration extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <div className="container wallet selection">
                        <a className="text signin header">Get started with a Taga wallet.</a>
                        <br />
                        <br />
                        <br />
                        <br />
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

class InitialWalletSelection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            metaMaskAccounts: false,
            walletConnectAccounts: false
        }

        this.connectWallet = this.connectWallet.bind(this);
    }

    connectWallet() {
        if(window.ethereum) {
            let ethereum = window.ethereum;

            ethereum.request({method:'eth_requestAccounts'}).then((accounts) => {
                this.setState({metaMaskAccounts: accounts});
            }).catch((err) => {
                this.setState({metaMaskAccounts: null});
            })
        } else {
            window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en");
        }
    }
    
    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <div className="container wallet selection">
                        <a className="text signin header">How do you want to connect?</a>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="container wallet selection interior">
                            <div className="container half wallet selection">
                                <a className="text tagline smaller">An existing wallet.</a>
                                <div className="container wallet buttons">
                                    <div className="container wallet-buttons">
                                        <div>
                                            <button onClick={() => {this.connectWallet()}} className={(this.state.metaMaskAccounts == null) ? "button wallet error" : (this.state.metaMaskAccounts == false) ? "button wallet neutral" : "button wallet success"}>
                                                <img src={MetaMaskLogo} className="wallet button img" />
                                                <br />
                                                MetaMask
                                            </button>
                                            <br />
                                            <br />
                                            <a className={(this.state.metaMaskAccounts == null) ? "text error wallet" : (this.state.metaMaskAccounts == false) ? "text neutral wallet" : "text success wallet"}>{ (this.state.metaMaskAccounts) ? this.state.metaMaskAccounts[0].substring(0, 5) + "..." + this.state.metaMaskAccounts[0].substring(this.state.metaMaskAccounts[0].length - 6, this.state.metaMaskAccounts[0].length - 1) : "Error! Try again."} {(this.state.metaMaskAccounts) ? <FontAwesomeIcon icon={faCheckCircle} color={"#0ad48b"} /> : <></>}</a>
                                        </div>
                                        <div>
                                            <button onClick={this.connectWallet} className="button wallet">
                                                <img src={WalletConnectLogo} className="wallet button img" />
                                                <br />
                                                Wallet Connect
                                            </button>
                                            <br />
                                            <br />
                                            <a className={(this.state.walletConnectAccounts == null) ? "text error wallet" : (this.state.walletConnectAccounts == false) ? "text neutral wallet" : "text success wallet"}>{ (this.state.walletConnectAccounts) ? this.state.walletConnectAccounts[0].substring(0, 5) + "..." + this.state.walletConnectAccounts[0].substring(this.state.walletConnectAccounts[0].length - 6, this.state.walletConnectAccounts[0].length - 1) : "Error! Try again."} {(this.state.walletConnectAccounts) ? <FontAwesomeIcon icon={faCheckCircle} color={"#0ad48b"} /> : <></>}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container half wallet creation">
                                <a className="text tagline smaller">A <span className="text keyword tagline smaller">Taga</span> wallet.</a>
                                <div className="container wallet buttons">
                                    <div className="container wallet-buttons" style={{display: 'flex', justifyContent: 'center'}}>
                                        <button onClick={this.props.functions.nextSlide} className="button taga wallet">
                                            <img src={LogoLightBG} className="wallet button img" />
                                            <br />
                                            Get Started <FontAwesomeIcon icon={faLongArrowAltRight} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container onboarding footer content">
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <a onClick={() => {this.props.functions.nextStep(false, this.props.state.accountInfo, "stepTwo")}} className="text signin link"><FontAwesomeIcon icon={faLongArrowAltLeft} color={"#4F68B1"} /> Back to Personal Questions</a>
                        {(this.state.walletConnectAccounts != false || this.state.metaMaskAccounts != false) ? <a onClick={() => {this.props.functions.completeRegistration(this.state)}} className="text signin link">I'm Done <FontAwesomeIcon icon={faLongArrowAltRight} color={"#AF6AAC"} /></a> : <></>}
                    </div>
                </div>
            </div>
        )
    }
}

export default class StepThree extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSlide: 0
        }

        this.props.functions.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide(direction) {
        this.setState({currentSlide: (direction) ? this.state.currentSlide+1 : this.state.currentSlide-1});
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
                    <InitialWalletSelection state={this.state} functions={this.props.functions} />
                    <WalletGeneration state={this.state} functions={this.props.functions} />
                </Carousel>
            </div>
        )
    }
}