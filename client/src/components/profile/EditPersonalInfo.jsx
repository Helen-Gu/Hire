import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditPersonalInfo extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			address: '',
		};
	}

	onChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		const userData = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: this.state.address,
		};
		// since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
		this.props.setPersonalInfo(userData);
		this.props.onCancelOrSubmit();
	};
	render() {
		return (
			<div className="editable-section">
				<div className="row">
					<form
						noValidate
						onSubmit={this.onSubmit}
						autoComplete="off"
						id="editable-personal-info"
					>
						<div className="col s12 m6">
							<div className="input-field col s12 m6">
								<input
									type="text"
									name=""
									id="firstName"
									onChange={this.onChange}
								/>
								<label htmlFor="firstName">First Name</label>
							</div>
							<div className="input-field col s12 m6">
								<input
									type="text"
									name=""
									id="lastName"
									onChange={this.onChange}
								/>
								<label htmlFor="lastName">Last Name</label>
							</div>
							<div className="input-field col s12 m12">
								<input
									type="text"
									name="address"
									id="address"
									onChange={this.onChange}
								/>
								<label htmlFor="address">
									Where do you live
								</label>
							</div>
							<div className="col s6">
								<button
									style={{
										width: '120px',
										borderRadius: '3px',
										letterSpacing: '1.5px',
									}}
									type="button"
									onClick={this.props.onCancelOrSubmit}
									className="btn left btn-small btn-flat white black-text"
								>
									Cancel
								</button>
							</div>{' '}
							<div className="col s6">
								<button
									style={{
										width: '120px',
										borderRadius: '3px',
										letterSpacing: '1.5px',
									}}
									type="submit"
									className="left btn-small waves-effect waves-light hoverable accent-3"
								>
									Save
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
