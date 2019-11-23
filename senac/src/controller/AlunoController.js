const Aluno = require("../model/Aluno");

module.exports = {
    async store(req, res) {
        const { nome, email ,dt_nasc, turma, profile} = req.body;

        const aluno = await Aluno.create({
            nome, 
            email, 
            dt_nasc, 
            turma, 
            profile
        })

        res.status(200).json(aluno);
    },
    async index(req, res) {
        const display = await Aluno.findAll();
        return res.status(200).json(display);
    },
    async show(req, res) {
        const { id } = req.params;

        const display = await Aluno.findOne({
            where: { id }
        });
        return res.status(200).json(display);
    },
    async update(req, res) {
        const dados = req.body;
        const { id } = req.params;

        const user = await Aluno.update(dados, {
            where: { id: id }
        })
        return res.status(200).json(user);
    },
    async delete(req, res) {
        const { id } = req.params;
        const deletar = await Aluno.destroy({
            where: { id: id }
        })
        return res.status(200).json(deletar);
    }
};