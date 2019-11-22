const Genero = require("../model/Genero");

module.exports = {
    async store(req, res) {
        const { nome } = req.body;

        const genero = await Genero.create({
            nome
        })

        res.status(200).json(genero);
    },
    async index(req, res) {
        const display = await Genero.findAll();
        return res.status(200).json(display);
    },
    async show(req, res) {
        const { id } = req.params;

        const display = await Genero.findOne({
            where: { id }
        });
        return res.status(200).json(display);
    },
    async update(req, res) {
        const dados = req.body;
        const { id } = req.params;

        const user = await Genero.update(dados, {
            where: { id: id }
        })
        return res.status(200).json(user);
    },
    async delete(req, res) {
        const { id } = req.params;
        const deletar = await Genero.destroy({
            where: { id: id }
        })
        return res.status(200).json(deletar);
    }
};