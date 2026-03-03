---
description: XBeeシリーズ2とSeeed製品を使用したZigbeeネットワーキング
title: XBeeシリーズ2とSeeed製品を使用したZigbeeネットワーキング
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- 1. このステップバイステップのチュートリアルは、[Seeeduino](/ja/Seeeduino_V2.2 "Seeeduino V2.2") / Arduino、[XBee® Shield](/ja/XBee_Shield "XBee® Shield")、[UartSBee_V3.1](/ja/UartSBee_V3.1 "UartSBee_V3.1")、[Grove - XBee Carrier](/ja/Grove-XBee_Carrier "Grove - XBee Carrier")、Seeeduino Stalker v2.0といった製品を使用してXBee ZBモジュールを活用する方法を学ぶために作成されました。これらの製品は、XBee ZBモジュールを扱う際の作業を簡単にします。 -->

2. XBee ZBモジュールはさまざまな方法で使用できます。また、多くの設定パラメータを提供します。このチュートリアルでは、基本的な設定を簡単な手順で紹介しています。
3. <font color="darkred"> アプリケーションにどの設定を使用するかを決定する前に、チュートリアル全体を少なくとも一度は通読してください。 </font>

4. このチュートリアルでは、**XBeeシリーズ2**モジュールを使用しており、旧シリーズ1モジュールは使用していません。当社のBazaarではシリーズ2モジュールを販売しています。

## Zigbeeモジュールとネットワーク

**Zigbee**は、個人エリアネットワーク(**PAN**)向けの**IEEE 802**標準に基づいた低消費電力、短距離無線デバイスのための標準です。Zigbeeモジュールは、免許不要のISM（産業・科学・医療）バンドで動作します。Zigbeeデバイスは、ピアツーピア、ポイントツーマルチポイント、およびメッシュ通信が可能です。これらは、消費電力が重要な要素である組み込みシステム向けに便利な低消費電力無線ソリューションを提供します。Zigbeeネットワークは、**コーディネータ**、**ルーター**、**エンドデバイス**の3種類の異なるZigbeeデバイスで構成されます。各ネットワークには16ビットの**PAN ID**が割り当てられます。Zigbeeネットワーク内のすべてのデバイスには、1つのPAN IDが割り当てられます。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Zigbee_Network_Topology.jpg)

### デバイスタイプ

* **ZigBeeコーディネータ (ZC)**: 最も高機能なデバイスであり、コーディネータはネットワークツリーのルートを形成し、他のネットワークへのブリッジを行う可能性があります。各ネットワークには1つのZigBeeコーディネータが必要です。これはネットワークを最初に開始するデバイスだからです。コーディネータはRFチャネルとPAN IDを選択して個人エリアネットワーク(PAN)を開始します。ZCはまた、ルーターやエンドデバイスがPANに参加することを許可します。ZCは、ネットワークに関する情報を保存することができ、セキュリティキーの信頼センターおよびリポジトリとしても機能します。

* **ZigBeeルーター (ZR)**: アプリケーション機能を実行するだけでなく、ルーターは中間ルーターとして機能し、他のデバイスからのデータを中継することができます。ルーターは、**ZC**との接続を確立した後にのみ動作を開始できます。

* **ZigBeeエンドデバイス (ZED)**: 親ノード（コーディネータまたはルーター）と通信するための最低限の機能のみを備えています。他のデバイスからのデータを中継することはできません。この関係により、ノードは大部分の時間をスリープ状態にすることができ、長いバッテリー寿命を実現します。ZEDは、センサーデータを送信する前にルーターと同様にPANに参加する必要があります。ZEDは最小限のメモリを必要とするため、ZRやZCよりも製造コストを抑えることができます。

### デバイスアドレッシング

* デバイスがZigbeeネットワークに接続すると、**16ビットのネットワークアドレス**が割り当てられます。

* 各デバイス（ノード）には**64ビットのデバイスアドレス**があります。XBee ZBモジュールでは、この64ビットアドレスは製造元によって割り当てられた一意の永久番号です。これはデバイスのシリアル番号でもあります。

Zigbeeデバイス間でデータを送信する際には、16ビットのネットワークアドレスと64ビットのデバイスアドレスを指定して送信されます。

## Zigbeeモジュールの入手

