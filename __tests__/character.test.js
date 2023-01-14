const Character = require("../character");
 const character = new Character() 


describe("constructor", () => {
    it("returns an object", () => {
      expect(new Character("Mametchi")).toBeInstanceOf(Object);
    });
  });


  describe("constructor", () => {
    // ...
  it("sets the name property", () => {
    const character = new Character("Mametchi");

    expect(character.name).toEqual("Mametchi");
  });
});


