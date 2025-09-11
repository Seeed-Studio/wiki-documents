---
description: このWikiは、Raspberry Pi 4をベースとした産業用IoTエッジコントローラーであるreComputer R1000の使用方法についての包括的なガイドを提供します。Node-REDのセットアップ、YABEを使用した室温のシミュレーション、および効率的なビル管理システム（BMS）統合のためのBACnet IPデバイスパラメータの発見と読み取り方法を含みます。

title: reComputer R1000とNode-RedおよびBACnet IP
keywords:
  - エッジコントローラー
  - reComputer R1000
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_node_red_bacnet_ip
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
BACnet IP（Building Automation and Control Network over IP）は、建物のシステムを管理および自動化するために設計された通信プロトコルです。これにより、異なるメーカーのデバイスが標準IPネットワーク上でシームレスに相互運用できるようになり、システム統合と柔軟性が向上します。BMS（ビル管理システム）におけるBACnet IPの主な利点には、スケーラビリティの向上、設置と保守の容易さ、既存のネットワークインフラの活用が含まれます。BACnet IPはリアルタイムデータ交換もサポートしており、建物システムの監視と制御を向上させます。その結果、エネルギー効率の向上、運用コストの削減、居住者の快適性と安全性の向上が実現します。

このチュートリアルでは、Node-REDを使用してreComputer R1000上でBACnetデバイスデータを読み取り、リアルタイムの視覚的表示を行うプロセスを示します。W10 PC上でBACnetデバイスシミュレーターを使用して実際のBACnetデバイスをシミュレートしました。reComputer R1000とW10 PCは同じルーターに接続され、同じネットワークセグメント上にあることを確認した後、データを読み取り表示しました。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

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

### ソフトウェアの準備

