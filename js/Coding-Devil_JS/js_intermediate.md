# variable

## 호이스팅

: 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동 (var 행동 양식)

### Temporal Dead Zone (TDZ)

: 해당 영역에 있는 코드를 동작하지 않게함

- 코드를 예측 가능하게 함
- 잠재적인 버그를 줄임

```js
let age = 30;
function showAge() {
  console.log(age);
  let age = 20;
}
showAge();
```

해당 코드는 에러가 발생. let이 이미 해당 블록에서 선언된 상태이기 때문

## 변수의 생성 과정

1. 선언 단계
2. 초기화 단계
3. 할당 단계

### var

선언과 초기화가 동시에 일어남

### let

선언과 초기화가 따로 일어남

### const

선언과 초기화, 할당이 동시에 일어남

## 스코프

### var

: 함수 스코프

### let, const

: 블록스코프 (함수, if, for, while, try/catch 등)

# 생성자 함수

- 비슷한 속성값을 가진 객체를 만들어야할 때 사용
- 보통 앞글자를 대문자로 사용
- new 연산자를 사용하여 호출 (아래 코드에서 주석 처리한 부분이 실제로 실행)
- 붕어빵틀로 생각하자

```js
function User(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };
  // return this
}

let user1 = new User("Mike", 30);
let user2 = new User("Jane", 22);
let user3 = new User("Tom", 17);

user1.sayName(); //Mike
```

# Object methods, Computed property

## Computed property

```js
let a = "age";
const user = {
  name: "Mike",
  [a]: 30, // a = "age"
};
console.log(user); // { name: 'Mike', age: 30 }
```

## Oject method 몇 가지

- Object.assign(초기값, 병합하고자하는 객체 ...)

```js
const user = {
  name: "Mike",
  age: 30,
};

const cloneUser = user; // 이런식으로 복제하면 안됨 - 주소 값을 복사해서 하나를 수정하면 같이 수정됨
const newUser = Object.assign({}, user); // Object.assgin(초기값, 병합하고자하는 객체), 최신 값으로 덮어써짐
```

- Oject.keys(객체)
  : 키 array 반환
- Oject.values(객체)
  : 값 array 반환
- Oject.entries(객체)
  : [[키, 값], ...] 형태의 array 반환
- Oject.fromEntries(배열)
  : {키:값, ...} oject로 반환

# Symbol

기존 oject의 key는 문자열

- 유일한 식별자가 필요할 때 symbol을 사용

```js
const id = Symbol("id"); // 여기서 "id"는 그냥 설명일 뿐임
const id2 = Symbol("id"); // 여기서 "id"는 그냥 설명일 뿐임
id; // Symbol(id)
id2; // Symbol(id2)
id === id2; // false
id == id2; // false
const user = {
  name: "Mike",
  age: 30,
  [id]: "myid",
};
user; // { name: 'Mike', age: 30, [Symbol(id)]: 'myid' }
Object.keys(user); // [ 'name', 'age' ]
```

## Symbol.for()

: 전역 심볼

## Symbol 심화 예시 - 기존 작성 코드의 property를 해치지 않으면서 추가하고 싶을 때

```js
// 다른 개발자가 만든 객체
const user = {
  name: "Mike",
  age: 30,
};

// 내가 이후 작성한 코드
// user.showName = function() {};
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};

user[showName](); // Mike

// 다른 개발자가 작성한 로그인 시 환영 코드
for (let key in user) {
  console.log(`Your ${key} is ${user[key]}.`);
}

console.log(user); // { name: 'Mike', age: 30, [Symbol(show name)]: [Function (anonymous)] }
console.log(user.showName()); // TypeError: user.showName is not a function
```

# Number, Math

- toString
  " 10진수를 2진수/16진수로 바꿔줌

```js
let num = 10;
num.toString(); // 10
num.toString(2); // 1010
num.toString(16); // a
```

## Math

- Math.PI
  : 원주율
- Math.ceil(숫자)
  : 올림
- Math.floor(숫자)
  : 내림
- Math.round(숫자)
  : 반올림

## 특정 자리에서 반올림하는 방법

예제 30.1456을 소수점 둘째자리까지 나타낼 경우

- Math.round() 사용하는 방법

```js
const num = 30.1456;
const updatedNum = Math.round(num * 100) / 100;
```

- toFixed() 사용하는 방법

```js
const num = 30.1456;
const updatedNum = num.toFixed(2);
```

## NaN 관련

NaN을 구별할 수 있는 방법은 isNaN 밖에 없다

