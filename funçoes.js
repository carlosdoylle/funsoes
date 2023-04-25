//EXEMPLOS
/* function imprimirOlaMundo(){
    alert("ola mundo");
}

imprimirOlaMundo();
 */
//exercicio 1

/* function imprimirNome(){
    let nome = prompt("qual seu nome?")
    alert(nome)
}

imprimirNome()
imprimirNome()
imprimirNome() */

/* function somaDoisNumeros(num1,num2){
    let soma= num1+num2;
    return num1+num2;
   // return soma
}
let resultado =(somaDoisNumeros(5,8))
console.log(resultado) */

/*  function arrayNum(array){
    const  primeiro = array[0] / 2
    const ultimo = array[array.length - 1] /2 // para pegar o ultimo numero do array
    return [ultimo,primeiro];
}

const numeros = [2,3,4,5]
const resultado = arrayNum(numeros)
console.log(resultado */

/* let numsArray = [120, 340, 355, 197]

function calculaArray(numsArray){
    let ultimo = numsArray[3]
    let primeiro = numsArray[0]
    let calculaUltimo = ultimo /2
    let calculaPimeiro = primeiro /2

    return  [calculaUltimo,calculaPimeiro]
}

console.log(calculaArray(numsArray)) */

/* let numsArray = [120, 340, 355, 197]
let variavel = function(valorArray){
    return novoArrayDeRetorno=[
        valorArray[valorArray.length - 1]/2,
        valorArray[0]/2
    ];
}
alert('Espressao de funçao ' + variavel(numsArray))

let variavel2 = (valoresRecebidos) => {
    return novoArrayDeRetorno = [
        valoresRecebidos[3]/2,
        valoresRecebidos[0]/2
    ]
}
alert('Espressao de funçao ' + variavel2(numsArray)) */