const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    const dat = axios.get('https://uyhmqcetje.execute-api.us-east-2.amazonaws.com/default/helloworld')
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));