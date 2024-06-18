let numeros = [2, 1, 2, 3, 5, 3, 4, 3, 6, 7, 10, 9, 8, 7, 10, 1]

for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] > numeros[j]) {
            let aux = numeros[i]
            numeros[i] = numeros[j]
            numeros[j] = aux
        }
    }
}
console.log(numeros)
for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] == numeros[j]) {
            numeros.splice(j, 1)
            j--
        }
    }
}
console.log(numeros)