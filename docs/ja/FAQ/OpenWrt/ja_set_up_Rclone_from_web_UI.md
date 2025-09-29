---
description: OpenWrt-FAQ
title: Web UIからRcloneを設定する方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/set_up_Rclone_from_web_UI
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q3: Web UIからRcloneを正常に設定できません -->

Rcloneは、クラウドストレージドライブ上のファイルを管理するプログラムです。これを使用して、クラウドファイルがローカルストレージと常に同期されるようにすることができます。

OpenWrt Luciインターフェース内にRcloneを設定するUIがありますが、まずコマンドライン内ですべての設定を行う必要があります。その後でのみ、Web UIを使用してファイルを表示できるようになります。

以下の手順に従ってください：

- **ステップ 1.** **OpenWrt Luci web UI**にアクセスし、`Services > Terminal`に移動します

- **ステップ 2.** OpenWrtの認証情報でログインします

- **ステップ 3.** 以下を入力して**rclone設定プロセス**を開始します

```sh
rclone config
```

- **ステップ 4.** **n**を押し、**Enter**を押して新しいリモートを作成します。

- **ステップ 5.** 新しいリモートに任意の名前を入力します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-1.1.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 6.** リモート接続を作成する**ストレージの種類**を見つけ、長いリストから対応する番号を入力します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-2.png" alt="pir" width="450" height="auto"/></p>

**注意：** ここでは例として**Google Drive**の番号**13**を選択しています

- **ステップ 7.** **Client ID**の入力を求められたら、**Enter**を押してデフォルトを受け入れます

- **ステップ 8.** **Client Secret**の入力を求められたら、**Enter**を押してデフォルトを受け入れます

- **ステップ 9.** rcloneがドライブからアクセスを要求する際に使用するスコープとして**1**を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-3.png" alt="pir" width="550" height="auto"/></p>

**注意：** これにより、ドライブ内のすべてのファイルへのフルアクセスが許可されます

- **ステップ 10.** **root folder ID**の入力を求められたら、**Enter**を押してデフォルトを受け入れます

- **ステップ 11.** **service account credentials JSON file path**の入力を求められたら、**Enter**を押してデフォルトを受け入れます

- **ステップ 12.** **Edit advanced config**のプロンプトで、**Enter**を押します（デフォルトで**No**が選択されます）

- **ステップ 13.** **Use auto config**メニューで、**n**を押してから**Enter**を押します

- **ステップ 14.** 表示されたリンクをコピーしてWebブラウザに貼り付けます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-4.png" alt="pir" width="500" height="auto"/></p>

- **ステップ 15.** Googleアカウントにサインインし、アクセスを**許可**します

- **ステップ 16.** **Googleサインインページ**に表示されたコードを**コピー**し、先ほど使用した**コマンドライン**に**貼り付け**します

- **ステップ 17.** **Configure as a team drive**で**Enter**を押してデフォルトを受け入れます

- **ステップ 18.** **Enter**を押してリモートの作成を確認します

以下のような出力が表示されます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-5.png" alt="pir" width="300" height="auto"/></p>

- **ステップ 19.** **q**を入力して設定を終了します

- **ステップ 20.** `NAS > Rclone`に移動し、**run Rclone as daemon**の横のボックスにチェックを入れ、**SAVE & APPLY**をクリックします

- **ステップ 21.** **rclone address**をコピーします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-6.png" alt="pir" width="600" height="auto"/></p>

- **ステップ 22.** **WEBUI REACT**をクリックすると、新しいWebページが開きます

- **ステップ 23.** 先ほどコピーした**rclone address**を最初の空白列に貼り付けます

- **ステップ 24.** ユーザー名とパスワードの両方に**admin**と入力し、**Verify**を押します

接続が確認されると、以下の出力が表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-7.png" alt="pir" width="300" height="auto"/></p>

- **ステップ 25.** **Login**をクリックし、サイドメニューから**Explore**に移動します

- **ステップ 26.** 先ほど作成したリモートの名前を入力し、**Open**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/rclone/rclone-8.png" alt="pir" width="1000" height="auto"/></p>

これで、ドライブで利用可能なすべてのファイルが表示されます