function exercice04(){

    var message = "ceci est un texte assez long "; // variable qui stocke mon message (chaine de caractère)
    var count = 0;// variable count qui permet de compter le nombre de mots
    var long = 0;// variable long qui permet de compter le nombre de lettres par mots

   // debut de la boucle for (parcours du tableau de char)
   for (var i = 0; i < length(message); i++) {

       // incrémentation de la variable long
       long++;

       // condition validée lorsque le caractère courant est un espace
       if (message[i] === " ") {

           // incrémentation de la variable count car un espace = un mot.
           count++;

           // on affiche la position du mot ainsi que son nombre de caractère
           // long - 1 car sinon il compt aussi le nombre d'éspace.
           console.log("le mot n° " + count + " contient : " + (long - 1) + " lettres");

           // Init de la variable long pour la repasser a 0 après avoir compté un mot.
           long = 0;

       }
   }
   // affichage du nombre de mot total.
   console.log("il y a " + count + " mots dans la phrase : " + message)

}