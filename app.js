// import express from "express";
const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const OpenApiValidator = require('express-openapi-validator');
const YAML = require('yamljs');
const path = require('path');


const app = express();
const apiSpec = YAML.load(path.resolve(__dirname, './api/api.yaml'));

app.use(express.json());

// Validate requests against the OpenAPI schema
app.use(
  OpenApiValidator.middleware({
    apiSpec,
    validateRequests: true,
    // validateResponses: true,
  })
);

// Define routes
const queryCtrl = require('./controllers/queryCtrl');

app.post('/search', queryCtrl.search);
app.get('/analyse', queryCtrl.analyse);

app.use('*', (req, res)=>{
    return res.status(404).json({
        status: 'error',
        message: "Route not found"
    })
})

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Application starts on port ${PORT}`)
})
module.exports = app;
