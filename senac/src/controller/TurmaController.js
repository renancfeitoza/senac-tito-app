const Turma = require("../model/Turma");

module.exports = {
    async store(req, res) {
        const { nome, dt_inicio, dt_termino, documentos_necessarios, curso} = req.body;

        const turma = await Turma.create({
            nome, 
            dt_inicio, 
            dt_termino, 
            documentos_necessarios, 
            curso
        })

        res.status(200).json(turma);
    },
    async index(req, res) {
        const display = await Turma.findAll();
        return res.status(200).json(display);
    },
    async show(req, res) {
        const { id } = req.params;

        const display = await Turma.findOne({
            where: { id }
        });
        return res.status(200).json(display);
    },
    async update(req, res) {
        const dados = req.body;
        const { id } = req.params;

        const user = await Turma.update(dados, {
            where: { id: id }
        })
        return res.status(200).json(user);
    },
    async delete(req, res) {
        const { id } = req.params;
        const deletar = await Turma.destroy({
            where: { id: id }
        })
        return res.status(200).json(deletar);
    }
};