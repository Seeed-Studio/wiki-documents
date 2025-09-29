---
description: LinkIt Smart 7688 Duo
title: LinkIt Smart 7688 Duo
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/LinkIt_Smart_7688_Duo
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像の説明を入力してください](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Linkit_7688_DUO_Product_view.jpg)

:::danger note
MediaTek Labs の閉鎖により、関連リンクはすべて無効になっています。関連ファイルをダウンロードする必要がある場合は、以下のリンクで検索してください：[https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs)。
:::

LinkItTM Smart 7688 Duo（コンパクトなコントローラーボード）は、MT7688（[データシート](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/MT7688_datasheet.pdf)）とATmega32u4をベースにしたオープン開発ボードです。このボードはArduino Yunスケッチと互換性があり、OpenWrt Linuxディストリビューションを基盤としています。このボードは特に、スマートホームやオフィス向けのリッチアプリケーションIoTデバイスのプロトタイピングを可能にするために設計されています[1]。Arduinoと高い互換性を持つため、Arduino YunとLinkIt Smart 7688 Duoのさまざまな機能を利用できます[2]。これにより、さまざまな堅牢でコンパイル済みのArduino Yunスケッチに基づいたリッチアプリケーションを構築するのに役立ちます。このボードは、堅牢なビデオ処理を可能にするメモリとパケットストレージを提供します。また、Python、Node.js、Cプログラミング言語でデバイスアプリケーションを作成するオプションも提供します。

:::note
* ボードのメインコントローラーは1つだけにする必要があります。
* このボードは、他の開発ボードを含むMediaTek LinkItTM Smart 7688プラットフォームの一部に過ぎません。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

* 580 MHz MIPS CPU
* シングル入力シングル出力（1T1R）Wi-Fi 802.11 b/g/n (2.4G)
* GPIO、I2C、I2S、SPI、SPIS、UART、PWM、イーサネットポート用のピンアウト
* 32MBフラッシュと128MB DDR2 RAM
* USBホスト
* Micro SDスロット
* Arduino API（ATmega32U4）対応

## アプリケーションアイデア

* IoT/ゲートウェイデバイス
* ロボティクス
* 教育と学習

## 仕様

* MPU
    * チップセット: MT7688AN
    * コア: MIPS24KEc
    * クロックスピード: 580MHz
    * 動作電圧: 3.3V
* MCU
    * チップセット: ATmega32U4
    * コア: Atmel AVR
    * クロックスピード: 8MHz
    * 動作電圧: 3.3V
* メモリ
    * フラッシュ: 32MB
    * RAM: 128MB DDR2
* GPIO
    * ピン数: 3(MT7688AN), 24(ATmega32U4)
    * 電圧: 3.3V
* PWM
    * ピン数: 8(ATmega32U4)
    * 電圧: 3.3V
    * 最大解像度: 16ビット（カスタマイズ可能）
* ADC
    * ピン数: 12(ATmega32U4)
    * 解像度: 10ビット
* 外部割り込み: 8
* SPI/SPIS
    * ピン番号: S0, S1, S2, S3
    * 最大速度: 4MHz
* I2C
    * ピン番号: D2/D3
    * 速度: 400KHz
* UART Lite
    * ATmega32U4用1つ、MT7688AN用1つ
    * ピン番号: P8/P9(MT7688AN), D0/D1(ATmega32U4)
* USBホスト
    * ピン番号: P6/P7
    * コネクタタイプ: Micro-AB
* 通信
    * Wi-Fi: 1T1R 802.11 b/g/n (2.4G)
    * イーサネット: 1ポート 10/100 FE PHY
    * ピン番号: P2/P3/P4/P5
* ユーザーストレージ: SDカード Micro SD/SDXC
* サイズ: 60.8x26.0mm

## ハードウェア概要

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Front_component_view_with_text_1200_s.jpg)

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_backview_with_text_1200.jpg)


