
exports.up = function(knex) {
  return knex.schema.createTable("comments", comments => {
      comments.increments()


      comments.string("name", 128)
      .notNullable()
      .unique()

      comments.string("email", 128)
      .notNullable()


      comments.text("comment", 400)
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("comments")
};
