# Frontend Learning Notes

프론트엔드 수업에서 배운 개념과 실습 내용을 기록하는 학습 노트입니다.

수업 중 중요하게 다룬 내용과 핵심 코드를 정리하고, 이해가 부족했던 부분을 복습하기 위해 작성했습니다. 나중에 다시 읽었을 때 **무엇을 만들었고, 왜 그렇게 작성했는지** 떠올릴 수 있도록 코드의 의미와 주의할 점을 함께 기록합니다.

---

## 📚 학습 내용

이번 실습에서는 Vite로 개발 환경을 구성하고, TypeScript로 변수·배열·객체·함수의 타입을 표현했습니다.

| 폴더 | 실습 내용 |
| --- | --- |
| `vite-auto` | 기본 템플릿으로 구성한 Vite 프로젝트와 카운터 예제 |
| `vite-manual` | Vite 설정 직접 작성, CSS Modules, 이미지 가져오기, 경로 별칭 |
| `ts-manual` | TypeScript 컴파일 환경, 기본 타입과 연습 문제 |

### 핵심 개념

Vite는 개발 중 코드를 확인할 개발 서버와 배포용 파일을 만드는 빌드 기능을 제공합니다. TypeScript는 JavaScript 코드에 타입 정보를 더해, 값이나 함수를 잘못 사용하는 부분을 실행 전에 확인하도록 돕습니다.

두 도구의 역할은 구분해서 기억합니다. 개발 서버를 실행하는 것과 타입 검사를 수행하는 것은 별개의 작업이며, 현재 `ts-manual`은 Vite 없이 TypeScript 컴파일러를 직접 사용하는 실습입니다.

### 중요 포인트

> 타입은 코드에서 사용할 값의 형태를 설명합니다. 타입 선언 자체가 실행 중 들어오는 데이터를 검사하거나 변환해 주지는 않습니다.

- 타입이 `number`라고 해서 문자열이 자동으로 숫자로 변환되지는 않습니다.
- TypeScript의 타입 정보는 JavaScript로 컴파일할 때 제거됩니다.
- 외부에서 들어온 값은 실제 값을 확인하는 조건문도 필요합니다.
- 타입 오류를 없애려고 `any`를 사용하면, 확인해야 할 문제를 놓칠 수 있습니다.

---

## 🛠️ 실습 내용과 💻 핵심 코드

아래 코드는 저장소의 실습을 바탕으로 정리했습니다. 설명을 위한 예시는 변수명이나 구조를 간단하게 바꾸었으며, 오류 예시는 주석으로 표시했습니다.

### 1. Vite 자동 구성과 수동 설정 비교하기

**관련 파일:** [수동 설정 파일](vite-manual/vite.config.js), [Vite 실행 스크립트](vite-manual/package.json)

`vite-auto`에서는 기본 템플릿의 파일 구조와 카운터 예제를 살펴봤습니다. `vite-manual`에서는 개발 서버와 빌드 경로 등을 직접 설정하면서 각 설정이 어떤 역할을 하는지 학습했습니다.

다음은 실제 설정에서 서버·빌드·별칭 부분을 추린 코드입니다.

```js
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
    cors: true,
  },
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
});
```

| 설정 | 이 실습에서의 의미 |
| --- | --- |
| `server.host` | 개발 서버의 호스트를 `localhost`로 지정 |
| `server.port` | 개발 서버가 사용할 포트를 `3000`으로 지정 |
| `server.cors` | 개발 서버의 CORS 허용 설정 |
| `build.outDir` | 빌드 결과를 기본 `dist/` 대신 `docs/`에 출력 |
| `resolve.alias` | `@`를 `src`의 절대 경로에 연결 |

예를 들어 `@/assets/visual.jpg`는 `src/assets/visual.jpg`를 가리킵니다. 파일의 위치가 깊어졌을 때 `../../../`처럼 상위 폴더를 반복해서 적는 일을 줄일 수 있습니다.

