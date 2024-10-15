import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';


import postRoute from './routes/postRoute.js';
import dalleRoute from './routes/dalleRoute.js';

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));   // to support JSON-encoded bodies

app.use('/api/v1/post', postRoute);
app.use('/api/v1/dalle', dalleRoute);

app.get('/', async (req, res) => {
    res.send('Hello from Artifex');
})


const startServer = async () => {

    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => 
            console.log('Server is running on port 8080'));
    } catch (error) {
        console.log('Error while starting server: ', error);
    }
    // app.listen(8080, () => {
    //     console.log('Server is running on port 8080');
    // });
}

startServer();