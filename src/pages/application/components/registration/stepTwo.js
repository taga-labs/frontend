import React from 'react';
import ReactDOM from 'react-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLongArrowAltLeft, faLongArrowAltRight, faCheck, faTimes, faUser, faLock, faPlusSquare, faBuilding, faArrowRight, faChevronRight, faChevronDown, faChevronUp, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// Carousel module
import { Carousel } from 'react-responsive-carousel';

import Modal from '@mui/material/Modal';

// Stylesheets
import '../../../../assets/styles/layout.css';
import '../../../../assets/styles/typography.css';
import '../../../../assets/styles/interactions.css';
import '../../../../assets/styles/img.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Images
import InvestorGraphic from '../../../../assets/img/registration_graphics/investor-graphic.svg';
import ShareholderGraphic from '../../../../assets/img/registration_graphics/shareholder-graphic.svg';
import StartupGraphic from '../../../../assets/img/registration_graphics/startup-graphic.svg';

class AdditionalQuestionsStartup extends React.Component {
    constructor(props) {
        super(props)

        this.nextStep = this.nextStep.bind(this);
    }

    nextStep() {

    }

    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <div className="container account types">
                        <a className="text signin header">Additional questions for existing shareholders.</a>
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className="container onboarding footer content">
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <a onClick={() => {this.props.functions.NextSection(false, this.props.state.accountInfo)}} className="text signin link"><FontAwesomeIcon icon={faLongArrowAltLeft} color={"#4F68B1"} /> Back to Account Type</a>
                        <a onClick={this.nextStep} className="text signin link">Carry On <FontAwesomeIcon icon={faLongArrowAltRight} color={"#AF6AAC"} /></a>
                    </div>
                </div>
            </div>
        )
    }
}

class ShareholderInfoButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <button onClick={this.props.toggleModal} className="button company profile onboarding" style={{backgroundColor: 'red'}}>
                <FontAwesomeIcon icon={faBuilding} style={{opacity: 0.5}} />
                <br />
                <a style={{fontSize: '2vh', opacity: 0.5, marginTop: '-3vh'}}>Taga Labs</a>
            </button>
        )
    }
}

class ShareholderInfoSlideShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0,
            displayDropdown: false,
            dropdownValues: {
                industry: [
                    "Accounting", 
                    "Airlines/Aviation", 
                    "Alternative Dispute Resolution", 
                    "Alternative Medicine",
                    "Animation",
                    "Apparel &amp; Fashion",
                    "Aviation &amp; Aerospace",
                    "Banking",
                    "Biotechnology",
                    "Broadcast Media",
                    "Building Materials",
                    "Business Supplies &amp; Equipment",
                    "Capital Markets",
                    "Chemicals",
                    "Civic &amp; Social Organization",
                    "Civil Engineering",
                    "Commercial Real Estate",
                    "Computer &amp; Network Security",
                    "Computer Games",
                    "Computer Hardware",
                    "Computer Networking",
                    "Computer Software",
                    "Construction",
                    "Consumer Electronics",
                    "Consumer Goods",
                    "Consumer Services",
                    "Cosmetics",
                    "Dairy",
                    "Defense &amp; Space",
                    "Design",
                    "E-learning",
                    "Education Management",
                    "Electrical &amp; Electronic Manufacturing",
                    "Entertainment",
                    "Environmental Services",
                    "Events Services",
                    "Executive Office",
                    "Facilities Services",
                    "Farming",
                    "Financial Services",
                    "Fine Art",
                    "Fishery",
                    "Food &amp; Beverages",
                    "Food Production",
                    "Fundraising",
                    "Furniture",
                    "Gambling &amp; Casinos",
                    "Glass, Ceramics &amp; Concrete",
                    "Government Administration",
                    "Government Relations",
                    "Graphic Design",
                    "Health, Wellness &amp; Fitness",
                    "Higher Education",
                    "Hospital &amp; Health Care",
                    "Hospitality",
                    "Human Resources",
                    "Import &amp; Export",
                    "Individual &amp; Family Services",
                    "Industrial Automation",
                    "Information Services",
                    "Information Technology &amp; Services",
                    "Insurance",
                    "International Affairs",
                    "International Trade &amp; Development",
                    "Internet",
                    "Investment Banking",
                    "Investment Management",
                    "Judiciary",
                    "Law Enforcement",
                    "Law Practice",
                    "Legal Services",
                    "Legislative Office",
                    "Leisure, Travel &amp; Tourism",
                    "Libraries",
                    "Logistics &amp; Supply Chain",
                    "Luxury Goods &amp; Jewelry",
                    "Machinery",
                    "Management Consulting",
                    "Maritime",
                    "Market Research",
                    "Marketing &amp; Advertising",
                    "Mechanical Or Industrial Engineering",
                    "Media Production",
                    "Medical Device",
                    "Medical Practice",
                    "Mental Health Care",
                    "Military",
                    "Mining &amp; Metals",
                    "Mobile Games",
                    "Motion Pictures &amp; Film",
                    "Museums &amp; Institutions",
                    "Music",
                    "Nanotechnology",
                    "Newspapers",
                    "Non-profit Organization Management",
                    "Oil &amp; Energy",
                    "Online Media",
                    "Outsourcing/Offshoring",
                    "Package/Freight Delivery",
                    "Packaging &amp; Containers",
                    "Paper &amp; Forest Products",
                    "Performing Arts",
                    "Pharmaceuticals",
                    "Philanthropy",
                    "Photography",
                    "Plastics",
                    "Political Organization",
                    "Primary/Secondary Education",
                    "Printing",
                    "Professional Training &amp; Coaching",
                    "Program Development",
                    "Public Policy",
                    "Public Relations &amp; Communications",
                    "Public Safety",
                    "Publishing",
                    "Railroad Manufacture",
                    "Ranching",
                    "Real Estate",
                    "Recreational Facilities &amp; Services",
                    "Religious Institutions",
                    "Renewables &amp; Environment",
                    "Research",
                    "Restaurants",
                    "Retail",
                    "Security &amp; Investigations",
                    "Semiconductors",
                    "Shipbuilding",
                    "Sporting Goods",
                    "Sports",
                    "Staffing &amp; Recruiting",
                    "Supermarkets",
                    "Telecommunications",
                    "Textiles",
                    "Think Tanks",
                    "Tobacco",
                    "Translation &amp; Localization",
                    "Transportation/Trucking/Railroad",
                    "Utilities",
                    "Venture Capital &amp; Private Equity",
                    "Veterinary",
                    "Warehousing",
                    "Wholesale",
                    "Wine &amp; Spirits",
                    "Wireless",
                    "Writing &amp; Editing"
                ],

                size: [
                    "0 - 1 Employees",
                    "2 - 10 Employees",
                    "11 - 50 Employees",
                    "51 - 200 Employees",
                    "201 - 500 Employees",
                    "500 - 1000 Employees",
                    "1,000 - 5000 Employees",
                    "5,000 - 10000 Employees",
                    "10000+ Employees"
                ],

                type: [
                    "Public Company",
                    "Self-Employed",
                    "Government Agency",
                    "Nonprofit",
                    "Sole Proprietorship",
                    "Privately Held",
                    "Partnership"
                ]
            },
            questions: {
                name: null,
                size: null,
                industry: null,
                type: null,
            }
        };

        this.onQuestionSubmit = this.onQuestionSubmit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.displayDropdown = this.displayDropdown.bind(this);
        this.onDropdownElementClick = this.onDropdownElementClick.bind(this);
        this.slideBack = this.slideBack.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    onQuestionSubmit(e, type) {
        e.preventDefault();

        if(this.state.questions[type] != null && this.state.questions[type] != "") {
            this.setState({currentSlide: this.state.currentSlide + 1});
        }
    }

    onTextChange(e, key) {
        var state = this.state;

        state.questions[key] = e.target.value;


        console.log(state)

        this.setState(state);
    }

    displayDropdown() {
        this.setState({displayDropdown: !this.state.displayDropdown});
    }

    onDropdownElementClick(e, key) {
        var state = this.state;

        state.questions[key] = state.dropdownValues[key][e.target.value];
        state.displayDropdown = false;

        this.setState(state);
    }

    slideBack() {
        this.setState({currentSlide: this.state.currentSlide - 1});
    }

    render() {
        const getSizeDropdownElements = () => {
            return this.state.dropdownValues.size.map((val, index) => {
                return <button onClick={(e) => { this.onDropdownElementClick(e, "size") }} className="button shareholder dropdown element" value={index}>{val}</button>;
            });
        }

        const getIndustriesDropdownElements = () => {
            return this.state.dropdownValues.industry.map((val, index) => {
                return <button onClick={(e) => { this.onDropdownElementClick(e, "industry") }} className="button shareholder dropdown element" value={index}>{val}</button>;
            });
        }

        const getCompanyTypeDropdownElements = () => {
            return this.state.dropdownValues.type.map((val, index) => {
                return <button onClick={(e) => { this.onDropdownElementClick(e, "type") }} className="button shareholder dropdown element" value={index}>{val}</button>;
            });
        }

        return(
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    swipeable={false}
                    showThumbs={false}
                    selectedItem={this.state.currentSlide}
                    showIndicators={false}
                    axis={'vertical'}
                >
                    <div className="container shareholder slide content">
                        <a className="text header indicator"><a style={{fontSize: '3vh', display: 'inline-block', verticalAlign: 'middle'}}>{this.state.currentSlide + 1}</a> <FontAwesomeIcon icon={faChevronRight} size={25} style={{display: 'inline-block', verticalAlign: 'middle'}} /></a>
                        <div style={{textAlign: 'left'}}>
                            <a className="text shareholder info header"> What is the name of the company you hold?</a>
                            <br />
                            <br />
                            <form onSubmit={(e) => {this.onQuestionSubmit(e, "name")}}>
                                <input onKeyUp={(e) => { this.onTextChange(e, "name") }} className="input shareholder info" placeholder="Type your answer here..."></input>
                                <br />
                                <br />
                                <button type="submit" className="button shareholder info continue">Continue <FontAwesomeIcon icon={faArrowDown} /></button>
                            </form>
                        </div>
                    </div>
                    <div className="container shareholder slide content">
                        <a className="text header indicator"><a style={{fontSize: '3vh', display: 'inline-block', verticalAlign: 'middle'}}>{this.state.currentSlide + 1}</a> <FontAwesomeIcon icon={faChevronRight} size={25} style={{display: 'inline-block', verticalAlign: 'middle'}} /></a>
                        <div style={{textAlign: 'left', display: 'inline-block', verticalAlign: 'top'}}>
                            <a className="text shareholder info header"> What is the approximate size of this company?</a>
                            <br />
                            <br />
                                <div style={{position: 'absolute'}}>
                                <button onClick={this.displayDropdown} style={{borderBottomLeftRadius: (this.state.displayDropdown) ? "0vh" : "1vh", borderBottomRightRadius: (this.state.displayDropdown) ? "0vh" : "1vh"}} className="button shareholder dropdown">{(this.state.questions.size) ? this.state.questions.size : "Select Company Size"} <FontAwesomeIcon icon={(this.state.displayDropdown) ? faChevronUp : faChevronDown} style={{marginLeft: '1vw'}} /></button>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: "white",
                                            visibility: (this.state.displayDropdown) ? "visible" : "hidden",
                                            height: '20vh',
                                            overflowY: "scroll"
                                        }}
                                    >
                                        {getSizeDropdownElements()}
                                    </div>
                                    <br />
                                    <br />
                                    <button onClick={(e) => { this.onQuestionSubmit(e, "size") }} className="button shareholder info continue">Continue <FontAwesomeIcon icon={faArrowDown} /></button>
                                    <button onClick={this.slideBack} className="button shareholder info continue" style={{marginLeft: '1vw', backgroundColor: "lightgray", color: 'black'}}>Back <FontAwesomeIcon icon={faArrowUp} /></button>
                                </div>
                        </div>
                    </div>
                    <div className="container shareholder slide content">
                        <a className="text header indicator"><a style={{fontSize: '3vh', display: 'inline-block', verticalAlign: 'middle'}}>{this.state.currentSlide + 1}</a> <FontAwesomeIcon icon={faChevronRight} size={25} style={{display: 'inline-block', verticalAlign: 'middle'}} /></a>
                        <div style={{textAlign: 'left', display: 'inline-block', verticalAlign: 'top'}}>
                            <a className="text shareholder info header"> What industry does this company operate in?</a>
                            <br />
                            <br />
                                <div style={{position: 'absolute'}}>
                                    <button onClick={this.displayDropdown} style={{borderBottomLeftRadius: (this.state.displayDropdown) ? "0vh" : "1vh", borderBottomRightRadius: (this.state.displayDropdown) ? "0vh" : "1vh"}} className="button shareholder dropdown">{(this.state.questions.industry) ? this.state.questions.industry : "Select Industry"} <FontAwesomeIcon icon={(this.state.displayDropdown) ? faChevronUp : faChevronDown} style={{marginLeft: '1vw'}} /></button>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: "white",
                                            visibility: (this.state.displayDropdown) ? "visible" : "hidden",
                                            height: '20vh',
                                            overflowY: "scroll"
                                        }}
                                    >
                                        {getIndustriesDropdownElements()}
                                    </div>
                                    <br />
                                    <br />
                                    <button onClick={(e) => { this.onQuestionSubmit(e, "industry") }} type="submit" className="button shareholder info continue">Continue <FontAwesomeIcon icon={faArrowDown} /></button>
                                    <button onClick={this.slideBack} className="button shareholder info continue" style={{marginLeft: '1vw', backgroundColor: "lightgray", color: 'black'}}>Back <FontAwesomeIcon icon={faArrowUp} /></button>
                                </div>
                        </div>
                    </div>
                    <div className="container shareholder slide content">
                        <a className="text header indicator"><a style={{fontSize: '3vh', display: 'inline-block', verticalAlign: 'middle'}}>{this.state.currentSlide + 1}</a> <FontAwesomeIcon icon={faChevronRight} size={25} style={{display: 'inline-block', verticalAlign: 'middle'}} /></a>
                        <div style={{textAlign: 'left', display: 'inline-block', verticalAlign: 'top'}}>
                            <a className="text shareholder info header"> What type of entity is this company?</a>
                            <br />
                            <br />
                                <div style={{position: 'absolute'}}>
                                    <button onClick={this.displayDropdown} style={{borderBottomLeftRadius: (this.state.displayDropdown) ? "0vh" : "1vh", borderBottomRightRadius: (this.state.displayDropdown) ? "0vh" : "1vh"}} className="button shareholder dropdown">{(this.state.questions.type) ? this.state.questions.type : "Select Company Type"} <FontAwesomeIcon icon={(this.state.displayDropdown) ? faChevronUp : faChevronDown} style={{marginLeft: '1vw'}} /></button>
                                    <div
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: "white",
                                            visibility: (this.state.displayDropdown) ? "visible" : "hidden",
                                            height: '20vh',
                                            overflowY: "scroll"
                                        }}
                                    >
                                        {getCompanyTypeDropdownElements()}
                                    </div>
                                    <br />
                                    <br />
                                    <button onClick={(e) => { this.onQuestionSubmit(e, "industry") }} type="submit" className="button shareholder info continue">Continue <FontAwesomeIcon icon={faArrowDown} /></button>
                                    <button onClick={this.slideBack} className="button shareholder info continue" style={{marginLeft: '1vw', backgroundColor: "lightgray", color: 'black'}}>Back <FontAwesomeIcon icon={faArrowUp} /></button>
                                </div>
                        </div>
                        <div className="container shareholder slide content">
                            <a className="text header indicator"><a style={{fontSize: '3vh', display: 'inline-block', verticalAlign: 'middle'}}>{this.state.currentSlide + 1}</a> <FontAwesomeIcon icon={faChevronRight} size={25} style={{display: 'inline-block', verticalAlign: 'middle'}} /></a>
                            <div style={{textAlign: 'left'}}>
                                <a className="text shareholder info header"> Share a link to your company website.</a>
                                <br />
                                <br />
                                <form onSubmit={(e) => {this.onQuestionSubmit(e, "name")}}>
                                    <input onKeyUp={this.onLinkChange} className="input shareholder info" placeholder="Type your answer here..."></input>
                                    <br />
                                    <br />
                                    <button type="submit" className="button shareholder info continue">Continue <FontAwesomeIcon icon={faArrowDown} /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Carousel>        
        );
    }
}

