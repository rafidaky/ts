// function printName(person: { first: string; last: string }) {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "Tom", last: "Cruise" });

// printName({ first: "Mick", last: "Jagger", age: 437 }); // error
// const singer = { first: "Mick", last: "Jagger", age: 437, isAlive: true };
// printName(singer); // no error

// type Point = {
//   x: number;
//   y: number;
// };

// let coordinate: Point = { x: 3, y: 6 };

// function randomCoordinate(): Point {
//   return { x: Math.random(), y: Math.random() };
// }

// function doublePoint(point: Point): {
//   x: number;
//   y: number;
// } {
//   return { x: point.x * 2, y: point.y * 2 };
// }

// type MyNum = number;
// let age: MyNum = 2;

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}
function printSong(song: Song) {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 81726387,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);

printSong(mySong);

type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 3, z: 9 };

type User = {
  readonly id: number;
  username: string;
};

const user: User = { id: 22, username: "cat" };
// user.id = 21312;

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Golden",
  age: 2,
};
