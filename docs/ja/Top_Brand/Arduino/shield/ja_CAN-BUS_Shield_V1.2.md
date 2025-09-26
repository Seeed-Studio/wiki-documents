---
description: CAN-BUSシールド V1.2
title: CAN-BUSシールド V1.2
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/CAN-BUS_Shield_V1.2
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: CAN-BUSシールド V1.2
category: シールド
bzurl: https://www.seeedstudio.com/CAN-BUS-Shield-V1.2-p-2256.html
oldwikiname: CAN-BUS_Shield_V1.2
prodimagename: Can_bus_shield_all.jpg
surveyurl: https://www.research.net/r/can_bus_shield
sku: 113030021
--- -->

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Can_bus_shield_all.jpg)

**CAN-BUS**は、長距離通信、適度な通信速度、高い信頼性のため、一般的な産業用バスとして使用されています。これは、現代の工作機械、例えば自動車診断バスなどでよく見られます。

このCAN-BUSシールドは、**MCP2515** CANバスコントローラー（SPIインターフェース付き）と**MCP2551** CANトランシーバーを採用しており、Arduino/SeeeduinoにCAN-BUS機能を提供します。**OBD-II**変換ケーブルを追加し、OBD-IIライブラリをインポートすることで、車載診断デバイスやデータロガーを構築する準備が整います。

**バージョン**

このドキュメントは以下の製品バージョンに適用されます：

| バージョン | リリース日 | 購入方法 |
|------------|------------|----------|
| CAN BUSシールド V1.0 | 2012年10月14日 | ![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png) |
| CAN BUSシールド V1.1 | 2013年8月10日 | ![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png) |
| CAN BUSシールド V1.2 | 2015年1月5日 | ![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png) |
| CAN BUSシールド V2.0 | 2017年8月1日 | <a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a> |

**CAN BUSシールド V1.2の新機能**

- PCBAの裏面にパッドを追加
- 終端抵抗を120オームに変更

**代替選択肢**

もしプロジェクトがスペース制限を受けており、CAN-BUS以外の機能が不要な場合は、Arduino互換でよりコンパクトかつコスト効率の高いGrove CAN-BUSモジュールがあります。詳細は[こちら](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html)をご覧ください。

[![](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/canbus_arduino.png)](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html)

**このシールドを車に接続したい場合**

車のデータを読み取ったり制御したりしたい場合は、OBD>DB9ケーブルが利用可能です。[このケーブル](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)を使用すると、OBDコネクタとDB9コネクタへの接続が簡単になります。このケーブルは、OBDコネクタを備えたすべてのデバイスで動作します。電源スイッチを追加することで、満足感のあるクリック感が得られます。

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/obd_cable.jpg)](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)

**USB-CANアナライザー**

CANバスをデバッグするためのCANバスアナライザーが必要な場合は、この[USB-CANアナライザー](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)をお勧めします。

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/usb_can.jpg)](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

## 特徴

-----

- CAN V2.0Bを実装し、最大**1 Mb/s**の速度をサポート
- SPIインターフェースの速度は最大**10 MHz**
- 標準（**11ビット**）および拡張（**29ビット**）データおよびリモートフレーム
- 優先順位付きメッセージストレージを備えた2つの受信バッファ
- 工業標準のDB-9コネクタ
- LEDインジケータ

:::note
CAN BUS ShieldはArduino UNO（ATmega328）、Arduino Mega（ATmega1280/2560）、Arduino Leonardo（ATmega32U4）で正常に動作します。
:::

## ハードウェア概要

-----

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_1.png)

1. **DB9インターフェース** - DBG-OBDケーブルを介してOBDIIインターフェースに接続します。
2. **V_OBD** - OBDIIインターフェース（DB9から）から電力を供給します。
3. **LEDインジケータ**:
    - **PWR**: 電源
    - **TX**: データ送信時に点滅
    - **RX**: データ受信時に点滅
    - **INT**: データ割り込み
4. **端子** - CAN_HおよびCAN_L
5. **Arduino UNOピンアウト**
6. **シリアルGroveコネクタ**
7. **I2C Groveコネクタ**
8. **ICSPピン**
9. **IC** - MCP2551、高速CANトランシーバー（[データシート](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)）
10. **IC** - MCP2515、SPIインターフェースを備えたスタンドアロンCANコントローラー（[データシート](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)）

