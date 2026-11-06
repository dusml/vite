import { loadStorage } from './storage';
import { addTodo, deleteTodo, getCompletedTodos, toggleTodo, updateTodo } from './todo';
import type { Todo } from './type';
import S from '/src/style.module.css'
//경로 잡는 법과 css파일 넣는 법 .. 

//전체 큰 틀을 렌더링!! 이걸로 끝!!
const tag = /* html */`
  <div class="${S.container}">
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

//아무것도 없을 때 화면에 나오는 것!
function empty(){
  return `
    <div class="${S.empty}">
      <h3>오늘은 무슨 일을 할까? 🤔</h3>
    </div>
  `
}


let toggle = false;
const input = document.querySelector('#todo') as HTMLInputElement //as 는 인풋 태그가 맞고 무조건 돔에 존재해!! input element가 맞다고 확정지음으로써 오류해결
const form = document.querySelector('form');
const list = document.querySelector('#renderPlace') as HTMLUListElement;
//렌더링 할 곳
const completed = document.querySelector('.completed') as HTMLButtonElement


//SubmitEvent 처럼 이벤트 타입도 다 정해 져 있다.
function handleSubmit(e:SubmitEvent){
  e.preventDefault();

  if(!input.value.trim()) return;
  
  addTodo(input.value.trim())
  input.value = '';
  render()
}

//렌더링 할 함수 화면에 그림을 그리는... 안에 아이템은 나중에뺴야 한다. 컴포넌트로.. 태그가 생성괴는 시점에서 이벤트 바인딩을 해야 한다 안그러면 못찾는다. 
// 여기에 조건을 달아서.. 
function render(showCompleted: boolean = false) {
  const todos: Todo[] = showCompleted ? getCompletedTodos() : loadStorage();
  //실행 한 결과를 가져온다. 

  if (showCompleted) {
    completed.textContent = '전체 항목 보기';
  } else {
    completed.textContent = '완료 항목 보기';
  }

  //아무것도 없을때 작동을 해서 오늘은 무슨일이 할까라는 항목이 나온다.. 
  list.innerHTML = todos.length < 1 ? empty() : '';

  // list.textContent = ''; 이저 기우고 위에 식을 넣음
  //리스트는 먼지 비워두고.. 텍스트 컨텐트로.. 


  // 반복문을 사용해서 열거 하기 
  todos.forEach((todo: Todo) => {
    const li = document.createElement('li');
    li.dataset.id = String(todo.id);
    li.innerHTML = /* html */`
      <input type="checkbox" name="checkbox" ${todo.completed ? 'checked' : ''}/>
      <span contenteditable="true">${todo.content}</span>
      <button type="button" class="delete">삭제</button>
    `
    
    const btn = li.querySelector('button');
    const checkbox = li.querySelector('input');
    const span = li.querySelector('span');

    //ts에서 자동으로 옵셔널 체인지응 준다.
    btn?.addEventListener('click', () => {
      deleteTodo(todo.id);
      render()
    });

    checkbox?.addEventListener('change', () => {
      toggleTodo(todo.id)
      render()
    });

    span?.addEventListener('blur',()=>{
      //글을 읽어 오기 때문에 텍스트로...
      const newContent = span.textContent.trim();
      // console.log(newContent);
      //조건으로 중복반지..???

      if (newContent && newContent !== todo.content) {
        updateTodo(todo.id, newContent);
        render();
      }
    })

    list.appendChild(li);
  })
}
render();


function handleCompleted() {
  render(toggle);
  toggle = !toggle;
}

form?.addEventListener('submit', handleSubmit);
completed?.addEventListener('click', handleCompleted);