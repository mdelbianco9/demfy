


userdata = [
{
	username: 'marcus',
	password: 'candoit'
},
{
	username: 'john',
	password: 'canalso'
}
]

// this function checks to see if the entered input matches the array data
function login() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
		for (var i = 0; i < userdata.length; i++){
			if (username == userdata[i].username && password == userdata[i].password) {
			alert("Welcome " + username);
			console.log("good job");
			}	else if (username != userdata[i].username && password == userdata[i].password) {
					alert('Wrong Username or Password');
			}	else if (username == userdata[i].username && password != userdata[i].password) {
				alert('Wrong Username or Password');
			} 
		}
};

// This function adds a set of data to the array
// function register() {
// 	var regusername = document.getElementById('regname').value
// 	var regpassword = document.getElementById('regpw').value
// 	// box for new username and password to be added
// 	var newuser = {
// 		username: regusername,
// 		password: regpassword
// 	}
// 	// itterates through the array
// 	for (var i = 0; i < userdata.length; i++) {
// 		// checks to see if username is already taken
// 		if (regusername == userdata[i].username) {
// 			alert('That username is already taken');
// 			return
// 			// check to see if password is long enough
// 		} else if (regpassword.length < 8) {
// 			alert('Your password is too short, make it 8 or more characters');
// 			return
// 		} 

// 	}
// 	console.log(userdata);
// 	alert('You Are Registered! Please log in');
// 	// is suppose to add the new username and pw to the array
// 	userdata.push(newuser);
// };

// // Changes the color of the register username box to green when clicked on
// var x = document.getElementById('regname');
// x.addEventListener('click', function() {
// 	x.style.backgroundColor = "green";
// });

// // Changes the color of the  register password box to green when clicked on
// var y = document.getElementById('regpw');
// y.addEventListener('click', function() {
// 	y.style.backgroundColor = "green";
// });


// This function adds a set of data to the array
// Creates a new page for a form
var registerbtn = document.getElementById('registerbtn');
registerbtn.addEventListener('click', function() {
	var regusername = document.getElementById('regname').value
	var regpassword = document.getElementById('regpw').value
	// box for new username and password to be added
	var newuser = {
		username: regusername,
		password: regpassword
	}
	// itterates through the array
	for (var i = 0; i < userdata.length; i++) {
		// checks to see if username is already taken
		if (regusername == userdata[i].username) {
			alert('That username is already taken');
			return
			// check to see if password is long enough
		} else if (regpassword.length < 8) {
			alert('Your password is too short, make it 8 or more characters');
			return
		} 

	}
	console.log(userdata);
	alert('You Are Registered! Please log in');
	// is suppose to add the new username and pw to the array
	userdata.push(newuser);

	// Hides the opening page box
	document.getElementById("opening").style.display = "none";

	// shows the form div
	document.getElementById("form").style.display = "block";


})
	var racearray = ["human", "earthbeing", "alien", "lizardking", "homo", "fish"];

	// array to store user profiles
	var userarray = [];

	// Function for the submit button to store information and make opening box appear
	submit = document.getElementById('submit');
	submit.addEventListener('click', function() {
		var first = document.getElementById('firstname').value;
		var last = document.getElementById('lastname').value;
		var email = document.getElementById('email').value;
		var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		var male = document.getElementById('male');
		var female = document.getElementById('female');

		// object to store user profile data
		var userobject = {first:"", last:"", email:"", sex:"", race:""};

		// Lets push some stuff to the array
		userobject.first = first;
		userobject.last = last;

		// validates the email and pushes it to the array
		if (email.match(re)) {
			userobject.email = email;
		} else {
			alert("Email Address not valid")
		}
		// checks which se is checked then pushes it to the array
		if (male.checked == true) {
			userobject.sex = "male";
		} else if (female.checked == true) {
			userobject.sex = "female";
		}

		for (i = 0; i < racearray.length; i++) {
			var x = document.getElementById(racearray[i]);
			if (x.checked == true) {
				userobject.race = x.value;
			} 
		}


		// Push the newly created object
		userarray.push(userobject);

		// Makes the opening box apear and takes form box away
		document.getElementById('form').style.display = "none";
		document.getElementById('opening').style.display = "block";
		alert("Thank You for Registering");

	})





























