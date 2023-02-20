let age: number | string | boolean = 21;
age = "22";
age = 22;
age = true;

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 34234.23423, long: 2323.2323 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}
printAge(23);
printAge("87");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// const stuff: any[] = [1, 2, 3, 4, true, "kahjsd", {}];

const stuff: (number | string)[] = [1, 2, "32"];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 34234.23423, long: 2323.2323 });
coords.push({ x: 1, y: 34 });

let zero: 0 = 0;
// zero = 3;

let hi: "hi" = "hi";

let mood: "Happy" | "Sad" = "Happy";

mood = "Sad";
mood = "Happy";
// mood = "Angry";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Friday";
