let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9; // Type 'number' is not assignable to type 'string'.ts(2322)
movieTitle.upper();

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero";

let tvShow = "Game of Thrones";
tvShow = "Last Of Us";
tvShow = false;

let gameOver: boolean = false;
gameOver = true;
gameOver = "true";

let isFunny = false;
isFunny = true;
isFunny = "asd";

// the any type
// let thing: any = "hello";
// thing = 1;
// thing = false;
// thing();
// thing.toUpperCase();

let thing = "hello";
thing.akjsdkjshad();

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];

let foundMovie: string;

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}
