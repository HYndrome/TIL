# Git

## Git이란?
협업할 때 쓰는 거????

-> **분산 버전 관리 시스템** (Distributed Version Control Sysyems)
![DVCS](https://han.gl/CgkWU)

* 로컬 버전 관리 + 원격 저장소 버전 관리
  * 버전 : 컴퓨터 소프트웨어의 특정 상태
  * 로컬 버전 관리 : commit
    * 작업: CRUD 중 C, U, D
      1. Create
      2. Read
      3. Update
      4. Delete
* 컴퓨터 파일의 변경 사항을 추적 /  여러 명의 사용자들 간에 파일들의 작업을 조율
* 반대되는 개념:  중앙집중식버전관리시스템

## How to Git?

### 핵심 작동 방식
1. 파일을 생성 및 수정하는 작업을 하고
2. 변경할 파일을 모아 (add); commit할 내용을 임시로 모음
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
* git commit -m "`커밋메세지`" : Staging Area에 있는 파일들을 버전으로 기록
  * 커밋메세지는 변경사항을 나타낼 수 있도록 명확히 작성
* git status : git 저장소에 있는 파일의 상태를 확인
  1. add가 안된 변경된 파일이 있는지
  2. 변경된 파일이 add가 되었는지
  3. add가 되어 commit할 파일이 있는지 보여줌
* git log : 이때까지 commit한 기록을 보여줌
  * 다양한 옵션을 통해 로그를 조회 가능
    * git log -1 : 1개 보기
    * git log --oneline : 한 줄로 보기
    * git log -2 --oneline : 한 번에 2 개를 1 줄에 보기 (-2와 --oneline의 순서가 바뀌어도 상관 없음)
* git config --global user.email "`이메일주소`" : git 작성자의 email 정보를 저장
* git config --global user.name "`이름`" : git 작성자의 이름 정보를 저장
* git config --global -l : 현재 git 작성자의 email과 이름 정보를 반환
  * config는 일반적으로 change or check the configuration of the sysyem에 사용
  * -- global은 설정 범위를 의미. git은 local, global, system으로 범위 설정이 가능
  * -l 는 list를 의미. global에 있는 list를 출력해주는 것으로 추정됨. -문자 로 된 구성은 옵션을 의미. git commit -m "`커밋메세지`" 를 다시 돌아보자. git commit 은 커밋 명령어이고 -m은 메세지를 함께 저장할 수 있게 해줌
  * 작성자 정보는 단순 정보용


## Github
Github는 원격저장소를 제공하는 서비스 중 하나
### 초기 Github(원격 저장소) 설정
1. Github 접속 및 로그인
2. Repositories에 접속
3. `New` 를 눌러 새로운 Repository 설정 및 생성
4. 생성된 `repository URL` 복사
5. 로컬 저장소에 원격 저장소 정보 설정
```
git remote add origin https://github.com/HYndrome/TIL.git
```
 * origin은 URL 을 설정해주는 이름이며 임의로 설정 가능(origin이 가장 대중적)
 6. 원격 저장소의 정보를 확인한다
 ```
 git remote -v
 ```


 ### Github 관련 Git 명령어
* git remote add `원격저장소이름` `RepositoryURL` : 로컬 저장소에 원격 저장소 정보 저장
  * 보통 원격저장소이름으로 origin 사용
* git remote rm `원격저장소이름` : 원격 저장소 삭제
* git remote -v : 원격 저장소의 정보를 확인
* git push `원격저장소이름` `브랜치이름`  : 로컬 저장소의 버전을 원격 저장소로 보냄
```
git push origin master
```
* git pull `원격저장소이름` `브랜치이름`  : 원격 저장소의 변경된 내역을 병합
```
git pull origin master
```
* git clone `RepositoryURL` : 원격 저장소의 버전을 로컬 저장소로 가져옴
  * 원격에 있는 프로젝트의 시작
  * 협업 프로젝트
  * 외부 오픈소스 참여
  * Git 저장소를 Github에서 생성 후 시작
  * etc ...

* git (help) : git command를 보여줌

### Download 와 git clone의 차이
* Download : (가장 최신 버전 상태의) 파일을 받음
* git clone : 저장소를 받아옴, 모든 버전을 받음

### gitignore
#### gitignore이란?
버전 관리에 필요없는 파일을 분류한 목록. 해당 파일 목록에 입력된 파일은 git이 무시
#### 사용용도
* 버전 관리에 상관 없는 자동으로 생성지어되는 더미 파일
* 기밀이나 개인정보 같은 공유되서는 안되는 파일

=> Github에 올리지 않을 파일
#### 사용방법
* .git 파일과 같은 경로에 .gitignore이라는 파일을 만들고 해당 파일에 무시할 파일 이름 입력
  * 파일이름
  * 폴더이름/
  * *.파일양식
* 이미 commit이 적용된 파일에 대해서는 gitignore이 유효하지 않음
* **처음부터** gitignore을 잘 설정하여 commit history가 꼬이지 않게 해야함
### Github 병합
to be continued tmw
1. 원격 저장소의 커밋을 원격 저장소로 가져와서(pull)
2. 로컬에서 두 커밋을 병합 (추가 커밋 발생)
3. 다시 Github로 push
#### Git confliction?
![git confliction](https://media.discordapp.net/attachments/1052083490675490846/1057538981190979624/image.png?width=1290&height=721)