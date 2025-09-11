---
description: SenseCAP Watcher の操作ガイドライン。
title: 操作ガイドライン
image: https://files.seeedstudio.com/wiki/watcher_getting_started/0_1.webp
slug: /ja/watcher_operation_guideline
sidebar_position: 2
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCAP Watcher 操作ガイドライン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/0.JPG" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher のビデオを見る</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github リポジトリ</font></span></strong>
    </a>
</div>

この Wiki セクションでは、SenseCAP Watcher の操作ロジック、タスク、およびデバイスの機能の使用方法に関する情報を提供します。

## 基本操作

Watcher の基本操作を学び、理解することで、Watcher の使用方法とそのアイデアを成功裏に習得することができます。

### 電源オン

:::caution
Watcher に対応した電源プラグを使用してください。Watcher は 5V の電源で動作する必要があり、非対応の電源アダプタや 5V を超える電圧の電源を使用すると故障する可能性があります！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/adapter.jpg" style={{width:350, height:'auto'}}/></div>

上記の図は推奨されるアダプタ仕様を示しています。適切なアダプタの購入先がわからない場合は、以下のリンクから直接購入することができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/USB-Power-Adapter-for-Raspberry-Pi-4-5V-3A-p-4089.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>
:::

Watcher デバイスの電源を入れるには、右上隅にあるホイールボタンを約 3 秒間押し続け、画面に Seeed Studio ロゴが表示されるまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

ロゴが表示されたらボタンを離し、デバイスが初期化プロセスを完了するのを待ちます。数秒後、Watcher のメインメニューが表示され、使用可能な状態になります。

:::tip
長押ししてもデバイスが起動しない場合、バッテリーが不足している可能性があります。その場合は、ケーブルを接続して電源を供給し、Watcher を起動してください。
:::

### 電源オフ

Watcher を電源オフにするには、設定メニューにアクセスする必要があります。ホイールボタンを使用して設定オプションに移動し、ボタンを押してメニューに入ります。メニュー内で下にスクロールして「シャットダウン」オプションを選択し、ホイールボタンを押して選択します。最後に、スライダーを左から右にスワイプしてシャットダウンプロセスを確認すると、Watcher の電源がオフになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off.gif" style={{width:650, height:'auto'}}/></div>

:::tip
Watcher が電源コードに接続されている場合、デバイスのシャットダウンボタンは再起動ボタンに変わり、この場合デバイスをシャットダウンすることはできません。同様に、電源コードが接続されている場合、オフになっているデバイスは自動的にオンになります。
:::

Watcher デバイスの底部には小さな穴があります。この穴はハードウェア電源オフボタンにアクセスするためのもので、必要に応じてデバイスの電源をオフにすることができます。

ハードウェアボタンを使用して Watcher の電源をオフにするには、以下の手順に従ってください：

1. クリップや小さな針など、細くて尖った物を用意します。

2. Watcher の底部にある小さな穴に慎重に尖った物を挿入します。

3. 穴の中の電源オフボタンを優しく押すと、Watcher の電源がオフになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off_button.gif" style={{width:650, height:'auto'}}/></div><br />

:::note
リセットボタンを押す際には、尖った物を使用する際に注意してください。優しく操作し、過度な力を加えないようにして、デバイスを損傷しないようにしてください。

ハードウェアリセットを実行しても、Watcher に保存されているユーザーデータは消去されません。このリセット操作は、ソフトウェア関連の問題が発生した場合やデバイスが応答しなくなった場合にデバイスを再起動するために設計されています。

Watcher に関する問題がハードウェアリセットで解決しない場合は、デバイスの設定メニューから工場出荷時リセットを実行することを検討してください。ただし、工場出荷時リセットを実行するとすべてのユーザーデータが消去されるため、最終手段としてのみ使用してください。

Watcher を慎重に取り扱い、デバイスの寿命と適切な機能を確保するために、必要な場合にのみハードウェアリセットボタンを使用してください。
:::

### 操作ロジック

