const http =  require('http');
const fs = require('fs');

// console.log(fs);
const port= 3000
const server = http.createServer( (req, res)=>{
    res.setHeader('content-type', "text/html");
    let fichier = "";

    if(req.url === "/acceuil"){
        
        fichier= "./html/acceuil.html"
    }
   if(req.url === "/profile"){
        fichier= "./html/profile.html"
    }
   if(req.url === "/erreur"){
   
        fichier="./html/erreur.html"
    }
    console.log(fichier);
    
    fs.readFile(fichier, (erreur, donnee)=>{
        if(erreur){
          //  console.log('erreur');
            
            // res.end(donnee)
        }else{
            res.end(donnee)
        }
    })
    // console.log(req.url);  

});

server.listen(port, ()=>{
    console.log("serveur demare sur le port", port);
})