const {Client} = require('pg');
const client = new Client(
  {
    database: 'hmTempDB',
  }
)

client.connect()
.catch(err => console.log('error connecting to db: ', err));

const listDoctors = (cb) => {
  client.query(
    `select distinct on (doctorFullName)
    doctorFirstName, doctorLastName
    from appointments;`)
    .then(res => {
      //console.log(res)
      cb(null, res.rows);
    })
    .catch(err => {
      cb(err, null);
    })
}

const makeAppointment = (info, cb) => {

  //TODO, check if time is correct and check if too many appointments for given time;
  if(true){
    client.query(
      `insert into appointments
      (doctorID, doctorFullName, doctorFirstName, doctorLastName, patientFirstName, patientLastName, date, time, type)
      values
      ('${info.doctorID}', '${info.doctorFullName}', '${info.doctorFirstName}', '${info.doctorLastName}', '${info.patientFirstName}', '${info.patientLastName}', '${info.date}', '${info.time}', '${info.type}')`
      )
      .then(res => {
        cb(null, res);
      })
      .catch(err => {
        cb(err, null);
      })
  }
}

const docAppointments = (name, date, cb) => {
  client.query(
    `select * from appointments where doctorFullName='${name}' and date='${date}';`
  )
  .then(res => {
    cb(null, res.rows);
  })
  .catch(err => {
    cb(err, null);
  })
}

const deleteAppointment = (info, cb) => {
  client.query(
    `delete from appointments where doctorFullName='${info.doctorFullName}' and date='${info.date}' and time='${info.time}' and patientFirstName='${info.patientFirstName}' and patientLastName='${info.patientLastName}';`
  )
  .then(res => {
    cb(null, res);
  })
  .catch(err => {
    cb(err, null);
  })
}


module.exports = {
  listDoctors,
  makeAppointment,
  docAppointments,
  deleteAppointment
}


