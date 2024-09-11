const express = require('express')
const app = express()
const port = 8000
var cors = require('cors')
const connectToMongo = require('./db');
connectToMongo();

app.use(express.json());
app.use(cors())

app.use('/api/forminput', require('./routes/forminput'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})