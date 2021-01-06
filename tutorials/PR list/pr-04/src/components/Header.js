import React from 'react';

function Header() {
  return (
  		<nav class="navbar navbar-inverse">
  		    	<div class="container-fluid">
  		    		<a class="navbar-brand" href="#">Home</a>
  		    		<ul class="nav navbar-nav">
  		    			<li>
  		    				<a href="#">Function</a>
  		    			</li>
  		    			<li class="active">
  		    				<a href="#">List products</a>
  		    			</li>
  		    		</ul>
  		    	</div>
  		    </nav>    );

}

export default Header;
