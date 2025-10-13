---
description: ReSpeaker Core v2.0
title: ReSpeaker Core v2.0
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Core_v2.0
last_update:
  date: 1/11/2023
  author: jianjing Huang
---
![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_front.JPG)

SeeedのReSpeaker Core v2.0は音声インターフェースアプリケーション向けに設計されています。Rockchip RK3229をベースとし、最大1.5GHzで動作するクアッドコアARM Cortex A7と1GB RAMを搭載しています。このボードは6マイクアレイを特徴とし、DoA（到来方向）、BF（ビームフォーミング）、AEC（音響エコーキャンセレーション）などの音声アルゴリズムを含んでいます。

ReSpeaker Core v2.0はGNU/Linuxオペレーティングシステムを実行します。強力でアクティブなコミュニティの恩恵を受け、開発、テスト、デプロイメントのための既存のソフトウェアとツールの使用を可能にし、迅速な製品開発を実現します。

ReSpeaker Core v2.0は、企業が評価するための機能豊富な開発ボードとして設計されています。この目的のため、ボードは2つの主要セクションで構成されています。最初のセクションは、CPU、メモリ（RAM）、PMUを含む中央コアモジュールです。2番目のセクションは、eMMC、コネクタ、ワイヤレス接続コンポーネントなどの周辺機器を含む外側のキャリアボードです。どちらのセクションも、またはその両方を、Seedのカスタマイゼーションサービスを通じてカスタマイズできます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07DN43Q7L" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## 特徴

- 高性能SoCによるオールインワンソリューション
- 1GB RAM & 4GB eMMC
- 6マイクアレイ  
- USB OTG、USBデバイス
- WiFi b/g/n および BLE 4.0
- 検出範囲：約5メートル
- 他のセンサー用のGroveソケット
- 3.5mmオーディオジャック & JST2.0コネクタ
- 6マイクアレイと2ループバック用の8チャンネルADC（ハードウェアループバック）

- DebianベースのLinuxシステム
- C++ SDKとPythonラッパー
- 完全なドキュメント付き音声アルゴリズムSDK
- 音声アルゴリズムと機能：

  - キーワードウェイクアップ
  - BF（ビームフォーミング）
  - DoA（到来方向）
  - NS（ノイズ抑制）
  - AEC（音響エコーキャンセレーション）とAGC（自動ゲイン制御）

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
      <th className="tg-gcw3" colSpan={3}>機能</th>
    </tr>
    <tr>
      <td className="tg-4646" rowSpan={6}>Soc(Rockchip RK3229)</td>
      <td className="tg-4646">CPU</td>
      <td className="tg-4646">クアッドコア Cortex-A7、最大1.5GHz</td>
    </tr>
    <tr>
      <td className="tg-l711">GPU</td>
      <td className="tg-l711">Mali400MP、OpenGL ES1.1/2.0サポート</td>
    </tr>
    <tr>
      <td className="tg-dc35">メモリ</td>
      <td className="tg-dc35">1GB RAM（コアモジュールにはRAMとPMUが含まれます）</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={3}>システム</td>
      <td className="tg-us36">動作電圧：3.6-5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">モジュール上80ピン</td>
    </tr>
    <tr>
      <td className="tg-us36">モジュール上PMU</td>
    </tr>
    <tr>
      <td className="tg-dc35" rowSpan={7}>周辺機器</td>
      <td className="tg-dc35">ネットワーク</td>
      <td className="tg-dc35">WiFi b/g/n;<br />BLE 4.0;<br />Ethernet</td>
    </tr>
    <tr>
      <td className="tg-us36">USB</td>
      <td className="tg-us36">2 x USB Host;   1 x USB OTG;    1 x USB電源</td>
    </tr>
    <tr>
      <td className="tg-dc35">Grove</td>
      <td className="tg-dc35">1 x Groveソケット（I2CとDigital）</td>
    </tr>
    <tr>
      <td className="tg-us36">ビデオ</td>
      <td className="tg-us36">4K VP9および4K 10bits H265/H264ビデオデコード、最大60fps</td>
    </tr>
    <tr>
      <td className="tg-dc35">オーディオ</td>
      <td className="tg-dc35">最大サンプルレート：96Khz;<br />6マイクアレイ;<br />3.5mmオーディオジャック;<br />JST2.0オーディオ出力コネクタ</td>
    </tr>
    <tr>
      <td className="tg-us36">ストレージ</td>
      <td className="tg-us36">4GB eMMCオンボード;<br />SDスロット</td>
    </tr>
    <tr>
      <td className="tg-dc35">その他</td>
      <td className="tg-dc35">12 x RGB LED;<br />8 GPIOピン</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={2}>消費電力</td>
      <td className="tg-us36">スタンバイモード</td>
      <td className="tg-us36">200mA /5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">アルゴリズム動作モード</td>
      <td className="tg-dc35">330mA /5V</td>
    </tr>
  </tbody></table>

:::note
​    この表はReSpeakser Core v2.0の基本仕様のみを記載しています。より専門的なパラメータについては[ReSpeaker Core v2.0の音響・電気仕様](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)を参照してください。
:::

## ハードウェア概要

