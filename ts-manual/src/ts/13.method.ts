

const arr = [1,2,3]

const newArray = arr.map((item, index) => item * index);

// map, forEach, filter, reduce

//함수 형태를 만들고


type Map = <T, U>(arr: T[], f: (n: T) => U) => U[];

const map: Map = (arr, f) => {
  let result = [];

  for (const a of arr) {
    result.push(f(a));
  }

  return result;
};

map(arr, (a) => a * 2)// [2,4,6]

// ?????? 이거 