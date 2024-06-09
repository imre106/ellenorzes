const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./sqlite-sakila.db');

const getFilmTitle = (req,res)=>{
    const title = req.params.title;
    db.all('SELECT * FROM film WHERE title = ?'
    ,[title]
    ,(error,rows)=>{
        if (error) {
            res.send(error);
        }else{
            res.status(200).json(rows);
        }
    });
}

const getFilmÉv = (req,res)=>{
    const year = req.params.release_year;
    db.all('SELECT * FROM film WHERE release_year = ?'
    ,[year]
    ,(error,rows)=>{
        if (error) {
            res.send(error);
        }else{
            res.status(200).json(rows);
        }
    });
}

module.exports={
getFilmTitle,
getFilmÉv
}