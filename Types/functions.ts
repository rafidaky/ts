function square(num: number): number {
  return num * num;
}

square(3);

// function greet(person: string) {
//   return `Hi there, ${person}!`;
// }

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("Chicken Face", 76, false);

function greet(person: string = "stranger") {
  return `Hi there, ${person}!`;
}

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

greet();
greet("Tony");

const colors = ["red", "orange", "yellow"];
colors.map((color: string) => {
  console.log("color", color);
  return color.toUpperCase();
});

function printTwice(msg: string): void {
  console.log(msg);
}
function giveError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("sss");
  }
}