**インターフェースとストレージ**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> 3.5mmヘッドホンジャック:**
音声を出力します。このポートにアクティブスピーカーやヘッドホンを接続できます。

- **<font face="" size="3" font color="ff0000">②</font> USB OTG:**
このUSBポートは、putty（または他のシリアルツール）のシリアルモード経由でコンピュータに接続するために使用されます。

- **<font face="" size="3" font color="ff0000">③</font> USB電源入力:**
このポートはRespeaker Core v2.0に電源を供給するために使用されます。

- **<font face="" size="3" font color="ff0000">④</font>スピーカージャック:**
パッシブスピーカー用の音声出力。Jst 2.0ソケット。

- **<font face="" size="3" font color="ff0000">⑤</font> UART:**
このUARTポート経由でReSpeaker Core v2.0をコンピュータに接続することもできます。

- **<font face="" size="3" font color="ff0000">⑥</font> 8ピンGPIO:**
拡張アプリケーション用の汎用入出力インターフェース。

- **<font face="" size="3" font color="ff0000">⑦</font> SDカードスロット:**
micro-SDカードを挿入します。

- **<font face="" size="3" font color="ff0000">⑧</font> eMMC:**
組み込みマルチメディアカード。eMMCにイメージを書き込むことで、ReSpeaker Core v2.0をeMMCから起動できます。

- **<font face="" size="3" font color="ff0000">⑨</font> USBホスト:**
これら2つのUSBホスト経由で、USBマウス、USBキーボード、USBフラッシュディスクなどのUSBデバイスをReSpeaker Core v2.0に接続できます。

- **<font face="" size="4" font color="ff0000">Ⓐ</font> Ethernet:**
インターネットへのアクセス。

- **<font face="" size="4" font color="ff0000">Ⓑ</font> HDMI:**
映像出力。

- **<font face="" size="4" font color="ff0000">Ⓒ</font> BluetoothとWIFIアンテナ:**
オンボードアンテナはWIFIとBluetooth用です。また、2.4GアンテナまたはPCBアンテナ用のインターフェースも提供しています。

- **<font face="" size="4" font color="ff0000">Ⓓ</font> Groveソケット:**
デジタルまたはI2C用のGroveソケット。

**システム図**

クリックして元の画像を表示できます

<a href="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png"/></a>

**ピン配置**

**ヘッダーのピンインデックス定義**

| 8ピンヘッダー | Groveソケット |
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

## アプリケーション

- スマートスピーカー
- インテリジェント音声アシスタントシステム
- 音声レコーダー
- 音声会議システム
- 会議通信機器
- 音声対話ロボット
- 車載音声アシスタント
- その他音声コマンドが必要なシナリオ

## はじめに

### 準備

この部分では以下について説明します：

- イメージのインストール方法
- シリアルコンソールへのアクセス方法
- WiFiの設定方法
- SSH & VNCへの接続方法
- Bluetoothの設定方法
- 音声録音と再生のテスト

**前提条件**

- ReSpeaker Core V2.0
- Wi-Fiネットワーク
- 4GB（またはそれ以上）のSDカードとSDカードリーダー
- PCまたはMac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)（オプション）
- 電源用5V 1A Micro USBアダプター（オプション）
- 2本のMicro-USBケーブル

:::caution
USBケーブルは優しく差し込んでください。そうしないとインターフェースを損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。お持ちのケーブルが不明な場合は、<a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><b>こちら</b></a>をクリックして購入できます
:::

**イメージのインストール**

Raspberry Piと同様に、ReSpeaker Core v2.0を起動して実行するには、SDカードからReSpeaker Core v2.0イメージをインストールする必要があります。Respeaker core v2.0を起動する方法を2つ提供しています。SDカードから起動するか、eMMCから起動することができます。

**A. SDカードから起動**

