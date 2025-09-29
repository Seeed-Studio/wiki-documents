---
description: Grove - RGB LED Matrix w/Driver
title: Grove - RGB LED Matrix w/Driver
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-RGB_LED_Matrix_w-Driver
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/main.jpg" alt="pir" width={600} height="auto" /></p>

8x8 RGB LEDマトリックスは、シンプルな画像表示に最適で、64ピクセルのLEDと各ピクセルに255色を備えているため、ほぼ無限の可能性を秘めています。しかし、マトリックスの複雑な配線は厄介です。そこで、Grove - RGB LED Matrix w/Driverを紹介します。複雑で変動する配線やはんだ付けをすべて取り除き、1つのGroveコネクタだけでRGB 8x8 LEDマトリックスを簡単に制御できます。驚きですか？ぜひ試してみてください。きっと気に入るはずです。

<iframe width={800} height={450} src="https://www.youtube.com/embed/i9hnRPuCx-Q" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

<!-- <p style=":center"><a href="https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html)

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RGB LED Stick (10 WS2813 Mini) | 初期リリース                                                                                               | 2018年12月      |

## 特徴

- 8x8ピクセル、**<font color="red">R</font><font color="green">G</font><font color="blue">B</font>** 255色
- 内蔵MCU
- チャンネル間のLED電流精度 ±1%(typ.)
- カスタム画像の表示をサポート

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|動作温度|-40℃ ~ +85℃|
|インターフェース|I2C|
|I2Cアドレス|0x65|
|サイズ|L: 40mm W: 40mm H: 21mm| 
|重量|17.3g|
|パッケージサイズ|L: 120mm W: 100mm H: 33mm|
|総重量|28g|

## 主な用途

- シンプルな画像表示
- おもちゃ

## ハードウェア概要

### ピンアウト

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out_led.jpg" alt="pir" width={600} height="auto" /></p>

---
**Groveインターフェース**  

LEDマトリックスを制御するためにI2Cインターフェースを使用します：

>GND: このモジュールをシステムのGNDに接続  
>VCC: このモジュールには5Vを使用できます  
>SDA: I2Cシリアルデータ  
>SCL: I2Cシリアルクロック

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-3.jpg" alt="pir" width={600} height="auto" /></p>

---

**DC-DCモジュール**

MCUとLEDドライバーチップに安定した3.3Vを供給するためにMP-2155を使用します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-2.jpg" alt="pir" width={600} height="auto" /></p>

---

**ファームウェアダウンロードインターフェース**  

SDAとSCLピンに接続し、ファームウェアをダウンロードする際にUARTとして動作します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-1.jpg" alt="pir" width={600} height="auto" /></p>

---

**LEDドライバー**

[MY9221](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MY9221.pdf)は、12チャンネル（R/G/B x 4）の定電流APDM（Adaptive Pulse Density Modulation）LEDドライバーです。このモジュールは8x8マトリックスであるため、**<font color="red">R</font><font color="green">G</font><font color="blue">B</font>** X8出力チャンネルが必要です。そのため、2つのMY9221を使用します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/2-2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/2-2.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/schematic4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/schematic4.jpg" alt="pir" width={600} height="auto" /></p>

---

**8x8 LEDマトリックス**

64個のKTR-3528RGB LEDを使用して8x8マトリックスLEDを形成しています。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/RGB.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/RGB.jpg" alt="pir" width={600} height="auto" /></p>

列選択にはV信号を使用し、行選択にはRGB信号を使用します。  
LEDは**D**で命名され、D1 - D64となります。R1/G1/B1 - R8/G8/B8は2つのMY9221によって駆動され、**V1 - V8**は74HC183PWチップによって制御されます。すべてのLEDがオフの場合、V1 - V9はデフォルトで低く設定され、すべてのRGBチャンネルラインは高く設定されます。

例：


**D8**は最初の行、8列目にあります。**D8**を緑色（Green-255）にするには、V8を高くし、R1/B1を高くし、G1をグラウンドに接続する必要があります。これにより、緑色のLEDのみが点灯し、D8が純粋な緑色に変わるのが見えるでしょう。

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのハードウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - RGB LED Matrix w/Driver |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

:::important
    **1** Arduino UNOをマザーボードとして使用する場合は、DC電源を使用することをお勧めします。そうしないと、VCCの最大リップルが100mVを超える可能性があります。Seeeduino V4.2をマザーボードとして使用する場合は、DC電源を接続する必要はありません。

    **2** ホットスワップはサポートされていません。
:::

- **ステップ 1.** Grove - RGB LED Matrix w/DriverをGrove-Base Shieldの**I2C**ポートに接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

:::note
        Grove Base Shieldがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino      |  Groveケーブル       | Grove - RGB LED Matrix w/Driver |
