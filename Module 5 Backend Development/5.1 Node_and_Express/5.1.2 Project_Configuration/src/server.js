const { PORT = 5000 } = process.env
const app = require("./app");

app.listen(PORT, listener => console.log(`Listening on Port ${PORT}`))