:::note
    * 製品を不適切な操作から保護するため、以下の注意事項に留意してください。安定した出力を持つ信頼性の高い電源アダプターを選択してください。7688の電源入力条件の推奨事項：
          * 電源入力のオーバーシュート電圧は5.5を超えないこと。
          * 電圧波形は定格電圧の±100mV以内であること。
:::


## はじめに

### 組み込みオペレーティングシステムへの接続

:::note
    マニュアルには2つの方法が記載されています。この場合、少し難しいかもしれない高度な方法（USBからシリアルアダプターを使用）を示します。しかし、長期的には多くのメリットがあります。
:::
#### 必要な材料

* LinkIt Smart 7688 x 1
* USBケーブル（タイプAからマイクロタイプB） x 1
* USBからシリアルアダプター x 1
* ジャンパーワイヤー x 3

### Windowsでの手順

**1.** [PuTTy](http://www.putty.org/)をインストールします。PuTTYはSSH（Secure Socket Shell）を使用して開発ボードのオペレーティングシステムにアクセスするシステムコンソール環境を提供します。

**2.** [Bonjour](https://support.apple.com/kb/DL999?viewlocale=en_US&locale=en_US)プリントサービスをインストールします（Windows 7、Windows 8、Windows 10用）。

**3.** ドライバーをインストールします。FTDIチップをベースにしたUSBケーブルを使用している場合は、[こちら](https://www.ftdichip.com/Drivers/VCP.htm)からドライバーをダウンロードしてインストールしてください。最新のドライバーで問題がある場合は、[古いバージョン](https://www.ftdichip.com/Support/Documents/InstallGuides.htm)をインストールしてみてください。

**4.** 次に、以下の表に示すように、LinkIt Smart 7688のUARTピンにシリアルからUSBケーブルを接続します：

| USBアダプターのピン |	LinkIt Smart 7688で接続する対応するピン |
|-----------------------------------|--------------------------------------------------------|
| Pin RX	| Pin 8 |
| Pin TX	| Pin 9 |
| Pin GND |	Pin GND |

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_demo_view_1200_s.jpg)

**5.** シリアルからUSBケーブルを接続した後、デバイスマネージャーを開き、以下の図22に示すようにCOMポート番号を確認します。この番号はコンピューターによって異なる場合があります。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/COM_port.jpg)

**6.** PuTTYターミナルを起動し、デバイスマネージャーで見つかったUSBデバイスのCOMポート番号を入力し、Serialラジオボタンをクリックし、Speedボックスに57600を入力してOpenをクリックします。以下の図23に示すように設定します。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Putty_configuration.jpg)

**7.** システムコンソールを終了するには、PuTTYウィンドウの右上の**閉じるアイコン**をクリックします。

### Macでの手順

**1.** 必要に応じてドライバーをインストールします。ケーブルメーカーのウェブサイトでMac用のドライバー要件とインストール手順を確認してください。

**2.** ケーブルをPC/ラップトップに接続し、LinkIt Smart 7688にケーブルを接続します。

**3.** ターミナルセッションを開きます。

**4.** ターミナルで**ls /dev/cu**と入力します。デバイスのリストが表示されます。通常、cu.usbserial-XXXXXXXXのようなものを探してください。XXXXXXXXは通常ランダムな識別子です。これがシステムコンソールにアクセスするためのシリアルデバイスです。

**例：**

```
$ls /dev/cu*

/dev/cu.Bluetooth-Incoming-Port

/dev/cu.Bluetooth-Modem

/dev/cu.pablop-WirelessiAP

/dev/cu.usbserial-A6YMCQBR

```

**5.** screenユーティリティを使用してシリアルポートに接続し、ボーレートを57600に設定します。これは、システムコンソールのボーレートがデフォルトで57600であるためです。例：
```
$screen /dev/cu.usbserial-XXXXXXXX 57600
```
**6.** これでシステムコンソールに接続されます。ターミナルでENTERを押してプロンプトを表示します。プロンプトがOS Xターミナルアプリケーションとは異なることに気づくでしょう。これはLinkIt Smart 7688のプロンプトで、以下のように表示されます：
```
  root@myLinkIt:/#
```
**7.** このコンソールを通じてLinkIt Smart 7688システムに変更を加える準備が整いました。

