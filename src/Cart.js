import React, { Component } from 'react';
import './App.css';

class Cart extends Component{
	render(){
		return(
			<div className="Cart">
				<div className ="Reorder-Icons">
					<i className="fa fa-cart-plus"></i>
				</div>
				<span className="TextValue">Cart</span>
			</div>
		);
	}
}

export default Cart;