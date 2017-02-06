class Hello {
  constructor() {
    console.log('hello world!');
  }
  world() {
    console.log('same here!')
  }
}

class Howdy extends Hello {
  constructor() {
    super();
    console.log("howdy there!")
  }
}

//let a = new Howdy();
//a.world();

class Goodbye extends Hello {
  constructor(msg) {
    console.log(msg);
    super();    
  }
  world() {
    console.log("bye");
  }
}

var b = new Goodbye('not');
b.world();