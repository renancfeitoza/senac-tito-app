const Profile = require("../model/Profile");

module.exports = {
    async store(req, res) {
        const { profile } = req.body;

        const profiles = await Profile.create({
            profile
        })

        res.status(200).json(profiles);
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

        const user = await Profile.update(dados, {
            where: { id: id }
        })
        return res.status(200).json(user);
    },
    async delete(req, res) {
        const { id } = req.params;
        const deletar = await Profile.destroy({
            where: { id: id }
        })
        return res.status(200).json(deletar);
    }
};