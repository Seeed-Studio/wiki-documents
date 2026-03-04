---
description: ReSpeaker Core v2.0
title: reSpeaker Core v2.0
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Core_v2.0
sku: 102990883
last_update:
  date: 1/11/2023
  author: jianjing Huang
---
![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_front.JPG)

Seeed の ReSpeaker Core v2.0 は、音声インターフェースアプリケーション向けに設計されています。Rockchip RK3229（最大 1.5GHz で動作するクアッドコア ARM Cortex A7）をベースとし、1GB RAM を搭載しています。このボードは 6 マイクアレイを備え、DoA（Direction of Arrival）、BF（Beam-Forming）、AEC（Acoustic Echo Cancellation）などの音声アルゴリズムをサポートします。

ReSpeaker Core v2.0 は GNU/Linux オペレーティングシステムを実行します。強力でアクティブなコミュニティの恩恵を受け、既存のソフトウェアやツールを開発・テスト・デプロイに利用できるため、迅速な製品開発が可能です。

ReSpeaker Core v2.0 は、企業が評価するための多機能な開発ボードとして設計されています。この目的のため、ボードは 2 つの主要なセクションで構成されています。1 つ目は CPU、メモリ（RAM）、PMU を含む中央のコアモジュールです。2 つ目は eMMC、コネクタ、無線接続コンポーネントなどの周辺機器を含む外側のキャリアボードです。どちらのセクションも、あるいは両方とも、Seeed のカスタマイズサービスを通じてカスタマイズできます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07DN43Q7L" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## 特徴

- 高性能 SoC を備えたオールインワンソリューション
- 1GB RAM & 4GB eMMC
- 6 マイクアレイ  
- USB OTG、USB デバイス
- WiFi b/g/n および BLE 4.0
- 検出範囲：約 5 メートル
- 他のセンサー用 Grove ソケット
- 3.5mm オーディオジャック & JST2.0 コネクタ
- 6 マイクアレイ用および 2 つのループバック（ハードウェアループバック）用 8 チャンネル ADC

- Debian ベースの Linux システム
- C++ SDK と Python ラッパー
- 音声アルゴリズム用 SDK（完全なドキュメント付き）
- 音声アルゴリズムと機能：

  - キーワードウェイクアップ
  - BF（Beam-Forming）
  - DoA（Direction of arrival）
  - NS（Noise suppression）
  - AEC（Acoustic echo cancellation）および AGC（Automatic gain control）

