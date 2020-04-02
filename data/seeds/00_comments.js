
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, name: 'Grey Tempback', email:"greytemp@gmail.com", comment:"David is such a great developer"}
      ]);
    });
};
