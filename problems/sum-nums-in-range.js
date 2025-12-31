'use strict';

// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

const arr = [
  { equipo: 'primero', goles: 2, jornada: 1 },
  { equipo: 'segundo', goles: 6, jornada: 1 },
  { equipo: 'tercero', goles: 1, jornada: 2 },
  { equipo: 'cuarto', goles: 4, jornada: 2 },
];

const groupedMap = new Map();
for (const el of arr) {
  if (!groupedMap.has(el.jornada)) {
    groupedMap.set(el.jornada, []);
  }
  groupedMap.get(el.jornada).push(el);
}

const arraysPorJornada = groupedMap.values();
