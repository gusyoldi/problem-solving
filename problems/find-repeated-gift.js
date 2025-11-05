// Devuelve el primer elemento que aparece más de una vez en el array.
// Definición usada: el elemento con la PRIMERA ocurrencia más temprana que tiene al menos otra ocurrencia después.
// Si no hay repetidos devuelve `undefined`.
function findFirstRepeated(gifts) {
  if (!Array.isArray(gifts)) return undefined
  const counts = new Map()
  for (const g of gifts) {
    counts.set(g, (counts.get(g) || 0) + 1)
  }
  for (const g of gifts) {
    if (counts.get(g) > 1) return g
  }
  return undefined
}

module.exports = findFirstRepeated
