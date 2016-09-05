/*window.onload = function() {
	alert("hello");
}*/


var fnameField = document.getElementById("fname");
var lnameField = document.getElementById("lname");

// fname onfocus - remove first name when field clicked
fnameField.onfocus = function() {
	if (fnameField.value == "first name") {
		fnameField.value = "";
	}
};

// lname onfocus - remove first name when field clicked
lnameField.onfocus = function() {
	if (lnameField.value == "last name") {
		lnameField.value = "";
	}
};

// fname onblur - reinsert "first name" into field if empty
fname.onblur = function() {
	if (fnameField.value == "") {
		fnameField.value = "first name"
	}
};

// lname onblur - reinsert "last name" into field if empty
lname.onblur = function() {
	if (lnameField.value == "") {
		lnameField.value = "last name";
	}
};

// stop submit if first name or last name value is default
function validateNames() {
    var f;
    var l;
    f = document.getElementById("fname").value;
    l = document.getElementById("lname").value;
    if (f == "first name" || l == "last name") {
        alert("Please complete your first name and last name.");
        return false;
    };
};