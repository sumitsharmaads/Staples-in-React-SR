import React, {Component} from 'react';
import './App.css'

class Navigation extends Component {
	render(){
		return(
			<div className="Navigation">
				<ul className="Bottom">
						<li title="product"><a href="#"><h3>Product</h3></a></li>
						<li title="Service & Solutions"><a href="#"><h3>Service & Solutions</h3></a></li>
						<li title="Deals"><a href="#"><h3>Deals</h3></a></li>
						<li title="Business Expertise"><a href="#"><h3>Business Expertise</h3></a></li>
						<li title="Membership"><a href="#"><h3>Membership</h3></a></li>
					</ul>
			</div>
		);
	}
}
export default Navigation;