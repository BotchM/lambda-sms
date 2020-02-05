const express = require('express')
const axios = require('axios')
const redirectUri = '' // This is a demo url change this by your real API url
const app = express()

app.get('/message/redirect', (req, res) => {
  axios({
    method: 'post',
    url: `https://f1zapvl9fk.execute-api.us-west-2.amazonaws.com/dev/api/sendMessage`,
    headers: { 'content-type': 'application/json' },
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error);
  })
})

app.listen(3000)