### Linuxでの手順

**1.** 必要に応じてドライバーをインストールします。ケーブルメーカーのウェブサイトでLinux用のドライバー要件とインストール手順を確認してください。

**2.** ケーブルを接続し、LinkIt Smart 7688 Duoにケーブルを接続します。

**3.** ターミナルセッションを開きます。

**4.** ターミナルで**ls /dev/ttyUSB***と入力します。デバイスのリストが表示されます。通常、cu.usbserial-XXXXXXXXのようなものを探してください。XXXXXXXXは通常ランダムな識別子です。例：
```
$ls /dev/ttyUSB*
/dev/ttyUSB0
```
**5.** **screen**ユーティリティを使用してシリアルポートに接続し、ボーレートを**57600**に設定します。これは、システムコンソールのボーレートがデフォルトで57600であるためです。例：
```
$sudo screen /dev/ttyUSB0 57600
```
**6.** これでシステムコンソールに接続されます。ターミナルでENTERを押してプロンプトを表示します。プロンプトが通常のアプリケーションとは異なることに気づくでしょう。これはLinkIt Smart 7688のプロンプトで、以下のように表示されます：
```
  root@myLinkIt:/#
```
**7.** このコンソールを通じてLinkIt Smart 7688システムに変更を加える準備が整いました。

### Blink例の実行

#### 必要な材料

* LinkIt Smart 7688 x 1
* USBケーブル（タイプAからマイクロタイプB） x 1
* USBからシリアルアダプター x 1
* ジャンパーワイヤー x 3

#### Blinkの実行

**1.** マイクロUSBケーブルでボードに電源を供給します（USBホストインターフェースではなく、USB電源インターフェースのみを接続してください）。

**2.** PuTTyを起動し、前のセクションで示したようにUSBからシリアルアダプターを使用してシステムに接続します。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Connect_to_computer.jpg)

**3.** **python /IoT/examples/blink-gpio44.py**と入力し、**Enter**を押してBlink例を実行します。
:::note
    最初の単語「python」の後に1つの空白スペースがあることに注意してください。そうしないと、例が見つかりません。
:::
**4.** 約2秒後、Wi-Fi LEDが一定の間隔で点滅することに気づくでしょう。

**5.** システムコンソールで **CTRL + C** を入力してください。これにより、例が終了します。

### インターネットに接続する（ステーションモードに切り替え）

Wi-Fi には2種類のモードがあります：APモードとステーションモードです。それらの違いについては、こちらを参照してください。

**1.** マイクロUSBケーブルを使用してボードに電源を供給します。

**2.** コンピュータのWi-Fi接続ユーティリティを開き、LinkIt_Smart_7688_XXXXXXという名前のアクセスポイントに接続します。XXXXXXはボードごとに異なるハードウェア識別子です。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Connect_wifi.jpg)

**3.** ブラウザを開き、URLに「mylinkit.local/」または「192.168.100.1」を入力します。rootのパスワードを設定してサインインします。右上の「Network」をクリックします。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Network_conf.jpg)

**4.** ステーションモードを選択し、右側の「Refresh」または下向き矢印をクリックして接続するAPを見つけます。APを選択した後、必要に応じてパスワードを入力します。「Configure & Restart」をクリックして完了します（以下の図を参照）。その後、モード切り替えのために約30秒待ちます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Station_mode.jpg)

**5.** PuTTyを起動し、前のセクションで説明したようにUSB-シリアルアダプタを使用してシステムに接続します。

**6.** `ifconfig` を入力し、以下のようにinet addrのIPアドレスを確認します。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/IFCONFIG.jpg)

