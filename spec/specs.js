describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("capitalizes each word of a two word sentence", function() {
    expect(titleCase("cat hat")).to.equal("Cat Hat");
  });

  it("accepts any form of capitalization and returns correct form", function() {
    expect(titleCase("cAt HAT")).to.equal("Cat Hat");
  });

  it("avoids capitalizing a special list of conjunctions and articles", function() {
    expect(titleCase("cat in the hat")).to.equal("Cat in the Hat");
  });

  it("will always capitalize the first word", function() {
    expect(titleCase("the dog spot")).to.equal("The Dog Spot");
  });
});
