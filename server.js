// server.js
const app = require('./app');

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
