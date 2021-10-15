import { Router } from 'express';
import { states, alarm_logs } from './database/index.js';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Application is running');
})

routes.get('/api/states', async (req, res) => {
  const currentStates = await states();
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  return res.json(currentStates);
});

routes.get('/api/alarmlogs', async (req, res) => {
  const alarmLogs = await alarm_logs();
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  return res.json(alarmLogs);
});

export default routes;
