import React, { Component } from 'react';
// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			userType: 'applicant',
			city: '',
			query: '',
			errors: {},
		};
	}
	componentDidMount() {
		// if logged in and user navigate to Login page, should redirect them to /dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}
	componentDidUpdate(prevProps) {
		if (prevProps.errors !== this.props.errors) {
			this.setState({
				errors: this.props.errors,
			});
		}
	}
	onChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onOptionChange = (e) => {
		this.setState({
			userType: e.target.value,
		});
	};
	onSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword,
			userType: this.state.userType,
			city: this.state.city,
		};
		this.props.registerUser(newUser, this.props.history);
	};
	handleScriptLoad = () => {
		// Declare Options For Autocomplete
		const options = {
			types: ['(cities)'],
		}; // To disable any eslint 'google not defined' errors

		// Initialize Google Autocomplete
		/*global google*/

		this.autocomplete = new google.maps.places.Autocomplete(
			document.getElementById('address'),
			options
		);

		// Avoid paying for data that you don't need by restricting the set of
		// place fields that are returned to just the address components and formatted
		// address.
		this.autocomplete.setFields([
			'address_components',
			'formatted_address',
		]);

		// Fire Event when a suggested name is selected
		this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
	};

	handlePlaceSelect = () => {
		// Extract City From Address Object
		const addressObject = this.autocomplete.getPlace();
		const address = addressObject.address_components;

		// Check if address is valid
		if (address) {
			// Set State
			this.setState({
				city: address[0].long_name,
				query: addressObject.formatted_address,
			});
		}
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col s12">
						<Link to="/" className="btn-flat waves-effect">
							<i className="material-icons left">
								keyboard_backspace
							</i>{' '}
							Back to home
						</Link>
					</div>
					<form
						noValidate
						onSubmit={this.onSubmit}
						autoComplete="off"
					>
						<div className="col s12 m6">
							<div className="row">
								<div className="col s12">
									<ul className="tabs tabs-fixed-width">
										<li className="tab col s6">
											<a
												className="active"
												href="/#register"
											>
												Talent
											</a>
										</li>
										<li className="tab col s6">
											<a href="/#employer-register">
												Employer
											</a>
										</li>
									</ul>
								</div>
								<section
									id="head"
									className="text-light center-align"
								>
									<h5>We Bring Job Offers to You</h5>
									<p>
										Join thousands of people who’ve found
										their dream job using Hire.
									</p>
								</section>
							</div>
							<section>
								<div className="input-field col s12 m6">
									<input
										onChange={this.onChange}
										value={this.state.firstName}
										error={errors.firstName}
										id="firstName"
										type="text"
										className={classnames('', {
											invalid: errors.firstName,
										})}
									/>
									<label htmlFor="firstName">
										First Name
									</label>
									<span className="red-text">
										{errors.firstName}
									</span>
								</div>
								<div className="input-field col s12 m6">
									<input
										onChange={this.onChange}
										value={this.state.lastName}
										error={errors.lastName}
										id="lastName"
										type="text"
										className={classnames('', {
											invalid: errors.lastName,
										})}
									/>
									<label htmlFor="lastName">Last Name</label>
									<span className="red-text">
										{errors.lastName}
									</span>
								</div>
								<div className="input-field col s12">
									<input
										onChange={this.onChange}
										value={this.state.email}
										error={errors.email}
										id="email"
										type="email"
										placeholder="you@example.com"
										className={classnames('', {
											invalid: errors.email,
										})}
									/>
									<label htmlFor="email" className="active">
										Email
									</label>
									<span className="red-text">
										{errors.email}
									</span>
								</div>
								<div className="input-field col s12">
									<Script
										url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLbL6to8MEisFeDyEjyQo4JjH-2GYp_14&libraries=places&language=en"
										onLoad={this.handleScriptLoad}
									/>
									<input
										id="address"
										onChange={(event) =>
											this.setState({
												query: event.target.value,
											})
										}
										type="text"
										placeholder="City, State/Country"
										value={this.state.query}
										className={classnames('', {
											invalid: errors.city,
										})}
										autoComplete="none"
									/>
									<label htmlFor="address" className="active">
										Where You Live
									</label>
									<span className="red-text">
										{errors.address}
									</span>
								</div>
								<div className="input-field col s12">
									<input
										onChange={this.onChange}
										value={this.state.password}
										error={errors.password}
										id="password"
										type="password"
										className={classnames('', {
											invalid: errors.password,
										})}
									/>
									<label htmlFor="password">Password</label>
									<span className="red-text">
										{errors.password}
									</span>
								</div>
								<div className="input-field col s12">
									<input
										onChange={this.onChange}
										value={this.state.confirmPassword}
										error={errors.confirmPassword}
										id="confirmPassword"
										type="password"
										className={classnames('', {
											invalid: errors.confirmPassword,
										})}
									/>
									<label htmlFor="confirmPassword">
										Confirm Password
									</label>
									<span className="red-text">
										{errors.confirmPassword}
									</span>
								</div>

								{/* <div
								className="row"
								style={{ paddingLeft: '11.250px' }}
							>
								<div className="col s2">
									<label>
										<input
											className="with-gap"
											type="radio"
											value="Talent"
											checked={
												this.state.userType === 'Talent'
											}
											onChange={this.onOptionChange}
										/>
										<span>Talent</span>
									</label>
								</div>
								<div className="col s2">
									<label>
										<input
											className="with-gap"
											type="radio"
											value="Employer"
											checked={
												this.state.userType ===
												'Employer'
											}
											onChange={this.onOptionChange}
										/>
										<span>Employer</span>
									</label>
								</div>
							</div> */}
							</section>
							<section>
								<div className="col s6">
									<p className="left grey-text text-darken-1">
										Already have an account?{' '}
										<Link to="/login">Log in</Link>
									</p>
								</div>
								<div className="col s6">
									<button
										style={{
											width: '150px',
											borderRadius: '3px',
											letterSpacing: '1.5px',
										}}
										type="submit"
										className="right btn-large waves-effect waves-light hoverable blue accent-3"
									>
										Sign up
									</button>
								</div>
							</section>
						</div>
					</form>
					<div className="col s12 m6">
						<blockquote className="text-light center-align">
							<h5>3 Reasons You'll love Hire</h5>
							<ul className="text-gray-dark xs-epsilon">
								<li>
									Companies apply to you, not the other way
									around.
								</li>
								<li>
									You can hide your info from current and
									former employers,{' '}
								</li>
								<li>plus it’s free for candidates!</li>
							</ul>
							<h6 style={{ marginTop: '30px' }}>
								Get started and find your dream job today!
							</h6>
						</blockquote>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

// mapStateToProps describes how to transform the currentr Redux store state
// into the props you want to pass to a presentational component you are wrapping
const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
