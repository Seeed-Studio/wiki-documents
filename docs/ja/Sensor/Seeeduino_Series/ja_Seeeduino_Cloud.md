---
description: Seeeduino Cloud
title: Seeeduino Cloud
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Cloud
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_cover.jpg)

Seeeduino Cloudは、[Dragino WiFi IoTモジュールHE](http://www.dragino.com/products/linux-module/item/87-he.html)とATmega32u4を基にしたマイクロコントローラボードです。HEは高性能で低コストの150M、2.4G WiFiモジュールで、中国語で「コア」を意味し、内部にオープンソースのOpenWrtシステムを搭載しています。Seeeduino CloudはArduino互換ボードであり、Grove、シールド、IDE（Arduino IDE 1.5.3以降）に100%互換性があります。通常のArduinoインターフェースに加え、Seeeduino CloudはイーサネットとWiFiのサポートを内蔵し、USB-Aポートを備えているため、ネットワーク接続や大容量ストレージを必要とするプロトタイプ設計に非常に適しています。また、Seeeduino CloudをIoTゲートウェイとして使用するのも良いアイデアです。

[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Cloud-Arduino-Yun-compatible-openWRT-controller-p-2123.html)

## アプリケーションアイデア

* モノのインターネット（IoT）  
* スマートハウス
* 学習

以下は参考になるいくつかの面白いプロジェクトです。

|シンプルWi-Fiメッセージャー|Google Docsへのデータ送信|ソーラーパネル監視システム|
|--------|----------|---------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_2.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_3.jpg)|
|[今すぐ作る](https://www.instructables.com/id/Arduino-Yun-Messager/)|[今すぐ作る](https://www.instructables.com/id/Google-Docs-and-the-Arduino-Y%C3%BAn/)|[今すぐ作る](https://www.instructables.com/id/Arduino-Yun-Solar-Panel-Monitoring-System/)|

## 特徴

* Arduino Yun互換
* Dragino WiFi IoTモジュールHEを基に構築
* 内部にオープンソースOpenWrtシステムを搭載
* 2.4GHz WiFi、802.11 b/g/n対応
* イーサネット対応
* USB 2.0対応
* オンボードGroveコネクタ

## 仕様

Seeeduino Cloudには2つのプロセッサがあるため、それぞれの特性を2つの別々の表に示します。

**Dragino HEモジュール**

|パラメータ|値|
|------------|------------|
|CPU|ATHEROS AR9331|
|クロックスピード|400MHz|
|RAM|64MB|
|フラッシュ|16MB|
|OS|OpenWrt|
|インターフェース|2 x RJ45, 1 x USB Host, 1 x UART, 14 multiplex GPIOs|
|電源|3.3V電源入力|
|WiFi|150M 2.4GHz WiFi、802.11 b/g/n対応|

**AVR Arduinoマイクロコントローラ**

|パラメータ|値|
|------------|-------------|
|マイクロコントローラ|ATmega32u4|
|フラッシュメモリ|32KB|
|SRAM|2.5kB|
|EEPROM|1kB|
|クロックスピード|16MHz|
|動作電圧|5V|
|デジタルI/Oピン|20|
|PWMチャンネル|7|
|アナログ入力チャンネル|12|

## ハードウェア概要

以下の画像はSeeeduino Cloudのハードウェア機能の概要を示しています。Seeeduino Cloudのピンアウトと各ピンの代替機能はピンアウト図に示されています。これはクイックリファレンスとして使用できます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_hardware.png)

