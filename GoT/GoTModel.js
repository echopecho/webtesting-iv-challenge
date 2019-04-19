const db = require('../data/dbConfig.js');

module.exports = {
  create,
  destroy,
};

async function create(char) {
  const [id] = await db('GoT').insert(char);
  return db('GoT').where({id}).first();
};

async function destroy() {
  return null
}