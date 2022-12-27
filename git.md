# Git

## Git이란?
협업할 때 쓰는 거?

-> 분산 버전 관리 시스템 (DVCS)
* 버전 : 컴퓨터 소프트웨어의 특정 상태
* 컴퓨터 파일의 변경 사항을 추적 /  여러 명의 사용자들 간에 파일들의 작업을 조율
* 반대되는 개념:  중앙집중식버전관리시스템

## How to Git?

### 핵심 작동 방식
1. 파일을 생성 및 수정하는 작업을 하고
2. 변경할 파일을 모아 (add) - commit할 내용을 임시로 모음
3. 버전으로 남김 (commit)

### Git 영역
* Working Directory : 파일의 변경 사항
  * 실제로 작업을 하여 변경된 파일
* Staging Area: 버전으로 기록하기 위한 파일 변경사항의 목록
  * add된 변경된 파일
* Repository : 커밋(버전)들이 기록되는 곳
  * commit된 파일

실제로 물리적인 공간에 저장되는 것이 아니라 이해를 돕기위한 설명

### 대표적인 명령어
* git init : git을 시작
  * Git을 시작한 경우 경로의 마지막에 (master)이 추가
* git add `파일이름` : 해당 파일을 add (Staging Area로 옮김)
* git commit -m '`커밋메세지`' : Staging Area에 있는 파일들을 버전으로 기록
  * 커밋메세지는 변경사항을 나타낼 수 있도록 명확히 작성
* git status : git 저장소에 있는 파일의 상태를 확인
  1. add가 안된 변경된 파일이 있는지
  2. 변경된 파일이 add가 되었는지
  3. add가 되어 commit할 파일이 있는지 보여줌
* git log : 이때까지 commit한 기록을 보여줌
  * 다양한 옵션을 통해 로그를 조회 가능
    * git log -1 : 1개 보기
    * git log --oneline : 한 줄로 보기
    * git log -2 --oneline : 한 번에 2 개를 1 줄에 보기
* git config --global user.email "`이메일 주소`" : git 작성자의 email 정보를 저장
* git config --global user.name "`이름`" : git 작성자의 이름 정보를 저장
* git config --global -l : 현재 git 작성자의 email과 이름 정보를 반환
  * config는 일반적으로 change or check the configuration of the sysyem에 사용
  * -- global은 설정 범위를 의미. git은 local, global, system으로 범위 설정이 가능
  * -l 는 list를 의미. global에 있는 list를 출력해주는 것으로 추정됨. -문자 로 된 구성은 옵션을 의미. git commit -m '`커밋메세지`' 를 다시 돌아보자. git commit 은 커밋 명령어이고 -m은 메세지를 함께 저장할 수 있게 해줌
  * 작성자 정보는 단순 정보용
* git (help) : git command를 보여줌