Watcher の操作ロジックは、ホイールボタンを中心に展開されており、これがナビゲーションと選択の主な手段となります。ホイールボタンを反時計回りに回すと、メニュー内で上または左に移動し、時計回りに回すと下または右に移動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/logic.gif" style={{width:650, height:'auto'}}/></div>

<br />

選択を確定したり、サブメニューに入るには、ホイールボタンを押すだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/enter.gif" style={{width:650, height:'auto'}}/></div>

<br />

ただし、操作上の曖昧さが生じる可能性がある特定の状況では、ホイールボタンの選択および確認ロジックがこの標準から逸脱する場合があります。そのような場合、タッチスクリーンインターフェースが代替手段を提供し、画面上の適切な要素をタップすることで、目的の操作を完了することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/touch.gif" style={{width:650, height:'auto'}}/></div><br />

Wiki全体を通じて、各メニュー内でのナビゲーションおよびオプション選択に関する具体的な指示が提供され、ホイールボタンロジックの一般的な例外も考慮されます。ホイールボタンとタッチスクリーンの両方の操作方法に慣れることで、Watcherデバイスを効率的に操作し、さまざまな機能や設定にアクセスできるようになります。

### プッシュ・トゥ・トーク

Watcherのプッシュ・トゥ・トーク機能を使用すると、どの画面やインターフェースからでも音声コマンドでデバイスと対話できます。デバイスの右上にあるホイールボタンを押し続けるだけで、音声入力インターフェースが起動します。ボタンを押しながら、タスクの割り当てや会話の開始など、コマンドやメッセージを話してください。ボタンを離すと、Watcherが音声入力を処理し、それに応じて応答します。さらに説明が必要な場合は、再度ボタンを押し続けて追加の音声入力を行ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

:::tip
1. 現在、音声対話は英語のみをサポートしています。他の言語を使用すると予期しない状況が発生する可能性がありますのでご注意ください。

2. Watcherがタスクを実行中に対話を開始した場合、Watcherはまず現在のタスクを一時停止し、対話が終了すると元のタスクに戻ります。