## 仕様

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
.tg .tg-dc35{background-color:#f9f9f9;border-color:inherit;vertical-align:top}
.tg .tg-l711{border-color:inherit}
.tg .tg-us36{border-color:inherit;vertical-align:top}
.tg .tg-4646{background-color:#f9f9f9;border-color:inherit}
.tg .tg-gcw3{border-color:#000000}
</style> -->

<table className="tg">
  <tbody><tr>
      <th className="tg-gcw3" colSpan={3}>Features</th>
    </tr>
    <tr>
      <td className="tg-4646" rowSpan={6}>Soc(Rockchip RK3229)</td>
      <td className="tg-4646">CPU</td>
      <td className="tg-4646">Quad-Core Cortex-A7,up to 1.5GHz</td>
    </tr>
    <tr>
      <td className="tg-l711">GPU</td>
      <td className="tg-l711">Mali400MP, Support OpenGL ES1.1/2.0</td>
    </tr>
    <tr>
      <td className="tg-dc35">Memory</td>
      <td className="tg-dc35">1GB RAM(Core Module includes RAM and PMU)</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={3}>System</td>
      <td className="tg-us36">Operating Voltage:3.6-5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">80 pins on-module</td>
    </tr>
    <tr>
      <td className="tg-us36">PMU on-module</td>
    </tr>
    <tr>
      <td className="tg-dc35" rowSpan={7}>Peripheral</td>
      <td className="tg-dc35">Networks</td>
      <td className="tg-dc35">WiFi b/g/n;<br />BLE 4.0;<br />Ethernet</td>
    </tr>
    <tr>
      <td className="tg-us36">USB</td>
      <td className="tg-us36">2 x USB Host;   1 x USB OTG;    1 x USB power</td>
    </tr>
    <tr>
      <td className="tg-dc35">Grove</td>
      <td className="tg-dc35">1 x Grove socket (I2C and Digital)</td>
    </tr>
    <tr>
      <td className="tg-us36">Video</td>
      <td className="tg-us36">4K VP9 and 4K 10bits H265/H264 video decode, up to 60fps</td>
    </tr>
    <tr>
      <td className="tg-dc35">Audio</td>
      <td className="tg-dc35">Max Sample Rate: 96Khz;<br />6 Microphone Array;<br />3.5mm Audio Jack;<br />JST2.0 Audio output connector</td>
    </tr>
    <tr>
      <td className="tg-us36">Storage</td>
      <td className="tg-us36">4GB eMMC on-board;<br />SD slot</td>
    </tr>
    <tr>
      <td className="tg-dc35">Others</td>
      <td className="tg-dc35">12 x RGB LEDs;<br />8 GPIO pins</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={2}>Power Consumption</td>
      <td className="tg-us36">Standby Mode</td>
      <td className="tg-us36">200mA /5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">Work with Algorithm Mode</td>
      <td className="tg-dc35">330mA /5V</td>
    </tr>
  </tbody></table>

:::note
​    この表は ReSpeakser Core v2.0 の基本仕様のみを一覧にしたものです。より専門的なパラメータについては、[Acoustic & Electrical Specification of ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf) を参照してください。
:::

## ハードウェア概要

**インターフェースとストレージ**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> 3.5mm ヘッドホンジャック：**
オーディオを出力します。このポートにアクティブスピーカーまたはヘッドホンを接続できます。

- **<font face="" size="3" font color="ff0000">②</font> USB OTG：**
この USB ポートは、putty（または他のシリアルツール）のシリアルモードを介してコンピュータに接続するために使用します。

- **<font face="" size="3" font color="ff0000">③</font> USB 電源入力：**
このポートは Respeaker Core v2.0 に電源を供給するために使用します。

- **<font face="" size="3" font color="ff0000">④</font>**スピーカージャック：**
パッシブスピーカー用のオーディオを出力します。Jst 2.0 ソケット。

- **<font face="" size="3" font color="ff0000">⑤</font> UART：**
この UART ポートを介して ReSpeaker Core v2.0 をコンピュータに接続することもできます。

- **<font face="" size="3" font color="ff0000">⑥</font> 8 ピン GPIO：**
拡張アプリケーション用の汎用入出力インターフェースです。

- **<font face="" size="3" font color="ff0000">⑦</font> SD カードスロット：**
micro-SD カードを挿入します。

- **<font face="" size="3" font color="ff0000">⑧</font> eMMC：**
Embedded Multi Media Card。イメージを eMMC に書き込むことで、ReSpeaker Core v2.0 を eMMC から起動させることができます。

- **<font face="" size="3" font color="ff0000">⑨</font> USB Host：**
USB デバイス（USB マウス、USB キーボード、USB フラッシュディスクなど）を、これら 2 つの USB ホストを介して ReSpeaker Core v2.0 に接続できます。

- **<font face="" size="4" font color="ff0000">Ⓐ</font> Ethernet：**
インターネットにアクセスします。

- **<font face="" size="4" font color="ff0000">Ⓑ</font> HDMI：**
ビデオを出力します。

- **<font face="" size="4" font color="ff0000">Ⓒ</font> Bluetooth および WIFI アンテナ：**
オンボードアンテナは WIFI と Bluetooth 用です。また、2.4G アンテナまたは PCB アンテナ用のインターフェースも用意しています。

- **<font face="" size="4" font color="ff0000">Ⓓ</font> Grove ソケット：**
デジタルまたは I2C 用の Grove ソケットです。

**システム図**

クリックすると元の画像を表示できます

<a href="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png"/></a>

**ピン配置**

**ヘッダのピンインデックス定義**

| 8 ピンヘッダ | Grove ソケット |
|--------------|-------------|
| ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/GPIO.png)|![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/socketBLACK.png)|

**GPIO ピン**

MRAA| HEADER PIN INDEX | SYSFS PIN |RK3229 PIN
--|--|--|--
0 |0| 1091| GPIO2_D3
1 |1|   --| VCC
2 |2| 1043| GPIO1_B3
3 |3| 1127| GPIO3_D7
4 |4| 1017| GPIO0_C1
5 |5| 1067| GPIO2_A3
6 |6|   --| GND
7 |7| 1013| GPIO0_B5
8 |8| 1085| GPIO2_C5
9 |9| 1084| GPIO2_C4
10|10| --| VCC
11|11| --| GND

**I2C ピン**

|MRAA |HEADER PIN INDEX |SYSFS PIN| RK3229 PIN|
|--|--|--|--|
|0 |8 |-- |I2C2_SCL|
|0 |9 |-- |I2C2_SDA|

**寸法**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_2.png)

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_1.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=10325e7b-718b-477f-80d1-c85f5c2289c7" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## 応用例

- スマートスピーカー
- インテリジェント音声アシスタントシステム
- ボイスレコーダー
- 音声会議システム
- 会議用通信機器
- 音声対話ロボット
- 車載音声アシスタント
- その他、音声コマンドを必要とするシナリオ

## はじめに

### 準備

このパートでは次の内容を説明します：

- イメージのインストール方法
- シリアルコンソールへのアクセス方法
- WiFi の設定方法
- SSH & VNC への接続方法
- Bluetooth の設定方法
- オーディオ録音および再生テスト

**前提条件**

- ReSpeaker Core V2.0
- Wi-Fi ネットワーク
- 4GB（以上）の SD カードと SD カードリーダー
- PC または Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)（オプション）
- 電源用 5V 1A Micro USB アダプタ（オプション）
- 2 本の Micro-USB ケーブル

:::caution
USB ケーブルは優しく挿し込んでください。そうしないとインターフェースを破損するおそれがあります。また、内部に 4 本の線が入っている USB ケーブルを使用してください。2 本線のケーブルではデータを転送できません。お持ちのケーブルが確実でない場合は、<a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><b>here</b></a> をクリックして購入できます
:::

**イメージのインストール**

Raspberry Pi と同様に、ReSpeaker Core v2.0 を起動して動作させるには、SD カードから ReSpeaker Core v2.0 イメージをインストールする必要があります。ReSpeaker Core v2.0 を起動する方法は 2 通りあります。SD カードから起動するか、eMMC から起動するかを選択できます。

**A. SD カードからの起動**

