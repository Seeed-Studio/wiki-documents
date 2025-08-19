---
description: reComputer R1000 に MQTT をインストールし、Node-RED でテストする方法を学びます。MQTT は IoT アプリケーションに最適な軽量メッセージングプロトコルであり、不安定なネットワークでも効率的でリアルタイムなデータ交換を可能にします。Node-RED と統合することで、エッジデバイスと中央サーバー間のシームレスな接続が実現し、エッジでのデータ伝送と処理を最適化します。

title: reComputer R1000 と Node-RED および MQTT
keywords:
  - エッジコントローラー
  - reComputer R1000
  - Node-RED
  - MQTT
image: https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png
slug: /ja/recomputer_r1000_nodered_mqtt
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

**MQTT (Message Queuing Telemetry Transport)** は、効率性と低帯域幅要件のために IoT (モノのインターネット) アプリケーションに最適な軽量メッセージングプロトコルです。このプロトコルは、パブリッシュ-サブスクライブモデルを通じてデバイス間の通信を促進し、不安定なネットワーク上でもリアルタイムのデータ交換を可能にします。Node-RED を使用して MQTT を統合することで、エッジデバイスと中央サーバーまたは他のデバイス間のシームレスな接続が可能になり、効率的なデータ伝送と処理が促進されます。reComputer R1000 エッジコントローラーは、MQTT をネイティブにサポートすることで、MQTT ブローカーを直接 reComputer R1000 にインストールできるため、追加のハードウェアゲートウェイが不要になります。これにより、複雑さが軽減され、遅延が最小化され、信頼性が向上します。データは外部の仲介者に依存せずにエッジで処理および実行されるため、IoT システムアーキテクチャが最適化されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png" style={{width:800, height:'auto'}}/></div>

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

