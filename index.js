//Declarar una variable bandas y asignarle un array con tus bandas favoritas (al menos 5).
//Guardar en variables el valor del primero, tercero y sexto elemento del array.
//Mostrar por consola los siguientes 3 mensajes: La banda en primer lugar es:
//[NOMBRE_DE_LA_PRIMERA_BANDA] La banda en tercer lugar es: [NOMBRE_DE_LA_TERCERA_BANDA] La banda en sexto lugar es: [NOMBRE_DE_LA_QUINTA_BANDA]





// const bandas = ["Radiohead", "PJ Harvey", "Wire", "The Cure", "The Fall", "Joy Division"]

// const primerElemento = bandas[0]
// const segundoElemento = bandas[3]
// const sextoElemento = bandas[5]

// console.log(`La banda en primer lugar es ${primerElemento}`)
// console.log(`La banda en tercer lugar es:${segundoElemento}`)
// console.log(` La banda en sexto lugar es:${sextoElemento}`)


//2

// Crear un array con el nombre notas y asignarle 10 valores numéricos de 1 a 10.
// Hacer una funcion sumarNotas() que reciba el array como argumento y retorne la suma de todas.
// Hacer una funcion calcularPromedio() que reciba el array como argumento y retorne el promedio de 
// notas (podes utilizar sumarNotas() para reutilizar codigo).


// const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const SumarNotas = () => {

//     let sumar = 0;
//     for (let i = 0; i < notas.length; i++) {
//         sumar = sumar + notas[i];
//     }
//     return sumar;
// };
// console.log(SumarNotas())

// const calcularPromedio = () => {
//     let promedio = SumarNotas() / notas.length
//     return promedio
// }

// console.log(calcularPromedio(notas))


// Declarar el array playlist
// const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];
// Recorrer la lista de canciones con un ciclo for y mostrarlas en consola
// De inicio a fin
// De fin a inicio


// const playlist = ["Plainsong", " China Girl", "Incinerate", "Guns of Brixton", "Lady Grinning Soul", "Lowdown", " New Dawn Fades", "Bela Lugosi's Dead"]


// for (let i = 0; i < playlist.length; i++) {

//     console.log(playlist[i]);
// }

// for (let i = playlist.length - 1; i >= 0; i--) {

//     console.log(playlist[i])
// }


//Crear una funcion obtenerNumeroAlAzar() que retorne un numero del 0 al 5 al azar.
// Declarar el array items con los siguientes valores: '🍉', '🍐', '🍌', '🍇', '🍎', '🍊'
// Crear la funcion obtenerFrutaAlAzar() que reciba como argumento items y retorne una fruta del array,
//  usando la funcion obtenerNumeroAlAzar.

//solucion en clase

const obtenerNumeroAlAzar = () => {
    return (Math.floor(Math.random() * 5 + 1))
}

console.log(obtenerNumeroAlAzar())