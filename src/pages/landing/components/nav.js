// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Stylesheets
import '../../../assets/styles/layout.css';
import '../../../assets/styles/color.css';
import '../../../assets/styles/typography.css';
import '../../../assets/styles/img.css';
import '../../../assets/styles/buttons.css';

// Images
import LogoDarkBG from '../../../assets/img/logo-dark-bg.svg';

export default class LandingHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container nav">
                <div className="container animated nav">
                    <div className="container company">
                        <a href="/" style={{textDecoration: 'none', color: 'black'}}>
                            <img src={LogoDarkBG} className="icon" />
                            <a className="text nav logo">Taga</a>
                        </a>
                    </div>
                    <div className="container links navigation">
                        <a href="/docs" className="text nav links">Docs</a>
                        <a href="/team" className="text nav links">Team</a>
                        <a href="/docs" className="text nav links">About</a>
                    </div>
                    <div className="container button navigation">
                        <button className="button nav">
                            Launch App
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}