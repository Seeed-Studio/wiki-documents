---
description: このwikiは、Raspberry Pi 4をベースとした産業用IoTエッジコントローラーであるreComputer R1000の操作に関する包括的なガイドを提供します。Node-REDのセットアップ、YABEを使用した室温シミュレーション、効率的なビル管理システム（BMS）統合のためのBACnet IPデバイスパラメータの発見と読み取りの手順が含まれています。

title: reComputer R1000とNode-RedおよびBACnet IP
keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_node_red_bacnet_ip
last_update:
  date: 06/20/2024
  author: ShuishengPeng
---

## はじめに
BACnet IP（Building Automation and Control Network over IP）は、ビルシステムの管理と自動化のために設計された通信プロトコルです。異なるメーカーのデバイスが標準IPネットワーク上でシームレスに相互運用できるようにし、システム統合と柔軟性を向上させます。ビル管理システム（BMS）におけるBACnet IPの主な利点には、スケーラビリティの向上、設置とメンテナンスの簡素化、既存のネットワークインフラストラクチャの活用能力が含まれます。BACnet IPはリアルタイムデータ交換もサポートし、ビルシステムのより良い監視と制御を促進します。これにより、エネルギー効率の向上、運用コストの削減、居住者の快適性と安全性の向上が実現されます。

このチュートリアルでは、reComputer R1000でnode-redを使用してBACnetデバイスデータを読み取り、リアルタイム視覚表示を実行するプロセスを示します。W10 PC上でBACnetデバイスシミュレータを使用して実際のBACnetデバイスをシミュレートしました。reComputer R1000とW10 PCを同じルーターに接続して同じネットワークセグメント上にあることを確認し、その後データを読み取って表示しました。

## はじめに

このプロジェクトを開始する前に、ここで説明されているようにハードウェアとソフトウェアを事前に準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>

</div>

### ソフトウェアの準備

