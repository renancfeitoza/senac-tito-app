const Professor = require('../model/Professor');

module.exports = {
    async store(req, res) {
        const { nome, email, senha, area, profile, admin } = req.body;

        const exibeRes = await Professor.create({
            nome,
            email,
            senha,
            area,
            profile,
            admin
        })

        res.status(200).json(exibeRes);
    },
    async index(req, res) {
        const exibeRes = await Professor.findAll();

        res.status(200).json(exibeRes);
    },
    async show(req, res) {
        const { id } = req.params;

        const exibeRes = await Professor.findOne({
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    },
    async update(req, res) {
        const { id } = req.params;
        const dados = req.body;

        const exibeRes = await Professor.update(dados, {
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    },
    async delete(req, res) {
        const { id } = req.params;

        const exibeRes = await Professor.destroy({
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    }
}