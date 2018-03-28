

/*var div = document.getElementById("exoXX");
var resultatDeLExo = "texte qui va bien";
var texte = document.createTextNode(resultatDeLExo);
div.appendChild(texte);*/


// appel fonction longueur
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
    
    function toUpperCase(char) {
      var tableau =
              [
                  ["a","A"],
                  ["b","B"],
                  ["c","C"],
                  ["d","D"],
                  ["e","E"],
                  ["f","F"],
                  ["g","G"],
                  ["h","H"],
                  ["i","I"],
                  ["j","J"],
                  ["k","K"],
                  ["l","L"],
                  ["m","M"],
                  ["n","N"],
                  ["o","O"],
                  ["p","P"],
                  ["q","Q"],
                  ["r","R"],
                  ["s","S"],
                  ["t","T"],
                  ["u","U"],
                  ["v","V"],
                  ["w","W"],
                  ["x","X"],
                  ["y","Y"],
                  ["z","Z"]
              ];
      for (var j = 0; j < 2; j++)
      {
          for (var i = 0; i < 26; i++)
          {
              if (char === tableau[i][j])
              {
                  return tableau[i][1];
              }
          }
      }
    }
    
function voyelleSuppr(char){
    var voyelle = ["a", "A","e", "E","i", "I", "o", "O", "u", "U"];
    var ahah = "bitch";
    for(var i = 0 ; i < length(voyelle) ; i++){
        if(char === voyelle[i]){
            return ahah;
        }
    }
    
}
    