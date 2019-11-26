const Usuario = require("../model/Usuario");

module.exports= {
    store(req, res){
        Usuario.create({
            nome: "Renan",
            email:"Renan@gmail.com",
            profile:2,
            token:"123456"
        })
        .then(usuario => res.send(usuario))
        .catch(err=> res.send(err))
}
}