**기억할 점:** `@`는 JavaScript가 원래 제공하는 경로 기호가 아니라, 이 프로젝트에서 설정한 별칭입니다. `docs/`에 빌드 파일이 생기는 것만으로 사이트가 자동 배포되는 것은 아닙니다.

### 2. CSS Modules와 이미지 가져오기

**관련 파일:** [화면 코드](vite-manual/src/main.js), [모듈 스타일](vite-manual/src/style.module.css)

일반 CSS는 같은 클래스 이름을 여러 곳에서 사용하면 스타일이 겹칠 수 있습니다. CSS Modules는 클래스 이름을 변환해 파일 사이의 이름 충돌을 줄입니다.

```js
import visual from '@/assets/visual.jpg';
import '@/style.css';
import S from '@/style.module.css';

const template = `
  <div>
    <h2 class="${S.title}">hello vite!</h2>
    <img width="300" src="${visual}" alt="" />
  </div>
`;

document.body.insertAdjacentHTML('beforeend', template);
```

**코드를 읽는 순서**

1. 이미지 파일을 가져오면 Vite가 처리한 이미지 URL을 `visual`로 사용합니다.
2. 일반 CSS인 `style.css`를 가져와 전체 스타일을 적용합니다.
3. `style.module.css`에서는 클래스 이름에 대응하는 값을 `S`로 가져옵니다.
4. `S.title`을 HTML의 클래스에 넣고, 이미지 URL을 `src`에 넣습니다.
5. 완성한 HTML 문자열을 `body`의 끝에 추가합니다.

수동 설정에서는 개발 환경에 `css__[local]___[hash:base64:5]`, 빌드 환경에 `[hash:base64:3]` 형식을 사용했습니다. 개발 중에는 원래 클래스 이름을 알아보기 쉽게 하고, 빌드에서는 짧은 이름을 사용하도록 구성했습니다.

**기억할 점:** CSS에 `.title`을 작성해도 화면에 적용하는 값은 변환된 이름인 `S.title`입니다. 클래스 이름 전체를 외워 쓰기보다 가져온 객체의 속성으로 참조합니다.

### 3. 원시 타입, 타입 추론, 리터럴 타입

**관련 파일:** [기본 타입](ts-manual/src/ts/1.primitive.ts), [타입 지정 연습](ts-manual/src/ts/1.practice.ts)

변수 뒤에 `: 타입`을 적어 담을 값의 종류를 지정합니다. 초기값이 있으면 TypeScript가 타입을 추론하기도 합니다.

```ts
let age: number = 30;
let nickName = 'tiger'; // string으로 추론
let isStudent: boolean = false;
let nothing: null = null;
let notDefined: undefined = undefined;

age = 31;
// age = '31'; // 오류: string을 number 변수에 대입할 수 없음

let fixedNumber: 10 = 10;
// fixedNumber = 20; // 오류: 10이라는 값만 허용
```

`number`는 숫자라는 범위를, 리터럴 타입 `10`은 특정 값 하나를 표현합니다. 실습에서 다룬 `NaN`과 `Infinity`도 `number`에 해당하므로, `number` 타입이 곧 유효한 나이나 가격을 뜻하는 것은 아닙니다.

**기억할 점:** `let fixedNumber: 10`은 변수 재할당 자체를 금지하지 않습니다. 허용되는 값을 `10`으로 제한합니다. `const`는 변수의 재할당을 막는 선언 방식이므로 역할을 구분합니다.

### 4. 배열, 유니온 배열, 튜플 구분하기

**관련 파일:** [배열 타입](ts-manual/src/ts/2.array.ts), [배열 연습](ts-manual/src/ts/2.practice.ts)

