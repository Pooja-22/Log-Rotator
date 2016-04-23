/**
 * Created by pooja on 13/4/16.
 */

'use strict';

var express = require('express');
var backUp = require('./backUp');
var config = require('./config');

var router = express.Router();

router.get('/', backUp.displayFolders); //display all folders
router.get('/:folder', backUp.displayFilesNames); // display all files inside a particular folder
router.get('/:folder/:file', backUp.displayFileData); //display file data

module.exports = router;

