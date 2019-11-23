const Curso = require("../model/Curso");

module.exports = {
    async store(req, res) {
        const { nome, total_vaga, total_bolsas,  valor, carga_horaria, descricao, pre_requisito, metodo, mercado_trabalho, programa, certificacao, categoria} = req.body;

        const curso = await Curso.create({
            nome, 
            total_vaga, 
            total_bolsas,  
            valor, 
            carga_horaria, 
            descricao, 
            pre_requisito, 
            metodo, mercado_trabalho, 
            programa, 
            certificacao,
            categoria
        })

        res.status(200).json(curso);
    },
    async index(req, res) {
        const display = await Curso.findAll();
        return res.status(200).json(display);
    },
    async show(req, res) {
        const { id } = req.params;

        const display = await Curso.findOne({
            where: { id }
        });
        return res.status(200).json(display);
    },
    async update(req, res) {
        const dados = req.body;
        const { id } = req.params;

        const user = await Curso.update(dados, {
            where: { id: id }
        })
        return res.status(200).json(user);
    },
    async delete(req, res) {
        const { id } = req.params;
        const deletar = await Curso.destroy({
            where: { id: id }
        })
        return res.status(200).json(deletar);
    }
};