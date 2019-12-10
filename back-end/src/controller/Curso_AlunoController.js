const Curso_aluno = require('../model/Curso_Aluno');

module.exports = {
    async store(req, res) {
        const { curso, aluno } = req.body;

        const uniqueKey = `${curso}${aluno}`;
        console.log(uniqueKey)
        try{
            const exibeRes = await Curso_aluno.create({
                curso,
                aluno,
                unique: uniqueKey
            })
            res.status(201).json(exibeRes);
        }
        catch(err){
            res.status(400).send("Dados invalidos");
        }
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

        if(!exibeRes ===0){
            res.status(200).json(exibeRes);
        }else{
            res.status(400).send("Dados não atualizados");
        }
    },
    async delete(req, res) {
        const { id } = req.params;

        const exibeRes = await Curso_aluno.destroy({
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