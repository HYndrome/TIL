# CLI

## CLI이란?

### Command Line Interface (cx- GUI: Graphic User Interface)
### 명령어 기반의 줄 단위 인터페이스
#### 인터페이스란?
##### 조작하는 접면; 소통의 창구
### 대표적으로 Terminal, powershell CMD 창이 있음


## Interface
* 프롬프트 기본 인터페이스
  * 컴퓨터 정보
  * 디텍토리
    * ~의 경우 홈 디렉토리를 의미한다
  * $

현재 명령을 내리고 있는 경로; 경로의 제일 끝부분(파일 끝 부분)을 확인해야합니다!

## 대표적인 명령어
* ls : 경로를 보여줌 (list)
  * ls -al : 숨긴 폴더도 다 보여줌
* mkdir : 새 폴더(경로) 만들기 (make directory)
* cd : 경로 이동 (change directory)
  * cd ../ : 상위 경로로 이동
    * .. : 상위 디렉토리
    * . : 현재 디렉토리
* touch : 새로운 파일을 형성
* rm : 파일 삭제 (remove)
  * 경로는 삭제가 안됨 (물리적 삭제라서 휴지통 복구 안됨)
  * rm -r : 경로 삭제, 폴더 안에 있는 걸 모두 지워야함 (recursion : 재귀)
* pwd : 현재 디렉토리 출력