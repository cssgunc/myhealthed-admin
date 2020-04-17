require('dotenv').config()
const app = require('./server');

const PORT = process.env.PORT || 4100;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));