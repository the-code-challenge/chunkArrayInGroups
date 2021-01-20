# Code Challenge: chunkArrayInGroups

Escriba una función que divida una matriz (primer argumento) en grupos de la longitud del tamaño (segundo argumento) y los devuelva como una matriz bidimensional.

## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
## Entrada

##### Parámetro 1
- **nombre**: arr
- **tipo**: Array
- **limitaciones**: 0 < arr.length <= 10

##### Parámetro 2
- **nombre**: size
- **tipo**: Number
- **limitaciones**: 0 < size <= 10

## Salida

- **tipo**: Number (Integer)

## Ejemplo
Dado un array ["a", "b", "c", "d"] y una longitud de 2 debe retornar  [ ["a", "b"], ["c", "d"] ]

## Tests

### Test 1  

- **Parametros**: (arr = ["a", "b", "c", "d"], size = 2)
- **Resultado esperado**: [ ["a", "b"], ["c", "d"] ]
---
### Test 2  

- **Parametros**: (arr = [0, 1, 2, 3, 4, 5], size = 3)
- **Resultado esperado**: [ [0, 1, 2], [3, 4, 5] ]
---
### Test 3  

- **Parametros**: (arr = [0, 1, 2, 3, 4, 5], size = 4)
- **Resultado esperado**: [[0, 1, 2, 3], [4, 5]]
---
### Test 4  

- **Parametros**: (arr = [0, 1, 2, 3, 4, 5, 6, 7, 8], size = 4)
- **Resultado esperado**: [ [0, 1, 2, 3], [4, 5, 6, 7], [8] ]
