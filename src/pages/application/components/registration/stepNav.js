import React from 'react';
import ReactDOM from 'react-dom';

// Stylesheets
import '../../../../assets/styles/layout.css';
import '../../../../assets/styles/typography.css';
import '../../../../assets/styles/interactions.css';
import '../../../../assets/styles/img.css';

export default class StepNav extends React.Component {
    constructor(props) {
        super(props)

        this.currentStep = this.props.currentStep;
    }

    componentDidUpdate() {
        console.log(this.props.currentStep);
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="container steps">
                <div className="step container">
                    <div className={(this.props.currentStep == 0 || this.props.currentStep == 1 || this.props.currentStep == 2 || this.props.currentStep == 3) ? "step container interior selected" : "step container interior"}>
                        <a className={(this.props.currentStep == 0 || this.props.currentStep == 1 || this.props.currentStep == 2 || this.props.currentStep == 3) ? "text step header selected" : "text step header"}>Step One</a>
                        <br />
                        <a className="text step header under">Create an account.</a>
                    </div>
                </div>
                <div className="step container">
                    <div className={(this.props.currentStep == 1 || this.props.currentStep == 2 || this.props.currentStep == 3) ? "step container interior selected" : "step container interior"}>
                        <a className={(this.props.currentStep == 1 || this.props.currentStep == 2 || this.props.currentStep == 3) ? "text step header selected" : "text step header"}>Step Two</a>
                        <br />
                        <a className="text step header under">Some questions about you.</a>
                    </div>
                </div>
                <div className="step container">
                    <div className={(this.props.currentStep == 2 || this.props.currentStep == 3) ? "step container interior selected" : "step container interior"}>
                        <a className="text step header">Step Three</a>
                        <br />
                        <a className="text step header under">Connect to web3.</a>
                    </div>
                </div>
            </div>
        )
    }
}