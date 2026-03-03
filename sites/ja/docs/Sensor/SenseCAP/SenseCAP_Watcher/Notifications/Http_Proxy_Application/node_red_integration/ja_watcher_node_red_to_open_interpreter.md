---
description: WatcherとNode-REDからOpen Interpreterにメッセージを送信する
title: Watcher & Node-RED to Open Interpreter
keywords:
- watcher
- Open Interpreter
image: https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png
slug: /ja/watcher_node_red_to_open_interpreter
last_update:
  date: 08/19/2024
  author: Allen
---

# Watcher To Open Interpreter クイックスタート

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png" style={{width:1000, height:'auto'}}/></div>

## パート1. [Open Interpreter](https://docs.openinterpreter.com/getting-started/introduction)とは

Open Interpreterは、ユーザーが自然言語コマンドを使用してさまざまなプログラミング言語でコードを実行できるようにすることで、ユーザーとコンピューターの間の相互作用を促進するオープンソースツールです。これは橋渡しの役割を果たし、ユーザーが平易な言語で指示を書くことを可能にし、インタープリターがそれを実行可能なコードに翻訳します。これにより生産性が向上し、特にコーディング構文に慣れていない人にとってプログラミングがより身近になります。

## パート2. Node-REDでの操作

このパートでは、作業を完了するために4つのモジュールが必要です。**SenseCap Watcher OpenSteam、function、http request、debug**モジュールです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/6.png" style={{width:1000, height:'auto'}}/></div>

1. **SenseCap Watcher OpenSteamモジュール**: WatcherからNode-REDにメッセージを取得します。
2. **functionモジュール**: データを処理して必要なメッセージを取得します。
3. **http requestモジュール**: httpプロトコル経由でOpen Interpreterにメッセージを送信します。
4. **debugモジュール**: 全体のワークフローをデバッグして、すべてが正常に動作しているかを確認します。

以下の手順で、これらのモジュールの設定方法を説明します。

### ステップ1. SenseCap Watcher OpenSteamモジュールの設定

まず最初に、以下のビデオに従ってWatcherでタスクを実行する必要があります。詳細を知りたい場合は[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

WatcherからNode_REDにメッセージを送信する方法がまだわからない場合は、[こちらをクリックしてください](https://wiki.seeedstudio.com/ja/watcher_to_node_red/)。

### ステップ2. functionモジュールの設定

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/7.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

### ステップ3. HTTPリクエストモジュールの設定

セキュリティのためにPOSTリクエストを使用し、ポート3000に送信します。後でOpen Interpreterを使用してポート3000をリッスンし続けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/8.png" style={{width:800, height:'auto'}}/></div>

### ステップ4. デバッグモジュールの設定

以下の画像のように選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/9.png" style={{width:800, height:'auto'}}/></div>

設定が完了したら、**Deploy**することを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/10.png" style={{width:1000, height:'auto'}}/></div>

## パート3. Open Interpreterでの操作

:::tip
続行する前に、前提条件としてコンピューターにPython開発環境が必要です。

まだお持ちでない場合は、[こちらをご参照ください。](https://phoenixnap.com/kb/how-to-install-python-3-windows)
:::

### ステップ5. Open Interpreterのインストール

Pythonをインストールした後、PythonでOpen Interpreterを簡単にインストールできます。コマンド一つだけです。

```python
pip install open-interpreter
```

### ステップ6. Open Interpreterを開始する

Interpreterには2つのモードがあります：オンラインモードとローカルモードです。デフォルトでは、Interpreterはオンラインモードを選択し、OpenAI ChatGPT gpt-4-turbo API Keyを使用します。ローカルモードに設定することもできますが、その場合はモデルをダウンロードしてローカルで実行する必要があります。

:::tip
オンラインモードをお勧めします。オンラインモードはローカルモードよりもはるかに高速で賢く、ローカルモードはしばしば停止することがあるためです。
:::

#### オンラインモード

1. 開始する前に、OpenAI API Keyが必要です。[OpenAI GPT-4の有料メンバーの場合は、こちらをクリック](https://platform.openai.com/api-keys)して取得できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/16.png" style={{width:1000, height:'auto'}}/></div>

2. その後、```interpreter```コマンドを入力して開始し、API Keyの入力が求められます。その後、モデルをgpt-4-turboに正常に設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2_1.png" style={{width:1000, height:'auto'}}/></div>

#### ローカルモード

1. 開始する前に、ローカルで実行するためのモデルをダウンロードする必要があります。ここでは**Ollama**をお勧めします。[こちらをクリックしてジャンプ。](https://ollama.com/) このアプリケーションをダウンロードしてインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/12.png" style={{width:1000, height:'auto'}}/></div>

2. 正常にインストールしたら、**PowerShell（またはTerminal）**で```ollama```を実行すると、以下の画像のようになります。その後、```ollama run llama3.1```を実行してモデル**llama3.1**をダウンロードして実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/15.png" style={{width:1000, height:'auto'}}/></div>

3. 他のモデルを試したい場合は、[こちらをクリックしてジャンプ。](https://ollama.com/library) ```ollama run xxx```を実行するだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/13.png" style={{width:1000, height:'auto'}}/></div>

4. モデルのインストールと実行が正常に完了したら、続行できます。```interpreter -l```コマンドを入力してInterpreterに入り、**ollama**と**llama3.1**（先ほどダウンロードしたモデル）を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/11.png" style={{width:1000, height:'auto'}}/></div>

### ステップ7. コマンドを実行する

:::tip
Interpreterで以下のコマンドを実行するために何度も試しましたが、Interpreterの反応は毎回同じではありません。

そのため、Interpreterの反応に応じて対話する必要があります。時には再起動して再試行する必要があります。
:::

以下は、Open Interpreterに送信した私の自然言語コマンドです。

```
i want you to keep listening computer port 3000 and extract the image_url and open it in browser.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2.png" style={{width:1000, height:'auto'}}/></div>

最初に、Interpreterは初期設定では簡単にするためGETリクエストのみをサポートしているが、私のリクエストはセキュリティのためPOSTであるため、サポートできないと言い、POSTリクエストを処理するようにサーバーを変更することを提案しました。私がyesと言うと、彼女は自動的に実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/3.png" style={{width:1000, height:'auto'}}/></div>

ご覧のとおり、コードは正常に実行され、ポート3000をリッスンしています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/4.png" style={{width:1000, height:'auto'}}/></div>

今度は、Watcherを使って自分自身を検出してみましょう。画像がキャプチャされ、ブラウザで自動的に開かれます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/5.png" style={{width:1000, height:'auto'}}/></div>

WatcherとOpen Interpreterアプリケーションの統合に成功したことをお祝いします！この成果は、あなたの献身とスキルを示す、旅路における重要な一歩です。今後、さらに魅力的な概念やツールを探求することができるでしょう。前方に待ち受ける挑戦と発見を受け入れ、このエキサイティングな冒険のすべての瞬間を楽しんでください！

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>