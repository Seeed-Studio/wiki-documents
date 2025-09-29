---
description: Seeeduino Mega
title: Seeeduino Mega
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_Mega
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/Seeeduino_Mega_cover.jpg)

Seeeduino Megaは、Arduino Megaを基にした強力なマイクロコントローラーです。ATmega2560プロセッサを搭載しており、70個のデジタルI/O、16個のアナログ入力、14個のPWM、4つのハードウェアシリアルポートなど、多数のI/Oピンを提供します。Arduino Megaと比較して、Seeeduino Megaは少なくとも30%小型化されており、[Seeed Shield製品](https://www.seeedstudio.com/s/shield.html)と100%互換性があります。また、Seeeduinoシリーズの一員として、選択可能な動作電圧（3.3V/5V）、直角リセットボタンなど、Seeeduinoの細部へのこだわりを受け継いでいます。

[![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Mega-p-717.html)

## 応用アイデア

* モノのインターネット（IoT）  
* DIY
* ロボット
* スマートハウス
* 3Dプリンター
* 産業用途

以下は参考になる面白いプロジェクトの例です。

|8*8*8 LEDキューブ|ヘキサポッドロボット|DIY Arduino 3Dプリンター|
|-------|-------|--------
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_2.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/example_3.jpg)|
|[今すぐ作る](https://www.instructables.com/id/Arduino-Mega-8x8x8-RGB-LED-Cube/)|[今すぐ作る](https://www.instructables.com/id/Arduino-Mega-Hexapod/)|[今すぐ作る](https://www.instructables.com/id/Arduino-Controlled-CNC-3D-Printer/)|

## 特徴

* Arduino DuemilanoveおよびDiecimilaシールドのほとんどと互換性あり
* ATmega 2560 @ 16MHz
* 選択可能な5V/3.3V動作
* 70個のデジタルI/O
* 16個のアナログ入力
* 14個のPWM出力
* 4つのハードウェアシリアルポート（UART）
* 小型フォームファクター、Arduino Megaより30%小型
* プログラムが簡単で、ファームウェアをロードするための追加ハードウェアは不要 – USBポートに接続するだけで使用可能
* ICSPヘッダー
* バッテリーまたはAC-DCアダプターで電源供給可能

## 仕様

|項目|値|
|------------|-----------|
|マイクロコントローラー|ATmega2560|
|動作電圧|5V/3.3V|
|入力電圧|7-12V|
|デジタルI/Oピン|70|
|PWMチャンネル|14|
|アナログ入力チャンネル|16|
|I/OピンあたりのDC電流|20 mA|
|フラッシュメモリ|256 KB|
|RAM|8 KB|
|EEPROM|4 KB|
|クロックスピード|16 MHz|

## ハードウェア概要

以下の画像は、Seeeduino Megaのハードウェア機能の概要を示しています。Seeeduino Megaのピンアウトと各ピンの代替機能は、ピンアウト図に示されています。これはクイックリファレンスとして使用できます。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/Seeeduino_Mega_hardware1.png)

- **Mini USB**  
Mini USBポートは、ボードをPCに接続してプログラミングや電源供給を行うために使用されます。
- **モードスイッチ**  
スライドスイッチで、自動リセットとアップロードを許可または回避します。
- **電源スイッチ**  
スライドスイッチで、ボードのロジックレベルと電源出力を5Vまたは3.3Vに切り替えます。最近では、3.3Vで動作する新しい優れたセンサーが多く開発されています。他のduinoボードでは、ボードとセンサーの間にロジックレベルコンバーターを配置する必要がありますが、Seeeduino Megaではスイッチをスライドさせるだけで済みます！
- **DC入力**  
DC入力は、Seeeduino Megaを壁のアダプターから電源供給するために使用されます。これにより、DCモーターやその他の高出力デバイスを使用する場合など、プロジェクトにより多くの電力を供給できます。DC入力は7V-12Vです。モデルが電源オン時にピーク電流が2Aになるため、USB電源よりもDC電源が適しています。
- **リセット**  
このボタンは側面に便利に配置されており、シールドが上に配置されていてもSeeeduinoボードをリセットできます。他のArduinoボードでは、ボタンが上部に配置されているためアクセスが困難です。
- **ICSP**  
これはATmega328P用のICSP接続で、Arduino Uno、Due、Mega、Leonardo互換ハードウェア（例：シールド）で使用される標準的なICSP/SPI位置にあります。このポートのSPIピン（MISO、SCK、MOSI）は、Arduino Unoと同様にデジタルピン12、13、11にも接続されています。
- **デジタルピン**  
Seeeduino Megaには最大70個のデジタルピンがあります。[こちら](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino%20Mega%20pin%20mapping.pdf)をクリックして、ArduinoピンとAtmega2560ピンのピンマッピングを確認してください。  
Megaの70個のデジタルピンはすべて、pinMode()、digitalWrite()、digitalRead()関数を使用して入力または出力として使用できます。これらは5ボルトで動作します。各ピンは推奨動作条件として20mAを供給または受信でき、内部プルアップ抵抗（デフォルトでは切断）は20-50kΩです。最大40mAは、マイクロコントローラーに永久的な損傷を与えないために超えてはならない値です。  
さらに、一部のピンには特殊な機能があります：
	* シリアル: 0 (RX) と 1 (TX); シリアル1: 19 (RX) と 18 (TX); シリアル2: 17 (RX) と 16 (TX); シリアル3: 15 (RX) と 14 (TX)。TTLシリアルデータの受信（RX）および送信（TX）に使用されます。ピン0と1は、ATmega16U2 USB-to-TTLシリアルチップの対応するピンにも接続されています。
	* 外部割り込み: 2 (割り込み0)、3 (割り込み1)、18 (割り込み5)、19 (割り込み4)、20 (割り込み3)、21 (割り込み2)。これらのピンは、低レベル、立ち上がりまたは立ち下がりエッジ、またはレベルの変化で割り込みをトリガーするように構成できます。詳細はattachInterrupt()関数を参照してください。
	* PWM: 2から13および44から46。analogWrite()関数を使用して8ビットPWM出力を提供します。
	* SPI: 50 (MISO)、51 (MOSI)、52 (SCK)、53 (SS)。SPIライブラリを使用してSPI通信をサポートします。SPIピンはICSPヘッダーにも引き出されており、Arduino / Genuino Unoと物理的に互換性があります。
	* LED: 13。デジタルピン13に接続された内蔵LEDがあります。ピンがHIGH値のとき、LEDは点灯し、LOWのときは消灯します。
	* TWI: 20 (SDA) と 21 (SCL)。Wireライブラリを使用してTWI通信をサポートします。これらのピンは、古いDuemilanoveまたはDiecimila ArduinoボードのTWIピンと同じ場所にはありません。
	* アナログ: Mega 2560には16個のアナログ入力があり、それぞれ10ビットの解像度（つまり1024の異なる値）を提供します。デフォルトでは、これらはグラウンドから5ボルトまでを測定しますが、AREFピンとanalogReference()関数を使用して範囲の上限を変更することが可能です。
	* AREF: アナログ入力の基準電圧。analogReference()とともに使用されます。
	* リセット: このラインをLOWにするとマイクロコントローラーがリセットされます。通常、ボード上のリセットボタンをブロックするシールドにリセットボタンを追加するために使用されます。
	* マークされていないピン: レジスタ操作で使用します。

## ドライバのインストール

まず、以下を行ってください：

* **Micro-USBケーブルを用意する**  
Micro-USBケーブルが必要です。Androidスマートフォンのデータケーブルでも問題ありません。  
もし見つからない場合は、[こちら](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100)で購入できます。

* **ボードを接続する**  
ArduinoボードをUSBケーブルを使ってコンピュータに接続してください。緑色の電源LED（**PWR**とラベル付けされています）が点灯するはずです。

**Windowsの場合**

:::note
    このドライバはWindows XP、Windows Vista、Windows 7、Windows 8/8.1、Windows 10で利用可能です。
:::
[![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

- ボードを接続し、Windowsがドライバのインストールプロセスを開始するのを待ちます。数分後、プロセスは失敗します。
- スタートメニューをクリックし、コントロールパネルを開きます。
- コントロールパネル内で「システムとセキュリティ」に移動し、「システム」をクリックします。「システム」ウィンドウが開いたら、**デバイスマネージャー**を開きます。
- 「ポート（COM & LPT）」の下を確認します。「Seeeduino Mega」という名前のオープンポートが見つかるはずです。「COM & LPT」セクションがない場合は、「その他のデバイス」の下に「不明なデバイス」があるか確認してください。
- 「Seeeduino Mega」ポートを右クリックし、「ドライバーソフトウェアの更新」を選択します。
- 次に、「コンピューターを参照してドライバーソフトウェアを検索」を選択します。
- 最後に、「Seeeduino Mega.inf」という名前のドライバファイルを選択します。
- これでWindowsがドライバのインストールを完了します。

**Mac OSXの場合**

ドライバをインストールする必要はありません。

## はじめに

:::note
    この部分はWindows 10上でArduino 1.6.9を使用した場合を基にしています。
:::
まず、Arduinoソフトウェアをインストールする必要があります。

[![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Arduinoアプリケーションを起動する**

以前にダウンロードしたArduinoアプリケーション（arduino.exe）をダブルクリックして起動します。

:::note
    Arduinoソフトウェアが異なる言語でロードされた場合、設定ダイアログで言語を変更できます。詳細は[Arduinoソフトウェア（IDE）ページ](https://www.arduino.cc/en/Guide/Environment#languages)をご覧ください。
:::

**Blink例を開く**

LED点滅の例スケッチを開きます：**ファイル > スケッチ例 > 01.Basics > Blink**。

![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png)

**Arduino IDEにSeeeduinoを追加する**

**ファイル > 設定**をクリックし、追加のボードマネージャURLに以下のURLを入力します：  
*https://raw.githubusercontent.com/Seeed-Studio/Seeeduino-Boards/master/package_seeeduino_index.json*

設定を完了するにはOKをクリックします。その後、**ツール > ボード > ボードマネージャ**をクリックし、**Seeeduino by Seeed Studio**を見つけてインストールします。

![画像の説明を入力してください](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/add_board.png)

**ボードを選択する**

**ツール > ボード**メニューで、使用しているArduinoに対応するエントリを選択します。  
**Seeeduino Mega 2560**を選択します。

![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/mega_arduino_ide.png)

**シリアルポートを選択する**

**ツール > シリアルポート**メニューからArduinoボードのシリアルデバイスを選択します。通常、COM3以上になります（**COM1**と**COM2**は通常ハードウェアシリアルポートに予約されています）。確認するには、Arduinoボードを切断してメニューを再度開き、消えたエントリを探します。その後、ボードを再接続してそのシリアルポートを選択します。

![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/select_com_seeeduino_mega.png)

:::note
    Macの場合、**/dev/tty.USBmodem**のような名前になります。
:::

**プログラムをアップロードする**

環境内で「アップロード」ボタンをクリックします。数秒待つと、アップロードが成功した場合、ステータスバーに「アップロード完了」と表示されます。

![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png)

アップロードが完了して数秒後、ボード上のピン13（L）LEDが点滅（オレンジ色）を開始するはずです。これが確認できれば、Arduinoのセットアップが完了です。問題がある場合は、トラブルシューティングの提案を参照してください。

## Linuxでの開始方法

Linuxで使用する場合は、[LinuxでのArduinoのインストール](http://playground.arduino.cc/Learning/Linux)をご覧ください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino_Mega_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **回路図**

    [Seeeduino Mega Eagleファイル](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino_Mega_v3.0.zip)

* **ピンマッピング**

    [Seeeduino MegaピンマッピングPDF](https://files.seeedstudio.com/wiki/Seeeduino_Mega/res/Seeeduino%20Mega%20pin%20mapping.pdf)

* **参考資料**

    [Arduinoの始め方](https://www.arduino.cc/en/Guide/HomePage)

    [Arduino言語リファレンス](https://www.arduino.cc/en/Reference/HomePage)

    [Arduinoソフトウェア(IDE)のダウンロード](https://www.arduino.cc/en/Main/Software)

    [Arduino FAQ](https://www.arduino.cc/en/Main/FAQ)

    [Arduinoの紹介](https://www.arduino.cc/en/guide/introduction)

    [ArduinoのWikipediaページ](https://en.wikipedia.org/wiki/Arduino)

    [Arduino Mega](https://www.arduino.cc/en/Main/ArduinoBoardMega2560?setlang=en)

## FAQ

**Arduino MegaとSeeeduino Megaの違いは何ですか？**

Seeeduino MegaはArduino Megaを基にした強力なマイクロコントローラーです。主な違いは以下の通りです：

* ミニUSBを使用して電源供給とプログラムを実行
* 3.3V/5Vシステム電源スイッチを追加
* 自動リセットモードスイッチを追加
* より小型のサイズ

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>