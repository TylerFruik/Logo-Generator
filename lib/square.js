// Imports shapes.js
const Shape = require('./shapes.js')
class Square extends Shape {
  constructor(logoColor, logoText, logoTextColor) {
    super (logoColor, logoText, logoTextColor)
  }
  // creates the element with the imported data
 setShape() {
  return `<rect width="200" height="200" fill="${this.logoColor}" />
    <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.logoTextColor}" style="font-size: 80px;">${this.logoText}</text>`;
  }
}
// Exports the object
module.exports = Square;
