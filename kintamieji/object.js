/*
OBJECT - objektas
*/

console.clear();

// vartotojas: vardas, amzius, ar vedes

// key: value

const jonas = {
    isMarried: true,
    age: 99,
    name: 'Jonas',
};

console.log(jonas);
console.log(jonas['name'], jonas.name);
console.log(jonas['age'], jonas.age);
console.log(jonas['isMarried'], jonas.isMarried);

jonas.age++;
console.log(jonas);