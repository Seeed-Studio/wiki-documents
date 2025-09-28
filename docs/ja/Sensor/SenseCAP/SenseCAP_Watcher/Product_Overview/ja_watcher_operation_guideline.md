---
description: SenseCAP Watcherの操作ガイドライン。
title: 操作ガイドライン
image: https://files.seeedstudio.com/wiki/watcher_getting_started/0_1.webp
slug: /ja/watcher_operation_guideline
sidebar_position: 2
last_update:
  date: 10/18/2024
  author: Citric
---

# SenseCAP Watcher 操作ガイドライン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/0.JPG" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcherの動画</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Githubリポジトリ</font></span></strong>
    </a>
</div>

このWikiセクションでは、SenseCAP Watcherの動作ロジック、タスク設定、およびデバイス機能の使用方法に関する情報を提供します。

## 基本操作

Watcherの基本操作を学習し理解するために、こちらをお読みください。Watcherの使用アイデアと方法を正常にマスターできるようになります。

### 電源オン

:::caution
Watcherと互換性のある電源プラグを使用してください。Watcherは5V電源で動作する必要があり、非対応の電源アダプターや5Vを超える電圧の電源を使用すると焼損する可能性があります！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上記の図は推奨アダプター仕様を示しています。適切なアダプターをどこで購入できるかわからない場合は、以下のリンクから直接購入することを選択できます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>
:::

Watcherデバイスの電源をオンにするには、右上角にあるホイールボタンを約3秒間長押しし、画面にSeeed Studioロゴが表示されるまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

ロゴが表示されたら、ボタンを離してデバイスの初期化プロセスが完了するまで待ちます。しばらくすると、Watcherはメインメニューを表示し、使用準備が整ったことを示します。

:::tip
長押ししてもデバイスが起動しない場合、デバイスのバッテリーが低下している可能性があり、Watcherを起動する前にケーブルを接続して電源を供給する必要がある場合があります。
:::

### 電源オフ

Watcherの電源をオフにするには、設定メニューにアクセスする必要があります。ホイールボタンを使用して設定オプションに移動し、ボタンを押してメニューに入ります。メニュー内で、シャットダウンオプションまでスクロールダウンし、ホイールボタンを押して選択します。最後に、スライダーを左から右にスワイプしてシャットダウンプロセスを確認すると、Watcherの電源がオフになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off.gif" style={{width:650, height:'auto'}}/></div>

:::tip
Watcherが電源コードに接続されている場合、デバイスのシャットダウンボタンは再起動ボタンになり、この時点でデバイスはシャットダウンできません。同様に、電源がオフになっているデバイスは、電源コードが接続されると自動的にオンになります。
:::

Watcherデバイスの底部に小さな穴があります。この穴はハードウェア電源オフボタンへのアクセスを提供し、必要に応じてデバイスをオフにすることができます。

ハードウェアボタンを使用してWatcherの電源をオフにするには、以下の手順に従ってください：

1. ペーパークリップや小さな針など、細くて尖った物体を見つけます。

2. 尖った物体をWatcherの底部にある小さな穴に慎重に挿入します。

3. 穴の中の電源オフボタンを優しく押すと、Watcherの電源がオフになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off_button.gif" style={{width:650, height:'auto'}}/></div><br />

:::note
リセットボタンを押すために尖った物体を使用する際は注意が必要です。優しく行い、デバイスの損傷を防ぐために過度な力を加えないでください。

ハードウェアリセットを実行してもWatcherに保存されているユーザーデータは消去されないことに注意してください。リセット操作は、ソフトウェア関連の問題がある場合やデバイスが応答しなくなった場合にデバイスを再起動するために設計されています。

ハードウェアリセットで解決されないWatcherの持続的な問題が発生した場合は、デバイスの設定メニューから工場出荷時リセットを実行することを検討する必要があるかもしれません。ただし、工場出荷時リセットはすべてのユーザーデータを消去するため、最後の手段としてのみ使用すべきであることを覚えておいてください。

