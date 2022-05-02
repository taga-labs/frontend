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

import {
    SignIn,
    Registration
} from './pages/application';

import {
    ApplicationHome
} from './pages/application';

// Init app variable
let App;

// Get domains used in request
let domain = window.location.host;
let path = window.location.pathname;

let domainArray = domain.split(".");

// Dev array for local testing subdomain routing
let pathArray = path.split("/");

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
                        <Route path="/app"  element={<ApplicationHome />} />
                    </Routes>
                </BrowserRouter>
            )
        }
    }
} 

if(pathArray.length > 0 && pathArray[1] == "app") {
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
                        <Route path="/" element={<LandingHome />} />
                        <Route path="/about" element={<LandingAbout />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/get-started" element={<Registration />}>
                            <Route path=":step" element={<Registration />} />
                        </Route>
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
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/get-started" element={<Registration />} />
                        <Route path="/app" element={<ApplicationHome />} />
                    </Routes>
                </BrowserRouter>
            )
        }
    }
}

export default App;