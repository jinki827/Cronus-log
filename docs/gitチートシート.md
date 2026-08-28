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

### 3.1. add
**変更したファイルをセーブの準備状態にする。**
```bash
git add <変更ファイル名>
```
**変更したファイルをまとめてセーブの準備状態にする。**
```bash
git add .
```

### 3.2. commit
**変更したファイルをコメント付きで、実際にセーブする。**
```bash
git commit -m "<コメント>"
```

### 3.3. git status
**現在の状態を確認できます。**
```bash
git push origin <ブランチ名>
```
変更があるが、addやcommitされていないファイルや逆にaddされているファイルなど確認できます。


### 3.4. push
**GitHubと同期する。**
```bash
git push origin <ブランチ名>
```
***※メインに`push`しないように！***
<br>
<br>


## 3. mainを最新にする(pull)

他の人が作業して、リモートの `main` ブランチが進んでいることがあります。自分の作業を始める前や、新しいブランチを作る前は、常に最新の状態にしておきましょう。

```bash
# 1. まず main ブランチに移動する
git switch main

# 2. リモートの最新状態を引っ張ってくる（pull）
git pull origin main

```

*※自分が別のブランチで作業中の場合は、一度作業をコミットしてから `main` に移動してください。*

## 4. プルリクエスト(PR)前にやること

作業がひと段落して、いよいよGitHubに自分のコードをアップする（Pushする）時の流れです。

**① 変更したファイルを確認する**
自分がどのファイルをいじったか確認します。赤字で変更されたファイルが出ます。

```bash
git status

```

**② 変更をステージ（追加する準備）に上げる**

```bash
# 全ての変更をまとめて追加する場合（一番よく使います）
git add .

# 特定のファイルだけ追加する場合
git add ファイル名

```

**③ 変更に名前をつけて保存する（コミット）**

```bash
git commit -m "ここに何をしたかメッセージを書く"

# （例）
# git commit -m "ログイン画面のUIを作成"
# git commit -m "wip: ログイン処理の実装途中" （区切りが悪い時）

```

**④ GitHub（リモート）にアップロードする（プッシュ）**

```bash
# origin(リモート)の、今自分が作業しているブランチにPushする
git push origin <今作業しているブランチ名>

# （例）
# git push origin feature/login

```

ここまで完了したら、GitHubの画面を開くと「**Compare & pull request**（プルリクエストを作成する）」という緑のボタンが出現しているので、そこからPRを作成できます！

---

まずはこのシートを手元に置きながら、**「pull → branch作成 → 作業 → add → commit → push」** という一連のサイクルに慣れていくのがおすすめです。
もし「このコマンドって何をしてるの？」など、気になる部分があれば気軽に聞いてくださいね。