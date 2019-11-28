const Status = require("../model/Status");

module.exports = {
    async store(req, res) {
        const { status } = req.body;

        const statusExibe = await Status.create({
            status,
        });
        return res.status(200).json(statusExibe);
    },

    async index(req, res) {
        const display = await Status.findAll();
        return res.status(200).json(display);
    },

    async show(req, res) {
        const { id } = req.params;

        const display = await Status.findOne({
            where: { id }
        });
        return res.status(200).json(display);
    },

    async update(req, res) {
        const dados = req.body;
        const { id } = req.params;

        const user = await Status.update(dados, {
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
                return res.send("Erro ao editar");
            });
        return user;
    },

    async delete(req, res) {
        const { id } = req.params;
        const deleted = await Status.destroy({
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