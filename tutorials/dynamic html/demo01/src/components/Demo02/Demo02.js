import React, { Component } from 'react';

class Demo02 extends Component {
    constructor(props) {
        super(props);
        let noRows1   = '18';
        let unitRow1  = ' 4.5vh ';
        let noCols1   = '6';
        let unitCol1  = '1fr';

        let noRows2   = '18';
        let unitRow2  = ' 4.5vh ';
        let noCols2   = '4';
        let unitCol2  = '1fr';

        let noRows3   = '18';
        let unitRow3  = ' 4.5vh ';
        let noCols3   = '5';
        let unitCol3  = '1fr';

        this.state = {
            Header:{
                height: '7vh',
            },

            span: ' / span ',
            wrapper: {
                display:'grid', 
                gridTemplateColumns: '0.1fr 1fr 0.1fr 1fr 0.1fr 1fr 0.1fr',
                height: '84vh',
                width: '100vw',
            },
            cols: {
                col01:{
                    display:'grid', 
                    // gridTemplateColumns: unitCols + unitCols + unitCols + unitCols + unitCols + unitCols,
                    gridTemplateColumns: 'repeat('+ noCols1 + ', ' + unitCol1 + ')',
                    gridTemplateRows: 'repeat('+ noRows1 + ', ' + unitRow1 + ')',
                    // gridTemplateRows: unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + 
                    //                   unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + 
                    //                   unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1,
                    gridGap: '2px',
                    height: '8vh',
                },

                col02:{
                    display:'grid', 
                    // gridTemplateColumns: unitCols + unitCols + unitCols + unitCols + unitCols + unitCols,
                    gridTemplateColumns: 'repeat('+ noCols2 + ', ' + unitCol2 + ')',
                    gridTemplateRows: 'repeat('+ noRows2 + ', ' + unitRow2 + ')',
                    // gridTemplateRows: unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1,
                    gridGap: '2px',
                    height: '8vh',
                },

                col03:{
                    display:'grid', 
                    // gridTemplateColumns: unitCols + unitCols + unitCols + unitCols + unitCols + unitCols,
                    gridTemplateColumns: 'repeat('+ noCols3 + ', ' + unitCol3 + ')',
                    gridTemplateRows: 'repeat('+ noRows3 + ', ' + unitRow3 + ')',
                    // gridTemplateRows: unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1 + unitRow1,
                    gridGap: '2px',
                    height: '8vh',
                }
            },

            nodes:{
                node01:{
                    id: 101,
                    name: 'Node 01',
                    column: '1',
                    row: '1',
                    width: '2',
                    height: '1',
                    backgroundColor: 'red',
                },

                node02:{
                    id: 102,
                    name: 'Node 02',
                    column: '3',
                    row: '1',
                    width: '2',
                    height: '1',
                    backgroundColor: 'green',
                },

                node03:{
                    id: 103,
                    name: 'Node 03',
                    column: '5',
                    row: '1',
                    width: '2',
                    height: '1',
                    backgroundColor: 'orange',
                },

                node04:{
                    id: 104,
                    name: 'Node 04',
                    column: '1',
                    row: '2',
                    width: '3',
                    height: '1',
                    backgroundColor: 'green',
                },

                node05:{
                    id: 105,
                    name: 'Node 05',
                    column: '4',
                    row: '2',
                    width: '3',
                    height: '1',
                    backgroundColor: 'red',
                },

                node06:{
                    id: 106,
                    name: 'Node 06',
                    column: '1',
                    row: '3',
                    width: '4',
                    height: '1',
                    backgroundColor: 'orange',
                },

                node07:{
                    id: 107,
                    name: 'Node 07',
                    column: '5',
                    row: '3',
                    width: '2',
                    height: '2',
                    backgroundColor: 'green',
                },

                node08:{
                    id: 108,
                    name: 'Node 08',
                    column: '1',
                    row: '1',
                    width: '2',
                    height: '1',
                    backgroundColor: 'green',
                },

                node09:{
                    id: 109,
                    name: 'Node 09',
                    column: '3',
                    row: '1',
                    width: '2',
                    height: '1',
                    backgroundColor: 'orange',
                },

                node10:{
                    id: 110,
                    name: 'Node 10',
                    column: '1',
                    row: '2',
                    width: '1',
                    height: '1',
                    backgroundColor: 'red',
                },

                node11:{
                    id: 111,
                    name: 'Node 11',
                    column: '2',
                    row: '2',
                    width: '3',
                    height: '1',
                    backgroundColor: 'green',
                },

                node12:{
                    id: 112,
                    name: 'Node 12',
                    column: '1',
                    row: '3',
                    width: '1',
                    height: '1',
                    backgroundColor: 'orange',
                },

                node13:{
                    id: 113,
                    name: 'Node 13',
                    column: '2',
                    row: '3',
                    width: '2',
                    height: '2',
                    backgroundColor: 'red',
                },

                node14:{
                    id: 114,
                    name: 'Node 14',
                    column: '4',
                    row: '3',
                    width: '1',
                    height: '1',
                    backgroundColor: 'green',
                },

                node15:{
                    id: 115,
                    name: 'Node 15',
                    column: '1',
                    row: '1',
                    width: '1',
                    height: '1',
                    backgroundColor: 'orange',
                },

                node16:{
                    id: 116,
                    name: 'Node 16',
                    column: '2',
                    row: '1',
                    width: '1',
                    height: '1',
                    backgroundColor: 'red',
                },

                node17:{
                    id: 117,
                    name: 'Node 17',
                    column: '3',
                    row: '1',
                    width: '1',
                    height: '1',
                    backgroundColor: 'green',
                },

                node18:{
                    id: 118,
                    name: 'Node 18',
                    column: '4',
                    row: '1',
                    width: '1',
                    height: '1',
                    backgroundColor: 'red',
                },

                node19:{
                    id: 119,
                    name: 'Node 19',
                    column: '5',
                    row: '1',
                    width: '1',
                    height: '1',
                    backgroundColor: 'green',
                },

                node20:{
                    id: 120,
                    name: 'Node 20',
                    column: '1',
                    row: '2',
                    width: '2',
                    height: '1',
                    backgroundColor: 'green',
                },

                node21:{
                    id: 121,
                    name: 'Node 21',
                    column: '4',
                    row: '2',
                    width: '2',
                    height: '1',
                    backgroundColor: 'red',
                },

                node22:{
                    id: 122,
                    name: 'Node 22',
                    column: '1',
                    row: '3',
                    width: '5',
                    height: '1',
                    backgroundColor: 'green',
                },

                node23:{
                    id: 123,
                    name: 'Node 23',
                    column: '4',
                    row: '4',
                    width: '1',
                    height: '1',
                    backgroundColor: 'green',
                },
            }
        }
    }
    
