


// enum

import type { TodoList } from "./type";

const StorageKey = {
  TODOS: 'TODOS'
} as const;

export function saveStorage(todos:TodoList):void {
  localStorage.setItem(StorageKey.TODOS, JSON.stringify(todos));
  // JSON.stringify(todos) 문자로 보내야 하기ㅏ 때무넹 todos만 입력을 하면 오류가 난다. 그래서 JSON을 이용해 문자로 바꾸서 이동..
}

export function loadStorage():TodoList{
  const data = localStorage.getItem(StorageKey.TODOS);
  // return data 이렇게 하면 문자로 나오기 떄문에 ..
  return data ? JSON.parse(data) : [];
  //e데이터가 있으면 바꿔서 나오고 없으면 빈 배열을 줘라..
}