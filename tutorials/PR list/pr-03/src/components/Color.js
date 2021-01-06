import React from 'react';

class Color extends React.Component {
    render() {

    	var colorsList = {c1:'blue', c2:'red', c3:'green', c4:'grey'}
        var style = {
            backgroundColor: 'red',
            // backgroundColor: colorsList.c2,
            width: '200px',
            height: '100px'
        }
        return (
            <div style={ style }>
     
    </div>
        );

    }
}

export default Color;