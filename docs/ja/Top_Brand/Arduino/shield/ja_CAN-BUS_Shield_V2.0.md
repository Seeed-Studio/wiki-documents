---
description: CAN-BUS_Shield_V2.0
title: CAN-BUS Shield V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/CAN-BUS_Shield_V2.0
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/shiyitu1.png" /></div>

**CAN-BUS**は、長距離通信、適度な通信速度、高い信頼性を持つため、一般的な産業用バスです。自動車診断バスなど、現代の工作機械でよく見られます。

このCAN-BUS Shieldは、**MCP2515** CAN Busコントローラー（SPIインターフェース付き）と**MCP2551** CANトランシーバーを採用しており、Arduino/SeeeduinoにCAN-BUS機能を提供します。**OBD-II**変換ケーブルを追加し、OBD-IIライブラリをインポートすることで、車載診断デバイスやデータロガーを構築する準備が整います。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/vehicle-hacking-tools" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_Car_Hacking.png" /></a></p>
</div>

**バージョン**

このドキュメントは以下の製品バージョンに適用されます：

<table align="center">
  <tbody>
  <tr>
    <td><h3>バージョン</h3></td>
    <td><h3>リリース日</h3></td>
    <td><h3>購入方法</h3></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V1.0</h4></td>
    <td><h4>2012年10月14日</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V1.1</h4></td>
    <td><h4>2013年8月10日</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>  
  <tr>
    <td><h4>CAN BUS Shield V1.2</h4></td>
    <td><h4>2015年1月5日</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V2.0</h4></td>
    <td><h4>2017年8月1日</h4></td>
    <td><div class="document"><a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" alt="" width={200} height="auto"/></a>
</div></td>
  </tr>
  </tbody></table>

**代替選択肢**

もしプロジェクトがスペース制限を受けており、CAN-BUS以外の機能が不要な場合、Arduino互換でよりコンパクトかつコスト効率の高いGrove CAN-BUSモジュールがあります。詳細は[こちら](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html)をご覧ください。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/canbus_arduino.png" /></a></p>

**このシールドを車に接続したい場合**

車のデータを読み取ったり制御したい場合、OBD>DB9ケーブルが利用可能です。[このケーブル](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)を使用すると、OBDコネクタとDB9コネクタへの接続が簡単になります。このケーブルはOBDコネクタを備えたすべてのデバイスで動作します。電源スイッチを追加すると、満足のいくクリック感が得られます。

 <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/obd_cable.jpg" /></a></p>

**USB-CANアナライザー**

CAN BusをデバッグするためのCAN Busアナライザーが必要な場合は、この[USB-CANアナライザー](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)をお勧めします。

 <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/usb_can.jpg" /></a></p>

## 特徴

- CAN V2.0Bを実装し、速度は最大**1 Mb/s**に対応
- SPIインターフェースの速度は最大**10 MHz**に対応
- 標準（**11ビット**）および拡張（**29ビット**）データおよびリモートフレーム
- 優先順位付きメッセージストレージを備えた2つの受信バッファ
- 工業規格のDB-9コネクタ
- LEDインジケータ

:::note
CAN BUS Shieldは、Arduino UNO（ATmega328）、Arduino Mega（ATmega1280/2560）、Arduino Leonardo（ATmega32U4）で正常に動作します。
:::

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_1.png" alt="pir" width={600} height="auto" /></p>

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

:::warning
1つのネットワークで2つ以上のCAN Bus Shieldを使用する場合は、インピーダンスを考慮する必要があります。PCB上のP1をナイフで切断するか、PCB上のR3を取り外してください。
:::

**ピンマップ**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/PINMAP.png" alt="pir" width={600} height="auto" /></p>

:::note
FREEピンは他の用途に使用可能です。
:::

**DB9&OBDiiインターフェース**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/OBD.png" alt="pir" width={600} height="auto" /></p>

**CSピン**

:::caution
新しいバッチのCAN-BUS Shield V2を製造する際、背面パッドの配線がPCB内部に埋め込まれました。外部からはパッド間の配線が見えなくなっていますが、内部ではまだ接続されています。パッドの配線を変更したい場合は、まずPCB内の配線を切断する必要があります。
:::

