'use strict';

const gifts1 = ['book', 'game', 'socks', 'book', 'puzzle', 'game'];

const indexedGifts = {
  0: 'book',
  1: 'game',
  2: 'socks',
  3: 'book',
  4: 'puzzle',
  5: 'game',
};

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
];

const inventory2 = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' },
];

const map = new Map();

for (const item of inventory) {
  const { name, quantity, category } = item;

  const currentCategory = map.get(category) || {};
  //                     { doll: 5, car: 5 } || {}

  currentCategory[name] = (currentCategory[name] || 0) + quantity;
  // currentCategory[name] ===> { doll: 5 } ==> 5.

  map.set(category, currentCategory);
}

function organizeInventory(inventory) {
  return inventory.reduce((acc, value) => {
    const { name, quantity, category } = value;

    if (!acc[category]) {
      acc[category] = {};
    }

    acc[category][name] = (acc[category][name] || 0) + quantity;

    return acc;
  }, {});
}

function createXmasTree(height, ornament) {
  const separator = '_';

  let tree = 1;
  for (let i = 1; i < height; i++) {
    tree += 2;
  }

  const maxRowLength = tree;
  const side = 2 * height - 1;
}

// console.log('Final:', createXmasTree(5, '*')); // 5 rows, 9@, 2#

function manufacture(gifts, materials) {
  let newArray = [];
  // recorro gifts
  for (let gift of gifts) {
    // dentro recorro gift

    for (let i = 0; i < gift.length; i++) {
      // si !materials.includes(char), siguiente word.
      console.log(!materials.includes(gift[i]));
      if (!materials.includes(gift[i])) {
        break;
      } else {
        // si materials includes todas las letras de gift, push gift to newArray.
        i === gift.length - 1 && newArray.push(gift);
      }
    }
  }

  return newArray;
}

//Que aprendi?
// TENES UN STRING Y NO TE SIRVE? CONVERTILO A ARRAY PARA TENER OTROS METODOS.
// SE PUEDE HACER LA CONVERSION CON array.split() || [...array].
// SEPARAR EL PROBLEMA EN LOS 3 CASOS EXISTENTES FUÉ CLAVE.

// const invertida = palabra.split("").reverse().join(""); // OPCION 1
const invertir = (str) => [...str].reverse().join(''); // OPCION CHETA
const removeParentesis = (str) => str.replaceAll(')', '').replaceAll('(', '');
function decode(message) {
  // Cuando tengo un parentesis dentro del otro, primero se invierte el parentesis de adentro y luego el que abarca todo.

  const words = message.split(' ');

  // Hay 3 casos:
  let rigthMessage = [];
  for (let word of words) {
    //si tiene parentesis hacemos algo.
    if (word.includes('(')) {
      const isNested = [...word].filter((char) => char === '(').length > 1;
      if (isNested) {
        // 3. la palabra tiene dos pares de parentesis.
        // Aislar la palabra anidada, invertirla y almacenarla.
        const nestedOpenParentesis = (char) => char === '(';
        const nestedCloseParentesis = (char) => char === ')';
        const nestedWord = word.slice(
          [...word].findIndex(nestedOpenParentesis),
          [...word].findLastIndex(nestedCloseParentesis) + 1
        );

        rigthMessage.push(`${nestedWord}`);
      } else {
        // 2. la palabra tiene un par de parentesis.
        rigthMessage.push(removeParentesis(invertir(word)));
      }
    } else {
      // 1. la palabra no tiene parentesis.
      rigthMessage.push(word);
    }
  }

  return rigthMessage;
}

// const a = decode('hola (odnum)');
// console.log(a); // hola mundo

// const c = decode('sa(u(cla)atn)s');
// console.log(c); // santaclaus

// function squareDigits(num) {
//   const string = String(num);

//   let result = [];
//   for (let i = 0; i < string.length; i++) {
//     result[i] = string[i] ** 2;
//   }

//   return Number(result.join(''));
// }

// console.log(squareDigits(3212)); //9414

// function reverseWords(str) {
//   let result = [];
//   let iterable = str.split(' ');

//   for (let i = 0; i < iterable.length; i++) {
//     let reversedWord = [...iterable[i]].reverse().join('');

//     result[i] = reversedWord;
//   }

//   return result.join(' ');
// }

// console.log(reverseWords('This is an example!')); //sihT si na !elpmaxe

