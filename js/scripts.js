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
  $("#d2Roll").click(function(){
    var sides = 4;
    var rollNum = parseInt($("input#d2NumOfRolls").val());
    var modifierNumber = parseInt($("input#d2ModNumber").val());
    var modifierOperator = $("input[type = 'radio']:checked").val();

    var newDice = new Dice(sides, rollNum, modifierNumber);
    var rolled = newDice.play();
    var total = points(rolled, modifierOperator, modifierNumber);

    $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
    $(".result.active").prepend("\n" + "Roll(" + rollNum + this.name + ")" + modifierOperator + modifierNumber + ":" + "\n");

  });


  $("#d4Roll").click(function(){
    var sides = 4;
    var rollNum = parseInt($("input#d4NumOfRolls").val());
    var modifierNumber = parseInt($("input#d4ModNumber").val());
    var modifierOperator = $("input[type = 'radio']:checked").val();

    var newDice = new Dice(sides, rollNum, modifierNumber);
    var rolled = newDice.play();
    var total = points(rolled, modifierOperator, modifierNumber);


    $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
    $(".result.active").prepend("\n" + "Roll(" + rollNum + this.name + ")" + modifierOperator + modifierNumber + ":" + "\n");

  });

  $("#d6Roll").click(function(){
    var sides = 6;
    var rollNum = parseInt($("input#d6NumOfRolls").val());
    var modifierNumber = parseInt($("input#d6ModNumber").val());
    var modifierOperator = $("input[type = 'radio']:checked").val();

    var newDice = new Dice(sides, rollNum, modifierNumber);
    var rolled = newDice.play();
    var total = points(rolled, modifierOperator, modifierNumber);

    $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
    $(".result.active").prepend("\n" + "Roll(" + rollNum + this.name + ")" + modifierOperator + modifierNumber + ":" + "\n");

  });

  $("#d8Roll").click(function(){
    var sides = 8;
    var rollNum = parseInt($("input#d8NumOfRolls").val());
    var modifierNumber = parseInt($("input#d8ModNumber").val());
    var modifierOperator = $("input[type = 'radio']:checked").val();

    var newDice = new Dice(sides, rollNum, modifierNumber);
    var rolled = newDice.play();
    var total = points(rolled, modifierOperator, modifierNumber);

    $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
    $(".result.active").prepend("\n" + "Roll(" + rollNum + this.name + ")" + modifierOperator + modifierNumber + ":" + "\n");

  });

  $("#d10Roll").click(function(){
    var sides = 10;
    var rollNum = parseInt($("input#d10NumOfRolls").val());
    var modifierNumber = parseInt($("input#d10ModNumber").val());
    var modifierOperator = $("input[type = 'radio']:checked").val();

    var newDice = new Dice(sides, rollNum, modifierNumber);
    var rolled = newDice.play();
    var total = points(rolled, modifierOperator, modifierNumber);

    $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
    $(".result.active").prepend("\n" + "Roll(" + rollNum + this.name + ")" + modifierOperator + modifierNumber + ":" + "\n");

  });

  $("#d12Roll").click(function(){
    var sides = 12;
    var rollNum = parseInt($("input#d12NumOfRolls").val());
    var modifierNumber = parseInt($("input#d12ModNumber").val());
    var modifierOperator = $("input[type = 'radio']:checked").val();

    var newDice = new Dice(sides, rollNum, modifierNumber);
    var rolled = newDice.play();
    var total = points(rolled, modifierOperator, modifierNumber);

    $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
    $(".result.active").prepend("\n" + "Roll(" + rollNum + this.name + ")" + modifierOperator + modifierNumber + ":" + "\n");

  });

  $("#d20Roll").click(function(){
    var sides = 20;
    var rollNum = parseInt($("input#d20NumOfRolls").val());
    var modifierNumber = parseInt($("input#d20ModNumber").val());
    var modifierOperator = $("input[type = 'radio']:checked").val();

    var newDice = new Dice(sides, rollNum, modifierNumber);
    var rolled = newDice.play();
    var total = points(rolled, modifierOperator, modifierNumber);

    $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
    $(".result.active").prepend("\n" + "Roll(" + rollNum + this.name + ")" + modifierOperator + modifierNumber + ":" + "\n");

  });

  $("#d100Roll").click(function(){
    var sides = 100;
    var rollNum = parseInt($("input#d100NumOfRolls").val());
    var modifierNumber = parseInt($("input#d100ModNumber").val());
    var modifierOperator = $("input[type = 'radio']:checked").val();

    var newDice = new Dice(sides, rollNum, modifierNumber);
    var rolled = newDice.play();
    var total = points(rolled, modifierOperator, modifierNumber);

    $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
    $(".result.active").prepend("\n" + "Roll(" + rollNum + this.name + ")" + modifierOperator + modifierNumber + ":" + "\n");

  });

  $("#dxRoll").click(function(){
    var sides = parseInt($("input#dxNumOfRolls1").val());
    var rollNum = parseInt($("input#dxNumOfRolls2").val());
    var modifierNumber = parseInt($("input#dxModNumber").val());
    var modifierOperator = $("input[type = 'radio']:checked").val();

    var newDice = new Dice(sides, rollNum, modifierNumber);
    var rolled = newDice.play();
    var total = points(rolled, modifierOperator, modifierNumber);


    $(".result.active").prepend(rolled.toString()+ ", " + modifierOperator + modifierNumber + "\n" + "Total: " + total + "\n");
    $(".result.active").prepend("\n" + "Roll(" + rollNum + this.name + sides + ")" + modifierOperator + modifierNumber + ":" + "\n");

  });
  function checkingId(id) {
    var idBank =["player1", "player2", "player3", "player4"];
    for (var i =0; i < idBank.length; i++) {
      if (id !== idBank[i]) {
        $("#"+idBank[i]+"text").hide();
        $("#"+idBank[i]+"text").removeClass("active")
        $("#"+idBank[i]).removeClass("active");
        $("#"+idBank[i]+"clear").hide()
      }
      else if (id === idBank[i]){
        $("#"+id+"text").show();
        $("#"+idBank[i]+"text").addClass("active");
        $("#"+id).addClass("active");
        $("#"+idBank[i]+"clear").show();
      }
    }
  };


  $("#player1").click(function(){
    var id = this.id;
    checkingId(id);
  });

  $("#player1clear").click(function(){
    $("#player1text").empty();
  });

  $("#player2").click(function(){
    var id = this.id;
    checkingId(id);
  });

  $("#player2clear").click(function(){
    $("#player2text").empty();
  });

  $("#player3").click(function(){
    var id = this.id;
    checkingId(id);
  });

  $("#player3clear").click(function(){
    $("#player3text").empty();
  });

  $("#player4").click(function(){
    var id = this.id;
    checkingId(id);
  });

  $("#player4clear").click(function(){
    $("#player4text").empty();
  });

  $("#clearinput").click(function(){
      $("input[type ='text']").val(0)
      $("input[value = '+']").prop("checked", true);
  });


  //   var count = 3;
  // $("#addtext").click(function(){
  //
  //   $(this).before("<li id='player" + count + "'><a href='#' id='player'" + count + ">Player " + count + "</a></li>")
  //   $()
  //
  //   count++;
  //
  // });
});