- **ステップ 1.** [mirror-azure](http://respeaker.seeed.io/images/) をクリックして、最新のイメージ zip ファイル ```respeaker-debian-9-lxqt-sd-********-4gb.img.xz``` または ```respeaker-debian-9-iot-sd-********-4gb.img.xz``` をダウンロードします。

|セクション|説明|
|---|----|
|**iot** / **lxqt**|**lxqt** バージョンにはデスクトップ GUI が付属していますが、**iot** バージョンには付属していません。ReSpeaker Core v2.0 を初めて使用する場合は、**lxqt** バージョンを推奨します。|
|**flasher** / **sd**|**flasher** バージョンはオンボード eMMC をフラッシュするために使用し、フラッシュ後は SD カードを取り外すことができます。**sd** バージョンでは、常に SD カードを挿入したままにしておく必要があります。|

  開発用途には **lxqt + sd** バージョンを推奨します。そのため、**respeaker-debian-9-lxqt-sd-[date]-4gb.img.xz** ファイルをダウンロードしてください。

:::caution
この wiki は **respeaker-debian-9-lxqt-sd-20180610-4gb.img.xz** イメージバージョンに基づいています。
:::

- **ステップ 2.** SD カードリーダーを使って SD カードを PC または MAC に挿入します。容量 4G 以上の SD カードが必要です。

- **ステップ 3.** [Etcher](https://etcher.io/) をここからダウンロードし、Etcher を使って ```*.img.xz``` ファイルを SD カードに直接書き込みます。あるいは ```*.img.xz``` ファイルを解凍して ```*.img``` ファイルにし、他のイメージ書き込みツールで SD カードに書き込んでも構いません。
<br />

<br />プラスアイコンをクリックして先ほどダウンロードしたイメージを追加すると、ソフトウェアが自動的に挿入された SD カードを選択します。その後、Flash! をクリックして書き込みを開始します。完了まで約 10 分かかります。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/v2-flash-sd.png)

- **ステップ 4.** イメージを書き込んだ SD カードを ReSpeaker Core v2.0 に挿入します。PWR_IN マイクロ USB ポートからボードに電源を供給し、電源投入後は SD カードを取り外さないでください。ReSpeaker Core v2.0 は SD カードから起動し、USER1 と USER2 の LED が点灯するのが確認できます。USER1 は通常、起動時にハートビートパターンで点滅するように設定され、USER2 は通常、起動時に SD カードアクセス中に点灯するように設定されています。これで、次の「Serial Console」のパートに進むことができます。

**B. eMMC からの起動**

工場出荷時の EMMC にはファームウェアが入っていません。PC または Mac を使用して、ReSpeaker の eMMC（オンボードフラッシュメモリ）に ReSpeaker のイメージファイルを書き込むことができます。その後、ReSpeaker は SD カードからではなく、eMMC（オンボードフラッシュメモリ）から起動するようになります。

- **ステップ 1.** 最新のイメージ zip ファイル ```respeaker-debian-9-iot-flasher-********-4gb.img.xz``` または ```respeaker-debian-9-lxqt-flasher-********-4gb.img.xz``` を mirror-azure からダウンロードします。lxqt バージョンには Debian デスクトップが付属し、iot バージョンには付属しません。また、flasher バージョンは eMMC をフラッシュするためのもので、sd バージョンは SD カードから起動するためのものです。

- **ステップ 2.** Etcher を使って ```*.img.xz``` ファイルを SD カードに直接書き込むか、```*.img.xz``` ファイルを解凍して ```*.img``` ファイルにし、他のイメージ書き込みツールで SD カードに書き込んでください。

- **ステップ 3.** SD カードの書き込みが完了したら、その SD カードを ReSpeaker Core v2.0 に挿入します。PWR_IN マイクロ USB ポートからボードに電源を供給し、フラッシュ中は SD カードを取り外さないでください。

フラッシュ処理の間、USER1 と USER2 の LED が交互に点滅します。完了まで約 10 分かかります。LED が消灯したら、ボードの電源を切り、SD カードを抜いてから再度電源を入れてください。LED が点灯すれば、イメージが eMMC に正しくフラッシュされたことを意味します。

次のコマンドでイメージバージョンを確認することもできます: cat /etc/issue.net.

**Serial Console**

これで ReSpeaker Core v2.0 が起動できるようになりました。WiFi の設定などを行うために、コンソール経由で Linux システムにアクセスしたくなるでしょう。コンソールにアクセスする方法は 2 通りあります:

- A. OTG USB ポート - ボード上で Linux システムが動作している必要があります

- B. UART ポート - コンソールにアクセスするためのハードな方法で、低レベルの問題をデバッグする際に使用できます

**A. OTG 経由での接続**

- **ステップ 1.** micro USB ケーブルを用意し、それがデータ通信可能なケーブル（給電専用ではない）であることを確認してから、micro USB 側を ReSpeaker の **OTG** マイクロ USB ポートに接続します（ReSpeaker ボードには 2 つのマイクロ USB ポートがあり、シルク印刷で異なるラベルが付いています。1 つは **PWR_IN**、もう 1 つは **OTG** です）。次に、このケーブルのもう一方の端をコンピュータに接続します。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/lianjiediannan.jpg)

- **ステップ 2.** コンピュータ側でシリアルポートが認識されているか確認します:

  - Windows: デバイスマネージャを確認し、新しいシリアルデバイス ```COMx```（x は増加する番号）が表示されているはずです。Windows XP/7/8 を使用している場合は、[windows CDC drivers](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/ReSpeaker_Gadget_CDC_driver.7z) をインストールする必要があるかもしれません。
  - Linux: `ls /dev/ttyACM*` を実行すると、```/dev/ttyACMx``` が表示されるはずです。x は使用した USB ポートに応じて変化します。
  - Mac: `ls /dev/cu.usb*` を実行すると、```/dev/cu.usbmodem14xx``` が表示されるはずです。xx は使用した USB ポートに応じて変化します。

- **ステップ 3.** 好みのシリアルデバッグツールを使ってシリアルポートに接続します。シリアルの設定は 115200 baud、8Bits、Parity None、Stop Bits 1、Flow Control None です。例えば:

  - Windows: [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) を使用し、```Serial``` プロトコルを選択して、ReSpeaker Core v2.0 の正しい COM ポート、```115200``` baud、8Bits、Parity None、Stop Bits 1、Flow Control None を設定します。
  - Linux: 使用している USB To TTL Adapter によって、```screen /dev/ttyACM0(,1, and so on)``` 115200 または ```screen /dev/ttyUSB0(,1, and so on) 115200``` のいずれかになります。
  - Mac: 使用している USB To TTL Adapter によって、```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` または ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200``` のいずれかになります。

- **ステップ 4.** デフォルトのユーザー名は ```respeaker```、パスワードも ```respeaker``` です。

**B. UART ポート経由での接続**

このセクションでは、USB to TTL アダプタを使用して、コンピュータから ReSpeaker の Uart ポート（Uart ポートは ReSpeaker のスピーカープラグのすぐ左側にあります）に接続し、ReSpeaker との接続を確立する方法を説明します。

- **ステップ 1.** Uart ポートと PC/Mac を USB To TTL Adapter で接続します。RX/TX の電圧は 3.3V であることに注意してください。USB To TTL Adapter を持っていない場合は、[here](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) をクリックして入手できます。

- **ステップ 2.** 以下のシリアルデバッグツールを 115200 baud で使用します:
  - Windows: [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) を使用し、```Serial``` プロトコルを選択して、ReSpeaker Core v2.0 の正しい COM ポート、115200 baud、8Bits、Parity None、Stop Bits 1、Flow Control None を設定します。
  - Linux: 使用している USB To TTL Adapter によって、```screen /dev/ttyACM0(,1, and so on) 115200``` または ```screen /dev/ttyUSB0(,1, and so on) 115200``` のいずれかになります。
  - Mac: 使用している USB To TTL Adapter によって、```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` または ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200``` のいずれかになります。

