
/*
typeof는 기존 변수나 객체의 타입을 가져오는 타입 연산자입니다.
JS의 typeof !== TS typeof;

이미 만들어진 값의 타입을 그대로 복사해서 새로운 타입을 만드는 기능

왜 사용하나다요??

객체를 쓸때마다 타입을 또 작성하는 것은 비횰율적이기 때문이다.

*/

const user ={
  name: 'tiger',
  age: 30,
  gender: 'male',
  address: '남양주 별내동'
}

type User = typeof user;

/* keyof 는 타입의 key만 모아 새로운 타입을 만듦 */
type UserKey = keyof User;

type UserValue =  User[keyof User];

type UserType = keyof typeof user;


// TS에서 typeof 뒤에 오는 대상은 자바스크립트 값이나 객체가 와야 함
// TS에서 keyof 뒤에 오는 대상은 타입이 와야 함 