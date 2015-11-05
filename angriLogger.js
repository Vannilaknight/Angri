var logger = require('./lib/Console.js');

exports.register = function (server, options, next) {
    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};

exports.info = function (message){
    logger.info(message);
};

exports.log = function (message) {
    logger.log(message);
};

exports.warning = function (message) {
    logger.warning(message);
};

exports.error = function (title, message) {
    logger.error(title, message);
};

exports.routeHit = function (route){
    logger.server("Route hit at", route);
};

exports.server = function (serverUrl) {
    logger.server("SERVER", serverUrl);
};

exports.serverStart = function (serverUrl) {
    logger.server("Server started on", serverUrl);
};

exports.requestView = function(req){
    logger.requestView(req);
};