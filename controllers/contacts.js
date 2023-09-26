// connection
const mongodb = require('../models/connect');
const ObjectId = require('mongodb').ObjectId;

const getContactInformation = async (req, res, next) => {
  const result = await mongodb.getDB().db().collection('contactUsers').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDB()
    .db()
    .collection('contactUsers')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

// export
module.exports = { getContactInformation, getSingle };