**Seeedstudio Bazaar**では現在、[digi](http://www.digi.com/)の2種類のZigbeeモジュールを販売しています：

*   [XBee® RF Modules ZNet 2.5 RF Module](https://www.seeedstudio.com/depot/xbee-pro-series2-rf-module-p-418.html?cPath=139_142) と

*   [XBee® Pro Series 2 RF module](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-rf-modules-znet-25-1-mw-chip-antenna-p-226.html?cPath=139_142)。

[XBee® RF Modules ZNet 2.5 RF Module](https://www.seeedstudio.com/depot/xbee-pro-series2-rf-module-p-418.html?cPath=139_142)モジュールは、**ZNet 2.5ファームウェア**を搭載した**シリーズ2**ハードウェアです。

このチュートリアルでは、**XBee Znet 2.5モジュール**に**XBee ZBファームウェア**を使用します。**XBee ZNet 2.5モジュール**は、[XBee/XBee-PRO ZNet 2.5モジュールをZBモジュールに変換する方法](http://www.digi.com/support/kbase/kbaseresultdetl.jsp?id=3025)に記載されている手順に従うことで、**XBee ZB**ファームウェアにアップグレードできます。この手順は次のセクションでも説明されています。

## XBee ZBハードウェアとピン配置

*   XBee ZBモジュールはチップアンテナ付きで提供されています。

[https://www.seeedstudio.com/depot/images/product/xbee2.jpg](https://www.seeedstudio.com/depot/images/product/xbee2.jpg)

*   XBee ZBモジュールのピン配置は以下の通りです。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_PinOut.jpeg)

## UartSBee_V3.1またはGrove - XBee Carrierを使用したXBeeファームウェアのアップグレード

### USB-to-Serialポート用ドライバのインストール

<table>
<tr>
<th>**UartSBee_V3.1に接続されたXBee ZBの設定**</th>
<th>**Grove - XBee Carrierに接続されたXBee ZBの設定**</th>
</tr>
<tr>
<td>![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_UartSBee.jpg)</td>
<td>![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_Stem-XBee-Carrier.jpg)</td>
</tr></table>

*   **FT232RL**チップ用の必要なドライバを以下の手順でインストールしてください：

#### **Windows**

*   Windows OSでは、デバイス（UartSBeeまたはGrove - XBee Carrier）を初めて接続すると、ドライバのインストールを求められる場合があります。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Detected_Windows.JPG)

**FTDI**のウェブサイトから**Virtual COMポート**ドライバをダウンロードしてインストールしてください：

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

*   ドライバをインストールするためのウィザードが開きます。「リストまたは特定の場所からインストール」を選択してください。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_1.JPG)

*   ダウンロードしたドライバのパスを選択してください。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_2.JPG)

*   未署名のドライバをダウンロードした場合、以下のウィンドウが表示されます。「続行」をクリックしてください。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_2.1.JPG)

*   **UartSBee**ドライバが正常にインストールされました。Windowsは**FT232RL**に**COM**ポート名（例：**COM10**、**COM11**など）を割り当てます。デバイスマネージャで正確な名前を確認してください。この場合、**COM16**がUartSBeeに割り当てられています。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_3.JPG)

##### **GNU/Linux**

すべての最新の**GNU/Linux OS**にはFT232RLドライバが含まれています。UartSBeeまたはGrove - XBee Carrierが検出されているか確認するには、**lsusb**コマンドを実行してください。以下のような出力が表示されるはずです。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Lsub.png)

**GNU/Linux**では、デバイス名として**/dev/ttyUSB0**、**/dev/ttyUSB1**などが割り当てられます。

### DigiのX-CTU（XCTU）ソフトウェアの使用

**X-CTU**は、**X**Beeの**C**onfiguration（設定）および**T**est **U**tility（テストユーティリティ）です。主に**Digi**の**XBeeモジュール**を設定し、オンボードMCUファームウェアをアップグレードするために使用されます。また、**AT**コマンドを使用してXBeeモデムと対話するための**シリアルターミナル**も備えています。X-CTUはWindowsアプリケーションですが、[Wine](http://www.winehq.org/)を使用することでGNU/Linuxでも動作することが知られています。

*   [DigiのX-CTUページ](http://www.digi.com/support/productdetl.jsp?pid=3352&amp;osvid=57&amp;s=316&amp;tp=5&amp;tp2=0)からX-CTUをダウンロードしてください。

*   X-CTUをインストールします。

*   X-CTUを開き、PC Settingsタブに移動します。

*   UartSBeeまたはGrove - XBee Carrierに接続されているUSBシリアルポートを選択します。

*   Test / Queryボタンをクリックします。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU1.jpeg)

*   ダイアログボックスに**モデムタイプ**、**モデムファームウェアバージョン**、および**シリアル番号**が表示されます。

*   この場合、XBee ZNet 2.5モデムは**XB24-B**として表示されます。これを**XB24-ZB**ファームウェアにアップグレードする必要があります。

*   Modem Configurationタブを開きます。

*   Download New Versionsボタンをクリックします。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_Update_Firmware.jpeg)

