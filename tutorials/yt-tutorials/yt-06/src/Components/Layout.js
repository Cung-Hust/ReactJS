import React, { Component } from 'react';
import Config from "./Config";

const Columes = Config.Columes;
const Nodes = Config.Nodes;

class Layout extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      
//         }
//     }

    render() {
        return (
            <div>
                <div className="layout" style={{width:'100%', height:'100%'}}>
                    <div className="col-1" style={Columes.colume1.styles}>                                
                        <div className='row-1'>
                            <div className="nodes">
                                <div style={Nodes.B47.styles}>{Nodes.B47.name}</div>                                    
                            </div>
                        </div>                             
                    </div>
                </div>
            </div>
        );      
    }
}

export default Layout;

// "styles": "{float:'left',color: 'white', width: '32%', height: '5%', marginLeft: '65%', marginTop: '0.5%', backgroundColor:'red', 'borderRadius': '5px'}"