* **RJ45イーサネットポート**  
LANポートはATHEROS AR9331に接続されており、インターネット接続やデバイス管理に使用できる独自のIPアドレスを持っています。
* **USB入力**  
USBポートは、PCに接続してプログラミングを行ったり、電源を供給したりするために使用されます。Micro USBはUSBの普及版であり、ほとんどのAndroidスマートフォンやその他のデバイスで見られます。家にこのケーブルが何本もあるでしょう。
* **USB HOST**  
Seeeduino CloudはUSBホスト機能を提供し、ウェブカメラ、USBドライブ、キーボード、ジョイスティックなどのさまざまなUSBデバイスに接続できます。
* **32U4 RST**  
32U4リセットボタンを押すとATmega32U4 MCUがリセットされます。通常、スケッチを再起動するために使用されます。
* **SYS RST**  
システムリセットボタンを押すとLinuxシステムが再起動します。
* **Wi-Fi RST**  
Wi-Fiリセットボタンは長押しのみ対応しています。5秒後に押して離すとWiFi設定がリセットされます。他の設定は保持されます。30秒後に押して離すと、すべての設定が工場出荷時のデフォルトにリセットされます。
* **Groveコネクタ**  
SeeedStudioは、このI2CまたはUART接続を利用できるさまざまなセンサー/デバイスを提供しています。また、独立したGroveコネクタを販売しており、独自のセンサー接続を作成するのに役立ちます。I2C Groveコネクタは、SDAとSCL用にアナログピンA4およびA5にも接続されています。これらのピンを使用したい場合はそれも可能です。UART Groveコネクタは、デジタルピン0および1に接続されており、それぞれRXおよびTXとして使用されます。
* **ICSP**  
これはATmega32U4用のICSP接続であり、Arduino Uno、Due、Mega、Leonardo互換ハードウェア（例：シールド）がこのコネクタを使用する場合に標準的なICSP/SPI位置に配置されています。このポートのSPIピン（MISO、SCK、MOSI）は、Arduino Unoと同様にデジタルピン12、13、11にも接続されています。
* **I-PEXコネクタ**  
これは外部アンテナ用のI-PEXコネクタです。
* **ピン**  
ATHEROS AR9331のI/Oピンにアクセスすることはできません。すべてのI/OラインはATmega32U4に接続されています。  
32U4の20個のデジタルピンは、pinMode()、digitalWrite()、digitalRead()関数を使用して入力または出力として使用できます。これらは5ボルトで動作します。各ピンは最大40mAを供給または受信でき、内部プルアップ抵抗（デフォルトでは切断）は20-50kΩです。  
さらに、一部のピンには特殊な機能があります：
  * シリアル: 0 (RX) と 1 (TX)。ATmega32U4のハードウェアシリアル機能を使用してTTLシリアルデータを受信（RX）および送信（TX）します。Seeeduino Cloudでは、SerialクラスはUSB（CDC）通信を指します。ピン0と1でのTTLシリアルにはSerial1クラスを使用してください。Seeeduino CloudのATmega32U4とAR9331のハードウェアシリアルは相互に接続されており、2つのプロセッサ間の通信に使用されます。Linuxシステムでは一般的に、AR9331のシリアルポートにはコンソールが公開されており、これによりスケッチからLinuxが提供するプログラムやツールにアクセスできます。
  * TWI: 2 (SDA) と 3 (SCL)。Wireライブラリを使用してTWI通信をサポートします。
  * 外部割り込み: 3 (割り込み0)、2 (割り込み1)、0 (割り込み2)、1 (割り込み3)、7 (割り込み4)。これらのピンは、低値、立ち上がりまたは立ち下がりエッジ、または値の変化で割り込みをトリガーするように設定できます。詳細はattachInterrupt()関数を参照してください。ピン0と1はLinuxプロセッサとのハードウェアシリアルポートとしても使用されるため、割り込みとして使用することは推奨されません。ピン7はAR9331プロセッサに接続されており、将来的にハンドシェイク信号として使用される可能性があります。割り込みとして使用する場合は、競合の可能性に注意することをお勧めします。
  * PWM: 3, 5, 6, 9, 10, 11, 13。analogWrite()関数を使用して8ビットPWM出力を提供します。
  * SPI: ICSPヘッダー上。SPIライブラリを使用してSPI通信をサポートします。SPIピンはUnoのようにデジタルI/Oピンには接続されていません。ICSPコネクタでのみ利用可能です。SPIを使用するシールドがあり、6ピンICSPコネクタがSeeeduino Cloudの6ピンICSPヘッダーに接続されていない場合、そのシールドは動作しません。SPIピンはAR9331のGPIOピンにも接続されており、ソフトウェアでSPIインターフェースが実装されています。これにより、ATmega32u4とAR9331はSPIプロトコルを使用して通信することもできます。
  * アナログ入力: A0 - A5, A6 - A11 (デジタルピン4, 6, 8, 9, 10, 12上)。Seeeduino Cloudには12個のアナログ入力があり、A0からA11までラベル付けされています。これらはすべてデジタルI/Oとしても使用できます。ピンA0-A5はUnoと同じ位置に表示されます。入力A6-A11はデジタルI/Oピン4, 6, 8, 9, 10, 12上にあります。各アナログ入力は10ビットの解像度（つまり1024の異なる値）を提供します。デフォルトではアナログ入力はグランドから5ボルトまで測定しますが、AREFピンとanalogReference()関数を使用して範囲の上限を変更することが可能です。
  * AREF: アナログ入力の基準電圧。analogReference()とともに使用されます。

