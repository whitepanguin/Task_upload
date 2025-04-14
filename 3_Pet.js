class Pet {
  static petCount = 0;
  energy = 50;
  hunger = 50;
  constructor(name, age, type, kind) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.kind = kind;
    this.hunger = this.hunger ;
    this.energy = this.energy ;
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
  checkStatus(){
    if (this.hunger >= 100) {
      console.log(`${this.name} 너무 배고파요! 보살핌으로 배고픔을 50으로 회복합니다.`);
      this.hunger = 50;
    } else if (this.hunger <= 0) {
      console.log(`${this.name} 과식했어요! 보살핌으로 배고픔을 50으로 조절합니다.`);
      this.hunger = 50;
    }
    if (this.energy >= 100) {
      console.log(`${this.name} 너무 팔팔해요! 보살핌으로 에너지을 50으로 회복합니다.`);
      this.energy = 50;
    } else if (this.energy <= 0) {
      console.log(`${this.name} 지쳤어요! 보살핌으로 에너지을 50으로 조절합니다.`);
      this.energy = 50;
    }
  }
  eat() {
    this.hunger -= 30;
    this.energy += 10;
    this.checkStatus();
  }
  play() {
    this.hunger += 20;
    this.energy -= 20;
    this.age += 0.1;
    this.checkStatus();
  }
  sleep() {
    this.hunger += 10;
    this.energy += 40;
    this.checkStatus();
  }
  action(){
    const actClass = ["eat", "play", "sleep"];
    const randomAct = Math.floor(Math.random() * actClass.length);
    const action = actClass[randomAct];
    switch (action) {
      case "eat":
        this.eat()
        console.log(`밥먹기!${this.speak()} :[${this.kind}] 이름:${this.name} /에너지:${this.energy} /배고픔:${this.hunger} `);
        break;
      case "play":
        this.play()
        console.log(`놀기기!${this.speak()} :[${this.kind}] 이름:${this.name} /에너지:${this.energy} /배고픔:${this.hunger} `);
        break;
      case "sleep":
        this.sleep()
        console.log(`잠!${this.speak()} :[${this.kind}] 이름:${this.name} /에너지:${this.energy} /배고픔:${this.hunger} `);
        break;
    }
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
    const kind = "강아지";
    super(name, age, type, kind);
  }
  speak() {
    return "🦴멍멍!🦴";
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
    const kind = "고양이";
    super(name, age, type, kind);
  }
  speak() {
    return "🐾야옹!🐾";
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
    const kind = "햄스터";
    super(name, age, type, kind);
  }
  speak() {
    return "🐹찍찍!🐹";
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
        console.log(`새로운 ${ndog.kind}친구가 추가되었어요! :이름:${ndog.name} /종류:${ndog.type} /나이:${ndog.age} `);
        console.log("----------")
        break;
      case Cat:
        const ncat = new Cat();
        PetManager.pets.push(ncat);
        console.log(`새로운 ${ncat.kind}친구가 추가되었어요! :이름:${ncat.name} /종류:${ncat.type} /나이:${ncat.age} `);
        console.log("----------")
        break;
      case Hamster:
        const nham = new Hamster();
        PetManager.pets.push(nham);
        console.log(`새로운 ${nham.kind}친구가 추가되었어요! :이름:${nham.name} /종류:${nham.type} /나이:${nham.age} `);
        console.log("----------")
        break;
      default:
        console.error("Unknown pet type");
    }
  }
  static start() {
    console.log(`안녕하세요! 펫 샷에 어서오세요!`)
    console.log(`실행은 "PetManager.start();"로 당신의 펫을 뽑아보세요!`)
    console.log(`기본으로 3마리가 주어지고, 추가로 원하시는 펫이 있다면,`)
    console.log(`"PetManager.addPet(펫)" 펫: Dog,Cat,Hamster을 적고 실행하시면 됩니다.`)
    console.log(`현재 가지고 있는 펫을 보고 싶다면 "PetManager.showAllPets()"을 실행해주세요`)
    console.log(`모든 준비가 끝나면 "PetManager.simulateDay()"로 3~5일의 행동을 관찰해요!`)
    const petClass = [Dog, Cat, Hamster];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * petClass.length);
      const RandomPetClass = petClass[randomIndex];
      const petInstance = new RandomPetClass();
      PetManager.pets.push(petInstance);
    }
  }
  static showAllPets() {
    PetManager.pets.forEach(pet => {
      console.log(`[${pet.kind}] 이름:${pet.name} /종류:${pet.type} /나이:${pet.age.toFixed(1)} /에너지:${pet.energy} /배고픔:${pet.hunger} `);
    });
    console.log("----------")
  }
  
  static simulateDay() {
    const dayClass = ["3", "4", "5"];
    const randomDay = Math.floor(Math.random() * dayClass.length);
    const days = parseInt(dayClass[randomDay]);
    console.log(`${days} 일이 지났어요!`)
    for(let i=0;i<days;i++){
      console.log(`-----Day-${i+1}-----`)
      for(const pet of PetManager.pets){
        pet.action()
      }
    }
    PetManager.showAllPets()
  }
}

PetManager.start();
PetManager.showAllPets()
PetManager.addPet(Dog)
PetManager.simulateDay()