```js
let x = Number("x"); // NaN

x == NaN; // false
x === NaN; // false
NaN == NaN; // false'

isNaN(x); // true
isNaN(3); // false
```

## parseInt()

숫자로 시작하는 문자열을 숫자로 바꿔줌

```js
let margin = "10px";
parseInt(margin); // 10
Number(margin); // NaN
let redColor = "f3";
parseInt(redColor); // NaN
```

## Math.random()

0 이상 ~ 1 미만의 난수를 생성

- 1~100 사이의 임의의 수 생성하기

```js
Math.ceil(Math.random() * 100);
```

## Math.max() / Math.min()

- 괄호안의 값들 중에서 최대/최소 값을 구할 수 있음
- 숫자만 가능해서 array를 사용할 경우 spread 연산자(...)을 사용해서 array요소를 분해해서 사용

```js
const a = [];
for (let i = 1; i < 100; i++) {
  a.push(i);
}
console.log(Math.max(...a));
```

## Math.abs()

절대값

## Math.pow(n, m)

n의 m 승

## Math.sqrt()

제곱근

```js
Math.sqrt(16); // 4
```

# Array

## splice

: 특정 요소의 삭제, 교체, 추가 가능

- 특정 요소 삭제: splice(시작점, 길이)

```js
let arr = [0, 1, 2, 3, 4];
arr.splice(1, 2); // [0, 3, 4]
```

- 특정 요소 교체: splice(시작점, 길이, 삽입 요소)

```js
let arr = [0, 1, 2, 3, 4];
arr.splice(1, 3, 100, 200); // [0, 100, 200, 4]
```

- 특정 요소 삽입 (시작점, 0(길이), 삽입 요소)

```js
let arr = [0, 1, 2, 3, 4];
arr.splice(1, 0, 100, 200); // [0, 100, 200, 2, 3, 4]
```

- arr.splice()는 삭제된 요소를 반환

```js
let arr = [0, 1, 2, 3, 4];
let result = arr.splice(1, 2);
console.log(arr); // [0, 3, 4]
console.log(result); // [1, 2]
```

## slice

slice(n, m): n부터 m까지 반환, python의 인덱스 슬라이싱이랑 비슷한 듯

```js
let arr = [0, 1, 2, 3, 4];
arr.slice(1, 4); // [1, 2, 3]
let arr2 = arr.slice();
console.log(arr2); // [0, 1, 2, 3, 4]
```

## concat

arr1.concat(arr2, arr3, ...): 합쳐서 새 배열 반환

```js
let arr = [1, 2];
arr.concat([3, 4]); // [1, 2, 3, 4]
arr.concat([3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]
arr.concat([3, 4], 5, 6); // [1, 2, 3, 4, 5, 6]
```

## forEach

배열 반복

```js
let users = ["Mike", "Tom", "Jane"];
users.forEach((item, index, arr) = {
  // item "Mike" "Tom" "Jane"
  // index 0 1 2
  // arr users
  console.log(`${item}은 ${arr} 중에서 ${index}번 째 요소입니다`);
  // Mike은 array name Mike,Tom,Jane의 0번 째 요소입니다
  // Tom은 array name Mike,Tom,Jane의 1번 째 요소입니다
  // Jane은 array name Mike,Tom,Jane의 2번 째 요소입니다
})
```

## indexOf / lastIndexOf

```js
let arr = [1, 2, 3, 4, 5, 1, 2, 3];
arr.indexOf(3); // 2
arr.indexOf(6); // -1 해당 검색 요소가 없을 경우 -1 반환
arr.indexOf(3, 4); // 7 indexOf(find, start) start 지점부터 찾은 3 반환
arr.lastIndexOf(3); // 7 뒤에서부터 탐색 시작
```

## includes

: 포함 여부만 확인

```js
let arr = [1, 2, 3];
arr.includes(2); // true
arr.includes(8); // false
```

## find(fn) / findIndex(fn)

: 첫 번째 true 값만 반환, 없을 경우 undefined 반환

```js
let arr = [1, 2, 3, 4, 5];
const result = arr.find((item) => {
  return item % 2 === 0;
});
console.log(result); // 2
```

```js
const userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

const result = userList.find((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});
console.log(result); // { name: 'Tom', age: 10 }
```

## filter(fn)

: 만족하는 모든 요소를 배열로 반환

```js
const userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

const result = userList.filter((user) => {
  if (user.age < 28) {
    return true;
  }
  return false;
});
console.log(result); // [ { name: 'Jane', age: 27 }, { name: 'Tom', age: 10 } ]
```

