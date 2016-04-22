/**
 * Created by pooja on 8/4/16.
 */

'use strict';
var fs = require('fs-extra');
var backUp = require('./backUp');
require('./objectProperties');
var config = require('./config');
exports.config = config;

var date = new Date();

/**
 * Simple Log
 * @param data
 */

exports.log = function (data) {
    saveLogs('Log', data);
};

/**
 * Any Warning
 * @param data
 */

exports.warn = function (data) {
    saveLogs('Warning', data);
};

/**
 * Error
 * @param data
 */

exports.error = function (data) {
    saveLogs('Error', data);
};

/**
 * Info
 * @param data
 */

exports.info = function (data) {
    saveLogs('Info', data);
};

/**
 * save the data to local file(logFile)
 * @param data
 */

function saveLogs(type, data) {

    var date = new Date();
    var filename = __fileName;
    var line = __line;
    var logData = type + "---" + 'FileName : ' + filename + '   ' + ' #Line : ' + line + '   ' + ' At : ' + date + '\nLoggedData : ' + data + '\n\n';
    fs.appendFile('logFile', logData, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('log is saved to a local file\n' + type + ':', data);
        }
    });
}

(function () {

    var hour, minutes, seconds, count = 0;
    var timeDifference = {
        hourDifference: 24 / (config.logger_config.backUpCount || 2),
        minuteDifference: 0,
        secondDifference: 0
    };
    hour = config.logger_config.backUpTime.backUpHour || 0;
    minutes = config.logger_config.backUpTime.backUpMinute || 0;
    seconds = config.logger_config.backUpTime.backUpSecond || 0;

    /**
     * Check if Decimal part exists or not
     */

    var tempHour = timeDifference.hourDifference.toString();

    if (/\d+(\.\d+)?/.test(tempHour)) {

        var hourDecimalPart = timeDifference.hourDifference - parseInt(timeDifference.hourDifference, 10);
        timeDifference.minuteDifference = hourDecimalPart * 60;
        var tempMinute = timeDifference.minuteDifference.toString();

        if (/\d+(\.\d+)?/.test(tempMinute)) {
            var minuteDecimalPart = timeDifference.minuteDifference - parseInt(timeDifference.minuteDifference, 10);
            timeDifference.secondDifference = minuteDecimalPart * 60;
        }

        timeDifference.hourDifference = parseInt(timeDifference.hourDifference, 10);
        timeDifference.minuteDifference = parseInt(timeDifference.minuteDifference, 10);
        timeDifference.secondDifference = parseInt(timeDifference.secondDifference, 10);
    }

    var callBackUpSchedule = setInterval(backUpSchedule, 1000);

    /**
     * take backup of the logFile at  defined time
     */

    function backUpSchedule() {

        var date = new Date();

        /**
         * Check if its back up time
         */

        console.log(date.getHours(), hour, date.getMinutes(), minutes, date.getSeconds(), seconds)

        if (date.getHours() == hour && date.getMinutes() == minutes && date.getSeconds() == seconds) {
            if (count != config.logger_config.backUpCount) {
                if (fs.existsSync('logFile')) {
                    backUp.backUp(date);
                }
                count++;
                hour = Number(hour) + timeDifference.hourDifference;
                minutes = Number(minutes) + timeDifference.minuteDifference;
                if (minutes == 60 || 0 || minutes > 60) {
                    hour = Number(hour) + 1;
                    minutes = Number(minutes) - 60;
                }
                seconds = Number(seconds) + timeDifference.secondDifference;
                if (seconds == 60 || 0 || seconds > 60) {
                    minutes = Number(minutes) + 1;
                    seconds = Number(seconds) - 60;
                }
            }
        }

        /**
         * Resetting the values once a count completes for the day
         */

        if (count == config.logger_config.backUpCount) {
            count = 0;
            hour = config.logger_config.backUpTime.backUpHour || 0;
            minutes = config.logger_config.backUpTime.backUpMinute || 0;
            seconds = config.logger_config.backUpTime.backUpSecond || 0;
        }
    }
}());




