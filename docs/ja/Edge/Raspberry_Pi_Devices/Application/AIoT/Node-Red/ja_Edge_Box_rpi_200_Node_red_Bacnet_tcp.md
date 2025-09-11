---
description: このウィキは、Raspberry Pi 4 をベースにした産業用 IoT エッジコントローラーである Edge Box RPi 200 の使用に関する包括的なガイドを提供します。Node-RED のセットアップ、YABE を使用した室温のシミュレーション、および効率的なビル管理システム (BMS) 統合のための BACnet IP デバイスパラメータの検出と読み取りについての手順が含まれています。

title: Edge Box RPi 200 と Node-RED および BACnet TCP
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /ja/edge_box_rpi_200_node_red_bacnet_tcp
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
BACnet IP (Building Automation and Control Network over IP) は、建物のシステムを管理および自動化するために設計された通信プロトコルです。これにより、異なるメーカーのデバイスが標準の IP ネットワーク上でシームレスに相互運用できるようになり、システム統合と柔軟性が向上します。ビル管理システム (BMS) における BACnet IP の主な利点には、スケーラビリティの向上、設置と保守の容易さ、既存のネットワークインフラの活用が含まれます。BACnet IP はリアルタイムのデータ交換もサポートしており、建物システムの監視と制御を向上させます。その結果、エネルギー効率の向上、運用コストの削減、居住者の快適性と安全性の向上が実現します。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備

