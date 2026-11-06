

/* Omit<T, K> - 생략하다 빼다.라는 뜻을...*/
// 기존 타입 T에서 지정한 속성 K를 제외한 새로운 타입을 만든다.

type User = {
  id: number;
  name: string;
  email: string;
  address:string;
  isPaid:boolean;
};

type PublicUser = Omit<User,'email'>

/* Pick <T, K> - 뽑아 쓰다. */
// 기존 타입 T에서 필요한 속성 K만 선택해 새로운 타입을 만든다.
type PickUser = Pick<User, 'id'|'address'>

const user2: Pick<User, 'id' | 'name'> = {
  id: 2,
  name: 'beom'
};



type UserData = {
  id: number;
  name: string;
  email: string;
  address: {
    lat: number;
    long: number;
  };
};

/* Partial<T> - 여기 안에서는 옵셔널이 된다.  */
// Partial<T> - 기존 타입 T의 모든 속성을 선택적 속성으로 만든다.
// 즉, 각 속성에 ?가 붙은 것과 같은 효과가 있다

const user3:Partial<UserData> = {
  name:'tiger'
}


// Required<T> - 모든 속성을 필수로 만든다.
// 기존 타입에서 선택적 속성(?)을 제거한다.
// Partial<T>과 반대되는 개념이다.

type UserAllRequired = Required<User>;