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
  const {
    email,
    phone_number,
    city_state_zip,
    textalerts,
    coupon_selected,
  } = request.body
  pool.query(
    'INSERT INTO consumers (email, phone_number, city_state_zip, textalerts, coupon_selected) VALUES ($1, $2, $3, $4, $5)',
    [email, phone_number, city_state_zip, textalerts, coupon_selected],
    (err, res) => {
      if (err) return next(err)
      response.redirect('/consumers')
    }
  )
})

module.exports = router
