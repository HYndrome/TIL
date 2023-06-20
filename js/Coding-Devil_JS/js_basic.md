# 변수
* 변수는 문자와 숫자, $와 _만 사용
* 첫글자는 숫자가 될 수 없음
* [예약어](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)는 사용할 수 없음 
* 가급적 상수는 대문자 스네이크 케이스 사용
* 변수명은 읽기 쉽고 이해하기 쉬운 이름으로

# 형변환
* String(); 문자형으로 변환
* Number(); 숫자형으로 변환
* Boolean(); 불린형으로 변환

# 자동형변환
의도되지 않은 동작이 일어나서 원인을 찾기 힘들어짐
## 주의사항
```js
Boolean(0)  // false
Boolean("0")  // true

Boolean("")  // false
Boolean(" ")  // true
```

# 증가연산자
```js
let num = 5; // n = 5
num = ++num; // n = 6
```

# 비교연산자
## 동등연산자 vs 일치연산자 
일치 연산자 사용 권장
```js
const a = 1;
const b = "1";
console.log(a == b); // true 동등연산자
console.log(a === b); // fale 일치연산자 (값과 타입까지 비교)
```

# 논리연산자
* OR; ||
* AND; &&
* NOT; !
AND 가 OR 보다 연산 우선 순위가 높음

# 반복문
# if
```js
for (let i = 0; i < 10; i ++) { // 초기값; 조건; 코드실행 후 작업
  // 반복할 코드
}
```
## while
```js
let i = 0;
while(i < 10) {
  console.log(i);
  i++;
}
```
```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10)
```
## break, continue
* break; 멈추고 빠져나옴
* continue; 멈추고 다음 반복 진행

# switch
if elif else 로 대체할 수 있는데 깔끔하게 작성가능
```js
let fruit = "두리안";
switch(fruit) {
  case "사과":
    console.log("100원입니다");
    break;
  case "감자":
    console.log("200원입니다");
    break;
  case "고구마":
    console.log("300원입니다");
    break;
  case "멜론":
    console.log("400원입니다");
    break;
  default:
    console.log("그런 과일은 없습니다");
}
```

# 함수 
## 함수 선언문
```js
function sayHello(name) {
  console.log(`Hello ${name}`);
}
```
default 값 설정하는 방법 1
```js
function sayHello(name) {
  let newName = name || "friend";
  let msg = `Hello, ${newName}`;
  console.log(msg);
}

sayHello(); // "Hello, friend"
sayHello("Jane"); // "Hello, Jane"
```
default 값 설정하는 방법 2
```js
function sayHello(name = "friend") {
  let msg = `Hello, ${name}`;
  console.log(msg);
}
```

## 함수 팁
* 한 번에 한 작업에 집중
* 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍
    * showError
    * getName
    * createUserData
    * checkLogin

## 함수 표현식
```js
let sayHello = function() {
  console.log("Hello!");
};
```
함수 선언문과 표현식의 차이
* 함수 선언문
    * 어디서든 호출 가능
    * 자바스크립트 내에서 호이스팅됨
* 함수 표현식
    * 먼저 선언되야지 사용 가능

## 화살표함수
기본 표현식
```js
let add = function(num1, num2) {
  return num1 + num1;
};
```
화살표 함수 적용
```js
let add = (num1, num2) => {
  return num1 + num1;
};
```
return 부분을 괄호 처리 가능
```js
let add = (num1, num2) => (
   num1 + num1;
);
```
함수 내 전체 코드가 한 줄짜리 return이라면 괄호 생략 가능
```js
let add = (num1, num2) => num1 + num1;
```
인수가 한 개하면 괄호 생략 가능
```js
let sayHello = name => `Hello, ${name}`;
```
인수가 없으면 괄호 생략 불가능
```js
let showError = () => {
  alert("Error!");
};
```

# object
## 기본 형태
```js
const name = "clark";
const age = 33;

const superman = {
  name: name,
  age: age,
  gender: "male",
}
```
## 축약 형태
```js
const name = "clark";
const age = 33;

const superman = {
  name,
  age,
  gender: "male",
}
```

```js
function makeObject(name, age) {
  return {
    name,
    age,
    hobby: "football",
  };
}

const Mike = makeObject("Mike", 30);
console.log(Mike); // { name: 'Mike', age: 30, hobby: 'football' }
console.log("age" in Mike); // true
```
## for in
object를 순회할 때 사용 (array 순회에는 of를 사용)
```js
const Mike = {
  name: "Mike",
  age: 30,
};

for (x in Mike) {
  console.log(x);
}
// 
name
age
//
```
## method
객체의 프로퍼티로 지정된 함수
```js
const superman = {
  name: "clark",
  age: 33,
  fly: function() {
    console.log("날아갑니다!");
  },
}

superman.fly();
```
function 키워드 생략 가능
```js
const superman = {
  name: "clark",
  age: 33,
  fly() {
    console.log("날아갑니다!");
  },
}

superman.fly();
```
oject 내의 프로퍼티에 접근하고 싶을 때
```js
const user = {
  name: "Mike",
  sayHello: function() {
    console.log(`Hello, I'm ${this.name}`);
  },
};
```
화살표 함수의 this?
```js
let boy = {
  name: "Mike",
  sayHello: function() {
    console.log(`Hello, I'm ${this.name}`);
  },
};
let girl = {
  name: "Jane",
  sayHello: () => {
    console.log(`Hello, I'm ${this.name}`);
  },
};

boy.sayHello(); // Hello, I'm Mike
girl.sayHello(); // Hello, I'm undefined
```
* 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
* 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져옴
    * 브라우저: window
    * NodeJS: global
* 객체는 화살표 함수로 안적는 것이 좋음

# 배열
* 배열은 문자 뿐만 아니라, 숫자, 객체, 심지어 함수도 포함 가능
* 배열의 길이 구하기; 배열.length
* 배열 끝 추가; 배열.push(추가요소)
* 배열 끝 제거; 배열.pop()
* 배열 앞 추가; 배열.shift(추가요소)
* 배열 앞 제거; 배열.unshift() 

## 배열을 사용한 반복문
### for
```js
const days = ["월", "화", "수"];

for(let index = 0; index < days.length; index++) {
  console.log(days[index]);
}
//
월
화
수
//
```
### for of
```js
const days = ["월", "화", "수"];

for(let day of days) {
  console.log(days[index]);
}
```
배열도 객체형이기 때문에 for in을 사용 가능하긴 하지만 권장 X