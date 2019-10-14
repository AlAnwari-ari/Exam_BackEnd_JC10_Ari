const express = require('express')
const { connectMovCatControllers } = require('../controllers')

const router = express.Router()

router.get('/getmovcat', connectMovCatControllers.getMoveCat)
router.get('/getmovcatbymovie', connectMovCatControllers.getMoveCatByMovie)
router.delete('/deletemovcat/:id', connectMovCatControllers.deleteMoveCat)
router.post('/addmovcat', connectMovCatControllers.addMoveCat)


module.exports = router