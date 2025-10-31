---
description: reComputer R1000にMQTTをインストールし、Node-REDでテストする方法を学びます。MQTTは、IoTアプリケーションに最適な軽量メッセージングプロトコルで、信頼性の低いネットワークでも効率的なリアルタイムデータ交換を可能にします。Node-RED統合により、エッジデバイスと中央サーバーがシームレスな接続を実現し、エッジで直接データ送信と処理を最適化します。

title: reComputer R1000 with Node Red and MQTT
keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - MQTT
image: https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png
slug: /ja/recomputer_r1000_nodered_mqtt
last_update:
  date: 07/02/2024
  author: Kasun Thushara
---

## はじめに

**MQTT (Message Queuing Telemetry Transport)** は、効率性と低帯域幅要件により、IoT（Internet of Things）アプリケーションに最適な軽量メッセージングプロトコルです。パブリッシュ・サブスクライブモデルでデバイス間の通信を促進し、信頼性の低いネットワーク上でリアルタイムデータ交換を可能にします。Node-REDとの統合により、MQTTはエッジデバイスと中央サーバーまたは他のデバイス間のシームレスな接続を実現し、効率的なデータ送信と処理を促進します。reComputer R1000 Edge Controllerは、MQTTをネイティブサポートすることで、reComputer R1000自体に直接MQTTブローカーをインストールできるため、追加のハードウェアゲートウェイが不要になります。これにより複雑さが軽減され、レイテンシが最小化され、信頼性が向上します。データは外部の仲介者に依存することなくエッジで処理・実行できるため、IoTシステムアーキテクチャが最適化されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png" style={{width:800, height:'auto'}}/></div>

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

