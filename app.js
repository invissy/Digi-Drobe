import express from 'express';
const app = express();
import configRoutes from './routes/index.js';
const staticDir = express.static('public');

app.use('/public', staticDir);
app.use(express.json());

configRoutes(app);
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
});