:::caution
1つのネットワークで2つ以上のCAN Bus Shieldを使用する場合は、インピーダンスを考慮する必要があります。
PCB上のP1をナイフで切るか、PCB上のR3を取り外してください。
:::

**ピンマップ**

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/PINMAP.png)

:::note
    FREEピンは他の用途に使用可能です。
:::

**DB9&OBDiiインターフェース**

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/OBD.png)

**CSピン**

V1.2のSPI_CSピンはデフォルトで**D9**に接続されています。**D10**に変更したい場合は、以下の手順に従ってください。

- ステップ1: PCBAの裏側を確認すると、CSという名前のパッドが見つかります。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_pins_setting.png)

- ステップ2: パッド9と中央パッドの間のワイヤを切断します。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/cut%20this%20wire%20with%20box%20cutter.png)

- ステップ3: 中央パッドとパッド10をハンダ付けします。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/sodder%20the%20middle%20pad%20and%20pad%2010.png)

:::caution
ボックスカッターを使用する際は注意してください。自分やPCBAを傷つける可能性があります。
:::

**SPIピン**

SPIピン（SCK、MISO、MOSI）はデフォルトでICSPピンにルーティングされています。ただし、一部のボードではSPIピンがD11〜D13に配置されています。この場合、PCBAに変更を加える必要があります。PCBAの裏側を見ると、MOSI、MISO、SCKという3つのパッドがあり、デフォルトではAに接続されています。必要に応じてBに変更できます。

:::note
Arduino UNO、Arduino Mega、Arduino Leonardo、その他のAVRベースのArduinoボードでは、デフォルト設定で正常に動作します。
:::

:::caution
SPIピンを変更する際は注意してください。自分やPCBAを傷つける可能性があります。
:::

## はじめに

-----
CAN-BUS Shieldの動作を示す簡単な例を以下に示します。この例では、2つのCAN-BUS ShieldとArduinoまたはSeeeduinoが必要です。

