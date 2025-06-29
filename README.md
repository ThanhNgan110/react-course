# React Course

- libs: gồm những lib nhỏ, gom libs để thành 1 app hoàn chỉnh
  - react, react dom => render UI
  - react-router-dom => navigate page
  - axios => call api
  - react hook form => form
  - react picker => show calendar
  - react carsouel ->  slide image

- framework: 1 bộ khung có sẵn, việc của mình là học và sử dụng nó
- SPA (single page app)
- MPA (multiple page app)

## Gitflow
- master/main: Stable branch -> use for Production
- develop: used for development
- qc: used for QC team
- hotfix/xxxxxx: Hotfix branch when an incident occurs or bug fix on production
- feature/xxxxxx: Feature branch, used for developing a story
- bugfix/xxxxxx: bugfix branch when occur on qc branch

```bash
# create new branch
$ git checkout -b {name branch}
```

## Step to step gitflow
```bash
1. create a new branch from develop, and implement
$ git checkout develop
$ git pull
$ git checkout -b feature/show-popup-error
$ git add .
$ git commit -m "show popup message when user click apply button"
$ git push

2. create pull request on git
$ git checkout develop
$ git pull
$ git merge --no-ff feature/show-popup-error

3. merge develop into qc branch to QC test
$ git checkout qc
$ git pull
$ git merge --no-ff develop

# how can you process if your feature has bug on qc branch
1. create a bug branch from feature branch
$ git checkout feature/show-popup-error
$ git checkout -b bugfix/fix-dont-show-popup
$ git add .
$ git commit -m "show popup message when user click apply button"
$ git push

2. merge bug fix into feature branch
$ git checkout feature/show-popup-error
$ git merge --no-ff bugfix/fix-dont-show-popup

3. merge feature/show-popup-error into develop
$ git checkout develop
$ git merge --no-ff feature/show-popup-error

4. merge develop into qc branch
$ git checkout qc
$ git merge --no-ff develop
```


## React render
- first render: component render with initial state
- next render: component render with new stat