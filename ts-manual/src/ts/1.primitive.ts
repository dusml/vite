



// number, string, boolean, null, undefined

/* number type */

// let num1 = 10; 타입추론 
let num1:number = 10; //직접 명시가 가능하다. 타입 명시 복잡한 것은 명시가 더 좋다.
let num2:number = NaN;
let num3:number = -123123;
let num4:number = -Infinity;
let num5:number = Infinity;
let num6:number = 123.54123123;

/* string */
let str1 = 'hi';
let str2 = "hi";
let str3:string = `hello${num1}`;

/* boolean */

let bool1:boolean = true;
let bool2:boolean = false;

bool1 = Boolean('1');

/* null */

let nullA:null = null;

/* undefined */
let undef:undefined = undefined;

/* Literal type  - 이 값이 아니면 절대 안돼!!*/

let numA:10 = 10; //무조선 10만 받을 수 있다.
//const와 비슷?? 
// numA = 30;
let boolA: true = true; // 해당변수는 true만 들어갈 수 있음.


/* unknown type */

let unknown:unknown;

/* never */
let never:never;

/* any - 모든걸 다 수용하겠다. 있지만 사용..? 안돼?? 에러가 많이 나면 에니를 때려 박는다...?? 하면 안됀다..*/
let any:any;