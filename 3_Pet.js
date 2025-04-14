class Pet {
  static petCount = 0;
  energy = 50;
  hunger = 50;
  constructor(name, type, age) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.hunger = this.hunger > 0 && this.hunger < 100 ? this.hunger : 50;
    this.energy = this.hunger > 0 && this.hunger < 100 ? this.hunger : 50;
    Pet.petCount++;
  }
  get getInfo() {
    return console.log({
      name: this.name,
      type: this.type,
      age: this.age,
      hunger: this.hunger,
      energy: this.energy,
      totalPets: Pet.petCount,
    });
  }
  eat() {
    this.hunger -= 30;
    this.energy += 10;
  }
  play() {
    this.hunger += 20;
    this.energy -= 20;
    this.age += 0.1;
  }
  sleep() {
    this.hunger += 10;
    this.energy += 40;
  }
  speak() {
    console.log("펫의 울음소리!");
  }
}

class Dog extends Pet {
  static getName() {
    const dogname = ["코코", "초코", "몽이", "보리", "사랑이"];
    const randomName = Math.floor(Math.random() * dogname.length);
    return dogname[randomName];
  }
  static getAge() {
    return Math.floor(Math.random() * 10) + 1;
  }
  static getType() {
    const dogtype = ["포메라니안", "말티즈", "푸들", "시바이누", "웰시코기"];
    const randomType = Math.floor(Math.random() * dogtype.length);
    return dogtype[randomType];
  }
  constructor() {
    const name = Dog.getName();
    const age = Dog.getAge();
    const type = Dog.getType();
    super(name, age, type);
  }
  speak() {
    console.log("🦴멍멍!🦴");
  }
}
class Cat extends Pet {
  static getName() {
    const catname = ["나비", "냥이", "루나", "하늘", "쿠키"];
    const randomName = Math.floor(Math.random() * catname.length);
    return catname[randomName];
  }
  static getAge() {
    return Math.floor(Math.random() * 14) + 1;
  }
  static getType() {
    const cattype = [
      "러시안 블루",
      "스코티시 폴드",
      "먼치킨",
      "페르시안",
      "노르웨이숲고양이",
    ];
    const randomType = Math.floor(Math.random() * cattype.length);
    return cattype[randomType];
  }
  constructor() {
    const name = Cat.getName();
    const age = Cat.getAge();
    const type = Cat.getType();
    super(name, age, type);
  }
  speak() {
    console.log("🐾야옹!🐾");
  }
}
class Hamster extends Pet {
  static getName() {
    const hamstername = ["뽀삐", "후추", "콩이", "치즈", "또또"];
    const randomName = Math.floor(Math.random() * hamstername.length);
    return hamstername[randomName];
  }
  static getAge() {
    return Math.floor(Math.random() * 6) + 1;
  }
  static getType() {
    const hamstertype = [
      "골든",
      "정글리안",
      "윈터화이트",
      "로보로브스키",
      "차이니즈",
    ];
    const randomType = Math.floor(Math.random() * hamstertype.length);
    return hamstertype[randomType];
  }
  constructor() {
    const name = Hamster.getName();
    const age = Hamster.getAge();
    const type = Hamster.getType();
    super(name, age, type);
  }
  speak() {
    console.log("🐹찍찍!🐹");
  }
}
class PetManager {
  static pets = [];
  static addPet(pet) {
    if (typeof pet !== "function") {
      console.error("Invalid pet class");
      return;
    }
    switch (pet) {
      case Dog:
        const ndog = new Dog();
        PetManager.pets.push(ndog);
        console.log(`새로운 친구가 추가되었어요! : ` + Object.entries(ndog));
        break;
      case Cat:
        const ncat = new Cat();
        PetManager.pets.push(ncat);
        console.log(`새로운 친구가 추가되었어요! : ` + Object.entries(ncat));
        break;
      case Hamster:
        const nham = new Hamster();
        PetManager.pets.push(nham);
        console.log(`새로운 친구가 추가되었어요! : ` + Object.entries(nham));
        break;
      default:
        console.error("Unknown pet type");
    }
  }
  static start() {
    const petClass = [Dog, Cat, Hamster];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * petClass.length);
      const RandomPetClass = petClass[randomIndex];
      const petInstance = new RandomPetClass();
      PetManager.pets.push(petInstance);
    }
  }
  static showAllPets() {
    return PetManager.pets;
  }
  simulateDay() {}
}

PetManager.start();
console.log(PetManager.showAllPets());
PetManager.addPet(Cat);
console.log(PetManager.showAllPets());
