//FUNCTION
let dividedPorDois = (elem) => elem.idade / 2

let pares = (elem) => elem.idade % 2 == 0

let soma = (val1, val2) => val1 + val2
function calcula(fn, value1, value2){
    return fn(value1, value2)
}

console.log(calcula(soma, 1, 2))

//Currying e Closure
function multiplicaPor(a){
    return function(b){
        return a * b
    }
}

let dobroDe = multiplicaPor(2)
console.log(dobroDe(4))
console.log(multiplicaPor(2)(4))

//FILTER MAP
let meuArray = ["Pedro", "Gabs", "Guilherme", "Marlon"]

let pessoa = meuArray.filter((elem) => elem === "Guilherme").map((elem) => {
  let obj = {}
  obj.nome = elem
  obj.idade = 35
  return obj
})

console.log(pessoa)

const filtraNome = nome => nome === "Guilherme"
const criaObjeto = nome => {
  let obj = {}
  obj.nome = nome
  obj.idade = 35
  return obj
}

pessoa = meuArray.filter(filtraNome).map(criaObjeto)

console.log(meuArray)
console.log(pessoa)

//Com Arrow function
const divisivelPor = divisor => numero => !(numero % divisor);
const ehDivisivel = divisivelPor(2);
console.log(ehDivisivel(20));

//Objetos
let meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

console.log(meuCarro)

meuCarro["fabricacao"] = "Chevrolet";
meuCarro["modelo"] = "Camaro";
meuCarro["ano"] = 1970;

console.log(meuCarro)


//Classe
function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

meucarro = new Carro("Eagle", "Talon TSi", 1993);

meuCarro = {
    "fabricacao": "VW",
    "modelo": "Fusca",
    "ano": 1940
}

console.log(meuCarro)

class Car {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

meuCarro = new Car("Gurgel", "Gurgel", 1969 )

console.log(meuCarro)


// sem nome
let carro = class {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

let instancia = new carro("Nissan", "Kicks", 2018)

console.log(instancia)

//1°
//Evento é disparado
//Ele vai pra fila de eventos (Event Queue)
//Como não é um processo bloqueante será executado e já sai da fila de eventos
console.log("This is the first statement");
   
//3°
//Evento é disparado
//Vai pra fila de eventos
//É uma ação bloqueante
//Envia para o Pool de Threads que roda em background libuv C++
//Retira da fila de evento
//Quando a ação for executada no Pool de Threads ela volta pra fila de eventos pra ser tratada de novo
setTimeout(function(){
    console.log("This is the second statement");
}, 1000);
  
//2°
//Evento é disparado
//Ele vai pra fila de eventos (Event Queue)
//Como não é um processo bloqueante será executado e já sai da fila de eventos
console.log("This is the third statement"); 


//Callback Hell
function a( callback ) {
	setTimeout( () => {
        console.log( 'result of a()' );
        callback();
    }, 1000 ); // 1 second delay
}

function b( callback ) {
	setTimeout( () => {
        console.log( 'result of b()' );
        callback();
    }, 500 ); // 0.5 second delay
}

function c( callback ) {
	setTimeout( () => {
        console.log( 'result of c()' );
        callback();
    }, 1200 ); // 1.1 second delay
}

// call in sequence
a( () => console.log('a() is done!') );
b( () => console.log('b() is done!') );
c( () => console.log('c() is done!') );


let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
});

(async function(){
  let result = await myPromise
  console.log(result)
})()
