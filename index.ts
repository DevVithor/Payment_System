import express, { NextFunction, Request, Response } from "express";
import routes from "./src/routes";


const app = express();
const port = 3333

app.use(express.json())
app.use(routes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        return res.status(500).json({ message: "Error: " + error.message });
    }
    next();
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})