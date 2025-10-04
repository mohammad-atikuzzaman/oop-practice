class Shape {
  constructor(color) {
    this.color = color;
  }
  describe() {
    return `This is a shape of color ${this.color}`;
  }
}

const shape1 = new Shape("Red");
// console.log(shape1);
// console.log(shape1.describe());

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.r = Number(radius);
  }
  area() {
    return this.r < 0 ? "Please provide valid value" : Math.PI * this.r ** 2;
  }
}

const c1 = new Circle("Red", 2);
// console.log(c1);
// console.log(c1.area());

class Rectangle extends Shape {
  constructor(color, height, width) {
    super(color);
    this.height = Number(height);
    this.width = Number(width);
  }
  area() {
    return this.height * this.width;
  }
}

const r1 = new Rectangle ("Blue", "3" , 5)
console.log(r1);
console.log(r1.describe());
console.log(r1.area());
