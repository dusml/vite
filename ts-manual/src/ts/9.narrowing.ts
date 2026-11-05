
// 객체 아니고 타입이다. 
type Cat = {
  name: string;
  age: number;
}

//union & narrowing
function fn(x: string | number | Date | Cat){
  if (typeof x === 'string') {
    x.toUpperCase();
  } else if (typeof x === 'number') {
    x.toFixed();
  } else if (x instanceof Date) {
    x.getFullYear();
  } else if ('name' in x || 'age' in x) {
    x.age;
    x.name;
  }
}