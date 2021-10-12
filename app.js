import Express from 'express';
import routes from './routes.js';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.error(err))
  .then(() => console.log('Database connected'));

const app = Express();
app.use(Express.json());
app.use(routes);

app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('The server is running');
});
