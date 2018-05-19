const express = require('express')
const path = require('path')  
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
  res.send('index.html')
})

app.get('/test', (req, res, next) => {
  request('https://raw.githubusercontent.com/aaronev/apple.com-replica/master/index.html', (err, resp, bod) => {
    res.send(bod)
  })
})

app.use((req, res) => {
  res.send('404 NOT FOUND')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})

