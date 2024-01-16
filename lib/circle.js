// Imports shapes.js
const Shape = require('./shapes.js')
class Circle extends Shape {
  constructor(logoColor, logoText, logoTextColor) {
    super (logoColor, logoText, logoTextColor)
  }
  // creates the element with the imported data
 setShape() {
  return `<circle cx="100" cy="100" r="100" fill="${this.logoColor}" />
    <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.logoTextColor}" style="font-size: 80px;">${this.logoText}</text>`;
  }
}
// Exports the object
module.exports = Circle
