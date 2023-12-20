import express, { Request, Response } from 'express';
import env from './env';


console.log(env.PORT);


console.log(env.PORT);
const app = express();

app.get('/', (req, res) => {
    res.send('bobbo3');
})

app.listen(3000, () => {
    console.log(`App up and running on port: ${process.env.PORT}`)
});
