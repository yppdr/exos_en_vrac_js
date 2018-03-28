//NE PLUS USE PLZ !

function exercice05() {

////extraction des mots de la chaine, stockage dans un tableau de string
//retourne le message correspondant au résultat de l'exo (messageDeRetour)
    var message = "ceci est un texte assez long";
    var messageDeRetour = "";
    var listeDeMots = [];
    var whiteSpace = " ";
    var idx = 0;
    var idxWS = 0;
    var idxWord = 0;
    var wordLength = 0;
    var firstLetter = true;
    var word = "";
    var mescouilles = "";
    var messageDeRetour = "";
    var voyelle = [];
    var retourVoy = "";
//extraction des mots de la chaîne

    for (var i = 0; i < length(message); i++) {
//si la boucle tombe sur un espace, j'ajoute le contenu de la variable word dans un index de mon tableau
//puis je vide la variable pour la réutiliser
        if (message[i] === whiteSpace) {//si le char à l'index i est un espace
            listeDeMots[idx] = word;
            idx++;
            word = "";

        } else {
            word += message[i];
            if (i === length(message) - 1) {//si i est égal au dernier index de la chaine
                listeDeMots[idx] = word;
            }
        }
    }
    /* partie 1 de l'exo : afficher un mot sur deux à partir du second */

    for (var i = 0; i < length(listeDeMots); i++) {
        if (i % 2 === 0) {
            messageDeRetour += listeDeMots[i] + " ";
        }
    }
    console.log(listeDeMots);
    console.log(messageDeRetour);

//partie 2 de l'exo : supprimer un mot sur deux à partir du second*/
    messageDeRetour = "";
    for (var i = 0; i < length(listeDeMots); i++) {
        if (i % 2 === 1) {
            messageDeRetour += listeDeMots[i] + " ";
        }
    }

    // PArtie 3

    messageDeRetour = "";
    for (var i = 0; i < length(listeDeMots); i++) {
        if (length(listeDeMots) <= 3) {
            messageDeRetour += listeDeMots[i] + " ";
        }
    }

    // Part 4  affiche les e
    var isOk = false;
    for (var i = 0; i < length(listeDeMots); i++) {
         var mot = listeDeMots[i];

            for (var j = 0; j <  length(mot); j++) {
                if(mot[j] === "e"){
                    isOk = true;
                    break;
                }

            }

            if (isOk) {
            messageDeRetour += mot + " ";
        }
    }



// Partie 5


//    for (var i = 0; i < length(message); i++) {
//        if (message[i] === whiteSpace) {//si le char à l'index i est un espace
//            voyelle[idx] = mescouilles;
//            idx++;
//            mescouilles = "";
//
//        } if (voyelleSuppr(message[i])) {
//            mescouilles = "";
//        } else {
//            mescouilles += message[i];
//            if (i === length(message) - 1) {//si i est égal au dernier index de la chaine
//                voyelle[idx] = mescouilles;
//            }
//        }
//    }

    console.log(retourVoy + "check");


    console.log(" lalalaal : " + messageDeRetour);

    var div = document.getElementById("exo5");
    var resultatDeLExo = messageDeRetour;
    var texte = document.createTextNode(resultatDeLExo);
    div.appendChild(texte);
}
