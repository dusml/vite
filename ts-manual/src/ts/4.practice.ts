// 문제: product 객체에 Product 타입과 동적 속성을 추가하세요


const product:Product1 = {
  name: "Laptop",
  price: 1000
};

type Product1 ={
  name: string;
  price: number;
  [ket:string]:string | number;
}

// 동적으로 속성 추가 - 인덱스 시그니처
product.discount = 10; // 할인율
product.color = "black"; // 색상

console.log(product); // { name: 'Laptop', price: 1000, discount: 10, color: 'black' }




// 문제: employeeData에 Employee타입을 지정하고 동적으로 들어오는 정보를 추가하세요
// 잘게 쪼개서 해면 된다.

type User = {
  name: string;
  position: string;
  salary: number;
  [key: string]: number | string;
};

type Emp = {
  [key: string]: User;
};

const employeeData:Emp = {
  John: { 
    name: "John", 
    position: "Developer", 
    salary: 5000 
  }
};



// 동적으로 추가적인 정보 추가
employeeData["Alice"] = { 
  name: "Alice", 
  position: "Manager", 
  salary: 6000, 
  department: "Sales" 
}; 