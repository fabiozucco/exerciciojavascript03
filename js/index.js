var animal = prompt("Digite um animal:");
animal = animal.toLowerCase();

if (animal === "gato") {
	var animalselected = "Cat";
}else if (animal === "cachorro") {
	var animalselected = "Dog";
}else if (animal === "pássaro") {
	var animalselected = "Bird";
}else if (animal === "sapo") {
	var animalselected = "Frog";
}else if (animal === "leão") {
	var animalselected = "Lion";
}else if (animal === "cavalo") {
	var animalselected = "Horse";
}
if (animalselected === undefined){
	document.body.append("Desculpe, não consegui encontrar esse animal!");
}else {
	document.body.append("This animal in english is " + animalselected)
}