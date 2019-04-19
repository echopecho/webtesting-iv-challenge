const GoT = require('./GoTModel.js');
const db = require('../data/dbConfig.js');

describe('the GoT Model', () => {

  beforeEach(() => {
    return db('GoT').truncate();
  });

  describe('the Create Fn', () => {

    it('should add a single character to the database', async () => {
      await GoT.create({ name: 'John Snow' });

      const char = await db('GoT');
      expect(char.length).toBe(1);
      expect(char[0].name).toBe('John Snow');
    })
  })
})