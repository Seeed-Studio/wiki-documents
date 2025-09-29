---
description: Grove 12チャンネル静電容量式タッチキーパッド (ATtiny1616)
title: Grove 12チャンネル静電容量式タッチキーパッド (ATtiny1616)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki.jpg)

Grove 12ボタン静電容量式タッチキーパッドは、最大16 MHzで動作するAVR® 8ビットプロセッサATtiny1616を基盤としています。ATtiny1616は、近接センサーと駆動シールドをサポートする静電容量式タッチインターフェースを備えたQTouch®周辺タッチコントローラーを統合した低消費電力・高性能チップです。このモジュールを使用すれば、ArduinoのパスワードキーパッドやDIYの電話キーパッドを簡単に作成できます。

このキーパッドは、携帯電話のキーボードのレイアウトと同じ3x4形式に設計されています。従来のキーパッドでは、3本の垂直線と4本の水平線をスキャンする必要があり、マイクロコントローラーの7つのI/Oピンを占有します。しかし、ATtiny1616とGroveコネクタを使用することで、Grove - 12チャンネル静電容量式タッチキーパッドにはRXとTXの2つのピンだけで十分です。このモジュールは、ハードウェアUARTインターフェースを備えたマイクロコントローラーで簡単に使用できるほか、ソフトウェアUARTを使用して2つの通常のI/Oピンでボタン入力を読み取ることも可能です。

総じて、Grove 12ボタン静電容量式タッチキーパッドは、特に[Grove互換メインボード](https://www.seeedstudio.com/seeeduino-boards-c-987.html)と一緒に使用する場合、コードがほとんど不要で、はんだ付けも不要、ただ差し込むだけで使える簡単なモジュールです。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- 低消費電力のATtiny1616コントローラー
- 3.3V / 5V対応
- 静電容量式タッチ、高感度
- 12ボタンキーパッド
- 4ピンGrove UARTコネクタ
- オンボードLEDインジケーター

## 応用例

- 電話キーパッド
- パスワードアクセス
- 拡張入力インターフェース

## ピン配置

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg" alt="タッチキーパッドハードウェア" title="ハードウェア概要" />
  </a>
  <figcaption><b>図1</b>. <i>ハードウェア概要</i></figcaption>
</figure>
</div>

## 仕様

| パラメータ | 値 |
|---|---|
| 電源電圧 | 3.3V / 5V |
| CPU | AVR® 8ビットCPU @ 16MHz |
| センサータイプ | 静電容量式タッチキーパッド |
| ボタン数 | 12 |
| 動作温度範囲 | -40°C ～ 105°C |
| 出力インターフェース | UART |
| ファームウェアダウンロードインターフェース | UPDI |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove 12ボタン静電容量式タッチキーパッド |
|----------------|-------------|-----------------------------------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html)|

> さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

#### ハードウェア接続

- **ステップ1.** Grove 12ボタン静電容量式タッチキーパッドをBase Shieldの**D2**ポートに接続します。

> SAMボードを使用している場合は、**UART**ポートに接続する必要があります。詳細は表1を参照してください。

| ボード | UARTタイプ | 接続ポート |
|--------|------------|------------|
| AVRボード (例: Seeeduino V4.2) | ソフトUART | D2, D3 |
| SAMボード (例: Seeeduino Lotus M0+) | ハードウェアUART | UART |

