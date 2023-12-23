const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements]; 
//split operation (...) 
//sirve para clonar un arrays 
//sin alterar referencia de memoria (el original)
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

const rta = elements.concat(othersElements);
const rta2 = [...elements, ...othersElements];
const rta3 = [...elements, ...'random']//uno caracter por caracter

console.log('for', newArray);
console.log('concat', rta);
console.log('...', rta2);
console.log('rta3', rta3);

const rta4 = elements.push(...othersElements)
console.log('rta4', rta4);