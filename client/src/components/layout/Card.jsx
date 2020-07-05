import React, { Component } from 'react';

class Card extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			content: '',
		};
	}
	render() {
		return (
			<div>
				<div className="card blue-grey darken-1">
					<div className="card-content white-text">
						<span className="card-title">Submit your profile</span>
						<p>
							We’ll review your profile to see if we have jobs
							that match your skills and experience. If approved,
							your profile can be promoted to employers.
						</p>
					</div>
					<div className="card-action center-align">
						<a className="waves-effect waves-light btn">Submit for Review</a>
					</div>
				</div>
			</div>
		);
	}
}
export default Card;