    render() {
        return (
            <div className="Layout" style={{width:'100%'}}>
                <div className="Header" style={this.state.Header}></div>
                <hr />
                <div className="wrapper" style={this.state.wrapper}>
                {/* ------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------- */}
                    <div style={{backgroundColor:'FloralWhite'}}></div>
                    <div className="col-1" style={this.state.cols.col01}>
                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node01.backgroundColor, 
                                gridColumn:this.state.nodes.node01.column.concat(this.state.span, this.state.nodes.node01.width),
                                gridRow: this.state.nodes.node01.row.concat(this.state.span, this.state.nodes.node01.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node01.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node02.backgroundColor, 
                                gridColumn:this.state.nodes.node02.column.concat(this.state.span, this.state.nodes.node02.width),
                                gridRow: this.state.nodes.node02.row.concat(this.state.span, this.state.nodes.node02.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node02.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node03.backgroundColor, 
                                gridColumn:this.state.nodes.node03.column.concat(this.state.span, this.state.nodes.node03.width),
                                gridRow: this.state.nodes.node03.row.concat(this.state.span, this.state.nodes.node03.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node03.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node04.backgroundColor, 
                                gridColumn:this.state.nodes.node04.column.concat(this.state.span, this.state.nodes.node04.width),
                                gridRow: this.state.nodes.node04.row.concat(this.state.span, this.state.nodes.node04.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node04.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node05.backgroundColor, 
                                gridColumn:this.state.nodes.node05.column.concat(this.state.span, this.state.nodes.node05.width),
                                gridRow: this.state.nodes.node05.row.concat(this.state.span, this.state.nodes.node05.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node05.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node06.backgroundColor, 
                                gridColumn:this.state.nodes.node06.column.concat(this.state.span, this.state.nodes.node06.width),
                                gridRow: this.state.nodes.node06.row.concat(this.state.span, this.state.nodes.node06.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node06.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node07.backgroundColor, 
                                gridColumn:this.state.nodes.node07.column.concat(this.state.span, this.state.nodes.node07.width),
                                gridRow: this.state.nodes.node07.row.concat(this.state.span, this.state.nodes.node07.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node07.name}
                        </div>

                    </div>
                    
                {/* ------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------- */}
                    <div style={{backgroundColor:'FloralWhite'}}></div>
                    <div className="col-2" style={this.state.cols.col02}>
                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node08.backgroundColor, 
                                gridColumn:this.state.nodes.node08.column.concat(this.state.span, this.state.nodes.node08.width),
                                gridRow: this.state.nodes.node08.row.concat(this.state.span, this.state.nodes.node08.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node08.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node09.backgroundColor, 
                                gridColumn:this.state.nodes.node09.column.concat(this.state.span, this.state.nodes.node09.width),
                                gridRow: this.state.nodes.node09.row.concat(this.state.span, this.state.nodes.node09.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node09.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node10.backgroundColor, 
                                gridColumn:this.state.nodes.node10.column.concat(this.state.span, this.state.nodes.node10.width),
                                gridRow: this.state.nodes.node10.row.concat(this.state.span, this.state.nodes.node10.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node10.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node11.backgroundColor, 
                                gridColumn:this.state.nodes.node11.column.concat(this.state.span, this.state.nodes.node11.width),
                                gridRow: this.state.nodes.node11.row.concat(this.state.span, this.state.nodes.node11.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node11.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node12.backgroundColor, 
                                gridColumn:this.state.nodes.node12.column.concat(this.state.span, this.state.nodes.node12.width),
                                gridRow: this.state.nodes.node12.row.concat(this.state.span, this.state.nodes.node12.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node12.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node13.backgroundColor, 
                                gridColumn:this.state.nodes.node13.column.concat(this.state.span, this.state.nodes.node13.width),
                                gridRow: this.state.nodes.node13.row.concat(this.state.span, this.state.nodes.node13.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node13.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node14.backgroundColor, 
                                gridColumn:this.state.nodes.node14.column.concat(this.state.span, this.state.nodes.node14.width),
                                gridRow: this.state.nodes.node14.row.concat(this.state.span, this.state.nodes.node14.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node14.name}
                        </div>

                    </div>
                    
                {/* ------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ----------------------------------------------------------------------------------------------
                ---------------------------------------------------------------------------------------------- */}
                    <div style={{backgroundColor:'FloralWhite'}}></div>
                    <div className="col-3" style={this.state.cols.col03}>
                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node15.backgroundColor, 
                                gridColumn:this.state.nodes.node15.column.concat(this.state.span, this.state.nodes.node15.width),
                                gridRow: this.state.nodes.node15.row.concat(this.state.span, this.state.nodes.node15.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node15.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node16.backgroundColor, 
                                gridColumn:this.state.nodes.node16.column.concat(this.state.span, this.state.nodes.node16.width),
                                gridRow: this.state.nodes.node16.row.concat(this.state.span, this.state.nodes.node16.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node16.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node17.backgroundColor, 
                                gridColumn:this.state.nodes.node17.column.concat(this.state.span, this.state.nodes.node17.width),
                                gridRow: this.state.nodes.node17.row.concat(this.state.span, this.state.nodes.node17.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node17.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node18.backgroundColor, 
                                gridColumn:this.state.nodes.node18.column.concat(this.state.span, this.state.nodes.node18.width),
                                gridRow: this.state.nodes.node18.row.concat(this.state.span, this.state.nodes.node18.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node18.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node19.backgroundColor, 
                                gridColumn:this.state.nodes.node19.column.concat(this.state.span, this.state.nodes.node19.width),
                                gridRow: this.state.nodes.node19.row.concat(this.state.span, this.state.nodes.node19.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node19.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node20.backgroundColor, 
                                gridColumn:this.state.nodes.node20.column.concat(this.state.span, this.state.nodes.node20.width),
                                gridRow: this.state.nodes.node20.row.concat(this.state.span, this.state.nodes.node20.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node20.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node21.backgroundColor, 
                                gridColumn:this.state.nodes.node21.column.concat(this.state.span, this.state.nodes.node21.width),
                                gridRow: this.state.nodes.node21.row.concat(this.state.span, this.state.nodes.node21.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node21.name}
                        </div>

                        <div className="nodes" 
                            style={{
                                backgroundColor:this.state.nodes.node22.backgroundColor, 
                                gridColumn:this.state.nodes.node22.column.concat(this.state.span, this.state.nodes.node22.width),
                                gridRow: this.state.nodes.node22.row.concat(this.state.span, this.state.nodes.node22.height),
                                // gridRow: '1 / span 3',
                                }}>
                            {this.state.nodes.node22.name}
                        </div>

                    </div>

                    <div style={{backgroundColor:'FloralWhite'}}></div>
                </div> 
            </div>              
        );
    }
}

export default Demo02;