## はじめに

Seeeduino Cloudには2つのプロセッサが搭載されています。一つはLeonardoと同様のATmega32U4、もう一つはLinuxとOpenWRTワイヤレススタックを実行するAtheros 9331です。このAtheros 9331により、ボードはWiFiやEthernetネットワークに接続することが可能です。[Yun Bridge Library](https://www.arduino.cc/en/Reference/YunBridgeLibrary)を使用すると、Arduinoを介してLinuxシステム上のプログラムやカスタムスクリプトを呼び出し、さまざまなインターネットサービスに接続することができます。

### ATmega32U4側でのプログラム

ATmega32U4は[Arduino Software (IDE)](https://www.arduino.cc/en/Main/Software?setlang=en)を使用してプログラムされます。まだインストールしていない場合は、[こちら](https://www.arduino.cc/en/Guide/HomePage)をクリックしてインストール手順をご確認ください。

**ドライバーのインストール**

まず以下を行ってください：

* **Micro-USBケーブルを用意する**
  * まずMicro-USBケーブルが必要です。Androidスマートフォンのデータケーブルで問題ありません。
  見つからない場合は、[こちら](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100)で購入できます。

:::caution
Micro USBソケットを慎重に扱ってください。ソケットが壊れる可能性があります。
:::

* **ボードを接続する**
  * Seeeduino Cloudは、コンピュータへのUSB接続または外部電源から自動的に電力を供給します。USBケーブルを使用してArduinoボードをコンピュータに接続してください。緑色の電源LED（**PWR**とラベル付けされています）が点灯するはずです。

**Windowsの場合**

Windows版のArduino Software (IDE)には適切なドライバーがすでに含まれています。インストール時にオペレーティングシステムがドライバーをインストールします。Seeeduino Cloudを接続すると、ドライバーが自動的にインストールされます。

**MACの場合**

Seeeduino CloudをMacに初めて接続すると、「Keyboard Setup Assistant」が起動します。Seeeduino Cloudに関して設定する必要はありません。このダイアログはウィンドウの左上の赤いボタンをクリックして閉じることができます。

**Linuxの場合**

Ubuntu 10.0.4以降ではドライバーをインストールする必要はありませんが、ポート5353がファイアウォールによってブロックされていないことを確認してください。

**最初のスケッチを開く**

LED点滅の例題スケッチを開きます：File > Examples > 01.Basics > Blink。

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/UNO_Load_Blink.jpg)

**ボードタイプとポートを選択する**

Tools > BoardメニューでArduinoまたはGenuinoボードに対応するエントリを選択する必要があります。

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YUN_SelBoard.jpg)

Tools | Serial Portメニューからボードのシリアルデバイスを選択します。これは通常COM3以上（COM1とCOM2は通常ハードウェアシリアルポートに予約されています）です。確認するには、ボードを切断してメニューを再度開き、消えるエントリがArduinoまたはGenuinoボードであるはずです。ボードを再接続してそのシリアルポートを選択します。ボードがWiFiで適切に構成されている場合、Portリストに表示されます。

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YUN_SelPort.jpg)

**プログラムをアップロードする**

環境内で「Upload」ボタンをクリックするだけです。数秒待つと、ボード上のRXとTX LEDが点滅するはずです。アップロードが成功すると、ステータスバーに「Done uploading.」というメッセージが表示されます。

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/UNO_Upload.png)

アップロードが完了して数秒後、ボード上のLED（D13）が点滅（緑色）を開始するはずです。点滅した場合、おめでとうございます！Arduinoが正常に動作しています。問題がある場合は、トラブルシューティングの提案を参照してください。

### ATHEROS AR9331側でのプログラム

**ネットワークの設定**

Seeeduino CloudにはWiFiインターフェースとLANポートがあります。どちらもインターネット接続やデバイス管理に使用できるIPアドレスを持っています。

**1. Wi-Fi APモード**

Seeeduino Cloudを初めて電源ONにすると、WiFi接続にSeeeduinoCloud-AXXXXという名前のセキュリティ保護されていないWiFiネットワークが表示されます。
以下のようにコンピュータをこのネットワークに接続できます。コンピュータはこのネットワークのIPアドレス**192.168.240.xxx**を取得します。Seeeduino CloudのデフォルトIPアドレスは**192.168.240.1**です。

