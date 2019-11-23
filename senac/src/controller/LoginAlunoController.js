const LoginAluno = require("../model/Aluno");

module.exports = {
  async show(req, res) {
    const { email } = req.body;

    await LoginAluno.findOne({
      where: { email }
    })
      .then(response => {
        console.log(response);
        const {id, nome, email, turma, profile} = response;
        const dataAluno = {
            id,
            nome,
            email,
            turma,
            profile
        }
        if (response !== null) {
          return res.status(200).json(dataAluno);
        } else {
          return res.status(400).send("Usuário não encontrado");
        }
      })
      .cath(err => {
        console.log(err);
        return res.status(500).send("Erro na endpoint");
      });
  }
};