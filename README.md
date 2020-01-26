# reimagined-telegram

create inital postgres database:$     pg_ctl init -D ./postgresDB
create db:$                           createdb hmTempDB
set/reset db tables:$                 npm run resetdb

install all dependencies:$            npm install
run server:$                          npm start

make an appointment with:
POST localhost:3000/api/makeAppointment
have appointment data be in the body as x-www-form-urlencoded in the same format as below:

doctorID:123456789
doctorFullName:henry mattoon
doctorFirstName:henry
doctorLastName:mattoon
patientFirstName: dan
patientLastName: smith
date:1/25/2019
time:8-15
type:new_patient



list doctors with
GET localhost:3000/api/listdocs
to return result in JSON format.



list appointments for specific doctor on a day with:
GET  localhost:3000/api/getAppointments
have doctor name and date be in the body as x-www-form-urlencoded in the same format as below:

doctorFullName:henry mattoon
date:1/25/2019


delete appointment with:

DELETE localhost:3000/api/removeAppointment

have doctor name, date, time, patientFirstName, patientLastName be in the body as x-www-form-urlencoded in the same format as below:

doctorFullName:henry mattoon
patientFirstName: dan
patientLastName: smith
date:1/25/2019
time:8-15



