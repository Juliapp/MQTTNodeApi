import Express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = Express();
app.use(Express.json());
app.use(routes);

app.use(cors());

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log('The server is running');
});
