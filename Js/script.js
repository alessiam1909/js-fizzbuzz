// Creo un ciclo che stampi i numeri da 1 a 100

let num = 1;

for (let i = 1; i <= 100; i ++ ){
    
//     inserisco le condizioni:
//    2.1 Se il numero è multiplo di 3 stampa “Fizz”
//    2.2 Se il numero è multiplo di 5 stampa "Buzz"
//    2.3 Se il numero è multiplo di entrambi stampa "“FizzBuzz”
//    2.4 Altrimenti stampa il numero
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if(i % 3 == 0){
        console.log("Fizz");
    } else if(i % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
};