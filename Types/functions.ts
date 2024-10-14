function square(num: number): number {
  // num.toUpperCase();
  // num();
  return num * num;
}

square(3);
// square("asd");
// square(true);

// function greet(person: string) {
//   // person * person;
//   return `Hi there, ${person}!`;
// }

// greet(true);

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("ChickenFace", 76, false);

function greet(person: string = "stranger"): string {
  // person * person;
  return `Hi there, ${person}!`;
}

greet();
greet("Tony");

// function square(num: number): number {
//   num * num;
// }

// square(3);
const add = (x: number, y: number): number => {
  return x * y;
};

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  // return "";
}

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}
