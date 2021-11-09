import Express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = Express();
app.use(Express.json());
app.use(cors());
app.use((req, res, next) => {
  const { body, params, query } = req;
  console.log(body, params, query);
  next();
});

app.use(routes);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log('The server is running');
});
