const express = require("express")
const app = express()



app.get("/books",allBooks,function(req,res){
    console.log("books page ")
    res.send("books page")
})
function allBooks(req,res,next){
    console.log("Fetching all books")
    next();
}
app.listen(5000,function(){

    
})
