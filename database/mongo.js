import dotenv from 'dotenv'
dotenv.config()
import {MongoClient } from 'mongodb'

const client = new MongoClient(process.env.DB);
const dbName = 'historic_logs';

var AlarmLogsCollection;
var LastTopicsCollection;

const initDB = async () => {
    await client.connect();
    const db = client.db(dbName);
    AlarmLogsCollection = db.collection('alarm_logs');
    LastTopicsCollection = db.collection('last_logs_all_topics');
    return 'Connected successfully to Database';
}

const states = async() => {
    const [findResult] = await LastTopicsCollection.find({}).toArray();
    return findResult
}

const alarm_logs = async() => {
    const findResult = await AlarmLogsCollection.find({}).toArray();
    return findResult
}

export {initDB, alarm_logs, states}