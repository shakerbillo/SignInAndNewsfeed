var database = [
{
	username: "agyei",
	password: "dontmention"
},

{
	username: "shaker",
	password: "123444"
},

{
	username: "emma",
	password: "123334"
},

];


var newsFeed = [

	{
		username: "Shaker",
		timeline: "Java is Great!"
	},

	{
		username: "Emmanuel",
		timeline: "JavaScript is so cool"
	},

	{
		username: "Nana",
		timeline: "CR7 is the best!"
	},

	{
		username: "EmmanuelG",
		timeline: "Lebron James is a cheatcode!"
	},
];

function isUserValid(username, password){
	for(var i=0; i < database.length; i++){
	if(database[i].username === username &&
		database[i].password === password){
		return true;
}

}
		return false;

}

function signIn(username, password) {
	if(isUserValid(username, password)){
		console.log(newsFeed);
	}else{
		alert("Sorry, wrong username and password!");
	}
	}


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);