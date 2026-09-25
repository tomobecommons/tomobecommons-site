# 特定非営利活動法人 友部コモンズ 公式サイト

## サイトの更新方法

ブラウザで以下を開くと、管理画面が使えます。

```
https://tomobecommons.org/admin/
```

GitHubアカウントでログインすると、次の2つが編集できます。

- **お知らせ** — 記事の追加・編集・削除
- **サイトの内容** — 団体情報と活動内容の書き換え

「公開」を押すと、1〜2分でサイトに反映されます。GitHubの画面を直接操作する必要はありません。

## 編集できる人を増やすには

1. 追加したい方に、GitHubの個人アカウントを作ってもらう
2. `github.com/orgs/tomobecommons/people` を開く
3. 「Invite member」からユーザー名を入力して招待
4. 招待された方がメールから承認すると、管理画面にログインできるようになる

## 仕組み

| 役割 | サービス |
|---|---|
| ファイルの保管・ログイン | GitHub |
| サイトの公開 | Netlify（無料枠） |
| 管理画面 | Decap CMS |
| ページの組み立て | Eleventy |
| ドメイン | tomobecommons.org（Squarespace Domainsで登録） |

いずれも追加費用はかかりません（ドメイン更新料を除く）。

## ファイルの構成

```
src/
├── _data/
│   ├── org.json          団体情報（管理画面から編集）
│   └── activities.json   活動内容（管理画面から編集）
├── _includes/
│   └── base.njk          全体の枠組みとデザイン
├── news/                 お知らせの記事（管理画面から編集）
├── images/               管理画面からアップロードした画像
├── admin/
│   ├── index.html        管理画面
│   └── config.yml        管理画面の設定
└── index.njk             トップページの組み立て
```

デザインを変えるときは `src/_includes/base.njk` の `<style>` 部分を編集します。
