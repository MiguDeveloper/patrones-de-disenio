class DrinkTs {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name;
  }
}

const drinkTs = new DrinkTs("agua");
console.log(drinkTs.info());

interface Product {
  price: number;
  getPrice(): string;
}

class BeerTs extends DrinkTs implements Product {
  private alcohol: number;
  price: number;

  constructor(name: string, alcohol: number, price: number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }

  getPrice(): string {
    return `$ ${this.price}`;
  }

  info(): string {
    return `${super.info()} ${this.alcohol}`;
  }
}

const beerTs = new BeerTs("erdinger", 8.5, 1);
console.log(beerTs.info());

class Snack implements Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return `El precio es $ ${this.price}`;
  }
}

const products: Product[] = [
  new BeerTs("corona", 4.5, 1),
  new Snack("papas", 0.5),
  new BeerTs("heineken", 5, 2),
  beerTs,
];

function getProducts(products: Product[]) {
  products.forEach((product) => product.getPrice());
}
