const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/API/SAKILA', require('./Routes/mainRoute'));

app.listen(8000,()=>console.log("Running"));

app.get('/API/SAKILA',(req,res)=>{
    res.send("Sakila backend")
})
