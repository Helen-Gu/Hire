const mongoose = require('mongoose');
// structure: name: value, if nullable
const Schema = mongoose.Schema;

/* 
    create a Schema to represent a User, defining fields and types as objects of the Schema
*/
const UserSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	userType: {
		type: String,
		required: true,
	},
	city: {
		type: String,
	},
	info: {
		type: String,
	},
	company: {
		type: String,
	},
	salary: {
		type: String,
	},
	jobTitle: {
		type: String,
	},
	phone: {
		type: String,
	},
});
/* 
    Defines a model or retrieves it. Models defined on the mongoose instance 
    are available to all connection created by the same mongoose instance.
*/
module.exports = mongoose.model('users', UserSchema);
