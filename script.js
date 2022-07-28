// let frutinhas = ["banana" , "laranja" , "limao"]
// let number = [13 , 42 , 20]
// let tudo = ["banana" , 13 , false]
// let unica = [100]
// let vazio = []

// console.log(frutinhas.length)
// console.log(frutinhas[2])
// console.log(frutinhas)

// console.log(tudo)
// console.log(tudo.includes("banana"))
// console.log(tudo.includes(13))
// console.log(tudo.includes(false))

// console.log(unica)
// console.log(unica.length)

// --------------------------------------//

// copiar, adicionar e eliminar //

// let frutinhas2 = frutinhas.slice()
// frutinhas2.push("uva")
// console.log(frutinhas , frutinhas2)

// // frutinhas2.pop() - Retira o ultimo elemento

// frutinhas2.splice(2,2)
// console.log(frutinhas2)

// // ------- ordenando ------//
// frutinhas.sort()
// number.sort()

// console.log( frutinhas , number)

let numero = [42 , 25 , 87 , 99, 72 , 92] 

console.log(numero)
console.log(numero.sort())
console.log(numero.reverse())

numero.pop()
numero.push(6)
numero.splice(2,1)

console.log(numero)