- **ステップ 3.** ログインユーザー名は respeaker、パスワードも respeaker です。

- **ステップ 4.** USB to TTL Adapter を持っていない場合は、Arduino を使用することもできます。Arduino を使用する場合は、ジャンパワイヤの一端を Arduino の RESET ピンに、もう一端を Arduino の GND ピンに接続します。これにより Arduino の ATMEGA MCU をバイパスし、Arduino を USB to TTL アダプタとして動作させることができます。ビデオチュートリアルは [here](https://www.youtube.com/watch?v=qqSLwK1DP8Q) を参照してください。次に、Arduino の GND ピンを Respeaker の Uart ポートの GND ピンに接続します。Arduino の Rx ピンを Respeaker の Uart ポートの Rx ピンに接続します。Arduino の Tx ピンを Respeaker の Uart ポートの Tx ピンに接続します。最後に、Arduino を Arduino の USB ケーブルで PC/Mac に接続します。次のコマンドを入力して、Mac または Linux PC が Arduino を認識していることを確認します:

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

次のような結果が返ってくるはずです:

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

次に、上記のステップ 2 に従って、このシリアル接続経由で Respeaker に接続します。これは一度だけ行う手順であり、その後は Respeaker を Wi-Fi 接続用に設定し、以降は ssh または VNC 経由で接続することになります。

**ネットワーク設定**

**A. Wi-Fi 設定**

Network Manager ツール nmtui を使って ReSpeaker のネットワークを設定します。nmtui は ReSpeaker のイメージにすでにインストールされています。

```
sudo nmtui              # respeaker user needs sudo
```

すると次のような設定画面が表示されるので、```Activate a connection``` を選択し、```Enter``` キーを押します。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-1.png)

ReSpeaker v2.0 用の Wi-Fi を選択し、```Enter``` キーを押してから Wi-Fi パスワードを入力し、再度 ```Enter``` キーを押します。```*``` マークが表示されたら、ReSpeaker が Wi-Fi ネットワークに正常に接続されたことを意味します。```Esc``` キーを 2 回押して Network Manager の設定ツールを終了します。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-2.png)

次のコマンドを使用して、ReSpeaker の IP アドレスを確認します。

```
ip address
```

次の例では、この ReSpeaker の IP アドレスが ```192.168.7.108``` であることがわかります。

```
root@v2:/home/respeaker# ip address

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: sit0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN group default qlen 1
    link/sit 0.0.0.0 brd 0.0.0.0
3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether e0:76:d0:37:38:6d brd ff:ff:ff:ff:ff:ff
    inet **192.168.7.108**/24 brd 192.168.7.255 scope global dynamic wlan0
       valid_lft 604332sec preferred_lft 604332sec
    inet6 2601:647:4680:ebf0:ec0a:5965:e710:f329/64 scope global noprefixroute dynamic
       valid_lft 345598sec preferred_lft 345598sec
    inet6 fe80::64de:cac8:65ef:aac8/64 scope link
       valid_lft forever preferred_lft forever
```

Network Manager には Networ Manager の GUI インターフェースに加えて、コマンドラインツールもあります。非公開（hidden）Wi-Fi ネットワークに接続する場合は、このコマンドラインツールを使用する必要があります：

```
nmcli c add type wifi con-name mywifi ifname wlan0 ssid your_wifi_ssid
nmcli con modify mywifi wifi-sec.key-mgmt wpa-psk
nmcli con modify mywifi wifi-sec.psk your_wifi_password
nmcli con up mywifi
```

**B. イーサネット接続**

イーサネットケーブルを使用してネットワークに接続できます。インターネットに接続されているイーサネットケーブルを差し込むだけで OK です。

**SSH と VNC への接続**

**A. SSH**

ReSpeaker v2.0 では SSH サーバーが自動的に起動します。Windows ユーザー向けには、サードパーティ製の SSH クライアントが利用できます。Linux/Mac ユーザー向けには、SSH クライアントが標準で組み込まれています。

- Windows: PUTTY を使用し、SSH プロトコルを選択して正しい IP アドレスを入力し、Open をクリックします。ユーザー名 respeaker、パスワード respeaker でログインします。

- Linux/Mac:

```
ssh respeaker@192.168.***.***
// password: respeaker
```

:::note
SSH の使用中に動作が遅いと感じる場合は、混雑していない WiFi ネットワークに切り替えてください。
:::

**B. VNC**

Alexa から認証を取得するために、VNC Viewer を使用する必要があります。システムには VNC サーバーが組み込まれています。VNC サーバーは軽量な Qt デスクトップ環境である **lxqt** デスクトップ GUI を起動します。
VNC サービスも自動的に起動します。[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) または [VNC Viewer for Google Chrome](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en) を使用して、ReSpeaker Core v2.0 のデスクトップに接続します。

VNC を使用するには、PC/Mac と ReSpeaker v2.0 を同じ Wi-Fi ネットワークに接続します。その後 VNC Viewer を開き、アドレスバーに ```192.168.xxx.xxx``` を入力します。```192.168.xxx.xxx``` はボードの IP アドレスであり、**ifconfig** コマンドで確認できます。```Unencrypted connection``` が表示された場合は、Continue をクリックして続行します。パスワードは ```respeaker``` です。

