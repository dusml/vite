

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


//forEach

/* type Callback = <T>(a:T, i:number)=>void
//f는 콜백 함수 함수는 ()=>void를 먼저 만들어 놓고...
type ForEach = <T>(arr:T[],f:Callback) => void



const forEach:ForEach = (arr, f) => {
  let i = 0;

  for (const a of arr) {
    f(a, i++);
  }
};

1번 
 */

type Callback<T> = (a: T, i: number) => void;

type ForEach = <T>(arr: T[], f: Callback<T>) => void;

const forEach: ForEach = (arr, f) => {
  let i = 0;

  for (const a of arr) {
    f(a, i++);
  }
};

forEach(arr, (a, i) => console.log(a));


// fillter

// 처음에는 콜백함수의 반환 타입은 T[]로 작성을 했지만, filter는 조건에 맞는 요소를 선택해야 하므로 boolean을 반환해야 한다. - 정리

//type Fillter = <T>(arr:T[],f:(a:T, i:number)=>T[])=>T[];이 블린으로 나와야 한다. 왜냐면 이프문에 서 사용 하기 떄문이다.. 이것 내가 작성한 틀린것 조건이 반환해햐 하기 떄문에....

type Filter = <T>(arr:T[],f:(a:T, i:number)=>boolean)=>T[];

const filter:Filter = (arr, f) => {
  const result = [];
  let i = 0;

  for (const a of arr) {
    if (f(a, i++)) result.push(a);
  }

  return result;
};

//reduce

// 배열의 요소를 하나씩 순회하면서 값을 누적하고, 최종 결과를 반환한다.
// T는 배열 요소의 타입이고, U는 누적값과 최종 반환값의 타입이다.
// acc는 누적값, cur은 현재 요소, i는 현재 인덱스를 의미한다.
// initial은 누적값의 초기값이며, 콜백 함수는 누적된 값(U)을 반환해야 한다.


type Reduce = <T,U>(arr:T[], f:(acc:U, cur:T ,i:number) => U, initial:U) => U;

const reduce:Reduce = (arr, f, initial) => {
  let acc = initial;
  let i = 0;

  for (const a of arr) {
    acc = f(acc, a, i++);
  }

  return acc;
};
