console.log("pattern singleton");

class Singleton {
  static getInstance() {
    return Singleton.instance;
  }

  constructor() {
    console.log("entrando a constructor");
    this.random = Math.random();
    if (Singleton.instance) {
      console.log("Ya existe");
      return Singleton.instance;
    }
    console.log("no exite y se crea");
    Singleton.instance = this;
  }
}

const singleton1 = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();
console.log({ s1: singleton1.random });
console.log({ s2: singleton2.random });
console.log({ s3: singleton3.random });

console.log(singleton1 === singleton2);
console.log(singleton2 === singleton3);
