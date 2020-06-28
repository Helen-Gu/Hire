import React, { Component } from 'react';
import NavbarList from './NavbarList';
// import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Navbar extends Component {
	state = {
		navs: [
			{
				id: 1,
				title: 'Home',
				href: '#dashboard',
			},
			{
				id: 2,
				title: 'Profile',
				href: '#userInfo',
			},
			{
				id: 3,
				title: 'Sign out',
				href: '#dashboard',
			},
		],
	};
	componentDidMount() {
		let sidenav = document.querySelector('#slide-out');
		M.Sidenav.init(sidenav, {});
	}
	render() {
		return (
			<div>
				<nav className="z-depth-0">
					<div className="nav-wrapper">
						<div className="container">
							<a href="#" className="brand-logo">
								HIRE
							</a>
							<div className="hide-on-med-and-up">
								<a
									href="#"
									data-target="slide-out"
									className="sidenav-trigger"
								>
									<i className="material-icons">menu</i>
								</a>
							</div>
							<NavbarList navs={this.state.navs} />
						</div>
					</div>
				</nav>

				<ul id="slide-out" className="sidenav">
					{this.state.navs.map((nav) => (
						<li key={nav.id}>
							<a className="sidenav-close" href={nav.href}>
								{nav.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Navbar;
