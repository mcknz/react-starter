class Hello {
  constructor() {
    console.log('hello world!');
  }
  static world() {
    console.log('world, world');
  }
}

Hello.world();

//let b = new Hello();
//b.world(); //this doesn't work with static, not an instance method

class Nums {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  add() {
    console.log(this._x + this._y);
  }
  static customAdd(x, y) {
    console.log(x+y);
  }  
}

let b = new Nums(4, 4);
b.add();
Nums.customAdd(2, 3);
console.log(b._x); // not really private


