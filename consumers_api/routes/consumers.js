const { Router } = require('express')
const pool = require('../db')

const router = Router()

router.get('/', async (request, response, next) => {
  await pool.query('SELECT * FROM consumers ORDER BY id ASC', (err, res) => {
    if (err) return next(err)
    response.json(res.rows)
  })
})

module.exports = router
