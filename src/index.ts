import express, { Request, Response } from 'express';
import path from 'path';
import EJSLayout from 'express-ejs-layouts';

import env from './env';

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(EJSLayout);


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/protected', (req, res) => {
    res.render('protected');
})

app.listen(3000, () => {
    console.log(`App up and running on port: ${env.PORT}`)
});
