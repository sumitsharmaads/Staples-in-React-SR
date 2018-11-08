import React, {Component} from 'react';
import Reorder from './Reorder';
import Account from './Account';
import Connect from './Connect';
import Cart from './Cart'


class MenuBar extends Component {
	render() {
		return(
			<div className="MenuBar">
			<Reorder />
			<Account />
			<Connect />
			<Cart />
			</div>
		);
	}
}
export default MenuBar;