import React, {Component} from 'react';
import './App.css';
import MidPartLeft from './MidPartLeft';
import MidPartRight from './MidPartRight'


class MidPart extends Component {
	render(){
		return(
			<div className="MidPart">
			<MidPartLeft />
			<MidPartRight />
			</div>
		);
	}
} 
export default MidPart;