## reverse

: 역순으로 재정렬

```js
let arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

## map(fn)

: 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환

```js
const userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

let newUserList = userList.map((user, index) => {
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19,
  });
});

console.log(newUserList);
// [
//   { name: 'Mike', age: 30, id: 1, isAdult: true },
//   { name: 'Jane', age: 27, id: 2, isAdult: true },
//   { name: 'Tom', age: 10, id: 3, isAdult: false }
// ]
```

## join

: 배열을 받아서 문자열로 합쳐줌

```js
const arr = ["안녕", "내 이름은", "진홍엽이야"];
const str = arr.join();
console.log(str); // 안녕,내 이름은,진홍엽이야
const str2 = arr.join(" ");
console.log(str2); // 안녕 내 이름은 진홍엽이야
```

## split

: 문자열을 받아서 배열로 나눠줌, 백준의 그것과 비슷

## Array.isArray

: 배열인지 아닌지 확인

- typeof 로는 oject와 array를 구별 불가능 (자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체)

```js
let user = {
  name: "Hongyeop",
  status: "hungry",
};
let userList = ["Hongyeop", "Kyu", "Molcar"];
console.log(typeof user); // object
console.log(typeof userList); // object
console.log(Array.isArray(user)); // false
console.log(Array.isArray(userList)); // true
```

## arr.sort(fn)

- 배열 재정렬
- 배열 자체가 변경

```js
let arr = [13, 2, 4, 28];
console.log(arr.sort()); // [ 13, 2, 28, 4 ]

const fn = (a, b) => a - b;
console.log(arr.sort(fn);) // [ 2, 4, 13, 28 ]
```

- 보통은 Lodash를 사용함

## \_.sortBy(arr)

# arr.reduce(fn)

- 인수로 함수를 받음
- (누적 계산값, 현재값) => { return 계산 값};

```js
// 누적합 구하기 forEach
let arr = [1, 2, 3, 4, 5];
let result = 0;
arr.forEach((num) => {
  result += num;
});
console.log(result);
// reduce사용하기
let arr = [1, 2, 3, 4, 5];
const result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 100);
console.log(result); // 115
```

응용

```js
let userList = [
  { name: "Hongyeop", age: 30 },
  { name: "Mango", age: 12 },
  { name: "HYndrome", age: 25 },
  { name: "Honding", age: 9 },
  { name: "Hongdae", age: 69 },
];

let result = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur);
  }
  return prev;
}, []);

console.log(result);
// [
//   { name: 'Hongyeop', age: 30 },
//   { name: 'HYndrome', age: 25 },
//   { name: 'Hongdae', age: 69 }
// ]
```

# 구조 분해 할당 (Destructuring assignment)

```js
let user = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users;

console.log(user1); // "Mike"
```

- 기본값 설정

```js
let [a, b, c] = [1, 2];
console.log(a, b, c); // 1 2 undefined

let [d = 3, e = 4, f = 5] = [1, 2];
console.log(d, e, f); // 1 2 5
```

- 값 바꿔치기

```js
let a = 1;
let b = 2;
[a, b] = [b, a];
```

# 나머지 매개변수, 전개구문(Rest parameters, Spread syntax)

```js
// 함수의 인수를 1개만 지정해도 실제로는 개수 제한 없음
function showName(name) {
  console.log(name);
}
showName("Mike"); // Mike
showName("Mike", "Tom"); // Mike
showName(); // undefined
```

## arguments

- 함수로 넘어 온 모든 인수에 접근
- 함수 내에서 이용 가능한 지역 변수
- length / index
- Array 형태의 객체
- 배열의 내장 메서드 없음 (forEach, map)

```js
function showName(name) {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}
showName("Mike", "Tom");
// 2
// Mike
// Tom
```

## 나머지 매개변수 (ES6 이상의 환경)

- 정해지지 않은 개수의 인수를 배열로 나타낼 수 있게함

```js
function showName(...names) {
  console.log(names);
}
showName(); // []
showName("Mike"); // [ 'Mike' ]
showName("Mike", "Tom"); // [ 'Mike', 'Tom' ]
```

- forEach 사용 예제

```js
function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => (result += num));
  return result;
}

console.log(add(1, 2, 3)); // 6
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45
```

- reduce 사용 예제

```js
function add(...numbers) {
  let result = numbers.reduce((prev, cur) => prev + cur, 0);
  return result;
}
```

- 생성자 함수에 응용

```js
// 여러개의 인자가 올 수 있는 곳에 나머지 매개변수, 꼭 마지막에 배치!
function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20);
const user3 = new User("Jane", 28, "English");

