---
description: この記事では主にMQTT通信でfuxaを使用する方法を紹介します。

title: reComputer R1000でfuxaを使用してmqttクライアントを利用する
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - mqtt client
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /ja/reComputer_r1000_fuxa_mqtt_client
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## はじめに

FUXAはWebベースのプロセス可視化（SCADA/HMI/ダッシュボード）ソフトウェアです。FUXAを使用すると、機械の個別設計とリアルタイムデータ表示のための現代的なプロセス可視化を作成できます。Modbus RTU/TCP、Siemens S7プロトコル、OPC-UA、BACnet IP、MQTT、その他のプロトコルをサポートしています。

この記事では主にreComputerR1000でfuxaを使用してmqtt通信を行う方法を紹介します。この記事ではmosquittoをMQTTサーバーエージェントとして使用し、fuxaとnode-redをMQTTクライアントとして使用し、fuxaが公開するデータのソースとしてModbusTCPスレーブを紹介します。fuxaは/dev/fromNode_redという名前のトピックを購読し、/dev/fromfuxaという名前のトピックを公開します。このトピックのデータはModbusTCPスレーブから取得されます。node-redは/dev/fromfuxaという名前のトピックを購読し、/dev/fromNode_redトピックを公開します。通信フレームワークは図に示されています：
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" /></center>

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

* Python 3.11はfuxaと互換性がない可能性があります。Pythonバージョンが3.11の場合は、別のPythonバージョンに変更することを検討してください。
- W10 PCで[modbusmechanic](https://modbusmechanic.scifidryer.com/)を使用します。他のmodbusテストツールも使用できます
- reComputer R1000で[fuxa](https://github.com/frangoteam/FUXA)を使用します。reComputer R1000にfuxaをインストールするには、以下の手順を参照してください

  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

- fuxaでmodbusTCP機能を使用する方法については、この[wiki](https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_modbus_rtu_and_tcp/)を参照してください。
- mosquittoのダウンロードと設定方法については、この[チュートリアル](https://wiki.seeedstudio.com/ja/recomputer_r1000_nodered_mqtt/)を参照してください。node-redでmqtt通信を設定する方法についても説明されており、参考にできます。

### ハードウェア構成

ModbusTCPでは、イーサネットケーブルを使用してW10 PCとreComputer R1000をスイッチに接続し、同じネットワークセグメント上にあることを確認します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## MQTTクライアント通信手順

**ステップ1**: この[チュートリアル](https://wiki.seeedstudio.com/ja/reComputer_r1000_fuxa_modbus_rtu_and_tcp/)を参照し、`fuxa`を使用して`modbusmechanic`との接続を確立します。また、この[wiki](https://wiki.seeedstudio.com/ja/Edge-Box-Node-Red-MQTT/)を参照して、reComputer R1000に`mosquitto`と`Node-red`をデプロイします。

**ステップ2**: MQTTサーバーに接続します。`fuxa`インターフェースの右下角にある`+`ボタンをクリックし、`Name`、`Type`を入力し、`MQTTclient`を選択してから、MQTTサーバーのIPアドレスとポート番号を入力します。MQTTサーバーがセキュリティ認証を必要とする場合は、`Client ID`、`Username`、`Password`なども入力する必要があります。私たちのサーバーはこの認証を必要としないため、入力しません。最後に`OK`をクリックし、モジュールの左下角に緑色のドットが表示されるまで待ちます。これはMQTTサーバーへの接続が成功したことを示します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_mqtt_server.gif" /></center>

**ステップ3**: トピックを購読します。設定インターフェースに入り、左上角の`+`ボタンをクリックし、`Browser Topics on broker`で購読したいトピックを入力します。ここではnode-redが公開する`/dev/fromNode_red`トピックを購読し、その隣の検索ボタンをクリックすると、対応するトピックの内容を確認できます。fuxaは`raw`と`json`の2つの表示形式をサポートしています。ここでは`json`を選択し、最後に`subscribe`をクリックして購読を成功させます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/sub_topic.gif" /></center>

**ステップ4**: トピックを公開します。設定インターフェースに入り、`Publish`列を選択し、`Topic path`で公開したいトピック名を入力します。ここでは/dev/fromfuxaと入力し、`Add attribute to payload`をクリックすると、公開可能なデータ内容の行がポップアップします。ここではModbusTCPスレーブから取得した4つのデータとタイムスタンプを公開トピックの内容として選択し、公開形式として`json`を選択し、最後に`Publish`をクリックして公開を成功させます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/public_topic.gif" /></center>

**ステップ5**: 上記の設定が完了した後、Modbusスレーブ側でデータを変更します。node-redのデバッグウィンドウでデータのリアルタイム変更を確認できます。これは、fuxaが/dev/fromfuxaトピックを通じてデータを正常に公開したことを示しています。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_show_data.gif" /></center>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
