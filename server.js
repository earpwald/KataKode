
// Pulling in dependencies
	var log4js = require('./node_modules/log4js/lib/log4js'),
 				 express = require('express');

//---------------------------------------------- Setup logging and Server -------------------------------------------------
	log4js.configure({
		appenders: [
			// outputs the logging to cmd line for testing
			{ 'type': 'console' },
			// creates a rolling date file which will be appended with Y/M/D at midnight and a new log file will be created
			{ 'type': 'dateFile', 'filename': 'logging/logFile.log', 'pattern': '-yyyy-MM-dd', 'alwaysIncludePattern': 'false', 'category': 'dateLog'}
		]
	});

	// Create an instance of our logger and set the prefered logging type and level
	var logger = log4js.getLogger('dateLog');
	logger.setLevel('INFO');

	// Create the express server
	var server = express();

	// Configure the server to use our newly definedly logging system
	server.configure(function() {
		server.use(log4js.connectLogger(logger));
	});

	logger.info('Server started now');

//---------------------------------------------- Setting up routes for the server ---------------------------------------------

	server.get('/', function(req, res) {
		res.send('hello world');
	});

	server.listen(5000);
