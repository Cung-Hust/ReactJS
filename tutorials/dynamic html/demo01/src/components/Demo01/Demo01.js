import React, { Component } from 'react';

class Demo01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            span: '/span',
            wrapper: {
                display:'grid', 
                gridTemplateColumns: '0.25fr 3fr 0.25fr 3fr 0.25fr 3fr 0.25fr',
            },

            col2: {
                display:'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                gridGap: '5px',
            },

            nodes:{
                node01:{
                    name: 'Node 01',
                    id: 101,
                    column: '2',
                    width: '2',
                    row: '1',
                    height: '3',
                    backgroundColor: 'green',
                },

                node02:{
                    name: 'Node 02',
                    id: 102,
                    column: '3',
                    width: '2',
                    row: '1',
                    height: '3',
                    backgroundColor: 'red',
                },

                node03:{
                    name: 'Node 03',
                    id: 103,
                    column: '1',
                    width: '1',
                    row: '2',
                    height: '3',
                    backgroundColor: 'yellow',
                },

                node04:{
                    name: 'Node 04',
                    id: 104,
                    column: '3',
                    width: '1',
                    row: '2',
                    height: '3',
                    backgroundColor: 'red',
                },
            }
        }
    }
    
    render() {
        return (
            <div className="wrapper" style={this.state.wrapper}>

                <div className="col-1" style={{backgroundColor:'gray'}}>
                    1
                </div>

                <div className="col-2" style={this.state.col2}>
                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node01.backgroundColor, 
                                gridColumn:this.state.nodes.node01.column.concat(this.state.span, this.state.nodes.node01.width),
                                gridRow:this.state.nodes.node01.row.concat(this.state.span, this.state.nodes.node01.height),
                                // gridRow:this.state.nodes.node01.row,
                                }}>
                            Node 1
                        </div>
                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node02.backgroundColor, 
                                gridColumn:this.state.nodes.node02.column.concat(this.state.span, this.state.nodes.node02.width),
                                gridRow:this.state.nodes.node02.row.concat(this.state.span, this.state.nodes.node02.height),
                                }}>
                            Node 2
                        </div> 
                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node03.backgroundColor, 
                                gridColumn:this.state.nodes.node03.column.concat(this.state.span, this.state.nodes.node03.width),
                                gridRow:this.state.nodes.node03.row.concat(this.state.span, this.state.nodes.node03.height),
                                }}>
                            Node 3
                        </div>

                        <div className="space"></div>
                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node04.backgroundColor, 
                                gridColumn:this.state.nodes.node04.column.concat(this.state.span, this.state.nodes.node04.width),
                                gridRow:this.state.nodes.node04.row.concat(this.state.span, this.state.nodes.node04.height),
                                }}>
                            Node 4
                        </div>
                        <div className="space"></div>
                        <div className="space"></div>                   
                </div>
                    
                <div className="col-3" style={{backgroundColor:'gray'}}>
                    3
                </div>
                    
                <div className="col-4" style={{backgroundColor:'green'}}>
                    4
                </div>
                    
                <div className="col-5" style={{backgroundColor:'gray'}}>
                    5
                </div>

                <div className="col-6" style={{backgroundColor:'green'}}>
                    6
                </div>

                <div className="col-7" style={{backgroundColor:'gray'}}>
                    7
                </div>

            </div>
        );
    }
}

export default Demo01;