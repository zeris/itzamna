import express from 'express';
import config from '../config'
import heatlhRoutes from './routes/health';

const app = express();

app.use(express.json());
app.use(heatlhRoutes);

const server = app.listen(config.PORT, () => {
   console.log(`Server listening on port ${config.PORT}`);
});

export default server;