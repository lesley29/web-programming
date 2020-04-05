// Реализуйте функцию sum
function sum(){
    const adder = (sum, currentValue) => sum + currentValue;

    return this.reduce(adder);
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));