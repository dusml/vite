


/* alias : 별칭 */
// type, interface

type User1 = {
  id: number;
  name: string;
  age: number;
  isPaid: boolean;
  // address?: string;
};

type User2 = {
  address: string;
};

type UserA = User1 & User2;

const user1:User1 ={
  id:1,
  name:'tiger',
  age:30,
  isPaid:true
}

/* const user2:User1 & {address:string}={
  id: 2,
  name:'sun',
  age: 41,
  isPaid: false,
  address:'어디게?'
} */

const user2: UserA & {} = {
  id: 2,
  name: 'sun',
  age: 41,
  isPaid: false,
  address:'남양주시 별내동'
}

interface User3 {
  id: number;
  name: string;
  age: number;
  isPaid: boolean;
  address: string;
}

//=가 없고 동일한 것으로 이름을 작성을 할수 있다. 에러가 아니라 병합이 된다.


// 직관젖으로 바꾸는 방법!
interface User4 extends User3 {
  address: string;
}

const user3: User3 = {
  id: 3,
  name: 'beom',
  age: 33,
  isPaid: true,
  address: '의정부시 민락동'
};


// 사바사 케바케 회바회 
// 객체를 정의 -> interface & 라이브러리 
// 그외 -> type  react 


// 함주를 정의 함
type Fn = (a:number,b:number) => void;


interface _Fn {
  (a:number,b:number):void;
}



/* index signature 인덱스 시그니처*/


type Person = {
  name: string;
  age: number;
  email: string;
  [kye:string]: string | number;
};

const person:Person = {
  name: 'kindtiger',
  age: 30,
  email: 'tiger@gmail.com',
  gender: 'male',
  phone: 123123
};