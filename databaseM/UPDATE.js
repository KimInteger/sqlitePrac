const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../database/info.db');

db.run("UPDATE info SET age = ? WHERE user =?",[27,"Integer"],(err)=>{
  if(err){
    return console.error(err.message);
  }

  console.log("complete updated");
});