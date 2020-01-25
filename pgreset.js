const {Client} = require('pg');
const client = new Client(
  {
    database: 'hmTempDB',
  }
);

client.connect();

client.query(`DROP TABLE IF EXISTS hmTestOne`);

client.query(`CREATE TABLE hmTestOne (
  id serial NOT NULL,
  coolWords character varying(50)
)`)