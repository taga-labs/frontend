// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// React router imports
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// Page module imports
import {
    LandingHome,
    LandingAbout
} from './pages/landing';

// Init app variable
let App;

// Get domains used in request
let uri = window.location.host;
let domainArray = uri.split(".");

// If requesting 'app' subdomain
if(domainArray.length > 1 && domainArray[0] == "app") {
    App = class AppRouter extends React.Component {
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingHome />} />
                    </Routes>
                </BrowserRouter>
            )
        }
    }
} 

// If arbitrary subdomain requested
else if(domainArray.length > 1 && domainArray[0] != "app") {
    App = class MiscRouter extends React.Component {
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<LandingAbout />} />
                    </Routes>
                </BrowserRouter>
            )
        }
    }
} 

//If landing requested
else {
    App = class LandingRouter extends React.Component {
        constructor(props) {
            super(props)
        }

        render() {
            return(
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingHome />} />
                        <Route path="/about" element={<LandingAbout />} />
                    </Routes>
                </BrowserRouter>
            )
        }
    }
}

console.log(App);

export default App;