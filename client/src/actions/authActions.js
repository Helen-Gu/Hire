import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import ajax from '../api/ajax';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';

/* 
  mapDispatchToProps -- used for dispatching actions to the store 
*/
// register user
export const registerUser = (userData, history) => async (dispatch) => {
	const res = await ajax('/api/users/register', userData, 'POST').catch(
		(err) => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			});
		}
	);
	if (res) {
		history.push('/login'); // routes to login page after successful registration
	}
};

// login, get user token
export const loginUser = (userData) => async (dispatch) => {
	const res = await ajax('/api/users/login', userData, 'POST').catch(
		(err) => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			});
		}
	);
	if (res) {
		const { token } = res.data;
		localStorage.setItem('jwtToken', JSON.stringify(token));
		// set token to Auth header
		setAuthToken(token);
		const decoded = jwt_decode(token);
		// set current user
		dispatch(setCurrentUser(decoded));
	}
};

export const logoutUser = () => (dispatch) => {
	// remove token from local storage
	localStorage.removeItem('jwtToken');
	// remove auth header for future request
	setAuthToken(false);
	// set current user to empty object {} which will set
	// isAuthenticated to false
	dispatch(setCurrentUser({}));
};

/* 
  action creators
*/
export const setCurrentUser = (user) => {
	return {
		type: SET_CURRENT_USER,
		payload: user,
	};
};

export const setUserLoading = () => {
	return {
		type: USER_LOADING,
	};
};
