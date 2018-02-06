
// This function will change the color of text and background on the html page when colorChange(); is called on the console
function colorChange () {
		document.getElementById("para1").style.color = 'red';
		document.getElementById("para3").style.backgroundColor = 'black';
		document.getElementById("para3").style.color = 'white';
}

// This function will replace words
let toReplaceText = "";
function findMyText(search, replace) {
	if(toReplaceText.length === 0) {
		toReplaceText = document.getElementById("toReplace").innerHTML;
	}
	let match = new RegExp(search, "ig");
	let replaced = "";
	if(search.length == 0) {
		alert("I ain't got time to search for nothing...");
		return;
	}
	else if (replace.length == 0) {
		let boldText = "" + "<span class=\"highlight\">" + search + "</span>";
		replaced = toReplaceText.replace(match, boldText);
	} else {
		replaced = toReplaceText.replace(match, replace);

	}
	document.getElementById("toReplace").innerHTML = replaced;

}


/*

*/

/*
if(replace.length > 0) {
		replaced = toReplaceText.replace(match, replace);
	}
	let boldText = "<span class=\"highlight"> + replaced + "</span>";
	replaced = toReplaceText.replace(match, boldText);

	document.getElementById("toReplace").innerHTML = replaced;
 */