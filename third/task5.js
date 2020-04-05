function createCounter() {
    var value = 0;
    return function(){
        return ++value;
    }
}

const count = createCounter();
const count2 = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5