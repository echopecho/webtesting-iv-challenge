const db = require('../data/dbConfig.js');

module.exports = {
  create,
  destroy,
};

async function create(char) {
  return db('GoT').insert(char);
};

async function destroy() {
  return null
}