class AdditionalQuestionsShareholder extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            companies: [],
            colors: ["#9BD3CB", "#FCBCBC", "#F39CA4", "#EDDDD1", "#2D7F9D", "#DC7684", "#E4CA99", "#A4C9D7"]
        }

        this.addCompany = this.addCompany.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({modal: !this.state.modal});
    }

    addCompany() {
        var currentCompanies = this.state.companies;

        currentCompanies.push({
            name: null,
            relation: null,
            numShares: null
        });

        this.setState({companies: currentCompanies});
    }

    render() {
        const displayCompanies = () => {
            return this.state.companies.map((company, index) => {
                return <ShareholderInfoButton key={index} toggleModal={this.toggleModal} data={company} />
            });
        }

        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <div className="container account types">
                        <a className="text signin header">What companies do you hold?</a>
                        <br />
                        <br />
                        <br />
                        <div className="container companies">
                            <div>
                                {displayCompanies()}
                            </div>
                            <button onClick={this.toggleModal} className="button add square">
                                <FontAwesomeIcon icon={faPlusSquare} />
                            </button>
                        </div>
                    </div>
                </div>
                <Modal
                    open={this.state.modal}
                >
                    <div className="container shareholder modal">
                        <div className="container shareholder modal interior">
                            <div className="container shareholder modal header">
                                <button
                                    onClick={this.toggleModal}
                                    className="button close modal"
                                >
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                            <div className="container shareholder modal content">
                                <ShareholderInfoSlideShow />
                            </div>
                        </div>
                    </div>
                </Modal>
                <div className="container onboarding footer content">
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <a onClick={() => {this.props.functions.nextSlide(false, false, "shareholderInfo")}} className="text signin link"><FontAwesomeIcon icon={faLongArrowAltLeft} color={"#4F68B1"} /> Back to Full Name</a>
                        <a onClick={() => {this.props.functions.nextSlide(false, false, "shareholderInfo")}} className="text signin link">Onward <FontAwesomeIcon icon={faLongArrowAltRight} color={"#AF6AAC"} /></a>
                    </div>
                </div>
            </div>
        )
    }
}

