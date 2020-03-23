var express = require('express'); 
 
// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 
 
var app = express();

var myRouter = express.Router(); 

// Route principale
myRouter.route('/')
.all(function(req,res){ 
      res.json({message : 'API works !', methode : req.method});
});
 
// Route movies
myRouter.route('/movies')
.get(function(req, res) { // Get
	  res.json({message : 'Liste de tous les films', methode : req.method});
})
.post(function(req, res) { // Post
      res.json({message : 'Ajoute un film', methode : req.method});
})
.put(function(req, res) { // Put
      res.json({message : 'Met à jour un film', methode : req.method});
})
.delete(function(req, res) { // Delete
res.json({message : 'Supprime un film', methode : req.method});  
});

// Accès par identifiant
myRouter.route('/movies/:id')
.get(function(req,res) { // Get
	  res.json({message : ' Get movie > ' + req.params.piscine_id});
})
.put(function(req,res) { // Put
	  res.json({message : ' Put movie > ' + req.params.piscine_id});
})
.delete(function(req,res) { // Delete
	  res.json({message : ' Delete > ' + req.params.piscine_id});
});

app.use(myRouter);  
app.listen(port, hostname, function(){
	console.log('Serveur start < http://' + hostname + ':' + port + ' >'); 
});