[Node-RED の入門ガイド](https://wiki.seeedstudio.com/ja/recomputer_r1000_getting_statrted_node_red/) を用意しています。このガイドを進める前に確認することをお勧めします。

## reComputer R1000 を MQTT ブローカーとしてセットアップする

- **ステップ 01** : reComputer R1000 に SSH または VNC で接続し、Raspberry Pi OS を更新します:
```sh
sudo apt update
```
- **ステップ 02** : 次に、Mosquitto をインストールします。ターミナルを開き、以下のコマンドを実行してください:

```sh
sudo apt-get install mosquitto 
```

- **ステップ 03** : 次に、Mosquitto コマンドラインクライアントをインストールします。ターミナルで以下のコマンドを実行してください:

```sh
sudo apt-get install mosquitto-clients -y
```
- **ステップ 04** : MQTT ブローカーのインストールが完了したら、設定ファイルを調整する必要があります。デフォルトの設定ファイルは `/etc/mosquitto/mosquitto.conf` にあります。このファイルにアクセスして変更するには、ターミナルで以下のコマンドを実行して nano エディタを使用します:

```sh
sudo nano /etc/mosquitto/mosquitto.conf
```

設定ファイル内で、以下の行を使用してデフォルトの設定を無効にします:

```sh
include_dir /etc/mosquitto/conf.d
```
を

```sh
#include_dir /etc/mosquitto/conf.d
```
に変更します。

次に、匿名ユーザーがブローカーに接続することを禁止するポリシーを強制するために、以下の行を追加します:

```sh
allow_anonymous false
```

パスワードを安全に保存するために、以下の行を追加してファイルの場所を指定します:

```sh
password_file /etc/mosquitto/pwfile
```
次に、リスニングポートを 1883 に設定するために以下を追加します:

```sh
listener 1883
```
Ctrl+S を押して変更を保存し、Ctrl+X でエディタを終了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttconfig.PNG" style={{width:800, height:'auto'}}/></div>

- **ステップ 05** : MQTT クライアントにアクセスを許可するためのユーザー名とパスワードを設定するか、既存のパスワードをリセットするには、ターミナルで以下のコマンドを使用します:

```sh
sudo mosquitto_passwd -c /etc/mosquitto/pwfile <username>
```
ユーザー名とパスワードを生成した後、reComputer R1000 を再起動します:

```sh
sudo reboot
```

Mosquitto ブローカーを起動するには、ターミナルで以下のコマンドを入力します:

```sh
sudo systemctl start mosquitto
```
`sudo systemctl status mosquitto`   Mosquitto ブローカーが実行中かどうかを確認する

`sudo systemctl stop mosquitto`     Mosquitto ブローカーを停止する

`sudo systemctl restart mosquitto`  Mosquitto ブローカーを再起動する

`sudo systemctl enable mosquitto`   システム起動時に Mosquitto ブローカーを自動的に起動するように設定する

## 接続テスト

- **ステップ 01** : 新しい SSH セッションまたはターミナルを開き、以下のコマンドを実行してトピックにサブスクライブします。

```sh
mosquitto_sub -h localhost -t test -u <USER> -P <PASSWORD>
```
- **ステップ 02** : 別の SSH セッションまたはターミナルで、以下のコマンドを実行して同じトピックにメッセージを公開します。ユーザー名とパスワードを適切に入力してください。

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!" -u <USER> -P <PASSWORD>
```

最初の SSH セッションウィンドウで mosquitto_sub コマンドを実行した場所に、「Hello, world!」というメッセージが表示されるはずです。ユーザー名とパスワードを適切に入力してください。

## フローの編集

**MQTT-in ノード**

MQTT-in ノードは、MQTT トピックにサブスクライブし、ブローカーからメッセージを受信します。サブスクライブしたトピックにメッセージが公開されると、MQTT-in ノードがアクティブになり、受信したメッセージをフロー内の次のノードに転送してさらに処理を行います。

- **ステップ 01** Node-RED のパレットから MQTT-in ノードをドラッグ＆ドロップしてキャンバスに配置します。
- **ステップ 02** MQTT-in ノードをダブルクリックして設定ダイアログを開きます。
- **ステップ 03** 設定ダイアログで以下のフィールドを設定します：
  - **サーバー**: ブローカーの詳細が事前に入力されていることを確認します。入力されていない場合は、鉛筆アイコンをクリックしてブローカーの IP アドレス、ユーザー名、パスワードを追加します。
  - **アクション**: 単一のトピックにサブスクライブするか、動的サブスクリプションを使用するかを選択します。動的サブスクリプションの場合、関数ノードや他の処理ノードを使用してメッセージペイロードから必要な MQTT トピックを抽出します。ここでは、単一のトピックにサブスクライブします。
  - **トピック**: サブスクライブしたい MQTT トピックを入力します。
  - **QoS**: メッセージ配信のための希望する QoS（Quality of Service）レベル（0、1、または 2）を選択します。
  - **名前**: 必要に応じて、ノードに意味のある名前を付けます。

- **ステップ 04** 設定を保存するために「完了」をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/connection.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttin.PNG" style={{width:600, height:'auto'}}/></div>

**MQTT-out ノード**

MQTT-out ノード（MQTT 出力）は、MQTT トピックにメッセージを公開するために使用されます。公開するメッセージのトピックとペイロードを設定できます。ペイロードは静的なものでも、フロー内の他のノードからのデータに基づいて動的に生成されたものでも構いません。

- **ステップ 01** Node-RED のパレットから MQTT-out ノードをドラッグ＆ドロップしてキャンバスに配置します。

- **ステップ 02** MQTT-out ノードをダブルクリックして設定ダイアログを開きます。

- **ステップ 03** 設定ダイアログで、サーバーフィールド横の鉛筆アイコンをクリックして新しいブローカー設定を作成します。

- **ステップ 04** MQTT ブローカーの設定を編集し、サーバーフィールドにブローカーのアドレス、ポート、および必要に応じて認証情報（例：ユーザー名とパスワード）を追加します。

- **ステップ 05** ブローカー設定を保存するために「完了」をクリックします。

- **ステップ 06** 設定ダイアログで以下のフィールドを設定します：

  - **トピック**: メッセージを公開したい MQTT トピックを入力します。
  
  - **QoS**: メッセージ配信のための希望する QoS（Quality of Service）レベル（0、1、または 2）を選択します。
  
  - **保持**: ブローカーに公開されたメッセージを保持するかどうかを選択します（true または false）。
  
  - **名前**: 必要に応じて、ノードに意味のある名前を付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttout.PNG" style={{width:600, height:'auto'}}/></div>

- **ステップ 07** 設定を保存するために「完了」をクリックします。

インジェクトノードを使用して一定間隔でメッセージを注入し、デバッグノードを使用して公開されたメッセージを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/debugnode.PNG" style={{width:600, height:'auto'}}/></div>

以下のグラフィカルな表現を参照して、MQTT-in、MQTT-out、デバッグ、およびインジェクトノードをどのように接続および設定するかを理解してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqtt-edgebox.gif" style={{width:800, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>