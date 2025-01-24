const express= require('express')

const router= express.Router()

const admincontroller=require('../controllers/admin/Stays')

const { upload, convertImageToBase64 } = require('../middleware/images');


router.post('/addhotelsinfo', upload,convertImageToBase64,admincontroller.addhotelDetail)

router.get('/gethotels',admincontroller.fetchdata)

router.post('/editdata',upload,convertImageToBase64,admincontroller.editData)

router.delete('/deleteData/:id',admincontroller.deleteData)

module.exports=router;