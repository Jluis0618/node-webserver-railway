import express from 'express';
import hbs from 'hbs';
import * as url from 'url';
import 'dotenv/config.js';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// Servir contenido estatico

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  
  })
})


app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  
  })
})

app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  })
})

app.get('*', function (req, res) {
  res.sendFile( __dirname + '/public/404.html')
})

app.listen(port)