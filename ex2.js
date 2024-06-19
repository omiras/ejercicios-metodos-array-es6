
// Uso adecuado de let y scope para actualizar una variable
// Somos portero de una discoteca y nos indican la edad de la persona que quiere entrar

// https://www.w3schools.com/react/react_es6_variables.asp

let puedesPasar = false;
let edad = 21;

if (edad >= 18) {
    puedesPasar = true;
}

console.log(puedesPasar) // Debería ser true pero vale false. ¿por qué? Por que al usar la palabra reservada let dentro del bloque if, se crea una nueva variable de nombre 'puedesPasar' que tiene ámbito de bloque e ignoramos la variable global o de script declarada en la línea 7. Entonces nunca llegamos a actualizar realmetne el valor de la variable de la línea 7. Además, la variable declarada en la línea 11 'muere' al finalizar el bloque if , no es accesible des de fuera

// PREGUNTA: ¿Por qué no se actualiza correctamente la variable 'puedesPasar'?
