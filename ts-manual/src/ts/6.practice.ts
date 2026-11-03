// 문제 : un 변수에 unknown 타입을 명시 후 아래와 같은 메서드가 실행될 수 있도록 타입 좁히기를 (narrowing) 사용하여 만들어주세요

let un:unknown;

if(typeof un === 'number') {
  un.toFixed(2)
}else if(typeof un === 'string'){
  un.toUpperCase()
}else if( un instanceof Date ){
  un.getTime();
}else if( un instanceof HTMLElement ){
  un.nextElementSibling
}

// instanceof : 너 ~~로부터 생성된 인스턴스가 맞아? Error 
  
  
