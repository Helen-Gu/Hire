import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

// Provider makes the store available to any nested components
// that have been wrapped in the connect() function
import { Provider } from 'react-redux';
import store from './store';
import Register from './components/auth/Register';
import EmployerRegister from './components/auth/EmployerRegister';
import Login from './components/auth/Login';
import Main from './containers/main/main';
import Landing from './components/layout/Landing';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import EmployerInfo from './components/profile/EmployerInfo';
import UserInfo from './components/profile/UserInfo';

// check for token to keep user logged in
if (localStorage.jwtToken) {
	// set auth token header auth
	const token = JSON.parse(localStorage.jwtToken);
	setAuthToken(token);
	// decode token and get user info and exp
	const decoded = jwt_decode(token);
	// set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));

	// check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser());
		window.location.href = './login';
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className="App">
						<Route exact path="/" component={Landing} />
						<Route exact path="/register" component={Register} />
						<Route
							exact
							path="/employer-register"
							component={EmployerRegister}
						/>
						<Route exact path="/login" component={Login} />
						<Switch>
							<PrivateRoute
								exact
								path="/dashboard"
								component={Dashboard}
							/>
							<PrivateRoute
								exact
								path="/employerInfo"
								component={EmployerInfo}
							/>
							<PrivateRoute
								exact
								path="/userInfo"
								component={UserInfo}
							/>
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
