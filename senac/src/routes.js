const express = require('express');
const routes = express.Router();
const GeneroController = require('./controller/GeneroController');
const CategoriaController = require('./controller/CategoriaController');
const CursoController =  require('./controller/CursoController');
const ProfileController = require('./controller/ProfileController');
const TurmaController = require('./controller/TurmaController');
const AlunoController = require('./controller/AlunoController');
const ProfessorController = require('./controller/ProfessorController');

routes.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
      <html>
      <title>Genus</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <body>
              <div class="text-center">
                  <h1 class="text-center mt-5 display-1 font-weight-bolder">Base De Dados</h1>
              </div>
          </body>
      </html>
    `);
})

routes.post('/api/genero', GeneroController.store)
routes.get('/api/genero', GeneroController.index)
routes.get('/api/genero/:id', GeneroController.show)
routes.put('/api/genero/:id', GeneroController.update)
routes.delete('/api/genero/:id', GeneroController.delete)

routes.post('/api/categoria', CategoriaController.store)
routes.get('/api/categoria', CategoriaController.index)
routes.get('/api/categoria/:id', CategoriaController.show)
routes.put('/api/categoria/:id', CategoriaController.update)
routes.delete('/api/categoria/:id', CategoriaController.delete)

routes.post('/api/curso', CursoController.store)
routes.get('/api/curso', CursoController.index)
routes.get('/api/curso/:id', CursoController.show)
routes.put('/api/curso/:id', CursoController.update)
routes.delete('/api/curso/:id', CursoController.delete)

routes.post('/api/profile', ProfileController.store)
routes.get('/api/profile', ProfileController.index)
routes.get('/api/profile/:id', ProfileController.show)
routes.put('/api/profile/:id', ProfileController.update)
routes.delete('/api/profile/:id', ProfileController.delete)

routes.post('/api/turma', TurmaController.store)
routes.get('/api/turma', TurmaController.index)
routes.get('/api/turma/:id', TurmaController.show)
routes.put('/api/turma/:id', TurmaController.update)
routes.delete('/api/turma/:id', TurmaController.delete)

routes.post('/api/aluno', AlunoController.store)
routes.get('/api/aluno', AlunoController.index)
routes.get('/api/aluno/:id', AlunoController.show)
routes.put('/api/aluno/:id', AlunoController.update)
routes.delete('/api/aluno/:id', AlunoController.delete)

ProfessorController
routes.post('/api/professor', ProfessorController.store)
routes.get('/api/professor', ProfessorController.index)
routes.get('/api/professor/:id', ProfessorController.show)
routes.put('/api/professor/:id', ProfessorController.update)
routes.delete('/api/professor/:id', ProfessorController.delete)

module.exports = routes;