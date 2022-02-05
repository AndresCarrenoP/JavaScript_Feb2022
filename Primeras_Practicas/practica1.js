//Operadores
//Aritméticos, asignación, de comparación, binarios, Lógicos, otros.

var a =1;
let b = 45;
var c = 6;
var d;

d = a  + b;

console.log(d)
console.log("Resultado de la variable d: ", d)
console.log(a+b)
console.log(8+5)
console.log (a,b)
console.log (a-b)
console.log (a*b)
console.log (a/b)
console.log (a%b)
console.log(++a)
console.log(a)
console.log(--a)

console.log("cadena",567 + '9');
//concatenar, no separa con comas
console.log('cadena1'+'cadena2')
//enumerar, separa con comas
console.log('cadena1', 'cadena2')

const cinco = 5;
const diez = 10;

console.log("Quince es " + (cinco + diez) + ' y no ' + (2 * diez + 2) + '.')

// Operadores de asignación (operadores del signo igual)

var numero = 8;
console.log('Variable: ', numero)
console.log ("Suma: ", numero +=2)
numero/=2 //5
console.log (numero/=2)
console.log(numero*=25)
numero = 5;
console.log(numero %= 10)

let text1 = 'John';
let text2 = 'Smith';
let text3 = text1 + text2;

console.log(text3)

var mycadena = 'alfa';
//mycadena += 'beto'

console.log(mycadena += 'beto')
console.log(mycadena)
console.log(mycadena -= 'beto')


let x = 5 + 5; //numerico
let y = '5' + 5; //cadena mas numerico - se convierte en cadena
let z = 'hello' + 5; //cadena mas numerico - se convierte en cadena

/*
Para otra sesión más adelante
console.log(x,y,z)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(typeof true)
console.log(typeof 'true')
*/


//Desestructuración

var foo = ['one', 'two', 'three', 'four'] //cuando creas una variable y como valor le asignas un arreglo, tiene posiciones
console.log(foo)

var one = foo[0]
var two = foo[1]
var three = foo[2]
console.log(one, two, three)

var[one, two, three] = foo; //cuando creas una variable arreglo, estás dándole nombre a las posiciones) 
console.log([one, two, three])
console.log([one])
console.log([three])


//Operaciones de Comparación

var var1 = 3;
var var2 = 5;

console.log(3 == var1)
console.log("3" == var1)
console.log(3 == '3')
console.log(3 === '3')
console.log(var1 != 4)
console.log(var2 != 3)
console.log(var2 != '3')
console.log(var2 != '5')
console.log(var1 !== '3')
console.log(3 !== '3')
console.log(var1 > var2)
console.log('12'>2)
console.log(var2 >= var1)
console.log(var1>=3)



//Operadores lógicos
//&& AND
//|| OR
//! NOT
console.log('********Operadores logicos*********')

//AND
console.log('******AND*******')

console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log(false && (3==4))
console.log('gato' && 'perro') // Tarea: investigar
console.log(false && 'gato')
console.log('gato' && false)
console.log('gato' && true)

//OR
console.log('*****OR******')

console.log(true || true)
console.log(false || true)
console.log(true || false)
console.log(false || false)
console.log(false || (3==4))
console.log('gato' || 'perro') // Tarea: investigar
console.log(false || 'gato')
console.log('gato' || false)
console.log('gato' || true)

//NOT
console.log('******NOT*******')

console.log(!true)
console.log(!false)
console.log(!'gato')

//Pendiente después de tarea
console.log('gato' || false && !true || 'perro')


//diferencia entre var y let: var una variable local, let es una variable global
//Infinity - hubo una división entre 0
//A javascript le da lo mismo la comilla doble o sencilla
//A javascript le da lo mismo si pongo o no el ; al final de un log