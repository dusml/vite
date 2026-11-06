import { Pokemon } from "./type";

const END_POINT = 'https://pokeapi.co/api/v2/pokemon/3';

async function fetchData(url: string): Promise<Pokemon> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchData(END_POINT);

type User = {name:string; age:number;}

type Options = {
  timeout: number;
  condition: boolean;
  data: User[];
}

// satisfies: 객체가 특정 타입의 조건을 만족하는지 검사

const defaultOptions = {
  timeout: 1000,
  condition: false,
  data:[
    {name: 'tiger',age:30},
  ]
} satisfies Options;


//여기 아직 이해 못함.. ㅜㅜ
/* function delayP(options:Partial<Options> = {}) {
  const { timeout, condition, data } = {
    ...defaultOptions,
    ...options
  };

  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (condition) resolve();
      else reject(new Error('...error!..'));
    }, timeout);
  });
} */

  function delayP(options: Partial<Options> = {}): Promise<User[]> {
  const { timeout, condition, data } = {
    ...defaultOptions,
    ...options
  };

  return new Promise<User[]>((resolve, reject) => {
    setTimeout(() => {
      if (condition) resolve(data);
      else reject(new Error('..error!.'));
    }, timeout);
  });
}


delayP({
  timeout:3000,
})
.then((res)=>{
  res.forEach((user)=>{
    user.age
  })
})



async function getUser(){

  return{
    id:1,
    name:'tiger',
    age:30
  }
}

// grtUser()
//어싱크여서 프라미스가 반환 

// 알고 있으면 찾을 수 있다 . 리턴 값 타입으로 하고 싶은데 하고 검색을 할수 있다...
type UserAsync = Awaited<typeof getUser>

type UserAsyncReturnType = Awaited<ReturnType<typeof getUser>>;