<div align="center"><b>表1.</b><i>UARTポート選択</i></div>

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki-connect.jpg)

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** Githubから[12_Channel_Keypad.ino](https://github.com/Seeed-Studio/Seeed_ATtiny1616/blob/master/12_Channel_Keypad.ino)をダウンロードします。

- **ステップ2.** 次に`12_Channel_Keypad.ino`を開くか、以下のコードを新しいArduinoスケッチにコピーします。

```cpp
#include "SoftwareSerial.h"

#if defined(ARDUINO_ARCH_AVR)
#define SERIAL Serial
SoftwareSerial mySerial(2,3);
#define TRANS_SERIAL  mySerial
#elif defined(ARDUINO_ARCH_SAMD)
#define SERIAL SerialUSB
#define TRANS_SERIAL  Serial
#else

#endif


//RX=2,TX=3(D2) ソフトウェアシリアルポート

void setup() {
 TRANS_SERIAL.begin(9600); 

    SERIAL.begin(9600);  // 出力用シリアルを開始
    SERIAL.println("Version:v1.0");
}

void loop() {
    printData();
}

/*
* データマッピング: E1---1；E2---2；E3---3；E4---4；E5---5；E6---6；
*                   E7---7；E8---8；E9---9；EA---*；EB---0；EC---#；
*/
void printData() {
    while(TRANS_SERIAL.available()) {
        uint8_t data = TRANS_SERIAL.read();
        switch(data) {
                case 0xE1 :
                    SERIAL.println("1");
                    break;
                case 0xE2 :
                    SERIAL.println("2");
                    break;
                case 0xE3 :
                    SERIAL.println("3");
                    break;
                case 0xE4 :
                    SERIAL.println("4");
                    break;
                case 0xE5 :
                    SERIAL.println("5");
                    break;
                case 0xE6 :
                    SERIAL.println("6");
                    break;
                case 0xE7 :
                    SERIAL.println("7");
                    break;
                case 0xE8 :
                    SERIAL.println("8");
                    break;
                case 0xE9 :
                    SERIAL.println("9");
                    break;
                case 0xEA :
                    SERIAL.println("*");
                    break;
                case 0xEB :
                    SERIAL.println("0");
                    break;
                case 0xEC :
                    SERIAL.println("#");
                    break;
                default:
                    break;
            }
    }

}

```

- **ステップ3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ4.** Arduino IDEの**シリアルモニタ**を開きます。**ツール -> シリアルモニタ**をクリックするか、`ctrl`+`shift`+`m`キーを同時に押します。ボーレートを**9600**に設定します。

:::tip
これで、キーパッドに触れると、モニタに対応するキーが出力されます。
:::

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/arduino-output.jpg" alt="grove keypad demo" title="output" />
  </figure>
</div>

### Raspberry Piで遊ぶ

**必要な材料**

| Raspberry Pi | Grove Base Hat for RasPi | Grove 12ボタン静電容量式タッチキーパッド |
|--------------|---------------------------|-----------------------------------------|
|![画像を挿入](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像を挿入](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html)|

- **ステップ 1**. Grove Base Hat を Raspberry Pi に接続します。

- **ステップ 2**. Grove 12ボタン静電容量式タッチキーパッドを Base Hat の **UART** ポートに接続します。

- **ステップ 3**. Raspberry Pi の電源を入れます。

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pii-connect.jpg)

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye** を搭載した Raspberry Pi を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::

##### UART 設定

開始する前に、Raspberry Pi の UART を設定する必要があります。

- ステップ 1. Raspberry Pi3 の **UART0** を有効にします。

```
sudo nano /boot/config.txt
```

次に、**config.txt** の末尾に `dtoverlay=pi3-disable-bt` を追加します。

`ctrl`+`x` を押して nano を終了し、`y` を押して変更を保存します。

- ステップ 2. UART0 を使用するためにシステムサービスを無効にします。

```
sudo systemctl disable hciuart
```

:::note
Pi3-disable-bt は Bluetooth デバイスを無効にし、UART0/ttyAMA0 を GPIO 14 および 15 に復元します。また、モデムを初期化するシステムサービスが UART を使用しないように無効化する必要があります: `sudo systemctl disable hciuart`。
:::

- ステップ 3. **cmdline.txt** から `console=serial0,115200` を削除します。

```
sudo nano /boot/cmdline.txt
```

このファイル内の `console=serial0,115200` を削除します。

:::note
もしこのファイル内に `console=serial0,115200` が見つからない場合は、このステップをスキップしてください。
:::

- ステップ 4. Raspberry Pi を再起動します。

```
sudo reboot
```

詳細については、公式の [Raspberry Pi UART Config](https://www.raspberrypi.org/documentation/configuration/uart.md) を確認してください。

##### Raspberry Pi デモ

- **ステップ 1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を構成します。

システム環境が正常に構成されると、次のようなプロンプトが表示されます：

```cpp
Running setup.py install for grove.py ... done
Successfully installed grove.py-0.6
#######################################################
  Lastest Grove.py from github install complete   !!!!!
#######################################################

```

次に、`ls` を入力すると、ルートディレクトリに **grove.py** フォルダが表示されます。

```cpp
pi@raspberrypi:~ $ ls
01_HelloRPi            Desktop    MagPi         rpi_apa102driver
01_HelloRPi.cpp        Documents  Music         Templates
4mics_hat              Downloads  ofxGPIO       Videos
apa102_led.c           env        Pictures      wiringpi_apa102
bcm2835-1.50           grove.py   Public        wiringpi_apa102.cpp
bcm2835-1.50.tar.gz    led        python_games
bcm2835-1.50.tar.gz.1  led1       respeaker

```

- **ステップ 3**. 次のコマンドを実行してデモを実行します。

```
cd grove.py/grove
python grove_12_channel_touch_keypad.py

```

:::tip
    次にキーキャップに触れると、ターミナルに対応するキーが出力されます。
:::

![](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/grove-py-result.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove 12 チャンネル静電容量式タッチキーパッド (ATtiny1616) 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip)
- **[PDF]** [ATtiny1616 データシート](https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/ATtiny1616-1617_Datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>