import { Router } from 'express';
import { states, alarm_logs } from './database/index.js';

const routes = Router();

routes.get('/states', async (req, res) => {
  const currentStates = await states();
  return res.json(currentStates);
});

routes.get('/alarmlogs', async (req, res) => {
  const alarmLogs = await alarm_logs();
  return res.json(alarmLogs);
});

export default routes;
