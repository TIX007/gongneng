## 一、新建代码库

> ```bash
> # 在当前目录新建一个Git代码库
> $ git init
> 
> # 新建一个目录，将其初始化为Git代码库
> $ git init [project-name]
> 
> # 下载一个项目和它的整个代码历史
> $ git clone [url]
> ```

## 二、配置

Git的设置文件为`.gitconfig`，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。

> ```bash
> # 显示当前的Git配置
> $ git config --list
> 
> # 编辑Git配置文件
> $ git config -e [--global]
> 
> # 设置提交代码时的用户信息
> $ git config [--global] user.name "[name]"
> $ git config [--global] user.email "[email address]"
> ```

## 三、增加/删除文件

> ```bash
> # 添加指定文件到暂存区
> $ git add [file1] [file2] ...
> 
> # 添加指定目录到暂存区，包括子目录
> $ git add [dir]
> 
> # 添加当前目录的所有文件到暂存区
> $ git add .
> 
> # 添加每个变化前，都会要求确认
> # 对于同一个文件的多处变化，可以实现分次提交
> $ git add -p
> 
> # 删除工作区文件，并且将这次删除放入暂存区
> $ git rm [file1] [file2] ...
> 
> # 停止追踪指定文件，但该文件会保留在工作区
> $ git rm --cached [file]
> 
> # 改名文件，并且将这个改名放入暂存区
> $ git mv [file-original] [file-renamed]
> ```

## 四、代码提交

> ```bash
> # 提交暂存区到仓库区
> $ git commit -m [message]
> 
> # 提交暂存区的指定文件到仓库区
> $ git commit [file1] [file2] ... -m [message]
> 
> # 提交工作区自上次commit之后的变化，直接到仓库区
> $ git commit -a
> 
> # 提交时显示所有diff信息
> $ git commit -v
> 
> # 使用一次新的commit，替代上一次提交
> # 如果代码没有任何新变化，则用来改写上一次commit的提交信息
> $ git commit --amend -m [message]
> 
> # 重做上一次commit，并包括指定文件的新变化
> $ git commit --amend [file1] [file2] ...
> ```

## 五、分支

> ```bash
> # 列出所有本地分支
> $ git branch
> 
> # 列出所有远程分支
> $ git branch -r
> 
> # 列出所有本地分支和远程分支
> $ git branch -a
> 
> # 新建一个本地分支，但依然停留在当前分支
> $ git branch [branch-name]
> 
> # 新建一个分支，并切换到该分支
> $ git checkout -b [branch]
> 
> # 新建一个分支，指向指定commit
> $ git branch [branch] [commit]
> 
> # 新建一个分支，与指定的远程分支建立追踪关系
> $ git branch --track [branch] [remote-branch]
> 
> # 切换到指定分支，并更新工作区
> $ git checkout [branch-name]
> 
> # 切换到上一个分支
> $ git checkout -
> 
> # 建立追踪关系，在现有分支与指定的远程分支之间
> $ git branch --set-upstream [branch] [remote-branch]
> 
> # 合并指定分支到当前分支
> $ git merge [branch]
> 
> # 选择一个commit，合并进当前分支
> $ git cherry-pick [commit]
> 
> # 删除分支
> $ git branch -d [branch-name]
> 
> # 删除远程分支
> $ git push origin --delete [branch-name]
> $ git branch -dr [remote/branch]
> 
> # 下面是把本地分支提交到远程仓库
> $ git push origin ’dev‘
> ```

## 六、标签

> ```bash
> # 列出所有tag
> $ git tag
> 
> # 新建一个tag在当前commit
> $ git tag [tag]
> 
> # 新建一个tag在指定commit
> $ git tag [tag] [commit]
> 
> # 删除本地tag
> $ git tag -d [tag]
> 
> # 删除远程tag
> $ git push origin :refs/tags/[tagName]
> 
> # 查看tag信息
> $ git show [tag]
> 
> # 提交指定tag
> $ git push [remote] [tag]
> 
> # 提交所有tag
> $ git push [remote] --tags
> 
> # 新建一个分支，指向某个tag
> $ git checkout -b [branch] [tag]
> ```