class AdditionalQuestionsFullName extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null
        }

        this.onContinue = this.onContinue.bind(this);
    }

    onTextChange(e, inputName) {
        var state = this.state;

        state[inputName] = e.target.value;

        this.setState(state);
    }

    onContinue() {
        if(this.state.firstName != "" || this.state.firstName != undefined || this.state.firstName != null && this.state.lastName != "" || this.state.lastName != undefined || this.state.lastName != null) {
            this.props.functions.nextSlide(true, this.state, "shareholderName");
        }
    }

    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <a className="text signin header">What is your full name?</a>
                    <br />
                    <br />
                    <div>
                        <div className="icon container input" style={{border: '2px solid lightgray'}}>
                            <input onChange={(e) => { this.onTextChange(e, "firstName") }} className="input create" style={{width: '20vw'}} placeholder="First Name" />
                        </div>
                        <br />
                        <div className="icon container input" style={{border: '2px solid lightgray'}}>
                            <input onChange={(e) => { this.onTextChange(e, "lastName") }} className="input create" style={{width: '20vw'}} placeholder="Last Name" />
                        </div>
                    </div>
                </div>
                <div className="container onboarding footer content">
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <a onClick={() => {this.props.functions.nextSlide(false, false, "shareholderName")}} className="text signin link"><FontAwesomeIcon icon={faLongArrowAltLeft} color={"#4F68B1"} /> Back to Account Type</a>
                        <a onClick={(e) => { this.onContinue() }} className="text signin link">Carry On <FontAwesomeIcon icon={faLongArrowAltRight} color={"#AF6AAC"} /></a>
                    </div>
                </div>
            </div>
        )
    }
}