- **ステップ 1.** [mirror-azure](http://respeaker.seeed.io/images/)をクリックして、最新のイメージzipファイルをダウンロードしてください：```respeaker-debian-9-lxqt-sd-********-4gb.img.xz``` または ```respeaker-debian-9-iot-sd-********-4gb.img.xz```。

|セクション|説明|
|---|----|
|**iot** / **lxqt**|**lxqt**バージョンはデスクトップGUIが付属していますが、**iot**バージョンには付属していません。ReSpeaker Core v2.0が初めての場合は、**lxqt**バージョンをお勧めします。|
|**flasher** / **sd**|**flasher**バージョンはオンボードeMMCをフラッシュするために使用され、フラッシュ後はSDカードを取り外すことができます。**sd**バージョンでは、SDカードを常に挿入したままにする必要があります。|

開発には、**lxqt + sd** バージョンを推奨します。そのため、**respeaker-debian-9-lxqt-sd-[date]-4gb.img.xz** ファイルをダウンロードしてください。

:::caution
このwikiは **respeaker-debian-9-lxqt-sd-20180610-4gb.img.xz** イメージバージョンに基づいています。
:::

- **ステップ 2.** SDカードリーダーを使用して、SDカードをPCまたはMACに接続します。4G以上の容量のSDカードが必要です。

- **ステップ 3.** [Etcher](https://etcher.io/)をここからダウンロードし、Etcherを使用して```*.img.xz```ファイルを直接SDカードに書き込みます。または、```*.img.xz```ファイルを```*.img```ファイルに解凍してから、他のイメージ書き込みツールでSDカードに書き込みます。
<br />

<br />プラスアイコンをクリックして、ダウンロードしたイメージを追加すると、ソフトウェアが自動的に接続したSDカードを選択します。その後、Flash!をクリックして書き込みを開始します。完了まで約10分かかります。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/v2-flash-sd.png)

- **ステップ 4.** イメージをSDカードに書き込んだ後、SDカードをReSpeaker Core v2.0に挿入します。PWR_IN micro usbポートを使用してボードに電源を供給し、電源投入後はSDカードを取り外さないでください。ReSpeaker Core v2.0はSDカードから起動し、USER1とUSER2のLEDが点灯するのを確認できます。USER1は通常、起動時にハートビートパターンで点滅するように設定され、USER2は通常、起動時にSDカードアクセス中に点灯するように設定されています。次に、次の部分であるシリアルコンソールに進んでください。

**B. eMMCから起動**

工場出荷時にはEMMCにファームウェアがありませんが、PCまたはMacを使用してReSpeakerイメージファイルをReSpeakerのeMMC（オンボードフラッシュメモリ）にフラッシュできます。その後、ReSpeakerはeMMC（オンボードフラッシュメモリ）から起動し、SDカードからは起動しません。

- **ステップ 1.** mirror-azureで最新のイメージzipファイル```respeaker-debian-9-iot-flasher-********-4gb.img.xz```または```respeaker-debian-9-lxqt-flasher-********-4gb.img.xz```をダウンロードします。lxqtバージョンにはDebianデスクトップが付属し、iotバージョンには付属しません。flasherバージョンはeMMCフラッシュ用で、sdバージョンはSDカードからの起動用です。

- **ステップ 2.** Etcherを使用して```*.img.xz```ファイルを直接SDカードに書き込むか、```*.img.xz```ファイルを```*.img```ファイルに解凍してから、他のイメージ書き込みツールでSDカードに書き込みます。

- **ステップ 3.** SDカードを書き込んだ後、SDカードをReSpeaker Core v2.0に挿入します。PWR_IN micro usbポートを使用してボードに電源を供給し、フラッシュ中はSDカードを取り外さないでください。

フラッシュプロセス中、USER1とUSER2のLEDが交互に点滅するのを確認できます。完了まで約10分かかります。LEDが消灯したら、ボードの電源を切り、SDカードを取り出して再度電源を入れることができます。LEDが点灯すれば、イメージがeMMCに正しくフラッシュされたことを意味します。

このコマンドでイメージバージョンを確認することもできます：cat /etc/issue.net。

**シリアルコンソール**

ReSpeaker Core v2.0が起動できるようになったので、WiFiの設定などのためにコンソール経由でLinuxシステムにアクセスしたい場合があります。コンソールを取得する方法は2つあります：

- A. OTG USBポート - これにはボード上で動作するLinuxシステムが必要です

- B. UARTポート - これはコンソールにアクセスする困難な方法で、低レベルの問題のデバッグに使用できます

**A. OTG経由の接続**

- **ステップ 1.** micro USBケーブルを見つけ、それがデータケーブル（単なる電源ケーブルではない）であることを確認してください。micro USB端をReSpeakerの**OTG** micro USBポート（ReSpeakerボードには2つのmicro USBポートがあり、異なるシルクスクリーンでラベル付けされています。1つは**PWR_IN**、もう1つは**OTG**です）に接続し、このケーブルのもう一方の端をコンピューターに接続します。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/lianjiediannan.jpg)

- **ステップ 2.** コンピューターでシリアルポートが認識されているかを確認します：

  - Windows：デバイスマネージャーを確認し、```COMx```という名前の新しいシリアルデバイスがあるはずです（xは増加する番号）。Windows XP/7/8を使用している場合は、[windows CDCドライバー](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/ReSpeaker_Gadget_CDC_driver.7z)をインストールする必要があるかもしれません。
  - Linux：`ls /dev/ttyACM*`、```/dev/ttyACMx```が取得されるはずです（xは使用したUSBポートによって異なります）。
  - Mac：`ls /dev/cu.usb*`、```/dev/cu.usbmodem14xx```が取得されるはずです（xxは使用したUSBポートによって異なります）。

- **ステップ 3.** お気に入りのシリアルデバッグツールを使用してシリアルポートに接続します。シリアルの設定は：115200ボーレート、8ビット、パリティなし、ストップビット1、フロー制御なし。例：

  - Windows：[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)を使用し、```Serial```プロトコルを選択し、ReSpeaker Core v2.0の正しいCOMポート、```115200```ボー、8ビット、パリティなし、ストップビット1、フロー制御なしを入力します。
  - Linux：USB To TTLアダプターによって、```screen /dev/ttyACM0(,1, など)``` 115200または```screen /dev/ttyUSB0(,1, など) 115200```になります。
  - Mac：USB To TTLアダプターによって、```screen /dev/cu.usbserial1412(,1422, など) 115200```または```screen /dev/cu.usbmodem1412(,1422, など) 115200```になります。