reComputer R1000は、Raspberry Pi OSがプリインストールされた状態でお手元に届きます。このデバイスを初めて起動する場合は、[Getting Started Wiki](https://wiki.seeedstudio.com/ja/reComputer_r/)をお読みください。node-redに関する情報については、[以下の投稿](https://wiki.seeedstudio.com/ja/Edge-Box-Getting-Started-with-Node-Red/)を参照してください。このwikiに進む前に、このガイドを確認することをお勧めします。このチュートリアルでは、YABE室温シミュレーターを実行するホストPCと、reComputer R1000で実行されるNode-REDを接続します。

### ノードのダウンロード
このチュートリアルでは、**"node-bacnet-contrib-extended"**ノード、**"node-red-contrib-loop"**ノード、および**"node-red-dashboard"**ノードを使用します。開始前にこれらをダウンロードしてください。ノードのダウンロード方法については、[チュートリアル](https://wiki.seeedstudio.com/ja/Edge-Box-Getting-Started-with-Node-Red/)を参照してください。
### YABE

この[リンク](https://sourceforge.net/projects/yetanotherbacnetexplorer/)にアクセスして、YABE（Yet Another BACnet Explorer）をダウンロードしてください。YABEはBACnetデバイスをシミュレートおよび探索できる多機能ツールで、テストと開発目的に最適です。ホストPCにダウンロードしてインストールした後、YABEを使用して室温データをシミュレートし、reComputer R1000のNode-REDを使用してそのデータを読み取り、処理します。


## 室温コントローラーシミュレーターの開始

YABEをインストールしたら、`add-on`フォルダに移動し、`bacnet.Room.Simulator`をダブルクリックして開始します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG" /></center>

完了したら、YABEを開始する必要があります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png" /></center>

次に、`+`マークをクリックしてデバイスを追加し、PCのイーサネットポートのIPアドレスを入力します。「Start」をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG" /></center>

:::note
reComputerとPCの両方が同じネットワークドメインにあることを確認するために、イーサネットポートのIPアドレスを設定する必要がある場合があります。
:::


その後、室温シミュレーターと同じデバイスIDを持つデバイスが表示されるはずです。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG" /></center>

## Node-redがBACnetデバイスを読み取るプロセス
RoomSimulatorを開いた後、BACnetデバイスが利用できます。以下の手順で、Node-redを通じてデバイスのデータを読み取り、表示できます。
### ステップ1：デバイスの検索
まず、BACnetデバイスの場所を取得する必要があります。`"discover-devices"`ノードを使用してこれを実現できます。これにより、接続されているすべてのBACnetデバイスを検索し、IPアドレスとデバイス番号を表示できます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/1Search_device.gif" /></center>

### ステップ2：データの読み取り
デバイスアドレスを取得した後、対応するデバイスと通信できます。この例では、`"read-single-device"`を使用してデバイス内のすべてのデータを読み取ります。このノードには、デバイスのアドレスとデバイス番号が必要です。これら2つの情報は最初のステップから取得できます。`"function"`ノードを使用してこれら2つの情報を取得し、`"read-single-device"`ノードに入力してデバイスデータを読み取ることができます。右側のデバッグウィンドウでdeviceIDとAddress属性のパスをコピーし、`"function"`内の変数に割り当てることで、デバイスのアドレスとデバイス番号を正確に取得できます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/2ReadSingleDevice.gif" /></center>

### ステップ3：データのフィルタリング
2番目のステップで読み取られたデータ項目は多数あります。必要なデータ項目を取得するためにそれらを処理する必要があります。ここでは3つの温度データを抽出します。すなわち「Tempture indoor」、「Tempture outdoor」、「Tempture Water」で、2番目のステップと同様です。デバッグウィンドウで対応するデータ項目のパスをコピーし、`"function"`ノードで抽出します。その後、これら3つのデータ項目を使用できます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/3Filter_data.gif" /></center>

- 以下はデータをフィルタリングするコードです
```javascript
var Temperature_Indoor = Number(msg.payload["OBJECT_LIST(76)"][1]["PRESENT_VALUE(85)"]); 
var Temperature_Waterm = Number(msg.payload["OBJECT_LIST(76)"][2]["PRESENT_VALUE(85)"]); 
var Temperature_Outdoor = Number(msg.payload["OBJECT_LIST(76)"][3]["PRESENT_VALUE(85)"]); 
var msg0 = { payload: Temperature_Indoor };
var msg1 = { payload: Temperature_Waterm };
var msg2 = { payload: Temperature_Outdoor };
return [msg0, msg1, msg2];
```

### ステップ4：ループ読み取り
BACnetデバイスから継続的にデータを取得する必要があり、これには`"loop"`ノードの使用が必要です。図に示すように、第3ステップに基づいてループに参加するために`"loop"`ノードを導入します。`"loop"`ノードには3つのループモードがあります。`"condition"`モードを使用し、ループ条件に`"1 == 1"`を入力して無限ループを実現します。同時に、`"delay"`ノードを追加してループに2秒の遅延を導入し、2秒ごとにデータを読み取れるようにします。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/4Loop_reading.gif" /></center>

### ステップ5：データ表示
上記の4つのステップを通じて、BACnetデバイスから継続的にデータを取得できます。データの変化をより直感的にするために、UI機能を導入してUIインタラクティブインターフェースを描画し、データの変化を表示できます。これは**"node-red-dashboard"**ノードの実装を使用できます。この例では、`"chart"`と`"gauge"`を使用して3セットの線グラフとダッシュボードを描画します。ステップ4の出力を`"chart"`と`"gauge"`の入力として使用し、BACnetデータのリアルタイム視覚監視を実現します。
<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/5show.gif" /></center>

このセクションでは主に**"node-bacnet-contrib-extended"**と**"node-red-dashboard"**ノードを使用してBACnetデバイスデータの視覚的読み取りを実現する方法を紹介します。**"node-bacnet-contrib-extended"**ノードの使用に関するより詳細な説明については、[このチュートリアル](https://wiki.seeedstudio.com/ja/edge_box_rpi_200_node_red_bacnet_tcp/)を参照してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
