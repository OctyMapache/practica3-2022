//array-arreglo
let arreglo = ['Javascript','Php','Java','Csharp']

//cantidad de elementos de un arreglo (LONGITUD)
let longitud = arreglo.length
console.log('Longitud: '+longitud)

//primer elemento de un arreglo
console.log( 'Primer elemento: '+arreglo[0] )

//ultimo elemento de un arreglo
console.log( 'Ultimo elemento: '+arreglo[longitud-1] )

// //funcion tradicional
// function operar() {
//     console.log('Probando')
// }
// //funcion flecha
// const calcular () => console.log('Probando')

//recorer array con forEach
arreglo.forEach( (element, index) => {
    console.log(index+'-'+element)
});

//agregar un elemento al final de un array
arreglo.push('Go')
console.log(arreglo)

//eliminar el ultimo elemento de un arreglo

arreglo.pop()
console.log(arreglo)

//agregar un elemento a principio de un arreglo
arreglo.unshift('Go')
console.log(arreglo)

//eliminar primer elemento de un arreglo
arreglo.shift()
console.log(arreglo)

//Conocer el indice de un elemento
const indice = arreglo.indexOf('Java')
console.log('Indice de java es: '+indice)
console.log(arreglo[indice])

// //eliminar un elemento conociendo su indice
// const eliminacion = arreglo.splice(indice,1)
// console.log(arreglo)
// console.log('Elemento eliminado: '+eliminacion)

//eliminar mas de un elemento
const eliminacion = arreglo.splice(indice,2)
console.log('Elementos eliminados: '+eliminacion)

//generar copia de un arreglo
let copia = arreglo.slice()
console.log(copia.push('Go'))
//cuando concatenamos un array con un string todo se traduce en una cadena de texto
console.log('Arreglo copia: '+copia)
console.log('Original: '+arreglo)