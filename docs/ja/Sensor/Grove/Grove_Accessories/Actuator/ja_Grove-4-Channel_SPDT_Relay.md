---
title: Grove - 4-Channel SPDT Relay
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-4-Channel_SPDT_Relay/
slug: /ja/Grove-4-Channel_SPDT_Relay
last_update:
  date: 05/15/2025
  author: gunengyu
---


<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel-SPDT-Relay/img/main.jpg" /><figcaption><b /><i /></figcaption>
</div>

単極双投（SPDT）リレーは、1つの共通端子と2つの接点を持つため、特定のアプリケーションで非常に便利です。これにより、2つのオプション間で選択することが可能です。Grove - 4-Channel SPDT Relay は、4つの単極双投（SPDT）スイッチを備えています。これらのスイッチを制御するには、低電圧および低電流信号のみが必要です。具体的には、5V DC を使用して最大 250V AC または 110V DC を制御できます。I2C アドレスは変更可能で、同じプロジェクト内で複数のリレーモジュールを使用することができます。Grove - 4-Channel SPDT Relay は、4つの単極双投（SPDT）スイッチを備えています。これらのスイッチを制御するには、低電圧および低電流信号のみが必要です。具体的には、5V DC を使用して最大 250V AC または 110V DC を制御できます。

オンボードの STM32F030F4P6 を使用して各チャンネルを個別に制御します。Arduino や他のボードからのコマンドは I2C インターフェースを介して送信され、オンボードの STM32F030F4P6 がコマンドを解析することで、希望するスイッチを制御できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

## 事前読解

