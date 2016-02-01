describe("Dice", function(){
  it("will determine the roll of the dice depending on input of how many sides, number of rolls and modifier selected", function(){
    var testDice = new Dice(6, 3, 2)
    expect(testDice.sides).to.equal(6);
    expect(testDice.rolls).to.equal(3);
    expect(testDice.modifier).to.equal(6);
  })
})
