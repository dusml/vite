// 문제: logMessage 함수는 메시지를 콘솔에 출력만 하고, 반환 값은 없습니다.




function logMessage(message:string):void {
  console.log(message);
}



// 문제: throwError 함수는 항상 예외를 던지고 종료되지 않습니다.

function throwError(message:string):never{
  throw new Error(message);  // 예외를 던지고 함수 종료
}




// 문제: 무한루프 함수는 값을 반환하지 않고 종료되지도 않습니다.

function infiniteLoop():never{
  while (true) {
    console.log("This will never stop!");
  }
}