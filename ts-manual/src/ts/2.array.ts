



let arr:number[] = [1,2,3];

//숫자들만 넣으면 문제가 없다 그러나 다른것을 넣으면 문제가 생기게 된다. 

let str:string[] = 'a,b,c'.split(',');


/* genneric type */

let _arr:Array<number> = [1,2,3];
let _str:Array<string> = 'a,b,c'.split(',');


/* 유니온 타입 [union type] + [array type] */

let multi:(string | number | boolean)[] = ['hello', true, 10];
//꼭 여기에 맞게 입력을 안해고 된다. |or이기 떄문이다. 자리도 정할 필요도 없다.

//자리지키고,  항목을 뺴먹으면 안돼는거 아닌가? 할때 사용하는 법

/* tuple */

let tupleA:[number, number, number] = [1, 2, 3];

// let [a, b, c]: [number, number, number] = [1, 2, 3];

let tupleB: [string, number] = ['tiger', 30];