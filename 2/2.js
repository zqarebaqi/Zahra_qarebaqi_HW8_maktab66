class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
  getPerimeter() {
    return Math.PI * 2 * this.radius;
  }
}
let circy = new Circle(11);
console.log(circy.getArea());
let mycircy = new Circle(4.44);
console.log(mycircy.getPerimeter());

// function Circle(r) {
//   this.p = "3.14159265359";
//   this.r = r;
//   this.getArea = function () {
//     console.log(this.r ** 2 * this.p);
//   };
//   this.getPerimeter = function () {
//     console.log(2 * this.p * r);
//   };
// }

// let circy = new Circle(11);
// circy.getArea();

// let mycircy = new Circle(4.44);
// mycircy.getPerimeter();  with constructor
