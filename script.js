
// EJEMPLOS DE CLASE ============= //
const siEsTrue =() =>{
    console.log('3 es mayor a 5')
}

const siEsFalse =() =>{
    console.log('3 es menor a 5')
}

const comparar = (condicion, fnSiTrue, fnSiFalse) =>{
    if (condicion) {
        fnSiTrue()
    } else {
        fnSiFalse()
    }
}

comparar(3 > 5, siEsFalse, siEsTrue)

const edad = 19

comparar(
    edad > 18, () => 
    console.log('Puede ingresar'),
    console.log('No puede ingresar')
) 

// const duplicar = x => x * 2
const triplicar = x => x * 3
const cuadriplicar = x => x * 4
const sumas = x =>( x * 4) - 15


// const operationes =[duplicar, triplicar, cuadriplicar, sumas]
const otrasoperationes =[triplicar, triplicar, triplicar]
const math =[Math.floor, Math.ceil, Math.round]


const ejecutaroperationes = (x, operationes) =>{
    for(let i=0; i < operationes.length; i++) {
        const operar = operationes[i]
        const result = operar(x)
        console.log(result)
    }
}


// const numbers = [1, 2, 3]
// const duplicar = x => x * 2
// const sumar = x => x * y

// map
// Crear una función map que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// obtenga el result
// lo pushee a un nuevo array
// devuelva el array final con el result de cada una de las llamadas al callback.
// Ejemplo:


// FUNCIONES Y CALLBACKS

const numbers1 = [1, 2, 3]
const duplicar = x => x * 2
const numbers2 = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
console.log(multiploDe10)
const esPositivo = x => x >= 0
// map(numbers, duplicar) // [2, 4, 6]


const map = (numbers, operation) =>{
    let results = []
    for(let i=0; i < numbers.length; i++) {
        operation(numbers[i])
        let result =  operation(numbers[i])
        results.push(result)
        //  console.log(results)
    }
    return results
}


// filter
// Crear una función filter que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// si dicho callback devuelve true, pushea el elemento a un nuevo array
// devuelva el array final con los elementos que pasaron el "filtro".
// Ejemplo:

// const numbers = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = x => x % 10 === 0
// filter(numbers, multiploDe10) // [10, 40, 50]


const filter = (numbers, operation)  =>{
    let results = []
    for(let number of numbers) {
       if(operation(number)){
        results.push(number)
       } 
    }
    return results
}


// every
// Crear una función every que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva true si todas las llamadas al callback devolvieron true

// Ejemplo:
// const numbers = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = x => x % 10 === 0
// const esPositivo = x => x >= 0

// every(numbers, multiploDe10) // false
// every(numbers, esPositivo) // true


const every = (numbers, operation)  =>{
    let result = true
    for(let number of numbers) {
       if(operation(number)){
        result = true
       } else {
        return false
        }
    }
   return result
}

// some
// Crear una función some que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva true si al menos una de las llamadas al callback devolvió true
// Ejemplo:

// const numbers = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = x => x % 10 === 0
// const esPositivo = x => x >= 0

// some(numbers, multiploDe10) // true
// some(numbers, esPositivo) // true

const some = (numbers, operation)  =>{
    for(let number of numbers) {
       if(operation(number)){
        return true
       }
    }
   return false
}

// find
// Crear una función find que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva el elemento pasado como argumento del primer callback que devuelva true

// si ningún callback devuelve true, devuelva undefined
// const numbers = [8, 2, 3, 40, 33, 50]
// const multiploDe10 = x => x % 10 === 0
// find(numbers, multiploDe10) // 40

const find = (numbers, operation)  =>{
    let result= true
    for(let number of numbers) {
        if(operation(number)){
         results = true
        } else {
            return undefined
        }
    }
   return result
}

// findIndex
// Crear una función findIndex que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
// si ningún callback devuelve true, devuelva undefined
// const numbers = [8, 2, 3, 40, 33, 50]
// const multiploDe10 = x => x % 10 === 0
// find(numbers, multiploDe10) // 3

const findIndex = (numbers, operation)  =>{

    for(let i in numbers) {
        if(operation(numbers[i])){
            return i
            } 
        } 
        return undefined
    }



// dropWhile
// Crear una función dropWhile que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva un array con los elementos a partir del primer callback que devolvió false
// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da false por primera vez agrega todos los elementos restantes a partir de dicho elemento inclusive)

// const numbers = [40, 33, 50, 8, 2, 3, 20]
// const multiploDe10 = x => x % 10 === 0
// dropWhile(numbers, multiploDe10) // [50, 8, 2, 3, 20]

const dropWhile = (numbers, operation)  =>{
    let result = []
    for (let i in numbers) {
        if (!operation(numbers[i])) {
            result = numbers.slice(i)
            return result
        }
    }
}


// takeWhile
// Crear una función takeWhile que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva un array con los elementos hasta el primer callback que devolvió false
// (Inverso del dropWhile)

// const numbers = [40, 50, 33, 8, 2, 3, 20]
// const multiploDe10 = x => x % 10 === 0
// takeWhile(numbers, multiploDe10) // [40, 50]

const takeWhile = (numbers, operation)  =>{
    let result = []
    for (let i in numbers) {
        if (!operation(numbers[i])) {
            result = numbers.splice(0, i)
            return result
            
        }
    }

}

