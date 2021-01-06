import React from 'react';

class Color extends React.Component {
    render() {

        // var colorsList = {RUNNING:'green', STOP:'red', PLANNEDSTOP:'yellow', DISCONNECT:'grey'};
        // var state;
        var style = {
            backgroundColor: 'red',
            // backgroundColor: colorsList.DISCONNECT,
            width: '250px',
            height: '100px',
            margin: '10px'
        }
        return (
            <div style={ style }>
     
    </div>
        );

    }
}

export default Color;