![](https://user-images.githubusercontent.com/5130185/34665797-93b222d6-f49c-11e7-8112-704f91163038.png)

:::note
VNC 接続はネットワーク品質に大きく依存します。VNC 画面のリフレッシュレートが非常に低くなる可能性があることを、あらかじめご承知おきください。
:::

**スピーカーまたはヘッドセットへの接続**

このボードは、SoC の内蔵コーデックを使用して再生を行います。JST スピーカーポートとヘッドセットポートはそれぞれ専用のアンプで駆動されており、両方のアンプは SoC の同じコーデックに接続されています。SEEED が実装したサウンドカードドライバは、キャプチャデバイスと再生デバイスの両方を駆動します。そのため ALSA デバイスリストには、キャプチャ専用または再生専用のサウンドカードは存在しません。すべて seeed-8mic-voicecard という名前になっています。

ボードから音を聞く最も簡単な方法は、ヘッドセットを接続することです。大音量のスピーカーを好む場合、ボードは最大 8W の駆動能力を出力できます。

**Bluetooth のセットアップ**

**Bluetooth を有効化する**

以下のコマンドを入力して、ReSpeaker Core v2.0 の Bluetooth をアップデートして有効化してください：

```
sudo apt update
sudo apt-mark hold firefox 
sudo apt upgrade
```

:::note
アップデートに失敗した場合は、状態の良い別の WiFi ネットワークに変更して、再度アップデートを行ってください。
:::

次に、以下のコマンドで Bluetooth を有効化します：

```
sudo systemctl enable bt-auto-connect.service
sudo reboot -f
```

**ReSpeaker Core v2.0 を Bluetooth スピーカー（スレーブデバイス）として使用する**

ReSpeaker Core v2.0 が再起動したら、スマートフォンまたはコンピュータの Bluetooth をオンにすると、**ReSpeaker-xxxx** という Bluetooth デバイスが見つかります。
それを選択して接続します。スピーカーまたはヘッドセットを ReSpeaker Core v2.0 に接続し、音楽を再生して Bluetooth スピーカーを楽しみましょう。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Bluetooth_connect.png)

**ReSpeaker Core v2.0 を Bluetooth プレーヤー（マスターデバイス）として使用する**

単なる Bluetooth スピーカーとして動作させるだけでなく、Bluetooth プレーヤーとして Bluetooth ヘッドセットや Bluetooth スピーカーをハックすることもできます。
では、ハックしてみましょう。

- **ステップ 1.** `bluetoothctl` を入力して Bluetooth シェルを開きます。

- **ステップ 2.** `scan on` を入力して Bluetooth デバイスをスキャンします。

- **ステップ 3.** ReSpeaker Core v2.0 が目的のデバイスを見つけたら、`scan off` を入力します。
この wiki では、MDR-1000X ヘッドセットをターゲットとし、デバイス ID Device `04:5D:4B:81:35:84` を控えておきます。

```
respeaker@v2:~$ bluetoothctl
[NEW] Controller 43:43:A0:12:1F:AC ReSpeaker-1FAC [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device C8:69:CD:BB:9B:B3 C8-69-CD-BB-9B-B3
[NEW] Device E1:D9:68:0E:51:C0 MTKBTDEVICE
[NEW] Device 62:15:9C:3F:40:AA 62-15-9C-3F-40-AA
[NEW] Device 56:AF:DE:C0:34:25 56-AF-DE-C0-34-25
[NEW] Device B8:86:87:99:FB:10 SOLARRAIN
[CHG] Device B8:86:87:99:FB:10 Trusted: yes
[NEW] Device 04:5D:4B:81:35:84 MDR-1000X
[CHG] Device 04:5D:4B:81:35:84 Trusted: yes
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Key: 0x004c
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Value:
  10 05 0b 10 99 18 0a                             .......
[bluetooth]# scan off
[CHG] Device 04:5D:4B:81:35:84 RSSI is nil
[CHG] Device B8:86:87:99:FB:10 TxPower is nil
[CHG] Device B8:86:87:99:FB:10 RSSI is nil
[CHG] Device 4C:04:59:38:D3:25 RSSI is nil
[CHG] Device 58:44:98:93:35:24 RSSI is nil
Discovery stopped
[bluetooth]#

```

- **ステップ 4.** `pair + device ID` コマンドを使用して、Bluetooth デバイスを ReSpeaker Core v2.0 とペアリングします。

- **ステップ 5.** `Pairing successful` というメッセージが表示されたら、`connect + device ID` を入力します。

```
[bluetooth]# pair 04:5D:4B:81:35:84
Attempting to pair with 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 00001108-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Device 04:5D:4B:81:35:84 Paired: yes
Pairing successful
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: no
[CHG] Device 04:5D:4B:81:35:84 Connected: no
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
[bluetooth]# connect 04:5D:4B:81:35:84
Attempting to connect to 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
Connection successful
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[MDR-1000X]#
```

`Connection successful` が表示されたら、設定完了です！

`exit` または `quit` を入力してシェルを終了し、その後、以下のコマンドを使用して Bluetooth デバイスをテストできます。

```
arecord bluetoothtest.wav
aplay bluetoothtest.wav

```

**録音と再生**

**1.ALSA 経由でテスト**

これは開発段階の技術ドキュメントであるため、サウンドデバイスのインデックスはバージョンによって変更される可能性があります。そのため、まず次のコマンドで正しいデバイスインデックスを確認してください：

```
respeaker@v2:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 0: 100b0000.i2s1-ac108-pcm0 ac108-pcm0-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

respeaker@v2:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 1: 100b0000.i2s1-rk3228-hifi rk3228-hifi-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

名前に **seeed** プレフィックスを持つサウンドカードを探します。上記の例では、キャプチャデバイスは **hw:0,0** であり、これはカード **0**/デバイス **0** を意味します。
再生デバイスは **hw:0,1** であり、これはカード **0**/デバイス **1** を意味します。その後、次のコマンドで録音と再生をテストします：

```
# record & playback 2 channels audio
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 2 hello.wav
aplay -Dhw:0,1 -r 16000 -c 2 hello.wav

# If you want to output the sound by the bluetooth device, you need to use the command below to play
aplay -r 16000 -c 2 hello.wav

