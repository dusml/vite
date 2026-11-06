
// 할 일 목록  = 아이쳄
export interface Todo{
  id:number;
  content: string;
  completed: boolean;
}

// 할 일 목록 = 투두의 배열
export type TodoList = Todo[]