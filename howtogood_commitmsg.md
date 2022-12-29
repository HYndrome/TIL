# Method : 좋은 git commit 메세지 쓰기
## Why?
1. 더 좋은 commit log 가독성
2. 더 나은 협업과 리뷰
3. 더 쉬운 코드 유지 보수
## How?
1. 제목과 본문을 한 줄 띄워 분리
2. 일정한 양식, 규칙으로 통일감 있게 작성
3. 제목은 명령문
4. 본문은 What, Why 에 초점 (How X)
5. 제목과 본문에 이슈 번호 부여
6. 제목은 영문 기준 50자 이내
7. 제목 첫 글자는 대문자
8. 제목 끝 .  금지
9. 본문은 영문 기준 72자마다 줄바꿈
10. 관사는 사용하지 않음
### 1. 제목과 본문을 `한줄 띄워` 분리하기
커밋메세지는 다음과 구성하는 것이 최고
* 요약문장 (50자 이내)
* 빈줄 하나
* 설명문

git log로 보게 될 경우, 빈줄을 하나 띄워야지 요약문장과 설명문이 이어지지 않게 출력
### 2. 일정한 양식, 규칙으로 `통일감` 있게 작성
일정한 양식과 규칙으로 작성된 통일감이 있는 메세지는 문제를 더 빠르고 정확하게 파악할 수 있게 해준다. 소속된 집단이 있다면 해당 집단의 양식을 따르고, 없다면 자신만의 규칙을 정해서 통일감 있게 작성한다.

5S는 현실과 가상을 가리지 않고 업무 공간이라면 어디든 적용된다!
### 3. 제목은 `명령문`
commit 메세지를 명령문으로 작성하게 될 경우, git의 Built-in-Convention을 따르게 된다. 자연스럽게 녹어들 수 있다. 부정은 Not이 아니라 `Don't` 를 사용한다. 또 명령문은 요구하는 바가 명확하기 때문에 자연스럽게 명확하고 간결해진다.
본문은 기분 좋게 평서문을 적어주도록 하자.
### 4. 본문은 `What, Why` 에 초점 (How X)
알잘딱깔센
### 5. 제목과 본문에 `이슈 번호` 붙이기
```
Merge pull request #123 from someuser/somebranch
```
이런 식으로 commit 메세지에 #번호를 적게 되면 Github은 해당 저장소의 이슈 번호로 인식하고 클릭할 수 있는 링크를 바꿔준다. 또한 이슈 번호가 메제지에 포함된 커밋을 자동으로 이슈페이지에 정리해준다 wow!

기본적으로 번호를 붙여야지 구구절절한 설명을 반복하지 않을 수 있다!
### 6. 제목은 영문 기준 50자 이내
더 간결하고 읽기 좋게!
### 7. 제목 첫 글자는 대문자
영어 사용자에 대한 존중!
### 8. 제목 끝 . 금지
제목에는 보통 . 을 찍지 않는다. 알잘딱깔센2
### 9. 본문은 영어 기준 72자마다 줄바꿈
보기 좋은 떡이 먹기도 좋다!
### 10. 제목 관사는 사용하지 않음
더 짧은 commmit 메세지 제목!

하지만 '그거 있잖아 그거' 의 the는 사용하는 듯


### Extra tip
commit 메세지로 Github 이슈를 자동 종료시킬 수 있다.
Github가 이슈 종료로 인식하는 키워드
* close
* closes
* closed
* fix
* fixes
* fixed
* resolve
* resolves
* resolved
예시
```
# 제목에 이슈 한 개 닫기를 적용한 사례
Close #31 - refactoring wrap-up
```
```
# 본문에 이슈 여러 개 닫기를 적용한 사례
Update policy 16/04/02

* This closes #128 - cab policy, closes #129 - new hostname, and fixes #78 - bug on logging
* cablist.txt: changed ACL due to policy update delivered via email on 16/04/02, @mr.parkyou
* hostname.properties: cab hostname is updated
* BeautifulDeveloper.java: logging problem on line no. 78 is fixed. The `if` statement is never happening. This deletes the `if` block.
```
## 나의 git commit 메세지를 쓰는 방법
실제 코드 사용 후 추가 및 삭제 업데이트 예정


코드의 예제는 실 사용이 있을 경우 변경될 예정
### Move
코드의 이동이 있을 때 사용
* Move A to B
```
Move test-process-uptime to parallel
Move function from header to source file
Move async hooks trace events setup to pre_execution.js
move initialization of node-report into pre_execution.js
```
### Rename
이름의 변경이 있을 때 사용
* Rename A to B
```
Rename node-report to report
Rename location to trigger
Rename node-report suite to report
```
<br/>

