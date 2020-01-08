
// declare globals to hold all the links and all the panel elements
var navLinks;
var navPages;

window.onload=function() {
    // when the page loads, grab the li elements
    navLinks = document.getElementById("links").getElementsByTagName("li");
	// Now get all the tab panel container divs
	navPages = document.getElementById("panels").getElementsByTagName("div");
	
	// activate the _first_ one
    displayPanel(navLinks[0]);
   
    // attach event listener to links using onclick and onfocus, fire the displayPanel function, return false to disable the link
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].onclick = function() { 
			displayPanel(this); 
			return false;
		}
        navLinks[i].onfocus = function() { 
			displayPanel(this); 
			return false;
		}
    }
}

function displayPanel(tabToActivate) {
    // go through all the <li> elements
    for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i] == tabToActivate) {
			// if it's the one to activate, change its class
            navLinks[i].classList.add("active");
			// and display the corresponding panel
			navPages[i].style.display = "block";
        } else {
			// remove the active class on the link
        	navLinks[i].classList.remove("active");
			// hide the panel
			navPages[i].style.display = "none";
        }
	}
}