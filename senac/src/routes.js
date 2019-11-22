const express = require('express');
const routes = express.Router();
const GeneroController = require('./controller/GeneroController');

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







module.exports = routes;