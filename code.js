Bot.send("Welcome to Vote Eligibility Bot");
Bot.send("Please enter your age ? ");
async function respond(inputText) {
	var age = inputText;// Explain variable
	console.log("Age entered by user : " + inputText);
	if (inputText >= 18) {// explain if condition using some example
		Bot.send("You are eligible to vote ! ");
	}
	else {// explain else condition
		Bot.send("You are not eligible to vote ! ");
	}
}