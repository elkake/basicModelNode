import express from 'express'

const app = express()

app.get('/', async (req, res) => {
  try {
   
    res.status(200).send('ok')
  } catch (error) {
    console.log({ error })
    return res.status(500)
  }
})

app.listen(3000)
console.log('server on port 3000')

