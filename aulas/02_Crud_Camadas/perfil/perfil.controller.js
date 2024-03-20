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
        const user_id = req.parms.user_id;
        console.log("parametro " + req.params + " user id " + user_id);
        const perfils = perfilService.findAllEnd(user_id);
        res.json(perfils);
    }
}

module.exports = PerfilController;