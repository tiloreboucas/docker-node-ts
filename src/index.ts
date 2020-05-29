import * as express from "express";

const PORT = 3000;

const app = express();

console.log("app.set", app.set);
app.set("port", PORT);

console.log("app.get", app.get);
app.get("/", (req: express.Request, res: express.Response) => {
    res.json({
        message: "Docker He's Alive!",
    });
});

console.log("app.listen", app.listen);
app.listen(PORT, () => {
    console.log(`Aplicação escutando na porta ${PORT}`);
});