reComputer R1000は、Raspberry Pi OSがプリインストールされた状態で手元に届きます。このデバイスを初めて起動する場合は、[Getting Started Wiki](https://wiki.seeedstudio.com/ja/reComputer_r/)をご覧ください。Node-REDに関する情報については、[こちらの記事](https://wiki.seeedstudio.com/ja/Edge-Box-Getting-Started-with-Node-Red/)を参照してください。このガイドを進める前に一読することをお勧めします。このチュートリアルでは、YABE室温シミュレーターを実行しているホストPCを、reComputer R1000上で実行されているNode-REDと接続します。

### ノードのダウンロード
このチュートリアルでは、**"node-bacnet-contrib-extended"**ノード、**"node-red-contrib-loop"**ノード、および**"node-red-dashboard"**ノードを使用します。開始する前にこれらをダウンロードしてください。ノードのダウンロード方法については、[チュートリアル](https://wiki.seeedstudio.com/ja/Edge-Box-Getting-Started-with-Node-Red/)を参照してください。

### YABE

この[リンク](https://sourceforge.net/projects/yetanotherbacnetexplorer/)にアクセスしてYABE（Yet Another BACnet Explorer）をダウンロードしてください。YABEはBACnetデバイスをシミュレートおよび探索するための多用途ツールであり、テストや開発に最適です。ホストPCにダウンロードしてインストールした後、YABEを使用して室温データをシミュレートし、それをreComputer R1000上のNode-REDを使用して読み取り処理します。

## 室温コントローラーシミュレーターの起動

YABE をインストールした後、`add-on` フォルダに移動し、`bacnet.Room.Simulator` をダブルクリックして起動します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG" /></center>

起動後、YABE を開始する必要があります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png" /></center>

次に、`+` マークをクリックしてデバイスを追加し、PC のイーサネットポートの IP アドレスを入力します。「Start」をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG" /></center>

:::note
イーサネットポートの IP アドレスを設定し、reComputer と PC の両方が同じネットワークドメイン内にあることを確認する必要がある場合があります。
:::

その後、室温シミュレーターと同じデバイス ID を持つデバイスが表示されるはずです。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG" /></center>

## Node-red を使用した BACnet デバイスの読み取りプロセス

RoomSimulator を開いた後、BACnet デバイスが利用可能になります。以下の手順で Node-red を使用してデバイスのデータを読み取り、表示することができます。

### ステップ 1: デバイスの検索

まず、BACnet デバイスの位置を取得する必要があります。これには `"discover-devices"` ノードを使用します。このノードは接続されているすべての BACnet デバイスを検索し、IP アドレスとデバイス番号を表示します。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/1Search_device.gif" /></center>

### ステップ 2: データの読み取り

デバイスアドレスを取得した後、対応するデバイスと通信できます。この例では `"read-single-device"` を使用してデバイス内のすべてのデータを読み取ります。このノードにはデバイスのアドレスとデバイス番号が必要です。これらの情報はステップ 1 で取得できます。`"function"` ノードを使用してこれらの情報を取得し、`"read-single-device"` ノードに入力してデバイスデータを読み取ります。右側のデバッグウィンドウで deviceID と Address 属性のパスをコピーし、それを `"function"` 内の変数に割り当てることで、デバイスのアドレスとデバイス番号を正確に取得できます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/2ReadSingleDevice.gif" /></center>

### ステップ 3: データのフィルタリング

ステップ 2 で読み取ったデータ項目は多数あります。必要なデータ項目を取得するために処理が必要です。ここでは、3 つの温度データ（"Tempture indoor"、"Tempture outdoor"、"Tempture Water"）を抽出します。ステップ 2 と同様に、デバッグウィンドウで対応するデータ項目のパスをコピーし、それを `"function"` ノードで抽出します。その後、これら 3 つのデータ項目を使用できます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/3Filter_data.gif" /></center>

- 以下はデータをフィルタリングするコードです：
```javascript
var Temperature_Indoor = Number(msg.payload["OBJECT_LIST(76)"][1]["PRESENT_VALUE(85)"]); 
var Temperature_Waterm = Number(msg.payload["OBJECT_LIST(76)"][2]["PRESENT_VALUE(85)"]); 
var Temperature_Outdoor = Number(msg.payload["OBJECT_LIST(76)"][3]["PRESENT_VALUE(85)"]); 
var msg0 = { payload: Temperature_Indoor };
var msg1 = { payload: Temperature_Waterm };
var msg2 = { payload: Temperature_Outdoor };
return [msg0, msg1, msg2];
```

### ステップ 4: ループ読み取り

BACnet デバイスから継続的にデータを取得する必要があります。これには `"loop"` ノードを使用します。図のように、ステップ 3 を基に `"loop"` ノードを導入してループを構築します。`"loop"` ノードには 3 つのループモードがあります。この例では `"condition"` モードを使用し、ループ条件に `"1 == 1"` を入力して無限ループを実現します。同時に、ループ内に `"delay"` ノードを追加して 2 秒の遅延を導入し、2 秒ごとにデータを読み取れるようにします。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/4Loop_reading.gif" /></center>

### ステップ 5: データの表示

上記の 4 つのステップを通じて、BACnet デバイスから継続的にデータを取得できます。データの変化をより直感的にするために、UI 機能を導入してインタラクティブなインターフェースを作成し、データの変化を表示します。これは **"node-red-dashboard"** ノードを使用して実現できます。この例では、`"chart"` と `"gauge"` を使用して 3 つの折れ線グラフとダッシュボードを描画します。ステップ 4 の出力を `"chart"` と `"gauge"` の入力として使用し、BACnet データのリアルタイムビジュアルモニタリングを実現します。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/5show.gif" /></center>

このセクションでは、**"node-bacnet-contrib-extended"** ノードと **"node-red-dashboard"** ノードを使用して BACnet デバイスデータの視覚的な読み取りを実現する方法を主に紹介しました。**"node-bacnet-contrib-extended"** ノードの使用に関する詳細な説明は、[このチュートリアル](https://wiki.seeedstudio.com/ja/edge_box_rpi_200_node_red_bacnet_tcp/) を参照してください。

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