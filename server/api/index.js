/**
 * Created by pooja on 13/4/16.
 */

'use strict';

var express = require('express');
var backUp = require('./backUp');

var router = express.Router();

router.get('/', backUp.displayFilesName);
router.get('/:file', backUp.displayFileData);



module.exports = router;