### Remove
코드의 삭제에 사용

* Remove A
```
Remove fallback cache
Remove unnecessary italics from child_process.md
Remove useless additionnal blur call
Remove unneeded .gitignore entries
Remove unused variable
Remove duplicated buffer negative allocation test
```
* Remove A from B
```
Remove absolute path parameter from transformers
Remove trailing slash from origin header if no port is specified
```
<br/>

### Add
코드나 테스트 예제, 문서 등의 추가가 있을 때 사용
* Add A
```
Add ERR_INSPECTOR_COMMAND error
```
* Add A for B
```
Add documentation for the defaultPort option
Add example for setting Vary: Accept-Encoding header in zlib.md
Add missing includes for vtune build
Add test for dynamically enabling node.async_hooks tracing
Add test for InterpolatorType
Add devDependencies support for templates
```
* Add A to V
* Add A to B
```
Add error description to Image onError callback
Add displayName to ActivityIndicator
Add deprecation notice to SwipeableListView
```

### Implement
Add 보다 좀 더 큰 단위의 코드, 모듈 클래스 단위에 사용
* implement A
```
Implement date object
Implement Image.defaultSource
Implement bundle sync status
```
* implement A to V
```
Implement requiresMainQueueSetup in RCTTVNavigationEventEmitter to satisfy Xcode warning
Implement an in-memory cache store to save parsed and validated documents and provide performance benefits for repeat executions of the same document
```

### Use
특별히 무언가를 사용해 구현을 하는 경우에 사용
* Use A
```
Use more stable cast where possible
```
* Use A for B
```
Use fake MessageEvent for port.onmessage
Use object writer for thrown errors
Use ru_stime for system CPU calculation
Use relative path for SCRIPTDIR
```
* Use A to V
```
use common operations to define browser globals
use triggerReport() to handle signals
use PauseOnNextJavascriptStatement to implement --inspect-brk-node
```
* Use A in B
```
Use smart pointer in UDPWrap::OnSend
Use same parameter name in node_report.cc
Use TextLegend example in Android as well
Use main.jsbundle in iOS template for production build
Use new Metro configuration in react-native cli
```
* Use A instead of B
```
Use babel runtime instead of relying on global babelHelpers and regenerator
```

<br/>

### Fix 
올바르지 않은 동작를 고친 경우에 사용 (대부분의 경우에 사용)
* `Fix typo` : 오타를 수정한  경우
* Fix A
```
Fix stat cache
Fix changelog entry
Fix broken jsiexecutor search path
```
* Fix A in B : B의 A를 수
```
Fix calculation in process.uptime()
Fix build warning in node_report.cc
Fix error condition in Verify::VerifyFinal
Fix typo in callback.cc
Fix duplicate symbols linker error in xcodeproj
```
* Fix A which B, Fix A that B : 고친 것에 대한 더 상세한 설명
```
Fix incorrect type which makes animated gifs not loop forever on device
Fix crash that happens when a component throws an exception that contains a null message
```
* Fix A to V
```
Fix inability to remove 'Disabled' state from AccessibilityStates
Fix HTTP connection timeout callback to be appropriately called
```
* Fix A so that B : 고친 결과 설명
```
Fix inability to remove 'Disabled' state from AccessibilityStates
Fix HTTP connection timeout callback to be appropriately called
```
* Fix A where B : B에는 문제가 발생한 모습
```
Fix case where content of inline views didn't get relaid out
Fix case where inline view is visible even though it should have been truncated
Fix issue where Image.resizeMode isn't respected while source is loading, resulting in unexpected padding
```
* Fix A when B : B에는 문제가 발생한 상황
```
Fix accidental showing of Modal when visible prop is undefined or null
Fix crash when removing root nodes
```

### Correct
문법의 오류나 타입, 이름의 변경에 사용
* Correct A
```
Correct grammatical error in BUILDING.md
Correct parameters, return types in crypto.md
Correct styling of _GitHub_ in onboarding doc
Correct buffer changelog ordering
Correct async_hooks resource names
```
<br/>