## 七、查看信息

> ```bash
> # 显示有变更的文件
> $ git status
> 
> # 显示当前分支的版本历史
> $ git log
> 
> # 显示commit历史，以及每次commit发生变更的文件
> $ git log --stat
> 
> # 搜索提交历史，根据关键词
> $ git log -S [keyword]
> 
> # 显示某个commit之后的所有变动，每个commit占据一行
> $ git log [tag] HEAD --pretty=format:%s
> 
> # 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
> $ git log [tag] HEAD --grep feature
> 
> # 显示某个文件的版本历史，包括文件改名
> $ git log --follow [file]
> $ git whatchanged [file]
> 
> # 显示指定文件相关的每一次diff
> $ git log -p [file]
> 
> # 显示过去5次提交
> $ git log -5 --pretty --oneline
> 
> # 显示所有提交过的用户，按提交次数排序
> $ git shortlog -sn
> 
> # 显示指定文件是什么人在什么时间修改过
> $ git blame [file]
> 
> # 显示暂存区和工作区的差异
> $ git diff
> 
> # 显示暂存区和上一个commit的差异
> $ git diff --cached [file]
> 
> # 显示工作区与当前分支最新commit之间的差异
> $ git diff HEAD
> 
> # 显示两次提交之间的差异
> $ git diff [first-branch]...[second-branch]
> 
> # 显示今天你写了多少行代码
> $ git diff --shortstat "@{0 day ago}"
> 
> # 显示某次提交的元数据和内容变化
> $ git show [commit]
> 
> # 显示某次提交发生变化的文件
> $ git show --name-only [commit]
> 
> # 显示某次提交时，某个文件的内容
> $ git show [commit]:[filename]
> 
> # 显示当前分支的最近几次提交
> $ git reflog
> ```

## 八、远程同步

> ```bash
> # 下载远程仓库的所有变动
> $ git fetch [remote]
> 
> # 显示所有远程仓库
> $ git remote -v
> 
> # 显示某个远程仓库的信息
> $ git remote show [remote]
> 
> # 增加一个新的远程仓库，并命名
> $ git remote add [shortname] [url]
> 
> # 取回远程仓库的变化，并与本地分支合并
> $ git pull [remote] [branch]
> 
> # 上传本地指定分支到远程仓库
> $ git push [remote] [branch]
> 
> # 强行推送当前分支到远程仓库，即使有冲突
> $ git push [remote] --force
> 
> # 推送所有分支到远程仓库
> $ git push [remote] --all
> 
> # 查看远程仓库地址
> $ git remote -v
> 
> # 修改远程仓库地址
> $ git remote set-url origin https://XXXX/xiaoming/ptojectName.git
> 
> # 添加新的远程仓库地址
> $ git remote add origin https://gitee.com/code_life_git/wxxcx_video.git
> 
> # 添加上游（Fork）项目地址
> $ git remote add upstream git@gitub.com:57code/sheep-ui.git
> 
> # 拉取上游代码
> $ git pull upstream master
> 
> ```

## 九、撤销

> ```bash
> # 恢复暂存区的指定文件到工作区
> $ git checkout [file]
> 
> # 恢复某个commit的指定文件到暂存区和工作区
> $ git checkout [commit] [file]
> 
> # 恢复暂存区的所有文件到工作区
> $ git checkout .
> 
> # 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
> $ git reset [file]
> 
> # 重置暂存区与工作区，与上一次commit保持一致
> $ git reset --hard
> 
> # 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
> $ git reset [commit]
> 
> # 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
> $ git reset --hard [commit]
> 
> # 重置当前HEAD为指定commit，但保持暂存区和工作区不变
> $ git reset --keep [commit]
> 
> # 新建一个commit，用来撤销指定commit
> # 后者的所有变化都将被前者抵消，并且应用到当前分支
> $ git revert [commit]
> 
> # 暂时将未提交的变化移除，稍后再移入
> $ git stash
> $ git stash pop
> ```

## 十、其他

> ```bash
> # 生成一个可供发布的压缩包
> $ git archive
> 
> # git bash进入命令控制台执行如下命令即可快速删除node_modules（推荐，速度比较快）
> $ rm -rf ./node_modules
> ```