```ts
let numbers: number[] = [1, 2, 3];
let otherNumbers: Array<number> = [4, 5, 6];
let fruits: string[] = ['apple', 'banana', 'cherry'];

let mixed: (number | string)[] = [1, 'apple', 2, 'banana'];
let profile: [string, number] = ['tiger', 30];

let matrix: [number, number, number][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

| 표현 | 읽는 방법 |
| --- | --- |
| `number[]` | 각 요소가 숫자인 배열 |
| `Array<number>` | `number[]`와 같은 의미의 표기 |
| `(number \| string)[]` | 각 요소에 숫자 또는 문자열을 허용하는 배열 |
| `[string, number]` | 첫 번째는 문자열, 두 번째는 숫자인 튜플 |
| `[number, number, number][]` | 세 숫자로 구성된 튜플들을 담는 배열 |

유니온 배열은 숫자와 문자열의 순서를 고정하지 않습니다. 반면 `profile` 튜플은 이름과 나이처럼 위치마다 의미가 있는 데이터에 사용할 수 있습니다. `matrix`는 각 행에 숫자 세 개를 요구하지만, 바깥 배열의 행 개수를 세 개로 고정하지는 않습니다.

**기억할 점:** 튜플은 타입 검사 규칙입니다. 실행 중 배열을 얼리거나 변경을 막아 주는 기능은 아닙니다.

### 5. 객체, 선택적 속성, 읽기 전용 속성

**관련 파일:** [객체 타입](ts-manual/src/ts/3.object.ts), [객체 연습](ts-manual/src/ts/3.practice.ts)

상품 객체에 이름과 가격은 반드시 필요하지만, 할인율은 없을 수도 있는 상황을 표현했습니다.

```ts
const product: {
  name: string;
  price: number;
  discount?: number;
} = {
  name: 'Laptop',
  price: 1000,
};

product.discount = 30;

const config: { readonly apiKey: string } = {
  apiKey: 'example-key',
};

// config.apiKey = 'another-key'; // 오류: readonly 속성
```

`discount?`는 속성을 생략할 수 있다는 뜻입니다. 읽을 때는 값이 `undefined`일 수 있으므로 확인해야 합니다.

```ts
if (product.discount !== undefined) {
  console.log(product.discount.toFixed(0));
}
```

학생 목록에서는 `{ name: string; score: number }[]`로 객체 배열을 표현했습니다. 사용자 주소에서는 `address: { long: number; lat: number }[]`처럼 객체 안에 좌표 객체 배열을 넣었습니다. 중첩 구조도 바깥 객체부터 한 단계씩 나눠 읽으면 이해하기 쉽습니다.

**기억할 점:** `const`로 선언한 객체도 속성은 수정할 수 있습니다. `readonly`는 해당 속성의 재대입을 타입 검사에서 막으며, JavaScript 실행 중 객체를 동결하지는 않습니다.

### 6. 타입 별칭, 인터페이스, 교차 타입

**관련 파일:** [타입 별칭과 인터페이스](ts-manual/src/ts/4.alias.ts)

같은 객체 구조를 여러 곳에 반복해서 적지 않도록 타입에 이름을 붙였습니다.

```ts
type User = {
  id: number;
  name: string;
  age: number;
  isPaid: boolean;
};

type Address = { address: string };
type UserWithAddress = User & Address;

const user: UserWithAddress = {
  id: 1,
  name: 'tiger',
  age: 30,
  isPaid: true,
  address: '서울',
};

interface Member {
  id: number;
  name: string;
}

interface MemberWithAddress extends Member {
  address: string;
}
```

`User & Address`는 두 타입의 조건을 모두 만족해야 하는 교차 타입입니다. `User` 또는 `Address` 중 하나를 허용하는 유니온 타입 `User | Address`와 구분합니다.

인터페이스는 `extends`로 기존 구조를 확장할 수 있습니다. 같은 이름의 인터페이스 선언은 호환되는 조건에서 병합될 수 있지만, 타입 별칭은 같은 이름으로 다시 선언할 수 없습니다. 타입 별칭은 객체 외에도 유니온이나 튜플 등에 이름을 붙일 수 있습니다.

**기억할 점:** 객체 타입을 정의할 때 둘 다 사용할 수 있습니다. 하나만 무조건 정답으로 외우기보다 확장과 병합 필요성, 프로젝트의 작성 방식을 보고 선택합니다.

### 7. 인덱스 시그니처로 동적 속성 표현하기

**관련 파일:** [동적 속성 연습](ts-manual/src/ts/4.practice.ts)

상품에 할인율과 색상을 추가하거나, 직원 이름을 키로 새 직원을 등록하는 상황을 실습했습니다.

```ts
type Employee = {
  name: string;
  position: string;
  salary: number;
  [key: string]: string | number;
};

