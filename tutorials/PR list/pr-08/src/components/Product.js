import React from 'react';

class Product extends React.Component {
    render() {

        var myStyle = {
            fontSize: 20,
            color: '#FF0000'
        }

        return (
            <div>
  		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
	  		<div class="thumbnail">
	  			<img src="https://phucanhcdn.com/media/product/36958_iph11_gr.jpg" alt=""/>
	  			<div class="caption">
	  				<h3>Iphone 11 pro</h3>
	  				<p>
	  					16.000.000 VND
	  				</p>
	{/*  				<p>
	  					<a href="#" class="btn btn-primary">Mua hàng</a>
	  				</p>*/}
	  			</div>
	  			<button type="button" class="btn btn-success">Mua hàng</button>
{/*	  			<button type="button" class="btn btn-success">Đặt hàng</button>*/}
				<p></p>
	  			<img src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/494423535.jpeg" alt=""/>
	  			<div class="caption">
	  				<h3 style={ myStyle }>Samsung Galaxy S20 Ultra</h3>
	  				<p>
	  					20.000.000 VND
	  				</p>
	  				{/*<p>
	  					<a href="#" class="btn btn-primary">Mua hàng</a>
	  				</p>*/}
	  			</div>
	  			<button type="button" class="btn btn-success">Mua hàng</button>

	  		</div>
	  	</div>
  	</div>

        );

    }
}

export default Product;