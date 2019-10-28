/* JavaScript

* Author: Olympia Paul
* Date: 4/16/2019


*/
var events = [
	"Igwuruta Food Fest- Saturday from 10am-4pm",
	"Staff Recognition- Feb 27",
	"Kilimanjaro 5th Anniversary- March 10",
	"Chef Recruitment- March 16-19"
];

//upEvents function - call the ordered list events
function upEvents() {
	document.write("<ol>");
	for (var i = 0; i < events.length; i++) {
		document.write("<li>" + events[i] + "</li>");
	}
	document.write("</ol>");
}

function order(a) {
	var name = document.getElementById("name");
	var email = document.getElementById("mail");
	var phone = document.getElementById("phone");
	var age = document.getElementById("age");
	if (name.value && email.value && phone.value && age.value) {
		alert("Thank you for filling your information")
	} else{
		alert("Please fill in all information");
		a.preventDefault()
	} 
}

function myDays (event) {
	alert("The event for today is " + event);
}

var names = [
	"Fried rice",
	"Moin-Moin",
	"Suya",
	"Pepper soup",
	"Egusi soup",
	"Okra Soup",
	"Tomato stew"
];

var descriptions = [
	"Rice made with sweet corn, green beans, mushrooms, carrots, onions, cabbages(Can be customized). With Choice of meat: Fish, Beef, Goat meat, Chicken, Oxtails.",
	"Black-eyed bean pudding with boiled egg, onions, peppers.",
	"Hot spicy meat, ground red pepper, scotch bonnet, onion, tomato.",
	"Hot spicy Meat stock with shrimp(optional). With your choice of side: Catfish, Goat meat, Beef, Fresh fish.",
	"Egusi, assorted meat, spinach, waterleaf, ugwu. With your Choice of side: white rice, pounded yam, Eba(garri), Plantain flour, semovita.",
	"Okra, spinach, shrimp, stock fish, Onion. With your Choice of side: pounded yam, Eba(garri), Plantain flour, semovita.",
	"Tomato puree, Onion, Basil leaves. With your choice of meat: Fish, Goat meat, Beef, Assorted meat, Chicken, Oxtails."
];

var prices = [
	"$8.59",
	"$3.45",
	"$4.59",
	"$5.99",
	"$7.99",
	"$11.74",
	"$10.89"
];

var imageNames = [
	"images/fried-rice",
	"images/moin-moin",
	"images/suya",
	"images/pepper-soup",
	"images/egusi-soup",
	"images/okra-soup",
	"images/tomato-stew"

];

function menu () {
	document.write("<dl>");
	for(var i = 0; i < names.length; i++) {
		document.write("<dt><img src='" + imageNames[i] +".jpg' alt'>" + names[i] + "</dt>");
		document.write("<dd>" + descriptions[i] + "</dd>");
		document.write("<dd>" + prices[i] + "</dd>");
		
	}
}
document.write("</dl>");