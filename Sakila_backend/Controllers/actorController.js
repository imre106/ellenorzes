const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./sqlite-sakila.db');

const getActornevek = (req,res)=>{
    const first_name = req.params.first_name;
    const last_name = req.params.last_name;
    db.all("SELECT * FROM actor WHERE first_name = ? AND last_name = ?"
    ,[first_name,last_name]
    ,(error,rows)=>{
        if (error) {
            res.send(error);
        }else{
            res.status(200).json(rows);
        }
    });
}

const getActorsFilm = (req,res)=>{
    const filmId = req.params.film_id;
    
    db.all('SELECT actor.actor_id, actor.first_name, actor.last_name FROM actor JOIN film_actor ON actor.actor_id = film_actor.actor_id WHERE film_actor.film_id = ?'
    ,[filmId]
    ,(error, rows) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }

        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: 'Nincsenek szereplők ebben a film-ben.' });
        }

        const actorNames = rows.map(row => ({ actor_id: `${row.actor_id}`, name: `${row.first_name} ${row.last_name}` }));
        res.status(200).json(actorNames);
    });
}

module.exports={
getActornevek,
getActorsFilm
}