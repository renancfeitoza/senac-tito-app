const Profile = require("../model/Profile");
const CryptoJS = require('crypto-js');
const { secretKey } = require("../config/tag");


module.exports = {
    async store(req, res) {
        const { nameProfile } = req.body;
        try{
            const profile = await Profile.create({
                nameProfile,
            });
            console.log(profile.dataValues.id);
            const teste = CryptoJS.AES.encrypt(profile.dataValues.id.toString(), secretKey).toString();
            console.log("teste")
            let object = {
                token_profile: teste
            }
            await Profile.update(object, {
                where: { id: profile.dataValues.id }
            })

            return res.status(200).json(profile);
        }
        catch(err){
            console.log(err)
            res.status(400).send("Dados Invalidos");
        }
    },

    async index(req, res) {
        const display = await Profile.findAll();
        console.log(display[1].dataValues);
        let resposta = display.reduce((prev, next) => { let value = { nameProfile: next.nameProfile, token_profile: next.token_profile }; prev.push(value); return prev; }, [])
        return res.status(200).json(resposta);
    },

    async show(req, res) {
        const { id } = req.headers;
        let id_decrypt  = CryptoJS.AES.decrypt(id,  secretKey );

        const display = await Profile.findOne({
            where: { id:id_decrypt.toString(CryptoJS.enc.Utf8) }
        });
        console.log(display.dataValues);
        const {nameProfile, token_profile} = display.dataValues;
        let resposta = {
            nameProfile,
            token_profile
        }
        return res.status(200).json(resposta);
    },

    async update(req, res) {
        const dados = req.body;

        const { id } = req.headers;

        let id_decrypt  = CryptoJS.AES.decrypt(id,  secretKey );

        const exibeRes = await Profile.update(dados, {
            where: { id: id_decrypt.toString(CryptoJS.enc.Utf8) }
        })

        console.log(exibeRes);

        if(exibeRes !== 0){
            res.status(200).json("Usuário atualizado com sucesso");
        }else{
            res.status(400).send("Usuário não existe");
        }
    },

    async delete(req, res) {
        const { id } = req.headers;

        let id_decrypt  = CryptoJS.AES.decrypt(id,  secretKey );

        const exibeRes = await Profile.destroy({
            where: { id: id_decrypt.toString(CryptoJS.enc.Utf8) }
        })

        if(exibeRes !== 0){
            res.status(200).json("Usuário deletado com sucesso");
        }else{
            res.status(400).send("Usuário não existe");
        }
        
    }
};