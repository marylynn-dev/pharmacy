const express = require('express')
const { create, edit, get, getOne, del } = require('../controllers/medication')

const router = express.Router()

router.post('/', create)
router.put('/:id', edit)
router.delete('/:id', del)
router.get('/:id', getOne)

module.exports = router