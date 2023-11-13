const express = require('express')

const app = express()
const port = 3000




//rutas
const entriesApiRoutes = require('./routes/entriesAPI_routes')
const authorsApiRoutes = require('./routes/authorsAPI_routes')


app.use(express.json()); // Habilito recepción de JSON en servidor

//app.use(checkApiKey)//si lo ponemos aquí protegemos TODO incluso el get. Sin apikey no se navega. 


//Ruta de Template
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  // Rutas
  app.use('/',entriesApiRoutes);
  app.use('/',authorsApiRoutes);
  // opciones: /api/entries te da todo y /api/entries?email="correo" te da solo lo de ese correo
  



app.listen(port, () => {
  console.log(`listen on http://localhost:${port}`)
  })

//para hacer algo en thunderclient tiene que estar iniciado el server
