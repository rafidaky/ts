const activeUsers: string[] = [];
activeUsers.push("sjdjshd");

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
// ageList[0] = '99';

// const bools: Array<boolean> = [];
const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];

coords.push({ x: 23, y: 8 });
// coords.push({ x: 23, y: "8" });

//multidimensional array
const board: string[][] = [
  ["X", "O", "x"],
  ["X", "O", "x"],
  ["X", "O", "x"],
];
//three dimensional
const demo: number[][][] = [[[1]]];
