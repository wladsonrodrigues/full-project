import app from "./src/app.js";


const port = process.env.port || 3300;

app.listen(port, () => {
    // console.log(`Servidor rodando na porta ${port}`); Não precisa do port no momento
    console.log(`Servidor rodando na porta`);
} );