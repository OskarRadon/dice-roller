function Dice(sides, rolls, modifier) {
  this.sides = sides;
  this.rolls = rolls;
  this.modifier = modifier;
};

Dice.prototype.play = function () {
  var min = 1;
  var max = this.sides;
  var counter  = 1;
  var totalRolls =[];
  var numberHolder = 0;
  while (counter <= this.rolls) {
    counter++;
    totalRolls.push(Math.floor(Math.random() * (max - min +1)) + min);
  }
  return [1, 2, 3];
};

function points(totalRolls, modifierOperator, modifierNumber) {
  var totalPoints = 0;
  totalRolls.forEach(function(index)  {
    totalPoints += index;
  });
  if (modifierOperator === "+") {
    totalPoints += modifierNumber;
  } else if (modifierOperator === "-") {
    totalPoints -= modifierNumber;
  }
  return totalPoints;
};


$(document).ready(function() {

});
