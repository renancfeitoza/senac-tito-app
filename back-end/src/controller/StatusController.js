const Status = require("../model/Status");

module.exports = {
    async store(req, res) {
        const { status } = req.body;
        try{
            const statusExibe = await Status.create({
                status,
            });
            return res.status(200).json(statusExibe);
        }
        catch(err){
            res.status(400).send("Dados Invalidos");
        }
    },

    async index(req, res) {
        const display = await Status.findAll();
        return res.status(200).json(display);
    },

    async show(req, res) {
        const { id } = req.params;

        const display = await Status.findOne({
            where: { id }
        });
        return res.status(200).json(display);
    },

    async update(req, res) {
        const dados = req.body;
        const { id } = req.params;

        const exibeRes = await Status.update(dados, {
            where: { id: id }
        })

        if(!exibeRes === 0){
            res.status(200).json(exibeRes);
        }else{
            res.status(400).send("Usuário não existe");
        }
        
    },

    async delete(req, res) {
        const { id } = req.params;
        const exibeRes = await Status.destroy({
            where: { id: id }
        })
        if(!exibeRes === 0){
            res.status(200).json(exibeRes);
        }else{
            res.status(400).send("Usuário não existe");
        }
    }
};