var express = require('express'); 
 
// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 
 
var app = express();

var myRouter = express.Router(); 
 
// Route movies
myRouter.route('/movies')

// GET
.get(function(req, res){ 
	  res.json({message : 'Liste de tous les films', methode : req.method});
})

//POST
.post(function(req, res){
      res.json({message : 'Ajoute un film', methode : req.method});
})

//PUT
.put(function(req, res){ 
      res.json({message : 'Met à jour un film', methode : req.method});
})

//DELETE
.delete(function(req, res){ 
res.json({message : 'Supprime un film', methode : req.method});  
}); 
 

app.use(myRouter);  
app.listen(port, hostname, function(){
	console.log('Serveur start < http://' + hostname + ':' + port + '>'); 
});