# record 8 channels audio
# there are 6 microphones on board, and ac108 compose the 2 remaining channels.
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 8 hello_8ch.wav
```

さらに、録音と再生を同時に行うこともできます。

```
arecord | aplay
```

**2. PulseAudio 経由でテスト**

まず PulseAudio が動作しているかどうかを確認します：

```
respeaker@v2:~$ ps aux|grep pulse|grep -v grep
respeak+  1109  0.0  0.7 363272  7932 ?        S<l  01:01   0:00 /usr/bin/pulseaudio --start --log-target=syslog
```

動作していない場合は、PulseAudio のドキュメントを参照して PulseAudio の自動起動を有効にしてください。その後、次のコマンドでテストします：

```
parecord --channels=8 --rate=16000 --format=s16le hello2.wav
paplay hello2.wav
```

さらに、デフォルトの ALSA デバイスは現在 PulseAudio にフックされているため、次のコマンドを使用しても PulseAudio 経由で音声の再生/録音が行われます：

```
arecord -v -f cd hello3.wav
aplay hello3.wav
```

ここまでで ReSpeaker Core v2.0 ボードの基本的な操作を学びましたので、次に進みましょう。ReSpeaker Core v2.0 を使用して、独自の AVS（Alexa Voice Service）デバイスや Dueros（Baidu の音声アシスタント）デバイスを構築できます。

## Wio Link で遊ぶ

ReSpeaker Core V2 を使用して IFTTT 経由で Wio Link を制御するには、[ReSpeaker Core V2 & Wio Link Tutorial](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_V2_&_Wio_Link/) に従ってください。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/OJ0i6QrZCSM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## GPIO で遊ぶ

このパートでは、**MRAA** と **UPM** を使用して、Respeaker Core v2.0 上の GPIO と Grove ソケットを制御する方法を紹介します。

- **ステップ 1. MRAA と UPM ライブラリを最新バージョンに更新する**

まず、最新の MRAA と UPM パッケージをインストールする必要があります。

```
sudo apt install  python-mraa python-upm libmraa1 libupm1 mraa-tools
```

- **ステップ 2. プラットフォーム情報を確認する**

```
#only have bus 0 and id=03(/dev/i2c-3), 0 is the i2c number for mraa and upm
respeaker@v2:~$ mraa-i2c list
Bus   0: id=03 type=linux

#mraa gpio numbers and system gpio numbers and it's pinmux
respeaker@v2:~$ mraa-gpio list
00      GPIO91: GPIO
01         VCC:
02      GPIO43: GPIO
03     GPIO127: GPIO
04      GPIO17: GPIO
05      GPIO67: GPIO
06         GND:
07      GPIO13: GPIO
08    I2C2_SCL: I2C  
09    I2C2_SDA: I2C  
10         VCC:
11         GND:
12      GPIO66: GPIO
```

ReSpeaker Core v2.0 ボードのピン定義の説明については、[Pin Out](#) を参照してください

- **ステップ 3. MRAA または UPM を使ったデモ**

**A. MRAA ライブラリを使用する**

**GPIO を直接制御する**

必要なもの

| ReSpeaker Core v2.0 |  Grove - Buzzer |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|
|[今すぐ入手](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

ジャンパワイヤを使って Grove PIR センサーの **SIG** ピンを ReSpeaker Core v2.0 のヘッダピン **0** に接続します。同時に VCC と GND の配線も忘れないでください。その後、以下のコードをコンソールに入力します

``` python
respeaker@v2:~$ python
Python 2.7.13 (default, Jan 19 2017, 14:48:08)
[GCC 6.3.0 20170118] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import mraa
>>> x = mraa.Gpio(0)
>>> x.dir(mraa.DIR_OUT)
0
>>> x.write(0)
0
>>> x.write(1)
0
>>>
```

**x.write(1)** を入力すると、ブザーから音が聞こえます。

**PIR モーションセンサーの例**

必要なもの

| ReSpeaker Core v2.0 |  Grove -  PIR Motion Sensor |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Grove%20-%20PIR%20Motion%20Sensor.jpg)|
|[今すぐ入手](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|

この例では、Python コードで Grove PIR センサーのトリガーを監視します。
ジャンパワイヤを使って Grove PIR センサーの **D1** ピンを ReSpeaker Core v2.0 のヘッダピン **0** に接続します。同時に VCC と GND の配線も忘れないでください。
次に、以下のコードを新しいファイルにコピーし、python ファイルとして **mraa_pir.py** という名前で保存します。このファイルを ReSpeaker Core v2.0 にコピーします。

``` python
import mraa

def on_trigger(gpio):
    print("pin " + repr(gpio.getPin(True)) + " = " + repr(gpio.read()))

pin = 0

try:
    x = mraa.Gpio(pin)
    print("Starting ISR for pin " + repr(pin))
    x.dir(mraa.DIR_IN)
    # respeaker v2 only support EDGE_BOTH
    x.isr(mraa.EDGE_BOTH, on_trigger, x)
    var = raw_input("Press ENTER to stop")
    x.isrExit()
except ValueError as e:
    print(e)

```

その後、以下のコマンドでコードを実行します。（先ほど保存した mraa_pir.py を含むフォルダにいることを確認してください）

``` python
sudo python mraa_pir.py
```

結果は次のようになります

```
$ sudo python mraa_pir.py
Starting ISR for pin 0
Press ENTER to stoppin 1091 = 0
pin 1091 = 0
pin 1091 = 1
...
```

**B. UPM ライブラリを使用する**

UPM プロジェクトは MRAA ライブラリに基づいてセンサードライバを実装しているため、GPIO プログラミングやセンサーの I2C アドレスが何かを気にする必要はありません。特定のセンサーに対するすべてのデフォルト情報とロジックは UPM ライブラリにラップされています。UPM は多数のセンサーをサポートしています。[UPM modules](https://iotdk.intel.com/docs/master/upm/modules.html)。しかし、すべてのセンサーが ReSpeaker Core v2.0 上で動作することを確認したわけではない点に注意してください。

**Grove Digital Light Sensor の例**

必要なもの

| ReSpeaker Core v2 |  Grove - Digital Light Sensor |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Digital_Light_Sensor.jpg)|
|[今すぐ入手](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

これは Grove Digital Light Sensor の例で、UPM の github リポジトリからコピーしたものです。

PIR Motion Sensor を Grove ソケット経由で Respeaker Core v2.0 に接続してください。
次に、以下のコードを新しいファイルにコピーし、python ファイルとして **tsl2561.py** という名前で保存します。このファイルを ReSpeaker Core v2.0 にコピーします。

``` python
#!/usr/bin/env python
# Author: Zion Orent <zorent@ics.com>
# Copyright (c) 2015 Intel Corporation.
#
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
#
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

