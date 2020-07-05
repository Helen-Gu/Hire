import React, { Component } from 'react';

class PersonalInfo extends Component {
	render() {
		return (
			<>
				<div>{this.props.name}</div>
				<div>Lives in {this.props.location}</div>
			</>
		);
	}
}
export default PersonalInfo;
