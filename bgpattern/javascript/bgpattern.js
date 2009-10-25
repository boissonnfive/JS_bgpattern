function toggleActiveBGPattern() {
	var n=document.bgpattern.liste.selectedIndex;
	//alert("Numéro sélectionné: "+n);
	switch (n)
	{
		case 0:  document.body.style.backgroundImage="url(images/pattern_036.gif)"; break;
		case 1:  document.body.style.backgroundImage="url(images/pattern_084.gif)"; break;
		case 2:  document.body.style.backgroundImage="url(images/pattern_084.png)"; break;
		case 3:  document.body.style.backgroundImage="url(images/pattern_101.gif)"; break;
		case 4:  document.body.style.backgroundImage="url(images/pattern_105.gif)"; break;
		case 5:  document.body.style.backgroundImage="url(images/pattern_138.gif)"; break;
		case 6:  document.body.style.backgroundImage="url(images/pattern_155.gif)"; break;
		case 7:  document.body.style.backgroundImage="url(images/pattern_156.gif)"; break;
		case 8:  document.body.style.backgroundImage="url(images/pattern_bb02.png)"; break;
		case 9:  document.body.style.backgroundImage="url(images/pattern_bb03.png)"; break;
		case 10: document.body.style.backgroundImage="url(images/pattern_bb04.png)"; break;
		case 11: document.body.style.backgroundImage="url(images/pattern_bb05.png)"; break;
		case 12: document.body.style.backgroundImage="url(images/pattern_bb06.png)"; break;
		case 13: document.body.style.backgroundImage="url(images/pattern_bb07.png)"; break;
		case 14: document.body.style.backgroundImage="url(images/pattern_bb08.png)"; break;
		case 15: document.body.style.backgroundImage="url(images/pattern_bb09.png)"; break;
		case 16: document.body.style.backgroundImage="url(images/pattern_bb10.png)"; break;
		case 17: document.body.style.backgroundImage="url(images/pattern_bb11.png)"; break;
		case 18: document.body.style.backgroundImage="url(images/pattern_bb12.png)"; break;
		case 19: document.body.style.backgroundImage="url(images/pattern_bb13.png)"; break;
	}
}

// (function() { 
//   function toggleActiveBGPattern(element, classe) { 
//     if (element.className) { 
//       element.className += " "; 
//     } 
//     element.className += classe; 
//   }
// 
//  	function toggleActiveBGPattern(element, classe) { 
//     if (element.className) { 
//       element.className += " "; 
//     } 
//     element.className += classe; 
//   }
// 
//   function init() { 
//     ajouterClasse(document.body, nouvelleClasse); 
//   } 
//   function addLoadListener(func) { 
//     if (window.addEventListener) { 
//       window.addEventListener("load", func, false); 
//     } else if (document.addEventListener) { 
//       document.addEventListener("load", func, false); 
//     } else if (window.attachEvent) { 
//       window.attachEvent("onload", func); 
//     } 
//   } 
//   //var nouvelleClasse = "jsActif"; 
//   if (document.getElementById && document.createTextNode) { 
//     addLoadListener(init); 
//   } 
// })();