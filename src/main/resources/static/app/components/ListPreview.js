import React, { Component } from 'react';
import update from 'react-addons-update';

export default class ListPreview extends Component {
	constructor() {
		super();
		
		this.state = {
				editMode: false,
				inputValue: 'empty'
		}
	}
	
	clickHandle(e) {
		this.switchState();
	}
	
	enterPressHandle(e) {
		if (e.key === 'Enter') {
			console.log("state:", JSON.stringify(this.state));
			this.switchState();
		}
	}
	
	switchState() {
		this.setState(
				update(this.state, {
					editMode: {
						$set: !this.state.editMode
					}
				})
		);
	}
	
	onChange(e) {
		this.setState(
				update(this.state, {
					inputValue: {
						$set: e.target.value
					}
				})
		);
	}
	
	render() {
		let item2render;
		if (this.state.editMode) {
			item2render = <input type="text" ref='inputName' value={this.state.inputValue} className="listPreview" 
				onKeyPress={ this.enterPressHandle.bind(this) } onChange={this.onChange.bind(this)} />
		} else {
			item2render = <p className="listPreview" onDoubleClick={ this.clickHandle.bind(this) }>{this.state.inputValue}</p>
		}
		
		return (
				<div>
				{ item2render }
				</div>
		);
	}
	
	componentDidUpdate() {
		if (this.state.editMode) {			
			this.refs.inputName.focus();
		}
	}
}