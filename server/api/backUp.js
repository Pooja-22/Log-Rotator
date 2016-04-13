/**
 * Created by pooja on 8/4/16.
 */

'use strict';

var fs = require('fs-extra');
var config = require('./config');

var num = 1;

/**
 * saving logFile in the current dated folder inside logFile
 */

exports.backUp = function (date) {
    var month = date.getMonth() + 1;
    var folderName = date.getDate() + '-' + month + '-' + date.getFullYear() + '/';
    var fileName = config.logger_config.fileName || 'logFile';
    var filePath = config.logger_config.filePath || '/home/pooja/Desktop/';
    var file = filePath + folderName + fileName + num;

    fs.copy('logFile', file, function (err) {
        if (err) {
            console.log(err, "BackUp not completed");
        }
        else {
            num++;
            console.log("BackUp Done");
            fs.unlinkSync('logFile');
        }
    });
};

/**
 * Get the data from the backed up files
 */

exports.displayFilesName = function (req, res) {
    fs.readdir('/home/pooja/Desktop/Untitled Folder/', function (err, data) {
        if (data) {
            res.json(data);
        } else {
            console.log(err);
        }
    });
};

exports.displayFileData = function (req, res) {
    var fileName = req.params.file;
    fs.readFile('/home/pooja/Desktop/Untitled Folder/' + fileName, 'UTF-8', function (err, data) {
        if (data) {
            res.json(data);
        } else {
            console.log(err);
        }
    })
};


