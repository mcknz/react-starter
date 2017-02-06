class Hello {
  set name  (name)  {
    this._name = name;
  }
  get name  ()       {
    return this._name;
  }
  hello() {
    console.log(`hello ${this._name}!`);
  }
}

let a = new Hello();
a.name = "scott";
a.hello();
console.log(a.name);

console.log(a._name);

class Nums {
  get operand1() {
    return this._op1;
  }
  get operand2() {
    return this._op2;
  }
  set operand1(o) {
    this._op1 = o;
  }
  set operand2(o) {
    this._op2 = o;
  }
  add() {
    console.log(this._op1 + this._op2);
  }
}

let b = new Nums
b.operand1 = 7;
b.operand2 = 6;
b.add();

