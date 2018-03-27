function exercice02(){
var message = "bonjour à tous!";
var longueur = message.length;
var i = longueur;
var espace = "";
var o = "";
var indexO = "";
for (i = 0 ; i < longueur; i++){
    if(message[i] ===  " "){
        espace++;
       
    }
    if(message[i] ===  "o"){
        o++;
        indexO += i + ".";
    }
}

    console.log("il  y a : " + espace + " espaces");
    console.log("il y a : " + o + " o");
    console.log(indexO);
}