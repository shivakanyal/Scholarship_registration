const express = require('express');
const userContorller = require('../controllers/user')

const router = express.Router()

router.get('/',userContorller.getIndex);

router.post('/add-user',userContorller.addUser)

router.get('/rejected-students',userContorller.rejectedStudentsList)

router.get('/selected-students',userContorller.selectedStudentsList)

module.exports = router;
