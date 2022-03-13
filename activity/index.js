// ヽ(｀⌣´) / 

let number = prompt("Enter Number");
let longWord = "supercalifragilisticexpialidocious";
let vowels = "aeiou"
let consonant = "";
let j, k = 0;

console.log(number);
for(var i = number; i > 0; i--){
	if(i <= 50){
		break;
	}
	else if(i % 10 == 0){
		console.log("ヽ(｀⌣´) / - skip");
		continue;
	}
	else if(i % 5 == 0){
		console.log("number = " + i);
	}
}

for(j = 0; j < longWord.length; j++){
	for(k = 0; k < vowels.length; k++){
		if(vowels[k] == longWord[j]){
			k=-1;
			j++;
		}
	}
	consonant += longWord[j];
}

console.log(consonant);