- **ステップ 4.** デフォルトのユーザー名は```respeaker```で、パスワードも```respeaker```です。

**B. UARTポート経由の接続**

このセクションでは、ReSpeakerのUartポート（UartポートはReSpeakerスピーカープラグのすぐ左に位置）に接続されるUSB to TTLアダプターを使用して、コンピューターからReSpeakerへの接続を確立する方法をガイドします。

- **ステップ 1.** USB To TTLアダプターを使用してUartポートとPC/Macを接続します。RX/TXの電圧は3.3Vであることに注意してください。USB To TTLアダプターをお持ちでない場合は、[ここ](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)をクリックして入手できます。

- **ステップ 2.** 115200ボーで以下のシリアルデバッグツールを使用します：
  - Windows：[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)を使用し、```Serial```プロトコルを選択し、ReSpeaker Core v2.0の正しいCOMポート、115200ボー、8ビット、パリティなし、ストップビット1、フロー制御なしを入力します。
  - Linux：USB To TTLアダプターによって、```screen /dev/ttyACM0(,1, など) 115200```または```screen /dev/ttyUSB0(,1, など) 115200```になります。
  - Mac：USB To TTLアダプターによって、```screen /dev/cu.usbserial1412(,1422, など) 115200```または```screen /dev/cu.usbmodem1412(,1422, など) 115200```になります。

- **ステップ 3.** ログインユーザー名は respeaker で、パスワードも respeaker です。

- **ステップ 4.** USB to TTL アダプターをお持ちでない場合は、Arduino を使用することもできます。Arduino を使用する場合は、ジャンパーワイヤーの一端を Arduino の RESET ピンに、もう一端を Arduino の GND ピンに接続します。これにより Arduino の ATMEGA MCU をバイパスし、Arduino を USB to TTL アダプターに変換できます。ビデオチュートリアルは[こちら](https://www.youtube.com/watch?v=qqSLwK1DP8Q)をご覧ください。次に、Arduino の GND ピンを Respeaker の Uart ポートの GND ピンに接続します。Arduino の Rx ピンを Respeaker の Uart ポートの Rx ピンに接続します。Arduino の Tx ピンを Respeaker の Uart ポートの Tx ピンに接続します。最後に、Arduino の USB ケーブルを使用して Arduino を PC/Mac に接続します。次のコマンドを入力して、Mac または Linux PC が Arduino を認識することを確認してください：

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

次のようなものが返ってくるはずです：

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

次に、上記のステップ2に従って、このシリアル接続でRespeakerに接続してください。これは一度だけの手順であることに注意してください。次にRespeakerをWi-Fi接続用に設定し、今後はsshまたはVNC経由で接続することになります。

**ネットワーク設定**

**A. Wi-Fi設定**

Network Managerツール、nmtuiを使用してReSpeakerのネットワークを設定してください。nmtuiはReSpeakerイメージに既にインストールされています。

```
sudo nmtui              # respeaker user needs sudo
```

すると、このような設定ページが表示されます。```Activate a connection```を選択し、```Enter```キーを押してください。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-1.png)

ReSpeaker v2.0用のWi-Fiを選択し、```Enter```キーを押してWi-Fiパスワードを入力し、再度```Enter```キーを押してください。```*```マークが表示されたら、ReSpeakerがWi-Fiネットワークに正常に接続されたことを意味します。```Esc```キーを2回押してネットワークマネージャー設定ツールを終了してください。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-2.png)

次に、以下のコマンドを使用してReSpeakerのIPアドレスを確認してください。

```
ip address
```

以下の例では、このReSpeakerのIPアドレスが```192.168.7.108```であることがわかります

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

Network Manager GUI インターフェースに加えて、Network Manager にはコマンドラインツールもあります。隠れた Wi-Fi ネットワークに接続する場合は、このコマンドラインツールを使用する必要があります：

```
nmcli c add type wifi con-name mywifi ifname wlan0 ssid your_wifi_ssid
nmcli con modify mywifi wifi-sec.key-mgmt wpa-psk
nmcli con modify mywifi wifi-sec.psk your_wifi_password
nmcli con up mywifi
```

**B. イーサネット接続**

イーサネットケーブルを使用してネットワークに接続できます。インターネットに接続されたイーサネットケーブルを差し込むだけで接続できます。

**SSH & VNC への接続**

**A. SSH**

SSHサーバーはReSpeaker v2.0で自動的に開始されます。Windowsユーザーの場合、サードパーティのSSHクライアントが利用可能です。Linux/Macユーザーの場合、SSHクライアントが内蔵されています。

- Windows: PUTTYを使用し、SSHプロトコルを選択し、正しいIPアドレスを入力してopenをクリックします。respeakerユーザーとしてログインし、パスワードもrespeakerです。

- Linux/Mac:

```
ssh respeaker@192.168.***.***
// password: respeaker
```

:::note
SSH使用時にパフォーマンスが遅い場合は、混雑していないWiFiネットワークに切り替えてください。
:::

**B. VNC**

