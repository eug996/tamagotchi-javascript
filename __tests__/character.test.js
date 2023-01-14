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


describe("constructor", () => {
    // ...
  it("has a initial age of 0", () => {
    const character = new Character("Mametchi");
    expect(character.age).toEqual(0);
  });
});

describe("constructor", () => {
    // ...
    it("increments the age by 1", () => {
      const character = new Character("Mametchi");
  
      character.growUp();
  
      expect(character.age).toEqual(1);
    });
  });



describe("constructor", () => {
    // ...
    it("increments by 5", () => {
      const character = new Character("Mametchi");
  
      character.growUp();
  
      expect(character.hunger).toEqual(5);
    });
  });



describe("constructor", () => {
    // ...
    it("Decreases by 3", () => {
      const character = new Character("Mametchi");
  
      character.growUp();
  
      expect(character.fitness).toEqual(7);
    });
  });




  


