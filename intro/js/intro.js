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
