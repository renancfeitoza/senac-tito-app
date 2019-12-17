const Professor = require('../model/Professor');
const CryptoJS = require("crypto-js");
const secretKey = require("../config/tag");
module.exports = {
    async store(req, res) {
        const { nome, email, area, profile, admin } = req.body;
        const senha = CryptoJS.AES.encrypt(req.body.senha, secretKey).toString();
        try{
            const exibeRes = await Professor.create({
                nome,
                email,
                senha,
                area,
                profile,
                admin
            })
    
            res.status(200).json(exibeRes);
        }
        catch(err){
            res.status(400).send("Dados Invalidos");
        }
    },
    async index(req, res) {
        const exibeRes = await Professor.findAll();

        res.status(200).json(exibeRes);
    },
    async show(req, res) {
        const { id } = req.params;

        const exibeRes = await Professor.findOne({
            where: {
                id
            }
        })

        res.status(200).json(exibeRes);
    },
    async update(req, res) {
        const { id } = req.params;
        const dados = req.body;

        const exibeRes = await Professor.update(dados, {
            where: {
                id
            }
        })

        if(!exibeRes === 0){
            res.status(200).json(exibeRes);
        }else{
            res.status(400).send("Usuário não existe");
        }
    },
    async delete(req, res) {
        const { id } = req.params;

        const exibeRes = await Professor.destroy({
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