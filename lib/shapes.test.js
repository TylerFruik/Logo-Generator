// Import files
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

// This test file runs through the code and compares its output to a predefined string. All instances match, all tests pass. Which they do.
describe('Shapes', () => {

  describe('circle', () => {
    it('should create an HTML element in the shape of a circle', () => {
        const shape = new Circle ('green', 'SVG', 'white')
      expect(shape.setShape()).toEqual(`<circle cx="100" cy="100" r="100" fill="green" />\n` + `    <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="white" style="font-size: 80px;">SVG</text>`);
    });
  });

  describe('triangle', () => {
    it('should create an HTML element in the shape of a triangle', () => {
        const shape = new Triangle ('green', 'SVG', 'white')
      expect(shape.setShape()).toEqual(`<polygon points="100,30 200,200 0,200" fill="green" />\n` + `    <text x="100" y="160" text-anchor="middle" alignment-baseline="middle" fill="white" style="font-size: 60px;">SVG</text>`);
    });
  });

  describe('square', () => {
    it('should create an HTML element in the shape of a square', () => {
        const shape = new Square ('green', 'SVG', 'white')
      expect(shape.setShape()).toEqual(`<rect width="200" height="200" fill="green" />\n` + `    <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="white" style="font-size: 80px;">SVG</text>`);
    });
  });
});
