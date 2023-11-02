

// let videojuegos = ["dark souls", "fifa94", "counter strike", "valorant", "sonic 2", "cool spot", "golden axe", "castlevania IV"];

//FOR

// for(let i = 0; i < videojuegos.length; i++){
//     console.log(videojuegos[i]);
// }

//FOR EACH

// videojuegos.forEach(videojuego =>
//     console.log(videojuego)
// );

//FOR OF

// for(let videojuego of videojuegos){
//     console.log(videojuego + " Pascual se lo ha pasado");
// }

//FOR IN

// for(let elemento in videojuegos){

//     console.log(elemento);
// }

//For in nos permite iterar objetos de javascript como si se tratase de arrays
// let peliculas = {
//     pelicula1: "Cienpies humano",
//     pelicula2: "Avatar",
//     pelicula3: "El retorno del rey",
//     pelicula4: "Atrapasueños"
// }

// for (let elementoARecorrer in peliculas){
//     console.log(peliculas[elementoARecorrer]);
// }

//MAP

let frutas = ["sandia", "kiwi", "platano", "fresa", "manzana", "pera"];

let frutasPlural = frutas.map((elemento, i) => {

    if(i % 2 === 0){

        return elemento + 's'
    }

    return elemento
});

// console.log(frutasPlural);