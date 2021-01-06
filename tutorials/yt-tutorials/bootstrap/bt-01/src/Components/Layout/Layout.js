import React, { Component } from 'react';
import './App.css'

class Layout extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-12" style={{height: "80vh", backgroundColor: "rgba(255,0,0,0.1)" }}>
                    <div className="col-4" style={{height: "80vh", backgroundColor: "rgba(255,0,0,0.1)" }}>
                        <div className="row">
                            <div className="col bg-success">
                                1 of 3
                            </div>
                            <div className="col bg-warning">
                                2 of 3
                            </div>
                            <div className="col bg-danger">
                                3 of 3
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col bg-warning">
                                1 of 3
                            </div>
                            <div className="col bg-success">
                                2 of 3
                            </div>
                            <div className="col bg-danger">
                                3 of 3
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col bg-success">
                                1 of 3
                            </div>
                            <div className="col bg-warning">
                                2 of 3
                            </div>
                            <div className="col bg-danger">
                                3 of 3
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col bg-success">
                                1 of 3
                            </div>
                            <div className="col bg-warning">
                                2 of 3
                            </div>
                            <div className="col bg-danger">
                                3 of 3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
