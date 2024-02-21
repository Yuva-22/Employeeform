const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3001;

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'employeeform',
})

db.connect((err) => {
    if(err)
    {
        throw err;
    }
    console.log("MySQL Connected");
})

app.use(bodyparser.json());

app.post('/second',(req,res) => {
    const { name,employeeId,department,dob,gender,designation,salary,phone,address } = req.body;
    
    const sql = 'INSERT INTO formtask (name, employeeId, department, dob, gender, designation, salary, phone, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, employeeId, department, dob, gender, designation, salary, phone, address], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(201).json({ message: 'Employee added successfully' });
  });

})




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});