:::note
    システムを再起動してもステーションモードに入ります。APモードに戻すには、Wi-Fiボタンを少なくとも5秒間押してください。注意：`reboot` コマンドを使用して組み込みOSを再起動する必要があります。
:::

**7.** 新しいブラウザタブにIPアドレスを入力し、Webユーザーインターフェースにログインしてシステムを構成できます。

**8.** これで、ホストコンピュータとLinkIt Smart 7688の両方がインターネットに接続されます。コンソールで `ping [www.mediatek.com](https://www.mediatek.com/)` を入力すると、以下のような結果が得られます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Ping_result.jpg)

**9.** これで、インターネットを使用して開発ボード上のシステムを構成できます。

### Arduinoプログラミング環境のインストール

この開発ボードはArduinoと互換性のある機能を備えています。そのため、Arduinoコードを7688プラットフォームに適用することで、プロトタイピングプロセスを迅速化できます。このセクションでは、Arduinoプログラミング環境を構築する方法を説明します。

#### Arduino IDEのダウンロードとインストール

[Arduino IDE 1.6.5](https://www.arduino.cc/en/Main/Software) をコンピュータにインストールしてください。

LinkIt Smart 7688プラットフォーム用にArduino IDEを構成します。

#### 開発ボードサポートパッケージのインストール

Arduino IDE 1.6.5は、**Board Manager** ツールを使用してサードパーティのボード統合をサポートしています。LinkIt Smart 7688開発ボードはArduino IDEのプラグインであり、ArduinoがLinkItボードをサポートするためにはボードパッケージをインストールする必要があります。以下の手順に従ってください：

**1.** Arduino IDEで、[ファイル] メニューから [環境設定] をクリックし、以下を追加します：

```
http://download.labs.mediatek.com/package_mtk_linkit_smart_7688_index.json
```

これを「追加のボードマネージャURL」フィールドに挿入します：

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Install_package.jpg)

**2.** コンピュータがインターネットに接続されていることを確認してください。[こちらからダウンロード](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/LinkIt.zip) した **LinkIt** を解凍し、**Preferences.txt** と同じ場所にある **packages** フォルダにファイルをコピーします。以下の赤い四角でマークされたセクションをクリックして、**Preferences.txt** のファイル場所を開きます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/7688_duo_demo_preferences.txt_location_s.jpg)

**3.** Arduinoの **ツール** メニューで **ボード** を選択します。

**4.** ボードマネージャのボードリストに「LinkIt Smart 7688」という項目が表示され、**COMxx**（**LinkIt Smart 7688 Duo**）のポートを選択します。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Install_SDK.jpg)

**5.** インストールが完了しました。

### LinkIt Smart 7688 Duo COMポートドライバのインストール

ボードパッケージをインストールした後、LinkIt Smart 7688 Duoをコンピュータに接続すると、デバイスマネージャに以下のポートIDでUSBシリアルCOMポートが表示されます：

* ブートローダーCOMポート：VID=0x0E8D, PID=0xAB00
* ArduinoスケッチCOMポート：VID=0x0E8D, PID=0xAB01

次に、オペレーティングシステムに応じてドライバをインストールする必要があります。手順は以下の通りです：

:::note
    Windows 10の場合、ドライバをインストールする必要はありません。ただし、Windows 10がボードを認識するために追加の手順が必要です。LinkIt Smart 7688 DuoをWindows 10マシンに接続し、MCUリセットボタンを700ミリ秒以内に2回素早く押してください。システムはLinkIt Smart 7688 DuoをUSBシリアルデバイス（COM5）として認識するはずです。番号5はマシンによって異なる場合があります。この手順は、ボードをWindowsマシンに初めて接続する際にのみ必要です。
:::
:::note
    Windows 8の場合、システムがドライバのインストールをブロックすることがあります。このリンクを参照して、Windows 8でドライバ署名の強制を無効にする方法を確認してください。署名の強制を無効にした後、以下のWindows 7の手順に従ってドライバをインストールしてください。
