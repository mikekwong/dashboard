const { Router } = require('express')
const consumers = require('./consumers')

const router = Router()

router.use('/consumers', consumers)

module.exports = router
