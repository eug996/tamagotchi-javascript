const Character = require("../character");
 const character = new Character() 


describe("constructor", () => {
    it("returns an object", () => {
      expect(new Character("Mametchi")).toBeInstanceOf(Object);
    });
  });