from __future__ import print_function
import time, sys, signal, atexit
from upm import pyupm_tsl2561 as upmTsl2561

def main():
    # Instantiate a digital light sensor TSL2561 on I2C
    myDigitalLightSensor = upmTsl2561.TSL2561()

    ## Exit handlers ##
    # This function stops python from printing a stacktrace when you hit control-C
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # This function lets you run code on exit, including functions from myDigitalLightSensor
    def exitHandler():
        print("Exiting")
        sys.exit(0)

    # Register exit handlers
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    while(1):
        print("Light value is " + str(myDigitalLightSensor.getLux()))
        time.sleep(1)
if __name__ == '__main__':
    main()
```

結果は次のようになります：

``` python
respeaker@v2:~$ python tsl2561.py       
Light value is 0
Light value is 38
Light value is 20
Light value is 54
Light value is 13
Light value is 44
Light value is 31  
```

## よくある質問

**Q1: Audacity で録音と再生を行うには？**

  **A1:** **lxqt** バージョンには Audacity がプリインストールされています。左下の **Bird button** をクリックすると、**Sound & Video -> Audacity** にあります。

  Audacity を開いたら、小さな黒い矢印をクリックして録音および再生デバイスを選択し、下の画像のように設定してください。

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

  録音デバイスと再生デバイスの両方に Seeed-8mic-voicecard を選択する必要があります。また、録音および再生には 1/2/4/6/8 チャンネルを選択できます。画像のとおり、
  8 チャンネルありますが、チャンネル 7 と 8 にはデータがありません。これは、この 2 つのチャンネルが再生用チャンネルであるためです。
  チャンネル 7 は 3.5mm ヘッドホン用、チャンネル 8 は JST2.0 スピーカー用です（JST ケーブルがない場合はジャンパワイヤも使用できます）。例えば JST スピーカーを使用する場合：

- ステップ 1. 上の画像のように設定し、**Record** ボタンをクリックして、しばらく音声を録音します。
- ステップ 2. **Stop** ボタンをクリックすると、チャンネル 7 と 8 が空であることがわかります。
- ステップ 3. 再度 **Record** ボタンをクリックすると、今度はチャンネル 8 が変化していることがわかります。

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity_playback.png)

**Q2: ReSpeaker Core v2.0 の AP にアクセスするには？**

**A2:** 2 本のワイヤケーブルを使って ReSpeaker Core v2.0 に電源を供給できます。システムが動作しているとき、Respeaker Core v2.0 は AP として動作できます。コンピュータを使って
この AP にアクセスできます。画像のようになります。ReSpeaker Core v2.0 の WiFi を設定するには、次の手順に従ってください。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Ap.png)

- **ステップ 1.** 以下のコマンドを入力して ReSpeaker Core v2.0 の Ap を有効にします。

```
sudo systemctl enable re-wifi.service
sudo reboot -f

```

- **ステップ 2.** ReSpeaker Core v2.0 の AP にアクセスします。ReSpeaker Core v2.0 が再起動したら、電話またはコンピュータで WiFi を検索します。**ReSpeaker_xxxx** のような AP 名が見つかります。ユーザー名は **respeaker**、パスワードも **respeaker** です。
   **ReSpeaker_xxxx**、ユーザーは **respeaker**、パスワードも **respeaker** です。

- **ステップ 3.** これで Putty を使用して SSH モードでシリアルコンソールに入ることができます。Wlan1 の IP は **192.168.42.1** なので、この IP を使って接続を設定する必要があります。
ReSpeaker Core v2.0 のユーザー名は **respeaker**、パスワードも **respeaker** です。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/AP2.png)

- **ステップ 3.** シリアルコンソールに入ったら、[WiFi を設定](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/#a-wi-fi-setting-up) できます

**Q3: 音量を調整するには？**

**A3:** Alsamixer を使用して再生音量とキャプチャ感度を調整できます。

- **ステップ 1.** 次のコードを入力して Alsamixer を開きます：

```
alsamixer
```

- **ステップ 2.** キーボードの **F6** を押して **Seeed-8mic-voicec** カードを選択します。
- **ステップ 3.** 下の画像のようなインターフェースが表示されます。**Right** または **Left** キーを押して再生音声または録音チャンネルを選択できます。
そして **Up** または **Down** キーを押して値を調整できます。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Alexamixer.png)

**Q4: ユーザーボタンを使用するには？**
**A4:** ご覧のとおり、ReSpeaker Core v2.0 の背面にはユーザーボタンがあります。ここでは、その使い方を示す Python デモを提供します。

- **ステップ 1.** 以下のコマンドを入力します：

```
sudo pip install evdev
```

- **ステップ 2.** 以下のコードをコピーして python ファイルとして保存し、**usrer_button.py** という名前を付けます。

```
from evdev import InputDevice,categorize,ecodes

key = InputDevice("/dev/input/event0")
for event in key.read_loop():
    if event.type == ecodes.EV_KEY:
        print(categorize(event))
