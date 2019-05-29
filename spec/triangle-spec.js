import { Triangle } from './../src/triangle.js';

describe('Triangle', function() {

  it('should test whether a triangle has three sides', function() {
    var triangle = new Triangle(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("This is not a triangle");
  });

  it('should correctly determine whether a triangle is an equilateral triangle', function() {
    var equilateralTriangle = new Triangle(9,9,9);
    expect(equilateralTriangle.checkType()).toEqual("This is an equilateral triangle");
  });

  it('should correctly determine whether a triangle is an isosceles triangle', function() {
    var isoscelesTriangle = new Triangle(3,9,9);
    expect(isoscelesTriangle.checkType()).toEqual("This is an isosceles triangle");
  });

  it('should correctly determine whether a triangle is a scalene triangle', function() {
    var scaleneTriangle = new Triangle(20,30,32);
    expect(scaleneTriangle.checkType()).toEqual("This is a scalene triangle");
  });

});
