---
description: Watcher & Node-RED から Open Interpreter へのメッセージ送信
title: Watcher & Node-RED から Open Interpreter へ
keywords:
- watcher
- Open Interpreter
image: https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png
slug: /ja/watcher_node_red_to_open_interpreter
last_update:
  date: 05/15/2025
  author: Allen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Watcher から Open Interpreter へのクイックスタート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png" style={{width:1000, height:'auto'}}/></div>

## Part 1. [Open Interpreter](https://docs.openinterpreter.com/getting-started/introduction) とは

Open Interpreter は、ユーザーとコンピュータ間のやり取りを促進するオープンソースツールであり、自然言語コマンドを使用してさまざまなプログラミング言語でコードを実行できるようにします。これは橋渡しの役割を果たし、ユーザーが平易な言葉で指示を書き、それをインタープリターが実行可能なコードに変換します。これにより生産性が向上し、特にコーディング構文に不慣れな人々にとってプログラミングがより身近なものになります。

## Part 2. Node-RED での操作

このパートでは、作業を完了するために 4 つのモジュールが必要です。それらは **SenseCap Watcher OpenSteam、function、http request、debug** モジュールです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/6.png" style={{width:1000, height:'auto'}}/></div>

1. **SenseCap Watcher OpenSteam モジュール**: Watcher から Node-RED へのメッセージを取得します。
2. **function モジュール**: 必要なメッセージを取得するためにデータを処理します。
3. **http request モジュール**: HTTP プロトコルを介して Open Interpreter にメッセージを送信します。
4. **debug モジュール**: ワークフロー全体をデバッグして、すべてが正常に動作しているか確認します。

以下の手順でこれらのモジュールを設定する方法を説明します。

### Step 1. SenseCap Watcher OpenSteam モジュールの設定

まず最初に、以下のビデオに従って Watcher でタスクを実行する必要があります。詳細を知りたい場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Watcher から Node-RED にメッセージを送信する方法がわからない場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

### Step 2. function モジュールの設定

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/7.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

### Step 3. http request モジュールの設定

セキュリティのために POST リクエストを使用し、ポート 3000 に送信します。後で Open Interpreter を使用してポート 3000 をリッスンし続けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/8.png" style={{width:800, height:'auto'}}/></div>

### Step 4. debug モジュールの設定

以下の画像のように選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/9.png" style={{width:800, height:'auto'}}/></div>

設定が完了したら、**Deploy** を忘れずに行ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/10.png" style={{width:1000, height:'auto'}}/></div>

## Part 3. Open Interpreterでの操作

:::tip
続行する前に、コンピュータにPython開発環境が必要です。

まだインストールしていない場合は、[こちらをクリックして参考にしてください。](https://phoenixnap.com/kb/how-to-install-python-3-windows)
:::

### Step 5. Open Interpreterのインストール

Pythonをインストールした後、Pythonを使用してOpen Interpreterを簡単にインストールできます。以下のコマンドを実行してください。

```python
pip install open-interpreter
```

### Step 6. Open Interpreterの起動

Interpreterにはオンラインモードとローカルモードの2つのモードがあります。デフォルトでは、Interpreterはオンラインモードを選択し、OpenAIのChatGPT gpt-4-turbo APIキーを使用します。また、ローカルモードに設定することも可能で、ローカルで実行するためにモデルをダウンロードする必要があります。

:::tip
オンラインモードをおすすめします。オンラインモードはローカルモードよりも高速で賢く、ローカルモードはしばしば動作が停止することがあります。
:::

#### オンラインモード

1. 始める前に、OpenAI APIキーが必要です。[こちらをクリックして](https://platform.openai.com/api-keys)取得してください（OpenAI GPT-4の有料会員である必要があります）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/16.png" style={{width:1000, height:'auto'}}/></div>

2. 次に、```interpreter```というコマンドを入力して起動します。この際、APIキーの入力が求められます。その後、モデルをgpt-4-turboに設定することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2_1.png" style={{width:1000, height:'auto'}}/></div>

#### ローカルモード

1. 始める前に、ローカルで実行するためのモデルをダウンロードする必要があります。ここでは**Ollama**をおすすめします。[こちらをクリックして移動してください。](https://ollama.com/) このアプリケーションをダウンロードしてインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/12.png" style={{width:1000, height:'auto'}}/></div>

2. インストールが成功したら、**PowerShell（またはターミナル）**で```ollama```を実行します。以下の画像のようになります。その後、```ollama run llama3.1```を実行してモデル**llama3.1**をダウンロードして実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/15.png" style={{width:1000, height:'auto'}}/></div>

3. 他のモデルを試したい場合は、[こちらをクリックして移動してください。](https://ollama.com/library) ```ollama run xxx```を実行するだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/13.png" style={{width:1000, height:'auto'}}/></div>

4. モデルをインストールして正常に実行した後、続行できます。```interpreter -l```というコマンドを入力して起動し、**ollama**と**llama3.1**（ダウンロードしたモデル）を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/11.png" style={{width:1000, height:'auto'}}/></div>

### Step 7. コマンドの実行

:::tip
以下のコマンドをInterpreterで何度も実行しましたが、毎回Interpreterの反応が同じではありません。

そのため、Interpreterの反応に応じて対話する必要があります。場合によっては再起動して再試行する必要があります。
:::

以下はOpen Interpreterに送信した自然言語コマンドです。

```
i want you to keep listening computer port 3000 and extract the image_url and open it in browser.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2.png" style={{width:1000, height:'auto'}}/></div>

最初の試行では、Interpreterは初期設定で簡易性のためGETリクエストのみをサポートしていると述べましたが、私のリクエストはセキュリティのためPOSTリクエストでした。そのため、サポートできないとし、POSTリクエストを処理するようサーバーを変更することを提案しました。私は了承し、Interpreterは自動的に実行を開始しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/3.png" style={{width:1000, height:'auto'}}/></div>

ご覧の通り、コードは正常に実行され、ポート3000をリスニングしています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/4.png" style={{width:1000, height:'auto'}}/></div>

次に、Watcherを使用して自分自身を検出します。画像がキャプチャされ、ブラウザで自動的に開かれます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/5.png" style={{width:1000, height:'auto'}}/></div>

WatcherとOpen Interpreterアプリケーションの統合に成功したことをおめでとうございます！この成果は、あなたの努力とスキルを示す重要なステップです。これからさらに興味深い概念やツールを探索することができるでしょう。これからの挑戦と発見を楽しみ、このエキサイティングな冒険のすべての瞬間を満喫してください！

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>