class AccountType extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                investor: false,
                shareholder: false,
                company: false
            }
        }

        this.setType = this.setType.bind(this);
    }

    setType(type) {
        var obj = {
            currentSlide: this.state.currentSlide,
            data: {
                investor: (type == "investor") ? !this.state.data.investor : this.state.data.investor,
                shareholder: (type == "shareholder") ? !this.state.data.shareholder : this.state.data.shareholder,
                company: (type == "company") ? !this.state.data.company : this.state.data.company
            }
        }

        this.setState(obj);
    }

    render() {
        return(
            <div className="container onboarding content">
                <div className="container onboarding content interior">
                    <div className="container account types">
                        <a className="text signin header">What kind of user are you?</a>
                        <br />
                        <br />
                        <a className="text signin header" style={{fontSize: '2vh', color: 'gray', fontWeight: 'normal'}}>*select all that apply.</a>
                        <br />
                        <br />
                        <br />
                        <div className="container account types interior">
                            <button onClick={() => {this.setType("investor")}} className={(this.state.data.investor) ? "button account type selected" : "button account type"} style={{marginRight: '3vw'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={InvestorGraphic} className="icon account type" />
                                    <br />
                                    <a className="text account type header">An Investor / Trader</a>
                                    {(this.state.data.investor) ? <FontAwesomeIcon style={{position: 'absolute', top: '1vh', right: '1vh'}} color={"#4F68B1"} icon={faCheck} /> : <></> }
                                </div>
                            </button>
                            <button onClick={() => {this.setType("shareholder")}} className={(this.state.data.shareholder) ? "button account type selected" : "button account type"} style={{marginRight: '3vw'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={ShareholderGraphic} className="icon account type" />
                                    <br />
                                    <a className="text account type header">An Existing Shareholder</a>
                                    {(this.state.data.shareholder) ? <FontAwesomeIcon style={{position: 'absolute', top: '1vh', right: '1vh'}} color={"#4F68B1"} icon={faCheck} /> : <></> }
                                </div>
                            </button>
                            <button onClick={() => {this.setType("company")}} className={(this.state.data.company) ? "button account type selected" : "button account type"}>
                                <div style={{position: 'relative'}}>
                                    <img src={StartupGraphic} className="icon account type" />
                                    <br />
                                    <a className="text account type header">A Startup / Private Company</a>
                                    {(this.state.data.company) ? <FontAwesomeIcon style={{position: 'absolute', top: '1vh', right: '1vh'}} color={"#4F68B1"} icon={faCheck} /> : <></> }
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container onboarding footer content">
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <a onClick={() => {this.props.functions.nextStep(false, this.props.state.accountInfo, "stepOne")}} className="text signin link"><FontAwesomeIcon icon={faLongArrowAltLeft} color={"#4F68B1"} /> Back to Account Credentials</a>
                        <a onClick={() => { (this.state.data.investor && !this.state.data.shareholder && !this.state.company) ? this.props.functions.nextStep(true, this.state.data, "stepTwo") : (this.state.data.shareholder || this.state.data.company) ? this.props.functions.nextSlide(true, this.state.data, "type") : this.toggleError()}} className="text signin link">Keep Going <FontAwesomeIcon icon={faLongArrowAltRight} color={"#AF6AAC"} /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default class StepTwo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSlide: 0,
            type: {
                investor: false,
                shareholder: false,
                company: false
            },
            shareholderInfo: false,
            shareholderName: null,
            companyInfo: false
        };

        this.functions = this.props.functions;
        this.functions.nextSlide = this.nextSlide.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    nextSlide(direction, data, key) {
        var state = this.state;

        state[key] = data;
        state["currentSlide"] = (direction) ? this.state.currentSlide + 1 : this.state.currentSlide - 1;

        this.setState(state);
    }

    render() {
        return(
            <div className="container onboarding content">
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    swipeable={false}
                    showThumbs={false}
                    selectedItem={this.state.currentSlide}
                    showIndicators={false}
                >
                    <AccountType state={this.state} functions={this.functions} />
                    <AdditionalQuestionsFullName state={this.props.state} functions={this.props.functions} />
                    <AdditionalQuestionsShareholder state={this.props.state} functions={this.props.functions} />
                </Carousel>
            </div>
        )
    }
}