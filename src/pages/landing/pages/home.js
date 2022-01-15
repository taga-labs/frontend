// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faCopyright, faLongArrowAltDown, faLongArrowAltRight, faRocket } from '@fortawesome/free-solid-svg-icons';

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
import { faFacebook, faInstagram, faReddit, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default class LandingHome extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mobileMenu: false,
            mobileRescale: window.matchMedia("(max-width: 700px)").matches
        };

        // Refs
        this.LandingSection = React.createRef();
        this.EquitySection = React.createRef();
        this.TokenSection = React.createRef();
        this.MarketPlaceSection = React.createRef();
        this.PortfolioSection = React.createRef();

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);

        this.methods = {
            toggleMobileMenu: this.toggleMobileMenu
        }
    }

    componentDidUpdate() {
        console.log(this.state.mobileMenu)
    }

    componentDidMount() {
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

    render() {
        return(
            <div className="container overall">
                <Nav state={this.state} methods={this.methods} />
                <div ref={this.LandingSection} className="container content">
                    <div className="container content centered">
                        <div className="container content centered vertical">
                            {(this.state.mobileRescale) ? <img src={MainVectorGraphic} className="main image" /> : <></>}
                            <div className="container text main">
                                <a className="text tagline">Private Equity<br /><span className="text keyword tagline">Democratized.</span></a>
                                <p className="text paragraph main">
                                    Taga is a mutually beneficial ecosystem where private companies and public capital can interact seamlessly.
                                </p>
                                <div className="container interactions main">
                                    <input className="input main" placeholder="rhendricks@piper.net"></input>
                                    <button className="button nav">Get Started {(!this.state.mobileRescale) ?<FontAwesomeIcon icon={faLongArrowAltRight} /> : <></> }</button>
                                </div>
                            </div>
                            {(!this.state.mobileRescale) ? <img src={MainVectorGraphic} className="main image" /> : <></>}
                            <div className="container nextButton">
                                <button onClick={() => {this.scrollSectionIntoView("equity_section")}} className="button next">
                                    <FontAwesomeIcon icon={faArrowDown} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={this.EquitySection} className="container content">
                    <div className="container content centered">
                        <div className="container content centered vertical">
                            <img src={SharePartitioningGraphic} className="secondary image" />
                            <div className="container text main">
                                <a className="text tagline">Set aside equity.</a>
                                <p className="text tagline smaller">As an existing shareholder, set aside equity to list in our ecosystem, and in its place a token will be deployed.</p>
                                <p className="text paragraph main" >In doing so, your startup opens up a portion of its equity to retail investors, and your company can attract a more democratized pool of capital.</p>
                                <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                            </div>
                            <div className="container nextButton">
                                <button onClick={() => {this.scrollSectionIntoView("token_section")}} className="button next">
                                    <FontAwesomeIcon icon={faArrowDown} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={this.TokenSection} className="container content">
                    <div className="container content centered">
                        <div className="container content centered vertical">
                            {(this.state.mobileRescale) ? <img src={TokenGenerationGraphic} className="secondary image" /> : <></> }
                            <div className="container text main">
                                <a className="text tagline">Generate a Token.</a>
                                <p className="text tagline smaller" >Through our one-click platform, easily generate a token representing the equity your startup has partitioned.</p>
                                <p className="text paragraph main" >
                                    This is what enables your startup to be traded within our ecosystem. If public capital likes your startup, they will trade your token, and in turn, a portion of the transactions will be returned to your startup.
                                </p>
                                <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                            </div>
                            {(!this.state.mobileRescale) ? <img src={TokenGenerationGraphic} className="secondary image" /> : <></> }
                        </div>
                        <div className="container nextButton">
                            <button onClick={() => {this.scrollSectionIntoView("marketplace_section")}} className="button next">
                                <FontAwesomeIcon icon={faArrowDown} />
                            </button>
                        </div>
                    </div>
                </div>
                <div ref={this.MarketPlaceSection} className="container content">
                    <div className="container content centered">
                        <div className="container content centered vertical">
                            <img src={MarketPlaceGraphic} className="secondary image" />
                            <div className="container text main">
                                <a className="text tagline">Discover Other Tokens.</a>
                                <p className="text tagline smaller">
                                    As an investor, discover new investment opportunities with massive potential.
                                </p>
                                <p className="text paragraph main" >
                                    Using our marketplace, you can explore various startups that have listed equity on our platform, view their profiles, and invest in them if you feel they have potential.
                                </p>
                                <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                            </div>
                        </div>
                        <div className="container nextButton">
                            <button onClick={() => {this.scrollSectionIntoView("portfolio_section")}} className="button next">
                                <FontAwesomeIcon icon={faArrowDown} />
                            </button>
                        </div>
                    </div>
                </div>
                <div ref={this.PortfolioSection} className="container content">
                    <div className="container content centered">
                        <div className="container content centered vertical">
                            {(this.state.mobileRescale) ? <img src={PortfolioGraphic} className="secondary image" /> : <></> }
                            <div className="container text main">
                                <a className="text tagline">Grow your Portfolio.</a>
                                <p className="text tagline smaller" >
                                    Pick the best startups and watch your portfolio grow.
                                </p>
                                <p className="text paragraph main" >
                                    As you invest in promising startups, your holdings will fluctuate depending on the trading volume of their respective tokens. If you manage to pick out good startups early, your portfolio will grow, and you can either hold until the company IPO's, or liquidate early.
                                </p>
                                <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                            </div>
                            {(!this.state.mobileRescale) ? <img src={PortfolioGraphic} className="secondary image" /> : <></> }
                        </div>
                        <div className="container nextButton">
                            <button onClick={() => {this.scrollSectionIntoView("landing_section")}} className="button next">
                                <FontAwesomeIcon icon={faArrowUp} />
                            </button>
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
                <footer>
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