console.log(user1); // User { name: 'Mike', age: 30, skills: [ 'html', 'css' ] }
console.log(user2); // User { name: 'Tom', age: 20, skills: [] }
console.log(user3); // User { name: 'Jane', age: 28, skills: [ 'English' ] }
```

## 전개 구문 Spread syntax

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result);
// [
//   0, 1, 2, 3, 4,
//   5, 6, 7, 8, 9
// ]
```

- 전개 구문으로 복사할 경우 주소값 다름
- 전개 구문 예시

  - 사용하지 않을 경우

  ```js
  let user = { name: "Mike" };
  let info = { age: 30 };
  let fe = ["JS", "React"];
  let lang = ["Korean", "English"];

  user = Object.assign({}, user, info, {
    skills: [],
  });

  fe.forEach((item) => {
    user.skills.push(item);
  });
  lang.forEach((item) => {
    user.skills.push(item);
  });

  console.log(user);
  // {
  //   name: 'Mike',
  //   age: 30,
  //   skills: [ 'JS', 'React', 'Korean', 'English' ]
  // }
  ```

  - 사용할 경우

  ```js
  user = {
    ...user,
    ...info,
    skills: [...fe, ...lang],
  };
  ```

  # 클로저 Closure

  - 함수와 렉시컬 환경의 조합
  - 함수 생성 당시의 외부 변수를 기억, 생성 이후에도 계속 접근 가능

  ## 어휘적 환경 Lexical Environment

  ```js
  let one;
  one = 1;

  function addOne(num) {
    console.log(one + num);
  }

  addOne(5);
  ```

  1. 전역 Lexical 환경
     - one: 초기화 x (사용 불가)
     - addOne: function 사용 가능
  2. 전역 Lexical 환경
     - one: 1
     - addOne: function 사용 가능

  - 내부 Lexical 환경 (전역 Lexical 환경 참조)
    - num: 5

  ```js
  function makeCounter() {
    let num = 0; // 은닉화

    return function () {
      return num++;
    };
  }

  let counter = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1
  console.log(counter()); // 2
  ```

  count() 이외에 num에 접근할 수 있는 방법 x

# setTimeout / setInterval

## setTimeout

- 일정 시간이 지난 후 함수를 실행

```js
function showName(name) {
  console.log(name);
}
setTimeout(fn, 3000, "Mike"); // (함수, 시간, 인수) 3초 뒤  Mike 출력
```

### clearTimeout(fn)

- 예정된 작업을 없앰

## setInterval

- 일정 시간 간격으로 함수를 실행
- 지연시간을 0으로 둔다고 해서 바로 실행되지 않음

```js
let num = 0;
function showTime() {
  console.log(`접속하신지 ${num++}초가 지났습니다`);
  if (num > 5) {
    clearInterval(tId);
  }
}
const tId = setInterval(showTime, 1000);
```

### clearInterval

- interval 중지

# call, apply, bind

- 함수 호출 방식과 관계없이 this를 지정할 수 있음
- call은 매개변수를 직접 받고 / apply는 매개변수를 배열로 받음

```js
const mike = {
  name: "Mike",
};
const tom = {
  name: "Tom",
};
function showThisName() {
  console.log(this.name);
}
showThisName(); // undefined
showThisName(); // undefined; 해당 함수는 인수를 받지 않음
showThisName.call(mike); // Mike

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(mike, 1999, "singer");
console.log(mike); // { name: 'Mike', birthYear: 1999, occupation: 'singer' }

update.apply(tom, [2002, "teacher"]);
console.log(tom); //  { name: 'Tom', birthYear: 2002, occupation: 'teacher' }
```

- bind: 함수의 this 값을 영구히 바꿈

```js
const user = {
  name: "Mike",
  showName: function () {
    console.log(`hello, ${this.name}`);
  },
};
user.showName(); // hello, Mike
let fn = user.showName;
fn(); // hello, (undefined)
fn.call(user); // hello, Mike
fn.apply(user); // hello, Mike

let boundFn = fn.bind(user);
boundFn(); // hello, Mike
```

# 상속 Prototype

```js
const user = {
  name: "Mike",
};
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("age")); // false
```

- hasOwnProperty를 정의한 적이 없는데 어디서 오는 걸까?
- user 객체 안의 정보를 보면 [[Prototype]]을 확인 할 수 있다

