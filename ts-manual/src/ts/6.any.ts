


/* any - 사용 안하는게 좋다!*/
let obj:any;

obj = 1;
obj = '1';
obj = { x: 10 };
obj = [1, 2, 3];
obj = () => {};
obj.toUpperCase();
obj.toFixed();
obj.includes();

/* unknown - 처음에 어떤 코드가 들어올지 모를때는 ..? 그리고 조건문이나 이런걸 톨해 타입 좁히기*/
let arr:unknown;
arr = 1;
// arr = 'hello';

// 타입 좁히기 narrowing

if (typeof arr === 'number'){
  arr.toFixed();
}

/* 

  any : 그냥 넘 믿을게
  unknown : 증명해봐 그때까진 너 못믿어

  애니는 타입검사를 포기하는 타입이고, 언노우는 타입을 아직 모르는 상태를 표현하는 타입

*/