/**
 * Created by pooja on 12/4/16.
 */

//
//exports.getConfigurations = function (req, res) {
//    var logger_config = {};
//    var data = req.body;
//    if(data !== ''){
//        return logger_config = {
//            filePath: req.body.filePath ,
//            fileName: req.body.fileName,
//            backUpCount: req.body.backUpCount,
//            backUpTime: {
//                backUpHour: req.body.time.backUpHour, //Only in 24 hours time
//                backUpMinute: req.body.time.backUpMinute,
//                backUpSecond: req.body.time.backUpSecond
//            }
//        }
//    }else{
//        logger_config =  {
//            filePath: '',
//                fileName: '', //Must not contain numeric value
//                backUpCount: '9999',
//                backUpTime: {
//                backUpHour: '20', //Only in 24 hours time
//                    backUpMinute: '37',
//                    backUpSecond: '50'
//            },
//            fileFormat: '',
//                folderName: ''
//        }
//    }
//};

/**
 * Configurations
 */

module.exports = {
    logger_config: {
        tempLogFilePath: '',
        filePath: '',
        fileName: '',
        backUpCount: '9999',
        backUpTime: {
            backUpHour: 13, //Only in 24 hours time
            backUpMinute: 11,
            backUpSecond: 50
        }
    }
};
