# Regular Expression (정규 표현식)

## What is RegEx

- string에서 특정 패턴을 찾음

## Where RegEx is used?

1. Validate Text
2. Search through Text

## 표준 형태

```
/<Meta문자열>/<Flag>
```

![regex](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99CE98335DB3C23F11)

## Meta 문자 종류

`^x`
문자열의 시작을 표현하며 x 문자로 시작됨을 의미한다.
`x$
문자열의 종료를 표현하며 x 문자로 종료됨을 의미한다.
`.x`임의의 한 문자의 자리수를 표현하며 문자열이 x 로 끝난다는 것을 의미한다.`x+`반복을 표현하며 x 문자가 한번 이상 반복됨을 의미한다.`x?
존재여부를 표현하며 x 문자가 존재할 수도, 존재하지 않을 수도 있음을 의미한다.
`x*`
반복여부를 표현하며 x 문자가 0번 또는 그 이상 반복됨을 의미한다.
`x|y`
or 를 표현하며 x 또는 y 문자가 존재함을 의미한다.
`(x)`
그룹을 표현하며 x 를 그룹으로 처리함을 의미한다.
`(x)(y)`
그룹들의 집합을 표현하며 앞에서 부터 순서대로 번호를 부여하여 관리하고 x,  는 각 그룹의 데이터로 관리된다.
`(x)(?:y)`
그룹들의 집합에 대한 예외를 표현하며 그룹 집합으로 관리되지 않음을 의미다.
`x{n}`
반복을 표현하며 x 문자가 n번 반복됨을 의미한다.
`x{n,}`
반복을 표현하며 x 문자가 n번 이상 반복됨을 의미한다.
`x{n,m}`
반복을 표현하며 x 문자가 최소 n번 이상 최대 m 번 이하로 반복됨을 의미한다.
`[xy]`
문자 선택을 표현하며 x 와 y 중에 하나를 의미한다.
`[^xy]`
not 을 표현하며  x 및 y 를 제외한 문자를 의미한다.
`[x-z]`
range를 표현하며 x ~ z 사이의 문자를 의미한다.
`\^`
escape 를 표현하며 ^ 를 문자로 사용함을 의미한다.
`\b`
word boundary를 표현하며 문자와 공백사이의 문자를 의미한다.
`\B`
non word boundary를 표현하며 문자와 공백사이가 아닌 문자를 의미한다.
`\d`
digit 를 표현하며 숫자를 의미한다.
`\D`
non digit 를 표현하며 숫자가 아닌 것을 의미한다.
`\s`
space 를 표현하며 공백 문자를 의미한다.
`\S`
non space를 표현하며 공백 문자가 아닌 것을 의미한다.
`\t`
tab 을 표현하며 탭 문자를 의미한다.
`\v`
vertical tab을 표현하며 수직 탭(?) 문자를 의미한다.
`\w`
word 를 표현하며 알파벳 + 숫자 + _ 중의 한 문자임을 의미한다.
`\W`
non word를 표현하며 알파벳 + 숫자 + _ 가 아닌 문자를 의미한다.

## Flag

`g`
Global 의 표현하며 대상 문자열내에 모든 패턴들을 검색하는 것을 의미한다.
`i`
Ignore case 를 표현하며 대상 문자열에 대해서 대/소문자를 식별하지 않는 것을 의미한다.
`m`

## Example

- JS에서 함수 사용 예제

```js
const regex = /<Search Pattern>/;
const index = "Some Text".search(regex);
const next = "Some Text".replace(regex, "To replace");
```

- Mongo DB의 id 양식 (16진수의 24글자)을 맞춘 Route

```js
videoRouter.get("/:id([0-9a-f]{24})", watch);
```

- 파이썬에서의 정규표현식 사용 re 모듈사용

```python
import re

p = re.compile('[a-z]+', re.IGNORECASE) # /[a-z]+/i 와 같음

m = p.findall("I love python")



print(m) # ['I', 'love', 'python']
```

사용 예시
전자우편 주소:

```
/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/
```

URL:

```
- [ ] /^(file|gopher|news|nntp|telnet|https?|ftps?|sftp):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/
```

HTML 태그 - HTML tags:

```
/\<(/?[^\>]+)\>/
```

전화 번호 - 예, 123-123-2344 혹은 123-1234-1234:

```
/(\d{3}).*(\d{3}).*(\d{4})/
```

날짜 - 예, 3/28/2007 혹은 3/28/07:

```
/^\d{1,2}\/\d{1,2}\/\d{2,4}$/
```

jpg, gif 또는 png 확장자를 가진 그림 파일명:

```
/([^\s]+(?=\.(jpg|gif|png))\.\2)/
```

1부터 50 사이의 번호 - 1과 50 포함:

```
/^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$/
```

16 진수로 된 색깔 번호:

```
/#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?/
```

적어도 소문자 하나, 대문자 하나, 숫자 하나가 포함되어 있는 문자열(8글자 이상 15글자 이하) - 올바른 암호 형식을 확인할 때 사용될 수 있음:

```
/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/
```
