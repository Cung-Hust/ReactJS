import React, { Component } from 'react';
import Machines from './Machines';

class Content extends Component {
    constructor(props) {        
        super(props);

        let Colors = ['bg-success', 'bg-danger', 'bg-warning', 'bg-secondary'];
        let j1 = Math.floor(Math.random()*(4-1)+1);
        let j2 = Math.floor(Math.random()*(4-1)+1);
        let j3 = Math.floor(Math.random()*(4-1)+1);
        let j4 = Math.floor(Math.random()*(4-1)+1);
        this.state = {
            st: Math.floor(Math.random()*(4-1)+1),
            Machines: Machines,
            j1: j1,
            j2: j2,
            j3: j3,
            j4: j4,
            Colors: Colors,

            st1: Colors[j1],
            st2: Colors[j2],
            st3: Colors[j3],
            st4: Colors[j4], 
        }
    }
    
    demo = () => {
        let j = 0;
        const Colors = ['bg-success', 'bg-danger', 'bg-warning', 'bg-secondary'];
        for(let i = 0; i < Machines.length; i++)
        {
            j = Math.floor(Math.random()*(4-1)+1);
            Machines[i].st = Colors[j];
        }
        return Machines[1];
    }

    checkState = () => {
        switch(this.state.st){
            case 1:
                return (
                    "bg-success"
                );

            case 2:
                return (
                    "bg-danger"
                ); 

            case 3:
                return (
                    "bg-warning"
                ); 

            default:
                return (
                    "bg-secondary"
                ); 
        }
    }

    render() {
        return (
            <div>
                <div className="col-sm-12" style={{marginTop:'10px'}}>
                    <div className="row">

                        <div className="col-sm-4">
                            <div className="row" style={{width:'480px', marginLeft:'5px'}}>
                                <div className='col-sm-4'>
                                    
                                </div>

                                {/* <div className={"col-sm-4 rounded border border-white text-center " + this.state.st1} style={{height:'40px', width:'150px', color:'white'}}>
                                    <h6>B54</h6>
                                </div> */}

                                <div className={"col-sm-4 rounded border border-white text-center " + this.state.st1 } style={{height:'40px', width:'150px', color:'white'}}>
                                    <h6>B54</h6>
                                </div>

                                <div className={"col-sm-4 rounded border border-white text-center " + this.state.st2 } style={{height:'40px', width:'150px', color:'white'}}>
                                    <h6>B53</h6>
                                </div>
                            </div>

                            <div className="row" style={{width:'480px', marginLeft:'5px'}}>

                                <div className='col-sm-4'>
                                        
                                </div>
                                
                                <div className={"col-sm-4 rounded border border-white text-center " + this.state.st3 } style={{height:'40px', color:'white'}}>
                                    <h6>B47</h6>
                                </div>

                                <div className={"col-sm-4 rounded border border-white text-center " + this.state.st4 } style={{height:'40px', color:'white'}}>
                                    <h6>B46</h6>
                                </div>

                            </div>        
                        </div>

                        <div className="col-sm-4">
                            <div className='col-sm-4 bg-success rounded text-center' style={{height:'40px', color:'white'}}>
                                <h6>B54</h6>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className='col-sm-4 bg-success rounded text-center' style={{height:'40px', color:'white'}}>
                                <h6>B54</h6>
                            </div>
                        </div>

                    </div> 
                </div>                                                    
            </div>
        );
    }
}

export default Content;