const fs = require('fs');

// if(fs.existsSync('./mesFichiers')){
//     console.log('le dossier est deja crée');
//     fs.rmdir('./mesFichiers', (erreur)=>{
//         if(erreur){
//             console.log(erreur);
            
//         }else{
//             console.log('Dossier supprimer avec succes');
//         }
//     })
// }else{
//     fs.mkdir('./mesFichiers', (erreur)=>{
//         if(erreur){
//             console.log(erreur);
            
//         }else{
//             console.log('Dossier crée avec succès');
            
//         }
//     })

// }

//createion de fichier
// fs.writeFile('./mesFichiers/text.html', 'mon fichier text crée', ()=>{
//     console.log('Creation du fichier');  
// })

// lecture d'un fichier 
// fs.readFile('./mesFichiers/text.html', (erreur, donnee)=>{
//     if(erreur){
//         console.log(erreur);
//     }else{
//         console.log(donnee.toString())
//     }
// });

// supprimer n fichier

if(fs.existsSync('./mesFichiers/text.html')){
    fs.unlink('./mesFichiers/text.html', (erreur)=>{
        if(erreur){
            console.log(erreur)
        }else{
            console.log('Fichier supprimee')
        }
    })
}else{
    console.log('impossible de supprimer');
    
}