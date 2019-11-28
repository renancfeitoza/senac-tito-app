const express = require("express");
const ProfileController = require('./controller/ProfileController');
const StatusProfile = require('./controller/StatusController');
const AdminController = require('./controller/AdminController');
const ProfessorController = require('./controller/ProfessorController');
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
routes.get('/api/profile/:id', ProfileController.show);
routes.put('/api/profile/:id', ProfileController.update);
routes.delete('/api/profile/:id', ProfileController.delete);

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







module.exports = routes;