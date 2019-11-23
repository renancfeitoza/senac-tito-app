const Categoria = require("../model/Categoria");

module.exports = {
    async store(req, res) {
        const { nome, genero } = req.body;

        const categoria = await Categoria.create({
            nome,
            genero
        })

        res.status(200).json(categoria);
    },
    async index(req, res) {
        const display = await Categoria.findAll();
        return res.status(200).json(display);
    },
    async show(req, res) {
        const { id } = req.params;

        const display = await Categoria.findOne({
            where: { id }
        });
        return res.status(200).json(display);
    },
    async update(req, res) {
        const dados = req.body;
        const { id } = req.params;

        const user = await Categoria.update(dados, {
            where: { id: id }
        })
        return res.status(200).json(user);
    },
    async delete(req, res) {
        const { id } = req.params;
        const deletar = await Categoria.destroy({
            where: { id: id }
        })
        return res.status(200).json(deletar);
    }
};