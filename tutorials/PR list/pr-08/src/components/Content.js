import React from 'react';
import ReactDOM from 'react-dom';

import Machine from './Machine';

class Content extends React.Component {
        render() {
            return (
                    <div>
                    	<div className="w3-main" style={{marginLeft: '200px', marginTop: '43px', width: '900px'}}>
							<div className="w3-row-padding w3-margin-bottom">
					            <div className="w3-quarter">
					              <div className="RUNNING" style={{marginLeft: '5px', color:'white', background:'#2eb82e', width:'200px', height:'50px'}}>
					                <h4>&nbsp;RUNNING</h4>
					              </div>
					            </div>

					            <div className="w3-quarter">
					              <div className="STOPPED" style={{marginLeft: '5px', color:'white', background:'#ff3300', width:'200px', height:'50px'}}>
					                <h4>&nbsp;STOPPED</h4>
					              </div>
					            </div>

					            <div className="w3-quarter">
					              <div className="PLANNED STOP" style={{marginLeft: '5px', color:'white', background:'#ffcc00', width:'200px', height:'50px'}}>
					                <h4>&nbsp;PLANNED STOP</h4>
					              </div>
					            </div>

					            <div className="w3-quarter">
					              <div className="DISCONNECT" style={{marginLeft: '5px', color:'white', background:'grey', width:'200px', height:'50px'}}>
					                <h4>&nbsp;DISCONNECT</h4>
					              </div>
					            </div>
					        </div>
					    </div>


					    <div>
					    	<div>
					    		<div className="w3-main" style={{marginLeft: '210px', marginTop: '30px', width: '600px'}}>
							    	<div>
								    	<div>
											<div className="w3-row-padding w3-margin-bottom">
									            <div className="Machine" style={{marginLeft: '0px', marginTop: '0px'}}>				            		
									            	<Machine />	
									            </div>

									            <div className="Machine" style={{marginLeft: '0px', marginTop: '0px'}}>					           
									                <Machine />
									            </div>

									            <div className="Machine" style={{marginLeft: '0px', marginTop: '0px'}}>					           
									                <Machine />
									            </div>

									            <div className="Machine" style={{marginLeft: '0px', marginTop: '0px'}}>					           
									                <Machine />
									            </div>

									            <div className="Machine" style={{marginLeft: '0px', marginTop: '0px'}}>				            		
									            	<Machine />	
									            </div> 

									            <div className="Machine" style={{marginLeft: '0px', marginTop: '0px'}}>					           
									                <Machine />
									            </div>

									            <div className="Machine" style={{marginLeft: '0px', marginTop: '0px'}}>					           
									                <Machine />
									            </div>

									            <div className="Machine" style={{marginLeft: '0px', marginTop: '0px'}}>					           
									                <Machine />
									            </div>
									        </div>
								        </div>
							        </div>
					    		</div>							  
					    	</div>
					    </div>
        			</div>
        )
    }
}
export default Content