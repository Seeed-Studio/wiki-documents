---
title: Grove - 4チャンネル ソリッドステートリレー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-4-Channel_Solid_State_Relay/
slug: /ja/Grove-4-Channel_Solid_State_Relay
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/5.jpg)

コイルを使用する代わりに、パッケージ化されたソリッドステートリレー（SSR）は、サイリスタやトランジスタなどのパワー半導体デバイスを使用しており、機械式リレーよりもはるかに高速なスイッチング速度を提供します。**Grove - 4チャンネル ソリッドステートリレー**は、高品質な**G3MC202P**モジュールをベースにしており、5VDCで最大240VACを制御できます。Groveインターフェースを使用することで、ArduinoとSSRを非常に簡単に組み合わせて使用することができます。

オンボードの[STM32F030F4P6](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)を使用して各チャンネルを個別に制御します。Arduinoや他のボードからのコマンドはI2Cインターフェースを介して送信され、オンボードのSTM32F030F4P6がコマンドを解析することで、制御したいスイッチを操作できます。

さまざまな用途に応じて、一連のソリッドステートリレーを用意しています。

[Grove - ソリッドステートリレー V2](https://wiki.seeedstudio.com/ja/Grove-Solid_State_Relay_V2)

[Grove - 2チャンネル ソリッドステートリレー](https://wiki.seeedstudio.com/ja/Grove-2-Channel_Solid_State_Relay)

[Grove - 4チャンネル ソリッドステートリレー](https://wiki.seeedstudio.com/ja/Grove-4-Channel_Solid_State_Relay)

[Grove - 8チャンネル ソリッドステートリレー](https://wiki.seeedstudio.com/ja/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay-p-3130.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

+ 低消費電力
+ 長寿命
+ オプションのI2Cアドレス

+ 機械式リレーに対する利点：

  + ソリッドステートリレーは電気機械式リレーと比較してスイッチング速度が非常に速く、摩耗する物理的な接点がありません
  + 完全に静音で動作
  + 物理的な接点がないためスパークが発生せず、スイッチング中にスパークが発生してはならない爆発性環境で使用可能
  + 可動部品がなく、接点が摩耗したり炭素が蓄積したりしないため、何度も作動しても寿命が延びる
  + PCB、端子、ヒートシンクを一体化したモノブロック構造のコンパクトで薄型のSSRは、機械式リレーよりもはるかに小型で、より多くのチャンネルを統合可能

+ 欠点：

  + クローズ時に高い抵抗（熱を発生）と電気ノイズの増加
  + オープン時に低い抵抗と逆方向漏れ電流
  + AC負荷にのみ対応

## 仕様

|項目|値|
|---|---|
|動作入力電圧|4~6V|
|定格入力電圧|5V|
|定格負荷電圧|100～240 VAC 50/60 Hz|
|負荷電圧範囲|75～264 VAC 50/60 Hz|
|負荷電流|0.1～2 A|
|漏れ電流|最大1.5 mA（200 VAC時）|
|絶縁抵抗|最小1,000 MΩ（500 VDC時）|
|動作時間|負荷電源サイクルの1/2 + 最大1 ms|
|リリース時間|負荷電源サイクルの1/2 + 最大1 ms|
|保存温度|-30°C～100°C（氷結または結露しないこと）|
|動作温度|-30°C～80°C（氷結または結露しないこと）|
|動作湿度|45%～85%RH|
|入力インターフェース|I^2^C|
|デフォルトI^2^Cアドレス|0x11または0x12|
|利用可能なI^2^Cアドレス|0x00～0x7F|
|出力インターフェース|DIPメスブルー2ピン x4|
|ゼロクロス|対応|
|認証|UL / CSA|

:::note
**漏れ電流**に注意してください。1.5mAは低消費電力LEDを駆動するのに十分な強さがあるため、リレーがオフのときでもLEDが微かに光る場合があります。
:::

## 応用例

+ 低遅延の切り替えが必要な操作、例: 舞台照明の制御
+ 高い安定性が必要なデバイス、例: 医療機器、交通信号
+ 防爆、防腐、耐湿が必要な状況、例: 石炭産業、化学産業

## ハードウェア概要

### ピンマップ

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/pin_map.jpg)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/pin_map_back.jpg)

:::note
    - スイッチ1～4は同じピン機能を持っているため、他のスイッチについては**LOAD1**/**LOAD2**を参照してください。
    - PCBの裏面には2つのインターフェースがあります: SWDとI^2^C。ファームウェアをプログラムする際にはデフォルトでSWDインターフェースが使用されます。I^2^C（実際にはブートUARTとして動作）を使用したい場合は、**BOOT**をHighに設定する必要があります。
:::

### 回路図

**リレー制御**

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/img/schematic_.jpg)

**K1**はリレーモジュールです。**INT+**と**INT-**間に5Vの電圧が加えられると、リレーがオンになります。その結果、**LOAD1**が**LOAD2**に接続されます。NPNトランジスタ**Q1**（BC817-40）を使用して、**INT+**と**INT-**間の電圧を制御します。

**CTR**はArduinoや他のボードからの制御信号です。10kの抵抗R2によってプルダウンされており、信号がない場合、**Q1**のゲート（ポート1）は0Vとなり、Q1はオフになります。その結果、K1もオフになります。**CTR**が5Vになると、Q1がオンになり、**INT-**がシステムのGNDに接続されます。これにより、**INT+**と**INT-**間に5Vが加わり、K1がオンになり、**LOAD1**が**LOAD2**に接続されます。

**双方向レベルシフター回路**
![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/schematic_1.jpg)

これは、I^2^Cバスの異なる電圧セクションを接続するための典型的な双方向レベルシフター回路です。このセンサーのI^2^Cバスは3.3Vを使用しますが、ArduinoのI^2^Cバスが5Vを使用する場合、この回路が必要になります。上記の回路図では、**Q17**と**Q18**はNチャンネルMOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf)で、双方向スイッチとして機能します。この部分をよりよく理解するために、[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)を参照してください。

:::note
        このセクションでは回路図の一部のみを示しています。完全なドキュメントについてはResourcesを参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - 4-Channel Solid State Relay |
|----------------|-------------|-------------------------------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay-p-3130.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。お持ちのケーブルが適切かどうかわからない場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

+ **ステップ 1.** Grove - 4-Channel Solid State RelayをBase Shieldの**I^2^C**ポートに接続します。

+ **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

+ **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/connect.jpg)

:::note
        Grove Base Shieldがない場合でも、以下のようにこのモジュールをSeeeduinoに直接接続することができます。
:::

| Seeeduino     | Grove - 4-Channel Solid State Relay |
|---------------|-------------------------------------|
| 5V            | 赤                                 |
| GND           | 黒                                 |
| SDA           | 白                                 |
| SCL           | 黄                                 |

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

+ **ステップ 1.** Githubから[Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library)ライブラリをダウンロードします。

+ **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

+ **ステップ 3.** Arduino IDEを再起動します。以下のパスから例を開きます：**File --> Examples --> Multi Channel Relay Arduino Library --> four_channel_relay_control**。

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/path.jpg)

または、コードブロックの右上にあるアイコン ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) をクリックして、以下のコードをArduino IDEの新しいスケッチにコピーすることもできます。

```cpp
#include <multi_channel_relay.h>

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* I2Cデバイスをスキャンしてデバイスアドレスを検出 */
  uint8_t old_address = relay.scanI2CDevice();
  if((0x00 == old_address) || (0xff == old_address)) { 
    while(1);
  }

  Serial.println("アドレスの書き込みを開始");
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
   *  状態: 0b00000000 -> 0x00  (全てオフ)
   *  状態: 0b11111111 -> 0xff  (全てオン)
  */  

  /* リレーの制御を開始 */ 
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
  relay.turn_off_channel(4);

  relay.channelCtrl(CHANNLE1_BIT | 
                    CHANNLE2_BIT | 
                    CHANNLE3_BIT | 
                    CHANNLE4_BIT);
  Serial.print("全チャンネルをオンにする, 状態: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);

  relay.channelCtrl(CHANNLE1_BIT |                   
                    CHANNLE3_BIT);
  Serial.print("チャンネル1と3をオンにする, 状態: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);

  relay.channelCtrl(CHANNLE2_BIT | 
                    CHANNLE4_BIT);
  Serial.print("チャンネル2と4をオンにする, 状態: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);


  relay.channelCtrl(0);
  Serial.print("全チャンネルをオフにする, 状態: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);
}
```

+ **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

+ **ステップ 5.** Arduino IDEの**シリアルモニタ**を開きます。**Tool-> Serial Monitor**をクリックするか、++ctrl+shift+m++キーを同時に押します。

:::tip
  すべてが正常に動作すれば、結果が表示されます。同時に、オンボードLEDが交互に点灯および消灯するのが見えます。
:::

```cpp
スキャン中...
I2Cデバイスがアドレス0x12で見つかりました！
1つのI2Cデバイスが見つかりました
アドレスの書き込みを開始
アドレスの書き込み終了
ファームウェアバージョン: 0x1
チャンネル1オン
チャンネル2オン
チャンネル3オン
チャンネル4オン
全チャンネルをオンにする, 状態: 1111
チャンネル1と3をオンにする, 状態: 101
チャンネル2と4をオンにする, 状態: 1010
全チャンネルをオフにする, 状態: 0
チャンネル1オン
チャンネル2オン
```

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/img/gif.gif)

:::note
        このデモでは負荷を追加していません。負荷の追加方法を確認したい場合は、[Grove - 2-Channel Solid State Relay](https://wiki.seeedstudio.com/ja/Grove-2-Channel_Solid_State_Relay)をご覧ください。
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
      <td>デバイスアドレスを変更します。<span style={{fontWeight: 'bold'}}>old_addr</span>は現在のアドレス、<span style={{fontWeight: 'bold'}}>new_addr</span>は使用したい新しいアドレスです。正しい現在のアドレスを入力することでのみ、新しいアドレスを正常に設定できます。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>scanI2CDevice()</span></td>
      <td><span style={{fontWeight: 700}}>old_addr</span>（現在のアドレス）を取得します。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 'bold'}}>getChannelState()</span></td>
      <td>各チャンネルの状態を取得します。例えば「State: 1111」は、すべてのリレーがオンになっていることを意味します。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>getFirmwareVersion()</span></td>
      <td>オンボードMCUに書き込まれているファームウェアのバージョンを取得します。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>channelCtrl(uint8_t state)</span></td>
      <td>選択したすべてのチャンネルを即座に変更します。<span style={{fontWeight: 600}}>stateパラメータリスト:</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span>または<span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span>または<span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span>または<span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span>または<span style={{fontWeight: 'bold'}}>0x08</span><br /><br />例: <br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span>はチャンネル2とチャンネル3をオンにします。<br /><span style={{fontWeight: 600}}>        channelCtrl(0x01|0x02|0x08), </span>はチャンネル1、チャンネル2、チャンネル4をオンにします。<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span>はすべてのチャンネルをオフにします。</td>
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

アドレスを変更したい場合は、使用前にアドレスを設定する必要があります。例えば、アドレスを0x2fに変更したい場合、以下のコードを使用できます。

```cpp
#include <multi_channel_relay.h>

Multi_Channel_Relay relay;

void setup()
{
  Serial.begin(9600);
  while(!Serial);   

   /* I2Cデバイスをスキャンしてデバイスアドレスを検出 */
  uint8_t old_address = relay. ;
  if((0x00 == old_address) || (0xff == old_address)) { 
    while(1);
  }

  Serial.println("アドレスの書き込みを開始");
  relay.changeI2CAddress(old_address,0x2f);  /* I2Cアドレスを0x2fに設定し、EEPRomに保存 */  
  Serial.println("アドレスの書き込み終了");

  /* ファームウェアバージョンを読み取る */
  Serial.print("ファームウェアバージョン: ");
  Serial.print("0x");
  Serial.print(relay.getFirmwareVersion(), HEX);
  Serial.println();
}
```

## FAQ

**Q1: ファームウェアをどのように書き込むのですか？**

**A1:** J-Link バーナーと WSD インターフェースを使用してファームウェアを書き込むことをお勧めします。

ファームウェアは以下からダウンロードできます：

[工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove-4-Channel-Solid-Relay-Firmware.bin)

ソフトウェアには J-flash を使用することをお勧めします：

[J-flash](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove%20-%204-Channel%20Solid%20State%20Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

+ **[Zip]** [Grove-4-Channel SPDT Relay eagle ファイル](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove%20-%204-Channel%20Solid%20State%20Relay.zip)
+ **[Zip]** [マルチチャンネルリレー Arduino ライブラリ](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library/archive/master.zip)
+ **[Bin]** [工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove-4-Channel-Solid-Relay-Firmware.bin)
+ **[PDF]** [G3MC202P のデータシート](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)
+ **[PDF]** [STM32 のデータシート](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)

## プロジェクト

この製品の紹介ビデオと簡単なデモです。ぜひお試しください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>