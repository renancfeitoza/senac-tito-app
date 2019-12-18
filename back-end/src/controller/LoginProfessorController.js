const Professor = require('../model/Professor');

module.exports = {
    async show(req, res) {
        const { email, senha } = req.body;
        try{
            const exibeRes = await Professor.findOne({
                where: {
                    email,
                    senha
                }
            })
            
            const {nome, area, profile} = exibeRes.dataValues;
            let resposta = {
                nome,
                email,
                area,
                profile
            }
            res.status(200).json(resposta);
        }
        catch(err){
            res.status(404).send("Usuário não encontrado");
        }
    }
}