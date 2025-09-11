---
description: SenseCAP Watcherは、空間内の異常を監視し、アクションを実行するAIウォッチャーです。Watcherに話しかけてコマンドを与えるだけで、イベントが発生した際に希望するタスクを実行します。
title: クイックスタートガイド
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg
slug: /ja/getting_started_with_watcher
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP Watcher クイックスタートガイド

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcherのビデオを見る</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Githubリポジトリ</font></span></strong>
    </a>
</div>

## クイックスタートガイドビデオ

これはSenseCAP Watcherのクイックスタートガイドで、初めてデバイスを開封し、操作する方法を説明します。

<div class="table-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/yufEUFEB0Ic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 概要

SenseCAP Watcherは、空間内の異常を監視し、アクションを実行するAIウォッチャーです。Watcherに話しかけてコマンドを与えるだけで、イベントが発生した際に希望するタスクを実行します。

スマートビルディングやスマートホームシステムの新しい仲間として、SenseCAP Watcherは現在のセンサーやアクチュエーターと比較してはるかに知的です。空間内で何が起こっているのかを理解し、それに応じてアクションを実行します。

## 必須事項

Watcherを空間アシスタントとして使用する前に、以下の3つのステップを確実に実行する必要があります。これらはすべての後続ステップの基盤となります。

### ステップ1. 設置とパッケージング

Watcherは、スタイリッシュなカレンダーのようなスタンドとしても機能するユニークなパッケージングで提供されます。このスタンドにWatcherを設置することで、家庭の魅力的な装飾品を作ることができます。以下の手順に従い、付属のビデオを参考にして、Watcherをスタンドに設置してください。

<div class="table-center">
<iframe width="760" height="415" src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher-packaging.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### ステップ2. 電源オン

:::caution
Watcherに対応した電源プラグを使用してください。Watcherは5V電源で動作する必要があり、非対応の電源アダプターや5Vを超える電圧の電源を使用すると故障する可能性があります！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上記の図は推奨されるアダプター仕様を示しています。適切なアダプターの購入先がわからない場合は、以下のリンクから直接購入することができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>
:::

Watcherデバイスの電源を入れるには、右上隅にあるホイールボタンを約3秒間押し続け、Seeed Studioのロゴが画面に表示されるまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

ロゴが表示されたらボタンを離し、デバイスが初期化プロセスを完了するのを待ちます。数秒後、Watcherのメインメニューが表示され、使用準備が整ったことを示します。

:::tip
長押ししてもデバイスが起動しない場合、バッテリーが不足している可能性があります。その場合は、ケーブルを接続して電源を供給し、Watcherを起動してください。
:::

### ステップ3. デバイスのバインディング

