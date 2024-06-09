const { application } = require('express');
const express=require('express');
const sqlite3=require('sqlite3');
const cors = require('cors');
const db=new sqlite3.Database('./chinook.db');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8000,()=>{console.log("Running")});

app.get('/',(req,res)=>{
    const szoveg = {message: "Backend vizsgafeladat"};
    res.json(szoveg);
});

app.get('/artists',(req,res)=>{
    db.all("select * from artists",(error,rows)=>{
        if (error) {
            res.send(error);
        }
        else{
            if (rows.length>0) {
                res.status(200).json(rows)
            }
            else{
                res.status(404).json({message:"Nincs ilyen adat!"})
            }
        }
    });
});

app.post('/artists', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ message: "Hiányzó név!" });
    } else {
        db.run("INSERT INTO artists (Name) VALUES (?)", [name], function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ id: this.lastID, name: name, genreId: genre });
            }
        });
    }
});

app.get('/genre-tracks/:GenreId', (req, res) => {
    const genreId = req.params.GenreId;
    db.all(
        'SELECT * FROM tracks WHERE GenreId = ?',
        [genreId],
        (error, rows) => {
            if (error) {
                res.status(500).json({ error: error.message });
            } else {
                if (rows.length > 0) {
                    res.status(200).json(rows);
                } else {
                    res.status(404).json({ message: "Nincs ilyen kategóriához tartozó zeneszám!" });
                }
            }
        }
    );
});

