const express = require('express')
const pg = require('pg')

const app = express()
const client = new pg.Client('postgres://localhost/academy')
client.connect()

app.get('/', async (req, res, next) => {
  const students = await client.query('SELECT * FROM students')
  res.send(students.rows)
})

app.listen(3000, () => {
  console.log('listening on port 3000...')
})
