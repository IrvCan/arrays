const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
const rta = elements.join('--');
console.log('for',separator);
console.log('rta',rta);

const title = 'cusro de manipulacion de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);