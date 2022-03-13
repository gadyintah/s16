// Repetition Control Structures.
//＼(￣▽￣)／

/*let count = 0;

while(count < 5){
	++count;
	console.log("While: " + count);
}

count = 1;

do{
	console.log("Do-While: " + count);
	++count;
}
while(count <= 5);

let firstNumber = Number(prompt("BIGAY MO NUMERO MO!"));
console.log("Nagbigay ng Numero");

do{
	console.log("Do While: " + firstNumber);
	++firstNumber;
}while(firstNumber < 10);

console.log("For Loop na!");

for(count = 0; count < 5; ++count){
	console.log(count);
}

let anotherNumber = Number(prompt("Bigyan mo ako ng number!"));

for (var i = 1; i <= anotherNumber; i++) {
 	console.log(i);
 } */

console.log("String Iteration");
console.log("Juan".length);

let name = prompt("What is your name: ");

for(var i = 0; i < name.length; i++){
	if(
		name[i].toLowerCase() == 'a' ||
		name[i].toLowerCase() == 'e' ||
		name[i].toLowerCase() == 'i' ||
		name[i].toLowerCase() == 'o' ||
		name[i].toLowerCase() == 'u'
	){
		console.log("Vowels" + name[i]);
	}else{
		console.log(name[i]);
	}
}

/*
	Continue and Break statements
	 - Continue statement allows the code to go to the next iteration of the loop without finishing the execution of all statents in a code block
	 - Break statement is used to terminate the current loop once a match has been found.
*/

for(let count = 0; count <= 20; count++){
	if(count % 2 === 0){
		continue;
	}

	console.log("Continue and Break: " + count);

	if(count > 10) {
		break;
	}
}
