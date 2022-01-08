// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Nav from '../components/nav';

// Stylesheets
import '../../../assets/styles/layout.css';
import '../../../assets/styles/color.css';
import '../../../assets/styles/typography.css';

// Images
import MainVectorGraphic from '../../../assets/img/taga-main-image.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';


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
                        <div className="container content centered vertical">
                            <a className="text tagline">Private Equity<br /><span className="text keyword tagline">Democratized.</span></a>
                        </div>
                        <img src={MainVectorGraphic} className="main image" />
                    </div>
                </div>
            </div>
        )
    }
}