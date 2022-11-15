// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  let array = [];
  for (let key in objeto) {
    array.push([key, objeto[key]]);
      
    }
  return array;
}
let objeto = {
  D: 1,
  B: 2,
  c: 3,
}

//console.log(deObjetoAmatriz(objeto))

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objeto = {};

  for( let i = 0; i < string.length; i ++){

    if(Object.keys(objeto).includes(string[i])){
      objeto[string [i]] = objeto[string[i]] + 1;
      continue
    }
    objeto[string[i]] = 1;
  }

  return objeto;
}

// let a = "adsjfdsfsfjsdjfhacabcsbajda"
// console.log(numberOfCharacters(a));



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let minusculas = "";
  let mayusculas = "";
  for (let i = 0; i< s.length; i ++){
    if( s[i] === s[i].toUpperCase() ){
      mayusculas = mayusculas + s[i];
    }
    else{
      minusculas = minusculas + s[i];
    }
    
  }
  return mayusculas + minusculas


  
}

//let a = "soyHENRY"
//console.log(capToFront(a))

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var strToArray = str.split(" "); //cada palabra es un array
  var arrayFinal = strToArray.map(function(ele) {
    return ele.split("").reverse().join("");
  })
  return arrayFinal.join(" ");
}
//let a = "I Love You So Much!";
//console.log(asAmirror(a));



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
let numString = numero.toString(); // se convierte el numero a string
let result = numString.split("").reverse().join("");
if (numString === result){
  return 'Es capicua';
}else{
  return 'No es capicua';
}



}
//let a = 98289
//console.log(capicua(a));

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let diferente = "";
  for (var i = 0; i < cadena.length; i ++){
      if (cadena[i] === 'a' || cadena[i] === 'b' ||cadena[i] === 'c' ){
        continue;
      }else{
    diferente = diferente + cadena[i];
    }
  }

  return diferente
}
let a = "nicolas"
console.log(deleteAbc(a));



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (let i = 0; i < arr.length; i++) {
    for( let j = i + 1; j < arr.length; j++) {
      if( arr[j].length < arr[i].length){
        var aux = arr[j];
        arr[j] = arr[i];
        arr[i] = aux;

      }
    }   
  }
  return arr;
}
console.log(sortArray(['you' , 'are', 'beatiful' , 'looking']))
console.log(sortArray(['hola', 'aproximado' , 'holaf', 'sentar' , 'a']))

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

var newArr = [];
for (let i = 0; i < arreglo1.length; i++){
  for (let j = 0; j < arreglo2.length; j++){
    if( arreglo1[i] === arreglo2[j]){
      newArr.push(arreglo1[i]);
    }

  }

}



return newArr;
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

