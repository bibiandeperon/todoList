var express = require("express") ,
    app     = express(),
    port    = process.env.PORT || 3000 ,
    bodyParser = require("body-parser") ;
    
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json()) ;  
app.use(bodyParser.urlencoded({etended:true}) ) ;

app.use(express.static(__dirname + "/views")) ;
app.use(express.static(__dirname + "/public")) ;
app.use("/api/todos" , todoRoutes) ;


app.get("/",function(req , res){
  res.sendFile("index.html") ;   
});

app.listen(port , function(){
    
     console.log("server is started on port " + port ) ;
}) ;