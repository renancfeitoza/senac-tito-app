const express = require("express");
const ProfileController = require('./controller/ProfileController');
const StatusProfile = require('./controller/StatusController');
const AdminController = require('./controller/AdminController');
const ProfessorController = require('./controller/ProfessorController');
const CursoController =  require('./controller/CursoController');
const AlunoController = require('./controller/AlunoController');
const Curso_AlunoController = require('./controller/Curso_AlunoController');
const loguinProfessorController = require('./controller/LoginProfessorController');
const loginAlunoController = require('./controller/LoginAlunoController');
const routes = express.Router();

routes.get('/api', (req, res) => {
    res.send(`

    <!DOCTYPE html>
    <html>
        <title>New Project Senac</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <body>
            <div class="text-center">
                <h1 class="text-center mt-5 display-1 font-weight-bolder">New Project Senac</h1>
            </div>
        </body> 
    </html>

    `)
});

// ROTAS DE PROFILE 
routes.post('/api/profile', ProfileController.store);
routes.get('/api/profile', ProfileController.index);
routes.get('/api/profile_id', ProfileController.show);
routes.put('/api/profile_edit', ProfileController.update);
routes.delete('/api/profile_delete', ProfileController.delete);

// ROTAS DE STATUS
routes.post('/api/status', StatusProfile.store);
routes.get('/api/status', StatusProfile.index);
routes.get('/api/status/:id', StatusProfile.show);
routes.put('/api/status/:id', StatusProfile.update);
routes.delete('/api/status/:id', StatusProfile.delete);

// ROTAS DE ADMIN
routes.post('/api/admin', AdminController.store);
routes.get('/api/admin', AdminController.index);
routes.get('/api/admin/:id', AdminController.show);
routes.put('/api/admin/:id', AdminController.update);
routes.delete('/api/admin/:id', AdminController.delete);

// ROTAS DE PROFESSOR
routes.post('/api/professor', ProfessorController.store);
routes.get('/api/professor', ProfessorController.index);
routes.get('/api/professor/:id', ProfessorController.show);
routes.put('/api/professor/:id', ProfessorController.update);
routes.delete('/api/professor/:id', ProfessorController.delete);

// ROTAS DE CURSO
routes.post('/api/curso', CursoController.store);
routes.get('/api/curso', CursoController.index);
routes.get('/api/curso/:id', CursoController.show);
routes.put('/api/curso/:id', CursoController.update);
routes.delete('/api/curso/:id', CursoController.delete);

// ROTA DE ALUNO 
routes.post('/api/aluno', AlunoController.store);
routes.get('/api/aluno', AlunoController.index);
routes.get('/api/aluno/:id', AlunoController.show);
routes.put('/api/aluno/:id', AlunoController.update);
routes.delete('/api/aluno/:id', AlunoController.delete);


// ROTA DE CURSO_ALUNO
routes.post('/api/curso_aluno', Curso_AlunoController.store);
routes.get('/api/curso_aluno', Curso_AlunoController.index);
routes.get('/api/curso_aluno/:id', Curso_AlunoController.show);
routes.put('/api/curso_aluno/:id', Curso_AlunoController.update);
routes.delete('/api/curso_aluno/:id', Curso_AlunoController.delete);

// LOGIN DE PROFESSOR
routes.post('/api/login_professor', loguinProfessorController.show);

// LOGIN DE ALUNO
routes.post('/api/login_aluno', loginAlunoController.show);




module.exports = routes;