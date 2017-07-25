document.getElementById("navbar-toggle").onclick = function(){
	var body = document.getElementById("navbar-body");	
	if(body.className === "navbar-body"){
		body.className += " responsive";
	}
	else{
		body.className = "navbar-body";
	}
}       

document.getElementById("dropdown").onclick = function(){
	var body = document.getElementById("nav-dropdown-content");
	if(body.className === "nav-dropdown-content"){
		body.className += " responsive";
	}
	else{
		body.className = "nav-dropdown-content";
	}
}    