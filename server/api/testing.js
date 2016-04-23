/**
 * Created by pooja on 23/4/16.
 */

var logger = require('./logger');

function test() {
    logger.log('Testing')
}

setInterval(test, 2000);