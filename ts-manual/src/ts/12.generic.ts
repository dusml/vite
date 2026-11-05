

/* generic type */

/*
제네릭(generic)이란?
타입을 미리 고정하지 않고 나중에 결정할 수 있도록 만드는 타입 변수 기능입니다.

제네릭은 다양한 타입을 하나의 코드로 처리하기 위해
타입을 매개변수처럼 전달받는 기능입니다.
*/

type User<T,U> = {name: T; age: U;}
// 여기서 T는 매개변수이다. 그래서 이름을 내 마음대로 할 수있다. 대개 T라고 한다 type의 약자 인다.

const user:User<string,number> = {
  name: 'tiger',
  age: 30
}

const user2:User<number,number> = {
  name:123123123,
  age:30
}

//함수


//함수 선언문
function fn<T>(value:T):T{
  return value;
}

// alias

// 제네릭 함수 타입 별칭
type _Fn = <T>(value: T) => T;


// 함수에 타입 적용
const _fn: _Fn = (value) => value;

_fn(10)
_fn('hi')
_fn(true)


//제네릭 타입 별칭
type __Fn <T>= (value: T) => T;
const __fn: __Fn<number> = (value) => value;

__fn(10)
__fn(20)
// __fn('hi')


// 함수 표현식
// const _fu = <T>(value:T):T => {
//   return value;
// }

/*
T => Type (타입)
U => 두 번째 Type (T 다음에 사용하는 타입)
K => Key (키, 속성 이름)
V => Value (값)
R => Return (반환값)
E => Element / Error (요소 또는 오류)
S => State (상태)
*/


function swapAtoB<T,U>(a:T,b:U):(U | T)[]{
  return [b,a]
}
//앞 뒤를 바꿔주는 함수 어디서 쓰나요? 몰라요?

swapAtoB(0,'a');

function getLength<T extends { length: number }>(arr: T): number {
  return arr.length;
}

getLength([1, 2, 3]); // 3
getLength({ length: 10 }); // 10



type Response<T> = T extends string
  ? { type: string; content: string }
  : { type: string; content: T };

const r1: Response<string> = {
  type: 'text',
  content: 'hello'
};


const r2: Response<{ name: string; age?: number }> = {
  type: 'text',
  content: {
    name: 'tiger'
  }
};