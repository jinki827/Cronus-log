# Gitチートシート
<br>

# ・Gitコマンド集

## 0. gitのインストール（そもそも入ってない場合）

まずは自分のパソコンにGitが入っているか確認します。ターミナルを開いて、以下のコマンドを打ちます。

```bash
git --version
```

ここでバージョン（例: `git version 2.39.2`など）が出ればインストールされています。エラーが出る場合は、以下の方法でインストールしてください。

* **Macの場合:**
ターミナルで `git` と打ってEnterを押すと、インストール画面が自動で立ち上がります。またはHomebrewを使って `brew install git` を実行します。
* **Windowsの場合:**
[Git for Windows](https://gitforwindows.org/) のサイトからインストーラーをダウンロードし、標準設定のまま「Next」を押してインストールします。

**【最初だけ必要な初期設定】**
誰がコミットしたか分かるように、名前とメールアドレスを登録しておきます。

```bash
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメールアドレス"

```
<br>


## 1. クローン(clone)の作成方法

GitHubなどにあるリモート（インターネット上）のレポジトリを、自分のパソコン（ローカル）に丸ごと持ってくる作業です。

- レポジトリをHTTPSでクローンする
```bash
git clone https://github.com/jinki827/Cronus-log.git
```

おそらく、GitHubアカウント名とPWが要求されます。
GitHubアカウントとPW(これは個人用アクセスとトークン/PATになります。)を入力してください。

クローンが終わったら、**忘れずにそのフォルダ（ディレクトリ）の中に移動**しましょう。これを忘れて次のコマンドを打つとエラーになります。

```bash
cd Cronus-log
```
<br>

## 1.1 もし"個人用アクセストークン"が分からない場合

ターミナルに**GitHub CLI(gh)** をインストールして、
**GitHub CLI(gh)**を認証ヘルパーとして使ってログインを自動化するのをお勧めします。

- GitHub CLI(gh)をターミナルにインストールする
```bash
brew install gh
```

- ログイン認証を設定する
```bash
gh auth login
```

ターミナルに下記の内容が記載されます。
  - Where do you use GitHub? ➔ GitHub.com
  - What is your preferred protocol for Git operations? ➔ HTTPS
  - Authenticate Git with your GitHub credentials? ➔ Yes
  - How would you like to authenticate GitHub CLI? ➔ Log in with a web browser


**【上記が記載される前にもしかしたら、Mac自体のログインを要求される場合がりますが、MacのログインPWを入力してください。】**


- ブラウザで認証を完了する
  1. ターミナルに**8桁のワンタイムパスワード(例：`ABCD-1234`)**が表示されます。
  2. Enter キーを押してブラウザを起動するか、ブラウザを起動して、`https://github.com/login/device` にアクセスします。
  3. 表示された8桁コードを入力し、GitHubへサインインして承認すれば完了です。※二段階認証が入るかもしれません。

これで、この後ターミナル上でGitHubアカウントのログイン認証を自動で行ってくれます。
もう一度、クローンを作成する操作をしてみてください。
<br>
<br>



## 2. ブランチ(branch)の作成方法

いきなり `main` ブランチ（本番用データ）を書き換えるのは危険なので、自分専用の作業スペース（ブランチ）を作ります。

- ブランチを作成する
```bash
git switch -c <新しいブランチ名>

# （例）feature/login というブランチを作る場合
# git switch -c feature/login
```

*※少し古い記事だと `git checkout -b` と書かれていますが、最近はより分かりやすい `git switch` を使うのが主流です。*


- 今の自分がどのブランチにいるか確認したい時
```bash
git branch
```

- ブランチを作成したら、GitHubにこのブランチを同期させましょう。
```bash
git push origin <ブランチ名>
```
<br>

## 2.1 ブランチ(branch)の命名ルール

**基本フォーマット**<br>
`カテゴリ/Issue番号-作業内容`
<br>

**カテゴリの例**
|カテゴリ|説明|ブランチ名の例|
|---|---|---|
|feature/|新機能・画面作成時|feature/12-stage1-html|
|fix/|バグ・表示崩れの修正|fix/5-localstorage-bug|
|refactor/|動きを変えないコード整理|refactor/18-js-cleanup|
|docs/|ドキュメント作成、変更|docs/2-git-cheatsheet|

<br>
<br>


## 3. addして、commitしてpushする。

作業中のブランチで、コードを書いているときに、区切りの良いところ作業を記録します。

### 3.1. git add
**変更したファイルをセーブの準備状態にする。**
```bash
git add <変更ファイル名>
```
**変更したファイルをまとめてセーブの準備状態にする。**
```bash
git add .
```

### 3.2. git commit
**変更したファイルをコメント付きで、実際にセーブする。**
```bash
git commit -m "<コメント>"
```
**コメントの書き方**<br>
先頭に分かりやすい種類（プレフィックス）をつけると、変更の意図がチームメンバーに伝わりやすくなります。
|プレフィックス|説明|例|
|---|---|---|
|`feat:`|新しい機能の追加|feat:quiz1画面追加|
|`fix:`|バグの修正|fix:戻るボタンが表示されなかったので修正|
|`refactor:`|リファクタリング（動作を変えないコード改善）|refactor:可読性のためコメントを追加|
|`docs:`|ドキュメントのみの変更|docs:READMEに追加仕様追記|
|`test:`|テストコードの追加・修正|test:テスト25を追加|
|`chore:`|ビルドやツールなどの雑務・設定変更||



### 3.3. git status
**現在の状態を確認できます。**
```bash
git push origin <ブランチ名>
```
変更があるが、addやcommitされていないファイルや逆にaddされているファイルなど確認できます。


### 3.4. git push
**GitHubと同期する。**
```bash
git push origin <ブランチ名>
```
***※メインに`push`しないように！***

<br>
<br>


## 4. ローカルのファイルを最新にする。

他の人が作業して、リモートの `main`や`develop` ブランチが進んでいることがあります。自分の作業を始める前や、新しいブランチを作る前は、常に最新の状態にしておきましょう。

### 4.1 git fetch（ダウンロードだけ行う）
- 意味: GitHub（リモート）にある最新の変更情報を**手元にダウンロードしてくる**コマンドです。

- 解説: ダウンロードするだけで、今自分が書いているコードやブランチには一切影響を与えません。「自分の作業を邪魔されずに、GitHub上の最新状態だけを確認・チェックしたい」という場合に安全に使えます。

- コマンド : GitHub（origin）上にあるすべてのブランチの最新情報を一括ダウンロード※`origin`は省略可
```bash
git fetch origin
```
```bash
git fetch
```


### 4.2 git merge
- 意味: ダウンロードしてきた最新コードや別のブランチの変更を、**「今開いている」自分のブランチに合体（統合）させる**コマンドです。

- 解説: fetch で持ってきたデータや、別の作業ブランチを自分の手元に取り込む時に使います。同じファイルの同じ場所を書き換えていた場合は「コンフリクト（衝突）」が発生し、手動でどちらのコードを残すか選ぶ必要があります。

- 注意：マージの向きに注意しましょう！**「指定したブランチ」** が **「今いるブランチ」** に合体されます。
$$\text{今いるブランチ（マージ先）} \Leftarrow \text{\texttt{git merge <指定するブランチ（マージ元）>}}$$

<br>

- ケースA: `main` の最新内容を feature（自分の作業中ブランチ）に取り込みたい時
```Bash
# 1. マージ先（feature）に移動する
git switch feature/12-stage1-html

# 2. マージ元（main）を指定して合体する
git merge main
```
**>結果** : `feature/12-...`が更新され、`main` の最新内容が合流します。
<br>

- ケースB：`feature` の作業内容を `main` に取り込みたい時
```Bash
# 1. マージ先（main）に移動する
git switch main

# 2. マージ元（feature）を指定して合体する
git merge feature/12-stage1-html
```
**>結果** : `main` が更新され、`feature/12-...` の内容が合流します。
<br>

- マージ履歴残すコマンド（--no-ff）<br>
  `--no-ff`（ノー・ファスト・フォーワード）は「どこからどこへマージしたか」の記録が残ります。
```Bash
git merge --no-ff <合体させたいブランチ名>
```
<br>


### 4.3. git pull
- 意味: `git fetch`（ダウンロード）と `git merge`（合体）を1つのコマンドで同時に実行するコマンドです。

- 解説: 普段の開発で一番よく使います。手元を1発で最新状態にできるため便利ですが、裏で merge が動くため、作業途中の未セーブコードがあると衝突しやすくなります。
- 注意：`git merge`同様マージするブランチの向きに注意しましょう。また、必ず add と commit でセーブしてから実行しましょう。

- ケースA: `main` の最新内容を feature（自分の作業中ブランチ）に取り込みたい時
```Bash
# 1. マージ先（feature）に移動する
git switch feature/12-stage1-html

# 2. マージ元（main）を指定して合体する
git git pull origin main
```
**>結果** : `feature/12-...`が更新され、`main` の最新内容が合流します。
<br>

- ケースB：`feature` の作業内容を `main` に取り込みたい時
```Bash
# 1. マージ先（main）に移動する
git switch main

# 2. マージ元（feature）を指定して合体する
git git pull origin feature/12-stage1-html
```
**>結果** : `main` が更新され、`feature/12-...` の内容が合流します。

- マージ履歴残すコマンド（--no-ff）
```Bash
git pull --no-ff origin main
```

<br>
<br>

## 4. プルリクエスト(PR)前にやること

作業がひと段落して、いよいよGitHubに自分のコードをアップする（Pushする）時の流れです。
