
function Character(name) {
    this.name = name;
    this.age = 0;
    this.hunger =0;
    this.fitness = 10;
    
  }
  
  Character.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };  //created character function



  


module.exports = Character; // export it from the file
