import React, { Component } from 'react';

export default class EmploymentPreference extends Component {
	render() {
		return (
			<div className="row">
				<div
					id="headline-salary"
					className="col s12 section"
					style={{ paddingBottom: '12px' }}
				>
					<span>{this.props.headline}</span>
				</div>
				<div className="col s12 section">
					<ol style={{ listStyleType: 'square' }}>
						{this.props.typeOfEmployments
							.sort((a, b) =>
								b.isPreferred - a.isPreferred == 0 // sort first by preference then id
									? a.id - b.id
									: b.isPreferred - a.isPreferred
							)
							.map((employmentType) => {
								const {
									id,
									isPreferred,
									name,
									preferredSalary,
								} = employmentType;
								const formattedPreferredSalary = preferredSalary.toLocaleString();
								return (
									<li key={id} className="role-and-salaries">
										{isPreferred
											? 'Prefers'
											: 'Interested in'}{' '}
										{name} roles at a minimum base salary of{' '}
										<b>
											${formattedPreferredSalary}/
											{name === 'contract' ? 'hr' : 'yr'}
										</b>
									</li>
								);
							})}
					</ol>
				</div>
			</div>
		);
	}
}
