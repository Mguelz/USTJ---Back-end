const { v4: uuidv4 } = require("uuid"); // utiliza as dependencias atraves do npm i
const Perfil = require("./perfil.entity"); // o .js é opcional
const PerfilDTO = require("./perfil.dto");

const perfis = [{
    "user_id": "1",
    "adress_id": "1",
    "profile_endereco": "Rua Taquari",
    "profile_cidade": "São Paulo",
    "country_id": "01"
},
{
    "user_id": "2",
    "adress_id": "2",
    "profile_endereco": "Rua Manoel",
    "profile_cidade": "Rio de Janeiro",
    "country_id": "01"
},
{
    "user_id": "3",
    "adress_id": "3",
    "profile_endereco": "Rua Dom Pedro",
    "profile_cidade": "Minas Gerais",
    "country_id": "01"
},
]

class PerfilService {
    findAll() {
        //                          / novo objeto com perfil de parametro
        return perfis.map((perfil) => new PerfilDTO(perfil));
    }
    findAllEnd(user_id) {
        return perfis.filter((perfil) => (perfil.user_id));

    }
    // findAllEnd(user_id){
    //     return perfis.filter((perfil) => (
    //     console.log("user_id" = perfil.user_id + " " + user_id);
    //     return perfil.user_id
    //         ));

    // }
    findOneEnd(user_id, adress_id) {
        return perfis.find((perfil) => perfil.user_id === user_id && perfil.adress_id === adress_id);
    }

    create(user_id, adress_id, profile_endereco, profile_cidade, country_id) {
        adress_id = uuidv4();
        const novoPerfil = new Perfil();
        user_id,
            adress_id,
            profile_endereco,
            profile_cidade,
            country_id
        perfis.push(novoPerfil);
        return novoPerfil;
    }
}

module.exports = PerfilService;