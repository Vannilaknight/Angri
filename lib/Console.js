var Color = require('colors');

var time = Date.now || function () {
        return +new Date;
    };

var date = new Date(time());
var datevalues = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()),
    date.getMinutes(),
    date.getSeconds(),
    (date.getHours() > 12 ? 'PM' : 'AM')
];

var timestamp = "[" + datevalues[1] + "/" + datevalues[2] + "/" + datevalues[0] + " " + datevalues[3] + ":" + datevalues[4] + ":" + datevalues[5] + " " + datevalues[6] + "]";


exports.log = function (message) {
    console.log(Color.gray(timestamp + " ") + message);
}

exports.info = function (message) {
    console.log(Color.gray(timestamp) + message);
}

exports.error = function (title, message) {
    console.log(Color.gray(timestamp) + Color.red("[" + title + "] ") + message);
}

exports.server = function (title, message) {
    console.log(Color.gray(timestamp) + Color.magenta("[" + title + "]: ") + message);
}

