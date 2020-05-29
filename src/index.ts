import * as express from "express";

const PORT = 3000; // Porta do nosso servidor web

const app = express(); // Criamos uma instância do express

app.set("port", process.env.PORT || PORT);

console.log("app.set", app.set);

// Adicionamos uma rota de teste
app.get("/", (req: express.Request, res: express.Response) => {
    console.log("declara rota");

    res.json({
        message: "Docker He's Alive!",
    });
});

console.log("app.get", app.get);

// Iniciamos o nosso servidor web
app.listen(PORT, () => {
    console.log(`Aplicação escutando na porta ${PORT}`);
});

console.log("app.listen", app.listen);
