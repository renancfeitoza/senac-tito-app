const Curso = require('../model/Curso');

module.exports = {
    async store(req, res) {
        const { nome, professor, status } = req.body;
        try{
            const exibeRes = await Curso.create({
                nome,
                professor,
                status
            })
    
            res.status(201).json(exibeRes);
        }
        catch(err){
            res.status(400).send("Dados Invalidos");
        }
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

        if(!exibeRes ===0){
            res.status(200).json(exibeRes);
        }else{
            res.status(400).send("Dados não atualizados");
        }
    },
    async delete(req, res) {
        const { id } = req.params;

        const exibeRes = await Curso.destroy({
            where: {
                id
            }
        })

        if(!exibeRes === 0){
            res.status(200).json(exibeRes);
        }else{
            res.status(400).send("Usuário não existe");
        }
    }
}