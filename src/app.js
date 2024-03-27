const express = require('express');
const cors = require('cors')
const { StatusCodes } = require('http-status-codes')

const { ApiError } = require('./utils/base.error')

const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

app.get('/api/status', (req, res) => res.status(200).json({ message: "Server is live" }));

app.use((req, res, next) => {
    next(new ApiError(StatusCodes.NOT_FOUND, "Not found"));
})

app.use(errorHandler);

module.exports = app;