[Node-REDの入門ガイド](https://wiki.seeedstudio.com/ja/recomputer_r1000_getting_statrted_node_red/)を用意しています。このwikiに進む前に、このガイドを確認することをお勧めします。

## reComputer R1000をMQTTブローカーとして設定

- **ステップ01** : reComputer R1000にSSHまたはVNCで接続し、Raspberry Pi OSを更新します：

```sh
sudo apt update
```

- **ステップ02** : 次に、Mosquittoをインストールします。そのためには、ターミナルを開いて次のコマンドを実行します：

```sh
sudo apt-get install mosquitto 
```

- **ステップ 03** : 次に、ターミナルで以下のコマンドを実行してMosquittoコマンドラインクライアントをインストールします：

```sh
sudo apt-get install mosquitto-clients -y
```

- **ステップ 04** : MQTT ブローカーのインストールが完了したら、設定ファイルの調整が必要です。デフォルトの設定ファイルは `/etc/mosquitto/mosquitto.conf` にあります。このファイルにアクセスして変更するには、ターミナルで以下のコマンドを実行してnanoエディタを使用します：

```sh
sudo nano /etc/mosquitto/mosquitto.conf
```

設定ファイルで、この行でデフォルトの設定を無効にします：

```sh
include_dir /etc/mosquitto/conf.d
```

を

```sh
#include_dir /etc/mosquitto/conf.d
```

次に、以下の行を追加してブローカーへの匿名ユーザーの接続を禁止するポリシーを適用します：

```sh
allow_anonymous false
```

パスワードを安全に保存するために、以下を追加してファイルの場所を指定します：

```sh
password_file /etc/mosquitto/pwfile
```

次に、リスニングポートを1883に設定するために、以下を追加します：

```sh
listener 1883
```

Ctrl+Sを押して変更を保存し、Ctrl+Xでエディタを終了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttconfig.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 05** : ユーザー名とパスワードを設定し、MQTTクライアントへのアクセスを許可したり、既存のパスワードをリセットしたりするには、ターミナルで以下のコマンドを使用します：

```sh
sudo mosquitto_passwd -c /etc/mosquitto/pwfile <username>
```

ユーザー名とパスワードを生成した後、reComputer R1000を再起動してください

```sh
sudo reboot
```

ターミナルで以下のコマンドを入力してMosquittoブローカーを開始できます：

```sh
sudo systemctl start mosquitto
```

`sudo systemctl status mosquitto`   Mosquitto ブローカーが実行されているかどうかを確認するため

`sudo systemctl stop mosquitto`     Mosquitto ブローカーを停止するため

`sudo systemctl restart mosquitto`  Mosquitto ブローカーを再起動するため

`sudo systemctl enable mosquitto`   システム起動時に Mosquitto ブローカーが初期化されるようにするため

## 接続テスト

- **ステップ 01** : 新しい SSH セッションまたはターミナルを開き、以下のコマンドを実行してトピックを購読する

```sh
mosquitto_sub -h localhost -t test -u <USER> -P <PASSWORD>
```

- **ステップ 02** : 別のSSHセッションまたはターミナルで、以下のコマンドを実行して同じトピックにメッセージを発行します。ユーザー名とパスワードを適切に入力してください。

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!" -u <USER> -P <PASSWORD>
```

最初のSSHセッションウィンドウでmosquitto_subコマンドを実行した場所に「Hello, world!」というメッセージが表示されるはずです。ユーザー名とパスワードを適切に入力してください。

## フローの編集

**ノード内のMQTT**

MQTT-inノードはMQTTトピックを購読し、ブローカーからメッセージを受信します。購読しているトピックの1つにメッセージが公開されると、MQTT-inノードがアクティブになり、受信したメッセージをフロー内の後続ノードに転送してさらなる処理を行います。

- **ステップ01** Node-REDパレットからMQTT-inノードをドラッグ&ドロップしてキャンバスに配置します。
- **ステップ02** MQTT-inノードをダブルクリックして設定ダイアログを開きます。
- **ステップ03** 設定ダイアログで以下のフィールドを設定します：
  - **Server**: ブローカーの詳細が事前に入力されていることを確認します。入力されていない場合は、鉛筆アイコンをクリックしてブローカーのIPアドレス、ユーザー名、パスワードを追加します。

  - **Action**: 単一トピックを購読するか、動的購読を使用するかを選択します。動的購読の場合は、ファンクションノードまたは他の処理ノードを使用してメッセージペイロードから希望するMQTTトピックを抽出します。ここでは単一トピックを購読します。
  - **Topic**: 購読したいMQTTトピックを入力します。
  - **QoS**: メッセージ配信の希望するサービス品質（QoS）レベル（0、1、または2）を選択します。
  - **Name**: オプションで、ノードに意味のある名前を割り当てます。

- **ステップ04** Doneをクリックして設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/connection.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttin.PNG" style={{width:600, height:'auto'}}/></div>

**MQTT-outノード**

MQTT-outノード（MQTT出力）はMQTTトピックにメッセージを公開するために使用されます。公開するメッセージのトピックとペイロードを設定できます。これらは静的またはフロー内の他のノードからのデータに基づいて動的に生成できます。

- **ステップ01** Node-REDパレットからMQTT-outノードをドラッグ&ドロップしてキャンバスに配置します。

- **ステップ02** MQTT-outノードをダブルクリックして設定ダイアログを開きます。

- **ステップ03** 設定ダイアログで、Serverフィールドの横にある鉛筆アイコンをクリックして新しいブローカー設定を作成します。

- **ステップ04** サーバーフィールドにブローカーのアドレス、ポート、必要に応じて認証資格情報（例：ユーザー名とパスワード）を追加してMQTTブローカー設定を編集します。

- **ステップ05** Doneをクリックしてブローカー設定を保存します。

- **ステップ06** 設定ダイアログで以下のフィールドを設定します：

  - **Topic**: メッセージを公開したいMQTTトピックを入力します。

  - **QoS**: メッセージ配信の希望するサービス品質（QoS）レベル（0、1、または2）を選択します。

  - **Retain**: ブローカーで公開されたメッセージを保持するかどうかを選択します（trueまたはfalse）。

  - **Name**: オプションで、ノードに意味のある名前を割り当てます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttout.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ07** Doneをクリックして設定を保存します。

特定の間隔でメッセージを注入するためにinjectノードを使用し、公開されたメッセージを検査するためにdebugノードも使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/debugnode.PNG" style={{width:600, height:'auto'}}/></div>

MQTT-in、MQTT-out、debug、injectノードの接続と設定方法を理解するために、以下のグラフィカル表現を確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqtt-edgebox.gif" style={{width:800, height:'auto'}}/></div>

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
