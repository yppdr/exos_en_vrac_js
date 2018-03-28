function exercice01(){
    console.log('Exo un launch')
    // Déclare ma var message
    var message = "hello world";
    //calcule la taille de message avec ma function
    var longueur = length(message);
    var test ="";

    for (var i=0;i<longueur;i++){
        // Affiche chaque lettres du message avec son id
        console.log(message[i] + i);
    }
    
    var div = document.getElementById("exo1");
var resultatDeLExo = "Regarde dans ta console !";
var texte = document.createTextNode(resultatDeLExo);
div.appendChild(texte);
}