:::caution
[SenseCraft Pro](https://wiki.seeedstudio.com/ja/watcher_price/)は、デバイスがSenseCraftアプリに接続されると自動的に試用サービスを開始します。
:::

Watcherを起動した後、以前にデバイスにバインドされていない場合は、SenseCraftアプリに接続するよう促されます。または、設定メニューで「Connect to APP」オプションを見つけることができます。その後、WatcherはSenseCraftアプリをダウンロードするためのQRコードを表示します。

QRコードをスキャンするか、提供されたリンクを使用してアプリをダウンロードしてください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> アプリをダウンロード 🖱️</font></span></strong>
    </a>
</div>

<br />

WatcherをSenseCraftアプリにバインドするには、以下の手順に従ってください：

**1.** Watcherのホイールボタンを時計回りに回して、デバイスをバインドするためのQRコードインターフェースに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/1.svg" style={{width:550, height:'auto'}}/></div>

**2.** モバイルデバイスでSenseCraftアプリを開き、右上隅のプラス記号（+）をタップして、QRコードをスキャンしてWatcherを追加します。

:::tip
バインディングプロセスにはBluetooth接続が必要なため、モバイルデバイスのBluetooth権限が有効になっていることを確認してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/2.svg" style={{width:550, height:'auto'}}/></div>

**3.** QRコードのスキャンに成功すると、アプリはネットワーク設定ページに移動します。Watcherをインターネットに接続するために、2.4GHzのWi-Fiネットワークを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/3.svg" style={{width:550, height:'auto'}}/></div>

「次へ」ボタンをタップして進みます。

**4.** Watcherの名前を選び、適切なグループを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/4.svg" style={{width:550, height:'auto'}}/></div>

「完了」ボタンをタップしてセットアッププロセスを終了します。

**5.** SenseCraftアプリはチュートリアルページを表示し、Watcherの使用方法に関するガイドを提供します。指示を確認する時間を取ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/5.svg" style={{width:550, height:'auto'}}/></div>

セットアップが完了すると、アプリはWatcherとの通信のためのチャットウィンドウを開き、Watcherはメインメニューに戻ります。

バインディングプロセスが完了すると、WatcherはSenseCraftアプリに接続され、機能や能力を探索する準備が整います。このアプリはWatcherとのやり取り、設定の調整、リモート通知の受信を便利に行うためのツールとして機能します。


## Watcherのタスクをスケジュールする

次に、Watcherに実行可能なタスクをスケジュールする方法を選択してください。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Built-in task templates" label="組み込みタスクテンプレート">

Watcherのタスクテンプレートからタスクを実行するには、以下の手順に従ってください：

**1.** メインメニューからホイールボタンを使用して**タスクテンプレート**オプションに移動します。

**2.** ホイールボタンを押してタスクテンプレートのサブメニューに入ります。

**3.** ホイールボタンを使用して利用可能なタスクテンプレートをスクロールし、目的のモデルタスクを見つけます。

**4.** ホイールボタンを押して選択し、選んだタスクを実行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/run_template.gif" style={{width:650, height:'auto'}}/></div>

<br />

タスクが開始されると、Watcherは画面にアニメーションの絵文字顔を表示します。この絵文字は、選択したタスクテンプレートで指定されたターゲットオブジェクトをデバイスが積極的に監視していることを示します。

Watcherがターゲットオブジェクトを検出すると、表示が絵文字アニメーションから検出されたオブジェクトのリアルタイムビューに切り替わります。これにより、Watcherが識別した内容を確認できます。

ターゲットオブジェクトがWatcherの視界から外れるか、検出されなくなると、表示は自動的にアニメーションの絵文字顔に戻り、デバイスが引き続きターゲットを監視していることを示します。

タスクテンプレート：

- 人間検出:
   - このタスクテンプレートは人間の存在を検出するために設計されています。
   - Watcherが**人**を識別すると、アラーム通知をトリガーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-people-detected.png" style={{width:210, height:'auto'}}/></div><br />

- ペット検出:
   - ペット検出タスクテンプレートは猫や犬を認識することに焦点を当てています。
   - Watcherが**猫**を検出すると、アラーム通知をトリガーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-pet.png" style={{width:210, height:'auto'}}/></div><br />

- ジェスチャー検出:
   - このタスクテンプレートは「紙」の手のジェスチャーを識別するように設定されています。
   - Watcherが**紙のジェスチャー**を認識すると、アラーム通知をトリガーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task-temp-gesture.png" style={{width:210, height:'auto'}}/></div><br />

これらのタスクテンプレートは、それぞれのターゲット（人間、猫、紙のジェスチャー）の検出に基づいて特定のアラームトリガー条件を持っています。これらのテンプレートを使用することで、広範な設定を必要とせずにWatcherを迅速に目的のオブジェクトを監視するように設定できます。

</TabItem>

<TabItem value="Through the APP" label="アプリを通じて">

:::danger
SenseCraft AIの一部のサービスを利用するには料金が発生する場合があります。詳細については以下のドキュメントを参照してください：

**[SenseCraft AI for Watcherのプランと特典](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::

SenseCraftアプリを使用すると、タスクをWatcherデバイスに送信できます。この例では、Watcherが提供するサンプルタスクの1つを使用してタスクを送信するプロセスを示します。コマンド*「キャンドルを見たら通知してください」*を使用します。

**1.** SenseCraftアプリを開き、接続されたWatcherデバイスのチャットウィンドウに移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/6.svg" style={{width:550, height:'auto'}}/></div><br />

**2.** チャットウィンドウで、利用可能なオプションから目的のタスクを選択するか、コマンド*「キャンドルを見たら通知してください」*を手動で入力します。送信ボタンをタップするか、Enterキーを押してWatcherにコマンドを送信します。

**3.** コマンドを受信すると、Watcherはそれを解釈し、**When**（条件）、**Do**（実行内容）、**Capture Frequency**（キャプチャ頻度）のコンポーネントに分解してタスクフローを構成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/7.svg" style={{width:550, height:'auto'}}/></div>

<br />

**解析されたタスクフローを確認して、Watcherがあなたのコマンドを正しく理解しているか確認してください。** アプリは解釈されたタスクの詳細を表示しますので、内容を確認してください。タスクフローのいずれかの部分が意図したコマンドと一致しない場合は、アプリ内の**詳細設定（Detail Config）**セクションにアクセスしてタスクの詳細を修正することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/8.svg" style={{width:550, height:'auto'}}/></div>

<br />

**4.** タスクの詳細を確認または調整したら、**実行（Run）**ボタンをクリックして、最終的なタスクをWatcherに送信してください。

Watcherはタスク指示をダウンロードし、ダウンロードが完了すると、監視システムとして稼働し、キャンドルの検出に備えます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/9.svg" style={{width:700, height:'auto'}}/></div>

<br />

**5.** Watcherがキャンドルを検出した場合、事前設定された通知に基づいてアラートを送信します。これには、点滅ライト、音声アラーム、SenseCraft APPを通じた通知が含まれる場合があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/10.svg" style={{width:550, height:'auto'}}/></div>

:::note
タスクフローの時間制約により、**連続するアラート間には最低間隔が設けられ、過剰な通知を防止します**。
:::

これらの手順に従うことで、SenseCraft APPを使用してWatcherにコマンドを送信し、特定の監視タスクを実行させ、指定された条件が満たされた場合に通知を受け取ることができます。

Watcherの設定やタスクフローを定期的に確認・調整し、監視要件に最適化されたパフォーマンスを維持してください。アプリのタスクやオプションの詳細な説明、および間隔の詳細については、**[Watcher Task Assignment Guideline](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)**を参照してください。

</TabItem>

<TabItem value="By Voice" label="音声による操作">

:::danger
SenseCraft AIの一部のサービスを利用する際には料金が発生する場合があります。詳細については以下のドキュメントを参照してください：

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/ja/watcher_price/)**
:::

Watcherは、音声コマンドを使用してタスクを送信したり会話を行ったりする便利で直感的な方法を提供します。この機能は「Push to Talk」機能によって実現されており、デバイスのどの画面やインターフェースからでもアクセス可能です。メニューをナビゲートすることなくWatcherと簡単にやり取りできます。以下はこの機能の使用方法のステップバイステップガイドです：

1. Push to Talkを有効化する：

   - Watcherの右上にあるホイールボタンを探します。
   - ホイールボタンを押し続けて音声入力インターフェースに入ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

2. コマンドまたはメッセージを話す：

   - ホイールボタンを押し続けながら、Watcherにタスクやメッセージを明確に話します。
   - 例えば、「赤ちゃんが泣いているか教えて」や「犬が食べ物を盗んでいる場合は『やめろ、Copper』と言って」などのタスクを割り当てることができます。（Copperは私の犬の名前です。）

3. ホイールボタンを離す：

   - 話し終えたらホイールボタンを離します。
   - Watcherは音声入力を処理し、それがタスク割り当てであるかどうかを判断します。

4. タスク割り当て：

   - Watcherが音声入力をタスク割り当てとして認識した場合、タスクを関連するコンポーネントに自動的に分解します。
   - Watcherは画面にカードを表示し、**対象（Object）**（監視対象）、**行動（Behavior）**（監視する動作）、**通知（Notification）**（通知方法）、**時間範囲（Time Range）**（監視する時間）、**頻度（Frequency）**（監視頻度）を示します。
   - 表示された情報が意図したタスクを正確に表しているか確認してください。
   - 詳細が正しければタスクを確認し、Watcherは指定されたパラメータに従って実行を開始します。
   - Watcherがタスクを誤解した場合、スクロールホイールボタンを長押しして対話を続け、タスクの理解を修正することができます。数回試しても正しく理解できない場合は、SenseCraft APPを使用してタスクを設定することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

最適な使用のためのヒント：

- 明瞭で適度な速度で話すことで、音声認識の精度を向上させます。
- 話す際はWatcherにできるだけ近づき、約**3〜10cm**の距離で話すと認識精度が最適です。
- 背景ノイズを最小限に抑え、Watcherが音声コマンドを正確に理解できるようにします。
- タスクを割り当てる際は具体的かつ簡潔に話し、Watcherが意図を正確に解釈できるようにします。

Push to Talk機能を活用することで、Watcherにタスクを簡単に送信したり会話を行ったりすることができ、デバイスとのやり取りがより自然で効率的になります。

:::note
**0x7002**エラーが発生した場合、現在のWatcherのネットワーク状態が良くないことを意味し、音声サービスの呼び出しが失敗しています。ネットワークまたは場所を変更して再試行してください。
:::

</TabItem>

</Tabs>

## 実行中のタスクを終了する方法

1. 画面を一度タップするか、ホイールボタンを押します。

2. 確認ポップアップが表示され、**Main Menu** と **End Task** の2つのオプションが表示されます。タスクを終了するには、画面上の **End Task** をタップするか、スクロールホイールを使用して「End Task」に移動し、スクロールホイールボタンを押して確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end_task.png" style={{width:210, height:'auto'}}/></div><br />

3. または、SenseCraft アプリを使用してモバイルデバイス上でタスクカードの **End** ボタンを押すことでタスクを終了することもできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/end-task-phone.png" style={{width:250, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>