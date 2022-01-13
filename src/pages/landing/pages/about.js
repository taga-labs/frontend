import React from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/nav';

export default class LandingAbout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mobileMenu: false,
            mobileRescale: window.matchMedia("(max-width: 700px)").matches
        };

        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);

        this.methods = {
            toggleMobileMenu: this.toggleMobileMenu
        }
    }

    componentDidMount() {
        document.title = "Taga | About Us";
        const mobileRescaleHandler = (e) => {
            this.setState({mobileRescale: e.matches});
        }

        window.matchMedia("(max-width: 700px)").addEventListener('change', mobileRescaleHandler);
    }

    toggleMobileMenu() {
        this.setState({mobileMenu: !this.state.mobileMenu});
    }

    render() {
        return(
            <div className="container overall">
                <Nav state={this.state} page={"about"} methods={this.methods} />
                <div className="container content">
                    <div className="container about content">
                        <a className="text tagline">We design and build world-class financial tools for the people.</a>
                        <br />
                        <br />
                        <p className="text paragraph about">We believe the opportunity to be a part of the future should be open to anyone regardless of net-worth, physical location, or other traditional restriction.</p>
                    </div>
                </div>
            </div>
        )
    }
}