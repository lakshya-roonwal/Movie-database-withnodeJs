const express=require('express')
const app=express()
const fetch=require('node-fetch')
const bodyParser=require('body-parser')
const port=80;


app.use(express.static('./public'));
app.set('view engine','pug')

const urlencoded=bodyParser.urlencoded({extended:false})
app.post('/getmovie',urlencoded,(req,res)=>{
    fetch(`http://www.omdbapi.com/?t=${req.body.moviename}&y=${req.body.movieyear}&apikey=6af4e10d`)
    .then((data) => data.json())
    .then((moviedata) => {
        console.log(moviedata);
        res.render('movie.pug',{mdata:moviedata})
    })
})
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})