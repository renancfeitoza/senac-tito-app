const axios = require('axios');

module.exports = {
    async show(req,res){
        axios.get('http://viacep.com.br/ws/01001000/json').then((response) => {
            console.log(response)
            res.json(response)
        }).catch((err) => {
            return err
        })
    }
}


