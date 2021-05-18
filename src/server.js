const express = require('express');
const app = express()
const API = {
  Bisection: {
    fx: 'x^2+4',
    xl: '50',
    xr: '20'
  },
  False_position:{
    fx: '10',
    xl: '10',
    xr: '10'
  },
  Newton_raphson:{
    fx: '10',
    x0: '10'
  },
  Onepoint:{
    fx: '10',
    x0: '10'
  },
  Secant:{
    fx: '10',
    x0: '10',
    x1: '10'
  }
}


app.get('/Bisection', (req, res) => {
  // const { params } = req
  res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ Bisection: API.Bisection })
})

app.get('/False_position', (req, res) => {
  // const { params } = req
  res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ False_position: API.False_position })
})

app.get('/Newton_raphson', (req, res) => {
  // const { params } = req
  res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ Newton_raphson: API.Newton_raphson })
})

app.get('/Onepoint', (req, res) => {
  // const { params } = req
  res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ Onepoint: API.Onepoint })
})

app.get('/Secant', (req, res) => {
  // const { params } = req
  res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ Secant: API.Secant })
})


app.listen(3001, () => {
  console.log('Application is running on port 9000')
})