Alexaから認証を取得するには、VNC Viewerを使用する必要があります。システムにはVNCサーバーが内蔵されています。VNCサーバーは軽量なQtデスクトップ環境である**lxqt**デスクトップGUIを起動します。
VNCサービスも自動的に開始されます。[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)または[VNC Viewer for Google Chrome](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en)を使用してReSpeaker Core v2.0のデスクトップに接続してください。

VNCを使用するには、PC/MacとReSpeaker v2.0を同じWi-Fiネットワークに接続します。次にVNC Viewerを開き、アドレスバーに```192.168.xxx.xxx```と入力します。```192.168.xxx.xxx```はボードのIPアドレスです。**ifconfig**コマンドで確認できます。```Unencrypted connection```が表示された場合は、Continueをクリックして続行してください。パスワードは```respeaker```です。

![](https://user-images.githubusercontent.com/5130185/34665797-93b222d6-f49c-11e7-8112-704f91163038.png)

:::note
VNC接続はネットワークの品質に依存することにご注意ください。VNCディスプレイのリフレッシュレートが非常に低くなる可能性があることを心の準備をしておいてください。
:::

**スピーカーまたはヘッドセットへの接続**

ボードはSOCの内蔵コーデックを使用して再生をレンダリングします。JSTスピーカーポートとヘッドセットポートの両方がそれぞれのアンプによって駆動され、両方のアンプはSOCの同じコーデックに接続されています。SEEEDが実装したサウンドカードドライバーは、キャプチャデバイスと再生デバイスの両方を駆動します。そのため、ALSAデバイスリストには個別のキャプチャまたは再生サウンドカードはありません。すべてseeed-8mic-voicecardという名前になっています。

ボードから音を聞く最も簡単な方法は、ヘッドセットを接続することです。ラウドスピーカーを好む場合、ボードは最大8Wの駆動能力を出力できます。

**Bluetooth設定**

**bluetoothの有効化**

以下のコマンドを実行して、ReSpeaker Core v2.0のBluetoothを更新し有効化してください：

```
sudo apt update
sudo apt-mark hold firefox 
sudo apt upgrade
```

:::note
アップデートが失敗した場合は、ネットワーク状況の良い別のWiFiに変更して、再度アップデートを実行してください。
:::

次に、以下のコマンドでBluetoothを有効化します：

```
sudo systemctl enable bt-auto-connect.service
sudo reboot -f
```

**ReSpeaker Core v2.0をBluetoothスピーカー-スレーブデバイスとして使用する**

ReSpeaker Core v2.0が再起動すると、お使いの携帯電話またはコンピューターのBluetoothを開くと、**ReSpeaker-xxxx**という名前のBluetoothデバイスが見つかります。
それを選択して接続してください。ReSpeaker Core v2.0にスピーカーまたはヘッドセットを接続し、音楽を再生してBluetoothスピーカーをお楽しみください。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Bluetooth_connect.png)

**ReSpeaker Core v2.0をBluetoothプレーヤー-マスターデバイスとして使用する**

単なるBluetoothスピーカーとして動作するだけでなく、Bluetoothプレーヤーとしても機能し、お使いのBluetoothヘッドセットやBluetoothスピーカーをハックすることができます。
では、ハッキングしてみましょう。

- **ステップ1.** `bluetoothctl`をタップしてBluetoothシェルを開きます。

- **ステップ2.** `scan on`をタップしてBluetoothデバイスをスキャンします。

- **ステップ3.** ReSpeaker Core v2.0がターゲットデバイスを見つけたら、`scan off`をタップします。
このwikiでは、例えばMDR-1000Xヘッドセットがターゲットとし、デバイスID Device `04:5D:4B:81:35:84`をマークします。

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

- **ステップ 4.** 次に、`pair + device ID` コマンドを使用して、Bluetooth デバイスを ReSpeaker Core v2.0 とペアリングします。

- **ステップ 5.** `Pairing successful` というメッセージが表示されたら、`connect + device ID` をタップします。

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

「Connection successful」がポップアップしたら、設定完了です！

`exit`または`quit`をタップしてシェルを終了し、以下のコマンドを使用してBluetoothデバイスをテストできます。

```
arecord bluetoothtest.wav
aplay bluetoothtest.wav

```

**録音と再生**

**1.ALSA経由でのテスト**

これは開発段階の技術文書であるため、サウンドデバイスのインデックスはバージョンによって変更される可能性があります。そのため、まず以下のコマンドで正しいデバイスインデックスを確認してください：

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

**seeed** プレフィックスを持つ名前のサウンドカードを見つけます。上記の例では、キャプチャデバイスは **hw:0,0** で、これはカード **0**/デバイス **0** を意味します。
再生デバイスは **hw:0,1** で、これはカード **0**/デバイス **1** を意味します。次に、以下のコマンドで録音と音声再生をテストします：

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

**2. PulseAudioを使用したテスト**

まず、PulseAudioが実行されているかどうかを確認します：

```
respeaker@v2:~$ ps aux|grep pulse|grep -v grep
respeak+  1109  0.0  0.7 363272  7932 ?        S<l  01:01   0:00 /usr/bin/pulseaudio --start --log-target=syslog
```

もしそうでなければ、PulseAudioの自動起動を有効にするためにPulseAudioのドキュメントを参照してください。その後、以下でテストしてください：

