

function switchBGPattern() {
	var n=document.bgpattern.list.selectedIndex;
	var bgPatternFile = document.getElementsByTagName("option")[n].value;
	document.body.style.backgroundImage="url(" + bgPatternFile + ")";
}