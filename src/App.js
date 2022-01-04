import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {
    LandingHome
} from '';

let App;

let uri = window.location.host;

App = class AppRouter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={} />
                </Routes>
            </BrowserRouter>
        )
    }
}

App = class LandingRouter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;