```
parecord --channels=8 --rate=16000 --format=s16le hello2.wav
paplay hello2.wav
```

さらに、デフォルトのALSAデバイスは現在PulseAudioにフックされているため、以下のコマンドを使用してもPulseAudio経由で音声の再生/録音が行われます：

```
arecord -v -f cd hello3.wav
aplay hello3.wav
```

これまでReSpeaker Core v2.0ボードの基本操作を学びましたが、さらに進んでみましょう。ReSpeaker Core v2.0を使用して、独自のAVS（Alexa Voice Service）デバイスやDueros（Baiduの音声アシスタント）デバイスを構築することができます。

## Wio Linkで遊ぶ

[ReSpeaker Core V2 & Wio Link Tutorial](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_V2_&_Wio_Link/)に従って、ReSpeaker Core V2を使用してIFTTT経由でWio Linkを制御してください。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/OJ0i6QrZCSM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## GPIOで遊ぶ

この部分では、**MRAA**と**UPM**を使用してRespeaker Core v2.0のGPIOとGroveソケットを制御する方法を紹介します。

- **ステップ1. MRAAとUPMライブラリを最新バージョンに更新**

まず、最新のMRAAとUPMパッケージをインストールする必要があります。

```
sudo apt install  python-mraa python-upm libmraa1 libupm1 mraa-tools
```

- **ステップ2. プラットフォーム情報を確認する**

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

ReSpeaker Core v2.0 ボードの PIN 定義の説明については、[Pin Out](#) を参照してください。

- **ステップ 3. MRAA または UPM を使用したデモ**

**A. MRAA ライブラリを使用**

**GPIO を直接制御**

材料

| ReSpeaker Core v2.0 |  Grove - Buzzer |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|
|[今すぐ購入](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

Grove PIR センサーの **SIG** ピンを、ジャンパーを使用して ReSpeaker Core v2.0 のヘッダーピン **0** に接続します。同時に VCC と GND の配線も忘れずに行ってください。その後、以下のコードをコンソールに入力します

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

**x.write(1)**をタップすると、ブザーから悲鳴が聞こえます。

**PIRモーションセンサーの例**

材料

| ReSpeaker Core v2.0 |  Grove -  PIRモーションセンサー |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Grove%20-%20PIR%20Motion%20Sensor.jpg)|
|[今すぐ入手](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|

この例では、PythonコードでGrove PIRセンサーのトリガーを監視します。
Grove PIRセンサーの**D1**ピンをジャンパーでReSpeaker Core v2.0のヘッダーピン**0**に接続します。同時にVCCとGNDの配線も忘れずに行ってください。
次に、以下のコードを新しいファイルにコピーし、**mraa_pir.py**という名前のPythonファイルとして保存します。このファイルをReSpeaker Core v2.0にコピーしてください。

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

次に、以下のコマンドでコードを実行してください。（先ほど保存したmraa_pir.pyが含まれているフォルダに移動していることを確認してください）

``` python
sudo python mraa_pir.py
```

The result will be like

```
$ sudo python mraa_pir.py
Starting ISR for pin 0
Press ENTER to stoppin 1091 = 0
pin 1091 = 0
pin 1091 = 1
...
```

**B. UPMライブラリの使用**

UPMプロジェクトはMRAAライブラリをベースにセンサーのドライバーを実装しているため、もはやGPIOプログラミングやセンサーのI2Cアドレスを気にする必要がありません。特定のセンサーのすべてのデフォルト情報とロジックがUPMライブラリにラップされています。UPMは多数のセンサーをサポートしています。[UPMモジュール](https://iotdk.intel.com/docs/master/upm/modules.html)。ただし、すべてのセンサーがReSpeaker Core v2.0で動作することを確認していないことにご注意ください。

**Groveデジタル光センサーの例**

材料

| ReSpeaker Core v2 |  Grove - Digital Light Sensor |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Digital_Light_Sensor.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

これはGroveデジタル光センサーの例で、UPM githubリポジトリからコピーしたものです。

PIRモーションセンサーをGroveソケット経由でRespeaker Core v2.0に接続してください。
次に、以下のコードを新しいファイルにコピーし、**tsl2561.py**という名前のpythonファイルとして保存してください。このファイルをReSpeaker Core v2.0にコピーしてください。

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

結果は次のようになるはずです：

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

## FAQs

**Q1: Audacityで録音・再生する方法は？**

  **A1:** **lxqt**バージョンにはAudacityがプリインストールされています。左下角の**Birdボタン**をクリックし、**Sound & Video -> Audacity**で見つけることができます。

  Audacityを開いたら、小さな黒い矢印をクリックして録音・再生デバイスを選択し、下の画像のように設定してください。

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

  録音・再生デバイスの両方でSeeed-8mic-voicecardを選択してください。1/2/4/6/8チャンネルを選択して録音・再生できます。画像でご覧いただけるように、
  8チャンネルありますが、チャンネル7と8にはデータがありません。これは、この2つのチャンネルが再生チャンネルだからです。
  チャンネル7は3.5mmヘッドホン用、チャンネル8はJST2.0スピーカー用です（JSTケーブルがない場合は、ジャンパーも使用できます）。JST スピーカーを使用する場合：

- ステップ1. 上の画像のように設定し、**Record**ボタンをクリックして、一定時間音声を録音します。
- ステップ2. **Stop**ボタンをクリックすると、チャンネル7と8が空であることがわかります。
- ステップ3. 再度**Record**ボタンをクリックすると、今度はチャンネル8が変化していることがわかります。

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity_playback.png)

**Q2: ReSpeaker Core v2.0のAPにアクセスする方法は？**

**A2:** 2本のワイヤーケーブルを使用してReSpeaker Core v2.0に電源を供給できます。システムが動作している時、Respeaker Core v2.0はAPとして機能できます。コンピューターを使用して
このAPにアクセスできます。画像に示すように、以下の手順に従ってReSpeaker Core v2.0のWiFiを設定できます。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Ap.png)

- **ステップ 1.** 以下のコマンドを実行してReSpeaker Core v2.0のApを有効化します。

```
sudo systemctl enable re-wifi.service
sudo reboot -f

```

- **ステップ 2.** ReSpeaker Core v2.0のAPにアクセスします。ReSpeaker Core v2.0が再起動した後、スマートフォンまたはコンピューターでWiFiを検索してください。AP名は
   **ReSpeaker_xxxx**のようなものが見つかります。ユーザー名は**respeaker**、パスワードも**respeaker**です。

- **ステップ 3.** これで、Putty、SSHモードを使用してシリアルコンソールにアクセスできます。Wlan1のIPは**192.168.42.1**です。この IPを使用して接続を設定する必要があります。
ReSpeaker Core v2.0のユーザー名は**respeaker**、パスワードは**respeaker**です。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/AP2.png)

