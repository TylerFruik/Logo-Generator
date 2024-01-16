// defines the object and its constructor function
class Shape {
  constructor(logoColor, logoText, logoTextColor) {
    this.logoColor = logoColor;
    this.logoText = logoText;
    this.logoTextColor = logoTextColor;
  }

  setShape() {
    return `<circle cx="100" cy="50" r="40" fill="${this.shapeColor}" />
      <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" style="font-size: 80px;">${this.text}</text>`
  }

  setSVG() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  ${this.setShape()}
  </svg>`
  }
}
// Exports the object
module.exports = Shape;
