const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./sqlite-sakila.db');

const getCategoryName = (req,res)=>{
    const name = req.params.name;
    db.all('SELECT * FROM category WHERE name = ?'
    ,[name]
    ,(error,rows)=>{
        if (error) {
            res.send(error);
        }else{
            res.status(200).json(rows);
        }
    });
}

const patchCategoryNev = (req, res) => {
    const { category_id } = req.params;
    const { name } = req.body;
    
    if (!name) {
        return res.status(400).json({ error: 'Hiányzó kategória név az adatokban.' });
    }

    db.run('UPDATE category SET name = ? WHERE category_id = ?'
        ,[name, category_id]
        ,error => {
            if (error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(200).json({ message: 'Név módosítva!' });
            }
        });
}

const postCategory = (req,res)=>{
    const {category_id,name} = req.body;
    db.run('INSERT INTO category (category_id,name,last_update) values(?,?,DATETIME("now"))'
    ,[category_id,name]
    ,error=>{
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).json({message:"Új adat beillesztve!"})
        }
    });
}

module.exports ={
    getCategoryName,
    patchCategoryNev,
    postCategory
    
}