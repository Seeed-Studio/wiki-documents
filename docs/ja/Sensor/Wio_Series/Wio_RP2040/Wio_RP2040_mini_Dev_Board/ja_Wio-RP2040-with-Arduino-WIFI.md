---
title: Wio RP2040 mini Dev Board with Arduino
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-RP2040-with-Arduino-WIFI/
slug: /ja/Wio-RP2040-with-Arduino-WIFI
last_update:
  date: 05/15/2025
  author: gunengyu
---


# **Arduino搭載Wio RP2040 mini開発ボード**

ここでは、Wio RP2040 mini Dev Boardを使用して、Arduinoを介してMQTTおよびSocketを通じてデータを送信します。

## **ハードウェア**

必要な材料

- [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) x1
- コンピュータ x1
- USB Type-Cケーブル x1

:::tip
    一部のUSBケーブルは電力供給のみ可能で、データ転送ができない場合があります。USBケーブルを持っていない場合や、使用しているUSBケーブルがデータ転送可能かどうかわからない場合は、[seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)を確認してください。
:::
- ステップ1. Wio RP2040 mini Dev BoardとType-Cケーブルを準備します。
- ステップ2. ボードをコンピュータに接続する際に、**「boot」ボタンを押し続けます**。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)

- ステップ3. 接続後、コンピュータにディスクが表示されるか確認します。

すべてが正常に動作していれば、Wio RP2040 mini Dev Boardの赤い電源LEDが点灯し、コンピュータにディスクが表示されるはずです。

## **ソフトウェア**

コードをアップロードしてデータを送信する前に、まずサーバーを設定する必要があります。

### **MQTTで通信する**

MQTTは、クライアント-サーバー型のパブリッシュ/サブスクライブ型メッセージングトランスポートプロトコルです。クライアントはパブリッシャー、サブスクライバー、またはその両方として使用できます。

#### **MQTTサーバーの設定**

[MQTTXサーバーソフトウェア](https://github.com/emqx/MQTTX/)をダウンロードしてコンピュータにインストールし、MQTTサーバーを設定します。国や地域によってウェブサイトからサーバーをダウンロードできない場合は、自分でMQTTサーバーを準備してください。

---

このプロジェクトでは、無料サーバー「mqtt.p2hp.com」を使用します。

**オンラインサーバー**

- アドレス: mqtt.p2hp.com
- ポート: 1883 (TCP), 8083 (WebSocket)
- タイプ: EMQ
- MQTT V3.1.1/V5.0互換

---

MQTTXソフトウェアに入り、新しい接続を作成します。名前、サーバー、ポート、トピックを入力し、「Connect」をクリックしてサーバーに接続します。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png)

接続が成功すると、ソフトウェアの右上にポップアップが表示されます。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png)

次に、以下のトピックとメッセージを設定します。このプロジェクトでは、MQTTを使用してWio RP2040 mini Dev Boardでメッセージを受信または送信します。

「トピック」に「temperature」と入力します。

:::note
    ここで記入する「トピック」は非常に重要です。パブリッシャーまたはサブスクライバーは、トピックが一致しない限りデータを送信できません。コードをアップロードするときにさらに詳しく理解できます。
:::
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window5.png)

準備が完了し、MQTTサーバーが設定されました。次にコードをアップロードします。

#### **MQTTを使用したArduinoコード**

:::note
    Arduinoを初めて使用する場合は、[Arduinoの始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::
- **ステップ1. Arduinoソフトウェアをインストールする**

<p style={{}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

**Arduinoアプリケーションを起動する**

以前にダウンロードしたArduinoアプリケーション（arduino.exe）をダブルクリックします。

:::note
    Arduinoソフトウェアが異なる言語で読み込まれる場合は、設定ダイアログで変更できます。詳細は[Arduinoソフトウェア（IDE）ページ](https://www.arduino.cc/en/Guide/Environment#languages)を参照してください。
:::
- **ステップ2. MQTTの例をダウンロードして開く**

[MQTT.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/MQTT.ino)をダウンロードして開くことができます。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window.png)

- **ステップ3. Arduino IDEにWio RP2040 mini Dev Boardを追加する**

**ファイル > 設定**をクリックし、以下のURLを追加ボードマネージャーURLに入力します：

https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window2.png)

**ツール-> ボード-> ボードマネージャー...**をクリックし、検索欄に「**XIAO RP2040**」と入力します。「Seeed XIAO RP2040」を見つけてインストールします。

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl2.png)

- **ステップ4. 対応するボードを選択する**

ボードをインストールした後、**ツール-> ボード**をクリックし、「**Wio RP2040 Mini Dev Board**」を見つけて選択します。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png)

ボードがコンピュータに接続されると、最初のアップロード時にコンピュータが**.uf2ファイル**を書き込むため、ポートを選択する必要は**ありません**。その後、自動的にポートが選択されます。

- **ステップ5. プログラムをアップロードする**

コードをアップロードし、MQTTXを開いて結果を確認できます。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window6.png)

- **さらに**

MQTTを介してメッセージを送信すると、トピックが一致している限り、Arduinoのシリアルモニターで確認できます。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window16.png)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window8.png)

### **Socketで通信する**

次に、コンピュータを使用してTCPサーバーを構築し、Socketを介してメッセージを送受信してみます。ここで使用するソフトウェアは[NetAssist](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/NetAssist.exe)です。

#### **TCPサーバーの設定**

- ダウンロードした「.exe」ファイルをダブルクリックしてNetAssistを開きます。

- 左上で「TCP Server」を選択し、「Protocol」を設定します。

- 以下の「Local host addr」と「Local host port」を入力してください。

- すべての設定が完了したら、「Open」をクリックしてサーバーに入ります。

:::note
    **「Local host addr」** と **「Local host port」** は、MQTTの**「topic」**と同様に重要です。これらのパラメータがコードと一致していない場合、メッセージを受信することはできません。
:::
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window14.png)

準備が完了し、MQTTサーバーが設定されました。次にコードをアップロードします。

#### **Socketを使用したArduinoコード**

- **ステップ1. Socketの例をダウンロードして開く**

[Socket.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Socket.ino)をこちらからダウンロードして開いてください。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window10.png)

- **ステップ2. 対応するボードを選択**

ボードをインストールした後、**Tools-> Board**をクリックし、「**Wio RP2040 Mini Dev Board**」を見つけて選択してください。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png)

ボードがコンピュータに接続されると、最初のアップロード時にコンピュータが**.uf2ファイル**をボードに書き込むため、**ポートを選択する必要はありません**。その後、自動的にポートが選択されます。

- **ステップ3. プログラムをアップロード**

コードをアップロードし、NetAssistを開いて結果を確認できます。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window13.png)

- **さらに**

NetAssistを通じてメッセージを送信すると、NetAssist上で確認できる場合があります。ただし、両者の「Local Host Addr」と「Local Host Port」が一致している必要があります。

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window15.png)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window11.png)

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社の製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>