Watcherを注意深く取り扱い、デバイスの寿命と適切な機能を確保するために必要な場合にのみハードウェアリセットボタンを使用することを忘れないでください。
:::

### 操作ロジック

Watcherの操作ロジックは、ナビゲーションと選択の主要な手段として機能するホイールボタンを中心に展開されます。ホイールボタンを反時計回りに回転させると、メニュー内で上または左に移動でき、時計回りに回転させると下または右に移動できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/logic.gif" style={{width:650, height:'auto'}}/></div>

<br />

選択を確認したり、サブメニューに入るには、ホイールボタンを押すだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/enter.gif" style={{width:650, height:'auto'}}/></div>

<br />

ただし、操作に曖昧さが生じる可能性がある特定の状況では、ホイールボタンの選択と確認ロジックがこの標準から逸脱する場合があることに注意することが重要です。そのような場合、タッチスクリーンインターフェースが代替の操作手段を提供し、適切な画面上の要素をタップすることで目的のアクションを完了できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/touch.gif" style={{width:650, height:'auto'}}/></div><br />

このWiki全体を通して、各メニュー内でのナビゲーションとオプション選択について、一般的なホイールボタンロジックの例外を考慮した具体的な指示が提供されます。ホイールボタンとタッチスクリーンコントロールの両方に慣れることで、Watcherデバイスを効率的に操作し、その様々な機能と設定にアクセスできるようになります。

### プッシュ・トゥ・トーク

WatcherのPush to Talk機能により、任意の画面やインターフェースから音声コマンドを使用してデバイスと対話できます。デバイスの右上にあるホイールボタンを押し続けるだけで、音声入力インターフェースが起動します。ボタンを押し続けながら、タスクの割り当てや会話の開始など、コマンドやメッセージを話します。ボタンを離すと、Watcherが音声入力を処理し、それに応じて応答します。さらなる説明が必要な場合は、ボタンを再度押し続けて追加の音声入力を提供してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

:::tip
1. 現在、音声対話は英語の使用のみをサポートしています。他の言語を使用すると、予期しない状況が発生する可能性があることにご注意ください。

2. Watcherがタスクを実行中に対話を開始した場合、Watcherはまず現在のタスクを一時停止し、対話が終了すると元のタスクに再び戻ります。

3. タスクの割り当て方法については、まず**[Watcherにタスクを割り当てる方法](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)**チュートリアルをお読みください。
:::

## 機能概要

Watcherは4つの主要メニューオプションを提供します：**Task Templates**、**Current Task**、**Extension**、**Setting**。これらのメニューは、デバイスの様々な機能にアクセスを提供します。

### Task Templates

Task Templatesメニューには、すぐに使用できる事前設定されたタスクの選択肢が含まれています。これらのタスクには、人間検出、ペット検出、ジェスチャー検出が含まれます。これらのテンプレートの1つを選択することで、広範囲な設定を必要とすることなく、目的のタスクを実行するようにWatcherを素早く設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_templates.gif" style={{width:700, height:'auto'}}/></div>

### Current Task

Current Taskメニューオプションは、Watcherで実行中のアクティブなタスクにアクセスし、管理するための便利な方法を提供します。音量、明度、LEDライトスイッチなどのデバイス設定を調整するために現在のタスクから離れる必要がある場合、メインメニューからCurrent Taskオプションを選択することで簡単にタスクに戻ることができ、シームレスで効率的なユーザーエクスペリエンスを確保します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/current_task.gif" style={{width:700, height:'auto'}}/></div>

### Extension

現在Watcherでアクセス可能なExtensionメニューは、選択された範囲の接続されたGroveセンサー、具体的には**[Grove SHT41](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT41-p-5383.html)**、**[Grove SHT40](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)**、**[Grove SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)**からのデータを表示するハブとして機能します。

