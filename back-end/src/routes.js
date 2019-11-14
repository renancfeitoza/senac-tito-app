const express = require("express");

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




module.exports = routes;