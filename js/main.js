


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
function register() {
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
};

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







