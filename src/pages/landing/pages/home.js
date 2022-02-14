// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faCopyright, faLongArrowAltDown, faLongArrowAltRight, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faReddit, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Components
import Nav from '../components/nav';

// Stylesheets
import '../../../assets/styles/layout.css';
import '../../../assets/styles/typography.css';

// Images
import MainVectorGraphic from '../../../assets/img/taga-main-image.svg';
import SharePartitioningGraphic from '../../../assets/img/taga-partitioning-image.svg';
import TokenGenerationGraphic from '../../../assets/img/taga-tokens-image.svg';
import MarketPlaceGraphic from '../../../assets/img/taga-marketplace-image.svg';
import PortfolioGraphic from '../../../assets/img/taga-portfolio-image.svg';

import RainLogo from '../../../assets/img/rain.png';
import StellicLogo from '../../../assets/img/stellic.png';
import CharthopLogo from '../../../assets/img/charthop.png';
import PaperLogo from '../../../assets/img/paper.png';
import CharthopLogoGray from '../../../assets/img/charthop-gray.png';
import RainLogoGray from '../../../assets/img/rain-gray.png';
import StellicLogoGray from '../../../assets/img/stellic-gray.png';
import PaperLogoGray from '../../../assets/img/paper-gray.png';

export default class LandingHome extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mobileMenu: false,
            mobileRescale: window.matchMedia("(max-width: 700px)").matches,
            previousScrollPosition: 0,
            mouseOver: {
                stellic: false,
                paper: false,
                rain: false,
                charthop: false
            }
        };

        // Refs
        this.LandingSection = React.createRef();
        this.EquitySection = React.createRef();
        this.TokenSection = React.createRef();
        this.MarketPlaceSection = React.createRef();
        this.PortfolioSection = React.createRef();

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.mouseWheelScroll = this.mouseWheelScroll.bind(this);
        this.offeringImageMouseOver = this.offeringImageMouseOver.bind(this);
        this.offeringImageMouseOut = this.offeringImageMouseOut.bind(this);

        this.methods = {
            toggleMobileMenu: this.toggleMobileMenu
        }
    }

    componentDidUpdate() {
        console.log(this.state.mouseOver)
    }

    componentDidMount() {

        window.sessionStorage.clear();
        const mobileRescaleHandler = (e) => {
            this.setState({mobileRescale: e.matches});
        }

        window.matchMedia("(max-width: 700px)").addEventListener('change', mobileRescaleHandler);
    }

    toggleMobileMenu() {
        this.setState({mobileMenu: !this.state.mobileMenu});
    }

    scrollSectionIntoView(target) {
        if(target == "equity_section") {
            this.EquitySection.current.scrollIntoView({
                behavior: "smooth"
            });
        } else if(target == "token_section") {
            this.TokenSection.current.scrollIntoView({
                behavior: "smooth"
            });
        } else if(target == "marketplace_section") {
            this.MarketPlaceSection.current.scrollIntoView({
                behavior: "smooth"
            });
        } else if(target == "portfolio_section") {
            this.PortfolioSection.current.scrollIntoView({
                behavior: "smooth"
            });
        } else if(target == "landing_section") {
            this.LandingSection.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }

    mouseWheelScroll(e) {
        // var newPosition = e.clientY;
        console.log(e)

        // if(newPosition) {

        // }
    }

    goToGetStarted() {
        var identifierValidity = false;

        if(this.state.identifier) {
            // Check if an input is an email
            if(this.state.identifier.includes("@")) {
                var splitVal = this.state.identifier.split("@");

                identifierValidity = splitVal[1].includes(".");
            }

            if(this.state.identifier.length > 3 && identifierValidity) {
                window.sessionStorage.setItem("getStartedIdentifier", this.state.identifier);
                window.location.href = "/get-started";
            }
        }
    }

    offeringImageMouseOver(logo) {
        var currentState = this.state.mouseOver;

        currentState[logo] = true;

        this.setState({mouseOver: currentState});
    }

    offeringImageMouseOut(logo) {
        var currentState = this.state.mouseOver;

        currentState[logo] = false;

        this.setState({mouseOver: currentState});
    }

    render() {
        return(
            <div className="container overall">
                <Nav state={this.state} methods={this.methods} />
                <div style={{width: '100vw', height: '100vh'}}>
                    <div onWheel={(e) => {this.mouseWheelScroll(e)}} id="test" ref={this.LandingSection} className="container content">
                        <div className="container content centered">
                            <div className="container content centered vertical">
                                {(this.state.mobileRescale) ? <img src={MainVectorGraphic} className="main image" /> : <></>}
                                <div className="container text main">
                                    <a className="text tagline">Private Equity<br /><span className="text keyword tagline">Democratized.</span></a>
                                    <p className="text paragraph main landing">
                                        Taga is a mutually beneficial ecosystem where private companies and public capital can interact seamlessly.
                                    </p>
                                    <div className="container interactions main">
                                        <input onChange={(e) => {this.setState({identifier: e.target.value})}} className="input main" placeholder="rhendricks@piper.net"></input>
                                        <button onClick={() => {this.goToGetStarted()}} className="button nav">Get Started {(!this.state.mobileRescale) ?<FontAwesomeIcon icon={faLongArrowAltRight} /> : <></> }</button>
                                    </div>
                                </div>
                                {(!this.state.mobileRescale) ? <img src={MainVectorGraphic} className="main image" /> : <></>}
                            </div>
                            <div className="container partners">
                                <div className="container interior partners">
                                        <a href="https://www.paper.xyz">
                                            <img onMouseOver={() => {this.offeringImageMouseOver("paper")}} onMouseOut={() => {this.offeringImageMouseOut("paper")}} src={(this.state.mouseOver.paper) ? PaperLogo : PaperLogoGray} style={{opacity: 0.1}} className="partner logo" style={{marginRight: '3vw', height: '5vh'}}/>
                                        </a>
                                        <a href="https://www.rain.aero/">
                                            <img onMouseOver={() => {this.offeringImageMouseOver("rain")}} src={(this.state.mouseOver.rain) ? RainLogo : RainLogoGray} className="partner logo" style={{marginRight: '3vw', height: '5vh'}}/>
                                        </a>
                                        <a href="https://www.stellic.com/">
                                            <img onMouseOver={() => {this.offeringImageMouseOver("stellic")}} onMouseOut={() => {this.offeringImageMouseOut("stellic")}} src={(this.state.mouseOver.stellic) ? StellicLogo : StellicLogoGray} style={{opacity: 0.1}} className="partner logo" style={{marginRight: '3vw'}} />
                                        </a>
                                        <a href="https://www.charthop.com/">
                                            <img onMouseOver={() => {this.offeringImageMouseOver("charthop")}} onMouseOut={() => {this.offeringImageMouseOut("charthop")}} src={(this.state.mouseOver.charthop) ? CharthopLogo : CharthopLogoGray} style={{opacity: (this.state.mouseOver.charthop) ? 1 : 0.7}} className="partner logo" />
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: '100vw', height: 'max-content', paddingTop: '20vh'}}>
                    <div ref={this.EquitySection} className="container content">
                        <div className="container content centered">
                            <div className="container feature">
                                <img src={SharePartitioningGraphic} className="secondary image" />
                                <div className="container text main">
                                    <a className="text feature tagline">List your equity.</a>
                                    <p className="text tagline smaller">As an existing shareholder, partition equity to list in our ecosystem, and in its place a token will be deployed.</p>
                                    <p className="text paragraph main" >In doing so, the equity will open up to retail investors, where you can get liquidity for you shares and continue to benefit.</p>
                                    <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                                </div>
                            </div>
                            <div className="container feature" style={{paddingTop: '10vh'}}>
                                <div className="container text main">
                                    <a className="text feature tagline">Generate a Token.</a>
                                    <p className="text tagline smaller" >Easily generate a token representing the equity your startup has partitioned.</p>
                                    <p className="text paragraph main" >
                                        This enables your equity to be traded within our ecosystem. A portion of transactions will be returned to your startup.
                                    </p>
                                    <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                                </div>
                                <img src={TokenGenerationGraphic} className="secondary image" style={{marginRight: '5vw'}} />
                            </div>
                            <div className="container feature" style={{paddingTop: '10vh'}}>
                                <img src={MarketPlaceGraphic} className="secondary image" />
                                <div className="container text main">
                                    <a className="text feature tagline">Discover Other Tokens.</a>
                                    <p className="text tagline smaller">
                                        As an investor, discover new investment opportunities with massive potential.
                                    </p>
                                    <p className="text paragraph main" >
                                        Using our marketplace, you can explore various startups that have listed equity on our platform, view their profiles, and invest in them if you feel they have potential.
                                    </p>
                                    <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                                </div>
                            </div>
                            <div className="container feature" style={{paddingTop: '10vh', paddingBottom: '10vh'}}>
                                <div className="container text main">
                                    <a className="text feature tagline">Grow your Portfolio.</a>
                                    <p className="text tagline smaller" >
                                        Pick the best startups and watch your portfolio grow.
                                    </p>
                                    <p className="text paragraph main" >
                                        As you invest in promising startups, your holdings will fluctuate depending on the trading volume of their respective tokens. If you manage to pick out good startups early, your portfolio will grow, and you can either hold until the company IPO's, or liquidate early.
                                    </p>
                                    <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                                </div>
                                <img src={PortfolioGraphic} className="secondary image"  style={{marginRight: '5vw'}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={(this.state.mobileMenu) ? "backdrop container visible" : "backdrop container hidden"}>
                    <div className="backdrop interior">
                        <a href="/docs" className="text nav links">Products</a>
                        <a href="/docs" className="text nav links">Docs</a>
                        <a href="/docs" className="text nav links">About</a>
                        <button onClick={() => {window.location.href="/get-started"}} className="button nav">
                            <FontAwesomeIcon icon={faRocket} style={{marginRight: '0.5vw'}} />
                            Register
                        </button>
                    </div>
                </div>
                <footer >
                    <div className="container footer interior">
                        <div className="container footer col">
                            <a className="text footer header">Products</a>
                            <br />
                            <br />
                            <a href="products/portfolio" className="text footer link">Portfolio</a>
                        </div>
                        <div className="container footer col">
                            <a className="text footer header">Company</a>
                            <br />
                            <br />
                            <a href="about" className="text footer link">About Us</a>
                            <br />
                            <br />
                            <a href="legal" className="text footer link">Legal</a>
                            <br />
                            <br />
                            <a href="support" className="text footer link">Support</a>
                        </div>
                        <div className="container footer col">
                            <a className="text footer header">Join Us</a>
                            <br />
                            <br />
                            <a href="get-started" className="text footer link">Create an Account</a>
                            <br />
                            <br />
                            <a href="signin" className="text footer link">Sign In</a>
                        </div>
                        <div className="container footer col">
                            <a className="text footer header">Social</a>
                            <br />
                            <br />
                            <div>
                                <a href="https://instagram.com/tagalabs" className="text footer link" style={{marginLeft: '1vw'}}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://facebook.com/tagalabs" className="text footer link" style={{marginLeft: '1vw'}}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="https://reddit.com/r/tagalabs" className="text footer link" style={{marginLeft: '1vw'}}>
                                    <FontAwesomeIcon icon={faReddit} />
                                </a>
                                <a href="https://youtube.com/tagalabs" className="text footer link" style={{marginLeft: '1vw'}}>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                            <br />
                            <a href="https://github.com/tagalabs" className="text footer link">Github</a>
                            <br />
                            <br />
                            <a href="blog" className="text footer link">Our Blog</a>
                        </div>
                    </div>
                    <br />
                    <div className="container footer copyright">
                        <a className="text footer link">Copyright <FontAwesomeIcon icon={faCopyright} /> 2021, Taga Labs, ltd</a>
                    </div>
                </footer>
            </div>
        )
    }
}