V1.2のSPI_CSピンはデフォルトで**D9**に接続されています。**D10**に変更したい場合は、以下の手順に従ってください。

- ステップ1: PCBAの裏側を確認すると、CSという名前のパッドが見つかります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu1.png" alt="pir" width={600} height="auto" /></p>

- ステップ2: パッド9と中央パッドの間の配線を切断します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu2.png" alt="pir" width={600} height="auto" /></p>

- ステップ3: 中央パッドとパッド10をはんだ付けします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu3.png" alt="pir" width={600} height="auto" /></p>

:::warning
カッターナイフを使用する際は注意してください。自分やPCBAを傷つける可能性があります。
:::

**SPIピン**

SPIピン（SCK、MISO、MOSI）はデフォルトでICSPピンにルーティングされています。ただし、一部のボードではSPIピンがD11〜D13に配置されています。この場合、PCBAに変更を加える必要があります。PCBAの裏側を確認すると、MOSI、MISO、SCKという3つのパッドがあり、デフォルトではAに接続されています。必要に応じてBに変更できます。

:::note
Arduino UNO、Arduino Mega、Arduino Leonardo、その他のAVRベースのArduinoボードでは、デフォルト設定で正常に動作します。
:::

:::warning
SPIピンを変更する際は注意してください。自分やPCBAを傷つける可能性があります。
:::

## はじめに

CAN-BUS Shield の動作を示す簡単な例を以下に示します。この例では、CAN-BUS Shield を 2 つと Arduino または Seeeduino が必要です。

