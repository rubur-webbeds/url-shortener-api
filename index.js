const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const urlRoutes = require('./routes/url');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const CONNECTION_STRING = process.env.CONNECTION_STRING

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (err) => console.log(err));
mongoose.connection.once('open', () => console.log('Connected to database'));

app.use(express.json());
app.use('/api/url', urlRoutes);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
