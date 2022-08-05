function sum(a, b) {
  return a + b;
}

let res = sum(3, 2);
console.log(res);

// funcion primer orden
const fSum = sum;
res = fSum(10, 5);
console.log(res);

// funcion de orden superior
function operation(fn, a, b) {
  console.log("ejecutamos la funcion parametro");
  console.log(fn(a, b));
}

operation(fSum, 10, 20);

// Arrow function
operation((a, b) => a * b, 5, 5);
operation(
  (a, b) => {
    let c = a + b;
    return c * 2;
  },
  1,
  2
);

// Metodos en arrays
const names = ["Miguel", "Juan", "Alex"];

// forEach: es inmutable, no modifica el array
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase()));
console.log(names);

// sort si es mutables
names.sort();
console.log("Sort mutable", names);

// map: es inmutable, retorna un nuevo array con valores modificados
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);

// reduce: recorre los elementos pero realiza un acumulado y se obtiene un solo resultado
const numbers = [5, 4, 7, 1, 10];
const total = numbers.reduce((acc, number) => acc + number, 0);
console.log({ total });


// Clases y objetos
class Drink{
  constructor(name){
    this.name = name;
  }

  info(){
    return `la bebida es: ${this.name}`
  }
}

const drink = new Drink('agua');
console.log(drink);
console.log(drink.info());

// Herencia
class Beer extends Drink{
  constructor(name, alcohol){
    super(name);
    this.alcohol = alcohol;
  }

  info(){
    return `${super.info()} ${this.alcohol}`
  }
}

const beer = new Beer('erdinger', 8.5);
console.log(beer.info());