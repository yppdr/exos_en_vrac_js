function exercice01(){
    var message = "hello world";
    var longueur = message.length;
    for (var i=0;i<longueur;i++){
    //console log pour afficher un caractere par passage de la boucle pour avoir 1 carac par ligne
    console.log(message[i] + i);
    }
}