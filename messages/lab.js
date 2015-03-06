/*
 * Ayal Pierce
 * Tufts Comp 20: Web Programmign
 * Spring 2015
 * Lab 6: JSON
*/

function parse(){
	request = new XMLHttpRequest();

	request.onreadystatechange = parseData;	

	request.open("GET", "http://messagehub.herokuapp.com/messages.json", true);

	request.send();
	
}

function parseData(){
	if(request.readyState == 4){
		messagesDiv = document.getElementById("messages");
		converted = JSON.parse(request.responseText);
		for (i = 0; i < converted.length; i++){
			messagesDiv.innerHTML += "<p>" + 
					converted[i]['content'] + " ~" +
					converted[i]['username'] + "</p>";
		}	
	}
}
