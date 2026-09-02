# Repositorio de práctica de katas

Este repo existe para practicar katas con TDD. El usuario trae el enunciado y resuelve;
el agente prepara el terreno y escribe los tests.

## Flujo: nueva kata

Se dispara cuando el usuario pega un enunciado de kata (con o sin la frase "quiero hacer
esta kata con TDD").

1. **Derivar el nombre** en inglés y kebab-case a partir del enunciado. Por ejemplo,
   "copy some paperwork" -> `copy-paperwork`.

2. **Crear tres archivos** en `katas/<name>/`:

   | Archivo            | Contenido                                                                |
   | ------------------ | ------------------------------------------------------------------------ |
   | `README.md`        | El enunciado tal cual lo pasó el usuario, los ejemplos y la firma esperada |
   | `<name>.test.ts`   | Los tests                                                                 |
   | `<name>.ts`        | **Vacío**. Lo completa el usuario                                         |

3. **Correr `npx vitest run katas/<name>`** y mostrar el rojo. El fallo esperado es
   `TypeError: <fn> is not a function`, porque el archivo de solución está vacío.

4. **Parar ahí.** No seguir hasta que el usuario pida ayuda explícitamente.

## Reglas para el agente

- **Nunca escribir la implementación.** Ni la solución, ni un stub, ni una firma de
  función comentada. El archivo `<name>.ts` se crea vacío. Es lo único que hace que la
  práctica sirva.
- Si el usuario pide ayuda con una kata en curso, dar pistas antes que código.
- No agregar tests nuevos a una kata ya empezada salvo que el usuario lo pida.

## Estilo de los tests

- Importar explícitamente desde `vitest`: no hay globals configurados.
- Importar la solución con la extensión: `from './copy-paperwork.ts'`.
- Un `describe` por función exportada, nombrado con el nombre de la función.
- Un `it` por comportamiento, y un solo `expect` por `it` cuando se pueda.
- Descripciones en español, en presente y describiendo el comportamiento observable,
  no la implementación: "devuelve 0 cuando la cantidad de páginas es negativa".
- Orden: primero los casos del enunciado, después los bordes (negativos, cero, vacío,
  colección de un solo elemento).
- Sin helpers, loops ni `test.each`. Los tests son documentación: se leen de arriba a
  abajo con los valores a la vista.

`katas/copy-paperwork/` es la kata de referencia y la única que viene resuelta.

## Comandos

| Comando               | Para qué                                        |
| --------------------- | ----------------------------------------------- |
| `npm test`            | Vitest en watch: el ciclo rojo-verde             |
| `npm run test:run`    | Una sola pasada                                  |
| `npm run typecheck`   | `tsc --noEmit`                                   |
| `npm run dojo`        | `dojo.ts` en watch, para probar ideas sueltas    |

## Convenciones del repo

- Nombres de archivos, carpetas y exports en inglés y kebab-case. El contenido para leer
  (READMEs, descripciones de tests) va en español.
- TypeScript se ejecuta sin build: Node 24 y Vite hacen type stripping. El `tsconfig.json`
  usa `erasableSyntaxOnly`, así que no hay `enum`, `namespace` ni parámetros con
  modificador de acceso en el constructor.
- El hook de pre-commit corre `npm run typecheck` y `npm run test:run`: no se puede
  commitear con una kata en rojo. Para una excepción puntual, `git commit --no-verify`.