*   以下のダイアログボックスが開きます：

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU-Update_Sources.jpeg)

*   Webボタンをクリックします。これにより、Digiのサーバーからすべてのデバイスファームウェアがダウンロードされます。

* 最新のファームウェアがダウンロードされると、更新の概要が表示されます。これにより、問題なく更新が行われたことが確認できます。このダイアログボックスが表示されない場合は、上記の手順を繰り返してください。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU-Update_Summary.jpeg)

* モデム設定タブを開きます。

* 「Modem Parameters and Firmware」→「Read」ボタンをクリックします。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_ZNet2.5_firmware_detected.jpeg)

* XBee ZNet 2.5 ファームウェア XB24-B が検出され、すべての設定済みパラメータが表示されます。

* また、ファームウェアの**Function Set**が**ZIGBEE ROUTER/END DEVICE AT**であり、バージョンが**1220**であることも示されます。

* **Function Set**は、XBeeモジュールに既にプログラムされている、またはこれからプログラムするファームウェアを決定します。シリーズ2デバイスは、さまざまなモード（**ZC、ZR、ZED**）で使用できます。適切なファームウェアのFunction Setを選択する必要があります。

* 次に、ファームウェアを**XB24-ZB**に更新します。（<font color="redorange">注意：**XB24-B**ファームウェアは使用せず、XBee ZNet 2.5モジュールハードウェアと互換性のある別のファームウェアセットを使用します</font>）

* モデムを**XB24-ZB**として選択します。

* Function Setを**ZIGBEE COORDINATOR AT**として選択します。
    * 注意：**ZIGBEE COORDINATOR AT**は次のセクションで使用するFunction Setの1つです。アプリケーションに適したFunction Setを選択できます。

* 最新バージョンのファームウェアを選択します。このガイド執筆時点では**208C**です。

* 「Write」ボタンをクリックします。これにより、ファームウェアがXBeeモジュールに永久的に書き込まれます。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_ZB_Firmware_Upgrade.jpeg)

## XBee ZBモジュールとPCを使用したワイヤレスUARTデモ

このデモでは、2つのXBeeモジュールを設定し、電源投入時に自動的に接続し、データを継続的に送受信するようにします。このセットアップは、2台のPCまたはシリアルポートを持つ2つのMCUを接続するためのワイヤレスUARTとして使用できます。

<!-- *   2つの [UartSBee_V3.1](/ja/UartSBee_V3.1 "UartSBee_V3.1") または2つの [Grove - XBee Carrier](/ja/Grove-XBee_Carrier "Grove - XBee Carrier") と2つのXBee ZBモジュールを使用します。 -->

* これらのモジュールをPCのシリアルポートに接続し、ドライバがインストールされていることを確認します。

* X-CTUを開き、以下のようにデバイスのUSB-シリアルポートを選択します：

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_1.png)

* 1つのモジュールに**COORDINATOR AT** Function Setファームウェアを、もう1つのモジュールに**ROUTER AT** Function Setファームウェアをプログラムします。常に最新バージョンのファームウェアを使用してください。ファームウェアのプログラム方法については、上記のセクションを参照してください。

* 次に、モデム設定タブを開き、両方のモジュールの宛先アドレスを以下のように設定します：

    * COORDINATORの宛先アドレスHighをROUTERのシリアル番号Highに設定します。

        * COORDINATORの宛先アドレスLowをROUTERのシリアル番号Lowに設定します。

        * ROUTERの宛先アドレスHighをCOORDINATORのシリアル番号Highに設定します。
    * ROUTERの宛先アドレスLowをCOORDINATORのシリアル番号Lowに設定します。

        * これらのパラメータをモジュールに書き込みます。

