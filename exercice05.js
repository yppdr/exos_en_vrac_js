//NE PLUS USE PLZ !

function exercice05(){


    var message = "ceci est un texte assez long "; // variable qui stocke mon message (chaine de caractère)
    var message2 = "ceci est un texte assez long "; // variable qui stocke mon message (chaine de caractère)
    var count = 0;// variable count qui permet de compter le nombre de mots
    var long = 0;// variable long qui permet de compter le nombre de lettres par mots
    var test = "";//Variable de test
    var test2 = "";//Variable de test2
    var test3 = "";//Variable de test3
    var nbl = 0;

   // debut de la boucle for (parcours du tableau de char)
   for (var i = 0; i < length(message); i++) {

       // incrémentation de la variable long
       long++;

       // condition validée lorsque le caractère courant est un espace
       if (message[i] === " ") {
            count++;
           // incrémentation de la variable count car un espace = un mot.


           // on affiche la position du mot ainsi que son nombre de caractère
           // long - 1 car sinon il compt aussi le nombre d'éspace.
           console.log("le mot n° " + count + " contient : " + (long - 1) + " lettres");

           // Init de la variable long pour la repasser a 0 après avoir compté un mot.
           long = 0;

       }
       if(count%2 === 0){
           message[i] += "";
           test += message[i];
       }
       if(count%2 !== 0 || count=== 0 || count===1){
           message2[i] += "";
           test2 += message2[i];
       }

       if(long >= 3){
           message[i-3] += "";
           message[i-2] += "";
           message[i-1] += "";
           message[i] += "";
       }
   }
var tru = length(message);
  var nbl = 0;
  var nbm = 2;
  for(i = 0; i< tru; i++){
      nbl++;
      if(message[i] === " "){
          nbl = 0;
      }
      if(nbl > 3){
          nbl = 0;
      }else if(nbl <= 3){
          test3 += message[i];
}
  }
   // affichage du nombre de mot total.
   console.log("il y a " + count + " mots dans la phrase : " + message);
   console.log(test);
   console.log(test2);

    var div = document.getElementById("exo5");
    var resultatDeLExo = test3;
    var texte = document.createTextNode(resultatDeLExo);
    div.appendChild(texte);
}
