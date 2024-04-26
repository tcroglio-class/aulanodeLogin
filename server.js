// Importa o Express
const express = require('express');

// Cria uma aplicação Express
const app = express();

// Middleware para analisar JSON
app.use(express.json());

// Middleware para dados de formulário
app.use(express.urlencoded({ extended: true }));

// Servindo arquivos estáticos
app.use(express.static('public'));

// define a porta do servidor
const PORT = 3000;

// o servidor começa a ouvir as requisições na porta especificada 
app.listen(PORT, () => {
    console.log(`Server rodando no http://localhost:${PORT}`);
});



/////////////////////////////////////////////////////////




// Rota de login básica (GET)
app.get('/login', (req, res) => {
    res.sendFile('index.html', { root: './public' });
});

// Simples autenticação de login (POST)
app.post('/login', (req, res) => {
    const { username, password } = req.body; // Aqui você implementará a lógica de validação

    if (validador(username, password)) {
        res.sendFile('dashboard.html', { root: './public' });
    } else {
        res.send("Falha no Login!");
    }
});

function validador(nome, senha) {

    let yesOrNot

    return yesOrNot;
}