|--------------- |--------------------|-----|
| GND            | 黒                | GND |
| 5Vまたは3.3V   | 赤                | VCC |
| SDA            | 白                | SDA |
| SCL            | 黄色              | SCL |

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** Githubから[Seeed_RGB_LED_Matrix](https://github.com/Seeed-Studio/Seeed_RGB_LED_Matrix)ライブラリをダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。例を開きます。以下の3つの方法で開くことができます：
    1. Arduino IDEで直接開きます。パスは次の通りです：**File --> Examples --> Seeed_RGB_Led_Matrix --> display_emoji**。
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path1.jpg" alt="pir" width={600} height="auto" /></p>

    2. コンピュータで**display_emoji.ino**をクリックして開きます。このファイルは**XXXX\Arduino\libraries\Seeed_RGB_LED_Matrix-master\examples\display_emoji**フォルダ内にあります。**XXXX**はArduino IDEをインストールした場所です。
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path2.jpg" alt="pir" width={600} height="auto" /></p>

3. または、コードブロックの右上隅にあるアイコンをクリックするだけで、以下のコードを Arduino IDE の新しいスケッチにコピーできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

```cpp
#include "grove_two_rgb_led_matrix.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define SERIAL SerialUSB
#else
#define SERIAL Serial
#endif

#define DISPLAY_COLOR    0X11

void waitForMatrixReady()
{
    delay(1000);
}

GroveTwoRGBLedMatrixClass matrix;
void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    waitForMatrixReady();
    uint16_t VID = 0;
    VID = matrix.getDeviceVID();
    if(VID != 0x2886)
    {
        SERIAL.println("LEDマトリックスを検出できません!!!");
        while(1);
    }
    SERIAL.println("マトリックスの初期化に成功しました!!!");
}

void loop()
{
    for(int i=0;i<35;i++)
    {
        matrix.displayEmoji(i,5000,true);
        delay(5000);
    }
}
```

:::note
ライブラリファイルが更新される可能性があります。このコードは更新されたライブラリファイルには適用されない場合がありますので、最初の2つの方法を使用することをお勧めします。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

:::success
すべてが正常に動作すれば、LEDマトリックスに以下が表示されます：
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_wiki.gif" alt="pir" width={600} height="auto" /></p>

### DIY

次に、DIYについて説明します。

:::note
このバージョンのファームウェアでは、UNOシリアルを使用して独自の画像をDIYする場合、Arduinoのファイルを変更する必要があります。MegaやLotusを使用する場合、この変更は必要ありません。
:::

> Arduinoセットアップフォルダ **xxxxx\Arduino\hardware\arduino\avr\libraries\Wire\src** を見つけ、**Wire.h** ファイルを開きます。

以下を変更します：

```
#define BUFFER_LENGTH 32
```

を

```
#define BUFFER_LENGTH 128
```

に変更します。

> 次に、Arduinoセットアップフォルダ **xxxxx\Arduino\hardware\arduino\avr\libraries\Wire\src\utility** を見つけ、**twi.h** ファイルを開きます。

以下を変更します：

```
#define TWI_BUFFER_LENGTH 32
```

を

```
#define TWI_BUFFER_LENGTH 128
```

に変更します。

---

DIYを始めましょう。

- **ステップ 1.** [画像エディタ](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/docs.zip) をダウンロードします。これはzipファイルなので、解凍してください。

- **ステップ 2.** フォルダ **doc-->doc** 内の **index.html** を見つけ、ダブルクリックして開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/DIY.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 3.** 独自の画像を作成します。1つ完成したら、コントロールパネルの **Insert** をクリックして次の画像を編集できます。すべての画像シーケンスが完成したら、コードゾーンのコードをコピーします。

- **ステップ 4.** 以下のコードブロックの9行目 **unit64_t example[]** を独自のコードに置き換えます。

```cpp
#include "grove_two_rgb_led_matrix.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define SERIAL SerialUSB
#else
#define SERIAL Serial
#endif

uint64_t example[] = {

  0xffff5e5e5e5effff,
  0xff5effffffff5eff,
  0x5eff5effff5eff5e,
  0x5effffffffffff5e,
  0x5eff5effff5eff5e,
  0x5effff5e5effff5e,
  0xff5effffffff5eff,
  0xffff5e5e5e5effff,
 
  0xffff29292929ffff,
  0xff29ffffffff29ff,
  0x29ff29ffff29ff29,
  0x29ffffffffffff29,
  0x29ff29292929ff29,
  0x29ffffffffffff29,
  0xff29ffffffff29ff,
  0xffff29292929ffff,
 
  0xffff00000000ffff,
  0xff00ffffffff00ff,
  0x00ff00ffff00ff00,
  0x00ffffffffffff00,
  0x00ffff0000ffff00,
  0x00ff00ffff00ff00,
  0xff00ffffffff00ff,
  0xffff00000000ffff
};

void waitForMatrixReady()
{
    delay(1000);
}

GroveTwoRGBLedMatrixClass matrix;
void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    waitForMatrixReady();
    uint16_t VID = 0;
    VID = matrix.getDeviceVID();
    if(VID != 0x2886)
    {
        SERIAL.println("LEDマトリックスを検出できません!!!");
        while(1);
    }
    SERIAL.println("マトリックスの初期化に成功しました!!!");
}

void loop()
{
 for (int i=0;i<3;i++) {
        matrix.displayFrames(example+i*8, 200, false, 1);
        delay(500);
    }
}
```

:::success
すべてが正常に動作すれば、LEDマトリックスに以下が表示されます：
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_smile.gif" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/Grove%20-%20RGB%20LED%20Matrix%20w%20Driver.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - RGB LED Matrix Driver Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/Grove%20-%20RGB%20LED%20Matrix%20w%20Driver.zip)

- **[Zip]** [RGB LED Matrix 8x8 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/RGB%20LED%20Matrix%208x8.zip)

- **[Zip]** [Seeed_RGB_LED_Matrix ライブラリ](https://github.com/Seeed-Studio/Seeed_RGB_LED_Matrix/archive/master.zip)

- **[PDF]** [データシート MY9221](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MY9221.pdf)

- **[PDF]** [データシート MP2155](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MP2155.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>