const Aluno = require('../model/Aluno');

module.exports = {
    async show(req, res) {
        const { email, senha } = req.body;
        try{
            const exibeRes = await Aluno.findOne({
                where: {
                    email,
                    senha
                }
            })
            
            console.log(exibeRes.dataValues);
            const {nome, area} = exibeRes.dataValues;
            let resposta = {
                nome,
                email
            }
            res.status(200).json(resposta);
        }
        catch(err){
            res.status(404).send("Usuário não encontrado");
        }
    }
}