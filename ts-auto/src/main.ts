import { loadStorage } from './storage';
import { addTodo } from './todo';
import type { Todo } from './type';
import S from '/src/style.module.css'
//경로 잡는 법과 css파일 넣는 법 .. 

const tag = /* html */`
  <div class=${S.container}>
    <button type="button" class="completed">완료 항목만 보기</button>
    <hr/>
    <form>
      <label for="todo">할 일 : </label>
      <input type="text" id="todo"/>
      <button type="submit">추가</button>
    </form>

    <hr/>

    <ul id="renderPlace"></ul>
  </div>
`

document.querySelector('#app')?.insertAdjacentHTML('beforeend',tag);

const input = document.querySelector('#todo') as HTMLInputElement //as 는 인풋 태그가 맞고 무조건 돔에 존재해!! input element가 맞다고 확정지음으로써 오류해결
const form = document.querySelector('form');
const list = document.querySelector('#renderPlace') as HTMLUListElement;
//렌더링 할 곳



//SubmitEvent 처럼 이벤트 타입도 다 정해 져 있다.
function handleSubmit(e:SubmitEvent){
  e.preventDefault();

  if(input){
    if(!input.value.trim())return;

    // console.log(input.value.trim());
    addTodo(input.value.trim())

    input.value = ''; 
  }
  render();

}

//렌더링 할 함수
function render(){

  const todos: Todo[] = loadStorage();
  //실행 한 결과를 가져온다. 

  list.textContent = '';
  //리스트는 먼지 비워두고.. 텍스트 컨텐트로.. 


  // 반복문을 사용해서 열거 하기 
  todos.forEach((todo: Todo) => {
    const li = document.createElement('li');
    li.dataset.id = String(todo.id);
    li.innerHTML = `<span>${todo.content}</span>`;
    list.appendChild(li);
  })
}
render();


form?.addEventListener('submit',handleSubmit)