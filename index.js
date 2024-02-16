const app = require("./src/server.js")
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Servidor activo en el http://localhost:${PORT}`)
});