- **ステップ 3.** シリアルコンソールにアクセスしたら、[WiFiの設定](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/#a-wi-fi-setting-up)を行うことができます。

**Q3: 音量を調整するにはどうすればよいですか？**

**A3:** Alsamixerを使用して再生音量とキャプチャ感度を調整できます。

- **ステップ 1.** 以下のコードを入力してAlsamixerを開きます：

```
alsamixer
```

- **ステップ 2.** キーボードの **F6** を押して **Seeed-8mic-voicec** カードを選択します。
- **ステップ 3.** 下の画像のようなインターフェースが表示されます。**Right** または **Left** キーを押すことで再生音声または録音チャンネルを選択できます。
また、**Up** または **Down** キーを押すことで値を調整できます。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Alexamixer.png)

**Q4: ユーザーボタンの使用方法は？**
**A4:** ご覧のとおり、ReSpeaker Core v2.0 の背面にユーザーボタンがあります。ここでは、その使用方法を示すPythonデモを提供します。

- **ステップ 1.** 以下のコマンドを入力します：

```
sudo pip install evdev
```

- **ステップ 2.** 以下のコードをコピーして、Pythonファイルとして保存してください。ファイル名を **usrer_button.py** とします。

```
from evdev import InputDevice,categorize,ecodes

key = InputDevice("/dev/input/event0")
for event in key.read_loop():
    if event.type == ecodes.EV_KEY:
        print(categorize(event))
```

- **ステップ3.** 以下のコマンドを実行してこのデモを起動します。

```
sudo python usrer_button.py
```

結果は以下のようになります：

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/userbutton.png)

**Q5: コンピュータがReSpeaker Core v2.0を認識できません。ドライバの問題でしょうか？**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/CDC_Driver.png)

**A5:** これは、ReSpeaker Core v2.0をOTGまたはUART経由でコンピュータに接続した際に発生する可能性があります。
これは、CDCシリアルドライバが他のOTGドライバと競合しているためです。競合しているドライバをアンインストールして、
ReSpeaker Core v2.0を再度接続してください。

**Q6: 外部アンテナを使用したい場合はどうすればよいですか？**

**A6:** ReSpeaker Core v2.0は**AP6212**を使用してWiFiとBluetoothの両方を提供しており、同じアンテナを共有しています。
オンボードアンテナの代わりに、外部アンテナを使用することができます。そのためには、1つの抵抗を取り外して
新しいパッドにはんだ付けする必要があります。以下に示すとおりです：

- まず、オレンジ色のボックス内の抵抗を取り外す必要があります。
- 次に、緑色のボックスにはんだ付けしてください。

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ant.png)

**Q7: 独自のフラッシャーファームウェアをビルドするにはどうすればよいですか？そうすれば、残りのReSpeaker Core v2.0に独自のファームウェアを書き込むことができます。**

**A7:** RAM>2GのARMデビアンシステムでイメージビルダーを実行してください。

詳細な手順は以下のとおりです。

