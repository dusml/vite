

function sayHi (message:string):string{
  return message + '⚡'
}

sayHi('hello');


function printHi(): void {
  console.log('hello');
}

printHi();

/* never type */
//전절대 발생하지 않응 값 절대 도달 할수 없는 코드(성공이 아님)
// map, set, weakMap, weakSet, websocket

function showError(message: string):never {
  throw new Error(message);
}

showError('알 수 없는 오류가 발생했습니다!');


//lazy loop
//generator function
function* gen(): Generator<number, void, void> {
  let count = 0;

  while (true) {
    yield ++count;
  }
}

const obj = gen();