console.clear();

const tekstas0 = 'aaabbb';
const tekstas1 = 'vasara';
const tekstas2 = 'pavasaris';
const tekstas3 = 'labas rytas';
const tekstas4 = 'pipiriukai';

// kori raide tekste pasikartoja dazniausiai?

const abc = {};

for (const letter of tekstas3) {
    if (abc[letter]) {
        abc[letter] += 1;
    } else {
        abc[letter] = 1;
    }
}

let maxLetter = '';
let maxCount = 0;

for (const letter in abc) {
    if (abc[letter] > maxCount) {
        maxLetter = letter;
        maxCount = abc[letter];
    }
}

console.log('>>>', maxLetter, maxCount);