import * as express from "express";

const PORT = 3000;

const app = express();

app.set("port", PORT);

app.get("/", (req: express.Request, res: express.Response) => {
    res.json({
        message: "Docker He's Alive!",
    });
});

app.listen(PORT, () => {
    console.log(`Aplicação escutando na porta ${PORT}`);
});
