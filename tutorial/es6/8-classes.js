class Hello {
  constructor() {
    console.log('hello world!');
  }
  world() {
    console.log('same here!')
  }
}

let a = new Hello();
a.world();

class Nums {
  static add(x,y) {
    return x + y;
  }
}

let b = new Nums();
//console.log(b.add(2,3));
console.log(Nums.add(2,3)); // this won't work without static keyword