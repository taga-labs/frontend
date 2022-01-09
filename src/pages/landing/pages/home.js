// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

// Components
import Nav from '../components/nav';

// Stylesheets
import '../../../assets/styles/layout.css';
import '../../../assets/styles/color.css';
import '../../../assets/styles/typography.css';

// Images
import MainVectorGraphic from '../../../assets/img/taga-main-image.svg';
import SharePartitioningGraphic from '../../../assets/img/taga-partitioning-image.svg';
import TokenGenerationGraphic from '../../../assets/img/taga-tokens-image.svg';
import MarketPlaceGraphic from '../../../assets/img/taga-marketplace-image.svg';
import PortfolioGraphic from '../../../assets/img/taga-portfolio-image.svg';


export default class LandingHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container overall">
                <Nav />
                <div className="container content">
                    <div className="container content centered">
                        <div className="container content centered vertical">
                            <div>
                                <a className="text tagline">Private Equity<br /><span className="text keyword tagline">Democratized.</span></a>
                                <p className="text paragraph main">
                                    Taga is a mutually beneficial ecosystem where private companies and public capital can interact seamlessly.
                                </p>
                                <div className="container interactions main">
                                    <input className="input main" placeholder="gbelson@hooli.com"></input>
                                    <button className="button nav">Get Started <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                                </div>
                            </div>
                            <img src={MainVectorGraphic} className="main image" />
                        </div>
                    </div>
                </div>
                <div className="container content">
                    <div className="container content centered">
                        <img src={SharePartitioningGraphic} className="secondary image" />
                        <div className="container content centered vertical">
                            <div style={{paddingLeft: '5vw'}}>
                                <a className="text tagline">Partition your equity.</a>
                                <p className="text tagline smaller">As an existing shareholder, set aside equity to list in our ecosystem, and in its place a token will be deployed.</p>
                                <p className="text paragraph main" style={{width: '30vw'}}>In doing so, your startup opens up a portion of its equity to retail investors, and your company can attract a more democratized pool of capital.</p>
                                <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container content">
                    <div className="container content centered">
                        <div className="container content centered vertical">
                            <div>
                                <a className="text tagline">Generate a Token.</a>
                                <p className="text tagline smaller" style={{width: '30vw'}}>Through our one-click platform, easily generate a token representing the equity your startup has partitioned.</p>
                                <p className="text paragraph main" style={{width: '30vw'}}>
                                    This is what enables your startup to be traded within our ecosystem. If public capital likes your startup, they will trade your token, and in turn, a portion of the transactions will be returned to your startup.
                                </p>
                                <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                            </div>
                        </div>
                        <img src={TokenGenerationGraphic} className="secondary image" />
                    </div>
                </div>
                <div className="container content">
                    <div className="container content centered">
                        <img src={MarketPlaceGraphic} className="secondary image" />
                        <div className="container content centered vertical">
                            <div style={{paddingLeft: '5vw'}}>
                                <a className="text tagline">Discover Other Tokens.</a>
                                <p className="text tagline smaller">
                                    As an investor, discover new investment opportunities with massive potential.
                                </p>
                                <p className="text paragraph main" style={{width: '30vw'}}>
                                    Using our marketplace, you can explore various startups that have listed equity on our platform, view their profiles, and invest in them if you feel they have potential.
                                </p>
                                <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container content">
                    <div className="container content centered">
                        <div className="container content centered vertical">
                            <div>
                                <a className="text tagline">Grow your Portfolio.</a>
                                <p className="text tagline smaller" style={{width: '30vw'}}>
                                    Pick the best startups and watch your portfolio grow.
                                </p>
                                <p className="text paragraph main" style={{width: '30vw'}}>
                                    As you invest in promising startups, your holdings will fluctuate depending on the trading volume of their respective tokens. If you manage to pick out good startups early, your portfolio will grow, and you can either hold until the company IPO's, or liquidate early.
                                </p>
                                <button className="button nav">Learn More <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                            </div>
                        </div>
                        <img src={PortfolioGraphic} className="secondary image" />
                    </div>
                </div>
            </div>
        )
    }
}