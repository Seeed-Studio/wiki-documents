---
description: Seeeduino v4.2
title: Seeeduino v4.2
keywords:
- Seeeduino_Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_v4.2
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/cover.JPG)

Seeeduino v4.2はオープンソースでArduino互換のATmega328 MCU開発ボードです。Seeeduino v4.2は、利用可能な最高のArduino派生品/互換品の1つだと考えています。Seeeduino v4.2は機能が豊富で、より安定しており、使いやすく、さらに見た目も良いです。

Seeeduino v4.2はArduino UNOブートローダーをベースにしており、ATmega16U2をUART-to-USBコンバーターとして使用しています（基本的にはFTDI USB2UARTチップのように動作します）。ボードにはすべてのピン用の追加のスルーホールパッドセットが付属しています。これらのパッドは0.1インチグリッドに整列しており、追加のピンヘッダーをはんだ付けしてブレッドボードに接続したり、0.1インチドットマトリックス汎用PCBを使用して独自のアタッチメント/シールドを作成するのが簡単です。

ボードはマイクロUSBケーブルを介してプログラムすることができます。また、DCジャック入力（7〜15V DC）を介してボードに電力を供給することも可能です。システムの供給電圧を3.3Vまたは5Vに選択できるスイッチがあり、低電圧センサーと対話するためにシステムを3.3Vに設定したい場合に非常に便利です。

最後に、オンボードの3つのGroveインターフェースにより、ボードを簡単にGroveモジュールに接続することができます。何か素晴らしいものを作りたい場合、Seeeduino v4.2といくつかのGroveモジュールだけで十分かもしれません。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" /></a></p>

