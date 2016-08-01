import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './components/ListItem';

export default class App extends Component {	
	render() {
		return (
				<div>
					<ListItem />
				</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));