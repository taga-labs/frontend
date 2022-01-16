import React from 'react';
import ReactDOM from 'react-dom';

// Stylesheets
import '../../../../assets/styles/layout.css';
import '../../../../assets/styles/typography.css';
import '../../../../assets/styles/interactions.css';
import '../../../../assets/styles/img.css';

class Step extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div></div>
        )
    }
}

export default class StepNav extends React.Component {
    constructor(props) {
        super(props)

        this.currentStep = this.props.currentStep;
    }

    render() {
        return(
            <div className="container steps">
                <div className="step container">
                                
                </div>
            </div>
        )
    }
}