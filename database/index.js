import mongoose from 'mongoose';

const TopicModel = mongoose.model(
  'Topic',
  new mongoose.Schema({}, { strict: false }),
  'last_logs_all_topics'
);

const AlarmLogsModel = mongoose.model(
  'Logs',
  new mongoose.Schema({}, { strict: false }),
  'alarm_logs'
);

export const states = async () => {
  const topics = await TopicModel.find();

  const {
    ac_toggle,
    ac_valor_atual,
    jardim_toggle,
    garagem_toggle,
    interno_toggle,
    alarme_toggle,
  } = topics[0];

  return {
    ac_toggle,
    ac_valor_atual,
    jardim_toggle,
    garagem_toggle,
    interno_toggle,
    alarme_toggle,
  };
};

export const alarm_logs = async () => {
  const logs = await AlarmLogsModel.find();
  return logs;
};
