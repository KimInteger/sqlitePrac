const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../database/info.db');

db.run("INSERT INTO info (user, age) VALUES(?,?)",["Song",31],(err)=>{
  if(err){
    console.log(err.message);
  }
  console.log('data insert');
});

db.close();