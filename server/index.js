const express = require('express');
const path = require('path');
const Promise = require('bluebird');
const bodyParser = require('body-parser');

const {listDoctors, makeAppointment} = require('./databaseTools')
const listDocs = Promise.promisify(listDoctors);
const makeAppoint = Promise.promisify(makeAppointment);

const port = 3000;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//console.log('test')
app.get('/api/listdocs', (req, res) => {
  //list all docs in db
  console.log('listing doctors');
  listDocs()
  .then(result => {
    console.log(result);
    res.send(result);
  })
  .catch(err => {
    console.log('error listing docs: ', err)
    res.end()
  })

})

app.get('/api/getAppointments', (req, res) => {
  //list all appointments for a doc on a given day
  //input doctor and date,
  console.log('getting appointments');

})

app.delete('/api/removeAppointment', (req, res) => {
  //remove an appointment for a given doctor at a given time
  //input doctor, time, patient name,
  console.log('removing appointment');
})

app.post('/api/makeAppointment', (req, res) => {
  //make new appointment for a doctor
  //input doctor, time, patient name (first and last), kind/type
  // contraints: time must be in 15min intervals (xx:00, xx:15, xx:30, xx:45) and there may be up to three appotinments for a given time.
  let reqBody = req.body;
  console.log('making appointment');
  console.log(reqBody);
  makeAppoint(reqBody)
  .then(result => {
    res.end()
  })
  .catch(err => {
    console.log('error making appointment: ', err)
    res.end()
  })
  //res.send(reqBody);
})

app.listen(port, ()=> console.log(`listening to port: ${port}`))



//console.log('helloworld');
