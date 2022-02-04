import React from 'react';
import ReactDOM from 'react-dom';

export default class Finished extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <a className="text tagline">You've joined the <span className="text keyword tagline">waitlist.</span></a>
                    <br />
                    <br />
                    <br />
                    <a className="text paragraph main" style={{fontSize: '3vh'}}>Taga will be arriving Q2 2022</a>
                </div>
            </div>
        )
    }
}