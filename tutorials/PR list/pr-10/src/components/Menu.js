import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
        render() {
                return (
                        <div>
                            <nav className="w3-sidebar w3-collapse w3-white" style={{zIndex: 3, width: '200px'}} id="mySidebar"><br />
                              <div className="w3-container w3-row">
                                <div className="w3-col s4">
                                  <img src="/avatar2.png" className="w3-circle w3-margin-right" style={{width: '50px'}} />
                                </div>
                                <div className="w3-col s8 w3-bar">
                                  <br/>
                                  <span>Welcome, <strong>Cung</strong></span><br />

                                </div>
                              </div>
                              <hr />

                              <div className="w3-bar-block">
                                {/*<a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu"><i className="fa fa-remove fa-fw" />&nbsp; Close Menu</a>*/}
                                <a href="" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-home fa-fw" />&nbsp; Home</a>
                                <a href="http://localhost:3000/pages/Monitoring" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw" />&nbsp; Monitoring</a>
                                <a href="/Report" className="w3-bar-item w3-button w3-padding"><i className="fa fa-line-chart fa-fw" />&nbsp; Report</a>
                                <a href="/Configuration" className="w3-bar-item w3-button w3-padding"><i className="fa fa-cog fa-fw" />&nbsp; Configuration</a>
                                <a href="/Users" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw" />&nbsp; Users</a><br /><br />
                              </div>
                            </nav>

                            <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{cursor: 'pointer'}} title="close side menu" id="myOverlay" />

                            <div className="w3-main" style={{marginLeft: '300px', marginTop: '43px'}}/>

                        </div>
        )
    }
}

export default Menu;