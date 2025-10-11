---
title: Grove - 8チャンネルソリッドステートリレー
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-8-Channel_Solid_State_Relay/
slug: /ja/Grove-8-Channel_Solid_State_Relay
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/main.jpg)

コイルを使用する代わりに、パッケージ化されたソリッドステートリレー（SSR）は、サイリスタやトランジスタなどの電力半導体デバイスを使用しており、機械式リレーよりもはるかに高速なスイッチング速度を提供します。**Grove - 8チャンネルソリッドステートリレー**は高品質の**G3MC202P**モジュールをベースにしており、5VDCを使用して最大240VACを制御することができます。Groveインターフェースを利用することで、ArduinoとSSRを非常に便利に使用することができます。

オンボードの[STM32F030F4P6](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)を使用して各チャンネルを個別に制御します。Arduinoや他のボードからのコマンドはI2Cインターフェースを介して送信され、オンボードのSTM32F030F4P6がコマンドを解析することで、制御したいスイッチを操作することができます。

異なる用途に応じて、一連のソリッドステートリレーを用意しています。

[Grove - Solid State Relay V2](https://wiki.seeedstudio.com/ja/Grove-Solid_State_Relay_V2)

[Grove - 2チャンネルソリッドステートリレー](https://wiki.seeedstudio.com/ja/Grove-2-Channel_Solid_State_Relay)

[Grove - 4チャンネルソリッドステートリレー](https://wiki.seeedstudio.com/ja/Grove-4-Channel_Solid_State_Relay)

[Grove - 8チャンネルソリッドステートリレー](https://wiki.seeedstudio.com/ja/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

+ 低消費電力
+ 長寿命
+ オプションのI2Cアドレス

+ 機械式リレーに対する利点:

  + ソリッドステートリレーは電気機械式リレーと比較してスイッチング速度が非常に速く、物理的な接点がないため摩耗しない
  + 完全に静音で動作
  + 物理的な接点がないためスパークが発生せず、爆発性環境での使用が可能で、スイッチング中にスパークが発生しないことが重要
  + 可動部品がないため、頻繁に作動しても寿命が長く、接点の摩耗や炭素の蓄積がない
  + PCB、端子、ヒートシンクを一体化したモノブロック構造のコンパクトで薄型のSSRは、機械式リレーよりもはるかに小型で、より多くのチャンネルを統合可能

+ 欠点:

  + クローズ時に高い抵抗（熱を発生）と電気ノイズの増加
  + オープン時に低い抵抗と逆漏れ電流
  + AC負荷にのみ対応

## 仕様

|項目|値|
|---|---|
|動作入力電圧|4~6V|
|定格入力電圧|5V|
|定格負荷電圧|100～240 VAC 50/60 Hz|
|負荷電圧範囲|75～264 VAC 50/60 Hz|
|負荷電流|0.1～2 A|
|漏れ電流|最大1.5mA（200 VAC時）|
|絶縁抵抗|最小1,000 MΩ（500 VDC時）|
|動作時間|負荷電源サイクルの1/2 + 最大1ms|
|リリース時間|負荷電源サイクルの1/2 + 最大1ms|
|保存温度|-30°C～100°C（氷結や結露なし）|
|動作温度|-30°C～80°C（氷結や結露なし）|
|動作湿度|45%～85%RH|
|入力インターフェース|I^2^C|
|デフォルトI^2^Cアドレス|0x11または0x12|
|利用可能なI^2^Cアドレス|0x00～0x7F|
|出力インターフェース|DIP Female Blue 2ピン x8|
|ゼロクロス|対応|
|認証|UL / CSA|

:::note
**漏れ電流**に注意してください。1.5mAは低消費電力LEDを駆動するのに十分な強さがあるため、リレーがオフの状態でもLEDが微かな光を放つ可能性があります。
:::

## 応用例

+ 低遅延のスイッチングが必要な操作、例：ステージライトの制御
+ 高い安定性が求められるデバイス、例：医療機器、交通信号
+ 防爆、防腐、耐湿が必要な状況、例：石炭、化学産業

## ハードウェア概要

### ピンマップ

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/pin_map_back.jpg)

:::note
    - スイッチ1-8は同じピン機能を持っているため、他のスイッチについては**LOAD1**/**LOAD2**を参照してください。
    - PCBの裏面には2つのインターフェースがあります：SWDとI^2^C。ファームウェアをプログラミングする際にはデフォルトでSWDインターフェースが使用されます。I^2^C（実際にはブートUARTとして動作）を使用したい場合は、**BOOT**をHighに設定する必要があります。
:::

### 回路図

**リレー制御**

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/schematic_.jpg)

**K1**はリレーモジュールです。**INT+**と**INT-**の間に5Vの電圧が加えられると、リレーがオンになります。その結果、**LOAD1**が**LOAD2**に接続されます。NPNトランジスタ**Q1**（BC817-40）を使用して、**INT+**と**INT-**間の電圧を制御します。

**CTR**はArduinoや他のボードからの制御信号です。10kの抵抗R2によってプルダウンされており、信号がない場合、**Q1**の「ゲート」（ポート1）は0Vとなり、Q1はオフになります。そのため、K1もオフになります。**CTR**が5Vになると、Q1がオンになります。K1の**INT-**がシステムのGNDに接続され、**INT+**と**INT-**間に5Vが加わるため、K1がオンになり、**LOAD1**が**LOAD2**に接続されます。

**双方向レベルシフター回路**
![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/schematic_1.jpg)

これは、I^2^Cバスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。このセンサーのI<sup>2</sup>Cバスは3.3Vを使用しますが、ArduinoのI<sup>2</sup>Cバスが5Vを使用する場合、この回路が必要です。上記の回路図では、**Q17**と**Q18**はNチャンネルMOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)で、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照してください。

:::note
        このセクションでは回路図の一部のみを示しています。完全なドキュメントについてはResourcesを参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - 8-Channel Solid State Relay |
|----------------|-------------|-------------------------------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

+ **ステップ 1.** Grove - 8-Channel Solid State RelayをBase Shieldの**I^2^C**ポートに接続します。

+ **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

+ **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/connect.jpg)

:::note
Grove Base Shieldがない場合でも、以下のようにこのモジュールをSeeeduinoに直接接続することができます。
:::

| Seeeduino     | Grove - 8-Channel Solid State Relay |
|---------------|-------------------------------------|
| 5V            | 赤                                 |
| GND           | 黒                                 |
| SDA           | 白                                 |
| SCL           | 黄                                 |

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

+ **ステップ 1.** Githubから[Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library)ライブラリをダウンロードします。

+ **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

+ **ステップ 3.** Arduino IDEを再起動します。以下のパスから例を開きます：**File --> Examples --> Multi Channel Relay Arduino Library --> eight_channel_relay_control**。

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/path.jpg)

または、コードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

```cpp
#include <multi_channel_relay.h>

#define USE_8_CHANNELS (1)

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* I2Cデバイスをスキャンしてデバイスアドレスを検出 */
   relay.begin();
  uint8_t old_address = relay.scanI2CDevice();
  if((0x00 == old_address) || (0xff == old_address)) {
    while(1);
  }

  Serial.println("アドレスの書き込み開始");
  relay.changeI2CAddress(old_address, 0x11);  /* I2Cアドレスを設定してFlashに保存 */  
  Serial.println("アドレスの書き込み終了");

  /* ファームウェアバージョンを読み取る */
  Serial.print("ファームウェアバージョン: ");
  Serial.print("0x");
  Serial.print(relay.getFirmwareVersion(), HEX);
  Serial.println();
}

void loop()
{

  /** 
   *  チャンネル: 8 7 6 5 4 3 2 1
   *  状態: 0b00000000 -> 0x00  (すべてオフ)
   *  状態: 0b11111111 -> 0xff  (すべてオン)
  */  

  /* リレーの制御開始 */ 
  Serial.println("チャンネル1オン");
  relay.turn_on_channel(1);  
  delay(500);
  Serial.println("チャンネル2オン");
  relay.turn_off_channel(1);
  relay.turn_on_channel(2);
  delay(500);
  Serial.println("チャンネル3オン");
  relay.turn_off_channel(2);
  relay.turn_on_channel(3);  
  delay(500);
  Serial.println("チャンネル4オン");
  relay.turn_off_channel(3);
  relay.turn_on_channel(4);  
  delay(500);
#if(1==USE_8_CHANNELS)  
  Serial.println("チャンネル5オン");
  relay.turn_off_channel(4);
  relay.turn_on_channel(5);  
  delay(500);
  Serial.println("チャンネル6オン");
  relay.turn_off_channel(5);
  relay.turn_on_channel(6);  
  delay(500);
  Serial.println("チャンネル7オン");
  relay.turn_off_channel(6);
  relay.turn_on_channel(7);  
  delay(500);
  Serial.println("チャンネル8オン");
  relay.turn_off_channel(7);
  relay.turn_on_channel(8);  
  delay(500);
  relay.turn_off_channel(8);
#endif

  relay.channelCtrl(CHANNLE1_BIT | 
                    CHANNLE2_BIT | 
                    CHANNLE3_BIT | 
                    CHANNLE4_BIT | 
                    CHANNLE5_BIT | 
                    CHANNLE6_BIT |
                    CHANNLE7_BIT |
                    CHANNLE8_BIT);
  Serial.print("すべてのチャンネルをオンにする, 状態: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);

  relay.channelCtrl(CHANNLE1_BIT |                   
                    CHANNLE3_BIT | 
                    CHANNLE5_BIT | 
                    CHANNLE7_BIT);
  Serial.print("チャンネル1, 3, 5, 7をオンにする, 状態: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);

  relay.channelCtrl(CHANNLE2_BIT | 
                    CHANNLE4_BIT | 
                    CHANNLE6_BIT |
                    CHANNLE8_BIT);
  Serial.print("チャンネル2, 4, 6, 8をオンにする, 状態: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);


  relay.channelCtrl(0);
  Serial.print("すべてのチャンネルをオフにする, 状態: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);
}
```

+ **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

+ **ステップ 5.** Arduino IDE の **シリアルモニタ**を開くには、**ツール -> シリアルモニタ**をクリックします。または ++ctrl+shift+m++ キーを同時に押します。

:::tip
     すべてが正常に動作していれば、結果が表示されます。同時に、オンボードのLEDが交互に点灯および消灯するのが確認できます。
:::

```cpp
スキャン中...
I2C デバイスがアドレス 0x11 で見つかりました！
1 つの I2C デバイスが見つかりました
アドレスの書き込みを開始
アドレスの書き込みを終了
ファームウェアバージョン: 0x1
チャンネル 1 オン
チャンネル 2 オン
チャンネル 3 オン
チャンネル 4 オン
チャンネル 5 オン
チャンネル 6 オン
チャンネル 7 オン
チャンネル 8 オン
すべてのチャンネルをオンにする, 状態: 11111111
チャンネル 1, 3, 5, 7 をオンにする, 状態: 1010101
チャンネル 2, 4, 6, 8 をオンにする, 状態: 10101010
すべてのチャンネルをオフにする, 状態: 0
チャンネル 1 オン
チャンネル 2 オン
```

![](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/img/gif.gif)

:::note
        このデモでは負荷を追加していません。負荷の追加方法を確認したい場合は、[Grove - 2-Channel Solid State Relay](https://wiki.seeedstudio.com/ja/Grove-2-Channel_Solid_State_Relay) を参照してください。
:::

#### 関数の説明

<table style={{tableLayout: 'fixed', width: 749}}>
  <colgroup>
    <col style={{width: 233}} />
    <col style={{width: 516}} />
  </colgroup>
  <tbody><tr>
      <th>関数</th>
      <th>説明</th>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>changeI2CAddress(uint8_t old_addr, uint8_t new_addr)</span></td>
      <td>デバイスアドレスを変更します。<span style={{fontWeight: 'bold'}}>old_addr</span>は現在のアドレス、<span style={{fontWeight: 'bold'}}>new_addr</span>は使用したいアドレスです。正しい旧アドレスを入力することで、新しいアドレスを正常に設定できます。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>scanI2CDevice()</span></td>
      <td><span style={{fontWeight: 700}}>old_addr</span>（現在のアドレス）を取得します。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>getChannelState()</span></td>
      <td>各チャンネルの状態を取得します。例えば「状態: 1111」は、すべてのリレーがオンになっていることを意味します。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>getFirmwareVersion()</span></td>
      <td>オンボードMCUに書き込まれたファームウェアバージョンを取得します。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>channelCtrl(uint8_t state)</span></td>
      <td>選択したすべてのチャンネルを即座に変更します。<span style={{fontWeight: 600}}>state パラメータリスト:</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span>または<span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span>または<span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span>または<span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span>または<span style={{fontWeight: 'bold'}}>0x08</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE5_BIT</span>または<span style={{fontWeight: 'bold'}}>0x10</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE6_BIT</span>または<span style={{fontWeight: 'bold'}}>0x20</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE7_BIT</span>または<span style={{fontWeight: 'bold'}}>0x40</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE8_BIT</span>または<span style={{fontWeight: 'bold'}}>0x80</span><br />
        <br />例: <br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span>はチャンネル2とチャンネル3をオンにします。<br /><span style={{fontWeight: 600}}>        channelCtrl(0x01|0x02|0x08), </span>はチャンネル1、チャンネル2、チャンネル4をオンにします。<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span>はすべてのチャンネルをオフにします。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_on_channel(uint8_t channel)</span></td>
      <td>単一のチャンネルをオンにします。<br />例:<br />        <span style={{fontWeight: 600}}>turn_on_channel(3), </span>はチャンネル3をオンにします。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_off_channel(uint8_t channel)</span></td>
      <td>単一のチャンネルをオフにします。<br />例:<br /><span style={{fontWeight: 600}}>       turn_off_channel(3), </span>はチャンネル3をオフにします。</td>
    </tr>
  </tbody></table>

アドレスを変更したい場合は、使用前にアドレスを設定する必要があります。例えば、0x2f に変更したい場合、以下のコードを使用します。

```cpp
#include <multi_channel_relay.h>

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* I2C デバイスをスキャンしてデバイスアドレスを検出 */
  uint8_t old_address = relay. ;
  if((0x00 == old_address) || (0xff == old_address)) { 
    while(1);
  }

  Serial.println("アドレスの書き込みを開始");
  relay.changeI2CAddress(old_address,0x2f);  /* I2C アドレスを 0x2f に設定し、EEPRom に保存 */  
  Serial.println("アドレスの書き込みを終了");

  /* ファームウェアバージョンを読み取る */
  Serial.print("ファームウェアバージョン: ");
  Serial.print("0x");
  Serial.print(relay.getFirmwareVersion(), HEX);
  Serial.println();
}
```

## FAQ

**Q1: ファームウェアを焼く方法は？**

**A1:** J-LinkバーナーとWSDインターフェースを使用してファームウェアを焼くことを推奨します。

ファームウェアは以下からダウンロードできます：

[工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove-8-Channel-Solid-Relay-Firmware.bin)

ソフトウェアにはJ-flashを使用することを推奨します：

[J-flash](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove%20-%208-Channel%20Solid%20State%20Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

+ **[Zip]** [Grove-8-Channel SPDT Relay eagleファイル](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove%20-%208-Channel%20Solid%20State%20Relay.zip)
+ **[Zip]** [Multi Channel Relay Arduinoライブラリ](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library/archive/master.zip)
+ **[Bin]** [工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove-8-Channel-Solid-Relay-Firmware.bin)
+ **[PDF]** [G3MC202Pのデータシート](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)
+ **[PDF]** [STM32のデータシート](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)

## プロジェクト

この製品の紹介ビデオです。簡単なデモが含まれており、試してみることができます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>