// function order(words) {
//   if (!words.length) return '';

//   const arrayOfWords = words.split(' ');
//   console.log(arrayOfWords);
//   let response = [];

//   for (let i = 0; i < arrayOfWords.length; i++) {
//     let order = [...arrayOfWords[i]].find((char) => char.match(/[1-9]/));
//     response[order] = arrayOfWords[i];
//   }

//   return response.join(' ');
// }

// console.log(order('is2 Thi1s T4est 3a'));

function findUniq(arr) {
  const [a, b, c] = arr;

  const common = a === b || a === c ? a : b; // si a !== b ==> b === c

  return arr.find((n) => n !== common);
}

// console.log(findUniq([1, 3, 7, 2, 1, 1, 3, 7])); // 2

// function nbYear(p0, percent, aug, p) {
//   let currentPopulation = p0;
//   let yearsCounter = 0;

//   while (currentPopulation < p) {
//     currentPopulation += Math.trunc((currentPopulation * percent) / 100 + aug);
//     yearsCounter++;
//   }

//   return yearsCounter;
// }

// OPCION FUNCION RECURSIVA
// Solo con un if y se llama a si misma! 🤯
function nbYear(p0, percent, aug, p, years = 0) {
  if (p0 < p) {
    return nbYear(
      p0 + Math.floor((p0 * percent) / 100) + aug,
      percent,
      aug,
      p,
      ++years
    );
  }
  return years;
}

const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 },
];

function manufactureGifts(giftsToProduce) {
  let response = [];

  for (const { toy, quantity } of giftsToProduce) {
    if (quantity < 1) continue;

    response = response.concat(Array(quantity).fill(toy));
    // response.push(...Array(quantity).fill(toy)). OTRA FORMA
  }
  return response;
}

const result1 = manufactureGifts(production1);

function longestConsec(strarr, k) {
  const n = strarr.length;
  if (n < 1 || k > n || k <= 0) return null;

  let prevWord = '';
  let largestWords = [];

  for (let i = 0; i < strarr.length; i++) {
    if (i < 1) {
      prevWord = strarr[i];
      continue;
    } else {
      largestWords.push(prevWord + strarr[i]);
      prevWord = strarr[i];
    }
  }

  let largest = '';
  let response = [];
  for (let i = 0; i < largestWords.length; i++) {
    if (largestWords[i].length >= largest) {
      largest;
    }
  }

  return response[0];
}

// console.log(
//   longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2)
// );

function drawGift(size, symbol) {
  if (size < 2) return '';

  // usaria repeat para topAndBottomLines.
  const topAndBottomLines = symbol.repeat(size);

  // usaria fill y padStart y padEnd para las lineas del medio.
  let middleLines = Array(size).fill(' ');
  middleLines.fill(symbol, middleLines.length - 1);
  middleLines.fill(symbol, 0, 1);
  middleLines = middleLines.join('');

  const body = `${middleLines}\n`.repeat(size);

  return `/*\n${topAndBottomLines} \n${body}${topAndBottomLines} \n*/`;
}

const g1 = drawGift(4, '*');
// console.log(g1);
/*
 ****
 *  *
 *  *
 ****
 */

function decodeSantaPin(code) {
  const arrOfEncryptedDigits = code
    .replaceAll('[', '')
    .replaceAll(']', ',')
    .split(',');

  arrOfEncryptedDigits.pop();

  if (arrOfEncryptedDigits.length < 4) return null;

  let response = [];
  for (let i = 0; i < arrOfEncryptedDigits.length; i++) {
    let currDigit = arrOfEncryptedDigits[i].split('');

    if (currDigit[0] === '<') {
      response.push(response.at(-1)); // a chequear que funca
    } else {
      let prev;
      let acc;
      for (let u = 0; u < currDigit.length; u++) {
        if (u === 0) {
          acc = currDigit[u] * 1;
        } else {
          if (currDigit[u] === '+') {
            acc = acc + 1;
            if (acc > 9) {
              acc = 0;
              continue;
            }
          } else {
            acc = acc - 1;
            if (acc < 0) {
              acc = 9;
              continue;
            }
          }
        }
      }
      response.push(acc);
    }
  }
  return response.join('');
}

console.log(decodeSantaPin('[1++][2-][3+][<]'));

console.log(decodeSantaPin('[9+][0-][4][<]')); // "0944"

console.log(decodeSantaPin('[1+][2-]')); // null
