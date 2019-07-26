const { Router } = require('express')
const pool = require('../db')

const router = Router()

router.get('/', async (request, response, next) => {
  await pool.query('SELECT * FROM consumers', (err, res) => {
    if (err) return next(err)
    response.json(res.rows)
  })
})

router.post('/', (request, response, next) => {
  const { email, phone_number, city_state_zip, textalerts } = request.body
  pool.query(
    'INSERT INTO consumers (email, phone_number, city_state_zip, textalerts) VALUES ($1, $2, $3, $4)',
    [email, phone_number, city_state_zip, textalerts],
    (err, res) => {
      if (err) return next(err)
      response.redirect('/consumers')
    }
  )
})

module.exports = router