Edge Box は Raspberry Pi OS がプリインストールされた状態で提供されます。このデバイスを初めて起動する場合は、[Getting Started Wiki](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/) をお読みください。また、[Node-RED の入門ガイド](https://wiki.seeedstudio.com/ja/Edge-Box-Getting-Started-with-Node-Red/) も用意しています。このガイドを進める前に確認することをお勧めします。このチュートリアルでは、YABE 室温シミュレータを実行しているホスト PC を Edge Box 上で実行している Node-RED に接続します。

### YABE

この [リンク](https://sourceforge.net/projects/yetanotherbacnetexplorer/) にアクセスして YABE (Yet Another BACnet Explorer) をダウンロードしてください。YABE は、BACnet デバイスをシミュレートおよび探索するための多用途なツールであり、テストや開発に最適です。ホスト PC にダウンロードしてインストールした後、YABE を使用して室温データをシミュレートし、それを Edge Box 上の Node-RED を使用して読み取りおよび処理します。

### BACnet IP 用のイーサネット設定を構成する
デバイスの IP ドメインが無線設定と異なるため、IP 設定を手動で変更する必要がある場合があります。そのためには、以下の手順を実行してください。

- **ステップ 01**: 次のコマンドを実行します。
```sh
sudo nano /etc/dhcpcd.conf
```

- **ステップ 02**: 次に、デバイスのネットワークドメインに従ってイーサネットポート設定を構成し、`metric` コマンドを使用して優先順位を設定します。最も低いメトリック値が最も高い優先順位を持ちます。その後、Edge Box とデバイスを接続します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG" /></center>

## BACnetノードのインストール

1. **Node-REDを開く:**
   Edge BoxでNode-REDを起動します。通常、ウェブブラウザを開き、`http://<your-edgebox-ip>:1880`にアクセスすることで利用できます。

2. **パレット管理にアクセス:**
   Node-REDインターフェースの右上隅にある三本線（メニュー）をクリックしてメインメニューを開きます。ドロップダウンメニューから「パレットの管理」を選択します。

3. **新しいノードをインストール:**
   「パレットの管理」ウィンドウで「インストール」タブに移動します。

4. **パッケージを検索:**
   検索ボックスに`node-red-contrib-bacnet-extended`と入力してパッケージを探します。

5. **パッケージをインストール:**
   `node-red-contrib-bacnet-extended`が利用可能なノードのリストに表示されたら、その横にある「インストール」ボタンをクリックします。これでインストールプロセスが開始されます。

6. **インストール完了を待つ:**
   インストールには数分かかる場合があります。完了すると確認メッセージが表示されます。

7. **インストールを確認:**
   インストールが完了すると、BACnetノードがNode-REDのパレットに表示されます。Node-REDエディタの左側バーのノードリストを確認して確認してください。

これで、`node-red-contrib-bacnet-extended`が正常にインストールされ、Node-REDフローでBACnetデバイスを統合する準備が整いました。

## 室温コントローラーシミュレーターの起動

YABEをインストールした後、`add-on`フォルダに移動し、`bacnet.Room.Simulator`をダブルクリックして起動します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG" /></center>

その後、YABEを起動する必要があります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png" /></center>

次に、`+`マークをクリックしてデバイスを追加し、PCのイーサネットポートのIPアドレスを入力します。「Start」をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG" /></center>

:::note
イーサネットポートのIPアドレスを設定し、EdgeBoxとPCの両方が同じネットワークドメイン内にあることを確認する必要がある場合があります。
:::

その後、室温シミュレーターと同じデバイスIDを持つデバイスが表示されるはずです。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG" /></center>

## BACnet IPデバイスの検出

1. **必要なノード:**
   以下の4つのノードが必要です:
   - Inject
   - Function
   - Discover-devices
   - Debug

2. **フローにノードを追加:**
   上記のノードをNode-REDのワークベンチフローにドラッグ＆ドロップします。

3. **ノードを接続:**
   ノードを以下のように接続します:
   - Inject >>> Function >>> Discover-devices >>> Debug

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-device.PNG" /></center>

4. **Functionノードを設定:**
   Functionノードをダブルクリックして設定ダイアログを開きます。以下のコードを関数ブロックに記述します:

   ```javascript
   msg.reuseAddr = true;
   msg.transportClosedDuration = 8000;
   return msg;
   ```
<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-func.PNG" /></center>

5. **フローをデプロイ:**
   Node-REDインターフェースの右上隅にある「デプロイ」ボタンをクリックしてフローをデプロイします。

6. **デバイス検出をトリガー:**
   タイムスタンプボタン（Injectノード）をクリックして検出プロセスを開始します。

7. **デバッグ出力を確認:**
   デバッグウィンドウに出力が表示されるのを待ちます。デバッグメッセージにデバイスのIPとデバイスIDが表示されます。

<center><img width={600} height={400} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-discover.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet1.gif" /></center>

## すべてのデバイスパラメータを読み取る

Node-REDを使用してBACnetデバイスからすべてのパラメータを読み取るには、以下の手順に従ってください：

1. **ノードの準備:**
   - Inject、Function、Read-All-Devices、Debugの4つのノードが必要です。

2. **ノードをワークベンチに追加:**
   - Inject、Function、Read-All-Devices、Debugノードをワークベンチにドラッグ＆ドロップします。

3. **ノードを接続:**
   - 以下の順序でノードを接続します：
     ```
     Inject >>>> Function >>>> Read-All-Devices >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-all-devices.PNG" /></center>

4. **Functionノードを設定:**
   - Functionノードをダブルクリックして設定ウィンドウを開きます。
   - 以下のコードを関数ブロックに入力します：
   - 
     ```javascript
     msg.reuseAddr = true;
     msg.transportClosedDuration = 8000;
     return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/discover-func.PNG" /></center>

5. **フローをデプロイ:**
   - Node-REDインターフェースの右上にある「Deploy」ボタンをクリックしてフローをデプロイします。

6. **デバイスパラメータの読み取りを開始:**
   - Injectノードのタイムスタンプボタンをクリックしてプロセスを開始します。

7. **出力を確認:**
   - Debugウィンドウに出力が表示されるのを待ちます。BACnetネットワークエリア内のデバイスのパラメータが表示されます。

このセットアップにより、ネットワーク上のBACnetデバイスからすべてのパラメータを読み取り、Node-REDのDebugウィンドウに表示されます。

<center><img width="300" src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-read-all.png" /></center>


<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet2.gif" /></center>

## 単一デバイスデータを読み取る

1. **ノードの準備:**
   - Inject、Function、Read-All-Devices、Debugの4つのノードが必要です。

2. **ノードをワークベンチに追加:**
   - Inject、Function、Read-Single-Device、Debugノードをワークベンチにドラッグ＆ドロップします。

3. **ノードを接続:**
   - 以下の順序でノードを接続します：
     ```
     Inject >>>> Function >>>> Read-Single-Device >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-single-device.PNG" /></center>


4. **Functionノードを設定:**
   - Functionノードをダブルクリックして設定ウィンドウを開きます。
   - 以下のコードを関数ブロックに入力します：
   - 
     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/read-single-func.PNG" /></center>

5. **フローをデプロイ:**
   - Node-REDインターフェースの右上にある「Deploy」ボタンをクリックしてフローをデプロイします。

6. **デバイスパラメータの読み取りを開始:**
   - Injectノードのタイムスタンプボタンをクリックしてプロセスを開始します。

7. **出力を確認:**
   - Debugウィンドウに出力が表示されるのを待ちます。BACnetネットワークエリア内の選択されたデバイスのパラメータが表示されます。


<center><img width={300} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-single-device.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet3.gif" /></center>

## 単一デバイスの特定オブジェクトデータを読み取る

1. **ノードの準備:**
   - 以下の4つのノードが必要です: Inject、2つのFunctionノード、Read-Single-Device、Debug。

2. **ノードをワークベンチに追加:**
   - Inject、2つのFunctionノード、Read-Single-Device、Debugノードをワークベンチにドラッグ＆ドロップします。

3. **ノードを接続:**
   - 以下の順序でノードを接続します:
     ```
     Inject >>>> Function >>>> Read-Single-Devices >>>> Function >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/single-object.PNG" /></center>

4. **Functionノードを設定:**
   - Injectノードに近いFunctionノードをダブルクリックして設定ウィンドウを開きます。
   - 以下のコードをFunctionブロックに入力します:
   - 
     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```
   - Debugノードに近いFunctionノードをダブルクリックして設定ウィンドウを開きます。
   - 以下のコードをFunctionブロックに入力します:
   - 
     ```javascript
        const objects = msg.payload['OBJECT_LIST(76)'];
        let temperatureIndoor = null;

        for (let obj of objects) {
        if (obj['OBJECT_NAME(77)'] === 'Temperature.Indoor' && obj['OBJECT_TYPE(79)'] === 'ANALOG_INPUT(0)') {
        temperatureIndoor = obj['PRESENT_VALUE(85)'];
        break;
        }
        }

        if (temperatureIndoor !== null) {
        msg.payload = { 'Temperature.Indoor': temperatureIndoor };
        } else {
        msg.payload = { error: 'Temperature.Indoor not found' };
        }

        return msg;

     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/single-object-func.PNG" /></center>

5. **フローをデプロイ:**
   - Node-REDインターフェースの右上にある「Deploy」ボタンをクリックしてフローをデプロイします。

6. **デバイスパラメータの読み取りを開始:**
   - Injectノードのタイムスタンプボタンをクリックしてプロセスを開始します。

7. **出力を確認:**
   - Debugウィンドウに出力が表示されるのを待ちます。BACnetネットワークエリア内の選択されたデバイスの特定オブジェクトのパラメータが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debug-single-object.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/bacnet4.gif" /></center>

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>