**2. Wi-Fi STAモード**

SeeeduinoCloud-AXXXXに接続した後、ブラウザの検索ボックスに172.31.255.254または192.168.240.1を入力すると、Web UIを介してSeeeduino Cloudに接続できます。デフォルトのパスワードは「seeeduino」で、LOG INをクリックします。

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_login.png)

「SYSTEM」をクリックし、Wi-Fiネットワークを選択してパスワードを入力し、「CONFIGURE & RESTART」をクリックします。

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_sta.png)

**3. オンボードEthernet**

Seeeduino Cloudをイーサネットケーブルで有線ネットワークに接続すると、DHCPを介して自動的に接続を試みます。ボードはWiFiと同様にポートメニューに表示されます。

### ファームウェアのSysupgrade

以下はブラウザを使用して新しいファームウェアをアップグレードする手順です。

* File -> Examples -> Bridge -> YunSerialTerminal.inoをSeeeduino Cloudに書き込む

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YunSerialTerminal.png)

* Seeeduino Cloudと通信できるputtyで`ifconfig`を入力してSeeeduino CloudのIPを確認する

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/putty_configure.png)

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/inet_addr.png)

* ブラウザでSeeeduino CloudのIPを入力してアクセスし、パスワードは「seeeduino」

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/password.png)

* [最新のファームウェア](http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/)を取得

* アップグレードボタンを使用してアップグレード

![画像を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/upgrade.png)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/upgrade_configure.png)

### ターミナル

Seeeduino Cloud のターミナルには SSH を介してアクセスし、ATHEROS AR9331 側でプログラムや設定を行うことができます。

* [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) などの SSH クライアントをダウンロードしてください。
* Seeeduino Cloud の IP アドレスを使用して SSH クライアントを実行します。

```
ユーザー名: root
パスワード: seeeduino
```

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_terminal.png)

### Yun Bridge ライブラリ

Bridge ライブラリは Arduino ボードと Dragino HE の間の通信を簡素化します。AVR (Arduino ボード) からの Bridge コマンドは HE 上の Python によって解釈されます。
その役割は以下の通りです：

* Arduino から要求された場合に GNU/Linux 側でプログラムを実行する。
* Arduino とインターネット間でセンサーの読み取り値などのデータを共有するための共有ストレージスペースを提供する。
* インターネットからのコマンドを受け取り、それを直接 Arduino に渡す。