:::
:::note
    Windows 7の場合、以下のパスにあるシリアルCOMポートINFドライバを見つけてください。また、ここからインストールすることもできます：
    `[Arduino IDE設定場所]/Arduino15/packages/LinkIt/hardware/avr/0.1.5/driver/linkit_smart_7688.inf`
:::

Arduinoの環境設定場所は **[ファイル] -> [環境設定]** で確認できます。**preference.txtのパス** を参照してください。

![画像をここに挿入](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Preference_location.jpg)

`linkit_smart_7688.inf` を右クリックして「インストール」を選択します。セキュリティウィンドウが表示されたら、**「このドライバソフトウェアをインストールします」** をクリックします。これでドライバのインストールが完了します。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Driver_inst_alert.jpg)

* Ubuntu Linuxの場合、ドライバをインストールする必要はありません。LinkIt Smart 7688は/devフォルダ内にあり、ttyUSB0としてマウントされます。ただし、番号0は各Ubuntuマシンで異なる場合があります。
* OS Xの場合もドライバをインストールする必要はありません。LinkIt Smart 7688 Duoは/dev/tty.usbmodem1413としてシリアルデバイスにマウントされます。ただし、番号1413は各OS Xマシンで異なる場合があります。

## デモ: Hello Worldの例

:::note
    ネイティブアプリケーション開発中にメモリ不足を避けるために、より強力なホスト環境でネイティブアプリケーション開発環境をセットアップし、LinkIt Smart 7688ターゲットの実行可能形式をクロスコンパイルすることをお勧めします。以下の表は、LinkIt Smart 7688のプログラミング言語とホストコンピュータ上の関連開発環境の概要を示しています。
:::

### Python

