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
});
