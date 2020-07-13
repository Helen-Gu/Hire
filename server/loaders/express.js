const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('../api/users');

module.exports = async (app) => {
	// Bind application-level middleware to an instance of the app
	// object by using the app.use() and app.METHOD() functions,
	// where METHOD is the HTTP method of the request that the middleware
	// functions handles (such as GET, PUT, or POST) in lowercase

	// Bodyparser middleware
	app.use(
		bodyParser.urlencoded({
			extended: false,
		})
	);

	// Middleware that only parses json and only looks at requests where Content-Type
	// header matches the _type_ option
	// a new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body)
	app.use(bodyParser.json());

	// Passport middleware
	app.use(passport.initialize());

	// Passport config
	require('../config/passport')(passport);

	// Routes
	app.use('/api/users', users);

	return app;
};
