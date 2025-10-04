class Sward {
  use() {
    return "Slashes with a sward";
  }
}

class Bow {
  constructor() {
    this.arrow = 10;
  }
  use() {
    this.arrow -= 1;
    return `Shot an Arrow, remaining arrow ${this.arrow.}`;
  }
}

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return `${this.name} ${this.weapon.use()}`;
  }
}

const c1 = new Character("Thor", new Bow());
console.log(c1);
console.log(c1.attack());