:::note
この例は[Arduino IDEバージョン1.6.9](https://www.arduino.cc/download_handler.php?f=/arduino-1.6.9-windows.zip)で構築されています。
:::

**ステップ1: 必要なもの**

|名前|機能|数量|リンク|
|----|--------|---|----|
|CAN-BUS Shield|CAN Bus通信 | 2 | [リンク](https://www.seeedstudio.com/depot/CANBUS-Shield-V12-p-2256.html) |
|Seeeduino V4.2|コントローラー|2|[リンク](https://www.seeedstudio.com/item_detail.html?p_id=2517)|
|ジャンパーワイヤ|接続|2|[リンク](https://www.seeedstudio.com/item_detail.html?p_id=234)|

**ステップ2: ハードウェア接続**

各CAN-BUS ShieldをSeeeduino V4.2に挿入し、2つのCAN-BUS Shieldをジャンパーワイヤで接続します。以下の画像のように接続します。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/connection.png)

:::note
    CAN_HをCAN_Hに、CAN_LをCAN_Lに接続してください。
:::

**ステップ3: ソフトウェア**

[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)の手順に従ってCAN BUS Shieldライブラリをインストールしてください。

以下のボタンをクリックしてライブラリをダウンロードしてください。

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/download_library.png)](https://github.com/Seeed-Studio/CAN_BUS_Shield)

ダウンロードしたライブラリをArduino IDEにインストールしてください。

1つのノード（ノードとはSeeeduino + CAN_BUS Shieldを指します）はマスターとして動作し、もう1つはスレーブとして動作します。マスターはスレーブにデータを継続的に送信します。

:::note
コードがアップロードされる前は、各ノードがマスターとして動作できます。
:::

**送信**の例を開きます（**ファイル > Examples > CAN_BUS_Shield-master > send**）そして**マスター**にアップロードします。
![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/send%20example.png)
**受信確認**の例を開きます（**ファイル > Examples > CAN_BUS_Shield-master > receive_check**）そして**スレーブ**にアップロードします。
![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/receive%20check%20example.png)

**ステップ4: 結果を確認**

Arduino IDEのシリアルモニターを開きます（**スレーブ**）。マスターから送信されたデータを確認できます。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/serial_monitor.png)

## API

-----

### 1. ボーレートの設定

この関数は、CANバスシステムのボーレートを初期化するために使用されます。

利用可能なボーレートは以下の通りです：

```c
#define CAN_5KBPS    1
#define CAN_10KBPS   2
#define CAN_20KBPS   3
#define CAN_25KBPS   4
#define CAN_31K25BPS 5
#define CAN_33KBPS   6
#define CAN_40KBPS   7
#define CAN_50KBPS   8
#define CAN_80KBPS   9
#define CAN_83K3BPS  10
#define CAN_95KBPS   11
#define CAN_100KBPS  12
#define CAN_125KBPS  13
#define CAN_200KBPS  14
#define CAN_250KBPS  15
#define CAN_500KBPS  16
#define CAN_666kbps  17
#define CAN_1000KBPS 18
```

### 2. 受信マスクとフィルタの設定

コントローラチップには **2つの受信マスクレジスタ** と **5つのフィルタレジスタ** があり、ターゲットデバイスからデータを取得することを保証します。これらは、複数のノードを含む大規模なネットワークで特に有用です。

これらのマスクとフィルタレジスタを利用するための2つの関数を提供しています。それらは以下の通りです：

**マスク:**

```c
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**フィルタ:**

```c
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** は使用するレジスタを表します。マスクの場合は 0 または 1 を、フィルタの場合は 0 から 5 を指定できます。
- **ext** はフレームの状態を表します。0 は標準フレーム用のマスクまたはフィルタを意味し、1 は拡張フレーム用を意味します。
- **ulData** はマスクまたはフィルタの内容を表します。

### 3. 受信確認

MCP2515は、受信フレームをソフトウェアで確認するポーリングモードで動作するか、追加のピンを使用してフレーム受信や送信完了を通知することができます。

以下の関数を使用して受信フレームをポーリングします。

```c
INT8U MCP_CAN::checkReceive(void);
```

この関数はフレームが到着した場合に 1 を返し、何も到着しない場合は 0 を返します。

### 4. CAN IDの取得

データが到着した場合、以下の関数を使用して「送信」ノードのCAN IDを取得できます。

```c
INT32U MCP_CAN::getCanId(void);
```

### 5. データ送信

```c
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

この関数はデータをバスに送信するために使用されます。以下のパラメータを含みます：

- **id** はデータの送信元を表します。
- **ext** はフレームの状態を表します。'0' は標準フレームを意味し、'1' は拡張フレームを意味します。
- **len** はこのフレームの長さを表します。
- **data_buf** はこのメッセージの内容です。

例えば、「送信」例では以下のようになります：

```c
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); // メッセージ 'stmp' をバスに送信し、他のデバイスにこれは 0x00 からの標準フレームであることを通知します。
```

### 6. データ受信

以下の関数は「受信」ノードでデータを受信するために使用されます：

```c
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

マスクとフィルタが設定されている条件下では、この関数はマスクとフィルタの要件を満たすフレームのみを取得できます。

- **len** はデータの長さを表します。
- **buf** はデータを格納する場所です。

## 新しいボーレートの生成

以下のように、多くの頻繁に使用されるボーレートを提供しています：

```c
#define CAN_5KBPS    1
#define CAN_10KBPS   2
#define CAN_20KBPS   3
#define CAN_25KBPS   4
#define CAN_31KBPS   5
#define CAN_33KBPS   6
#define CAN_40KBPS   7
#define CAN_50KBPS   8
#define CAN_80KBPS   9
#define CAN_83KBPS   10
#define CAN_95KBPS   11
#define CAN_100KBPS  12
#define CAN_125KBPS  13
#define CAN_200KBPS  14
#define CAN_250KBPS  15
#define CAN_500KBPS  16
#define CAN_666KBPS  17
#define CAN_1000KBPS 18
```

しかし、必要な通信速度が見つからない場合があります。その場合、必要なボーレートを計算するためのソフトウェアを提供しています。

[こちら](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)をクリックしてソフトウェアをダウンロードしてください。このソフトウェアは中国語ですが、使い方は簡単なので問題ありません。

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_BUS_Shield_SetBaud.jpg)

:::note
このソフトウェアはWindowsシステムのみ対応しています。もし開けない場合は、loovee@seeed.ccまでお気軽にお問い合わせください。
:::

