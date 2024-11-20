let age: number | string | boolean = 21;
age = 23;
age = "24";
// age = true;

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.123, long: 123.232 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}
printAge(23);
printAge("23");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// const stuff: any[] = [1, 2, 3, 4, true, "asdasd", {}];

const stuff: (number | string)[] = [1, 2, "32"];

// const stuff: number[] | string[] = [1, 2];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.123, long: 123.232 });
coords.push({ x: 3, y: 1 });

const zero: 0 = 0;

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "Angry";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Wednesday";
//  today = "Weds";
