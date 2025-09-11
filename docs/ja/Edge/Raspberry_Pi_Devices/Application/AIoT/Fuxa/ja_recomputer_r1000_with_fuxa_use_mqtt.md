---
description: この記事では、主に fuxa を使用した MQTT 通信の方法について紹介します。

title: reComputer R1000 を使用した fuxa による MQTT クライアントの利用
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - mqtt client
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fuxa_mqtt_client
last_update:
  date: 05/15/2025
  author: ShuishengPeng
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに
FUXA は、ウェブベースのプロセス可視化 (SCADA/HMI/Dashboard) ソフトウェアです。FUXA を使用すると、機械の個別デザインとリアルタイムデータ表示を備えた最新のプロセス可視化を作成できます。Modbus RTU/TCP、Siemens S7 Protocol、OPC-UA、BACnet IP、MQTT などのプロトコルをサポートしています。

この記事では、reComputer R1000 上で fuxa を使用した MQTT 通信の方法について主に紹介します。この記事では、MQTT サーバーエージェントとして mosquitto を使用し、MQTT クライアントとして fuxa と node-red を使用します。また、fuxa が公開するデータのソースとして ModbusTCP スレーブを紹介します。fuxa は /dev/fromNode_red という名前のトピックを購読し、/dev/fromfuxa という名前のトピックを公開します。このトピックのデータは ModbusTCP スレーブから取得されます。node-red は /dev/fromfuxa という名前のトピックを購読し、/dev/fromNode_red トピックを公開します。通信フレームワークは以下の図の通りです：
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" /></center>

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
* Python 3.11 は fuxa と互換性がない可能性があります。Python のバージョンが 3.11 の場合は、別のバージョンに変更することを検討してください。
* W10 PC 上で [modbusmechanic](https://modbusmechanic.scifidryer.com/) を使用します。他の Modbus テストツールを使用することもできます。
* reComputer R1000 上で [fuxa](https://github.com/frangoteam/FUXA) を使用します。reComputer R1000 に fuxa をインストールする手順は以下を参照してください。
  ```shell
    ## Node バージョン 14 || 16 || 18 をインストールしている必要があります。
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## 次に npm から FUXA をインストールします
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```
* fuxa で modbusTCP 機能を使用する方法については、この [wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_modbus_rtu_and_tcp/) を参照してください。
* mosquitto のダウンロードと設定方法については、この [チュートリアル](https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_mqtt/) を参照してください。また、node-red での MQTT 通信の設定方法についても参照できます。

### ハードウェアの構成

ModbusTCP の場合、W10 PC と reComputer R1000 をスイッチに接続するためにイーサネットケーブルを使用し、同じネットワークセグメントに属するようにします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## MQTT クライアント通信手順

**ステップ 1**: この[チュートリアル](https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_modbus_rtu_and_tcp/)を参照し、`fuxa`を使用して`modbusmechanic`との接続を確立します。また、この[Wiki](https://wiki.seeedstudio.com/ja/Edge-Box-Node-Red-MQTT/)を参照して、reComputer R1000 上に`mosquitto`と`Node-red`をデプロイしてください。

**ステップ 2**: MQTT サーバーに接続します。`fuxa`インターフェースの右下にある`+`ボタンをクリックし、`Name`、`Type`を入力し、`MQTTclient`を選択します。その後、MQTT サーバーの IP アドレスとポート番号を入力します。MQTT サーバーがセキュリティ認証を必要とする場合は、`Client ID`、`Username`、`Password`なども入力する必要があります。今回のサーバーでは認証が不要なため、これらは入力しません。最後に`OK`をクリックし、モジュールの左下に緑色の点が表示されるのを待ちます。これが MQTT サーバーへの接続が成功したことを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_mqtt_server.gif" /></center>

**ステップ 3**: トピックを購読します。設定インターフェースに入り、左上の`+`ボタンをクリックし、`Browser Topics on broker`に購読するトピックを入力します。ここでは、node-red が公開する`/dev/fromNode_red`トピックを購読します。その後、隣の検索ボタンをクリックすると、対応するトピックの内容が表示されます。fuxa は`raw`と`json`の2つの表示形式をサポートしています。ここでは`json`を選択し、最後に`subscribe`をクリックして購読を完了します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/sub_topic.gif" /></center>

**ステップ 4**: トピックを公開します。設定インターフェースに入り、`Publish`列を選択し、`Topic path`に公開するトピック名を入力します。ここでは`/dev/fromfuxa`を入力します。その後、`Add attribute to payload`をクリックすると、公開可能なデータ内容の行が表示されます。ここでは、ModbusTCP スレーブから取得した4つのデータとタイムスタンプを公開トピックの内容として選択し、公開形式を`json`に設定します。最後に`Publish`をクリックして公開を完了します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/public_topic.gif" /></center>

**ステップ 5**: 上記の設定が完了した後、Modbus スレーブ側のデータを変更します。node-red のデバッグウィンドウでデータがリアルタイムで変化するのが確認できます。これにより、fuxa が`/dev/fromfuxa`トピックを通じてデータを正常に公開したことが示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_show_data.gif" /></center>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>