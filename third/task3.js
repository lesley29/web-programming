  
const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20
};

// Реализуйте функцию isEquivalent
function isEquivalent(obj1, obj2){
	const firstObjectProperties = Object.entries(obj1);
	const secondObjectProperties = Object.entries(obj2);

	if (firstObjectProperties.length != secondObjectProperties.length)
		return false;

	return !zip(firstObjectProperties, secondObjectProperties).some(pair => ArePropertiesDifferent(...pair));
}

function ArePropertiesDifferent(prop1, prop2){
	const first = {};
	const second = {};
	
	[first.name, first.value] = prop1;
	[second.name, second.value] = prop2;

	if (first.name != second.name){
		return true;
	}

	if (first.value != second.value){
		return true;
	}

	return false;
}

function zip(firstArray, secondArray){
	return firstArray.map((value, index) => [value, secondArray[index]]);
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false