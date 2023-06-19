# Git Flow

- 효과적인 협업을 위한 일관되고 생산적인 방식의 git 사용법

## git flow 종류

### 1. Gitflow

![Gitflow](https://vntgcorp.github.io/image/gitlab_flow_gitdashflow.png)

#### branch 소개

- master(main)
  - 최종 릴리즈에 사용
  - 반드시 정상적으로 작동이 되는 상태여야 함
- develop
  - 개발 중인 브랜치의 상태
  - 대부분의 merge가 이뤄짐
- feature
  - 특정 기능 개발을 위한 브랜치
  - 해당 기능의 내용만 커밋할 수 있도록 세분화될수록 좋음
  - develop 브랜치에 merge됨
  - merge 후 삭제
- release
  - main에 merge되기 전 단계
  - 버그 수정 정도만 이루어짐
- hotfix
  - production 단계에서 버그 발생 시 수정을 위한 branch

#### 사용법 예시

- feature 브랜치 생성 및 작업 내용 커밋

```
git checkout feature/
git add .
git commit -m "<커밋내용>"
```

- develop 브랜치 이동 후 최신 내용 가져옴

```
git checkout develp
git pull origin develop
```

- 작업 feature 병합

```
git merge --no-ff feature/
```

- develop 브랜치 push

```
git push origin develop
```

- feature 브랜치 삭제

```
git branch -d feature/
```

#### 개인 후기

- 사용법이 복잡
- develop 브랜치가 있어서 main이 그나마 버그가 없는 상태로 유지될 수 있음
- `--no-ff`를 사용 시, 어떤 브랜치에서 merge를 했는지 기록을 남길 수 있음
- 알파 완료 후 업데이트를 관리할 때 유용할 것 같다고 생각

### 2. Github flow

![Github flow](https://vntgcorp.github.io/image/github_flow.png)

- master branch에 feature와 bugfix가 merge되는 방식
- master branch에 중간 develop branch가 존재하지 않음
- merge할 경우에 Pull Request가 필요

#### 사용법 예시

- feature 브랜치 생성 및 작업 내용 커밋

```
git checkout feature/
git add .
git commit -m "<커밋내용>"
```

- 해당 작업 내용 push

```
git push origin feature/
```

- github 홈페이지에서 Pull Request 작성
- github 홈페이지에서 Pull Request 확인 후 merge
- github 홈페이지에서 merge된 brach 삭제

#### 개인 후기

- 사용법이 Gitflow에 비해서 간단
- main에서 merge가 이뤄지기 때문에 PR 당시에 꼼꼼한 확인이 필요함
- 릴리즈 전 초기 개발 단계에서는 Gitflow에 비해 더 적합하다고 느꼈음

### Gitlab flow

![Gitlab flow](https://vntgcorp.github.io/image/gitlab_flow_environment_branches.png)

- production branch가 gitflow의 master 브랜치의 역할 을 대신함
- 중간 staging 단계인 pre-production brach가 있음
- master branch -> pre-production - production의 일방적인 deploy만 진행

## 브랜치 관련 명령어

```
git checkout -b <브랜치명>
```

- 브랜치 생성 및 전환

```
git checkout <브랜치명>
```

- 브랜치 전환

```
git branch -v
```

- 브랜치 목록 확인

```
git branch -m <기존브랜치명> <변경할 브랜치명>
```

- 브랜치명 변경

```
git branch -d <브랜치명>
```

- 해당 브랜치 삭제
