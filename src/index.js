const express = require("express");
const taskRoutes = require('./routes/index');
const cors = require('cors');
const origin = "http://localhost:3001"

const app = express();

// CORS
app.use(cors({
    origin: origin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// MIDDLEWARE
app.use(express.json());
app.use('/', taskRoutes);

app.listen(3001);
console.log("Server working");