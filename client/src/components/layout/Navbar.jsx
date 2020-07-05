import React, { Component } from 'react';
import NavbarList from './NavbarList';
import M from 'materialize-css/dist/js/materialize.min.js';

class Navbar extends Component {
	state = {
		navs: [
			{
				id: 1,
				title: 'Home',
				href: '/dashboard',
			},
			{
				id: 2,
				title: 'Profile',
				href: '/userInfo',
			},
			{
				id: 3,
				title: 'Sign out',
				href: '/dashboard',
			},
		],
		hideNav: window.innerWidth <= 760,
	};
	static getDerivedStateFromProps(props, state) {
		if (props.user.userType === 'applicant') {
			state.navs[1].href = '/userInfo';
		} else if (props.user.userType === 'recruiter') {
			state.navs[1].href = '/employerInfo';
		}
		return state;
	}
	componentDidMount() {
		window.addEventListener('resize', this.resize);
		let sidenav = document.querySelector('#slide-out');
		M.Sidenav.init(sidenav, {});
	}
	// update hideNav size is changed to mobile
	resize = () => {
		let currentHideNav = window.innerWidth <= 760;
		if (currentHideNav !== this.state.hideNav) {
			this.setState({ hideNav: currentHideNav });
		}
	};
	componentWillUnmount() {
		window.removeEventListener('resize', this.resize);
	}
	render() {
		return (
			<div>
				<nav className="z-depth-0">
					<div className="nav-wrapper container">
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
						<ul
							id="slide-out"
							className={this.state.hideNav ? 'sidenav' : 'right'}
						>
							<NavbarList
								navs={this.state.navs}
								className={
									this.state.hideNav ? 'sidenav-close' : ''
								}
							/>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;
