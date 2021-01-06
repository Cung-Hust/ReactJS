import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-12 bg-light" style={{height:'60px', marginTop:'0px'}}>
                    <div className="row">
                        <div className="col-sm-5"><h3 style={{height:'0px', marginTop:'15px', marginBottom:'0px'}}>Operation Monitoring - F2</h3></div>
                        <div className="col-sm-7 bg-light">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="col-sm-6 bg-success" style={{height:'40px', marginTop:'15px'}}>
                                        <h6 style={{marginLeft:'100px'}}>&nbsp;&nbsp;RUNNING</h6>
                                    </div>                                
                                </div>

                                <div className="col-sm-3">
                                    <div className="col-sm-6 bg-danger" style={{height:'40px', marginTop:'15px'}}>
                                        <h6 style={{marginLeft:'100px'}}>&nbsp;&nbsp;STOPPED</h6>
                                    </div> 
                                </div>

                                <div className="col-sm-3">
                                    <div className="col-sm-6 bg-warning" style={{height:'40px', marginTop:'15px'}}>
                                        <h6 style={{marginLeft:'100px'}}>&nbsp;&nbsp;PLANNED &nbsp;&nbsp;STOP</h6>
                                    </div> 
                                </div>

                                <div className="col-sm-3">
                                    <div className="col-sm-6 bg-secondary" style={{height:'40px', marginTop:'15px'}}>
                                        <h6 style={{marginLeft:'100px'}}>NOT CONNECT</h6>
                                    </div>
                                </div> 
                            </div>                           
                        </div>
                    </div> 
                    {/* <hr/> */}
                </div>                                                    
            </div>
        );
    }
}

export default Header;