**1.** FileZillaを使用し、この[チュートリアル](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_%28en%29)を参照してください。サーバーIP（**ホスト名**を置き換え）は、前の[ステーションモードへの切り替え](https://seeeddoc.github.io/LinkIt_Smart_7688_Duo#Switch_to_Station_mode)セクションで見つかったinet addrです。ユーザー名はroot、パスワードはそのセクションで設定したパスワードです。

**2.** テキストエディタを開き、以下のサンプルコードをコピーして貼り付け、**helloworld.py**として保存します。
```
print "Hello World!"
```

**3.** FileZillaを使用して、**helloworld.py**ファイルをターゲット開発環境（LinkIt Smart 7688）にコピーし、**root**フォルダに配置します。

**4.** PuTTyを起動し、USBシリアルアダプタを使用してシステムに接続します。

**5.** 作業ディレクトリを**/root**に設定し、**python helloworld.py**と入力して実行します。

**6.** コンソールに**Hello World**!と表示されるのが確認できます。

### Arduino

#### ホストコンピュータ上（Arduino側）

MCU側はArduinoスケッチとして記述されます。この例では、スケッチは単にMPU（Linux）側から送信されたコマンドをリッスンし、オンボードLEDを切り替えるだけです。

**1.** まず、LinkIt Smart 7688 DuoをPCに接続し、Arduino IDEを開いて以下のスケッチコードをIDEに貼り付けます。

```
void setup() {
    Serial.begin(115200); // USBシリアルポート（PCに接続）へのシリアル接続を開く
    Serial1.begin(57600); // MT7688への内部シリアル接続を開く
    // MT7688では、これがデバイスにマッピングされます
    pinMode(13, OUTPUT);
}
void loop() {
    int c = Serial1.read(); // MT7688から読み取る
    if (c != -1) {
        switch(c) {
        case '0': // "0"を受信した場合、D13をオフにする
            digitalWrite(13, 0);
            break;
        case '1': // "1"を受信した場合、D13をオンにする
            digitalWrite(13, 1);
            break;
        }
    }
}
```

**2.** IDEの**ツール -> ポート**をクリックして、正しいCOMポートを選択します（デバイスマネージャで確認してください）。

**3.** スケッチをボードにアップロードします。この時点ではボードはまだ点滅しません。次のステップでLinux側にプログラムを書き込む必要があります。

![enter image description here](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/img/Blink_in_arduino.jpg)

#### 開発ボード上（Linux側）

**1.** 任意のテキストエディタを使用して新しいファイル（Pythonファイル）を作成し、以下のコードをコピーして保存します。

```
import serial
import time
s = None
def setup():
    global s
# /dev/ttyS0にシリアルCOMポートを開く（UART0(D0/D1)にマッピングされる）
# ボーレートは57600に設定され、Arduinoスケッチで指定されたものと一致する必要があります。
s = serial.Serial("/dev/ttyS0", 57600)
def loop():
# Arduinoスケッチに"1"を送信
# スケッチはボード上のD13に接続されたLEDをオンにします
s.write("1")
time.sleep(1)
# スケッチに"0"を送信してLEDをオフにします
s.write("0")
time.sleep(1)
if __name__ == '__main__':
setup()
while True:
loop()
```

**2.** このPythonプログラムをシステムコンソールで実行します。このプログラムは基本的に1と0の文字列を/dev/ttyS0ポートに書き込みます。このポートはArduinoのSerial1インターフェースにマッピングされています。前のセクションでアップロードしたArduinoスケッチはこの文字列を受信し、それに応じてオンボードLEDを点滅させます。

これで、Arduinoスケッチを拡張してPWMやI2Cデバイスなどの他のデバイスを駆動し、ArduinoとLinux側の間でコマンドメッセージを拡張することで状態を同期させることができます。さらに多くの周辺機器タイプを含める必要がある場合は、外部ライブラリを使用して通信プロトコルを実装することができます。そのようなプロトコルの1つであるFirmataは、次のセクションで説明されています。

## よくある質問 (FAQs)

[こちら](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/faq)から、Mediatek の FAQ をご覧いただけます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/317080023_DIP_Module;LinkIt_Smart_7688_Duo;2x20P.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [ハードウェア回路図ファイル](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Hardware_Schematics.zip)
* [マニュアル](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Manual.zip)
* [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
* [MediaTek LinkIt? Smart 7688 リソース](https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit_smart_7688/hdk_intro/index.gsp)
* [USB ドライブを使用したファームウェアのフラッシュ方法](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/Linkit_Smart_7688_DUO_Firmware.pdf)
* [認証書](https://files.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo/res/LinkIt_Smart_7688_Duo-Certificate.zip)
* [Mediatek](https://labs.mediatek.com/en/platform/linkit-smart-7688)

## プロジェクト

**Alexa ベースのスマートホームモニタリング**: オフィスにいながら自宅の状況を知りたいですか？ 家庭用デバイスを制御し、どこにいても自宅のアラートを受け取ることができます！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/adithya-tg/alexa-based-smart-home-monitoring-e36b7f/embed' width='350'></iframe>

**DIY スマートランプ - トグルスイッチと Alexa で制御**: スイッチを切り替えたり Alexa を使って制御できるスマートランプを、わずか 35 ドルで作りましょう。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/darian-johnson/diy-smart-lamp-controlled-by-toggle-switch-and-alexa-7de243/embed' width='350'></iframe>

**ReRouter - 拡張可能な IoT ルーターを作成**: ルーターにプリンターを統合し、祖父や自分がウェブページに書き込んだ内容をプリンターで印刷できるようにします。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/seeed-studio/rerouter-make-an-extensible-iot-router-12f1e3/embed' width='350'></iframe>

**IoT 水槽コントローラー**: IoT 機能を備えたオープンソースの 3D プリント水槽コントローラー。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/roroid/iot-aquarium-controller-448dac/embed' width='350'></iframe>

**スマート照明と通知**: MediaTek LinkIt Smart 7688 Duo を使用して、スマート LED を家庭の自動化システムにワイヤレスで接続します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/phigax/smart-lighting-and-notifications-1c8a1b/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます！ 製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>