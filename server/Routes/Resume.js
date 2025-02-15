const express = require("express")
const router = express.Router()
const { addResume, deleteResume, getAllResumes } = require('../Controllers/Resume')
const {auth} = require('../Middlewares/auth')

router.post('/addresume',auth,addResume);
router.post('/deleteresume',auth,deleteResume);
router.post('/getallresume',auth,getAllResumes);

module.exports = router;