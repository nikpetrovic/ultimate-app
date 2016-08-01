import React, { Component } from 'react';
import ListSubject from './ListSubject';
import ListPreview from './ListPreview';

export default class ListItem extends Component {
	render() {
		return (
				<div className="listItem">
					<ListSubject />
					<ListPreview />
				</div>
		);
	}
}