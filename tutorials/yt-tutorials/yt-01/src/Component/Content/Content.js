import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            // st : Math.floor(Math.random()*(2))
            st: 0,
        }     
    }

    thongbao1 = ()  => { alert('Are you sure you want to edit ?'); }

    thongbao3 = (x) => { alert(x);}

    renderButton  = () => {
        return (
            <div className="row">
                <div className="btn btn-group">
                    <div className="btn btn-info" onClick={ () => this.editClick()}>Edit</div>
                    <div className="btn btn-danger" onClick={ () => this.thongbao3("Remove ?")}>Remove</div>
                {/*<div className="btn btn-info" onClick={ this.thongbao3.bind(this, "Remove ?")}>Delete</div> */}
                </div>
            </div>

        )
    }

    renderForm = () => {
        return (
            <div className="row">
                <div className="form-group">
                    <input ref={(inputdata) => {this.medium = inputdata}} defaultValue={this.props.quote} type="text" name="ten" className="form-control" />
                   
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="form-group">
                    <div className="btn btn-block btn-success" onClick={ () => this.saveClick() }>Save</div>
                </div>

            </div>
        )        
    }

    // Tao ham de kiem tra hien thi nut nhan
    checkDisplay = () => {
        if(this.state.st === 0) {
            return this.renderButton();
        }else {
            return this.renderForm();
        }
    }

    editClick = () => {
        return this.setState({st:1});

    }

    saveClick = () => {
        return (
            this.setState({st:0}),
            console.log(this.medium.value)
        )
    }
    
    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className={"col-lg-6 "+ this.props.vt1}>
                                <div className="p-5">
                                <img className="img-fluid rounded-circle" src={this.props.img} alt="" />
                                </div>
                            </div>
                            <div className={"col-lg-6 " + this.props.vt2}>
                                <div className="p-5">
                                    <h2 className="display-4"> {this.props.tieude}</h2>
                                    <p>
                                        {this.props.quote}
                                    </p>   

                                    {this.checkDisplay()}
                                    
                                    <hr />
                                </div>
                            </div>
                        </div>  
                    </div>
                </section>
            </div>
        );
    }
}

export default Content;