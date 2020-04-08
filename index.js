const express = require('express');
const urlRoutes = require('./routes/url');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/url', urlRoutes);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));