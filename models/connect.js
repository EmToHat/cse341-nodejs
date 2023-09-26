//const express = require('express');
//const app = express();
const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

//const connectionString = process.env.DB_string;

let db;

const initializeDB = (callback) => {
    if(db) {
        console.log('Database is initialized!');
        return callback(null, db);
    }
    MongoClient.connect(process.env.connectionString)
    //promise
    .then((client) => {
        console.log('Connected to database');
        //const db = client.db('ContactsDB');
        db = client;
        //const contactsCollection = db.collection('contactUsers');

        callback(null, db);

        //CRUD Requests HERE
    })
    .catch(error => console.error(error))
};

const getDB = () => {
    if (!db) {
        throw Error('Database not initialized');
    }
    return db;
};

module.exports = {initializeDB, getDB};