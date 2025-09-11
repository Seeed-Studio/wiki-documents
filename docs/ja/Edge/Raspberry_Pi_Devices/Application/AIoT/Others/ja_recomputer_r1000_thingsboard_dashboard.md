---
description: このステップバイステップガイドを使用して、reComputer デバイス上で ThingsBoard を使用する方法を学びます。デバイスの追加、MQTT ノードの設定、インタラクティブなダッシュボードの作成を効率的なデータ監視のための人気機能を使用して発見してください。

title: ThingsBoard と reComputer R1000 を使用した動的 IoT ダッシュボードの作成
keywords:
  - reComputer-R1000
  - 初めての使用
  - IIoT
  - 産業用
  - ThingsBoard
  - エッジコンピューティング
image: https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard_1.webp
slug: /ja/recomputer_r1000_thingsboard_dashboard
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:600}}/></div>

## はじめに

[ThingsBoard Community Edition](https://thingsboard.io/) はオープンソースプラットフォームであり、他のオープンソース IoT ソリューションの中でも際立つインタラクティブなダッシュボードを作成するための強力な機能を提供します。さまざまなグラフィカルツールを使用して、ThingsBoard は IoT デバイスから収集されたデータを簡単に視覚化および監視できるようにし、リアルタイムデータの管理と分析に最適です。産業オートメーション、スマートシティプロジェクト、環境モニタリングなど、ThingsBoard は IoT データの洞察を追跡し対応するための汎用性が高く使いやすい方法を提供します。

## 必要条件

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェア

ThingsBoard を初めて使用する場合は、正しくインストールされていることを確認してください。[この Wiki](https://wiki.seeedstudio.com/ja/recomputer_r1000_thingsboard_ce/) を参照してガイドを確認してください。

## ThingsBoard にログインする
以下の資格情報を使用してログインしてください：

:::note
ユーザー名: tenant@thingsboard.org

パスワード: tenant
:::

## ステップ 1: デバイスをプロビジョニングする

- `Entities` セクションの `Devices` ページに移動します。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb1.png" style={{width:600}}/></div>

- テーブルの右上隅にある `+` アイコンをクリックし、ドロップダウンメニューから `Add new device` を選択します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb2.png" style={{width:600}}/></div>

- デバイス名を入力します。Client Id、Password、Username を指定します。`Add` をクリックします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb3.png" style={{width:600}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt4.PNG" style={{width:400}}/></div>

- デバイスを追加すると、それらはテーブルの上部に表示されます。テーブルは作成時間で自動的にデバイスを並べ替え、新しいものが最初に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb5.png" style={{width:600}}/></div>

## ステップ 2: デバイスを接続する
- デバイスをクリックし、`Device details`ウィンドウで`Check connectivity`ボタンをクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb6.png" style={{width:600}}/></div>

- 開いたウィンドウで、メッセージングプロトコルとオペレーティングシステムを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb7.png" style={{width:600}}/></div>

- 必要なクライアントツールをインストールし、提供されたコマンドをコピーします。
- コピーしたコマンドを実行します。`temperature`の読み取り値が正常に公開されると、デバイスの状態が「Inactive」から`Active`に変わります。また、公開された温度の読み取り値が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb8.png" style={{width:600}}/></div> 

- 接続ウィンドウを閉じます。

## ステップ 3: Node-REDでMQTTノードを設定する
- Modbus、BACnet、OPC UAなどの異なるプロトコルを使用してデータを収集する場合は、Node-REDを使用できます。
- Node-REDを開き、`MQTT Out`ノードを追加します。
- MQTT Outブローカー設定で、`クライアント名、パスワード、ブローカーのユーザー名、reComputerのIPアドレス`を設定します。
- テレメトリデータを送信するには、トピック`v1/devices/me/telemetry`を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt1.PNG" style={{width:400}}/></div> 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt2.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt3.PNG" style={{width:400}}/></div>

- MQTT Inノードについてさらに学びたい場合は、[こちらを参照してください](https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_mqtt/)。

:::note
reComputerにMosquittoブローカーをインストールする必要はありません。
:::



## ステップ 4: ダッシュボードを作成する
### 空のダッシュボードを作成する
- 画面左側のメインメニューから`Dashboards`ページに移動します。
- 画面右上の`+`記号をクリックし、ドロップダウンメニューから`Create new dashboard`を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb9.png" style={{width:600}}/></div> 

- ダイアログボックスで、ダッシュボードのタイトルを入力します（説明は任意です）。`Add`をクリックします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb10.png" style={{width:600}}/></div> 

- ダッシュボードを作成すると、自動的に開き、ウィジェットの追加を開始できます。
- ダッシュボードを保存するには、画面右上の`Save`ボタンをクリックします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb11.png" style={{width:600}}/></div> 

- 最初のダッシュボードが作成されました。ダッシュボードを追加するたびに、作成日時順にリストの上部に表示されます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb12.png" style={{width:600}}/></div> 

### チャートウィジェットを追加する
- 編集モードに入り、画面上部の`Add new widget`ボタンをクリックします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb13.png" style={{width:600}}/></div> 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb14.png" style={{width:600}}/></div> 

- `Charts`ウィジェットバンドルを見つけてクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb15.png" style={{width:600}}/></div> 

- `Time series chart`ウィジェットを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb16.png" style={{width:600}}/></div> 

- `Device`フィールドで、データソースとして以前に作成したデバイスを指定します。
- `Series`セクションで、データキー`Temperature`を入力し、デバイスの温度値を監視します。
- `Add`をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb17.png" style={{width:600}}/></div> 

- ウィジェットのサイズを調整し、変更を適用します。

追加のダッシュボードウィジェットについては[こちら](https://thingsboard.io/docs/user-guide/dashboards/)を参照してください。

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