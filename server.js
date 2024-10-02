const express = require('express')
const app = express()
const mysql = require('mysql2')
const dotenv = require('dotenv')



dotenv.config();
//create a connection
const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME

});
//test connection
db.connect((err) => {
    // If no connection 
    if(err) return console.log("Error connecting to MYSQL");

    //If connect works successfully
    console.log("Connected to MYSQL as id: ", db.threadId); 

})


// QUESTION ONE
//app.get('/', (req, res) => {

 
    //const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients" 
    // db.query(getPatients, (err, data) => {
       // if(err){
        //  return res.status(500).send('Error Retrieving data');
       // }else {
            //Display the records to the browser 
           // res.status(200).send(data);
      //  }
  //  });
// });

// QUESTION TWO

// retrieve all providers
// app.get('/', (req, res) => {


    //const getProviders = "SELECT first_name, last_name, provider_specialty FROM providers" 
   // db.query(getProviders, (err, data) => {
       // if(err){
         // return res.status(500).send('Error Retrieving data');
        //}else {
            //Display the records to the browser 
           // res.status(200).send(data);
       // }
   // });
//});


// QUESTION THREE
//app.get('/', (req, res) => {

 
    //const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients" 
    // db.query(getPatients, (err, data) => {
       // if(err){
        //  return res.status(500).send('Error Retrieving data');
       // }else {
            
           // res.status(200).send(data);
      //  }
  //  });
// });

// QUESTION FOUR
app.get('/', (req, res) => {

 
    const getPatients = "SELECT first_name  FROM patients" 
     db.query(getPatients, (err, data) => {
        if(err){
          return res.status(500).send('Error Retrieving data');
        }else {
            
            res.status(200).send(data);
        }
    });
 });



// retrieve all providers
//app.get('/', (req, res) => {

  
   // const getProviders = "SELECT provider_specialty FROM providers" 
    //db.query(getProviders, (err, data) => {
        //if(err){
          //return res.status(500).send('Error Retrieving data');
       // }else {
           
           // res.status(200).send(data);
       // }
   // });
//});

app.listen(3303, () => {
    console.log('Server is running on 3303....')
});

