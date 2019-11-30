const Curso_aluno = require('../model/Curso_Aluno');

module.exports = {
    async store(req, res) {
        const { curso, aluno } = req.body;

        const uniqueKey = `${curso}${aluno}`;
        console.log(uniqueKey)

        const exibeRes = await Curso_aluno.create({
            curso,
            aluno,
            unique: uniqueKey
        })

        res.status(200).json(exibeRes);
    },
    async index(req, res) {
        const exibeRes = await Curso_aluno.findAll();

        res.status(200).json(exibeRes);
    },
    async show(req, res) {
        const { id } = req.params;

        const exibeRes = await Curso_aluno.findOne({
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    },
    async update(req, res) {
        const { id } = req.params;
        const dados = req.body;

        const exibeRes = await Curso_aluno.update(dados, {
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    },
    async delete(req, res) {
        const { id } = req.params;

        const exibeRes = await Curso_aluno.destroy({
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    }
}