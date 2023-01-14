
  

function Character(name) {
    this.name = name;
    this.age = 0;
  }
  
  Character.prototype.growUp = function () {
    this.age += 1;
  };  //created character function


module.exports = Character; // export it from the file
