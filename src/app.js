const express = require('express')
const path = require('path')  
const bodyParser = require('body-parser')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// app.use('/', require('./routes'))

// app.use((error, req, res, next) => {
//   res.status(500).render('./errors/error', {error})
// })

// using google token to see if user is logged in or not

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.use((req, res) => {
  res.send('404 NOT FOUND')
})

const port = process.env.PORT || 3002
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})