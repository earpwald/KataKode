var fileSystem = require('fs');

fileSystem.stat('./logging', function(error) {
	if (error) fileSystem.mkdir('./logging');
});
