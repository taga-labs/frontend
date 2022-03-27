// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Stylesheets
import '../../../assets/styles/layout.css';
import '../../../assets/styles/typography.css';
import '../../../assets/styles/img.css';
import '../../../assets/styles/interactions.css';

// Images
import LogoDarkBG from '../../../assets/img/general/logo-dark-bg.svg';
import { faBars, faChevronDown, faHamburger, faRocket } from '@fortawesome/free-solid-svg-icons';

export default class LandingHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileRescale: window.matchMedia("(max-width: 700px)").matches
        };
    }

    componentDidMount() {
        const mobileRescaleHandler = (e) => {
            this.setState({mobileRescale: e.matches});
        }

        window.matchMedia("(max-width: 700px)").addEventListener('change', mobileRescaleHandler);
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
                        <a href="/products" className="text nav links">Products</a>
                        <a href="/docs" className="text nav links">Docs</a>
                        <a href="/about" className="text nav links">About</a>
                    </div>
                    <div className="container button navigation">
                        <a href="/signin" className="text link signin">Sign In</a>
                        {(!this.state.mobileRescale) ? <button onClick={() => {window.location.href="/get-started"}} className="button nav">
                            Register
                        </button> : <></>}
                        <button onClick={() => { this.props.methods.toggleMobileMenu() }} className="button hamburger">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
                {/* <div className="container menu mobile nav">
                    <a href="/docs" className="text nav links">Products</a>
                    <br />
                    <a href="/docs" className="text nav links">Docs</a>
                    <br />
                    <a href="/docs" className="text nav links">About</a>
                    <br />
                    <a href="/signin" className="text link signin">Sign In</a>
                    <br />
                    <button onClick={() => {window.location.href="/get-started"}} className="button nav">
                        <FontAwesomeIcon icon={faRocket} style={{marginRight: '0.5vw'}} />
                        Register
                    </button>
                </div> */}
            </div>
        )
    }
}