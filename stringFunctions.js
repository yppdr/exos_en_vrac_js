// initialisation de la fonction nommée "lenght" avec argu "chaine"
function length(chaine){
    // initialisation de la variable "longeur" à 0
       var longueur = 0;
    // boucle infinie tant que "vrai"
       while(true){
    // condition si l'index est différent de "undefinied", il s'incrémente
           if(chaine[longueur] !== undefined){
               longueur ++;
    // condition de sortie
           }else{
               break;
           }
    // retour de la valeur après incrémentation
       }
       return longueur;
    }

// HOW TU USE 
//var message = "Je suis un long text :D";
//var longueur = length(message);