## バージョン

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#6ab0de;}
.tg .tg-yw4l{vertical-align:top;width:20%}
.tg .tg-yw42{vertical-align:top;width:50%}
.tg .tg-4eph{background-color:#f9f9f9;}
.tg .tg-b7b8{background-color:#f9f9f9;vertical-align:top}
</style> -->

<table className="tg" align={"center"} width = {"100%"}>
  <tbody><tr>
      <th className="tg-yw4l">製品バージョン</th>
      <th className="tg-yw42">変更点</th>
      <th className="tg-yw4l">リリース日</th>
    </tr>
    <tr>
      <td className="tg-4eph">Seeeduino V4.0</td>
      <td className="tg-4eph">初版</td>
      <td className="tg-b7b8">2014年8月15日</td>
    </tr>
    <tr>
      <td className="tg-031e">Seeeduino V4.2</td>
      <td className="tg-031e">1. 左上隅のいくつかのパッドを削除<br />2. USBの位置を中央に変更<br />3. DCDC回路を改善して性能向上<br />4. I2C Groveコネクタを追加<br />5. シルクスクリーンと部品の位置を変更</td>
      <td className="tg-yw4l">2015年8月24日</td>
    </tr>
      <tr>
    <td>Seeeduino V4.3</td>
    <td>V4.2で<strong>ATMEGA328P-MU</strong>からATMEGA328P-AUに変更<br />シリアルチップを<strong>cp2102</strong>に置き換え</td>
    <td>2022年11月</td>
  </tr>
  </tbody></table>

## 特徴

- Arduino UNO と完全互換
- ATmega328 マイクロコントローラー
- 14 デジタル I/O ピン（6 PWM 出力）
- 6 アナログ入力
- ISP ヘッダー
- Arduino UNO-R3 シールド互換
- Micro USB プログラミングおよび電源供給
- オンボード Grove コネクタ
- 3.3/5V システム動作電源スイッチ
- 0.1 インチグリッドに整列した追加パッド

## 仕様

<table class="tg" align={"center"} width = {"100%"}>
  <tr>
    <th class="tg-yw4l">パラメータ</th>
    <th class="tg-yw4l">値/範囲</th>
  </tr>
  <tr>
    <td class="tg-vn4c">DC ジャック入力</td>
    <td class="tg-vn4c">7-12V</td>
  </tr>
  <tr>
    <td class="tg-031e" rowspan="2">DC 出力電流 - 5V ピン</td>
    <td class="tg-031e">Micro USB 使用時 最大 500mA</td>
  </tr>
  <tr>
    <td class="tg-vn4c">DC ジャック電源使用時 最大 2000mA</td>
  </tr>
  <tr>
    <td class="tg-031e">DC 出力電流 - 3V3 ピン</td>
    <td class="tg-031e">最大 500mA</td>
  </tr>
  <tr>
    <td class="tg-vn4c">I/O ピンあたりの DC 電流</td>
    <td class="tg-vn4c">40mA</td>
  </tr>
  <tr>
    <td class="tg-031e">フラッシュメモリ</td>
    <td class="tg-031e">32 KB</td>
  </tr>
  <tr>
    <td class="tg-vn4c">RAM</td>
    <td class="tg-vn4c">2 KB</td>
  </tr>
  <tr>
    <td class="tg-yw4l">EEPROM</td>
    <td class="tg-yw4l">1 KB</td>
  </tr>
  <tr>
    <td class="tg-6k2t">クロックスピード</td>
    <td class="tg-6k2t">16 MHz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">寸法</td>
    <td class="tg-yw4l">68.6mm x 53.4mm</td>
  </tr>
  <tr>
    <td class="tg-6k2t">重量</td>
    <td class="tg-6k2t">26g</td>
  </tr>
</table>

## ハードウェア概要

以下の画像は、Seeeduino v4.2 のハードウェア機能の概要を示しています。Seeeduino v4.2 のピン配置と各ピンの代替機能は、ピンアウト図に示されています。これはクイックリファレンスとして使用できます。

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/hardware_seeed.png)

- **<font face="" size="5" font color="00b0f0">❶</font> USB 入力:**
USB ポートは、ボードを PC に接続してプログラミングを行ったり、電源を供給したりするために使用されます。

- **<font face="" size="5" font color="00b0f0">❷</font> DC 入力:**
DC 電源ジャックは、Seeeduino ボードを壁のアダプターから電源供給するために使用されます。これにより、必要に応じてプロジェクトにより多くの電力を供給できます。例えば、DC モーターやその他の高電力デバイスを使用する場合です。DC 入力は 7V-15V に対応しています。

- **<font face="" size="5" font color="00b0f0">❸</font> Grove コネクタ:**
SeeedStudio には、この I2C または UART 接続を利用できるさまざまなセンサー/デバイスがあります。さらに、独立した Grove コネクタを販売しており、独自のセンサー接続を作成するのに役立ちます。I2C Grove コネクタは、SDA と SCL 用にそれぞれアナログピン A4 および A5 にも接続されていますので、これらのピンを使用することもできます。UART Grove コネクタは、デジタルピン 0 および 1 にそれぞれ RX および TX として接続されています。

- **<font face="" size="5" font color="00b0f0">❹</font> ICSP:**
これは ATmega328P 用の ICSP 接続で、Arduino Uno、Due、Mega、Leonardo 互換ハードウェア（例: シールド）で使用される標準的な ICSP/SPI 位置に配置されています。このポートの SPI ピン（MISO、SCK、MOSI）は、Arduino Uno と同様にデジタルピン 12、13、11 にも接続されています。

- **<font face="" size="5" font color="00b0f0">❺</font> USB 2 Uart:**
USB-2-Uart のピンアウトです。これらのパッドは、オンボードの ATmega328 をリセットモードにすることで、他の UART デバイスとやり取りするために使用できます。これにより、Seeeduino V4.2 を USB2UART ユーティリティボードとして使用できます。

- **<font face="" size="5" font color="00b0f0">❻</font> システム電源スイッチ:**
スライドスイッチは、ボードのロジックレベルと動作電圧を 5V または 3.3V に切り替えるために使用されます。

- **<font face="" size="5" font color="00b0f0">❼</font> リセット:**
このボタンは側面に便利に配置されており、シールドが上に配置されている場合でも Seeeduino ボードをリセットできます。他の Arduino ボードでは、ボタンが上部に配置されているためアクセスが難しい場合があります。

- **<font face="" size="5" font color="00b0f0">❽</font> LED-D13:**
LED はボードの D13 ピンに接続されています。これは、プログラム/スケッチ用のオンボード LED インジケーターとして使用できます。

- **<font face="" size="5" font color="00b0f0">❾</font> RX/TX インジケーター:**
TX および RX LED インジケーターは、USB-to-UART チップの TX および RX に接続されています。これらは自動的に動作し、それぞれボードがデータを送信または受信していることを知らせます。

## はじめに

### ハードウェア

- ステップ 1. Seeeduino V4.2 と Micro-USB ケーブルを準備します。
- ステップ 2. Seeeduino V4.2 を Micro-USB ケーブルでコンピュータに接続します。
すると、緑色の電源 LED（PWR とラベル付けされたもの）が点灯するはずです。

![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/connect.jpg)

:::caution

USB ケーブルを優しく差し込んでください。そうしないとインターフェースを損傷する可能性があります。また、内部に 4 本のワイヤーがある USB ケーブルを使用してください。2 本のワイヤーしかないケーブルではデータを転送できません。お持ちのケーブルが適切かどうかわからない場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。
:::

### ソフトウェア

:::note
Arduino を初めて使用する場合は、[Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino)を参照することを強くお勧めします。
:::

**ステップ 1. ドライバをインストールする**

- **Seeeduino V4.2 の場合**

Windows 用

このドライバは Windows XP、Windows Vista、Windows 7、Windows 8/8.1 に対応しています。

:::note
Windows 10 では、Arduino IDE をインストールするとドライバが自動的にインストールされます。
:::

[![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

- ボードを接続し、Windows がドライバのインストールプロセスを開始するのを待ちます。数分後、プロセスは失敗します。
- スタートメニューをクリックし、コントロールパネルを開きます。
- コントロールパネル内で「システムとセキュリティ」に移動し、「システム」をクリックします。「システム」ウィンドウが表示されたら、「デバイスマネージャー」を開きます。
- 「ポート (COM & LPT)」の下を確認します。「Seeeduino v4.2」という名前のオープンポートが見つかるはずです。「COM & LPT」セクションがない場合は、「その他のデバイス」の下に「不明なデバイス」があるか確認してください。
- 「Seeeduino v4.2」ポートを右クリックし、「ドライバーソフトウェアの更新」を選択します。
- 次に、「コンピューターを参照してドライバーソフトウェアを検索」を選択します。
- 最後に、「seeed_usb_serial.inf」という名前のドライバファイルを選択します。
- これで Windows がドライバのインストールを完了します。

Mac OSX および Linux の場合、ドライバをインストールする必要はありません。

- **Seeeduino V4.3 の場合**

Seeeduino V4.3 のシリアルポートを使用するには、cp2102 ドライバをインストールする必要があります。

Windows 用の cp2102 ドライバをダウンロードして解凍するには、[こちら](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/CP210x_Universal_Windows_Driver.zip)をクリックしてください。

他のオペレーティングシステムを使用している場合は、[公式ウェブサイト](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)からドライバを入手できます。

**ステップ 2. Arduino アプリケーションを起動する**

以前にインストールした Arduino アプリケーション（arduino.exe）をダブルクリックします。

:::note
Arduino ソフトウェアが別の言語で読み込まれる場合は、設定ダイアログで変更できます。詳細は [Arduino ソフトウェア (IDE) ページ](https://www.arduino.cc/en/Guide/Environment#languages)を参照してください。
:::

**ステップ 3. Blink サンプルを開く**

LED ブリンクのサンプルスケッチを見つけます：**ファイル > サンプル > 01.Basics > Blink**。

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/blink.png)

**ステップ 4. ボードを選択する**

**ツール > ボード** メニューで、使用している Arduino に対応するエントリを選択します。**Seeeduino v4.2** を選択してください。

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_board.png)

Seeeduino v4.2 が見つからない場合は、[Seeed ボードを Arduino IDE に追加する方法](https://wiki.seeedstudio.com/ja/Seeed_Arduino_Boards/)を確認してください。

**ステップ 5. シリアルポートを選択する**

ツール | シリアルポート メニューから Arduino ボードのシリアルデバイスを選択します。通常、COM3 以上になります（**COM1** および **COM2** は通常ハードウェアシリアルポート用に予約されています）。確認するには、Arduino ボードを切断してメニューを再度開きます。消えたエントリが Arduino ボードです。ボードを再接続してそのシリアルポートを選択します。

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_port.png)

:::note
Mac または Linux では、**/dev/tty.USBmodem** のような名前になります。
:::

**ステップ 6. プログラムをアップロードする**

環境内で「アップロード」ボタンをクリックするだけです。数秒待つと、ボード上の RX および TX LED インジケータが点滅するはずです。アップロードが成功すると、「アップロード完了」というメッセージが表示されます。

アップロードが完了して数秒後、ボード上のピン 13 (L) LED が点滅（オレンジ色）し始めるはずです。これが確認できたら、おめでとうございます！Arduino のセットアップが完了しました。問題がある場合は、トラブルシューティングの提案を参照してください。

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_v4_2_L.jpg)

## アプリケーションアイデア

- DIY
- IoTとスマートホーム
- ロボット
- 学習

以下は参考になる面白いプロジェクトです。

|ペーパーマン|指紋ロック|モニタースタンド|
|-------|-------|-------|
|![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project2.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project3.jpg)|
| [今すぐ作る](https://www.instructables.com/id/Paper-Man-a-machine-created-by-Arduino-and-NFC/) | [今すぐ作る](https://www.instructables.com/id/Door-to-Open-Source-Hardware-A-fingerprint-lock-so/) | [今すぐ作る](https://www.instructables.com/id/DIY-a-Programmable-Acrylic-Monitor-Stand/)|

|デスクプロモ|タイガーマシン|カラフルピラミッド|
|-------|-------|-------|
|![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project4.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project5.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project6.jpg)|
| [今すぐ作る](https://www.instructables.com/id/Desk-promo/) | [今すぐ作る](https://www.instructables.com/id/How-to-Make-Your-Tiny-Tiger-Machine/) | [今すぐ作る](https://www.instructables.com/id/DIY-a-colorful-pyramid/)|

## よくある質問（FAQs）

**Q1：Ubuntuで「avrdue: ser_open(): can't open device "dev/tty/ACM0": Permission denied」というエラーが発生します。Seeeduino V4をLinux PCに接続するにはどうすればよいですか？**

A1：Ubuntuでroot権限なしでArduino IDEを動作させる方法については、[こちら](http://playground.arduino.cc/Linux/Debian)の説明をお読みください。以下に関連部分を記載します。

**Q2: Arduino UNOとSeeeduino v4.2の違いは何ですか？**

A2: Seeeduino v4.2はArduino UNOと完全互換性があります。主な違いは以下の通りです：

- マイクロUSBを使用してボードに電源を供給し、プログラムを行う
- 3つのオンボードGroveコネクタ
- 3.3V/5Vシステム電源スイッチ
- LDOの代わりにDCDC回路を使用し、効率が向上
- その他の回路改善

**Q3: http://downloads.arduino.cc/packages/package_index.json のダウンロードエラーが発生します**

A3: 以下の手順で問題を解決してください。

- 「ファイル」->「環境設定」をクリック
- 環境設定ウィンドウの下部にあるURL（例：C:\Users...\AppData\Local\Arduino15\preferences.txt）をクリック
- preferences.txt、staging、packages以外のすべてのファイルを削除
- IDEウィンドウを閉じて再度開くと動作するはずです。

## Seeeduino V4.2 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Wiki PDFをダウンロード](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2.pdf)
- **[Eagle]** [Seeeduino V4.2のEAGLEファイル](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip)
- **[PDF]** [Seeeduino V4.2のPDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2_sch.pdf)
- **[Eagle]** [Seeeduino V4.0のEAGLEファイル](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf)
- **[PDF]** [Seeeduino V4.0のPDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf)
- **[データシート]** [ATmega328P](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega328.pdf)
- **[データシート]** [ATmega16U2](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega16u2.pdf)
- **[追加資料]** [Arduinoの始め方](https://www.arduino.cc/en/Guide/HomePage)
- **[追加資料]** [Arduino言語リファレンス](https://www.arduino.cc/en/Reference/HomePage)
- **[追加資料]** [Arduinoソフトウェア(IDE)のダウンロード](https://www.arduino.cc/en/Main/Software)
- **[追加資料]** [Arduino FAQ](https://www.arduino.cc/en/Main/FAQ)
- **[追加資料]** [Arduinoの紹介](https://www.arduino.cc/en/guide/introduction)
- **[追加資料]** [ArduinoのWikipediaページ](https://en.wikipedia.org/wiki/Arduino)
- **[追加資料]** [SeeeduinoでRF Explorer 3G+ IoTモジュールを使用する方法](http://j3.rf-explorer.com/60-rfe/specifications/184-rf-explorer-3g-iot-for-seeeduino)
- **[ファームウェア]** [ブートローダーの書き込み方法](https://files.seeedstudio.com/wiki/forum_doc/reg/seeeduino_boot.zip)

## プロジェクト

**Seeedの新オフィスで階段をハッキング**: オフィスの階段をインタラクティブなインスタレーションに変え、訪問者に「STAFF ONLY」というメッセージを伝えるクールな方法を実現します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

**Seeeduino/Arduinoでインタラクティブなカラーマトリックスを作成**: Seeeduino 4.2ボードを使用して作られたインタラクティブなアートプロジェクトです。見た目も良く、簡単に作成できます！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/78141/make-an-interactive-color-matrix-with-seeeduino-arduino-f9f3c0/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>