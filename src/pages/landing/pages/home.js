import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Nav from '../components/nav';

// Stylesheets
import '../../../assets/styles/layout.css';
import '../../../assets/styles/color.css';
import '../../../assets/styles/typography.css';


export default class LandingHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container">
                <Nav />
                <div className="container content">

                </div>
            </div>
        )
    }
}