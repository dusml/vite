
// declare
// 타입만  선언 하는게 좋다. 변수나 함수는 ❌

declare global{
  interface Person {
    name: string;
    age: number;
  }
}
//전역에서 다른 파일에서도 Person 타입을 별도로 import하지 않고 사용할 수 있도록 하는 것이야.


// export interface Person {
//   name: string;
//   age: number;
// }