:::note
この例は [Arduino IDE バージョン 1.6.9](https://www.arduino.cc/download_handler.php?f=/arduino-1.6.9-windows.zip) を使用して構築されています。
:::

**ステップ1: 必要なもの**

<table align="center">
  <tbody>
  <tr>
    <td><h3>名前</h3></td>
    <td><h3>機能</h3></td>
    <td><h3>数量</h3></td>
    <td><h3>リンク</h3></td>
  </tr>
  <tr>
    <td><h4>CAN-BUS Shield</h4></td>
    <td><h4>CAN バス通信</h4></td>
    <td><h4>2</h4></td>
    <td><a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank"><span>リンク</span></a></td>
  </tr>
  <tr>
    <td><h4>Seeeduino V4.2</h4></td>
    <td><h4>コントローラー</h4></td>
    <td><h4>2</h4></td>
    <td><a href="https://www.seeedstudio.com/item_detail.html?p_id=2517" target="_blank"><span>リンク</span></a></td>
  </tr>  
  </tbody></table>

**ステップ2: ハードウェア接続**

各 CAN-BUS Shield を Seeeduino V4.2 に挿入し、2 本のジャンパー線で 2 つの CAN-BUS Shield を接続します。以下の画像のように接続してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/connection.png" alt="pir" width={600} height="auto" /></p>

:::note
CAN_H を CAN_H に、CAN_L を CAN_L に接続してください。
:::

**ステップ3: ソフトウェア**

[Arduino ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/) の手順に従って、CAN BUS Shield ライブラリをインストールしてください。

- [**Seeed_Arduino_CAN**](https://github.com/Seeed-Studio/Seeed_Arduino_CAN) Arduino ライブラリをこちらからダウンロードしてください。

ダウンロードしたライブラリを Arduino IDE にインストールします。

ノードのうち 1 つ（ノードとは Seeeduino + CAN_BUS Shield を指します）がマスターとして動作し、もう 1 つがスレーブとして動作します。マスターはスレーブにデータを継続的に送信します。

:::note
コードをアップロードする前は、各ノードがマスターとして動作可能です。
:::

**send** の例 (**ファイル > Examples > Seeed_Arduino_CAN > send**) を開き、**マスター**にアップロードしてください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/example.png" alt="pir" width={600} height="auto" /></p>

または以下のコードを Arduino IDE にコピーしてアップロードしてください：

```cpp
#include <SPI.h>
#include "mcp2515_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

const int SPI_CS_PIN = 9;
mcp2515_can CAN(SPI_CS_PIN); // CS ピンを設定

void setup() {
    SERIAL.begin(115200);
    while(!Serial){};

    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // CAN バスを初期化 : ボーレート = 500k
        SERIAL.println("CAN BUS Shield 初期化失敗");
        SERIAL.println("CAN BUS Shield を再初期化します");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield 初期化成功!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // データ送信: ID = 0x00, 標準フレーム, データ長 = 8, stmp: データバッファ
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 100ms ごとにデータを送信
    SERIAL.println("CAN BUS sendMsgBuf 成功!");
}
```

**ステップ4: 結果を確認**

Arduino IDE のシリアルモニターを開きます (**スレーブ**)。マスターから送信されたデータを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/serial_monitor.png" alt="pir" width={600} height="auto" /></p>

## API

### 1. ボーレートの設定

この関数は、CANバスシステムのボーレートを初期化するために使用されます。

利用可能なボーレートは以下の通りです：

```cpp
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

コントローラチップには、**2つ**の受信マスクレジスタと**5つ**のフィルタレジスタがあり、ターゲットデバイスからデータを取得することを保証します。これらは、複数のノードからなる大規模なネットワークで特に有用です。

これらのマスクとフィルタレジスタを利用するために、以下の2つの関数を提供しています：

**マスク:**

```cpp
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**フィルタ:**

```cpp
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** は使用するレジスタを表します。マスクの場合は0または1、フィルタの場合は0から5を指定できます。
- **ext** はフレームの状態を表します。0は標準フレーム用のマスクまたはフィルタ、1は拡張フレーム用を意味します。
- **ulData** はマスクまたはフィルタの内容を表します。

### 3. 受信確認

MCP2515は、ソフトウェアが受信フレームを確認するポーリングモード、または追加のピンを使用してフレーム受信や送信完了を通知するモードで動作できます。

以下の関数を使用して、受信フレームをポーリングします。

```cpp
INT8U MCP_CAN::checkReceive(void);
```

この関数は、フレームが到着した場合は1を返し、何も到着しない場合は0を返します。

### 4. CAN IDの取得

データが到着した場合、以下の関数を使用して「送信」ノードのCAN IDを取得できます。

```cpp
INT32U MCP_CAN::getCanId(void)
```

### 5. データ送信

```cpp
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

この関数は、バス上にデータを送信するためのものです。以下の引数を使用します：

- **id** はデータの送信元を表します。
- **ext** はフレームの状態を表します。'0'は標準フレーム、'1'は拡張フレームを意味します。
- **len** はこのフレームの長さを表します。
- **data_buf** はこのメッセージの内容です。

例えば、「送信」例では以下のようになります：

```cpp
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); // メッセージ 'stmp' をバスに送信し、他のデバイスに対してこれは0x00からの標準フレームであることを通知します。
```

### 6. データ受信

以下の関数は、「受信」ノードでデータを受信するために使用されます：

```cpp
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

マスクとフィルタが設定されている場合、この関数はマスクとフィルタの条件を満たすフレームのみを取得できます。

- **len** はデータの長さを表します。
- **buf** はデータを格納する場所です。

### 7. init_CS

Arduinoで2つのCAN-BUSシールドを使用する場合に非常に便利です。CS_CANピンを選択するための機能を提供しています。CS_CANピンの使用方法がわからない場合は、[CS_CANピン](https://wiki.seeedstudio.com/ja/CAN-BUS_Shield_V2.0/#cs_can-pin)をご覧ください。

```cpp
void MCP_CAN::init_CS(byte _CS)
```

- **_CS** は選択するピンを表します。(9または10)

## 新しいボーレートを生成する

以下に示すように、よく使用されるボーレートを多数提供しています：

```cpp
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

しかし、必要なボーレートが見つからない場合もあります。そのため、必要なボーレートを計算するためのソフトウェアを提供しています。

[こちら](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)をクリックしてソフトウェアをダウンロードしてください。このソフトウェアは中国語ですが、使い方は簡単なので問題ありません。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_BUS_Shield_SetBaud.jpg" alt="pir" width={200} height="auto" /></p>

ソフトウェアを開き、必要なボーレートを設定し、簡単な設定を行った後、**計算**をクリックしてください。

すると、cfg1、cfg2、cfg3のデータが得られます。

次に、ライブラリにコードを追加する必要があります。

**mcp_can_dfs.h**を開き、約272行目に以下のコードを追加してください：

```cpp
#define MCP_16MHz_xxxkBPS_CFG1 (cfg1)    // xxxは必要なボーレート
#define MCP_16MHz_xxxkBPS_CFG2 (cfg2)
#define MCP_16MHz_xxxkBPS_CFG3 (cfg3)
```

次に、約390行目に以下のコードを追加してください：

```cpp
#define CAN_xxxKBPS NUM       // xxxは必要なボーレート、NUMは他のボーレートと異なる番号を指定してください。
```

**mcp_can.cpp**を開き、関数**mcp2515_configRate**（約190行目）に以下のコードを追加してください：

```cpp
case (CAN_xxxKBPS):
    cfg1 = MCP_16MHz_xxxkBPS_CFG1;
    cfg2 = MCP_16MHz_xxxkBPS_CFG2;
    cfg3 = MCP_16MHz_xxxkBPS_CFG3;
    break;
```

これで必要なボーレートを使用できるようになります。また、新しいボーレートを使用した場合は、GitHubでプルリクエストを送信してください。他のユーザーのためにライブラリに追加します。

## プロジェクト

CAN-BUSシールドを使用して素晴らしいプロジェクトを作りたい場合、以下のプロジェクトを参考にしてください。

### Volkswagen CAN BUS ゲーミング

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project1.JPG" alt="pir" width={600} height="auto" /></p>
PCでリアルなダッシュボードを使って車やトラックのシミュレーターをプレイしたいと思ったことはありませんか？私もです！Arduino UnoとSeeed CAN Bus Shieldを使用して、VW Polo 6RのダッシュボードをCAN Bus経由で制御しようとしています。Silas Parkerにインスパイアされました。SeppとIs0-Mickの素晴らしいサポートに感謝します！

<p style={{textAlign: 'center'}}><a href="https://community.seeedstudio.com/project_detail.html?id=291" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png" /></a></p>

### 車両のCAN-BUSをハックする

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project2.jpg" alt="pir" width={600} height="auto" /></p>
現代の車両はすべてCAN-BUSコントローラーエリアネットワークを搭載しています。車内のさまざまなデバイスからバッテリーへの無数の配線を使用する代わりに、より賢いシステムを利用しています。

すべての電子機能はTIPM（完全統合型パワーモジュール）に接続されています。例えば、ドアをロックするソレノイドや窓を巻き上げるミニモーターなどです。

各ノード（例：窓や電動ドアロックを制御するスイッチポッド）からメッセージがCANに送信されます。TIPMが有効なメッセージを検出すると、ドアをロックしたり、ライトを点灯したりといった動作を行います。

<p style={{textAlign: 'center'}}><a href="https://www.instructables.com/id/Hack-your-vehicle-CAN-BUS-with-Arduino-and-Seeed-C/" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png" /></a></p>

## FAQ

------
**Q1: 他のCANデバイスからデータを取得できません。**

- 接続が正しいか確認してください。
- ボーレートの設定が正しいか確認してください。

**Q2: シリアルモニターに「Init Fail」と表示されます。**

- CSピンの設定がコードと一致しているか確認してください。CAN Bus Shield V1.1/1.2の場合、CSピンはD9に接続されています。それ以外の場合はD10に接続されています。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

-----

- **[PDF]**[CAN-BUS Shield V2.0 回路図](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.pdf)
- **[Eagle]**[CAN-BUS Shield V2.0の回路図とPCB](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar)
- **[ライブラリ]**[CAN-BUS Shield用Arduinoライブラリ](https://github.com/Seeed-Studio/CAN_BUS_Shield)
- **[データシート]**[MCP2515データシート](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)
- **[データシート]**[MCP2551データシート](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)
- **[デモ]**[OBDデモ](https://github.com/Seeed-Studio/CANBUS_SHIELD_OBD_RECIPLE)
- **[ツール]**[MCP2515ボーレートツール](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)
- **[ツール]**[USB-CANアナライザー](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)
- **[ケーブル]**[DB9からOBD2ケーブル](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)
- **[図面]**[CAN BUS Shield v2.0のPDF図面](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.pdf)
- **[図面]**[CAN BUS Shield v2.0のDXF図面](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.dxf.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>