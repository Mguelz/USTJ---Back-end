const fs = require('fs');

const posts = [];

const crud = {
    posts: [],
    read(){
        return crud.posts = JSON.parse(fs.readFileSync('./db.json', {encoding: 'utf-8'}));
    },
    
    create({ content }) {
        const id = crud.posts.length + 1;
        const dados = { id, content }

        crud.read();
        crud.posts.push(dados);
        fs.writeFileSync( './db.json', JSON.stringify(crud.posts), {encoding:  'utf-8'});
        
    }
}

//create
crud.create({content: `Miguel`});
//crud.create({ id: 2, content: "Marta"});
//crud.create({ id: 3, content: "Edson"});
//crud.create({ id: 4, content: "José"});
//crud.create({ id: 5, content: "Caroma"});
//crud.create({ id: 6, content: "Clarinha"});
//crud.create({ id: 7, content: "Loki"});
//crud.create({ id: 8, content: "Tico"});

//read
console.log('Leitura do arquivo',crud.read());


