// 문제: person 객체를 정의하고 출력하세요
const person: {
  name: string;
  age: number;
}= {
  name: "John",
  age: 30
};



// 문제: discount 프로퍼티를 선택적으로 추가하고 출력하세요

const product: {
  discount?:number;
  name: string;
  price: number;
} = {
  name: "Laptop",
  price: 1000
};

product.discount = 30


// 문제:students 프로퍼티를 정의하고 출력하세요

const students: {
  name: string;
  score: number;
}[] = [
  { name: "Luke", score: 85 },
  { name: "Emma", score: 92 },
  { name: "Liam", score: 78 }
];




// 문제:user1 프로퍼티를 정의하고 출력하세요

const user1: {
  name: string;
  age: number;
  address: {
      long: number;
      lat: number;
  }[];
}= {
  name:'tiger',
  age:30,
  address:[{
    long:23.23,
    lat:40.21,
  }]
}