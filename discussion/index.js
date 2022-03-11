// Repetition Control Structures.
//＼(￣▽￣)／

let count = 0;

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
 } 