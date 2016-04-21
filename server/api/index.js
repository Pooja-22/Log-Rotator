/**
 * Created by pooja on 13/4/16.
 */

'use strict';

var express = require('express');
var backUp = require('./backUp');

var router = express.Router();

router.get('/', backUp.displayFolders);
router.get('/:folder', backUp.displayFilesNames);
router.get('/:folder/:file', backUp.displayFileData);


module.exports = router;

