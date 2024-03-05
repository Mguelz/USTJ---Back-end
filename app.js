const express = require("express");
const jsonx = require("body-parser");
const app = express();
app.use(jsonx())

app.get('/', (recebi, enviei) => {
    enviei.send('ola mundo');
});

app.get('/minhasala', (recebi, enviei) => {
    enviei.send('Minha sala é I10H');
});

app.listen(3000, () => {
    console.log("esta aplicação subiu hhhh");
});

app.post('/minhasala', (recebi, enviei) => {
    //const.log(nome);
    // ...
    enviei.send('Minha sala é I10H - POST');
});

app.get('/minhasala/ :maria', (recebi, enviei) => {
    console.log(recebi.params.maria);
    console.log(recebi.body);
    enviei.send('Minha sala é I10H');
});

