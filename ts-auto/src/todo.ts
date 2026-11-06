import { loadStorage, saveStorage } from "./storage";
import type { TodoList } from "./type";


// let todos:TodoList = []; 시작이 빈배열이 아닐 수도 있으니 아래와 같은 식을 만든다. 왜냐먄 값이 있으면 나오고, 없으면 빈 배열로 해서 나오게 하기 때문아다
let todos:TodoList = loadStorage();


//새로운 객체만 해서..??
export function addTodo(content:string):void{
  const newTodo = {
    // id:1,
    id:Date.now(),
    content: content,
    completed: false
  }
  todos.push(newTodo);
  saveStorage(todos); //로컬 스토리지에 반영하는 것


  console.log(todos);
  
}

// todos 배열에서 특정 id만 제외하고 나머지 배열을 받음.
export function deleteTodo(id: number): void {
  todos = todos.filter((todo) => todo.id !== id);
  saveStorage(todos);
}

//map을 사용해 기존 배열에서 id가 일치하는 대상만 찾아 completed를 반전시킨다.
export function toggleTodo(id: number): void {
  todos = todos.map((todo) => 
    todo.id === id ? { ...todo, completed: !todo.completed }: todo
  );
  saveStorage(todos);
}

//update Todo
//먼저 이벤트를 걸고 업데이크로 -> 아이디가 들어오고, 글자가 들어 온다, 매개 변스에 / 아이디는 숫자, 뉴 컨텐트는 문자로.. 내보내는 값은 보이드 !! 
//기존의 값을 업데이트 하는 것이 떄무네 투두스에서 맵을 돌려서 아이디가 같다면 열거를 해서 뉴 컨텐트로 바꾸고 아니면 투두로 하겠다.
export function updateTodo (id:number,newContent:string):void{
  // console.log(id, newContent);
  todos = todos.map((todo) =>
  todo.id === id ? { ...todo, content: newContent }: todo);
  //세이브를 넣어주면 바꾼 데이터가 나오게 된다.
  saveStorage(todos);
}

// 완료 항목만 보기 필터링으로 완요가 된 항목만 보이게 된다.. 
export function getCompletedTodos(): TodoList {
  return todos.filter((todo) => todo.completed);
}

//요 패턴이 크게 달라지지 않는다.. ?? ㅜㅜ 