```js
const car = {
  wheels: 4,
  drive() {
    console.log("drive ...");
  },
};

const bmw = {
  color: "red",
  naviagtion: 1,
};

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};

const x5 = {
  price: "1.2억",
  color: "blue",
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

x5.__proto__ = bmw;

console.log(bmw); // { color: 'red', naviagtion: 1 }
console.log(bmw.color); // red
console.log(bmw.wheels); // 4
x5.drive(); // drive ...

for (p in x5) {
  console.log(p);
}
// price
// color
// naviagtion
// wheels
// drive

console.log(Object.values(x5)); // [ '1.2억', 'blue' ]
```

# Class

```js
const User = function (name, age) {
  this.name = name;
  this.age = age;
};

User.prototype.showName = function () {
  console.log(this.name);
};

const mike = new User("Mike", 30);
mike.showName(); // Mike

// new가 없어도 비정상적으로 작동함

// 클래스 ES6부터 사용 가능
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

const tom = new User2("Tom", 19); // 프로토타입 내부에 함수가 있음
```

- new가 없으면 에러 발생 / 생성자 함수는 undefined 값으로 의도하지 않은 값으로 생성됨
- constructor에 class가 명시
- for in문에서 속성값만 나옴 / 생성자 함수는 함수 속성도 나옴

```js
class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("Drive!!");
  }
  stop() {
    console.log("Stoop!!");
  }
}

class Bmw extends Car {
  constructor(color) {
    super(color);
    this.navigation = 1;
  }
  park() {
    console.log("Parkk..");
  }
  stop() {
    super.stop();
    console.log("Stop2");
  }
}

const z4 = new Bmw("blue");

z4.stop();
// Stoop!!
// Stop2
```

- z4의 프로토타입이 Bmw,의 프로토타입이 Car인 것을 확인할 수 있다
- 같은 이름으로 메소드를 정의할 경우에 호출은 가장 최근에 상속 받은 프로토타입의 메소드를 사용
- 오버라이딩:
  - 이전에 상속 받은 프로토타입의 메소드를 사용하고 싶을 경우 super keyword 사용
  - class를 상속받을 경우 Constructor 사용시 반드시 super()로 상속받은 다음에 사용 가능

# Promise

```js
const pr = new Promise((resolve, reject) => {
  // code
});
```

- 어떤 일이 완료되었을 때 실행되는 함수: 콜백 함수

```js
const f1 = (callback) => {
  setTimeout(function () {
    console.log("1번 주문 완료");
    callback();
  }, 1000);
};
const f2 = (callback) => {
  setTimeout(function () {
    console.log("2번 주문 완료");
    callback();
  }, 1000);
};
const f3 = (callback) => {
  setTimeout(function () {
    console.log("3번 주문 완료");
    callback();
  }, 1000);
};

// 콜백헬
console.log("시작");
f1(function () {
  f2(function () {
    f3(function () {
      console.log("끝");
    });
  });
});
```

```js
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};
const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
    }, 1000);
  });
};
const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 1000);
  });
};

console.log("시작");
f1()
  .then((res) => f2(res))
  .then((res) => f3(res))
  .then((res) => console.log(res))
  .catch(console.log)
  .finally(() => {
    console.log("끝");
  });
```

- Promise.all(배열)로 동시 실행가능
  - 모두 실패 or 모두 성공인 케이스에 대해 사용 가능

## async await

- 해당 구문을 사용할 경우 조금 더 직관적인 이해가 가능하다

```js
console.log("시작");
async function order() {
  const result1 = await f1();
  const result2 = await f2(result1);
  const result3 = await f3(result2);
  console.log(result3);
  console.log("종료");
}
order();
```

# Generator

- 함수의 실행을 멈췄다가 재개할 수 있는 기능
- `function\*` 와 `yield`로 표현
- iterable
  - Symbol.iterator 메서드가 있다
  - Symbol.iteraotr는 iterator를 반환해야 한다
- iterator
  - next 매서드를 가진다
  - next 매서드는 value와 done 속성을 가진 객체를 반환한다
  - 작업이 끝나면 done은 trun가 된다
- 값을 미리 만들어두지 않음
- Redux SAGA에서 많이 사용한다고 함

````js
function* fn() {
  console.log(1);
  yield 1;
  console.log(2);
  yield 2;
  console.log(3);
  console.log(4);
  yield 3;
  return "finish";
}

const a = fn();

// a
// fn {<suspended>}
// a.next()
// 1
// a.next()
// 2
// a.next()
// 3
// 4
// a.next()
// {value: 'finish', done: true}
```js
````
