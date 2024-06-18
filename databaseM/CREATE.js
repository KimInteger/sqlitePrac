const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../database/info.db');

db.run("CREATE TABLE IF NOT EXISTS info (user TEXT, age INTEGER)",(err)=>{
  if(err){
    console.log(err.message);
  }
  console.log('table created');
});