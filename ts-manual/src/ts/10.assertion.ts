

/* DOM을 조작 document.querySelector() => null
  => HTML에 존재하지 않음 or 아직 로드가 안됨(defer)
  or 태그 생성이 안됨
  elem.addEventListener()
*/

// TS에서 null일 가능성이 있기 때문에 위험하다.

/*
<input type="text" id="textField">
*/

//const input = document.querySelector('#textField') as HTMLInputElement; //input맞는데
// const input = document.querySelector('#textField') as HTMLInputElement; // type assertion
// const input = document.querySelector<HTMLInputElement>('#textField'); // generic type assertion
const input = document.querySelector<HTMLInputElement>('#textField')!; // non-null assertion
const app = document.querySelector('#app')!;

// 네가 지금 잡은 대상이 null일 수 있어. 있으면 수행하고 없으면 수행하지 않겠급 조건으로.. 무조건 단언한다고 좋은게 아님
if (input) {
  input.value;
}

(input as HTMLInputElement).value;



const personA: {
  readonly name: string;
  readonly age: number;
} = {
  name: 'tiger',
  age: 30
};

//personA.name = 'sun'; // 오류 발생!

// const 단언 - 여기에 있는 값은 이제 바꿀수 없다!!
const personB = {
  name:'sun',
  age:35
} as const



