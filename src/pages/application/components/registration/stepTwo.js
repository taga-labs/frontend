import React from 'react';
import ReactDOM from 'react-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLongArrowAltLeft, faLongArrowAltRight, faCheck, faTimes, faUser, faLock, faPlusSquare, faBuilding, faArrowRight, faChevronRight, faChevronDown, faChevronUp, faArrowDown, faArrowUp, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

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
                    "Apparel & Fashion",
                    "Aviation & Aerospace",
                    "Banking",
                    "Biotechnology",
                    "Broadcast Media",
                    "Building Materials",
                    "Business Supplies & Equipment",
                    "Capital Markets",
                    "Chemicals",
                    "Civic & Social Organization",
                    "Civil Engineering",
                    "Commercial Real Estate",
                    "Computer & Network Security",
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
                    "Defense & Space",
                    "Design",
                    "E-learning",
                    "Education Management",
                    "Electrical & Electronic Manufacturing",
                    "Entertainment",
                    "Environmental Services",
                    "Events Services",
                    "Executive Office",
                    "Facilities Services",
                    "Farming",
                    "Financial Services",
                    "Fine Art",
                    "Fishery",
                    "Food & Beverages",
                    "Food Production",
                    "Fundraising",
                    "Furniture",
                    "Gambling & Casinos",
                    "Glass, Ceramics & Concrete",
                    "Government Administration",
                    "Government Relations",
                    "Graphic Design",
                    "Health, Wellness & Fitness",
                    "Higher Education",
                    "Hospital & Health Care",
                    "Hospitality",
                    "Human Resources",
                    "Import & Export",
                    "Individual & Family Services",
                    "Industrial Automation",
                    "Information Services",
                    "Information Technology & Services",
                    "Insurance",
                    "International Affairs",
                    "International Trade & Development",
                    "Internet",
                    "Investment Banking",
                    "Investment Management",
                    "Judiciary",
                    "Law Enforcement",
                    "Law Practice",
                    "Legal Services",
                    "Legislative Office",
                    "Leisure, Travel & Tourism",
                    "Libraries",
                    "Logistics & Supply Chain",
                    "Luxury Goods & Jewelry",
                    "Machinery",
                    "Management Consulting",
                    "Maritime",
                    "Market Research",
                    "Marketing & Advertising",
                    "Mechanical Or Industrial Engineering",
                    "Media Production",
                    "Medical Device",
                    "Medical Practice",
                    "Mental Health Care",
                    "Military",
                    "Mining & Metals",
                    "Mobile Games",
                    "Motion Pictures & Film",
                    "Museums & Institutions",
                    "Music",
                    "Nanotechnology",
                    "Newspapers",
                    "Non-profit Organization Management",
                    "Oil & Energy",
                    "Online Media",
                    "Outsourcing/Offshoring",
                    "Package/Freight Delivery",
                    "Packaging & Containers",
                    "Paper & Forest Products",
                    "Performing Arts",
                    "Pharmaceuticals",
                    "Philanthropy",
                    "Photography",
                    "Plastics",
                    "Political Organization",
                    "Primary/Secondary Education",
                    "Printing",
                    "Professional Training & Coaching",
                    "Program Development",
                    "Public Policy",
                    "Public Relations & Communications",
                    "Public Safety",
                    "Publishing",
                    "Railroad Manufacture",
                    "Ranching",
                    "Real Estate",
                    "Recreational Facilities & Services",
                    "Religious Institutions",
                    "Renewables & Environment",
                    "Research",
                    "Restaurants",
                    "Retail",
                    "Security & Investigations",
                    "Semiconductors",
                    "Shipbuilding",
                    "Sporting Goods",
                    "Sports",
                    "Staffing & Recruiting",
                    "Supermarkets",
                    "Telecommunications",
                    "Textiles",
                    "Think Tanks",
                    "Tobacco",
                    "Translation & Localization",
                    "Transportation/Trucking/Railroad",
                    "Utilities",
                    "Venture Capital & Private Equity",
                    "Veterinary",
                    "Warehousing",
                    "Wholesale",
                    "Wine & Spirits",
                    "Wireless",
                    "Writing & Editing"
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
                name: (this.props.editingIndex != null) ? this.props.state.companies[this.props.editingIndex].name : null,
                size: (this.props.editingIndex != null) ? this.props.state.companies[this.props.editingIndex].size : null,
                industry: (this.props.editingIndex != null) ? this.props.state.companies[this.props.editingIndex].industry : null,
                type: (this.props.editingIndex != null) ? this.props.state.companies[this.props.editingIndex].type : null,
                link: (this.props.editingIndex != null) ? this.props.state.companies[this.props.editingIndex].link : null
            }
        };

        this.onQuestionSubmit = this.onQuestionSubmit.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.displayDropdown = this.displayDropdown.bind(this);
        this.onDropdownElementClick = this.onDropdownElementClick.bind(this);
        this.slideBack = this.slideBack.bind(this);
    }

    onQuestionSubmit(e, type) {
        e.preventDefault();

        if(this.state.questions[type] != null && this.state.questions[type] != "") {
            if(type == "link") {
                this.props.functions.addCompany(this.state.questions);
            } else {
                this.setState({currentSlide: this.state.currentSlide + 1});
            }
        }
    }

    onTextChange(e, key) {
        var state = this.state;

        state.questions[key] = e.target.value;

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
                                <input onChange={(e) => { this.onTextChange(e, "name") }} value={this.state.questions.name} className="input shareholder info" placeholder="Type your answer here..."></input>
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
                                            overflowY: "scroll",
                                            width: '20vw'
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
                                            overflowY: "scroll",
                                            width: '20vw'
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
                                            overflowY: "scroll",
                                            width: '20vw'
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
                    </div>
                    <div className="container shareholder slide content">
                        <a className="text header indicator"><a style={{fontSize: '3vh', display: 'inline-block', verticalAlign: 'middle'}}>{this.state.currentSlide + 1}</a> <FontAwesomeIcon icon={faChevronRight} size={25} style={{display: 'inline-block', verticalAlign: 'middle'}} /></a>
                        <div style={{textAlign: 'left'}}>
                            <a className="text shareholder info header"> Share a link to your company website.</a>
                            <br />
                            <br />
                            <input onKeyUp={(e) =>{ this.onTextChange(e, "link") }} value={this.state.questions.link} className="input shareholder info" placeholder="Type your answer here..."></input>
                            <br />
                            <br />
                            <button onClick={(e) => {this.onQuestionSubmit(e, "link")}} className="button shareholder info continue">Finished <FontAwesomeIcon icon={faThumbsUp} /></button>
                            <button onClick={this.slideBack} className="button shareholder info continue" style={{marginLeft: '1vw', backgroundColor: "lightgray", color: 'black'}}>Back <FontAwesomeIcon icon={faArrowUp} /></button>
                        </div>
                    </div>
                </Carousel>        
        );
    }
}

class ShareholderInfoButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container button shareholder">
                <button onClick={(e) => { this.props.functions.toggleModal(this.props.index) }} className="button company profile onboarding" style={{backgroundColor: this.props.data.color}}>
                    <FontAwesomeIcon icon={faBuilding} style={{opacity: 0.5}} />
                    <br />
                    <a style={{fontSize: '2vh', opacity: 0.5, marginTop: '-3vh'}}>{this.props.data.name}</a>
                </button>
                <button onClick={(e) => { this.props.functions.removeCompany(this.props.index)}} className="button delete company">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        )
    }
}

class AdditionalQuestionsShareholder extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            editingIndex: null,
            companies: [],
            colors: ["#9BD3CB", "#FCBCBC", "#F39CA4", "#EDDDD1", "#2D7F9D", "#DC7684", "#E4CA99", "#A4C9D7"]
        }

        this.functions = this.props.functions;

        this.addCompany = this.addCompany.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.removeCompany = this.removeCompany.bind(this);

        this.functions.addCompany = this.addCompany;
        this.functions.removeCompany = this.removeCompany;
        this.functions.toggleModal = this.toggleModal;
    }

    toggleModal(companyIndex) {
        this.setState({modal: !this.state.modal, editingIndex: companyIndex});
    }

    removeCompany(index) {
        var newCompaniesList = this.state.companies;
        newCompaniesList.splice(index, 1);
        this.setState({companies: newCompaniesList});
    }

    addCompany(newCompany) {
        var currentCompanies = this.state.companies;
        var currentColors = this.state.colors;

        var randIndex = Math.floor(Math.random() * this.state.colors.length);
        var randColor = this.state.colors[randIndex];
        this.state.colors.splice(randIndex, 1);

        currentCompanies.push({
            name: newCompany.name,
            size: newCompany.size,
            industry: newCompany.industry,
            type: newCompany.type,
            link: newCompany.link,
            color: randColor
        });

        this.setState({
            modal: false,
            colors: currentColors,
            companies: currentCompanies
        });
    }

    render() {
        const displayCompanies = () => {
            return this.state.companies.map((company, index) => {
                return <ShareholderInfoButton key={index} index={index} functions={this.functions} data={company} />
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
                            {displayCompanies()}
                            <button onClick={() => { this.toggleModal(null) }} className="button add square">
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
                                <ShareholderInfoSlideShow functions={this.props.functions} state={this.state} editingIndex={this.state.editingIndex} />
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
                    {/* <AccountType state={this.state} functions={this.functions} /> */}
                    {/* <AdditionalQuestionsFullName state={this.props.state} functions={this.props.functions} /> */}
                    <AdditionalQuestionsShareholder state={this.props.state} functions={this.props.functions} />
                </Carousel>
            </div>
        )
    }
}