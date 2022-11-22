import * as tuitsDao from '../../tuits/tuits-dao.js'

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.liked = false;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
  const tuitToDelete = req.params.tuitId;
  const status = await tuitsDao.deleteTuit(tuitToDelete);
  res.json(status);
}

const updateTuit = async (req, res) => {
  const tuitIdToUpdate = req.params.tuitId;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
  res.json(status);
}

export { findTuits, createTuit, deleteTuit, updateTuit }