### Refactor
대대적으로 갈아엎은 경우에 사용
* Refactor A
```
Refactor tick objects prune function
Refactor thread life cycle management
Refactor QueryWrap lifetime management 
Refactor argument validation
Refactor thread life cycle management
Refactor MockNativeMethods in Jest
```
### Simplify
Refactor 보다는 약한 수정인 경우, 복잡한 코드를 단순화하는 경우에 사용
* Simplify A
```
Simplify code and remove obsolete checks
Simplify the setup of async hooks trace events
Simplify heap space iteration
Simplify TriggerNodeReport()
Simplify AliasedBuffer lifetime management 
Simplify loop arithmetic in GetCPUInfo
```
### Set
변수 값을 변경하는 등의 작은 수정에 사용
* Set A to B
```
set tls.DEFAULT_ECDH_CURVE to 'auto'
```
<br/>

### Update
문서나 리소스, 라이브러리 등에 주로 사용. 개정이나 버전 업데이트

잘못된 것을 바로 잡는 것이 아님!
* Update A to B
```
Update acorn to 6.1.0
```
* Update A to V
```
Update react-devtools-core and plist to include security fixes reported by npm audit
Update RCTLinkingManager.h to explicitly state the 'nullability' of parameters
Update repo docs to use HTTPS
Update app icons to match recent Android releases

```
* Update A with B
```
Update babelHelpers with Babel 7 support
```
### Revise
Update와 비슷하나 문서의 개정이 있을 때 주로 사용
* Revise A
```
Revise deprecation semverness info in Collaborator Guide
```

### Improve
호환성, 테스트 커버리지, 성능, 검증 기능, 접근성 등 향상이 있을 경우 사용
* Improve A
```
Improve compatibility with http/1
Improve Unicode handling
Improve test coverage in perf_hooks
Improve validation of report output
Improve performance of test-crypto-timing-safe-equal-benchmarks
Improve color detection
Improve Android Network Security config
Improve Accessibility
Improve iOS's accessibilityLabel performance by up to 20%
```

### Make
기존 동작의 변경을 명시

새롭게 만든 경우에는 Add를 사용해야함
* Make A B : A를 B하게
  * config object를 read-only
  * floating patch 메시지에 더 많은 정보가 담기도록
  * ViewPropTypes의 값들을 옵셔널하게 
  * read()를 유저가 원한다면 무기한으로 호출되도록 
  * IsolateData가 ArrayBuffer를 저장하도록
```
Make config object read-only
make 'floating patch' message informational
Make values optional in ViewPropTypes
make read() be called indefinitely if the user wants so
make IsolateData store ArrayBufferAllocator
```

### Allow
Make와 비슷하지만 허용을 표현할 때 사용
* Allow A to V
```
Allow the output filename to be a {Function}
Allow Node.js-like runtimes to identify as Node.js as well
Allow passing parseOptions to ApolloServerBase constructor
Allow an optional function to resolve the rootValue, passing the DocumentNode AST to determine the value
```

### Ensure
if 구문 같이 조건을 확실하게 주었을 때처럼 무엇이 확실하게 보장받는다는 것을 표현할 때 사용
* Ensure A
```
Ensure quiet always takes precedence
Ensure cookies with illegal characters are not sent to okhttp
Ensure require.main for CJS top-level loads
Ensure Stream.pipeline re-throws errors without callback
Ensure options.flag defaults to 'r' in readFile
```

### Prevent
if 구문 같이 조건을 확실하게 주었을 때처럼 특정 처리를 못하게 막은 것을 표현할 때 사용
* Prevent A
```
Prevent multiple connection errors
Prevent constructing console methods
Prevent event loop blocking
Prevent a potential error in event handling if Object.prototype is extended
Prevent an infinite loop when attempting to render portals with SSR
```

### Avoid
if 구문 같이 조건을 확실하게 주었을 때처럼 특정 처리를 못하게 회피한 것을 표현할 때 사용
* Avoid A
* Avoid A if B, Avoid A when B : B인 상황에서 A를 회피합
```
Avoid importing entire crypto dependency tree if not in Node.js
Avoid "Member not found" exception in IE10 when calling preventDefault() in Synthetic Events
Avoid input validation warning from browsers when changing type
Avoid double reload event when reloading JS
```

### Pass
파라미터를 넘기는 처리에 사용
* Pass A to B
```
Pass the response toolkit to the context function
```

### Verify
검증 코드를 넣을 때 사용
* Verify A
```
Verify heap buffer allocations occur
```



## Reference
* https://djkeh.github.io/articles/How-to-write-a-git-commit-message-kor/
  * Chris Beams : How to Write a Git Commit Message
  * erlang/otp Wiki : Writing good commit messages
  * git.kernel.org : The core git plumbing
  * git-scm : Distributed Git - Contributing to a Project
  * git-scm : Pretty Formats
  * Github : Closing issues via commit messages
* https://blog.ull.im/engineering/2019/03/10/logs-on-git.html

