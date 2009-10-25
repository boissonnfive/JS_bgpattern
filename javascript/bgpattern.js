// Ce script permet de récupérer la valeur d'une option dans une balise
// "select" et utilise cette valeur pour changer l'image de fond de la page.
// Pour utiliser ce script, il faut:
// un formulaire avec l'id "bgpattern"
// une liste déroulante (select) avec l'id "list"
// les valeurs des options qui indiquent le chemin de l'image

function switchBGPattern() {
	var n=document.bgpattern.list.selectedIndex;
	var bgPatternFile = document.getElementsByTagName("option")[n].value;
	document.body.style.backgroundImage="url(" + bgPatternFile + ")";
}