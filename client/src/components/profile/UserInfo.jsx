import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './../layout/Card';
import PersonalInfo from './../layout/PersonalInfo';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import EditPersonalInfo from './EditPersonalInfo';
import EmploymentPreference from './../layout/EmploymentPreference';

class UserInfo extends Component {
	constructor(props) {
		super(props);
		const { firstName, lastName, city } = props.auth.user;
		this.state = {
			personalInfo: {
				firstName,
				lastName,
				address: city,
			},
			headlineSalary: {
				headline: 'FULL STACK DEVELOPER at TD Asset Management',
				typeOfEmployments: [
					{
						id: 1,
						name: 'permanent (full-time)',
						preferredSalary: 80000,
						checked: true,
						isPreferred: true,
					},
					{
						id: 2,
						name: 'contract',
						preferredSalary: 40,
						checked: true,
						isPreferred: false,
					},
					{
						id: 3,
						name: 'intern',
						preferredSalary: 70000,
						checked: true,
						isPreferred: false,
					},
				],
			},
		};
	}

	closeCollapsible = () => {
		const collapsible = document.querySelector('.collapsible');
		const instance = M.Collapsible.getInstance(collapsible);
		instance.close(0);
		// document.getElementById('editable-personal-info').reset();
	};

	componentDidMount() {
		const collapsible = document.querySelector('.collapsible');
		M.Collapsible.init(collapsible, {});
	}

	setPersonalInfo = (data) => {
		const { firstName, lastName, address } = data;
		this.setState({
			personalInfo: {
				...this.state.personalInfo,
				firstName,
				lastName,
				address,
			},
		});
	};
	// static getDerivedStateFromProps(props, state) {
	// 	const { user } = props.auth;
	// 	state.name = user.firstName + ' ' + user.lastName;
	// 	state.address = user.city;
	// 	return state;
	// }
	render() {
		const { firstName, lastName, address } = this.state.personalInfo;
		const { headline, typeOfEmployments } = this.state.headlineSalary;
		return (
			<div className="container">
				<div className="row" style={{ marginTop: '3rem' }}>
					<div className="col m9 s12 left">
						<ul className="collapsible">
							<li>
								<div className="collapsible-header">
									<div id="personal-info">
										<i className="material-icons left">
											perm_identity
										</i>
										<div className="right">
											<PersonalInfo
												name={
													firstName + ' ' + lastName
												}
												location={address}
											/>
										</div>
									</div>
								</div>
								<div className="collapsible-body">
									<EditPersonalInfo
										setPersonalInfo={this.setPersonalInfo}
										onCancelOrSubmit={this.closeCollapsible}
									/>
								</div>
							</li>
							<li>
								<div className="collapsible-header">
									{/* <div id="headline-salary">
										{this.state.headlineSalary.headline}
									</div> */}
									{/* <div> */}
										<EmploymentPreference
											headline={headline}
											typeOfEmployments={
												typeOfEmployments
											}
										/>
									{/* </div> */}
								</div>
								<div className="collapsible-body"></div>
							</li>
						</ul>

						{/* <div className="divider"></div>
						<div id="headline-salary" className="section">
							yyy
						</div>
						<div className="divider"></div>
						<div id="job-search-progress" className="section"></div>
						<div className="divider"></div>
						<div id="locations" className="section"></div>
						<div className="divider"></div>
						<div id="educations" className="section"></div>
						<div className="divider"></div>
						<div id="skills" className="section"></div>
						<div className="divider"></div>
						<div id="employment-history" className="section"></div>
						<div className="divider"></div>
						<div id="languages" className="section"></div> */}
					</div>
					<div className="col m3 s12 right">
						<Card />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});
export default connect(mapStateToProps)(UserInfo);
