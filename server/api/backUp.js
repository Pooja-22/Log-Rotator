/**
 * Created by pooja on 8/4/16.
 */


var fs = require('fs-extra');
var config = require('./config');

var num = 0;

/**
 * saving logFile in the current dated folder inside logFile
 */

exports.backUp = function (date) {
    num++;
    var month = date.getMonth() + 1;
    var folderName = date.getDate() + '-' + month + '-' + date.getFullYear() + '/';
    var fileName = config.logger_config.fileName || 'logFile';
    var filePath = config.logger_config.filePath || '/home/pooja/Desktop/';
    var file = filePath + folderName + fileName + num;
    if (fs.existsSync('logFile')) {
        fs.copy('logFile', file, function (err) {
            if (err) {
                console.log(err, "BackUp not completed");
            }
            else {
                console.log("BackUp Done");
                fs.unlinkSync('logFile');
                console.log('@@@@@@@@@@@@2')

            }
        });
    }
};

