// Import files
const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

// Inquirer prompt logic
inquirer
  .prompt([
    {
      type: 'list',
      message: 'What shape would you like your logo to be?',
      name: 'logoShape',
      choices: ['circle', 'square', 'triangle']
    },
    {
      type: 'input',
      message: 'What color would you like your logo to be?',
      name: 'logoColor'
    },
    {
      type: 'input',
      message: 'Enter your logo\'s text (max 3 characters)',
      name: 'logoText',
      validate: function (input) {
        if (input.length <= 3) {
          return true;
        } else {
          return 'Logo text must be AT MAX 3 characters.';
        }
      }
    },
    {
      type: 'input',
      message: 'Finally, what color would you like the logo\'s text to be?',
      name: 'logoTextColor'
    }
    // the then() statement determines what to do with the user's input
  ]) .then(function(answers) {
    let logo;

    if (answers.logoShape === 'circle'){
      logo = new Circle (answers.logoColor, answers.logoText, answers.logoTextColor)
    }
    else if (answers.logoShape === 'square'){
      logo = new Square (answers.logoColor, answers.logoText, answers.logoTextColor)
    }
    else if (answers.logoShape === 'triangle'){
      logo = new Triangle (answers.logoColor, answers.logoText, answers.logoTextColor)
    }

    const svg = logo.setSVG();
// This writes the file in the examples directory once finished
    fs.writeFile('./examples/example.svg', svg, function(err) {
      if (err) throw err;
      console.log('svg file created')
    });
  });