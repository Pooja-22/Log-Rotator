/**
 * Created by pooja on 8/4/16.
 */

'use strict';

var fs = require('fs-extra');
var config = require('./config');

var num = 1;
var filePath = config.logger_config.filePath || '/home/pooja/Desktop/';


/**
 * saving logFile in the current dated folder inside logFile
 */

exports.backUp = function (date) {
    var month = date.getMonth() + 1;
    var folderName = date.getDate() + '-' + month + '-' + date.getFullYear() + '/';
    var fileName = config.logger_config.fileName || 'logFile';
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
 * Display all the folders
 * @param req
 * @param res
 */

exports.displayFolders = function (req, res) {
    fs.readdir(filePath, function (err, data) {
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
    fs.readdir(filePath + folderName, function (err, data) {
        if (data) {
            data.sort(function (a, b) {
                console.log(a, "           ", b);
                return fs.statSync(filePath + folderName + '/' + a).mtime.getTime() - fs.statSync(filePath + folderName + '/' + b).mtime.getTime();
            });
            console.log(data);
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
    fs.readFile(filePath + folderName + '/' + fileName, function (err, data) {
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


