---
description: SenseCAP Watcher は、空間内の異常を監視し、その後アクションを実行するのに役立つ AI ウォッチャーです。Watcher に話しかけてコマンドを与えるだけで、イベントが発生したときに希望するタスクを実行します。
title: クイックスタートガイド
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg
slug: /ja/getting_started_with_watcher
sidebar_position: 2
last_update:
  date: 10/17/2024
  author: Citric
---

# SenseCAP Watcher クイックスタートガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher の動画</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github リポジトリ</font></span></strong>
    </a>
</div>

## クイックスターターガイド動画

これは SenseCAP Watcher クイックスターターガイドで、デバイスの開封と初回使用をサポートします。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/yufEUFEB0Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## はじめに

SenseCAP Watcher は、空間内の異常を監視し、その後アクションを実行するのに役立つ AI ウォッチャーです。Watcher に話しかけてコマンドを与えるだけで、イベントが発生したときに希望するタスクを実行します。

スマートビルディング/スマートホームシステムの新参者として、SenseCAP Watcher は現在のセンサーやアクチュエーターと比較してはるかに知的です。空間内で何が起こっているかを理解し、それに応じてアクションを実行します。

## 必須事項

Watcher を空間アシスタントとして使用する前に、以下の3つのステップが正常に実行されることを確認する必要があります。これは、その後のすべてのステップの基礎となります。

### ステップ 1. インストールパッケージング

Watcher には、スタイリッシュなカレンダー風スタンドとしても機能するユニークなパッケージが付属しています。このスタンドに Watcher を配置することで、ご自宅の魅力的な装飾を作ることができます。以下のステップバイステップの手順に従い、Watcher をスタンドに設置する方法の視覚的ガイドとして付属の動画を参照してください。

<div class="table-center">
<iframe width="760" height="415" src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher-packaging.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### ステップ 2. 電源オン

:::caution
Watcher と互換性のある電源プラグを使用してください。Watcher は 5V 電源で動作する必要があり、非準拠の電源アダプターや 5V を超える電圧の電源を使用すると焼損する可能性があります！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上記の図は推奨アダプター仕様を示しています。適切なアダプターをどこで購入できるかわからない場合は、以下のリンクから直接購入することを選択できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>
:::

Watcher デバイスの電源を入れるには、右上角にあるホイールボタンを約3秒間長押しして、画面に Seeed Studio ロゴが表示されるまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

ロゴが表示されたら、ボタンを離してデバイスの初期化プロセスが完了するまで待ちます。しばらくすると、Watcher はメインメニューを表示し、使用準備が整ったことを示します。

:::tip
長押ししてもデバイスが起動しない場合、デバイスの電力が不足している可能性があり、Watcher を起動する前にケーブルを接続して電力を供給する必要があります。
:::

### ステップ 3. デバイスバインディング

