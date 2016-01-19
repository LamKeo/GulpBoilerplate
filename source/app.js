

// var app = app || {};
// app.hey = function() {
//   console.log('Hey');
// }
// app.hey();

class HelloWorld {
  constructor(name, purpose) {
    this.attrs = {
      name: name,
      purpose: purpose
    }
  }
  toString() {
    return 'Hello, world';
  }
}

var sample = new HelloWorld("Lam", "take over the world");
console.log(sample.toString());
console.log(sample.attrs);
