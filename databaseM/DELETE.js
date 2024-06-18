const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../database/info.db');

db.run("DELETE FROM info WHERE user = ?",["Integer"],(err)=>{
  if(err){
    return console.error(err.message);
  }
  console.log('data deleted');
});

db.close();