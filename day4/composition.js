class Sword {
  use() {
    return "Slashes with a sward";
  }
}

class MagicStaff {
  use() {
    return "casts a lightning bolt!";
  }
}

class Bow {
  constructor() {
    this.arrow = 10;
  }
  use() {
    this.arrow -= 1;
    return `Shot an Arrow, remaining arrow ${this.arrow}`;
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

  changeWeapon(newWeapon) {
    this.weapon = newWeapon;
    return `${this.name} switched to a new weapon.`;
  }
}

// const c1 = new Character("Thor", new Bow());
// console.log(c1);
// console.log(c1.attack());

const sword = new Sword();
const bow = new Bow();
const staff = new MagicStaff();

const warrior = new Character("Leonidas", sword);
const archer = new Character("Legolas", bow);
const mage = new Character("Gandalf", staff);

console.log(warrior.attack());
console.log(archer.attack());
console.log(mage.attack());

console.log(warrior.changeWeapon(bow));
console.log(warrior.attack());
