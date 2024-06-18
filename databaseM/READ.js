const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('../database/info.db');

function getUserInfo(user){
  const sql = 'SELECT user, age from info WHERE user =?';

  db.get(sql,[user],(err,row)=>{
    if(err){
      return console.error(err.message);
    } else if (row) {
      console.log(`찾았습니다. ${row.user}의 나이는 ${row.age}입니다.`);
    } else {
      console.log('can not found');
    }
  });
}

getUserInfo('Integer');

db.close();