## 十一、pr

```bash
# 合并多次 commit 为一次
$ git rebase -i HEAD~n 对最近的 n 个 commit进行 rebase 操作
# 接下来选择要 commit 注释以及选择放弃的 commit 进行 rebase 操作
pick 是保留， s 是合并
```

```
1、首次 git clone ssh地址    克隆代码
2、默认会有本地master分支
3、git checkout -b 分支名  新建本地dev分支并切换
	或：git branch 分支名  创建分支
    git checkout 分支名   切换分支
4、使用本地dev分支 开发
5、开发完毕
  git add .  暂存区
  git commit -m '推送备注'  历史区
  git checkout master
  切换本地master分支
  git merge 需要合并的分支名
  合并分支
  git pull origin master
  拉取远程master分支代码，会有冲突
  git push origin master
  推送代码到远程master
6、git checkout dev
	再切换到本地开发分支
    git pull origin master
    再拉取远程代码，更新本地开发分支代码
```

## 十二、提交代码流程

```bash
# 提交代码顺序
1.下载
$ git clone [url地址]

2.创建本地分支
$ git branch 分支名

3.切换本地分支
$ git checkout 分支名

# 删除本地分支
$ git branch -d [branch-name]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]
#切到分支直接拉取
$ git pull

4.将改动的地方添加到版本管理器
$ git add .

5.//提交到本地的版本控制库里，引号里面是你对本次提交的说明信息
$ git commit -m "first commit"

6.推送远程库，Beta为分支名
$ git push -u origin 'Beta'

7.强制推送远程
$ git push -u origin master -f

```

### 大型文件上传失败

在.git文件夹中找到**config文件**然后点开添加如下

```
[http]
	postBuffer = 1048576000
```

### git设置代理通常用于在公司内网或需要通过代理服务器访问外网的情况下。

1. **命令行一次性设置代理**：  
  使用 `git config` 命令可以临时[设置](https://so.csdn.net/so/search?q=%E8%AE%BE%E7%BD%AE&spm=1001.2101.3001.7020)代理，这将只影响当前的仓库。
  
  ```bash
  git config --global http.proxy http://proxyuser:proxypwd@proxy.server.com:8080
  git config --global https.proxy https://proxyuser:proxypwd@proxy.server.com:8080
  ```
  
  替换 `proxyuser` 和 `proxypwd` 为你的代理用户名和密码，`proxy.server.com` 和 `8080` 分别为你的[代理服务器](https://so.csdn.net/so/search?q=%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8&spm=1001.2101.3001.7020)地址和端口。
  
2. **为当前仓库设置代理**：  
  如果你只想为当前仓库设置代理，可以去掉 `--global` 选项：
  
  ```bash
  git config http.proxy http://proxyuser:proxypwd@proxy.server.com:8080
  git config https.proxy https://proxyuser:proxypwd@proxy.server.com:8080
  ```
  
3. **取消代理设置**：  
  如果需要取消代理设置，可以使用以下命令：
  
  ```bash
  git config --global --unset http.proxy
  git config --global --unset https.proxy
  ```
  
4. **使用环境变量设置代理**：  
  你也可以通过设置环境变量来让 Git 使用代理，这通常在 shell 配置文件中设置，如 `.bashrc` 或 `.zshrc`：
  
  ```bash
  export http_proxy=http://proxyuser:proxypwd@proxy.server.com:8080
  export https_proxy=https://proxyuser:proxypwd@proxy.server.com:8080
  ```
  
5. **使用代理工具**：  
  有些情况下，你可能需要使用代理工具，如 `cURL` 或 `socks5`，Git 也支持通过这些工具来设置代理：
  
  ```bash
  git config --global http.proxy 'socks5://proxyuser:proxypwd@proxy.server.com:1080'
  git config --global https.proxy 'socks5://proxyuser:proxypwd@proxy.server.com:1080'
  ```
请注意，如果你的代理服务器不需要认证，可以省略用户名和密码部分。另外，确保你的代理服务器地址和端口号是正确的。如果你不确定如何设置，可以咨询你的网络管理员。

