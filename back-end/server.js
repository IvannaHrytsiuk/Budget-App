var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
require('./app/router/router.js')(app);
 
const db = require('./app/config/db.config.js');
 
const Role = db.role; 
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   initial();
// });
var server = app.listen(3800, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})

 
// function initial(){
//   Role.create({
//     id: 1,
//     name: "USER"
//   });
  
//   Role.create({
//     id: 2,
//     name: "ADMIN"
//   });
// }
const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123qaz',
    database:'budget',
    multipleStatements:true
});

mysqlConnection.connect( function(error){
    if (error) throw error;
    console.log('Connected');
});

app.get('/users', (req, res)=>{
  mysqlConnection.query('SELECT u.* FROM users u left join user_roles ur on u.id = ur.userId where ur.roleId = 1;', (err, rows, filed)=>{
      if(!err){
          res.send(rows);
      } else{
          console.log(err);
      }
  })
});

app.get('/users/:id', (req, res)=>{
  mysqlConnection.query('SELECT * FROM users WHERE id = ?',[req.params.id], (err, rows, filed)=>{
      if(!err){
          res.send(rows);
      } else{
          console.log(err);
      }
  })
});

app.delete('/users/:id', (req, res)=>{
  mysqlConnection.query('DELETE FROM users WHERE id = ?',[req.params.id], (err, rows, fields)=>{
      if(!err){
          res.send({status:'Deleted!'});
      } else{
          console.log(err);
      }
  })
});

app.post('/users', (req, res)=>{
  let user = req.body;
  mysqlConnection.query( `UPDATE users SET firstName = ?, lastName = ?, email=?, balance=?, updatedAt= NOW()  WHERE id = ?`, [user.firstName, user.lastName, user.email, user.balance, user.id], (err, rows, fields)=>{
      if(!err){
          res.send({status:'Updated!'});
      } else{
          console.log(err);
      }
  })
});
app.post('/incomes', (req, res)=>{
  mysqlConnection.query( `INSERT INTO user_incomes (amount, date, user_id ) VALUES (${req.body.amount},NOW(),${req.body.user_id})`, (err, rows, fields)=>{
      if(!err){
          res.send({status:'Added!'});
      } else{
          console.log(err);
      }
  })
});
app.get('/incomes/:user_id', (req, res)=>{
    mysqlConnection.query('SELECT * FROM user_incomes WHERE user_id = ?',[req.params.user_id], (err, rows, filed)=>{
        if(!err){
            res.send(rows);
        } else{
            console.log(err);
        }
    })
});
app.get('/saving/:user_id', (req, res)=>{
    mysqlConnection.query('SELECT * FROM user_saving WHERE user_id = ?',[req.params.user_id], (err, rows, filed)=>{
        if(!err){
            res.send(rows);
        } else{
            console.log(err);
        }
    })
});
app.post('/saving', (req, res)=>{
    mysqlConnection.query( `INSERT INTO user_saving (saving_id, user_id, name, balance ) VALUES (${req.body.saving_id}, ${req.body.user_id}, ${req.body.name}, ${req.body.balance})`, (err, rows, fields)=>{
        if(!err){
            res.send({status:'Added!'});
        } else{
            console.log(err);
        }
    })
  });
app.get('/spends/:user_id', (req, res)=>{
    mysqlConnection.query('SELECT * FROM user_spends WHERE user_id = ?',[req.params.user_id], (err, rows, filed)=>{
        if(!err){
            res.send(rows);
        } else{
            console.log(err);
        }
    })
});
app.post('/spends', (req, res)=>{
    mysqlConnection.query( `INSERT INTO user_spends (name, user_id, suma, date ) VALUES (${req.body.name}, ${req.body.user_id}, ${req.body.suma}, NOW())`, (err, rows, fields)=>{
        if(!err){
            res.send({status:'Added!'});
        } else{
            console.log(err);
        }
    })
  });