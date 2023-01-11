const Api= require('../controllers/api')
const express= require('express')
const router= express.Router();
const { upload } = require('../middleware/upload')
const auth= require('../middleware/auth')


const uploadPostData = (req, res, next) => {
    upload.fields([{ name: 'image', maxCount: 1 }, { name: 'file', maxCount: 1 }])(req, res, (err) => {
         req.body.image = req.files.image;
         req.body.file = req.files.file;
         next()
    })
}

router.post('/',auth,uploadPostData,Api.createData);
router.get('/',auth,Api.getAllNovels);
router.get('/search',auth,Api.searchBook)
router.get('/:id',auth,Api.getNovelById);
router.put('/:id',auth,uploadPostData,Api.updateNovelById);
router.delete('/:id',auth, Api.deleteNovelById);
router.post('/download/:id',auth,Api.downloadPDF);


module.exports=router;