type EmployeeData = {
  [key: string]: Employee;
};

const employeeData: EmployeeData = {
  John: {
    name: 'John',
    position: 'Developer',
    salary: 5000,
  },
};

employeeData['Alice'] = {
  name: 'Alice',
  position: 'Manager',
  salary: 6000,
  department: 'Sales',
};
```

여기에는 두 단계의 인덱스 시그니처가 있습니다. 바깥쪽은 직원 이름에 해당하는 키마다 `Employee` 객체를 저장합니다. 안쪽은 직원 객체에 `department` 같은 추가 속성을 허용하며, 그 값은 문자열 또는 숫자로 제한합니다.

**기억할 점:** 인덱스 시그니처를 쓰면 `department`뿐 아니라 다른 문자열 키도 허용됩니다. 속성 이름이 정해져 있다면 `department?: string`처럼 구체적으로 적는 편이 오타를 찾기 쉽습니다. 명시한 속성도 인덱스 시그니처의 값 타입과 호환되어야 합니다.

### 8. any와 unknown 비교하고 타입 좁히기

**관련 파일:** [any와 unknown](ts-manual/src/ts/6.any.ts), [타입 좁히기 연습](ts-manual/src/ts/6.practice.ts)

둘 다 여러 종류의 값을 받을 수 있지만, 값을 사용할 때의 검사 방식이 다릅니다.

```ts
let unsafe: any = 123;
// unsafe.toUpperCase();
// 타입 검사에서 허용하지만 실행하면 TypeError 발생

function formatValue(value: unknown): string {
  if (typeof value === 'number') {
    return value.toFixed(2);
  }

  if (typeof value === 'string') {
    return value.toUpperCase();
  }

  if (value instanceof Date) {
    return String(value.getTime());
  }

  return '지원하지 않는 값입니다.';
}

formatValue(12.3);   // '12.30'
formatValue('hello'); // 'HELLO'
formatValue(true);  // '지원하지 않는 값입니다.'
```

조건문 안에서는 TypeScript가 `value`를 숫자, 문자열, 날짜 객체로 판단할 수 있습니다. 이렇게 가능한 타입의 범위를 줄이는 과정이 **타입 좁히기(narrowing)**입니다. `toFixed()`의 결과도 숫자가 아닌 문자열이라는 점을 함께 기억합니다.

실습에서는 `un instanceof HTMLElement`로 HTML 요소인지 확인한 뒤 `nextElementSibling`을 참조하는 코드도 작성했습니다. `HTMLElement`는 브라우저 환경에서 제공되는 값이므로 실행 환경도 고려해야 합니다.

| 타입 | 여러 값 대입 | 메서드 사용 전 확인 |
| --- | --- | --- |
| `any` | 가능 | 타입 검사를 우회하므로 확인 없이도 허용 |
| `unknown` | 가능 | 해당 타입임을 확인해야 사용 가능 |

**기억할 점:** 타입 좁히기는 단순히 오류를 지우는 과정이 아니라, 실행할 연산이 실제 값에 맞는지 확인하는 과정입니다.

### 9. 함수 반환 타입과 void·never

**관련 파일:** [함수 반환 타입](ts-manual/src/ts/7.void.ts), [함수 연습](ts-manual/src/ts/7.practice.ts)

```ts
function sayHi(message: string): string {
  return message + '⚡';
}

