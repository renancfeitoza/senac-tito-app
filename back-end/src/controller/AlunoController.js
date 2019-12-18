const Aluno = require('../model/Aluno');

module.exports = {
    async store(req, res) {
        const { nome, email, senha } = req.body;

        try{
            const exibeRes = await Aluno.create({
                nome,
                email,
                senha
            })
            res.status(201).json(exibeRes);
        }catch(err){
            res.status(400).send(err.message);
        }

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

        if(!exibeRes ===0){
            res.status(200).json(exibeRes);
        }else{
            res.status(400).send("Dados não atualizados");
        }
    },
    async delete(req, res) {
        const { id } = req.params;

        const exibeRes = await Aluno.destroy({
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