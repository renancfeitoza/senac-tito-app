const Profile = require("../model/Profile");

module.exports = {
    async store(req, res) {
        const { nameProfile } = req.body;

        const profile = await Profile.create({
            nameProfile,
        });
        return res.status(200).json(profile);
    },

    async index(req, res) {
        const display = await Profile.findAll();
        return res.status(200).json(display);
    },

    async show(req, res) {
        const { id } = req.params;

        const display = await Profile.findOne({
            where: { id }
        });
        return res.status(200).json(display);
    },

    async update(req, res) {
        const dados = req.body;
        const { id } = req.params;

        const user = await Profile.update(dados, {
            where: { id: id }
        })
            .then(dados => {
                console.log(dados);
                if (dados == 1) {
                    return res.status(200).send("Dados atualizados");
                } else if (dados == 0) {
                    console.log(dados);
                    return res.send("Erro ao editar");
                }
            })
            .cath(err => {
                console.log(err);
                return res.status(400).send("Erro ao editar");
            });
        return user;
    },

    async delete(req, res) {
        const { id } = req.params;
        const deleted = await Profile.destroy({
            where: { id: id }
        }).then(id => {
            console.log(id);
            if (id == 0) {
                return res.send("Usuario não existe");
            } else if (id == 1) {
                return res.status(200).send("Usuario deletado com sucesso");
            }
        });
        return deleted;
    }
};