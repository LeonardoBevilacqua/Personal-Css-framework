document.getElementById("navbar-toggle").onclick = function(){
	var body = document.getElementById("navbar-body");
	if(body.className === "navbar-body"){
		body.className += " responsive";
	}
	else{
		body.className = "navbar-body";
	}
}       