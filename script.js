


/* FONCTIONNALITÉ 1 */


//On initialise une variable qui récupère le footer du code HTML
//On créé un compteur de cliques à afficher
//On associe le compteur et l'événement click

let footer = document.getElementsByTagName("footer")[0];

let clickCounter = 1;

footer.addEventListener("click", function() {
    console.log("**clic sur le footer**");
    console.log("clic numéro " + clickCounter);
    ++clickCounter
});









/* FONCTIONNALITÉ 2 */


//On initialise une variable qui récupère le bouton du 'hamburger menu'
//On initialise une variable qui récupère la 'navbarHeader'
//On créé une fonction effectuant un 'toggle' sur le 'menuButton'

let menuButton = document.getElementsByClassName("navbar-toggler")[0];

let navbarHeader = document.getElementById("navbarHeader");

menuButton.addEventListener("click", function() {
	console.log("**clic sur le menu**");
    navbarHeader.classList.toggle("collapse");
});









/* FONCTIONNALITÉ 3 */


//On initialise une variable qui récupère la première carte
//On initialise une variable qui récupère le bouton Edit de la première carte
//On créé une fonction associant l'event 'click' au changement de style (allez seulement)

let firstCard = document.getElementsByClassName("card")[0];

let editButton1 = firstCard.getElementsByClassName("btn-outline-secondary")[0];

editButton1.addEventListener("click", function() {
	console.log("**clic sur Edit du Card 1**");
	console.log("changement du texte en rouge");
    firstCard.style ="color: red";
});









/* FONCTIONNALITÉ 4 */


//On initialise une variable qui récupère la deuxième carte
//On initialise une variable qui récupère le bouton Edit de la deuxième carte
//On créé une fonction associant l'event 'click' au changement de style (allez et retour)

let secondCard = document.getElementsByClassName("card")[1];

let editButton2 = secondCard.getElementsByClassName("btn-outline-secondary")[0];

editButton2.addEventListener("click", function() {
    if (secondCard.style.color === 'green'){ 
		secondCard.style.color = '' ; 
		console.log("**clic sur Edit du Card 2**");
		console.log("changement du texte en noir");
	}else {
		secondCard.style.color = 'green';
		console.log("**clic sur Edit du Card 2**");
		console.log("changement du texte en vert");
	}
});









/* FONCTIONNALITÉ 5 */


//On initialise une variable qui récupère la navbar
//On initialise une variable qui récupère le tag link (bootstrap)
//On créé une fonction associant l'event 'dblclick' à la désactivation du tag link

let navbar = document.getElementsByClassName("navbar")[0];

let bootstrap = document.getElementsByTagName("link")[0];

navbar.addEventListener("dblclick", function() {

    if (bootstrap.disabled === false){ 
		bootstrap.disabled = true ; 
		console.log("**double-clic sur la navbar**");
		console.log("désactivation de Bootstrap");
	}else {
		bootstrap.disabled = false;
		console.log("**double-clic sur la navbar**");
		console.log("activation de Bootstrap");
	}
});









/* FONCTIONNALITÉ 6 */


//On initialise une variable qui récupère un array de cartes
//On initialise une variable qui effectue une boucle sur l'ensemble des cartes du array

//Dans cette boucle on définit la carte en train d'être analysée
//Dans cette boucle on récupère le bouton view de la carte
//Dans cette boucle on créé une fonction associant l'event 'mouseover' à la modification de la carte en question

let cards = document.getElementsByClassName("card");

for (let n=0 ; n<cards.length ; n++) {
    
    let card = cards[n];

    let viewButton = card.getElementsByClassName("btn-success")[0];
    
    viewButton.addEventListener("mouseover", function() {

    	console.log(`**passage du pointeur sur le bouton view de la carte ${n}**`);

        let cardText = card.getElementsByClassName("card-text")[0];
	    cardText.classList.toggle("collapse");

	    let cardImg = card.getElementsByClassName("card-img-top")[0];
	    if (cardImg.style.width === "20%") {
        	cardImg.style.width = "";
        	console.log(`affichage normal de la carte`);
    	} else {
        	cardImg.style.width = "20%";
        	console.log(`affichage réduit de la carte`);
    	}

    });
}









/* FONCTIONNALITÉ 7 */

//On initialise une variable qui récupère le bouton flèche droite
//On initialise une variable qui récupère les colonnes de cartes
//On créé une fonction associant l'event 'click' à la rotation des cartes

let rightArrowButton = document.getElementsByClassName("jumbotron")[0].getElementsByClassName("btn-secondary")[0];

let column = document.getElementsByClassName("col-md-4");

rightArrowButton.addEventListener("click", function() {
    let parent = column[0].parentNode;
    parent.insertBefore(column[column.length - 1], column[0]);
    console.log("**clic sur la flèche grise**");
    console.log("rotation des cartes dans le sens horaire");
});








/* FONCTIONNALITÉ 8 */

//On initialise une variable qui récupère le bouton flèche gauche
//On créé une fonction associant l'event 'click' à la rotation des cartes

let leftArrowButton = document.getElementsByClassName("jumbotron")[0].getElementsByClassName("btn-primary")[0];

leftArrowButton.addEventListener("click", function(button) {
    button.preventDefault();
    let parent = column[0].parentNode;
    parent.appendChild(column[0]);
    console.log("**clic sur la flèche bleue**");
    console.log("rotation des cartes dans le sens anti-horaire");
});









/* FONCTIONNALITÉ 9 */

//On initialise une variable qui récupère le logo
//On initialise une variable qui récupère le body
//On créé une fonction définissant les différents keypress
//Ajout de l'évènement keypress sur le logo

let logo = document.getElementsByClassName("navbar-brand")[0];

let body = document.body;

logo.addEventListener('keypress', function(e){

	switch (e.key) {
	    case "a":
	        body.classList = "";
	        body.classList.add("col-4");
	        console.log("**appuie sur la touche A**");
    		console.log("affichage à gauche de l'écran");
	        break;
	    case "y":
	        body.classList = "";
	        body.classList.add("col-4");
	        body.classList.add("offset-4");
	        console.log("**appuie sur la touche Y**");
    		console.log("affichage au milieu de l'écran");
	        break;
	    case "p":
	        body.classList = "";
	        body.classList.add("col-4");
	        body.classList.add("offset-8");
	        console.log("**appuie sur la touche P**");
    		console.log("affichage à droite de l'écran");
	        break;
	    case "b":
	        body.classList = "";
	        console.log("**appuie sur la touche B**");
    		console.log("affichage normal de l'écran");
	        break;
  	}

});