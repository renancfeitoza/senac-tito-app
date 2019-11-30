const Aluno = require('../model/Aluno');

module.exports = {
    async store(req, res) {
        const { nome, email, senha } = req.body;

        const exibeRes = await Aluno.create({
            nome,
            email,
            senha
        })

        res.status(200).json(exibeRes);
    },
    async index(req, res) {
        const exibeRes = await Aluno.findAll();

        res.status(200).json(exibeRes);
    },
    async show(req, res) {
        const { id } = req.params;

        const exibeRes = await Aluno.findOne({
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    },
    async update(req, res) {
        const { id } = req.params;
        const dados = req.body;

        const exibeRes = await Aluno.update(dados, {
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    },
    async delete(req, res) {
        const { id } = req.params;

        const exibeRes = await Aluno.destroy({
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    }
}