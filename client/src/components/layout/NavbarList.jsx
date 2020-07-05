import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarList extends Component {
	render() {
		return (
			<React.Fragment>
				{this.props.navs.map((nav) => (
					<li key={nav.id}>
						<Link to={nav.href} className={this.props.className}>
							{' '}
							{nav.title}{' '}
						</Link>
					</li>
				))}
			</React.Fragment>
		);
	}
}

export default NavbarList;
