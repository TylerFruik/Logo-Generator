// Imports shapes.js
const Shape = require('./shapes.js')
class Triangle extends Shape {
  constructor(logoColor, logoText, logoTextColor) {
    super (logoColor, logoText, logoTextColor)
  }
  // creates the element with the imported data
 setShape() {
  return `<polygon points="100,30 200,200 0,200" fill="${this.logoColor}" />
    <text x="100" y="160" text-anchor="middle" alignment-baseline="middle" fill="${this.logoTextColor}" style="font-size: 60px;">${this.logoText}</text>`;
  }
}
// Exports the object
module.exports = Triangle
