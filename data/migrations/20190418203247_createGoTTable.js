
exports.up = function(knex, Promise) {
  return knex.schema.createTable('GoT', table => {
    table.increments();

    table.string('name')
      .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('GoT');
};