- ステップ1. [image_builderリポジトリ](https://github.com/respeaker/image_builder)をgit cloneする
- ステップ2. /publish/respeaker.io_stable.shでアップロードパスを変更する
- ステップ3. sudo ./publish/respeaker.io_stable.shを実行する

**Q8: 書き込んだSDカードをReSpeaker Core v2.0に挿入すると、デバイスマネージャーにCOMポートが表示されず、HDMIインターフェースにも表示されません。**

**A8:** USB to TTLアダプタを使用してUARTに直接接続してください。以下のエラーが表示されます。

```
[    2.119560] mmcblk0: timed out sending SET_BLOCK_COUNT command, card status 0x400900
[    2.128134] mmcblk0: command error, retrying timeout
```

根本的な原因は、古いSDカードがlinuxシステムで動作しないことです。ScanDisk Ultraなど、すべてのeMMCコマンドをサポートする最新のSDカードに変更してください。

## リソース

- **[Algorithms]** [AEC、Beamforming、NS、KWSを含むオーディオフロントエンド処理アルゴリズム](https://github.com/respeaker/respeakerd)
- **[Google Assistant]** [Google Assistantデモ](https://github.com/respeaker/googleassistant_respeakerd)
- **[Microsoft]** [Microsoft音声翻訳デモ](https://github.com/respeaker/Python-Speech-Translate)
- **[Pixel]** [RGB LEDライブラリ](https://github.com/respeaker/pixel_ring)
- **[PDF]** [このWikiのPDFダウンロード](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.pdf)
- **[PDF]** [Rockchip RK3229データシート V1.1](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Rockchip%20RK3229%20Datasheet%20V1.1%2020151209.pdf)
- **[PDF]** [ボード寸法図](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2_Demensions.pdf)
- **[ZIP]** [ReSpeaker Core v2.0用3Dモデル](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Respeaker_Core_v2_3D_SKP.zip)
- **[ZIP]** [ReSpeaker Core v2.0ケース](https://files.seeedstudio.com/wiki/Respeaker_V2/res/RESPEAKER_CORE_V2_Box.zip)
- **[DXF]** [ReSpeaker Core v2.0スタンド](https://github.com/respeaker/get_started_with_respeaker/raw/8111196e821fec10c65b00d96cf011dc90111546/files/RESPEAKER_CORE_V2_CASE.dxf)
- **[PDF]** [ReSpeaker Core v2.0スタンド組立図](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.0_case_Assembly.pdf)
- **[PDF]** [ReSpeaker Core v2.0の音響・電気仕様](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)
- **[MoreReading]** [Mraa Pythonドキュメントページ](http://iotdk.intel.com/docs/master/mraa/python/)
- **[MoreReading]** [Intel Mraa SDK](https://software.intel.com/en-us/mraa-sdk/documentation )
- **[MoreReading]** [Snips SDK](https://snips.gitbook.io/documentation/installing-snips/respeaker-core-2.0)
- **[Source Code]** [ReSpeaker Core v2.0ソースコード](https://github.com/respeaker/rk-linux-develop)

## プロジェクト

**ReSpeaker Core v2.0 - Alexaデモ**

このデモでは、ReSpeaker Core v2.0を使用してAlexaと会話します。友達のようにReSpeaker Core v2.0に質問したり会話したりできます。さらに、この製品はGoogle AssistantやBingとも連携できます。ホットワードはSnowboyで、もちろん独自のウェイクアップワードを作成することもできます。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/q7b8iLqRiPY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<br />

**ReSpeaker Core v2.0 - ウェイクアップ距離テスト**

このデモでは、ReSpeaker Core v2.0のウェイクアップ距離をテストしました。ホットワードSnowboyでAlexaを使用しています。画面で見ることができるように、「Alexa:status code 204」はAlexaのウェイクアップが成功したことを意味します。

高度なアルゴリズムと6つの高品質マイクロフォンにより、結果は驚くべきものです！16メートル（52フィート）離れた場所からReSpeaker Core v2.0をウェイクアップできます！

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/PpcwvOLlpEw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**ReSpeaker Core v2.0 - 音声受付システム**

このスマートシステムは、音声アシスタント（ReSpeaker Core v2.0）と電話アシスタント（Linklt One）で構成されています。ご覧のように、訪問者が音声アシスタントに探している人の名前を伝えると、小さなスマートアシスタントがそれを認識し、データベースでその人を検索します。一致する名前があれば、アシスタントがその人に電話をかけます。そして、その人が訪問者のIDを確認すると、「Open」というメッセージを送信するだけでドアを開けることができ、訪問者が入ることができます。

あなたの家や職場の前にこのような音声受付システムがあったらどうでしょうか？クールではありませんか？

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/tdIsCRXKoVI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<br />

**ReSpeaker Core v2.0 - シンプル音声受付システム**

受付サービスの基本機能は、訪問者を迎え、歓迎の気持ちを伝え、オフィスへの不正アクセスを防ぐことです。ReSpeaker Core v2.0の機能を活用して音声受付サービスを設計しました。このシステムは訪問者と対話し、訪問される人にメッセージを送ることができます。将来的には、小さなオフィス従業員の電話リストデータベースを設計し、従業員がシステムにメッセージを送ると、システムがReSpeaker Core v2.0のGPIO機能を使用して訪問者のためにドアを開けることができます。Microsoft Bing Speech to textサービスとTwilio/Tencentメッセージ APIを使用してPythonスクリプトを作成しました。詳細については、[ReSpeaker音声受付システム](https://project.seeedstudio.com/SeeedStudio/respeaker-voice-reception-system-209a6c)を参照してください。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/-nTOa3LLpVo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
