//extraction des mots de la chaine
//stockage dans un tableau de string
// retourne le message correspondant au resultat de l'exo
function exercice05(){
		// supprimez les variables inutiles
	var phrase = "ceci va la et bas";
	var messageDeRetour = "";
	var listeDeMots = [];
	var whiteSpace = " ";
	var idx = 0;
	var idxWS = 0;
	var idxWord = 0;
	var wordLength = 0;
	var firstLetter = true;
	var word = "";
	
	

	
	// extraction des mots de la chaine
	
	for(var i = 0 ; i <= length(phrase); i++){		
		if((phrase[i] === whiteSpace)){
			listeDeMots[idx] = word;
			idx ++;
			word = "";			
		}else{
			word += phrase[i];
			if(i === length(phrase)-1){
				listeDeMots[idx] = word;
			}
		}			
		
	}	
	
/* Partie 1 de l'exo : afficher un mot sur deux a partir du second*/
	
	for(var i = 0 ;  i < length(listeDeMots); i++){
		if(i%2 === 0){
			messageDeRetour += listeDeMots[i] + " ";
		}
	}
	
	console.log("Chienne de base : " + phrase);
	console.log("Chienne de base 2 : " + messageDeRetour);
	
	
/* Partie 2 de l'exo : cacher un mot sur deux a partir du second*/
	messageDeRetour = "";
	for(var i = 0 ;  i < length(listeDeMots); i++){
		if(i%2 === 1){
			messageDeRetour += listeDeMots[i] + " ";
		}
	}
	
	console.log("Chienne de base : " + phrase);
	console.log("Chienne de base 2 : " + messageDeRetour);
	
	
/* Partie 4 de l'exo : afficher les mots qui ont un e */

	messageDeRetour = "";
	var isOk = false;
	for(var i = 0 ;  i < length(listeDeMots); i++){
		var mot = listeDeMots[i];
		
		for(var j = 0; j < length(mot); j++){
			if(mot[j] === "e"){
				isOk = true;
				break;
			}
		}
		
		if(isOk){
			messageDeRetour += mot + " ";
			isOk = false;
		}
	}
	
	console.log("Chienne de base : " + phrase);
	console.log("Chienne de base 2 : " + messageDeRetour);
	
	
                var div = document.getElementById("exo5");
    var resultatDeLExo = phrase + " === " + messageDeRetour ;
    var texte = document.createTextNode(resultatDeLExo);
    div.appendChild(texte);

	
	
	
	
	
	
	
	
	
	
	
}