import React, { Component } from 'react';

class Header extends Component {
	render() {
		return(
				<div>
					<div className="nav">
                        Nội dung menu <br /><br /><br /> Phần thanh bên trái class="nav"
                    </div>
                    <div className="content">
                        Nội dung chính <br /><br /><br /> Phần nội dung class="content"
                    </div> 
				</div>
			)
	}
}

export default Header;
