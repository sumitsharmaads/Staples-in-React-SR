import React, {Component} from 'react';
import './App.css';

class Search_bar extends Component {
	render() {
		return(
			<div className ='Search_bar'>
				<div className="Search">
					<form>
						<input id="Input" type="text" name="Seach all for your business needs" placeholder="Seach all for your business needs" />
						<button type="submit" className="button"><i class="fa fa-search"></i></button>
					</form>
				</div>
			</div>
		);
	}
}

export default Search_bar;