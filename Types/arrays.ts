const activeUsers: string[] = [];

activeUsers.push("steven");
activeUsers.push("Tony");
// activeUsers.push(12);

const ageList: number[] = [45, 12, 32];
ageList[0] = 99;
// ageList[0] = "asd";

// const bools: boolean[] = [];
const bools: Array<boolean> = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });
// coords.push({  y: 8 });

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[1], [2]]];