**Grove リレーモジュールとは何か**および**リレーの仕組み**についての紹介を、事前に読むことを強くお勧めします。これらに詳しくない場合は、以下の **[ブログ](https://www.seeedstudio.com/blog/2020/01/03/arduino-tutorial-control-high-voltage-devices-with-relay-modules/)** をご覧ください。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/blog/2020/01/03/arduino-tutorial-control-high-voltage-devices-with-relay-modules/" target="_blank"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/01/image-50-768x384.png" border={0} /></a></p>

## 特徴

+ 高温耐性プラスチックシェル
+ 高電圧負荷
+ 低消費電力
+ 長寿命
+ オプションの I2C アドレス
  + 0x00 ~ 0x7F

## 仕様

|項目|値|
|---|---|
|動作電圧|5V|
|定格コイル電流|89.3mA|
|TUV 認証負荷|10A 250VAC/ 10A 30VDC|
|UL 認証負荷|10A 125VAC 28VDC|
|最大許容電圧|250VAC/110VDC|
|消費電力|約 0.45W|
|接触抵抗|最大 100mΩ|
|絶縁抵抗|最小 100MΩ (500VDC)|
|最大 ON/OFF スイッチング|30 回/分|
|動作温度|-40°C ～ +85°C|
|動作湿度|45% ～ 85% r.h.|
|接触材質|AgCdO|
|入力インターフェース|I^2^C|
|デフォルト I^2^C アドレス|0x11 または 0x12|
|利用可能な I^2^C アドレス|0x00 ~ 0x7F|
|出力インターフェース|3 ピン DIP メススクリュー端子 - 緑|

:::tip
負荷パラメータについては、2セットの認証データを提供しています。実際の最大負荷は 10A 250VAC/10A 30VDC です。
:::

## アプリケーション

+ 家庭用電化製品
+ オフィスマシン
+ リモコンテレビ受信機
+ モニターディスプレイ
+ オーディオ機器の高突入電流用途

## はじめに

### 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove - 4-Channel SPDT Relay |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html" target="_blank">今すぐ購入</a>|

:::note
     * USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

     * Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

**ハードウェア概要**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/8.22%E8%BF%9E%E6%8E%A51.jpg" /><figcaption><b /><i /></figcaption>
</div>

:::note
        Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     |  Grove - 4-Channel SPDT Relay           |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                   |
| SDA           | 白                   |
| SCL           | 黄色                  |

**ピンマップ**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/pin_map_front.jpg" /><figcaption><b /><i /></figcaption>
</div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/pin_map_back.jpg" /><figcaption><b /><i /></figcaption>
</div>

:::note
    - スイッチ1-4は同じピン機能を持っているため、他のスイッチについては**NC1**/**COM1**/**NO1**を参照してください。
    - PCBの裏面には2つのインターフェースがあります：SWDとI^2^C。ファームウェアをプログラムする際にはデフォルトでSWDインターフェースが使用されます。I^2^C（実際にはブートUARTとして動作）を使用したい場合は、**BOOT**をHighに設定する必要があります。
:::
+ **ステップ 1.** Grove - 4-Channel SPDT RelayをBase Shieldの**I^2^C**ポートに接続します。

+ **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

+ **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

+ **ステップ 1.** Githubから[Multi_Channel_Relay_Arduino](https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library)ライブラリをダウンロードします。

+ **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用ライブラリをインストールします。

+ **ステップ 3.** Arduino IDEを再起動します。次のパスで例を開きます：**File --> Examples --> Multi Channel Relay Arduino Library --> four_channel_relay_control**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/path.jpg" /><figcaption><b /><i /></figcaption>
</div>

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

  Serial.println("アドレス書き込み開始");
  relay.changeI2CAddress(old_address, 0x11);  /* I2Cアドレスを設定してFlashに保存 */  
  Serial.println("アドレス書き込み終了");

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

  /* リレー制御開始 */ 
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
  Serial.print("全チャンネルオン、状態: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);

  relay.channelCtrl(CHANNLE1_BIT |                   
                    CHANNLE3_BIT);
  Serial.print("チャンネル1と3オン、状態: ");
  Serial.println(relay.getChannelState(), BIN);

  delay(2000);

  relay.channelCtrl(CHANNLE2_BIT | 
                    CHANNLE4_BIT);
  Serial.print("チャンネル2と4オン、状態: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);


  relay.channelCtrl(0);
  Serial.print("全チャンネルオフ、状態: ");
  Serial.println(relay.getChannelState(), BIN);
  
  delay(2000);
}
```

:::note
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合があるため、最初の方法を使用することをお勧めします。
:::

+ **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

+ **ステップ 5.** Arduino IDE の **シリアルモニタ** を開きます。**ツール -> シリアルモニタ** をクリックするか、++ctrl+shift+m++ キーを同時に押してください。

:::tip
すべてが正常に動作していれば、結果が表示されます。同時に、オンボードのLEDが交互に点灯および消灯するのが見えるはずです。
:::

```
スキャン中...
I2C デバイスがアドレス 0x12 で見つかりました！
1 つの I2C デバイスが見つかりました
アドレスの書き込みを開始
アドレスの書き込みを終了
ファームウェアバージョン: 0x1
チャンネル 1 がオン
チャンネル 2 がオン
チャンネル 3 がオン
チャンネル 4 がオン
すべてのチャンネルをオンにする、状態: 1111
チャンネル 1 と 3 をオンにする、状態: 101
チャンネル 2 と 4 をオンにする、状態: 1010
すべてのチャンネルをオフにする、状態: 0
チャンネル 1 がオン
チャンネル 2 がオン
```

:::tip
Grove - 4-Channel SPDT Relay が正常に動作している場合、以下のように動作します。
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/_DAS5552.MOV_20180822_104218.gif" /><figcaption><b /><i /></figcaption>
</div>

:::note
このデモでは負荷を追加していません。負荷の追加方法を確認したい場合は、[Grove - 2-Channel SPDT Relay](https://wiki.seeedstudio.com/ja/Grove-2-Channel_SPDT_Relay/) を確認してください。
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
      <td>デバイスアドレスを変更します。<span style={{fontWeight: 'bold'}}>old_addr</span> は現在のアドレス、<span style={{fontWeight: 'bold'}}>new_addr</span> は使用したいアドレスです。正しい旧アドレスを入力することで、新しいアドレスを正常に設定できます。</td>
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
      <td>選択したすべてのチャンネルを即座に変更します。<span style={{fontWeight: 600}}>state パラメータリスト:</span><br /> <br />  <span style={{fontWeight: 'bold'}}>CHANNLE1_BIT</span> または <span style={{fontWeight: 'bold'}}>0x01</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE2_BIT</span> または <span style={{fontWeight: 'bold'}}>0x02</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE3_BIT</span> または <span style={{fontWeight: 'bold'}}>0x04</span><br />  <span style={{fontWeight: 'bold'}}>CHANNLE4_BIT</span> または <span style={{fontWeight: 'bold'}}>0x08</span><br /><br />例: <br /><span style={{fontWeight: 600}}>        channelCtrl(CHANNLE2_BIT|CHANNLE3_BIT),</span>はチャンネル 2 とチャンネル 3 をオンにします。<br /><span style={{fontWeight: 600}}>        channelCtrl(01|02|08), </span>はチャンネル 1、チャンネル 2、チャンネル 4 をオンにします。<br /><span style={{fontWeight: 600}}>        channelCtrl(0), </span>はすべてのチャンネルをオフにします。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_on_channel(uint8_t channel)</span></td>
      <td>単一のチャンネルをオンにします。<br />例:<br />        <span style={{fontWeight: 600}}>turn_on_channel(3), </span>はチャンネル 3 をオンにします。</td>
    </tr>
    <tr>
      <td><span style={{fontWeight: 600}}>turn_off_channel(uint8_t channel)</span></td>
      <td>単一のチャンネルをオフにします。<br />例:<br /><span style={{fontWeight: 600}}>       turn_off_channel(3), </span>はチャンネル 3 をオフにします。</td>
    </tr>
  </tbody></table>

アドレスを変更したい場合は、使用前にアドレスを設定する必要があります。例えば、0x2f に変更したい場合、以下のコードを使用できます。

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

**A1:** J-Link バーナーと WSD インターフェースを使用してファームウェアを焼くことをお勧めします。

ファームウェアは以下からダウンロードできます：

[工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel-SPDT-Relay-Firmware.bin)

ソフトウェアには J-flash を使用することを推奨します：

[J-flash](https://www.segger.com/downloads/jlink#J-LinkSoftwareAndDocumentationPack)

![](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/img/J-flash.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

:::note

ST32シリーズのチップが世界的に品薄となり、価格が数回上昇し、明確な納期がない状況です。そのため、MM32チップへの切り替えを余儀なくされました。具体的な交換モデルは以下の通りです：STM32F030F4P6TR は MM32F031F6P6 に置き換えられます。チップが交換された後も、製品の機能、特徴、使用方法、コードは変更されません。ただし、ファームウェアのバージョンが変更され、異なるチップに応じて工場出荷時ファームウェアが調整されています。ファームウェアを再度焼く必要がある場合は、チップに対応するファームウェアをダウンロードしてください。
:::

## リソース

+ **[Zip]** [Grove-4-Channel SPDT Relay eagle ファイル](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip)
+ **[Bin]** [STM32F030F4P6TR ファームウェア](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel-SPDT-Relay-Firmware.bin)
+ **[Bin]** [MM32F031F6P6 ファームウェア](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/firmware-spdt-4-channels.ino.bin)
+ **[PDF]** [SRD 05VDC-SL-C リレーのデータシート](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/SRD_05VDC-SL-C.pdf)
+ **[PDF]** [S9013 のデータシート](https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Transistors_NPN_25V-500mA.pdf)
+ **[PDF]** [STM32 のデータシート](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/STM32F030F4P6.pdf)
+ **[PDF]** [MM32F031F6P6 のデータシート](https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/MM32F031F6P6_Datasheet.pdf)

## プロジェクト

この製品の紹介ビデオです。簡単なデモも含まれており、試してみることができます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5NBdUr5D-8M?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**ホームオートメーションとモニタリング:** RSL10 Sense DB ベースのシステムで、スマートフォンアプリや Alexa を使用して温度、湿度、光の強度をモニタリングおよび制御できます。

<iframe width="560" height="315" src="https://www.hackster.io/taifur/home-automation-and-monitoring-powered-by-rsl10-and-alexa-2439df" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Grove - 4-Channel SPDT Relay:** Seeekers の皆さん！これは #newproductsTuesday セグメントの第2週目です。このビデオでは新しい Grove - 4-Channel SPDT Relay の製品紹介と興味深いデモが行われます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=5NBdUr5D-8M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>