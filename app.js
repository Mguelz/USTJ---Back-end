const express = require("express");
const jsonx = require("body-parser");
const app = express();
app.use(jsonx())

app.get('/', (recebi, enviei) => {
    enviei.send('ola mundo');
});

// obter
app.get('/minhasala', (recebi, enviei) => {
    enviei.send('Minha sala é I10H');
});

// conexão de host
app.listen(3000, () => {
    console.log("esta aplicação subiu hhhh");
});

app.post('/minhasala', (recebi, enviei) => {
    console.log(nome);
    // ...
    enviei.send('Minha sala é I10H - POST');
});

app.get('/minhasala/ :maria', (recebi, enviei) => {
    console.log(recebi.params.maria);
    console.log(recebi.body);
    enviei.send('Minha sala é I10H');
});






// chat gpt
app.post('/minhasala', (recebi, enviei) => {
    const { nome } = recebi.body; // Use desestruturação para obter o nome do corpo da solicitação
    // Faça o que precisa ser feito com o nome...
    res.send('Minha sala é I10H - POST');
});

app.put('/minhasala/:maria', (recebi, enviei) => {
    const { maria } = recebi.params;
    // Faça o que precisa ser feito com o parâmetro maria (usando PUT)
    res.send(`Atualizando informações da sala para: ${maria}`);
});

