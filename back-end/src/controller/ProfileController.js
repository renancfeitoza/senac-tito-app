const Profile = require("../model/Profile");


module.exports = {
    async store(req, res) {
        const { nameProfile } = req.body;
        try{
            const profile = await Profile.create({
                nameProfile,
            });
            return res.status(200).json(profile);
        }
        catch(err){
            res.status(400).send("Dados Invalidos");
        }
    },

    async index(req, res) {
        const display = await Profile.findAll();
        return res.status(200).json(display);
    },

    async show(req, res) {
        const { id } = req.params;

        const display = await Profile.findOne({
            where: { id }
        });
        return res.status(200).json(display);
    },

    async update(req, res) {
        const dados = req.body;
        const { id } = req.params;

        const exibeRes = await Profile.update(dados, {
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
        const exibeRes = await Profile.destroy({
            where: { id: id }
        })

        if(!exibeRes === 0){
            res.status(200).json(exibeRes);
        }else{
            res.status(400).send("Usuário não existe");
        }
        
    }
};