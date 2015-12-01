// javascript goes here

var init = function () { // you may also see this written as function init() { ...

	// your js code goes here
	var results = document.getElementById("results");

	var r = document.createElement("div");
	r.className = "quoteBox";

	var randomSelection = Math.floor(randomQuotes.length*Math.random());
	console.log(randomSelection);

	var p = document.createTextNode(randomQuotes[randomSelection].quote + " - " + randomQuotes[randomSelection].author);
	r.appendChild(p);
	results.appendChild(r);

};

init();