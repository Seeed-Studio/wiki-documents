---
description: Edge Box RPi 200とNode-REDおよびMQTT
title: Edge Box RPi 200とNode-REDおよびMQTT
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - MQTT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Edge-Box-Node-Red-MQTT
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

**MQTT (Message Queuing Telemetry Transport)** は、効率性と低帯域幅要件のため、IoT（モノのインターネット）アプリケーションに最適な軽量メッセージングプロトコルです。これは、パブリッシュ-サブスクライブモデルでデバイス間の通信を促進し、不安定なネットワーク上でリアルタイムのデータ交換を可能にします。Node-REDを使用することで、MQTTの統合により、エッジデバイスと中央サーバーまたは他のデバイス間のシームレスな接続が可能になり、効率的なデータ伝送と処理が実現します。EdgeBox Edge Controllerは、MQTTをネイティブでサポートすることで、MQTTブローカーをEdgeBox自体に直接インストールできるため、追加のハードウェアゲートウェイが不要になります。これにより、複雑さが軽減され、遅延が最小化され、信頼性が向上します。データは外部の仲介者に依存せずにエッジで処理および実行できるため、IoTシステムアーキテクチャが最適化されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/noderedmqtt.png" style={{width:800, height:'auto'}}/></div>

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

Edge Box-200は、Raspberry Pi OSがプリインストールされた状態で提供されます。このデバイスを初めて起動する場合は、[Getting Started](https://wiki.seeedstudio.com/ja/Edge_Box_introduction/) Wikiを参照してください。
また、[Node-REDの入門ガイド](https://wiki.seeedstudio.com/ja/Edge-Box-Getting-Started-with-Node-Red/)も用意しています。このガイドを事前に確認することをお勧めします。

## EdgeBoxをMQTTブローカーとして設定する

- **ステップ 01** : EdgeBox RPi 200にSSHまたはVNCで接続し、Raspberry Pi OSを更新します：
```sh
sudo apt update
```
- **ステップ 02** : 次に、Mosquittoをインストールします。ターミナルを開き、以下のコマンドを実行してください：

```sh
sudo apt-get install mosquitto 
```

- **ステップ 03** : 次に、Mosquittoコマンドラインクライアントをインストールします。ターミナルで以下のコマンドを実行してください：

```sh
sudo apt-get install mosquitto-clients -y
```
- **ステップ 04** : MQTTブローカーのインストールが完了したら、設定ファイルを調整する必要があります。デフォルトの設定ファイルは`/etc/mosquitto/mosquitto.conf`にあります。このファイルにアクセスして変更するには、ターミナルで以下のコマンドを実行してnanoエディタを使用します：

```sh
sudo nano /etc/mosquitto/mosquitto.conf
```

設定ファイル内で、以下の行を使用してデフォルトの設定を無効にします：

```sh
include_dir /etc/mosquitto/conf.d
```
を

```sh
#include_dir /etc/mosquitto/conf.d
```
に変更します。

次に、匿名ユーザーがブローカーに接続することを禁止するポリシーを追加します：

```sh
allow_anonymous false
```

パスワードを安全に保存するために、以下のようにファイルの場所を指定します：

```sh
password_file /etc/mosquitto/pwfile
```
その後、リスニングポートを1883に設定するために以下を追加します：

```sh
listener 1883
```
Ctrl+Sを押して変更を保存し、Ctrl+Xでエディタを終了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttconfig.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 05** : MQTTクライアントにアクセスを許可するためのユーザー名とパスワードを設定するか、既存のパスワードをリセットするには、ターミナルで以下のコマンドを使用します：

```sh
sudo mosquitto_passwd -c /etc/mosquitto/pwfile <username>
```
ユーザー名とパスワードを生成した後、EdgeBoxを再起動します：

```sh
sudo reboot
```

Mosquittoブローカーを起動するには、ターミナルで以下のコマンドを入力します：

```sh
sudo systemctl start mosquitto
```
`sudo systemctl status mosquitto`   Mosquittoブローカーが実行中かどうかを確認する

`sudo systemctl stop mosquitto`     Mosquittoブローカーを停止する

`sudo systemctl restart mosquitto`  Mosquittoブローカーを再起動する

`sudo systemctl enable mosquitto`   システム起動時にMosquittoブローカーを自動的に起動するように設定する

## 接続テスト

- **ステップ 01** : 新しい SSH セッションまたはターミナルを開き、以下のコマンドを実行してトピックにサブスクライブします。

```sh
mosquitto_sub -h localhost -t test -u <USER> -P <PASSWORD>
```
 - **ステップ 02** : 別の SSH セッションまたはターミナルで、以下のコマンドを実行して同じトピックにメッセージを公開します。ユーザー名とパスワードを適切に入力してください。

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!" -u <USER> -P <PASSWORD>
```

最初の SSH セッションウィンドウで `mosquitto_sub` コマンドを実行した場所に、「Hello, world!」というメッセージが表示されるはずです。ユーザー名とパスワードを適切に入力してください。



## フローの編集

**MQTT in ノード**

MQTT-in ノードは MQTT トピックにサブスクライブし、ブローカーからメッセージを受信します。サブスクライブしているトピックにメッセージが公開されると、MQTT-in ノードがアクティブになり、受信したメッセージをフロー内の次のノードに転送してさらに処理します。

- **ステップ 01** Node-RED パレットから MQTT-in ノードをドラッグ＆ドロップしてキャンバスに配置します。
- **ステップ 02** MQTT-in ノードをダブルクリックして設定ダイアログを開きます。
- **ステップ 03** 設定ダイアログで以下のフィールドを設定します：
  - **Server**: ブローカーの詳細が事前に入力されていることを確認します。入力されていない場合は、鉛筆アイコンをクリックしてブローカーの IP アドレス、ユーザー名、パスワードを追加します。

  - **Action**: 単一のトピックにサブスクライブするか、動的サブスクリプションを使用するかを選択します。動的サブスクリプションの場合、関数ノードや他の処理ノードを使用してメッセージペイロードから目的の MQTT トピックを抽出します。ここでは、単一のトピックにサブスクライブします。
  - **Topic**: サブスクライブしたい MQTT トピックを入力します。
  - **QoS**: メッセージ配信のための希望する QoS（Quality of Service）レベル（0、1、または 2）を選択します。
  - **Name**: 必要に応じて、ノードに意味のある名前を付けます。

- **ステップ 04** 設定を保存するために「Done」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/connection.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttin.PNG" style={{width:600, height:'auto'}}/></div>

**MQTT-out ノード**

MQTT-out ノード（MQTT 出力）は、MQTT トピックにメッセージを公開するために使用されます。公開するメッセージのトピックとペイロードを設定でき、ペイロードは静的なものでも、フロー内の他のノードからのデータに基づいて動的に生成されたものでも構いません。

  - **ステップ 01** Node-RED パレットから MQTT-out ノードをドラッグ＆ドロップしてキャンバスに配置します。

  - **ステップ 02** MQTT-out ノードをダブルクリックして設定ダイアログを開きます。

  - **ステップ 03** 設定ダイアログで、サーバーフィールド横の鉛筆アイコンをクリックして新しいブローカー設定を作成します。

  - **ステップ 04** MQTT ブローカー設定を編集し、サーバーフィールドにブローカーのアドレス、ポート、および必要に応じて認証情報（例：ユーザー名とパスワード）を追加します。

  - **ステップ 05** ブローカー設定を保存するために「Done」をクリックします。

  - **ステップ 06** 設定ダイアログで以下のフィールドを設定します：

    - **Topic**: メッセージを公開したい MQTT トピックを入力します。
   
    - **QoS**: メッセージ配信のための希望する QoS（Quality of Service）レベル（0、1、または 2）を選択します。
   
    - **Retain**: 公開されたメッセージをブローカーに保持するかどうかを選択します（true または false）。
   
    - **Name**: 必要に応じて、ノードに意味のある名前を付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqttout.PNG" style={{width:600, height:'auto'}}/></div>

  - **ステップ 07** 設定を保存するために「Done」をクリックします。

メッセージを一定の間隔で注入するために inject ノードを使用し、公開されたメッセージを確認するために debug ノードを使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/debugnode.PNG" style={{width:600, height:'auto'}}/></div>

以下のグラフィカルな表現を参照して、MQTT-in、MQTT-out、debug、および inject ノードをどのように接続し、設定するかを理解してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/mqtt-edgebox.gif" style={{width:800, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>