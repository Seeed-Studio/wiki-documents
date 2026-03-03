---
description: WatcherとNode-REDからDiscordにデータを送信する
title: Watcher & Node-RED to Discord
keywords:
- Watcher
- Discord
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png
slug: /ja/watcher_node_red_to_discord
last_update:
  date: 08/02/2024
  author: Vincent
---

# Watcher To Discord クイックスタート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png" style={{width:1000, height:'auto'}}/></div>

[**Discord**](https://discord.com/)は、音声通話、ビデオ通話、テキストメッセージング、メディア共有を通じてコミュニケーションを促進するインスタントメッセージングおよびVoIPソーシャルプラットフォームです。Discordでの会話は、プライベートまたは「サーバー」として知られる仮想コミュニティ内で行うことができます。

このチュートリアルでは、Watcher APIをNode-REDと統合して、WatcherからDiscordにシームレスにデータを送信する方法をガイドします。この統合により、**通知を受信するシンプルで効率的な方法を提供し、さらなるアプリケーションと統合への扉を開きます**。

## パート1. Node-REDでWatcherをセットアップする

### ステップ1. Node-REDをセットアップする

まず最初に、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

このセットアップにはNode-REDとWatcher APIが必要です。Node-REDをインストールしていない、またはWatcher APIと接続していない場合は、こちらから始めてください：[**Watcher to Node-RED クイックスタート**](https://wiki.seeedstudio.com/ja/watcher_to_node_red)。

### ステップ2. Watcherからのデータを準備する

WatcherをNode-REDと連携させるセットアップが完了したら、次のステップはWatcherからのデータをDiscord用に準備することです。ファンクションノードをダブルクリックして、データを適切にフォーマットします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

このチュートリアルの目的では、コンテンツと画像の両方を送信します。ただし、アプリケーションの必要に応じてデータを変換することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.png" style={{width:700, height:'auto'}}/></div>

#### データをフォーマットするNode-REDファンクションの例

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## パート 2. Discord Bot のセットアップ

### ステップ 3. Discord にサインアップ

続行するには Discord アカウントが必要です。まだアカウントをお持ちでない場合は、[**こちらをクリック**](https://discord.com)してアカウント作成の手順を完了してください。

すでにアカウントをお持ちの場合は、[**ステップ 4**](#step-4-create-development-application) に進んでください。

Node-RED で設定したい Discord bot をすでにお持ちの場合は、[**パート 3**](#part-3-integrate-discord-with-node-red) にスキップしてください。

### ステップ 4. 開発アプリケーションの作成

Discord アカウントのセットアップとログインが完了したら、[**Discord Developer Portal**](https://discord.com/developers/applications) に進み、新しいアプリケーションを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_1.png" style={{width:1000, height:'auto'}}/></div>

アプリケーションの名前を入力し、Discord の [**開発者利用規約**](https://support-dev.discord.com/hc/articles/8562894815383-Discord-Developer-Terms-of-Service) と [**開発者ポリシー**](https://support-dev.discord.com/hc/articles/8563934450327-Discord-Developer-Policy) に同意してから、**作成** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_2.png" style={{width:1000, height:'auto'}}/></div>

:::note
続行するには、Discord アカウントに有効なメールアドレスがリンクされている必要があります。Discord アカウントにメールアドレスが関連付けられていない場合は、次の手順に従ってください：[アカウントのメールアドレスを変更する方法](https://support.discord.com/hc/en-us/articles/4423385681175-How-to-Change-Your-Account-s-Email-Address)
:::

### ステップ 5. Bot 設定の構成

次に bot 設定を構成します。以下の手順に従ってください：

1. アプリケーションページの左サイドバーで、**設定** の下にある **Bot** タブをクリックします。

2. **Privileged Gateway Intents** セクションに、いくつかのオプションが表示されます。このチュートリアルでは、**MESSAGE CONTENT INTENT** のみを有効にする必要があります。これにより、bot がメッセージの内容を読み取ることができます。**MESSAGE CONTENT INTENT** の横にあるスイッチを切り替えて有効にします。有効にすると、スイッチが青色に変わります。

bot に変更を加えるたびに、下部にポップアップが表示され、**変更を保存** するよう促されます。続行する前に必ずこれを行ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_3.png" style={{width:1000, height:'auto'}}/></div>

:::note
アプリケーションで何をするかによって、追加のインテントを有効にする必要がある場合があります。より複雑な bot 機能の場合、**PRESENCE INTENT** や **SERVER MEMBERS INTENT** などの他のインテントを有効にする必要があるかもしれません。ただし、メッセージの送信のみを行うこのチュートリアルの目的では、**MESSAGE CONTENT INTENT** を有効にするだけで十分です。
:::

Bot ページにいる間、ページの上部に **Token** というタイトルのセクションも表示されます。**Reset Token** ボタンをクリックして、bot の新しいトークンを生成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_4.png" style={{width:1000, height:'auto'}}/></div>

トークンをリセットすると、bot のコードでトークンを更新するまで bot が動作しなくなることに注意してください。リセットを続行する前に、bot の設定を更新する準備ができていることを確認してください。

多要素認証を求められる場合があります。その場合は、続行する前に必要に応じてこのステップを完了してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_5.png" style={{width:1000, height:'auto'}}/></div>

このトークンをコピーして安全に保管してください。後で Node-RED で bot を認証するためにこのトークンが必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_6.png" style={{width:1000, height:'auto'}}/></div>

:::warning
bot トークンを公開で共有しないでください。あなたのトークンを持つ人は誰でもあなたの bot を制御できます。誤ってトークンを公開してしまった場合は、このページで直ちにリセットしてください。
:::

### ステップ 6. OAuth2 設定の構成

次に、**設定** の下にある **OAuth2** タブに切り替え、**OAuth2 URL Generator** が表示されるまでスクロールダウンします。ここで、bot アプリケーションを作成しているため、**bot** スコープをチェックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_7.png" style={{width:1000, height:'auto'}}/></div>

bot スコープを選択すると、**Bot Permissions** を選択できる新しいボックスが表示されます。このチュートリアルの目的では、bot に **Administrator** 権限を与えます。これにより、bot はすべての機能にアクセスできるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_8.png" style={{width:1000, height:'auto'}}/></div>

:::warning
bot に Administrator 権限を付与すると、すべてのサーバー機能への完全なアクセス権が与えられます。本番環境では、最小権限の原則に従い、bot が意図した機能に必要な特定の権限のみを付与することをお勧めします。
:::

最後に、スクロールダウンして新しく生成された URL を確認します。この URL をコピーして、ウェブブラウザのアドレスバーに貼り付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_9.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 7. サーバーへの Bot アクセス許可

bot を追加したいサーバーを選択するよう求められます。ドロップダウンメニューから適切なサーバーを選択し、**続行** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_10.png" style={{width:1000, height:'auto'}}/></div>

次の画面では、ボットに付与する権限の包括的なリストが表示されます。これらの権限は、[**ステップ6**](#step-6-configure-oauth2-settings)のOAuth2 URL Generatorで選択した内容に基づいています。各権限を慎重に確認してから、**Authorize**をクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_11.png" style={{width:1000, height:'auto'}}/></div>

[**ステップ5**](#step-5-configure-bot-settings)と同様に、再度多要素認証を求められる場合があります。その場合は、続行する前に必要に応じてこのステップを完了してください。

認証が成功すると、選択したDiscordサーバーにボットが追加されたことを示す確認メッセージが表示されます。続行するために、Discordサーバーに戻ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_12.png" style={{width:1000, height:'auto'}}/></div>

### ステップ8. チャンネルIDの取得

Discordサーバーに到達したら、プロフィール情報の近くにある画面下部の歯車アイコン（⚙️）をクリックしてください。これによりユーザー設定が開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_13.png" style={{width:1000, height:'auto'}}/></div>

ユーザー設定のサイドバーで、**アプリ設定**セクションまでスクロールダウンし、**詳細設定**をクリックしてください。**開発者モード**のトグルがオンになっていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_14.png" style={{width:1000, height:'auto'}}/></div>

ユーザー設定を閉じて、Discordサーバーに戻ってください。使用したいチャンネルを右クリックしてください（このチュートリアルでは、**general**チャンネルを使用しています）。表示されるコンテキストメニューの下部で、**チャンネルIDをコピー**をクリックしてください。このチャンネルIDをNode-REDフローで使用するために保存してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_15.png" style={{width:1000, height:'auto'}}/></div>

:::note
チャンネルIDは各Discordチャンネルの一意の識別子です。安全に保管し、公開で共有しないようにしてください。
:::

## パート3. DiscordとNode-REDの統合

### ステップ9. Discordモジュールのインストール

三本線のアイコンをクリックし、**パレットの管理**オプションをクリックしてください。これにより、ノードを追加または削除できる新しいウィンドウが開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.5.png" style={{width:1000, height:'auto'}}/></div>

パレット管理ウィンドウ内の**インストール**タブに切り替えてください。検索バーで`discord`と入力してモジュールを見つけてください。次に、**node-red-contrib-discord-advanced**エントリの横にある**install**ボタンをクリックしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

モジュールの動作方法とその潜在能力を最大化する方法をより深く理解したい場合は、[**ノードのドキュメント**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced/blob/main/README.md)と関連する[**Githubリポジトリ**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced)を確認することもお勧めします。

:::note
**node-red-contrib-discord-advanced**モジュールは、このチュートリアルの執筆時点（2024年8月）での現在の互換性と信頼性のために推奨されています。ただし、Node-REDモジュールの可用性と機能は時間の経過とともに変わる可能性があります。Node-REDライブラリまたはGitHubリポジトリで最新のユーザーフィードバックと互換性ノートを確認することをお勧めします。このモジュールで問題が発生した場合は、より適切なオプションについてNode-REDライブラリにリストされている他のDiscordモジュールを検討してください。
:::

### ステップ10. Discordノードの設定

Discordモジュールをインストールした後、**discordMessageManager**ノードをNode-REDフローにドラッグし、functionノードに接続してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

**discordMessageManager**ノードをダブルクリックして設定パネルを開いてください。**token**フィールドの横にあるプラスアイコンをクリックして、新しいDiscord APIトークン設定を追加してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_5.png" style={{width:700, height:'auto'}}/></div>

新しいウィンドウで、以下の情報を入力してください：

- Token: [**ステップ5**](#step-5-configure-bot-settings)で取得したトークンを入力してください
- Name: トークン設定に名前を付けてください

次に、**Add**または**Update**をクリックして設定を保存してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.png" style={{width:700, height:'auto'}}/></div>

**Channel**フィールドに、[ステップ8](#step-8-obtain-channel-id)で取得したチャンネルIDを入力してください。次に、**Done**をクリックして設定パネルを閉じてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.5.png" style={{width:700, height:'auto'}}/></div>

:::note
複数のチャンネルとトリガー条件を持つより複雑な設定の場合、Channelフィールドを空白のままにして、`msg.channel`を使用してチャンネルを動的に設定できます。ただし、この基本的なチュートリアルでは、静的なチャンネルIDを使用します。
:::

### ステップ11. デプロイ

最後に、Node-REDインターフェースの右上にある**Deploy**ボタンをクリックしてください。デプロイが完了すると、WatcherがNode-REDにメッセージを送信し、それがDiscordチャンネルに転送されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_16.png" style={{width:1000, height:'auto'}}/></div>

おめでとうございます！Node-REDを通じてDiscordにメッセージを送信するようにWatcherを正常に設定できました。この設定により、Watcherがトリガーされるたびに、Discordチャンネルでリアルタイム通知を受信できるようになります。これにより、開発プロジェクトにとって非常に魅力的な機会の数々が開かれました。次に作成される革新的なソリューションを心待ちにしています！

## トラブルシューティング

DiscordとNode-REDを統合する際に、いくつかのエラーが発生する可能性があります。以下は2つの一般的なエラーとその詳細な解決手順です：

### エラー: Used disallowed intents

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_1.png" style={{width:1000, height:'auto'}}/></div>

このエラーは、ボットがDiscord Developer Portalで有効化されていないインテントを使用しようとしている場合に発生します。これを修正するには：

1. [**Discord Developer Portal**](https://discord.com/developers/applications)にアクセスします。
2. アプリケーションを選択します。
3. 左サイドバーの**Bot**をクリックします。
4. **Privileged Gateway Intents**セクションまでスクロールダウンします。
5. ボットが必要とするインテントを有効化します（一般的には**Presence Intent**、**Server Members Intent**、**Message Content Intent**）。
6. ページ下部の**Save Changes**をクリックします。
7. Node-REDフローを再デプロイします。

### DiscordAPIError&#91;50001&#93;: Missing Access

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_2.png" style={{width:1000, height:'auto'}}/></div>

このエラーは、ボットがアクションを実行するために必要な権限を持っていないことを示しています。これを解決するには：

1. ボットが正しい権限でサーバーに招待されていることを確認します：

- [**Discord Developer Portal**](https://discord.com/developers/applications)にアクセスします。
- アプリケーションを選択し、**OAuth2**セクションに移動します。
- **URL Generator**で、**SCOPES**の下の**bot**を選択します。
- **BOT PERMISSIONS**の下で、ボットが必要とする権限を選択します（最低限、**Send Messages**と**View Channels**）。
- 生成されたURLをコピーし、新しいタブで開いて、これらの権限でボットをサーバーに招待します。

2. チャンネル権限を確認します：

- Discordで、メッセージを送信しようとしているチャンネルを右クリックします。
- **Edit Channel** > **Permissions**をクリックします。
- ボットロールが必要な権限、特に**View Channel**と**Send Messages**を持っていることを確認します。

3. Channel IDを確認します：

- Node-RED設定のChannel IDが正しいことを再確認します。
- ボイスチャンネルやカテゴリではなく、テキストチャンネルのIDを使用していることを確認します。

4. ボットトークンを確認します：

- Node-RED設定のトークンが正しく、最新であることを確認します。
- 不明な場合は、Discord Developer Portalの**Bot**セクションでトークンを再生成できます。

5. これらの変更を行った後、Node-REDフローを再デプロイします。

これらの手順を試した後も問題が続く場合は、[**Discord API documentation**](https://discord.com/developers/docs/reference)を確認するか、より具体的なトラブルシューティングについて[**Discord developer community**](https://discord.com/invite/discord-developers)でヘルプを求めることを検討してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
