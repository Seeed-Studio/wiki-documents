---
description: WatcherとNode-REDからDiscordにデータを送信する
title: Watcher & Node-REDからDiscordへ
keywords:
- Watcher
- Discord
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png
slug: /ja/watcher_node_red_to_discord
last_update:
  date: 05/15/2025
  author: Vincent
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# WatcherからDiscordへのクイックスタート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png" style={{width:1000, height:'auto'}}/></div>

[**Discord**](https://discord.com/)は、音声通話、ビデオ通話、テキストメッセージング、メディア共有を通じてコミュニケーションを促進するインスタントメッセージングおよびVoIPソーシャルプラットフォームです。Discordでの会話は、プライベートで行うことも、"サーバー"と呼ばれる仮想コミュニティ内で行うこともできます。

このチュートリアルでは、Watcher APIをNode-REDと統合し、WatcherからDiscordにデータをシームレスに送信する方法を説明します。この統合により、**通知を受け取る簡単で効率的な方法が提供され、さらなるアプリケーションや統合の可能性が広がります**。

## パート1. Node-REDでWatcherを設定する

### ステップ1. Node-REDを設定する

まず最初に、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

この設定にはNode-REDとWatcher APIが必要です。Node-REDをまだインストールしていない、またはWatcher APIと接続していない場合は、こちらから始めてください：[**Watcher to Node-RED Quick Start**](https://wiki.seeedstudio.com/ja/watcher_to_node_red)。

### ステップ2. Watcherからデータを準備する

WatcherをNode-REDと連携させた後、次のステップはWatcherからDiscord用のデータを準備することです。データを適切にフォーマットするために、関数ノードをダブルクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

このチュートリアルでは、コンテンツと画像を送信します。ただし、アプリケーションに応じてデータを変換することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.png" style={{width:700, height:'auto'}}/></div>

#### データをフォーマットするためのNode-RED関数の例

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## パート2. Discordボットを設定する

### ステップ3. Discordにサインアップする

次に進むにはDiscordアカウントが必要です。まだアカウントをお持ちでない場合は、[**こちらをクリック**](https://discord.com)してアカウント作成手順を完了してください。

すでにアカウントをお持ちの場合は、[**ステップ4**](#step-4-create-development-application)に進んでください。

すでにNode-REDで設定したいDiscordボットをお持ちの場合は、[**パート3**](#part-3-integrate-discord-with-node-red)に進んでください。

### ステップ4. 開発用アプリケーションを作成する {#step-4-create-development-application}

Discordアカウントを設定してログインしたら、[**Discord Developer Portal**](https://discord.com/developers/applications)に進み、新しいアプリケーションを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_1.png" style={{width:1000, height:'auto'}}/></div>

アプリケーションの名前を入力し、Discordの[**開発者利用規約**](https://support-dev.discord.com/hc/articles/8562894815383-Discord-Developer-Terms-of-Service)および[**開発者ポリシー**](https://support-dev.discord.com/hc/articles/8563934450327-Discord-Developer-Policy)に同意して、**Create**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_2.png" style={{width:1000, height:'auto'}}/></div>

:::note
Discordアカウントに有効なメールアドレスがリンクされている必要があります。Discordアカウントにメールアドレスが関連付けられていない場合は、こちらの手順に従ってください：[アカウントのメールアドレスを変更する方法](https://support.discord.com/hc/en-us/articles/4423385681175-How-to-Change-Your-Account-s-Email-Address)
:::

### ステップ5. ボット設定を構成する {#step-5-configure-bot-settings}

次に、ボット設定を構成します。以下の手順に従ってください：

1. アプリケーションページの左サイドバーで、**Settings**の下にある**Bot**タブをクリックします。

2. **Privileged Gateway Intents**セクションでいくつかのオプションが表示されます。このチュートリアルでは、**MESSAGE CONTENT INTENT**のみを有効にする必要があります。これにより、ボットがメッセージの内容を読み取ることができます。**MESSAGE CONTENT INTENT**の横にあるスイッチを切り替えて有効にします。有効にすると、スイッチが青色になります。

ボットに変更を加えるたびに、画面下部に**Save Changes**を促すポップアップが表示されます。次に進む前に必ず保存してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_3.png" style={{width:1000, height:'auto'}}/></div>

:::note
アプリケーションで行いたいことによっては、追加のインテントを有効にする必要がある場合があります。より複雑なボット機能には、**PRESENCE INTENT**や**SERVER MEMBERS INTENT**などの他のインテントを有効にする必要があるかもしれません。ただし、このチュートリアルではメッセージを送信するだけなので、**MESSAGE CONTENT INTENT**を有効にするだけで十分です。
:::

ボットページにいる間、ページ上部に**Token**というセクションが表示されます。**Reset Token**ボタンをクリックして、新しいトークンを生成してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_4.png" style={{width:1000, height:'auto'}}/></div>

トークンをリセットすると、トークンをボットのコードに更新するまでボットが動作しなくなることに注意してください。リセットを実行する前に、ボットの設定を更新する準備ができていることを確認してください。

多要素認証が求められる場合があります。その場合は、指示に従ってこの手順を完了してから進めてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_5.png" style={{width:1000, height:'auto'}}/></div>

このトークンをコピーして安全に保管してください。このトークンは後で Node-RED でボットを認証するために必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_6.png" style={{width:1000, height:'auto'}}/></div>

:::warning
ボットのトークンを公開しないでください。トークンを持っている人は誰でもボットを制御できます。トークンを誤って公開してしまった場合は、すぐにこのページでリセットしてください。
:::

### ステップ 6. OAuth2 設定を構成する {#step-6-configure-oauth2-settings}

次に、**Settings**（設定）の下にある **OAuth2** タブに切り替え、**OAuth2 URL Generator** が表示されるまでスクロールします。ここで、ボットアプリケーションを作成するために **bot** スコープを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_7.png" style={{width:1000, height:'auto'}}/></div>

ボットスコープを選択すると、新しいボックスが表示され、**Bot Permissions**（ボットの権限）を選択できるようになります。このチュートリアルでは、ボットにすべての機能へのアクセスを提供するために **Administrator** 権限を付与します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_8.png" style={{width:1000, height:'auto'}}/></div>

:::warning
ボットに管理者権限を付与すると、サーバーのすべての機能に完全にアクセスできるようになります。本番環境では、最小権限の原則に従い、ボットが意図した機能を実行するために必要な特定の権限のみを付与することをお勧めします。
:::

最後に、生成された新しい URL をスクロールして確認します。この URL をコピーして、ウェブブラウザのアドレスバーに貼り付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_9.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 7. ボットにサーバーへのアクセスを許可する

ボットを追加したいサーバーを選択するよう求められます。ドロップダウンメニューから適切なサーバーを選択し、**Continue**（続行）をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_10.png" style={{width:1000, height:'auto'}}/></div>

次の画面では、OAuth2 URL Generator で [**ステップ 6**](#step-6-configure-oauth2-settings) で選択した権限に基づいて、ボットに付与する権限の包括的なリストが表示されます。それぞれの権限を慎重に確認し、**Authorize**（承認）をクリックします。

[**ステップ 5**](#step-5-configure-bot-settings) と同様に、多要素認証が再度求められる場合があります。その場合は、指示に従ってこの手順を完了してから進めてください。

承認が成功すると、選択した Discord サーバーにボットが追加されたことを示す確認メッセージが表示されます。次に、Discord サーバーに戻って作業を続けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_12.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 8. チャンネル ID を取得する

Discord サーバーに到達したら、画面下部のプロフィール情報の横にある歯車アイコン (⚙️) をクリックします。これにより、ユーザー設定が開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_13.png" style={{width:1000, height:'auto'}}/></div>

ユーザー設定のサイドバーで、**App Settings**（アプリ設定）セクションまでスクロールし、**Advanced**（詳細設定）をクリックします。**Developer Mode**（開発者モード）のトグルがオンになっていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_14.png" style={{width:1000, height:'auto'}}/></div>

ユーザー設定を閉じて Discord サーバーに戻ります。使用したいチャンネル（このチュートリアルでは **general** チャンネルを使用）を右クリックします。表示されるコンテキストメニューの下部で、**Copy Channel ID**（チャンネル ID をコピー）をクリックします。このチャンネル ID を保存して、Node-RED フローで使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_15.png" style={{width:1000, height:'auto'}}/></div>

:::note
チャンネル ID は各 Discord チャンネルの一意の識別子です。安全に保管し、公開しないようにしてください。
:::

## Part 3. Node-RED と Discord の統合

### Step 9. Discord モジュールをインストールする

三本線アイコンをクリックし、**Manage palette** オプションを選択します。これにより、新しいウィンドウが開き、ノードの追加や削除が可能になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.5.png" style={{width:1000, height:'auto'}}/></div>

パレット管理ウィンドウ内の **Install** タブに切り替えます。検索バーに `discord` と入力してモジュールを探します。その後、**node-red-contrib-discord-advanced** エントリの横にある **install** ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

モジュールの動作やその可能性を最大限に活用する方法についてより深く理解したい場合は、[**ノードのドキュメント**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced/blob/main/README.md)や関連する [**Github リポジトリ**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced) を確認することをお勧めします。

:::note
**node-red-contrib-discord-advanced** モジュールは、このチュートリアル執筆時点（2024年8月）での互換性と信頼性の観点から推奨されています。ただし、Node-RED モジュールの利用可能性や機能は時間とともに変化する可能性があります。Node-RED ライブラリや GitHub リポジトリで最新のユーザーフィードバックや互換性情報を確認することをお勧めします。このモジュールに問題がある場合は、Node-RED ライブラリに掲載されている他の Discord モジュールを検討して、より適切なオプションを探してください。
:::

### Step 10. Discord ノードを設定する

Discord モジュールをインストールした後、**discordMessageManager** ノードを Node-RED フローにドラッグし、関数ノードに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

**discordMessageManager** ノードをダブルクリックして設定パネルを開きます。**token** フィールドの横にあるプラスアイコンをクリックして、新しい Discord API トークン設定を追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_5.png" style={{width:700, height:'auto'}}/></div>

新しいウィンドウで以下の情報を入力します：
- トークン: [**Step 5**](#step-5-configure-bot-settings) で取得したトークンを入力します
- 名前: トークン設定に名前を付けます

その後、**Add** または **Update** をクリックして設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.png" style={{width:700, height:'auto'}}/></div>

**Channel** フィールドには、[Step 8](#step-8-obtain-channel-id) で取得したチャンネル ID を入力します。その後、**Done** をクリックして設定パネルを閉じます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.5.png" style={{width:700, height:'auto'}}/></div>

:::note
複数のチャンネルやトリガー条件を持つ複雑なセットアップの場合、Channel フィールドを空白のままにして `msg.channel` を使用して動的にチャンネルを設定することができます。ただし、この基本的なチュートリアルでは静的なチャンネル ID を使用します。
:::

### Step 11. デプロイ

最後に、Node-RED インターフェースの右上にある **Deploy** ボタンをクリックします。デプロイが完了すると、Watcher は Node-RED にメッセージを送信し、それが Discord チャンネルに転送されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_16.png" style={{width:1000, height:'auto'}}/></div>

おめでとうございます！Watcher を通じて Discord にメッセージを送信する設定が成功しました。このセットアップにより、Watcher がトリガーされるたびに Discord チャンネルでリアルタイム通知を受け取ることができます。この方法を活用することで、開発プロジェクトにおける数多くのエキサイティングな可能性が広がります。次にどのような革新的なソリューションを作成するのか、楽しみにしています！

## トラブルシューティング

DiscordをNode-REDと統合する際に、いくつかのエラーが発生する可能性があります。以下は、よくある2つのエラーとその解決手順です。

### エラー: 使用が許可されていないインテント

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_1.png" style={{width:1000, height:'auto'}}/></div>

このエラーは、ボットがDiscord Developer Portalで有効化されていないインテントを使用しようとした場合に発生します。以下の手順で修正してください：

1. [**Discord Developer Portal**](https://discord.com/developers/applications)にアクセスします。
2. 自分のアプリケーションを選択します。
3. 左側のサイドバーで**Bot**をクリックします。
4. **Privileged Gateway Intents**セクションまでスクロールします。
5. ボットが必要とするインテントを有効化します（一般的には**Presence Intent**、**Server Members Intent**、**Message Content Intent**）。
6. ページ下部の**Save Changes**をクリックします。
7. Node-REDのフローを再デプロイします。

### DiscordAPIError&#91;50001&#93;: Missing Access

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_2.png" style={{width:1000, height:'auto'}}/></div>

このエラーは、ボットがアクションを実行するための必要な権限を持っていないことを示しています。以下の手順で解決してください：

1. ボットが正しい権限でサーバーに招待されていることを確認します：
- [**Discord Developer Portal**](https://discord.com/developers/applications)にアクセスします。
- アプリケーションを選択し、**OAuth2**セクションに移動します。
- **URL Generator**で、**SCOPES**の下にある**bot**を選択します。
- **BOT PERMISSIONS**の下で、ボットが必要とする権限を選択します（最低限、**Send Messages**と**View Channels**）。
- 生成されたURLをコピーし、新しいタブで開いて、この権限でボットをサーバーに招待します。

2. チャンネルの権限を確認します：
- Discordで、メッセージを送信しようとしているチャンネルを右クリックします。
- **Edit Channel** > **Permissions**をクリックします。
- ボットのロールが必要な権限（特に**View Channel**と**Send Messages**）を持っていることを確認します。

3. チャンネルIDを確認します：
- Node-REDの設定で使用しているチャンネルIDが正しいことを再確認します。
- テキストチャンネルのIDを使用していることを確認し、ボイスチャンネルやカテゴリのIDを使用していないことを確認します。

4. ボットトークンを確認します：
- Node-REDの設定で使用しているトークンが正しく、最新であることを確認します。
- 不明な場合は、Discord Developer Portalの**Bot**セクションでトークンを再生成できます。

5. これらの変更を行った後、Node-REDのフローを再デプロイします。

これらの手順を試しても問題が解決しない場合は、[**Discord APIドキュメント**](https://discord.com/developers/docs/reference)を確認するか、[**Discord開発者コミュニティ**](https://discord.com/invite/discord-developers)でより具体的なトラブルシューティングのサポートを求めてください。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>