import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
        render() {
                return (
                        <div>

                            <div className="w3-bar w3-top w3-black w3-large" style={{zIndex: 4}}>
                              <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"><i className="fa fa-bars" /> &nbsp;Menu</button>
                              <span className="w3-bar-item w3-right">Permission</span>
                            </div>

                            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{zIndex: 3, width: '200px'}} id="mySidebar"><br />
                              <div className="w3-container w3-row">
                                <div className="w3-col s4">
                                  <img src="/avatar2.png" className="w3-circle w3-margin-right" style={{width: '50px'}} />
                                </div>
                                <div className="w3-col s8 w3-bar">
                                  <br/>
                                  <span>Welcome, <strong>Cung</strong></span><br />
{/*                                  <a href="#" className="w3-bar-item w3-button"><i className="fa fa-envelope" /></a>
                                  <a href="#" className="w3-bar-item w3-button"><i className="fa fa-user" /></a>
                                  <a href="#" className="w3-bar-item w3-button"><i className="fa fa-cog" /></a>*/}
                                </div>
                              </div>
                              <hr />
{/*                              <div className="w3-container">
                                <h5>Menu</h5>
                              </div>*/}
                              <div className="w3-bar-block">
                                <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu"><i className="fa fa-remove fa-fw" />&nbsp; Close Menu</a>
                                <a href="#" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-home fa-fw" />&nbsp; Home</a>
                                <a href="/src/monitoring" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw" />&nbsp; Monitoring</a>
{/*                                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw" />&nbsp; Traffic</a>
                                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bullseye fa-fw" />&nbsp; Geo</a>
                                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-diamond fa-fw" />&nbsp; Orders</a>
                                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw" />&nbsp; News</a>  fa fa-history fa-fw*/}
                                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-line-chart fa-fw" />&nbsp; Report</a>
                                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-cog fa-fw" />&nbsp; Configuration</a>
                                <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw" />&nbsp; Users</a><br /><br />
                              </div>
                            </nav>

                            <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{cursor: 'pointer'}} title="close side menu" id="myOverlay" />

                            <div className="w3-main" style={{marginLeft: '300px', marginTop: '43px'}}/>

{/*                            <header className="w3-container" style={{paddingTop: '22px'}}>
                              <h5><b><i className="fa fa-dashboard" /> My Dashboard</b></h5>
                            </header>*/}
{/*
                            <header className="w3-container" style={{marginTop: '0px'}}>
                              <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"><i className="fa fa-bars" /> &nbsp;Menu</button>
                            </header>*/}

                        </div>
        )
    }
}

export default Header;