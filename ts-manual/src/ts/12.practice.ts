// 이전에 작성한 함수의 타입을 지정해주세요

function getRandom(n:number):number{
  return Math.floor(Math.random() * n)
}



function getDay(num:number):string{
    switch (num) {
    case 0: return "월";
    case 1: return "화";
    case 2: return "수";
    case 3: return "목";
    case 4: return "금";
    case 5: return "토";
    case 6: return "일";
  }
  return ''
}



function weekend():string {
  const today = getDay(getRandom(7));

  let day = today.includes("토") ? "토요일" : today.includes("일") ? "일요일" : "평일";

  return day;

}


function rem(pxValue: string | number ,base:number = 0){
  if(typeof pxValue === 'string') pxValue = parseInt(pxValue,10);
  return pxValue / base + 'rem'
}



let pow = (numeric: number,powerCount: number):number => {
  let result = 1;
  for(let i = 0; i < powerCount; i++){
    result *= numeric;
  }
  return result;
}; 




let repeat = (text: string,repeatCount: number):string =>{
  let result = '';
  for(let i = 0; i < repeatCount; i++){
    result += text;
  }
  return result;
}; 



let calculateTotal = function(...args: number[]):number{
  
  let total = 0;
  args.forEach((a)=>{
    total += a;
  })
  return total
}

calculateTotal(10,20,30)


//⭐⭐⭐⭐⭐⭐⭐⭐
type Success = (url:string) => void;
type Fail = (err:{message:string}) => void;
type MovePage = (url: string, success: Success, fail: Fail) => void;


const movePage:MovePage = (url,success,fail ):void =>{

  if(url.match(/http.+www/) && typeof url === 'string'){
    success(url);

  }else{
    fail({message:'error!'});
  }
}



movePage(
  'https://www.naver.com',
  (url: any)=> console.log(url),
  ()=>{}
)








// Date 타입을 제네릭으로 정의해주세요

interface Data<T> {
  success: boolean;
  data: T;
}

const userData:Data<{name:string,age:number}> = {
  success: true,
  data: { name: 'tiger', age: 25 }
};

const listData:Data<string []> = {
  success: true,
  data: ['apple', 'banana', 'cherry']
};



// 제네릭과 확장(extends)을 사용하여 name속성이 없을 경우 에러를 발생시켜주세요.

function getName<T extends { name: string }>(value: T): string {
  return value.name;
}

getName({name:'tiger',age:30})
// getName({nickName:'beom',age:30}) 

// 😥😥😥😥type U = infer 데이터;

// T가 배열 타입이라면 배열 안에 들어 있는 요소의 타입을 추론해서 반환하고, 배열이 아니라면 never를 반환한다.
type ElementType<T> = T extends (infer U)[] ? U : never;

function logFirst<T>(arr: T[]): void {
  const first: ElementType<T[]> = arr[0];
  console.log(first);
}


logFirst(['apple','banana']);
logFirst([1,2,3]);


function includesValue<T>(arr: T[], value: T): boolean {
  return arr.includes(value);
}

includesValue(['a','b','c'],'b') // true
// includesValue(['a','b','c'],3) // error