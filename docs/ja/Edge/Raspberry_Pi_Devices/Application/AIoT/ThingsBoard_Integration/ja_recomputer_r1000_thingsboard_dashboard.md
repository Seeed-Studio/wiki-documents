---
description: reComputerデバイスでThingsBoardを使用する方法をステップバイステップガイドで学習します。デバイスの追加、MQTTノードの設定、効率的なデータ監視のための人気機能を使用したインタラクティブダッシュボードの作成方法を発見してください。

title: ThingsBoardとreComputer R1000で動的IoTダッシュボードを作成する
keywords:
  - reComputer-R1000
  - Getting started
  - IIoT
  - Industrial 
  - Thingsboard
  - Edge Computing
image: https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard_1.webp
slug: /ja/recomputer_r1000_thingsboard_dashboard
last_update:
  date: 10/25/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:600}}/></div>

## はじめに

オープンソースプラットフォームである[ThingsBoard Community Edition](https://thingsboard.io/)は、他のオープンソースIoTソリューションの中でも際立つインタラクティブダッシュボードを作成するための強力な機能を提供します。様々なグラフィカルツールを備えたThingsBoardにより、ユーザーはIoTデバイスから収集されたデータを簡単に可視化・監視でき、リアルタイムデータの管理と分析に理想的です。産業オートメーション、スマートシティプロジェクト、環境監視など、ThingsBoardはIoTデータの洞察を追跡し、対応するための汎用性があり、ユーザーフレンドリーな方法を提供します。

## 前提条件

### ハードウェア

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェア

ThingsBoardを初めて使用する場合は、正しくインストールされていることを確認してください。ガイダンスについては[このwiki](https://wiki.seeedstudio.com/ja/recomputer_r1000_thingsboard_ce/)を参照してください。

## ThingsBoardにログイン

以下の認証情報を使用してログインしてください：

:::note
ユーザー名: tenant@thingsboard.org

パスワード: tenant
:::

## ステップ1: デバイスをプロビジョニング

- `Entities`セクションの下にある`Devices`ページに移動します。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb1.png" style={{width:600}}/></div>

- テーブルの右上角にある`+`アイコンをクリックし、ドロップダウンメニューから`Add new device`を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb2.png" style={{width:600}}/></div>

- デバイス名を入力します。Client Id、Password、Usernameを設定します。`Add`をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb3.png" style={{width:600}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt4.PNG" style={{width:400}}/></div>

- より多くのデバイスを追加すると、それらはテーブルの上部に表示されます。テーブルは作成時間によってデバイスを自動的にソートし、最新のものが最初にリストされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb5.png" style={{width:600}}/></div>

## ステップ2: デバイスを接続

- デバイスをクリックし、`Device details`ウィンドウで`Check connectivity`ボタンをクリックします。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb6.png" style={{width:600}}/></div>

- 開いたウィンドウで、メッセージングプロトコルとオペレーティングシステムを選択します。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb7.png" style={{width:600}}/></div>

- 必要なクライアントツールをインストールし、提供されたコマンドをコピーします。
- コピーしたコマンドを実行します。`temperature`の読み取り値が正常に公開されると、デバイスの状態が「Inactive」から`Active`に変わります。公開された温度の読み取り値も表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb8.png" style={{width:600}}/></div>

- 接続ウィンドウを閉じます。

## ステップ3: Node-REDでMQTTノードを設定

- Modbus、BACnet、OPC UAなどの異なるプロトコルを使用してデータを収集する場合は、Node-REDを使用できます。
- Node-REDを開き、`MQTT Out`ノードを追加します。
- MQTT Outブローカーの設定で、`クライアント名、パスワード、ブローカーのユーザー名、およびreComputerのIPアドレス`を設定します。
- テレメトリデータを送信するには、トピック`v1/devices/me/telemetry`を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt1.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt2.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt3.PNG" style={{width:400}}/></div>

- MQTT Inノードについてさらに学びたい場合は、[こちらで詳しく探索できます](https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_mqtt/)。

:::note
reComputerにMosquittoブローカーをインストールする必要はありません。
:::

## ステップ 4: ダッシュボードの作成

### 空のダッシュボードを作成する

- 画面左側のメインメニューから `Dashboards` ページに移動します。
- 画面右上の `+` サインをクリックし、ドロップダウンメニューから `Create new dashboard` を選択します。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb9.png" style={{width:600}}/></div>

- ダイアログボックスで、ダッシュボードのタイトルを入力します（説明はオプションです）。`Add` をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb10.png" style={{width:600}}/></div>

- ダッシュボードを作成すると、自動的に開き、ウィジェットの追加を開始できます。
- ダッシュボードを保存するには、右上の `Save` ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb11.png" style={{width:600}}/></div>

- 最初のダッシュボードが作成されました。さらにダッシュボードを追加すると、作成タイムスタンプでソートされ、リストの上部に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb12.png" style={{width:600}}/></div>

### チャートウィジェットを追加する

- 編集モードに入り、画面上部の `Add new widget` ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb13.png" style={{width:600}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb14.png" style={{width:600}}/></div>

- `Charts` ウィジェットバンドルを見つけてクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb15.png" style={{width:600}}/></div>

- `Time series chart` ウィジェットを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb16.png" style={{width:600}}/></div>

- `Device` フィールドで、データソースとして先ほど作成したデバイスを指定します。
- `Series` セクションで、デバイスの温度値を監視するためにデータキー `Temperature` を入力します。
- `Add` をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb17.png" style={{width:600}}/></div>

- ウィジェットのサイズを変更し、変更を適用します。

追加のダッシュボードウィジェットについては[こちら](https://thingsboard.io/docs/user-guide/dashboards/)で詳しく調べることができます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
