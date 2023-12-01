import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
const express = require('express');
const app = express();
const PORT = 8080;
require('dotenv').config();
const connectionString = process.env.CONNECTION_STRING;
const pgp = require("pg-promise")()
const db = pgp(connectionString);

app.listen(PORT, ()=>{
  console.log("Сервер запущен");
})*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