この機能により、ユーザーはサポートされているGroveセンサーの1つを一度にWatcherデバイスとシームレスに統合でき、センサーデータのリアルタイム監視と可視化が可能になります。Extensionメニューにナビゲートすることで、ユーザーは接続されたセンサーからの値と読み取り値を表示でき、収集されたデータに基づいて洞察を得て、情報に基づいた意思決定を行うことができます。

Watcherプラットフォームが進化し続けるにつれて、Extensionメニューはより広範囲のGroveセンサーのサポートと追加の機能を含むように拡張される可能性があり、デバイスの機能とユーザーエクスペリエンスをさらに向上させます。Extensionメニューの将来の機能強化に関する更新と発表にご注目ください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/connect_grove.gif" style={{width:700, height:'auto'}}/></div>

### Setting

最後に、SettingメニューはWatcherの一般設定にアクセスし、変更できる場所です。このメニューは、ディスプレイの明度、音量、接続設定など、デバイスの様々な側面をカスタマイズするオプションを提供します。Settingメニューを探索することで、Watcherのパフォーマンスと動作を好みに合わせて調整でき、パーソナライズされたユーザーエクスペリエンスを確保できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/settings.gif" style={{width:700, height:'auto'}}/></div>

## Watcher設定

このガイドでは、Watcherデバイスで利用可能な様々な設定オプションについて説明し、その機能を解説します。

- **Connect App**:
   - Connect App設定では、Watcherとコンパニオンモバイルアプリケーション間の接続を確立できます。
   - Watcherをアプリに接続することで、追加機能、リモートコントロール機能にアクセスでき、モバイルデバイスで通知を受信できます。

- **Wi-Fi**:
   - WatcherデバイスのWi-Fi設定では、現在接続されているワイヤレスネットワークの情報が表示されます。
   - ネットワークが設定されていない場合、Wi-Fi設定には何も情報が表示されません。
   - Wi-Fiネットワークの設定は、コンパニオンモバイルアプリを通じてのみ行うことができ、Watcherデバイス自体では対応していないことにご注意ください。

- **Bluetooth**:
   - Bluetooth設定では、Bluetooth機能のオン/オフを切り替えることができます。

- **Sound**:
   - Sound設定では、Watcherのオーディオ出力の音量を調整できます。
   - お好みや環境に合わせて音量を上げたり下げたりできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/sound_setting.gif" style={{width:650, height:'auto'}}/></div>

<br />

- **Brightness**:
   - Brightness設定では、Watcherのディスプレイの明度レベルを制御できます。
   - 明度を調整することで、異なる照明条件での視認性を向上させ、バッテリー寿命を節約できます。

- **RGB Light**:
   - RGB Light設定は、LEDインジケーターライトのオン/オフを切り替えるトグルスイッチです。

- **About Device**:
   - About Deviceセクションでは、モデル番号、ファームウェアバージョン、シリアル番号など、Watcherに関する重要な情報が提供されます。
   - この情報は、問題のトラブルシューティングや利用可能なアップデートの確認時に役立ちます。

- **Shutdown/Reboot**:
   - Shutdown/Reboot設定では、電源に応じてWatcherデバイスを再起動または電源オフできます。
   - Watcherが電源に接続されている場合、「Reboot」オプションが表示され、デバイスを再起動できます。電源接続中はシャットダウンは許可されません。
   - Watcherがバッテリー電源で動作している場合、「Shutdown」オプションが利用可能になり、デバイスの電源をオフにできます。

- **Factory Reset**:
   - Factory Resetオプションは、Watcherを元の工場出荷時設定に復元します。
   - この操作により、すべてのユーザーデータ、設定、構成が消去され、デバイスがデフォルト状態に戻ります。
   - この操作は元に戻すことができず、工場出荷時リセット後にWatcherを再度設定する必要があるため、慎重に使用してください。

これらの設定オプションに慣れることで、ニーズに最適なWatcherエクスペリエンスをカスタマイズし、最適化できます。Wi-FiやBluetooth設定などの特定の設定は、コンパニオンモバイルアプリを通じてのみアクセスおよび変更できることにご注意ください。

## 技術サポート・製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、様々なサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