Bridge の使用方法についての詳細な説明と多くの例が [Arduino公式ウェブサイト](https://www.arduino.cc/en/Reference/YunBridgeLibrary) に掲載されています。以下は Bridge ライブラリを使用したいくつかの例です。

**例 1: Linux に挨拶する**

この例は Arduino と Seeeduino Cloud の間の簡単な挨拶テストです。この例は Arduino IDE --> ファイル --> 例 --> Bridge --> ConsoleRead にあります。この例のチュートリアルは [こちら](https://www.arduino.cc/en/Tutorial/ConsoleRead) にあります。以下にコードを示し、Seeeduino Cloud での理解を深めるための追加の詳細を記載しています：

```
#include <Console.h>

String name;

void setup() {
    // Console を初期化し、ポートが開くのを待つ
    Bridge.begin();
    Console.begin();

    // Console ポートが接続されるのを待つ
    while (!Console);

    Console.println("こんにちは、お名前は何ですか？");
}

void loop() {
    if (Console.available() > 0) {
        char c = Console.read(); // 受信した次の文字を読み取る
        // 改行文字を探す。これは文字列の最後の文字
        if (c == '\n') {
            // 受信した名前を使ってテキストを表示
            Console.print("こんにちは ");
            Console.print(name);
            Console.println("! お会いできて嬉しいです！");
            Console.println();
            // 再度名前を尋ね、古い名前をクリア
            Console.println("こんにちは、お名前は何ですか？");
            name = "";  // 名前の文字列をクリア
        }
        else {       // バッファが空の場合、Console.read() は -1 を返す
            name += c; // Console から読み取った文字を名前の文字列に追加
        }
    }
}
```

**例 2: USB フラッシュにデータを記録する**

この例は USB フラッシュにデータを記録する方法を示しています。この例で使用されるスケッチは [こちら](http://wiki.dragino.com/index.php?title=Arduino_Yun_examples#Log_sensor_data_to_USB_flash) と同じです。ソースコードもそこにあります。
Seeeduino Cloud は USB フラッシュを自動的にディレクトリ /mnt/sda1 にマウントします。このスケッチはセンサーのデータをファイル /mnt/sda1/data/datalog.csv に追加します。そのため、スケッチを実行する前に USB フラッシュにそのようなファイルが存在することを確認してください。

```
#include <FileIO.h>     // FileIO クラスは Linux ファイルシステムの操作を可能にします
#include <Console.h>    // Console クラスは IDE と Yun Shield の間の対話を提供します
void setup() {
    // Console を初期化
    Bridge.begin();
    Console.begin();
    FileSystem.begin();
    while(!Console);   // シリアルポートが接続されるのを待つ
    Console.println("ファイルシステムデータロガー\n");
}
void loop () {
    // ログデータを組み立てるためのタイムスタンプで始まる文字列を作成
    String dataString;
    dataString += getTimeStamp();
    dataString += " , ";
    // 3つのセンサーを読み取り、文字列に追加
    for (int analogPin = 0; analogPin < 3; analogPin++) {
        int sensor = analogRead(analogPin);
        dataString += String(sensor);
        if (analogPin < 2) {
            dataString += ",";    // 値をカンマで区切る
        }
    }
    // ファイルを開く。注意：一度に開けるファイルは1つだけ
    // 別のファイルを開く前にこのファイルを閉じる必要がある
    // USB フラッシュカードはデフォルトで "/mnt/sda1" にマウントされる
    File dataFile = FileSystem.open("/mnt/sda1/data/datalog.csv", FILE_APPEND);
    // ファイルが利用可能なら書き込む
    if (dataFile) {
        dataFile.println(dataString);
        dataFile.close();
        // シリアルポートにも出力
        Console.println(dataString);
    }
    // ファイルが開けない場合、エラーを表示
    else {
        Console.println("datalog.csv のオープンエラー");
    }
    delay(15000);  // 15秒ごとに書き込み
}
// getTimeStamp 関数はタイムスタンプを含む文字列を返す
// Yun Shield は Linux の "date" コマンドを呼び出し、タイムスタンプを取得
String getTimeStamp() {
    String result;
    Process time;
    // date は追加のパラメータに応じて異なる形式で日付と時刻を取得するコマンドラインユーティリティ
    time.begin("date");
    time.addParameter("+%D-%T");   // パラメータ: D は完全な日付 mm/dd/yy
    //              T は時刻 hh:mm:ss
    time.run();   // コマンドを実行
    // コマンドの出力を読み取る
    while(time.available()>0) {
        char c = time.read();
        if(c != '\n')
        result += c;
    }
    return result;
}
```

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/500px-SeeeduinoCloud_Sketch_USB.png)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **回路図**
  * [Seeeduino Cloud Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_v1.0.zip)
  * [Seeeduino Cloud PDF ファイル](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_PDF.pdf)

* **ファームウェア**
  * [Seeeduino Cloud ファームウェア](http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/)

* **参考資料**
  * [Arduino の始め方](https://www.arduino.cc/en/Guide/HomePage)
  * [Arduino 言語リファレンス](https://www.arduino.cc/en/Reference/HomePage)
  * [Arduino ソフトウェア(IDE)のダウンロード](https://www.arduino.cc/en/Main/Software)
  * [Arduino FAQ](https://www.arduino.cc/en/Main/FAQ)
  * [Arduino の紹介](https://www.arduino.cc/en/guide/introduction)
  * [Arduino の Wikipedia ページ](https://en.wikipedia.org/wiki/Arduino)
  * [Arduino Yun Wiki](https://www.arduino.cc/en/Main/ArduinoBoardYun)
  * [Arduino Yun の始め方](https://www.arduino.cc/en/Guide/ArduinoYun#toc2)
  * [Yun Bridge ライブラリ](https://www.arduino.cc/en/Reference/YunBridgeLibrary)

## FAQ

* Yun Bridge ライブラリとは何ですか？

Yun Bridge ライブラリは、Arduino Yun において MPU と MCU 間の通信に使用される仕組みです。Seeeduino Cloud は Yun Bridge ライブラリをサポートしており、Arduino ユーザーが IoT プロジェクトを簡単に構築できるようにします。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>