function logMessage(message: string): void {
  console.log(message);
}

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // 종료 조건 없이 계속 반복
  }
}
```

| 함수 | 반환 타입을 지정한 이유 |
| --- | --- |
| `sayHi` | 문자열 결과를 호출한 곳에 돌려주므로 `string` |
| `logMessage` | 출력만 하고 반환값을 제공하지 않으므로 `void` |
| `throwError` | 예외를 던져 정상적으로 반환하지 않으므로 `never` |
| `infiniteLoop` | 반복문을 빠져나오지 않아 정상적으로 반환하지 않으므로 `never` |

`logMessage`는 실행이 끝나면 다음 코드로 진행합니다. `throwError`는 정상 반환 대신 예외를 발생시키며, 처리할 `catch`가 없다면 이후 코드가 실행되지 않습니다. 예외를 던지는 함수가 무한히 실행된다는 뜻은 아닙니다.

**기억할 점:** 콘솔에 값을 출력하는 것과 `return`으로 값을 돌려주는 것은 다릅니다. `void`와 `never`도 단순히 둘 다 반환값이 없다고 묶지 말고, 정상적으로 호출을 마칠 수 있는지를 기준으로 구분합니다.

### 10. 제너레이터로 필요할 때 다음 값 만들기

**관련 파일:** [제너레이터 예제](ts-manual/src/ts/7.void.ts)

```ts
function* gen(): Generator<number, void, void> {
  let count = 0;

  while (true) {
    yield ++count;
  }
}

const sequence = gen();
sequence.next(); // { value: 1, done: false }
sequence.next(); // { value: 2, done: false }
sequence.next(); // { value: 3, done: false }
```

`gen()`을 호출하면 제너레이터 객체를 만듭니다. `next()`를 호출할 때 본문이 실행되고, `yield`를 만나면 값을 내보내고 멈춥니다. 다음 `next()`에서는 멈춘 위치에서 이어서 실행합니다.

`Generator<number, void, void>`는 차례로 내보내는 값, 종료 시 반환값, `next()`로 전달받는 값의 타입을 나타냅니다.

**기억할 점:** 이 코드의 `while (true)`는 매번 `yield`에서 멈추므로, 앞의 쉬지 않고 도는 무한 루프와 실행 방식이 다릅니다. 다만 끝없이 값을 요청하면 계속 생성됩니다. 원본 파일은 제너레이터 코드 앞에서 `showError()`를 호출하므로, 그대로 실행하면 먼저 발생한 예외 때문에 뒤의 코드까지 도달하지 못합니다.

---

## ▶️ 실습 실행과 컴파일 설정

각 폴더는 독립 프로젝트입니다. 저장소 루트가 아니라 실행할 프로젝트 폴더에서 명령어를 사용합니다.

### Vite 프로젝트

```bash
cd vite-auto
npm install
npm run dev
```

수동 설정 프로젝트를 실행할 때는 `vite-manual` 폴더로 이동해 같은 명령어를 사용합니다. 수동 설정의 개발 서버는 기본적으로 `http://localhost:3000`을 사용하며, 실제 접속 주소는 터미널 출력에서 확인합니다.

| 명령어 | 역할 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 배포용 파일 생성 |
| `npm run preview` | 빌드 결과를 로컬에서 확인 |

빌드 결과는 `vite-auto/dist/`, `vite-manual/docs/`에 생성됩니다.

### TypeScript 프로젝트

```bash
cd ts-manual
npm install
npx tsc --noEmit
```

`--noEmit`은 파일을 만들지 않고 타입만 검사합니다. JavaScript 파일을 생성하려면 `npx tsc`, 변경할 때마다 다시 컴파일하려면 `npx tsc --watch`를 사용합니다.

현재 설정은 다음과 같습니다.

```json
{
  "include": ["src"],
  "compilerOptions": {
    "target": "esnext",
    "outDir": "dist",
    "rootDir": "./src",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "moduleDetection": "force"
  }
}
```

| 설정 | 복습할 의미 |
| --- | --- |
| `include` | 검사·컴파일할 소스 범위 |
| `rootDir`, `outDir` | 소스 기준 폴더와 출력 폴더 |
| `target` | 출력할 JavaScript의 문법 수준 |
| `strict` | 엄격한 타입 검사 옵션들을 활성화 |
| `noImplicitAny` | 암시적으로 `any`가 되는 부분을 검사 |
| `strictNullChecks` | `null`, `undefined`를 다른 타입과 구분해 검사 |
| `moduleDetection: "force"` | 각 파일을 모듈로 처리해 파일별 선언 범위를 분리 |

