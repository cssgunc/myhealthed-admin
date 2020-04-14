require('dotenv').config({path: __dirname + '/.env'})
const app = require('./server');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));