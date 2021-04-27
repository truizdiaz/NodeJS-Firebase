const express = require("express");

const app = express();
app.use(express.json());
app.use('/api/usuarios', require('./routes/usuario'));

app.listen(4000, () => console.log("The server is running at PORT 4000"))