```

- **ステップ 3.** 次のコマンドをタップしてこのデモを実行します。

```
sudo python usrer_button.py
```

すると、次のような結果が表示されます：

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/userbutton.png)

**Q5: コンピュータが ReSpeaker Core v2.0 を認識しません。ドライバの問題ですか？**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/CDC_Driver.png)

**A5:** これは、ReSpeaker Core v2.0 を OTG または UART 経由でコンピュータに接続したときに発生する場合があります。
これは CDC Serial ドライバが他の OTG ドライバと競合しているためです。競合しているドライバをアンインストールし、
 もう一度 ReSpeaker Core v2.0 を接続してください。

**Q6: 外部アンテナを使用したい場合はどうすればよいですか？**

**A6:** ReSpeaker Core v2.0 は **AP6212** を使用しており、WiFi と Bluetooth の両方を提供し、同じアンテナを共有しています。
オンボードアンテナの代わりに外部アンテナを使用できます。そのためには、1 つの抵抗を取り外し、新しいパッドに
はんだ付けする必要があります。以下の図のように行います：

- まず、オレンジ色の枠内の抵抗を取り外す必要があります。
- 次に、それを緑色の枠内にはんだ付けしてください。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ant.png)

**Q7: 自分用のフラッシャーファームウェアをビルドするにはどうすればよいですか？ そうすれば、自分のファームウェアを残りの ReSpeaker Core v2.0 に書き込めます。**

**A7:** RAM が 2G 以上の ARM Debian システム上で image builder を実行してください。

詳細な手順は次のとおりです。

- ステップ 1. git clone [image_builder repository](https://github.com/respeaker/image_builder)
- ステップ 2. /publish/respeaker.io_stable.sh のアップロードパスを変更します
- ステップ 3. sudo ./publish/respeaker.io_stable.sh

**Q8: 焼き込み済みの SD カードを ReSpeaker Core v2.0 に挿しても、デバイスマネージャに COM ポートが表示されず、HDMI インターフェースにも何も表示されません。**

**A8:** USb to TTL アダプタを使用して UART に直接接続してください。以下のエラーが表示されます。

```
[    2.119560] mmcblk0: timed out sending SET_BLOCK_COUNT command, card status 0x400900
[    2.128134] mmcblk0: command error, retrying timeout
```

根本原因は、古い SD カードが Linux システムで動作しないことです。ScanDisk Ultra など、すべての eMMC コマンドをサポートする新しい SD カードに交換してください。

## リソース

- **[Algorithms]** [AEC、ビームフォーミング、NS、KWS を含むオーディオフロントエンド処理アルゴリズム](https://github.com/respeaker/respeakerd)
- **[Google Assistant]** [Google Assistant デモ](https://github.com/respeaker/googleassistant_respeakerd)
- **[Microsoft]** [Microsoft 音声翻訳デモ](https://github.com/respeaker/Python-Speech-Translate)
- **[Pixel]** [RGB LED ライブラリ](https://github.com/respeaker/pixel_ring)
- **[PDF]** [この Wiki の PDF をダウンロード](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.pdf)
- **[PDF]** [Rockchip RK3229 データシート V1.1](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Rockchip%20RK3229%20Datasheet%20V1.1%2020151209.pdf)
- **[PDF]** [ボードの寸法](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2_Demensions.pdf)
- **[ZIP]** [ReSpeaker Core v2.0 用 3D モデル](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Respeaker_Core_v2_3D_SKP.zip)
- **[ZIP]** [ReSpeaker Core v2.0 ケース](https://files.seeedstudio.com/wiki/Respeaker_V2/res/RESPEAKER_CORE_V2_Box.zip)
- **[DXF]** [ReSpeaker Core v2.0 スタンド](https://github.com/respeaker/get_started_with_respeaker/raw/8111196e821fec10c65b00d96cf011dc90111546/files/RESPEAKER_CORE_V2_CASE.dxf)
- **[PDF]** [ReSpeaker Core v2.0 スタンド組立図](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.0_case_Assembly.pdf)
- **[PDF]** [ReSpeaker Core v2.0 の音響および電気仕様](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)
- **[MoreReading]** [Mraa Python ドキュメントページ](http://iotdk.intel.com/docs/master/mraa/python/)
- **[MoreReading]** [Intel Mraa SDK](https://software.intel.com/en-us/mraa-sdk/documentation )
- **[MoreReading]** [Snips SDK](https://snips.gitbook.io/documentation/installing-snips/respeaker-core-2.0)
- **[Source Code]** [ReSpeaker Core v2.0 ソースコード](https://github.com/respeaker/rk-linux-develop)

## プロジェクト

**ReSpeaker Core v2.0 - Alexa デモ**

このデモでは、ReSpeaker Core v2.0 を使って Alexa と会話します。どんな質問でもすることができ、友達のように ReSpeaker Core v2.0 と話すことができます。さらに、この製品は Google Assistant や Bing とも連携して動作します。ホットワードは Snowboy ですが、もちろん自分だけのウェイクワードを作ることもできます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/q7b8iLqRiPY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<br />

**ReSpeaker Core v2.0 - ウェイクアップ距離テスト**

このデモでは、ReSpeaker Core v2.0 のウェイクアップ距離をテストしました。ホットワード Snowboy を使った Alexa を使用しています。画面に表示されている ''Alexa:status  code 204" は、Alexa のウェイクアップに成功したことを意味します。

高度なアルゴリズムと 6 つの高品質マイクにより、結果は驚くべきものです。16 メートル（52 フィート）離れた場所から ReSpeaker Core v2.0 を起こすことができます！

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/PpcwvOLlpEw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**ReSpeaker Core v2.0 - 音声受付システム**

このスマートシステムは、音声アシスタント（ReSpeaker Core v2.0）と電話アシスタント（Linklt One）で構成されています。ご覧のように、訪問者が探している人の名前を音声アシスタントに伝えると、小さなスマートアシスタントがそれを認識し、自身のデータベースでその人物を検索します。一致する名前があれば、アシスタントがその人に電話をかけます。そして、その人が訪問者の身元を確認したら、「Open」というメッセージを送るだけでドアが開き、訪問者が中に入ることができます。

自宅や職場の前に、このような音声受付システムを設置してみてはいかがでしょうか。クールだと思いませんか？

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/tdIsCRXKoVI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<br />

**ReSpeaker Core v2.0 - シンプル音声受付システム**

受付サービスの基本機能は、訪問者を出迎えて歓迎し、オフィスへの不正アクセスを防ぐことです。私たちは ReSpeaker Core v2.0 の機能を活用して、音声受付サービスを設計しました。このシステムは訪問者と対話し、訪問先の人物にメッセージを残すことができます。将来的には、小さなオフィス向けの従業員電話帳データベースを設計し、従業員がシステムにメッセージを残すと、システムが ReSpeaker Core v2.0 の GPIO 機能を使って訪問者のためにドアを開けるようにすることができます。Microsoft Bing Speech to text サービスと Twilio/Tencent メッセージ API を使用して Python スクリプトを作成しています。詳細については、[ReSpeaker Voice Reception System](https://project.seeedstudio.com/SeeedStudio/respeaker-voice-reception-system-209a6c) を参照してください。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/-nTOa3LLpVo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
