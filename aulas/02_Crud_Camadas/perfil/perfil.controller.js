const PerfilService = require('./perfil.service');
const perfilService = new PerfilService();

// metodos crud
class PerfilController {
    // http - requisição e resposta
    getAllPerfil(req, res) {
        const perfis = perfilService.findAll();
        res.json(perfis);
    }
    getAllPerfilEnd(req, res) {
        const user_id = req.params.user_id;
        // console.log("parametro " + req.params + " user id " + user_id);
        const perfils = perfilService.findAllEnd(user_id);
        res.json(perfils);
    }
    getOneEnd(req, res) {
        const (user_id, adress_id) = req.params;
        res.json(perfilService.findOneEnd(user_id, adress_id));
    }
    createPerfil(req, res) {
        const perfil = perfilService.create
            (user_id,
                adress_id,
                profile_endereco,
                profile_cidade,
                country_id)
    }
    res.json(perfil);
}

module.exports = PerfilController;