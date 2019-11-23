const Professor = require("../model/Professor");

module.exports = {
    async store(req, res) {
        const { nome, email ,dt_nasc, turma, profile} = req.body;

        const professor = await Professor.create({
            nome, 
            email, 
            dt_nasc, 
            turma, 
            profile
        })

        res.status(200).json(professor);
    },
    async index(req, res) {
        const display = await Professor.findAll();
        return res.status(200).json(display);
    },
    async show(req, res) {
        const { id } = req.params;

        const display = await Professor.findOne({
            where: { id }
        });
        return res.status(200).json(display);
    },
    async update(req, res) {
        const dados = req.body;
        const { id } = req.params;

        const user = await Professor.update(dados, {
            where: { id: id }
        })
        return res.status(200).json(user);
    },
    async delete(req, res) {
        const { id } = req.params;
        const deletar = await Professor.destroy({
            where: { id: id }
        })
        return res.status(200).json(deletar);
    }
};