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

// Partie 1 de l'exo : afficher un mot sur deux a partir du second

	for(var i = 0 ;  i < length(listeDeMots); i++){
		if(i%2 === 0){
			messageDeRetour += listeDeMots[i] + " ";
		}
	}
	//Affiche Chaine de base et messageDeRetour (Un mot sur deux !)
	console.log("Chaine de base : " + phrase);
	console.log("Chaine de base 2 : " + messageDeRetour);


/* Partie 2 de l'exo : cacher un mot sur deux a partir du second*/
//Remise a 0 de messageDeRetour
	messageDeRetour = "";
	for(var i = 0 ;  i < length(listeDeMots); i++){
		//Modulo 2 = 1 ca avec message rajoute un " "
		if(i%2 === 1){
			message i + espace
			messageDeRetour += listeDeMots[i] + " ";
		}
	}
	//Affiche Chaine de base et messageDeRetour (Un mot sur deux a partir du second !)
	console.log("Chaine de base : " + phrase);
	console.log("Chaine de base 2 : " + messageDeRetour);


/* Partie 4 de l'exo : afficher les mots qui ont un e */
	//Remise a 0 de messageDeRetour
	messageDeRetour = "";
	//declare ma var isOk a false
	var isOk = false;
	for(var i = 0 ;  i < length(listeDeMots); i++){
		//declare ma var mot avec les id de listeDeMots
		var mot = listeDeMots[i];

		for(var j = 0; j < length(mot); j++){
			// Si le mot contient un "e" alors je passse isOk a true et je break
			if(mot[j] === "e"){
				isOk = true;
				break;
			}
		}
		//si isOk est a true alors j'affiche messageDeRetour avec le mot + un espace
		if(isOk){
			messageDeRetour += mot + " ";
			isOk = false;
		}
	}
		//Affiche Chaine de base et messageDeRetour (Seulement avec les e)
	console.log("Chaine de base : " + phrase);
	console.log("Chaine de base 2 : " + messageDeRetour);


                var div = document.getElementById("exo5");
						    var resultatDeLExo = phrase + " === " + messageDeRetour ;
						    var texte = document.createTextNode(resultatDeLExo);
						    div.appendChild(texte);

}
