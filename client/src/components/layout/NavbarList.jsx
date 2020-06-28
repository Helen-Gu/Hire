import React, { Component } from 'react';

class NavbarList extends Component {
	render() {
		return (
			<div>
				<ul id="nav" className="right hide-on-small-only">
					{this.props.navs.map((nav) => (
						<li key={nav.id}>
							<a href={nav.href}> {nav.title} </a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default NavbarList;
