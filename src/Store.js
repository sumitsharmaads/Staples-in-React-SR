import React, {Component} from 'react';
import './App.css'

class Store extends Component {
	render() {
		return (
			<div className= 'Store'>
				<a href="#">Your Store: <span> <b className='Primary_store'>Framingham, MA</b></span>&emsp;&emsp;Open 8am &nbsp;- &nbsp; 9pm </a>
			</div> 
		);
	}
}

export default Store;