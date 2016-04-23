/**
 * Created by pooja on 8/4/16.
 */

'use strict';

var fs = require('fs-extra');
var config = require('./config');

var filePath = config.logger_config.filePath || '/home/pooja/Desktop/';
var dir = filePath + 'Logs/';

/**
 * saving logFile in the current dated folder inside logFile
 */

exports.backUp = function (date, tempFileName) {
    var num = 1;
    var month = date.getMonth() + 1;
    var folderName = date.getDate() + '-' + month + '-' + date.getFullYear() + '/';
    var fileName = config.logger_config.fileName || 'logFile';
    var file = dir + folderName + fileName + num;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        copy(file, tempFileName);
    } else {
        fs.readdir(dir + folderName, function (err, data) {
            if (data) {
                num = data.length + 1;
            }
            var file = dir + folderName + fileName + num;
            copy(file, tempFileName)
        });

    }
};

/**
 * copy temp file data to backUp file
 */

function copy(file, tempFileName) {
    fs.copy(tempFileName, file, function (err) {
        if (err) {
            console.log(err, "BackUp not completed");
        }
        else {
            console.log("BackUp Done");
            fs.unlinkSync(tempFileName);
        }
    });
}

/**
 * Display all the folders
 * @param req
 * @param res
 */

exports.displayFolders = function (req, res) {
    fs.readdir(dir, function (err, data) {
        if (data) {
            res.json(data);
        } else {
            console.log("Nothing")
        }
    });
};

/**
 * Display all files inside the particular folder
 * @param req
 * @param res
 */

exports.displayFilesNames = function (req, res) {
    var folderName = req.params.folder;
    fs.readdir(dir + folderName, function (err, data) {
        if (data) {
            data.sort(function (a, b) {
                return fs.statSync(dir + folderName + '/' + a).mtime.getTime() - fs.statSync(dir + folderName + '/' + b).mtime.getTime();
            });
            res.send(data);
        } else {
            res.send(err)
        }
    });
};

/**
 * Display particular file data
 * @param req
 * @param res
 */

exports.displayFileData = function (req, res) {
    var folderName = req.params.folder;
    var fileName = req.params.file;
    fs.readFile(dir + folderName + '/' + fileName, function (err, data) {
        if (data) {
            if (data.toString() != "") {
                var fileData = data.toString();
                res.send({data: fileData});
            } else {
                res.send({emptyFileMessage: 'This file is empty'});
            }
        } else {
            res.send(err);
        }
    })
};




