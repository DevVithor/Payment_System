import express from "express";
import 'express-async-errors'
import routes from "./src/routes";
import { errorMiddleware } from "./src/core/middleware/error";

const app = express();
const port = 3333

app.use(express.json())
app.use(routes)

app.use(errorMiddleware)
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})