// 문제: Product 타입을 정의 후 union타입을 사용해 에러를 해결해주세요.

// import type { Person } from "./type";
//타입을 불러 올때는 type을 앞에 적어준다.



const product1:Product = {
  id: 'abc123',
  name: 'Laptop',
  price: 1000
};

const product2:Product = {
  id: 123456,
  name: 'Smartphone',
  price: 500
};


type Product = {
  id: number | string;
  name : string;
  price : number;
}




// 문제: Contact 타입을 정의 후 intersection을 사용하여 Employee를 만들어보세요.


//  a && b

// a || b


/* interface Person {
  name: string;
  age: number;
}
  타입으로 이동
 */
interface Contact {
  email: string;
  phone: string;
}

type Emp = Person & Contact;

const employee1: Emp = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
  phone: '123-456-7890'
};