실습 파일마다 `user`, `product`처럼 같은 이름을 사용하므로, 파일별 범위를 분리하는 설정의 의미를 함께 기억합니다. `noImplicitAny`는 직접 작성한 `any`까지 금지하는 설정은 아닙니다.

현재 `ts-manual/index.html`에는 스크립트가 연결되어 있지 않아 HTML을 여는 것만으로 실습이 실행되지는 않습니다. 타입 검사를 통과하는 것과 실제 코드를 오류 없이 실행하는 것도 구분해야 합니다. `5.enum.ts`는 현재 빈 파일이므로 enum 실습 내용은 아직 정리하지 않았습니다.

---

## 💡 새롭게 알게 된 점

- **타입 검사와 실행 결과는 별개입니다.** `any`를 사용한 잘못된 메서드 호출은 타입 검사를 통과해도 실행 중 실패할 수 있습니다.
- **설정 파일도 코드의 동작을 이해하는 데 중요합니다.** 이미지 가져오기나 `@` 경로 사용은 Vite의 처리와 설정에 연결되어 있습니다.
- **객체의 재할당과 속성 변경은 다릅니다.** `const` 객체의 속성은 변경할 수 있으며, `readonly`는 타입 검사에서 속성 변경을 제한합니다.
- **데이터 구조를 나누면 복잡한 타입도 읽기 쉬워집니다.** 직원 목록은 이름을 키로 가진 객체와 직원 한 명의 구조로 나눠 정의할 수 있습니다.
- **반복문이 있다고 항상 쉬지 않고 실행되는 것은 아닙니다.** 제너레이터는 `yield`에서 멈추고 다음 요청을 기다립니다.

## ❓ 헷갈렸던 부분

복습할 때 아래 질문에 코드 없이 설명해 보고, 막히면 연결된 실습을 다시 확인합니다.

| 질문 | 다시 떠올릴 기준 |
| --- | --- |
| 유니온 배열과 튜플은 어떻게 다를까? | 요소의 허용 타입만 지정하는지, 위치와 길이도 표현하는지 |
| 선택적 속성을 바로 사용하면 왜 오류가 날까? | 속성이 없어 `undefined`일 가능성 |
| `type`과 `interface`는 언제 사용할까? | 표현할 타입의 종류, 확장과 선언 병합의 필요성 |
| `any`와 `unknown`은 어떻게 다를까? | 값을 사용하기 전에 타입을 확인해야 하는지 |
| `void`와 `never`는 어떻게 다를까? | 함수가 정상적으로 반환할 수 있는지 |
| `const`와 `readonly`는 어떻게 다를까? | 변수 재할당 제한인지, 속성 재대입 제한인지 |

## 📝 학습 정리

**오늘의 핵심 요약**

> Vite에서는 개발 서버와 빌드, 스타일과 파일 경로를 다루는 방법을 배웠습니다. TypeScript에서는 데이터의 형태를 타입으로 표현하고, 배열과 객체처럼 복잡한 구조를 작은 단위로 나누어 정의했습니다. 타입을 모르는 값은 확인한 뒤 사용하고, 함수는 무엇을 반환하며 어떻게 종료되는지 생각하면서 타입을 지정해야 합니다.

**추가 복습이 필요한 내용**

- [ ] `vite.config.js`의 설정이 개발 서버와 빌드 결과에 어떻게 반영되는지 확인하기
- [ ] 숫자 배열, 유니온 배열, 튜플을 직접 작성하고 허용되지 않는 값도 넣어 보기
- [ ] 학생 배열과 좌표 배열의 타입을 코드 없이 설명한 뒤 다시 작성하기
- [ ] `type`과 `interface`로 같은 객체를 정의하고 각각 확장해 보기
- [ ] `unknown` 값을 숫자·문자열·날짜로 나누어 처리하는 함수 작성하기
- [ ] `void` 함수와 `never` 함수 호출 뒤의 실행 흐름 비교하기
- [ ] 제너레이터의 `next()`를 여러 번 호출하고 반환 객체 확인하기