ソフトウェアを開き、必要なボーレートを設定し、簡単な設定を行った後、**計算**をクリックしてください。

すると、cfg1、cfg2、cfg3というデータが得られます。

次に、ライブラリにコードを追加する必要があります。

**mcp_can_dfs.h**を開き、約272行目に以下のコードを追加してください：

```c
#define MCP_16MHz_xxxkBPS_CFG1 (cfg1)    // xxxは必要なボーレート
#define MCP_16MHz_xxxkBPS_CFG2 (cfg2)
#define MCP_16MHz_xxxkBPS_CFG3 (cfg3)
```

次に、約390行目に以下のコードを追加してください：

```c
#define CAN_xxxKBPS NUM       // xxxは必要なボーレート、NUMは他の通信速度と異なる番号
```

**mcp_can.cpp**を開き、**mcp2515_configRate**関数（約190行目）に以下のコードを追加してください：

```c
case (CAN_xxxKBPS):
    cfg1 = MCP_16MHz_xxxkBPS_CFG1;
    cfg2 = MCP_16MHz_xxxkBPS_CFG2;
    cfg3 = MCP_16MHz_xxxkBPS_CFG3;
    break;
```

これで必要なボーレートを使用できるようになります。また、新しい通信速度を使用した場合は、GitHubでプルリクエストを送ってください。他のユーザーのためにライブラリに追加します。

## プロジェクト

-----

CAN-BUSシールドを使用して素晴らしいプロジェクトを作りたい場合、以下のプロジェクトを参考にしてください。

### Volkswagen CAN BUS ゲーミング

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project1.JPG)

PCでリアルなダッシュボードを使った車/トラックシミュレーターをプレイしたいと思ったことはありませんか？私もです！Arduino UnoとSeeed CAN Bus Shieldを使用して、VW Polo 6RのダッシュボードをCAN Busで制御しようとしています。Silas Parkerにインスパイアされました。SeppとIs0-Mickの素晴らしいサポートに感謝します！

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png)](https://community.seeedstudio.com/project_detail.html?id=291)

### 車両のCAN-BUSをハックする

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project2.jpg)

現代の車両はすべてCAN-BUS（Controller Area Network）を搭載しています。車内のさまざまなデバイスからバッテリーへの膨大な配線を使用する代わりに、より賢いシステムを利用しています。

すべての電子機能はTIPM（完全統合型電力モジュール）に接続されています。例えば、ドアをロックするソレノイドや窓を巻き上げるミニモーターなどです。

各ノード（例：窓や電動ドアロックを制御するスイッチポッド）からメッセージがCANに送信されます。TIPMが有効なメッセージを検出すると、ドアをロックしたり、ライトを点灯したりといった動作を行います。

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Hack-your-vehicle-CAN-BUS-with-Arduino-and-Seeed-C/)

## FAQ

------
**Q1: 他のCANデバイスからデータを取得できません。**

- 接続が正しいか確認してください。
- ボーレートの設定が正しいか確認してください。

**Q2: シリアルモニターに「Init Fail」と表示されます。**

- CSピンの設定がコードと一致しているか確認してください。CAN Bus Shield V1.1/1.2の場合、CSピンはD9に接続されています。それ以外の場合はD10に接続されています。

**Q3. その他の問題がある場合、技術サポートはどこで受けられますか。**

- [Seeed Forum](https://forum.seeedstudio.com/)に質問を投稿することができます。

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

-----

- **【PDF】**[CAN-BUS Shield V1.2 回路図](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2.pdf)
- **【Eagle】**[CAN-BUS Shield V1.2 の回路図](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2_sch_pcb.zip)
- **【ライブラリ】**[CAN-BUS Shield用Arduinoライブラリ](https://github.com/Seeed-Studio/CAN_BUS_Shield)
- **【データシート】**[MCP2515データシート](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)
- **【データシート】**[MCP2551データシート](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)
- **【デモ】**[OBDデモ](https://github.com/Seeed-Studio/CANBUS_SHIELD_OBD_RECIPLE)
- **【ツール】**[MCP2515ボーレートツール](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)
- **【ツール】**[USB-CANアナライザー](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)
- **【ケーブル】**[DB9 to OBD2ケーブル](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>