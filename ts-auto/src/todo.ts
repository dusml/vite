import { loadStorage, saveStorage } from "./storage";
import type { TodoList } from "./type";


// let todos:TodoList = []; 시작이 빈배열이 아닐 수도 있으니 아래와 같은 식을 만든다. 왜냐먄 값이 있으면 나오고, 없으면 빈 배열로 해서 나오게 하기 때문아다
let todos:TodoList = loadStorage();



export function addTodo(content:string):void{
  const newTodo = {
    // id:1,
    id:Date.now(),
    content: content,
    completed: false
  }
  todos.push(newTodo);
  saveStorage(todos);


  console.log(todos);
  
}