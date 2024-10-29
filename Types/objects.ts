function printName(person: { first: string; last: string }) {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Tom", last: "Cruise" });

let coordinate: { x: number; y: number } = { x: 3, y: 6 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
