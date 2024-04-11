export {};

let numbers: number[] = [1,2,3];
console.log(numbers);


let numbers2: Array<number> = [1,2,3]
let string2: string[] = ["tokyo","osaka","kyoto"];
console.log(string2);

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];
console.log(nijigenHairetsu);

let hairetsu: (string | number | boolean)[] = [1, false, "Japan"];
//|にはorの意味がある。共用型と呼ぶ。