3. タスクの割り当て方法については、**[Run - Sending Task to Watcher by Speaking](#run---sending-task-to-watcher-by-speaking)**および**[How to assign tasks to Watcher](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_task/)**のチュートリアルを最初にお読みください。
:::

## 機能概要

Watcherは、**タスクテンプレート**、**現在のタスク**、**拡張機能**、**設定**の4つの主要なメニューオプションを提供します。これらのメニューを通じて、デバイスのさまざまな機能や操作にアクセスできます。

### タスクテンプレート

タスクテンプレートメニューには、事前に設定されたタスクが用意されています。これらのタスクには、人間検出、ペット検出、ジェスチャー検出が含まれます。これらのテンプレートの1つを選択することで、複雑な設定を必要とせずに、Watcherを迅速に目的のタスクを実行するように設定できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_templates.gif" style={{width:700, height:'auto'}}/></div>

### 現在のタスク

現在のタスクメニューオプションは、Watcherでアクティブに実行中のタスクに簡単にアクセスして管理する方法を提供します。音量、明るさ、LEDライトのスイッチなどのデバイス設定を調整するために現在のタスクから離れる必要がある場合でも、メインメニューから現在のタスクオプションを選択することで、タスクに簡単に戻ることができ、シームレスで効率的なユーザー体験を確保します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/current_task.gif" style={{width:700, height:'auto'}}/></div>

### 拡張機能

現在Watcherで利用可能な拡張機能メニューは、特定の接続されたGroveセンサー、具体的には**[Grove SHT41](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT41-p-5383.html)**、**[Grove SHT40](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)**、および**[Grove SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)**からのデータを表示するためのハブとして機能します。

この機能により、これらのサポートされているGroveセンサーのいずれかをWatcherデバイスに1つずつシームレスに統合し、センサーのデータをリアルタイムで監視および視覚化することができます。拡張機能メニューに移動することで、接続されたセンサーからの値や読み取り値を確認でき、収集したデータに基づいて洞察を得たり、情報に基づいた意思決定を行うことができます。

Watcherプラットフォームが進化を続ける中で、拡張機能メニューは、より多くのGroveセンサーや追加機能をサポートするように拡張される可能性があります。これにより、デバイスの機能とユーザー体験がさらに向上します。拡張機能メニューの将来の改善に関する更新情報や発表をお待ちください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/connect_grove.gif" style={{width:700, height:'auto'}}/></div>

### 設定

最後に、設定メニューでは、Watcherの一般設定にアクセスして変更することができます。このメニューでは、ディスプレイの明るさ、音量、接続設定など、デバイスのさまざまな側面をカスタマイズするオプションが提供されます。設定メニューを探索することで、Watcherのパフォーマンスや動作を自分の好みに合わせて調整し、個別化されたユーザー体験を確保できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/settings.gif" style={{width:700, height:'auto'}}/></div>

## Watcher 設定

このガイドでは、Watcher デバイスで利用可能なさまざまな設定オプションとその機能について説明します。

- **Connect App（アプリ接続）**:
   - Connect App 設定を使用すると、Watcher と連携するモバイルアプリケーションとの接続を確立できます。
   - Watcher をアプリに接続することで、追加機能へのアクセス、リモートコントロール機能、およびモバイルデバイスでの通知受信が可能になります。

- **Wi-Fi**:
   - Watcher デバイスの Wi-Fi 設定では、現在接続されている無線ネットワークに関する情報が表示されます。
   - ネットワークが設定されていない場合、Wi-Fi 設定には情報が表示されません。
   - Wi-Fi ネットワークの設定は、連携するモバイルアプリを通じてのみ行うことができ、Watcher デバイス自体ではサポートされていません。

- **Bluetooth**:
   - Bluetooth 設定では、Bluetooth 機能をオンまたはオフに切り替えることができます。

- **Sound（サウンド）**:
   - Sound 設定を使用すると、Watcher のオーディオ出力の音量を調整できます。
   - 音量を増減させて、好みや環境に合わせることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/sound_setting.gif" style={{width:650, height:'auto'}}/></div>

<br />

- **Brightness（明るさ）**:
   - Brightness 設定を使用すると、Watcher のディスプレイの明るさレベルを調整できます。
   - 明るさを調整することで、さまざまな照明条件での視認性を向上させたり、バッテリー寿命を延ばしたりすることができます。

- **RGB Light（RGB ライト）**:
   - RGB Light 設定は、LED インジケーターライトをオンまたはオフに切り替えるためのトグルスイッチです。

- **About Device（デバイス情報）**:
   - About Device セクションでは、Watcher のモデル番号、ファームウェアバージョン、シリアル番号などの重要な情報が提供されます。
   - この情報は、問題のトラブルシューティングや利用可能なアップデートの確認時に役立ちます。

- **Shutdown/Reboot（シャットダウン/再起動）**:
   - Shutdown/Reboot 設定を使用すると、Watcher デバイスを再起動または電源オフにすることができます（電源供給状況に応じて異なります）。
   - Watcher が電源に接続されている場合、「Reboot（再起動）」オプションが表示され、デバイスを再起動できます。電源接続中はシャットダウンは許可されません。
   - Watcher がバッテリーで動作している場合、「Shutdown（シャットダウン）」オプションが利用可能になり、デバイスの電源をオフにすることができます。

- **Factory Reset（工場出荷時設定にリセット）**:
   - Factory Reset オプションを使用すると、Watcher を元の工場出荷時設定に戻すことができます。
   - この操作により、すべてのユーザーデータ、設定、および構成が消去され、デバイスがデフォルト状態に戻ります。
   - このオプションを使用する際は注意が必要です。一度実行すると元に戻すことはできず、リセット後に再度 Watcher を設定する必要があります。

これらの設定オプションを理解することで、Watcher の体験をカスタマイズし、最適化して、ニーズに最も適した状態にすることができます。Wi-Fi や Bluetooth の設定など、一部の設定は連携するモバイルアプリを通じてのみアクセスおよび変更可能であることに注意してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>