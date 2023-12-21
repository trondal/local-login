import express, { Request, Response } from 'express';
import path from 'path';
import EJSLayout from 'express-ejs-layouts';
import session from 'express-session';
import env from './env';


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(EJSLayout);
app.use(express.urlencoded({ extended: true }));
app.use(session({
    name: env.SESSION_NAME,
    secret: env.SESSION_SECRET, // a secret string used to sign the session ID cookie
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
}))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    res.redirect('login');
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
