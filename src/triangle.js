export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  if (this.side1 + this.side2 >= this.side3 && this.side1 + this.side3 >= this.side2 && this.side2 + this.side3 >= this.side1 && this.side1 !== 0 && this.side2 !== 0 && this.side3 !== 0) {
    if (this.side1 === this.side2 && this.side1 === this.side3 && this.side2 === this.side3) {
      return "This is an equilateral triangle";
    } else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
      return "This is an isosceles triangle";
    } else if (this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3) {
      return "This is a scalene triangle";
    }
  } else return "This is not a triangle";
};
