const {Client} = require('pg');
const client = new Client(
  {
    database: 'hmTempDB',
  }
);

client.connect();

client.query(`DROP TABLE IF EXISTS docData`);
client.query(`DROP TABLE IF EXISTS appointments`);

client.query(`CREATE TABLE docData (
  id serial NOT NULL,
  doctorID character varying(50),
  doctorFirstName character varying(20),
  doctorLastName character varying(20)
)`)

client.query(`CREATE TABLE appointments (
  id serial NOT NULL,
  doctorID character varying(50),
  doctorFullName character varying(50),
  doctorFirstName character varying(20),
  doctorLastName character varying(20),
  patientFirstName character varying(50),
  patientLastName character varying(50),
  date character varying(10),
  time character varying(20),
  type character varying(30)
)`)

