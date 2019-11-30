const Curso = require('../model/Curso');

module.exports = {
    async store(req, res) {
        const { nome, professor, status } = req.body;

        const exibeRes = await Curso.create({
            nome,
            professor,
            status
        })

        res.status(200).json(exibeRes);
    },
    async index(req, res) {
        const exibeRes = await Curso.findAll();

        res.status(200).json(exibeRes);
    },
    async show(req, res) {
        const { id } = req.params;

        const exibeRes = await Curso.findOne({
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    },
    async update(req, res) {
        const { id } = req.params;
        const dados = req.body;

        const exibeRes = await Curso.update(dados, {
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    },
    async delete(req, res) {
        const { id } = req.params;

        const exibeRes = await Curso.destroy({
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    }
}