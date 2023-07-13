const { Pool } = require('pg');

// link to connect to elephantSQL database
const PG_URI = 'postgres://jbpevjlk:vv_nAYL5L-8Ow0ZdzYZebwpLAXl8C4d-@mahmud.db.elephantsql.com/jbpevjlk';

// create pool using connection string
const pool = new Pool({
    connectionString: PG_URI
})

// TODO: add link to show schema for database (ie the ER diagram)
// SQL database designed to keep track of training and medical records for a group of animals
// this one is set up to represent the bottlenose dolphins residing at peir302

// export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};