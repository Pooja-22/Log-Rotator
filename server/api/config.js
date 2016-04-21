/**
 * Created by pooja on 12/4/16.
 */


module.exports = {
    logger_config: {
        filePath: '',
        fileName: '', //Must not contain numeric value
        backUpCount: '9999',
        backUpTime: {
            backUpHour: '15', //Only in 24 hours time
            backUpMinute: '35',
            backUpSecond: '20'
        },
        fileFormat: '',
        folderName: ''
    }
};
