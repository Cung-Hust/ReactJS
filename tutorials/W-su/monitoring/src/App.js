import React, { Component } from 'react';
import Header from './components/Header';


class App extends Component {
    render() {
        return (
            <div className='layout' style={{width:'1500px', padding:'0', margin:'0 auto'}}>                
                <div className="wrap" style={{width:'1500px', float:'left', border:'1px '}}>
                  <div id="header" style={{width:'1500px', float:'left', borderBottom:'1px dashed #AAA'}}>
                    <div className="nav" style={{width:'500px', float:'left', backgroundColor:'white', height:'50px'}}>
                      <h1 style={{marginTop:'5px', marginLeft:'10px', color:'black'}}> Operation Monitoring - F2 </h1>
                    </div>
                    <div className="content" style={{width:'840px', float:'left', backgroundColor:'white'}}>
                      <div style={{width:'700px', float:'left', backgroundColor:'lightgrey', marginLeft:'300px', height:'50px'}}>

                          <div className="running" style={{width:'170px', float:'left', backgroundColor:'green', marginTop:'5px', marginLeft:'10px', color:'white', height:'40px'}}>
                            <h3 style={{marginTop:'5px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RUNNING</h3>                            
                          </div>

                          <div className="stopped" style={{width:'170px', float:'left', backgroundColor:'red', marginTop:'5px', color:'white', height:'40px'}}>
                            <h3 style={{marginTop:'5px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STOPPED</h3>
                          </div>

                          <div className="planned stop" style={{width:'170px', float:'left', backgroundColor:'#ffcb00', marginTop:'5px', color:'white', height:'40px'}}>
                            <h3 style={{marginTop:'5px'}}>&nbsp;&nbsp;&nbsp;PLANNED STOP</h3>
                          </div>

                          <div className="not connect" style={{width:'170px', float:'left', backgroundColor:'grey', marginTop:'5px', color:'white', height:'40px'}}>
                            <h3 style={{marginTop:'5px'}}>&nbsp;&nbsp;&nbsp;&nbsp;NOT CONNECT</h3>
                          </div>

                      </div>
                    </div>
                  </div>

                  <div className="main" style={{width:'1500px', float:'left'}}>

                    <div className="Zone-1" style={{width:'500px', float:'left', backgroundColor:'lightgrey'}}>
                      <div className='row-1'>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'5px', marginLeft:'163px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B54</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'5px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B53</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'163px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B47</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B46</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'163px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B45</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B44</h4>
                        </div>
                      </div>

                      <div className='row-2'>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B43</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B42</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B41</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B40</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B39</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B38</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B37</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B33</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B31</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B34</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B32</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B30</h4>
                        </div>                        

                      </div>

                      <div className='row-3'>

                        <div className="running" style={{width:'482px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'236px', color:'white'}}>E11</h4>                            
                        </div>

                        <div className="stopped" style={{width:'482px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'237px', color:'white'}}>E9</h4>
                        </div>

                      </div>

                      <div className='row-4'>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>C3</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'163px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>M4</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>C2</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'163px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>M3</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>C1</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'163px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>M2</h4>
                        </div>

                      </div>

                      <div className='row-5'>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'325px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>M1</h4>
                        </div>

                      </div>


                    </div>

    {/*-********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     *********************************************************************************************************************************************************** */}


                    <div className="Zone-2" style={{width:'500px', float:'left', backgroundColor:'#e6fffb'}}>
                      

                      <div className='row-1'>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'5px', marginLeft:'324px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B6</h4>
                        </div>

                      </div>

                      <div className='row-2'>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B29</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B24</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B19</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B28</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B23</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B18</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B27</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B22</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B17</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B26</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B21</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B16</h4>
                        </div> 

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B25</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B20</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B15</h4>
                        </div>                       

                      </div>

                      <div className='row-3'>

                        <div className="running" style={{width:'240px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'120px', color:'white'}}>B6</h4>                            
                        </div>

                        <div className="stopped" style={{width:'240px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'120px', color:'white'}}>B5</h4>
                        </div>

                        <div className="running" style={{width:'240px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'120px', color:'white'}}>B3</h4>                            
                        </div>

                        <div className="stopped" style={{width:'240px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'120px', color:'white'}}>B2</h4>
                        </div>

                        <div className="running" style={{width:'240px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'120px', color:'white'}}>B4</h4>                            
                        </div>

                        <div className="stopped" style={{width:'240px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'120px', color:'white'}}>B1</h4>
                        </div>

                      </div>

                      <div className='row-4'>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'325px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B8</h4>
                        </div>

                      </div>

                      <div className='row-5'>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B36</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'163px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B7</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B14</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'163px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B35</h4>
                        </div>

                      </div>


                      <div className='row-6'>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B13</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B52</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B5</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B12</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B51</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B4</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B11</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B50</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B3</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B10</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B49</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B2</h4>
                        </div>

                        <div className="running" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'1px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B9</h4>                            
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B48</h4>
                        </div>

                        <div className="stopped" style={{width:'160px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'1px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B1</h4>
                        </div>

                      </div>


                    </div>



    {/*-********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     *********************************************************************************************************************************************************** */}

                    <div className="Zone-3" style={{width:'500px', float:'left', backgroundColor:'lightgrey'}}>
                      <div className='row-1'>

                        <div className="stopped" style={{width:'95px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'5px', marginLeft:'96px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B52</h4>
                        </div>

                        <div className="stopped" style={{width:'95px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'5px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B5</h4>
                        </div>

                        <div className="running" style={{width:'95px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'5px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B12</h4>                            
                        </div>

                        <div className="stopped" style={{width:'95px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'5px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B51</h4>
                        </div>
                      </div>

                      <div className='row-2'>

                        <div className="stopped" style={{width:'95px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'35px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B52</h4>
                        </div>

                        <div className="stopped" style={{width:'95px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'35px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B52</h4>
                        </div>

                        <div className="stopped" style={{width:'95px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'35px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B5</h4>
                        </div>

                        <div className="running" style={{width:'95px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'35px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B12</h4>                            
                        </div>

                        <div className="stopped" style={{width:'95px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'35px', marginLeft:'1px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>B51</h4>
                        </div>

                      </div>

                      <div className='row-3'>

                        <div className="stopped" style={{width:'482px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'35px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>E8</h4>
                        </div>

                        <div className="stopped" style={{width:'482px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'2px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>E7</h4>
                        </div>

                        <div className="stopped" style={{width:'482px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'2px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>E10</h4>
                        </div>

                        <div className="stopped" style={{width:'482px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'2px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>E6</h4>
                        </div>

                        <div className="stopped" style={{width:'482px', height:'43.5px', float:'left', backgroundColor:'red', marginTop:'2px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>E5</h4>
                        </div>

                      </div>

                      <div className='row-3'>

                        <div className="stopped" style={{width:'482px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'35px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>E4</h4>
                        </div>

                        <div className="stopped" style={{width:'482px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'35px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>E3</h4>
                        </div>

                        <div className="stopped" style={{width:'482px', height:'43.5px', float:'left', backgroundColor:'green', marginTop:'35px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>E2</h4>
                        </div>

                        <div className="stopped" style={{width:'482px', height:'43.5px', float:'left', backgroundColor:'#ffcb00', marginTop:'35px', marginLeft:'2px', color:'white', borderRadius:'5px'}}>
                          <h4 style={{float:'left', marginTop:'1px', marginLeft:'3px', color:'white'}}>E1</h4>
                        </div>

                      </div>

                    </div>

                  </div>


    {/*-********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     ***********************************************************************************************************************************************************
     *********************************************************************************************************************************************************** */}

                  <div id="footer" style={{width:'1500px', float:'left', marginTop:'5px', borderTop:'1px dashed #AAA'}}>
                    <h3 style={{marginTop:'3px'}}> &nbsp;&nbsp;&nbsp;&nbsp;Khi máy dừng quá thời gian cho phép thì vị trí máy sẽ nhấp nháy cảnh báo ! - Machine's position will blink when stopped over allowed stop duration ! </h3>
                  </div>
                </div>
              </div>
        );
    }
}

export default App;