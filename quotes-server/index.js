const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express();

const SELECT_ALL_QUOTES_QUERY = 'SELECT * FROM quotes';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'quotes_db'
});

connection.connect(err => {
  return err;
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('go to quotes to see quotes')
});

app.get('/quotes', (req, res) => {
  connection.query(SELECT_ALL_QUOTES_QUERY, (err, results) => {
    if (err) {
      return err;
    }
    else {
      return res.json({
        data: results
      })
    }
  })
})

app.listen(4000, () => {
  console.log('Quotes Server Listening on Port 4000')
})