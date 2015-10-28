var logger = require('./lib/Console.js');

exports.register = function (server, options, next) {
    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};

exports.info = function (message){
    logger.info(message);
}

exports.log = function (message) {
    logger.log(message);
};

exports.error = function (title, message) {
    logger.error(title, message);
}

exports.routeHit = function (route){
    logger.server("Route hit at", route);
}

exports.serverStart = function (serverUrl) {
    logger.server("Server started on", serverUrl);
}