* パラメータ設定中にPAN IDは変更されませんでした。近くに1つのZigbeeネットワークしかないため、0のままにしました。ただし、両方のモジュールのPAN IDを16ビットの番号に変更することを検討してください。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_2.png)

* 両方のモジュールのターミナルタブを開き、「Show Hex」ボタンをクリックします。

* COORDINATORターミナルにメッセージを入力すると、ワイヤレスでROUTERに送信されます。同様に、ROUTERターミナルに入力されたテキストはCOORDINATORターミナルに送信されます。

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_3.png)

## XBee ZBモジュールとArduinoを使用したワイヤレスUARTデモ

## XBee ZBモジュールを使用したワイヤレスセンサーネットワーク(WSN)デモ

<!-- ### XBee ZBモジュールと[Grove - XBee Carrier](/ja/Grove-XBee_Carrier "Grove - XBee Carrier")を使用したスタンドアロンセンサーノードの設定 -->

<!-- ### XBee ZBモジュール、Seeeduino、および[XBee® Shield](/ja/XBee_Shield "XBee® Shield")を使用したZigbeeコーディネーターの設定 -->

<!-- ### XBee ZBモジュール、[Wifi Bee](/ja/Wifi_Bee "Wifi Bee")、および[Bees Shield](/ja/Bees_Shield "Bees Shield")を使用してSeeeduinoをインターネットゲートウェイとして使用 -->

## 参考文献

* Wikipedia Zigbeeページ - [デバイスの種類](https://en.wikipedia.org/wiki/ZigBee#Device_types) (CC-BY-SA)

## 関連プロジェクト

XBeeを使用して素晴らしいプロジェクトを作りたい場合、以下のプロジェクトを参考にしてください。

### ハミングバード

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Xbee_iot.JPG)

<!-- これはXBeeと[Grove](/ja/Grove_System "Grove System")によって作られた興味深いデモです。 -->

このプロジェクトでは、ZigbeeメッシュとGPRS SIM900カードを使用してサーバーと通信します。サーバーはデータを分析し、ユーザーにリアルタイム情報と予測を提供します。

[<font color="#FF0000">**作ってみたい！**</font>](https://www.seeedstudio.com/recipe/265-hummingbird.html)

### 太陽熱温水ボイラープロジェクト

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Xbee_iot1.JPG)

<!-- これはXBeeと[Grove](/ja/Grove_System "Grove System")によって作られたIoTデモです。 -->

太陽熱温水ボイラーは、無料の太陽エネルギーを使用してお湯を提供するため素晴らしいですが、太陽が十分でない場合や、すでに誰かがお湯を使い切ってしまった場合はどうでしょうか？このプロジェクトは、適切な判断を下すのに役立ちます。お湯がなくなったときに警告し、電気加熱をオンにすることができます。また、いつお風呂やシャワーを浴びることができるかも教えてくれます！

[<font color="#FF0000">**作ってみたい！**</font>](https://www.seeedstudio.com/recipe/168-hot-water-solar-boiler-project.html)

### あなたの素晴らしいプロジェクトを私たちと共有してください

作ることと共有することの精神を持って生まれた、それが私たちが信じる「メイカー」の本質です。

そして、この精神があるからこそ、オープンソースコミュニティは今日のように繁栄しています。

あなたが何者であろうと、何を作ったとしても、ハッカー、メイカー、アーティスト、エンジニアであろうと関係ありません。

自分の作品を他の人と共有し始めるだけで、

あなたはオープンソースコミュニティの一員となり、貢献をしているのです。

今すぐ[Recipe](https://www.seeedstudio.com/recipe/)であなたの素晴らしいプロジェクトを共有し、Seeedのコアユーザーになるチャンスを手に入れましょう。

* コアユーザーとは、Seeed製品に高い関心を持ち、重要な貢献をしている人々のことです。
* 私たちはコアユーザーと協力して新製品を開発します。つまり、コアユーザーはSeeedの新製品を公式発売前に体験する機会を得ることができ、その見返りとして、製品性能やユーザー体験を向上させるための貴重なフィードバックを期待しています。ほとんどの場合、コアユーザーが何か良いアイデアを持っている場合、私たちはハードウェア部品、PCBAサービス、技術サポートを提供します。また、コアユーザーとのさらなる商業的な協力も十分に可能です。

<font color="#FF0000">コアユーザーに関する詳細情報は、recipe@seeed.ccまでメールでお問い合わせください。</font>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>