:::caution
[SenseCraft Pro](https://wiki.seeedstudio.com/ja/watcher_price/) は、デバイスが SenseCraft APP に接続されると自動的にトライアルサービスを有効化します。
:::

Watcher の電源を入れた後、以前にデバイスにバインドされていない場合、SenseCraft アプリに接続するよう促されます。または、設定メニューで "Connect to APP" オプションを見つけることができます。その後、Watcher は SenseCraft アプリをダウンロードするための QR コードを表示します。

QR コードをスキャンするか、提供されたリンクを使用してアプリをダウンロードできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> アプリをダウンロード 🖱️</font></span></strong>
    </a>
</div>

<br />

Watcher を SenseCraft アプリにバインドするには、以下の手順に従ってください：

**1.** Watcher で、ホイールボタンを時計回りに回転させて、デバイスバインディング用の QR コードインターフェースに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/1.svg" style={{width:550, height:'auto'}}/></div>

**2.** モバイルデバイスで SenseCraft アプリを開き、右上角のプラス記号（+）をタップして QR コードをスキャンして Watcher を追加します。

:::tip
バインディングプロセスには Bluetooth 接続が必要なため、モバイルデバイスの Bluetooth 権限が有効になっていることを確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/2.svg" style={{width:550, height:'auto'}}/></div>

**3.** QR コードのスキャンが成功すると、アプリはネットワーク設定ページに移動します。Watcher をインターネットに接続するために 2.4GHz Wi-Fi ネットワークを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/3.svg" style={{width:550, height:'auto'}}/></div>

"Next" ボタンをタップして続行します。

**4.** Watcher の名前を選択し、適切なグループを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/4.svg" style={{width:550, height:'auto'}}/></div>

"Finish" ボタンをタップしてセットアッププロセスを完了します。

**5.** SenseCraft アプリはチュートリアルページを表示し、Watcher の使用方法についてのガイダンスを提供します。手順をよく理解するために時間をかけてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/5.svg" style={{width:550, height:'auto'}}/></div>

セットアップが完了すると、アプリは Watcher と通信するためのチャットウィンドウを開き、Watcher はメインメニューに戻ります。

バインディングプロセスが完了すると、Watcher は SenseCraft アプリに接続され、その機能と能力を探索し始めることができます。アプリは Watcher とやり取りし、設定を調整し、リモートで通知を受信する便利な方法として機能します。

## Watcher のタスクをスケジュールする

次に、Watcher の実行可能なタスクをスケジュールするために使用したい方法を選択してください。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Built-in task templates" label="内蔵タスクテンプレート">

Watcher でタスクテンプレートからタスクを実行するには、以下の手順に従ってください：

**1.** メインメニューから、ホイールボタンを使用して **Task Templates** オプションに移動します。

**2.** ホイールボタンを押してタスクテンプレートサブメニューに入ります。

**3.** ホイールボタンを使用して利用可能なタスクテンプレートをスクロールし、希望するモデルタスクを見つけます。

**4.** ホイールボタンを押して選択したタスクを選択し、実行を開始します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/run_template.gif" style={{width:650, height:'auto'}}/></div>

<br />

タスクが開始されると、Watcher は画面にアニメーション絵文字の顔を表示します。この絵文字は、デバイスが選択されたタスクテンプレートで指定されたターゲットオブジェクトを積極的に監視していることを示します。

Watcher がターゲットオブジェクトを検出すると、ディスプレイは絵文字アニメーションから検出されたオブジェクトのリアルタイムビューに切り替わります。これにより、Watcher が識別したものを確認できます。

ターゲットオブジェクトが Watcher の視界から移動したり、もはや検出されなくなったりすると、ディスプレイは自動的にアニメーション絵文字の顔に戻り、デバイスがまだターゲットを監視していることを示します。

タスクテンプレート：

- 人間検出：
  - このタスクテンプレートは人間の存在を検出するように設計されています。
  - Watcher が**人**を識別すると、アラーム通知をトリガーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-people-detected.png" style={{width:210, height:'auto'}}/></div><br />

- ペット検出：
  - ペット検出タスクテンプレートは猫や犬の認識に焦点を当てています。
  - Watcher が**猫**を検出すると、アラーム通知をトリガーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-pet.png" style={{width:210, height:'auto'}}/></div><br />

- ジェスチャー検出：
  - このタスクテンプレートは「パー」のハンドジェスチャーを識別するように設定されています。
  - Watcher が**パージェスチャー**を認識すると、アラーム通知をトリガーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-gesture.png" style={{width:210, height:'auto'}}/></div><br />

これらの各タスクテンプレートには、それぞれの対象（人間、猫、または紙のジェスチャー）の検出に基づく特定のアラーム発動条件があります。これらのテンプレートを使用することで、広範囲な設定を必要とせずに、希望するオブジェクトを監視するためのWatcherを迅速にセットアップできます。

</TabItem>

<TabItem value="Through the APP" label="アプリ経由">

:::danger
SenseCraft AIの一部のサービスを使用する際に料金が発生する場合があります。詳細については以下のドキュメントを参照してください：

**[SenseCraft AI for Watcher プランと特典](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::

SenseCraft APPを使用してWatcherデバイスにタスクを送信できます。この例では、Watcherが提供するサンプルタスクの1つを使用してタスクを送信するプロセスを実演します。*ろうそくが見えたら通知してください*というコマンドを使用しましょう。

**1.** SenseCraft APPを開き、接続されたWatcherデバイスのチャットウィンドウに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/6.svg" style={{width:550, height:'auto'}}/></div><br />

**2.** チャットウィンドウで、利用可能なオプションから希望するタスクを選択するか、*ろうそくが見えたら通知してください*というコマンドを手動で入力します。送信ボタンをタップするかEnterキーを押してWatcherにコマンドを送信します。

**3.** コマンドを受信すると、Watcherはそれを解釈し、**When**、**Do**、**Capture Frequency**コンポーネントで構成されるタスクフローに分解します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/7.svg" style={{width:550, height:'auto'}}/></div>

<br />

解析されたタスクフローを確認して、Watcherがあなたのコマンドを正しく理解していることを確認してください。アプリは解釈されたタスクの詳細を表示して確認できます。タスクフローの一部があなたの意図したコマンドと一致しない場合は、アプリ内の**Detail Config**セクションにアクセスしてタスクの詳細を変更できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/8.svg" style={{width:550, height:'auto'}}/></div>

<br />

**4.** タスクの詳細を確認または調整したら、**Run**ボタンをクリックして最終的なタスクをWatcherに送信します。

Watcherはタスクの指示をダウンロードし、ダウンロードが完了すると、ろうそくのインスタンスを検出する準備ができた警戒監視システムに変身します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/9.svg" style={{width:700, height:'auto'}}/></div>

<br />

**5.** Watcherがろうそくを識別すると、事前定義された設定に基づいてアラートを送信します。これには点滅ライト、音声アラーム、SenseCraft APPを通じた通知が含まれる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/10.svg" style={{width:550, height:'auto'}}/></div>

:::note
タスクフローの時間制約により、**過度な通知を避けるため、連続するアラート間には最小間隔があります**。
:::

これらの手順に従うことで、SenseCraft APPを使用してWatcherに効果的にコマンドを送信し、特定の監視タスクを実行して、指定された条件が満たされたときに通知を受けることができます。

最適なパフォーマンスと監視要件との整合性を確保するため、Watcherの設定とタスクフローを定期的に確認し調整することを忘れないでください。APPのタスクとオプションのより詳細な説明と解説、および間隔の詳細な説明については、**[Watcher タスク割り当てガイドライン](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)**をお読みください。

</TabItem>

<TabItem value="By Voice" label="音声による">

:::danger
SenseCraft AIの一部のサービスを使用する際に料金が発生する場合があります。詳細については以下のドキュメントを参照してください：

**[SenseCraft AI for Watcher プランと特典](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::

Watcherは「Push to Talk」機能により、音声コマンドを使用してタスクを送信したり会話を行ったりする便利で直感的な方法を提供します。この機能はデバイスの任意の画面やインターフェースからアクセス可能で、メニューを操作することなくWatcherと簡単に対話できます。この機能の使用方法についてのステップバイステップガイドは以下の通りです：

1. Push to Talkを有効化：

   - Watcherの右上角にあるホイールボタンを見つけます。
   - ホイールボタンを長押しして音声入力インターフェースに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. コマンドまたはメッセージを話す：

   - ホイールボタンを押し続けながら、Watcherにタスクまたはメッセージを明確に話しかけます。
   - 「赤ちゃんが泣いていたら教えて」や「犬が食べ物を盗んでいたら、ストップ、コッパーと言って」などのタスクを割り当てることができます。（コッパーは私の犬の名前です。）

3. ホイールボタンを離す：

   - 話し終わったら、ホイールボタンを離します。
   - Watcherは音声入力を処理し、それがタスク割り当てかどうかを判断します。

4. タスク割り当て：

   - Watcherが音声入力をタスク割り当てとして認識すると、自動的にタスクを関連するコンポーネントに分解します。
   - Watcherは画面にカードを表示し、**Object**（監視対象）、**Behavior**（探すべき行動）、**Notification**（アラート方法）、**Time Range**（監視時間）、**Frequency**（監視頻度）を示します。
   - 表示された情報を確認して、意図したタスクを正確に表現していることを確認してください。
   - 詳細が正しい場合は、タスクを確認すると、Watcherは指定されたパラメータに従ってタスクの実行を開始します。
   - Watcherがタスクを誤解した場合は、スクロールホイールボタンを長押しして、対話を続けてWatcherのタスク理解を修正することができます。数回試行しても正しく理解できない場合は、SenseCraft APPを使用してタスクを配置することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

最適な使用のためのヒント：

- 正確な音声認識を確保するため、明確に適度なペースで話してください。
- 話すときは、Watcherにできるだけ近づいてください。約**3〜10cm**の距離での音声認識精度が最高です。
- Watcherの音声コマンド理解能力を向上させるため、背景ノイズを最小限に抑えてください。
- Watcherがあなたの意図を正確に解釈できるよう、タスクを割り当てる際は具体的で簡潔にしてください。

Push to Talk機能を活用することで、Watcherにタスクを送信したり会話を行ったりすることが簡単にでき、デバイスとの対話をより自然で効率的にできます。

:::note
**0x7002**エラーが発生した場合、現在のWatcherのネットワーク状態が良くなく、音声サービス呼び出しが失敗したことを意味します。ネットワークまたは場所を変更して再試行してください。
:::

</TabItem>

</Tabs>

## 実行中のタスクを終了するには

1. 画面を一度タップするか、ホイールボタンを押します。

2. 確認ポップアップが2つのオプション（**Main Menu**と**End Task**）と共に表示されます。タスクを終了するには、画面上の**End Task**をタップするか、スクロールホイールを使用して「End Task」に移動し、スクロールホイールボタンを押して確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end_task.png" style={{width:210, height:'auto'}}/></div><br />

3. または、モバイルデバイスのSenseCraft APPを使用して、タスクカードの**End**ボタンを押すことでタスクを終了できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end-task-phone.png" style={{width:250, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
