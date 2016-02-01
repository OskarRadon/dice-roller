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
  return totalRolls;
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
  $("#d4Roll").click(function(event){
    var sides = 4;
    var rollNum = parseInt($("input#d4NumOfRolls").val());
    var modifierNumber = parseInt($("input#d4ModNumber").val());
    var modifierOperator = $("input[type = 'radio']:checked").val();
    var newDice = new Dice(sides, rollNum, modifierNumber);
    var rolled = newDice.play();
    var total = points(rolled, modifierOperator, modifierNumber);
    $("#result").append("Roll(" + rollNum + this.name + ")" + modifierOperator + modifierNumber + ":" + "\n");
    $("#result").append(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
    event.preventDefault();
  });
});
