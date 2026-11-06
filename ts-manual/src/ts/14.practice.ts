type User = {
  id: number;
  name: string;
  email?: string;
};

// 1. email만 제거한 타입

// 결과: { id: number; name: string }

type UserWithoutEmail = Omit<User,'email'>


// 2. id와 name만 포함하는 타입

// 결과: { id: number; name: string }
type UserIdWithName = Pick<User, 'id'|'name'>

// 3. 모든 속성이 선택적인 타입

// 결과: { id?: number; name?: string; email?: string }

type UserAllOtions = Partial<User>;

// 4. 모든 속성이 필수인 타입

// 결과: { id: number; name: string; email: string }

type UserAllRequired = Required<User>;

// 5. 역할('admin', 'user')을 키로, User를 값으로 가지는 타입

// type UserMap = {
//   admin:User;
//   user:User;
// }


type UserMap = {
  [K in 'admin' | 'user']: User;
};


// Record<K, T>
// Record<K, V>

type UserRecordMap = Record<'admin' | 'user', User>;

// type Role = keyof User


const users= {
  admin: { 
    id: 1, 
    name: "관리자", 
    email: "admin@test.com" 
  },
  user: { 
    id: 2, 
    name: "사용자" 
  }
};


type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// 1. UI 렌더링 시 불필요한 completed 속성을 제거하세요.
type DisplayTodo = Omit<Todo, 'completed'>;

// 2. Todo의 키만을 유니온으로 만들고,
// 각 항목에 대한 설명(value) string을 저장할 수 있는 타입을 만드세요.
type TodoMap = Record<keyof Todo, string>;

