const Professor = require('../model/Professor');
const CryptoJS = require('crypto-js');
const { secretKey } = require("../config/tag");

module.exports = {
    async show(req, res) {
        const { email } = req.body;
        const senha = CryptoJS.AES.encrypt(req.body.senha, secretKey).toString();
        try{
            const exibeRes = await Professor.findOne({
                where: {
                    email
                    
                }
            })
            let bytes  = CryptoJS.AES.decrypt(exibeRes.dataValues.senha,  secretKey );
            if (bytes.toString(CryptoJS.enc.Utf8) !== senha ){
                res.status(422).json({message:"Usuário não encontrado"});
                return;
            }
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