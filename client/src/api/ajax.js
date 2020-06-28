import axios from 'axios';
// encapsulate ajax request function
const ajax = (url, data = {}, method = 'GET') => {
	if (method === 'GET') {
		// data: { username: tom, password: 123 }
		// param: username=tom&password=123
		let paramStr = '';
		Object.keys(data).forEach((key) => {
			paramStr += key + '=' + data[key] + '&';
		});
		if (paramStr) {
			paramStr = paramStr.substring(0, paramStr.length - 1);
		}
		return axios.get(url + '?' + paramStr);
	} else {
		return axios.post(url, data);
	}
};

export default ajax;
