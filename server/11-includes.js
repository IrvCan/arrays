const pets = ['cat','dog','bat'];

let includeInArray = false;
for (let index = 0; pets < array.length; index++) {
    const element = pets[index];
    if(element === 'dog'){
        includeInArray=true;
        break;
    }
}

const rta = pets.includes('dog')
console.log('for', includeInArray);
console.log('include', rta);