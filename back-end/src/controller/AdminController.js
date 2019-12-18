const Admin = require('../model/Admin');

module.exports = {
    async store(req, res) {
        const { nome, email, senha, area, telefone, profile } = req.body;
        try{

        const exibeRes = await Admin.create({
            nome,
            email,
            senha,
            area,
            telefone,
            profile
        })

        res.status(200).json(exibeRes);
        }
        catch(err){
            res.status(400).send(err.message);
        }
    },
    async index(req, res) {
        const findAll = await Admin.findAll();

        res.status(200).json(findAll);
    },
    async show(req, res) {
        const { id } = req.params;

        const exibeRes = await Admin.findOne({
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    },
    async update(req, res) {
        const dados = req.body;
        const { id } = req.params;

        const exibeRes = await Admin.update(dados, {
            where: { id }
        })

        if(!exibeRes ===0){
            res.status(200).json(exibeRes);
        }else{
            res.status(400).send("Dados não atualizados");
        }

       
    },
    async delete(req, res) {
        const { id } = req.params;

        const exibeRes = await Admin.destroy({
            where: { id }
        })

        if(!exibeRes === 0){
            res.status(200).json(exibeRes);
        }else{
            res.status(400).send("Usuário não existe");
        }

    }
}