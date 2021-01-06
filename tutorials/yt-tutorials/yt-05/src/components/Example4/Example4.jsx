import React, { Component } from 'react';

class Example4 extends Component {
  constructor(props) {
    super(props);
    let x  = '9vw', x2 = '18.2vw', x3 = '27.4vw', x1_5 = '13.6vw';
    let y  = '5.5vh';
    let mL = '0.2vw';
    let mT = '0.4vh';



    // -----------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------
    this.state = {
      Nodes: {
        B54:{
          id:'1',
          name: 'B54',
          width: x,
          height: y,
          marginLeft: '9.2vw', marginTop: mT,
          backgroundColor:'green',
        },
        
        B53:{
          id:'2',
          name: 'B53',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'red',
        },

        B47:{
          id:'3',
          name: 'B47',
          width: x,
          height: y,
          marginLeft: '9.2vw', marginTop: mT,
          backgroundColor:'#f2c40d',
          
        },

        B46:{
          id:'4',
          name: 'B46',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',
        },
        
        B45:{
          id:'5',
          name: 'B45',
          width: x,
          height: y,
          marginLeft: '9.2vw', marginTop: mT,
          backgroundColor:'red',
        },

        B44:{
          id:'6',
          name: 'B44',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        B43:{
          id:'7',
          name: 'B43',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'green',
        },
        
        B42:{
          id:'8',
          name: 'B42',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        B41:{
          id:'9',
          name: 'B41',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'#f2c40d',
          
        },

        B40:{
          id:'10',
          name: 'B40',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'green',
        },
        
        B39:{
          id:'11',
          name: 'B39',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'red',
        },

        B38:{
          id:'12',
          name: 'B38',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        B37:{
          id:'13',
          name: 'B37',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'green',
        },
        
        B33:{
          id:'14',
          name: 'B33',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        B31:{
          id:'15',
          name: 'B31',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'#f2c40d',
          
        },

        B34:{
          id:'16',
          name: 'B34',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'green',
        },
        
        B32:{
          id:'17',
          name: 'B32',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'red',
        },

        B30:{
          id:'18',
          name: 'B30',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        E11:{
          id:'19',
          name: 'E11',          
          width: x3,
          height: y,
          marginTop: mT,
          backgroundColor:'green',        },

        E9:{
          id:'20',
          name: 'E9',          
          width: x3,
          height: y,
          marginTop: mT,
          backgroundColor:'green',        },

        C3:{
          id:'21',
          name: 'C3',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'green',        },

        M4:{
          id:'22',
          name: 'M4',
          width: x,
          height: y,
          marginLeft: '9.4vw', marginTop: mT,
          backgroundColor:'red',
        },

        C2:{
          id:'23',
          name: 'C2',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'red',
        },

        M3:{
          id:'24',
          name: 'M3',
          width: x,
          height: y,
          marginLeft: '9.4vw', marginTop: mT,
          backgroundColor:'red',
        },

        C1:{
          id:'25',
          name: 'C1',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'#f2c40d',
          
        },

        M2:{
          id:'26',
          name: 'M2',
          width: x,
          height: y,
          marginLeft: '9.4vw', marginTop: mT,
          backgroundColor:'green',        },

        M1:{
          id:'27',
          name: 'M1',
          width: x,
          height: y,
          marginLeft: '18.4vw', marginTop: mT,
          backgroundColor:'#f2c40d',
          
        },

        B6:{
          id:'28',
          name: 'B6',
          width: x,
          height: y,
          marginLeft: '18.4vw', marginTop: mT,
          backgroundColor:'green',        },

        B29:{
          id:'29',
          name: 'B29',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'green',
        },
        
        B24:{
          id:'30',
          name: 'B24',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'red',
        },

        B19:{
          id:'31',
          name: 'B19',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        B28:{
          id:'32',
          name: 'B28',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'green',
        },
        
        B23:{
          id:'33',
          name: 'B23',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        B18:{
          id:'34',
          name: 'B18',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'red',
        },

        B27:{
          id:'35',
          name: 'B27',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'green',        },
        
        B22:{
          id:'36',
          name: 'B22',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        B17:{
          id:'37',
          name: 'B17',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        B26:{
          id:'38',
          name: 'B26',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'green',        },
        
        B21:{
          id:'39',
          name: 'B21',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        B16:{
          id:'40',
          name: 'B16',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        B25:{
          id:'41',
          name: 'B25',
          width: x,
          height: y,
          marginTop: mT,
          backgroundColor:'green',        },
        
        B20:{
          id:'42',
          name: 'B20',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

        B15:{
          id:'43',
          name: 'B15',
          width: x,
          height: y,
          marginLeft: mL, marginTop: mT,
          backgroundColor:'green',        },

          SB6:{
            id:'42',
            name: 'SB6',
            width: x1_5,
            height: y,
            marginTop: mT,
            backgroundColor:'green',        },
  
          SB5:{
            id:'43',
            name: 'SB5',
            width: x1_5,
            height: y,
            marginLeft: mL, marginTop: mT,
            backgroundColor:'green',        },

          SB3:{
            id:'42',
            name: 'SB3',
            width: x1_5,
            height: y,
            marginTop: mT,
            backgroundColor:'green',        },
  
          SB2:{
            id:'43',
            name: 'SB2',
            width: x1_5,
            height: y,
            marginLeft: mL, marginTop: mT,
            backgroundColor:'green',        },
          
          SB4:{
            id:'42',
            name: 'SB4',
            width: x1_5,
            height: y,
            marginTop: mT,
            backgroundColor:'green',        },
  
          SB1:{
            id:'43',
            name: 'SB1',
            width: x1_5,
            height: y,
            marginLeft: mL, marginTop: mT,
            backgroundColor:'green',        },

      },

      Columes: {
        colume1: {
          marginTop:'0.5vh',
          float:'left',
          width: '30vw',
          height: '80vh',
          marginLeft: '3vw',
        },

        colume2: {
          marginTop:'0.5vh',
          float:'left',
          width: '30vw',
          height: '80vh',
          marginLeft: '2vw',
        },

        colume3: {
          marginTop:'0.5vh',
          float:'left',
          width: '30vw',
          height: '80vh',
          marginLeft: '3vw',
        }
      }
    };
  }

    render() {
      return (
            <div>
                  <div className="layout">
                      <div className="col-1" style={this.state.Columes.colume1}>
                          
                          <div className='row'>
                                <div className="Nodes" style={this.state.Nodes.B54}>
                                    <div>{this.state.Nodes.B54.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B53}>
                                    <div>{this.state.Nodes.B53.name}</div>
                                    <div>time</div>
                                </div>                                
                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.B47}>
                                    <div>{this.state.Nodes.B47.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B46}>
                                    <div>{this.state.Nodes.B46.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">
                                <div className="Nodes" style={this.state.Nodes.B45}>
                                    <div>{this.state.Nodes.B45.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B44}>
                                    <div>{this.state.Nodes.B44.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.B43}>
                                    <div>{this.state.Nodes.B43.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B42}>
                                    <div>{this.state.Nodes.B42.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B41}>
                                    <div>{this.state.Nodes.B41.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.B40}>
                                    <div>{this.state.Nodes.B40.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B39}>
                                    <div>{this.state.Nodes.B39.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B38}>
                                    <div>{this.state.Nodes.B38.name}</div>
                                    <div>time</div>
                                </div>

                          </div>


                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.B37}>
                                    <div>{this.state.Nodes.B37.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B33}>
                                    <div>{this.state.Nodes.B33.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B31}>
                                    <div>{this.state.Nodes.B31.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.B34}>
                                    <div>{this.state.Nodes.B34.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B32}>
                                    <div>{this.state.Nodes.B32.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B30}>
                                    <div>{this.state.Nodes.B30.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.E11}>
                                    <div>{this.state.Nodes.E11.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.E9}>
                                    <div>{this.state.Nodes.E9.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.C3}>
                                    <div>{this.state.Nodes.C3.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.M4}>
                                    <div>{this.state.Nodes.M4.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.C2}>
                                    <div>{this.state.Nodes.C2.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.M3}>
                                    <div>{this.state.Nodes.M3.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.C1}>
                                    <div>{this.state.Nodes.C1.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.M2}>
                                    <div>{this.state.Nodes.M2.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.M1}>
                                    <div>{this.state.Nodes.M1.name}</div>
                                    <div>time</div>
                                </div>

                          </div>
                          

                      </div>


{/* -----------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------- */}

                      <div className="col-2" style={this.state.Columes.colume2}>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.B6}>
                                    <div>{this.state.Nodes.B6.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.B29}>
                                    <div>{this.state.Nodes.B29.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B24}>
                                    <div>{this.state.Nodes.B24.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B19}>
                                    <div>{this.state.Nodes.B19.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.B28}>
                                    <div>{this.state.Nodes.B28.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B23}>
                                    <div>{this.state.Nodes.B23.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B18}>
                                    <div>{this.state.Nodes.B18.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.B27}>
                                    <div>{this.state.Nodes.B27.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B22}>
                                    <div>{this.state.Nodes.B22.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B17}>
                                    <div>{this.state.Nodes.B17.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.B26}>
                                    <div>{this.state.Nodes.B26.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B21}>
                                    <div>{this.state.Nodes.B21.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B16}>
                                    <div>{this.state.Nodes.B16.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.B25}>
                                    <div>{this.state.Nodes.B25.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B20}>
                                    <div>{this.state.Nodes.B20.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.B15}>
                                    <div>{this.state.Nodes.B15.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.SB6}>
                                    <div>{this.state.Nodes.SB6.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.SB5}>
                                    <div>{this.state.Nodes.SB5.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.SB3}>
                                    <div>{this.state.Nodes.SB3.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.SB2}>
                                    <div>{this.state.Nodes.SB2.name}</div>
                                    <div>time</div>
                                </div>

                          </div>

                          <div className="row">

                                <div className="Nodes" style={this.state.Nodes.SB4}>
                                    <div>{this.state.Nodes.SB4.name}</div>
                                    <div>time</div>
                                </div>

                                <div className="Nodes" style={this.state.Nodes.SB1}>
                                    <div>{this.state.Nodes.SB1.name}</div>
                                    <div>time</div>
                                </div>

                          </div>
                         
                      </div>

                      <div className="col-3" style={this.state.Columes.colume3}>

                        
                                
                      </div>

                  </div>
            </div>
        );
      }
}

export default Example4;