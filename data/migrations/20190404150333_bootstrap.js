
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('tracks', tbl => {
      tbl.increments('id');

      tbl
        .string('name', 128)
        .notNullable()
        .unique();

      tbl.timestamps(true, true)
    })

    .createTable('cohorts', tbl => {
      tbl.increments('id');

      tbl
        .string('name', 128)
        .notNullable()
        .unique()

      tbl
        .integer('track_id')
        .unsigned()
        .references('id')
        .inTable('tracks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })


    .createTable('students', tbl => {
      tbl.increments();

      tbl.string('name', 128).notNullable();
    })

    .createTable('cohort_students', tbl => {
      tbl.increments('id');

      tbl
        .integer('cohort_id')
        .unsigned()
        .references('id')
        .inTable('cohorts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      tbl
        .integer('student_id')
        .unsigned()
        .references('id')
        .inTable('students')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExsists("cohort_students")
    .dropTableIfExsists("students")
    .dropTableIfExsists("cohorts")
    .dropTableIfExsists("tracks")
};
