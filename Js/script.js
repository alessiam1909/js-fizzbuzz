// Creo un ciclo che stampi i numeri da 1 a 100
const container = document.querySelector(".container");
let num = 1;

let box; 

for (let i = 1; i <= 100; i ++ ){
    
//     inserisco le condizioni:
//    2.1 Se il numero è multiplo di 3 stampa “Fizz”
//    2.2 Se il numero è multiplo di 5 stampa "Buzz"
//    2.3 Se il numero è multiplo di entrambi stampa "“FizzBuzz”
//    2.4 Altrimenti stampa il numero
    if (i % 3 == 0 && i % 5 == 0){

        box = `<div class="box box-pink">${`FizzBuzz`}</div>`;
        console.log("FizzBuzz");
    } else if(i % 3 == 0){

        box = `<div class="box box-acqua">${`Fizz`}</div>`;
        console.log("Fizz");
    } else if(i % 5 == 0){

        box = `<div class="box box-yellow">${`Buzz`}</div>`;
        console.log("Buzz");
    } else {

        box = `<div class="box box-lb">${num}</div>`;
        console.log(i);
    }
    num++;
    container.innerHTML += box;
};