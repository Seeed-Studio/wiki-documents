---
description: UartSBee V3.1
title: UartSBee V3.1
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/UartSBee_V3.1
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Uartsb31.jpg)

UartSBee v3.1は、BEEソケット（20ピン2.0mm）を備えたフル装備のUSBからシリアルアダプタです。統合されたFT232RLは、MCUのプログラミングや通信に使用できます。一方で、PCをBEE互換モジュールを介してさまざまなワイヤレスアプリケーションに接続することも可能です。UartSBeeは、FT232RLのビットバングモードピンのブレークアウトも提供します。このビットバングモードピン（8つのI/Oピン）は、現在では希少なPCパラレルポートを使用するアプリケーションの代替として使用できます。

モデル：[INT110B2P](https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html?cPath=104_109)

## 特徴 ##

- USB 2.0互換のシリアルインターフェース。

- 3.3Vおよび5V互換のI/O。

- 3.3Vおよび5Vのデュアル電源出力。

- BEEモジュール用のリセットボタン。

- ビットバングモード対応（8つのシリアルI/OまたはSPIとして）。

- UARTおよびBEE操作用のLED。

## アプリケーションアイデア ##

- TTL/CMOSレベルのシリアルデバイスと通信するためのUSBからシリアルアダプタ。

- Arduino / Seeeduinoおよび互換ボードのプログラマ。

- ISP（回路内シリアルプログラミング）を使用したマイクロコントローラ/CPLDのプログラマ。

- ブレッドボードMCUアプリケーション用の3.3V / 5V電源。

- BEEモジュール用のUSBアダプタ（PCのワイヤレス機能用）。

- FT232RLビットバングモードを使用したUSBベースの並列デバイスとしての無限の可能性 - **AVR-ISP**、低速**JTAG**（OpenOCD使用）、**I2C**として動作することが知られています。

## 注意事項 ##

- **UartSBee v3.1**は、**電源選択**（3.3Vまたは5V）の**トグルスイッチ**を提供します。ボードを他のデバイスに接続する前に、電源選択スイッチを3.3Vまたは5Vのいずれかに設定してください。

## 回路図 ##

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Schematic.png)

## 仕様 ##

### 主な仕様 ###

| マイクロプロセッサ | FT232RL |
|---|---|
| PCBサイズ | 3.1cm x 4.1cm |
| インジケータ | POWER、緑色LED。TxdおよびRxd用のLED |
| 電源供給 | 3.3Vおよび5V DC |
| インターフェース | Mini-B USB、2.54mmピッチピンヘッダ |
| アダプタソケット | XBee互換2.0mmピッチメスピンヘッダ |
| 接続性 | USB |
| 通信プロトコル | UART、ビットバングI/O、SPI |
| ROHS | YES |

### 電気的特性 ###

| 仕様 | 最小 | 標準 | 最大 | 単位 |
|---|---|---|---|---|
| 入力電圧 | - | 5 | 5 | Vdc |
| 消費電流 | - | - | 500 | mA |
| 出力電圧 | 3.3 | - | 5 | Vdc |

## システムブロック図 ##

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Uartsbee-block-diagram.jpg)

- Bee互換デバイスをリセットするための小型リセットスイッチが提供されています。

- 2 x 10のBee互換モジュール用ブレークアウトに加えて、2 x 10ピンヘッダ、2 x 3 ISPヘッダ用の追加パッドが提供されています。ユーザーは適切にピンヘッダをはんだ付けできます。

## アプリケーション ##

### USB – シリアルポート ###

**UartSBee**は、USBからシリアルポート（COMポート）インターフェースとして一般的に使用されます。この構成は、MCUシリアルポートとの通信や、UARTベースのISPをサポートするMCUのプログラミングに使用できます。

#### Windows ####

- Windows OSでは、デバイスを初めて接続すると、ドライバを求められる場合があります。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Detected_Windows.JPG)

FTDIのウェブサイトから**仮想COMポート**ドライバをダウンロードしてインストールしてください：

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

- ドライバをインストールするためのウィザードが開きます。「リストまたは特定の場所からインストール」を選択してください。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_1.JPG)

- ダウンロードしたドライバのパスを選択してください。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_2.JPG)

- 未署名のドライバをダウンロードした場合、以下のウィンドウが表示されます。「続行」をクリックしてください。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_2.1.JPG)

- **UartSBeeドライバ**が正常にインストールされました。WindowsはFT232RLにCOMポート名（例：COM10、COM11など）を割り当てます。デバイスマネージャで正確な名前を確認してください。この場合、「COM16」がUartSBeeに割り当てられています。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_Driver_install_3.JPG)

#### GNU/Linux ####

すべての最新の**GNU/Linux OS**にはFT232RLドライバが含まれています。UartSBeeが検出されているか確認するには、`lsusb`コマンドを実行してください。以下のような出力が表示されるはずです。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Lsub.png)

**GNU/Linux**では、**/dev/ttyUSB0**、**/dev/ttyUSB1**などのデバイス名が割り当てられます。

シリアルポートの動作を確認するには、UartSBeeの**TxD**および**RxD**ピンを接続し、cutecomのようなターミナルアプリケーションを使用して以下のようにデバイスパラメータを設定してください。

**ボーレート**：9600、**データビット**：8、**ストップビット**：なし、ハンドシェイクなし

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/Uartsbee-txd-rxd-connected.JPG)

ターミナルで入力した文字がエコーバックされることが確認できます。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartsBee-CuteCom.png)

同じ機能はWindowsのハイパーターミナルでも確認できます。

### 3.3V / 5V電源供給およびMCUブレッドボード用プログラマ ###

UartSBeeが提供する3.3Vおよび5Vの電源出力に加えて、I/Oピンのロジックレベルを**5.0V TTL**または**3.3V CMOS**操作用に選択できます。以下の例では、ブレッドボード上のマイクロコントローラアプリケーションが示されています。LPC1343 ARM Cortex-M3 MCUがUartSBeeに接続されています。このデバイスは3.3Vデバイスであるため、電源トグルスイッチは3.3Vに設定されています。LPC1343はUARTを介してプログラム可能です。このアプリケーションは、UARTベースのフラッシングやSPIベースのフラッシング（FT232Rビットバングモードが必要）をサポートする任意のMCU/CPLDに拡張できます。

**ブレッドボードプロトタイピング：UartSBee v3.1**が3.3V電源供給およびLPC1343の3.3V UARTフラッシュプログラミングポートとして機能しています。

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee_as_uCPowerSupplyAndProgPort_BreadBoard.JPG)
スイッチ：3.3V I/O選択済み

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UarSBee-Switch_3.3V_selected.jpg)

###   PC ワイヤレスアプリケーションのための Bee モジュールインターフェース   ###

#### PC ワイヤレスアドオン

UartSBee の Bee 互換インターフェースを使用すると、**XBee、Bluetooth Bee、RF Bee、Wifi Bee、GPS Bee** などの Bee モジュールを PC の USB に接続できます。これにより、Bee ベースの PC ワイヤレスアプリケーションが容易になります。これらの Bee モジュールのほとんどが UART インターフェースをサポートしているため、PC プログラミングも簡単です。

#### MCU ワイヤレスアドオン

この構成は、マイクロコントローラー（Seeeduino）の UART とインターフェースするためにも使用できます。

詳細については、Bee モジュールのドキュメントを参照してください。

- XBee を UartSBee に接続
- BluetoothBee を UartSBee に接続

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee-hardware.jpg)
![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/BluetoothBee_with_UartSBee.JPG)

###   BitBang モード   ###

UartSBee v3.1 の特長の一つは、他の FT232RL ベースの USB-シリアルデバイスと比較して、すべての Bit-Bang I/O がヘッダーピンに引き出されている点です。

Bit-Bang モードは FT232RL の特別な機能で、8 つの I/O ライン（**D0 - D7**）を汎用の双方向 I/O ラインとして使用できます。FT232RL は以下の 3 種類の Bit-Bang モードをサポートしています。

- **非同期 Bit-Bang モード**

デバイスに書き込まれたデータは、設定された出力ピンにクロックされます。データ転送速度はボーレートジェネレーターに基づいて設定されます。このモードでは、8 つの I/O ラインのいずれも入力または出力として設定できます。

- **同期 Bit-Bang モード**

このモードではデータが同期的に送信されます。出力バイトがデバイスに送信される前に入力が読み取られます。そのため、入力を読み取るには書き込み操作を実行する必要があります。

- **CBUS Bit-Bang モード**

このモードは FT232RL EEPROM の再プログラミングを必要とする特別なモードです。このモードでは C0 - C3 信号を使用します。

**FT232RL** の **Bit-Bang モード** は、アプリケーションノートに詳しく記載されています[[1]](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**表: Bit-Bang I/O マッピング**

 |UartSBee 信号| BitBang I/O 信号|
 |---|---|
 |TxD|D0|
 |RxD|D1|
| RTS| D2|
| CTS| D3|
| DTR| D4|
| DSR| D5|
|DCD|D6|
 |RI| D7|

**BitBang モードの操作:**

以下のブレッドボード構成では、非同期 Bit-Bang モードの簡単な操作例を示しています。この例では、DTR (D4) ピンが LED に接続されています。LED の点滅速度は PC 側のアプリケーションプログラムによって制御されます。

**LED 点滅回路**  
                                                         **UartSBee V3.1 の BitBang I/O - 底面**

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee_bit-bang-DTR.jpg) ![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSBee_Bottom_Bit_Bang.png)

Bit-Bang モードを使用するには、特別な FTDI 直接ドライバーである [D2XX](https://www.ftdichip.com/Drivers/D2XX.htm) が必要です。このドライバーをインストールする前に、FT232RL チップの仮想 COM ポートドライバーを削除する必要があります。GNU/Linux では、このドライバーはカーネルモードで動作します。D2XX の代替として、フリーでオープンソースのドライバー [libFTDI](http://www.intra2net.com/en/developer/libftdi/) を使用することもできます。このドライバーは Windows、GNU/Linux、Mac OS で動作します。GNU/Linux ではユーザーモードで動作するため、既存の FT232RL ドライバーを削除する必要はありません。

libFTDI

[http://www.intra2net.com/en/developer/libftdi/](http://www.intra2net.com/en/developer/libftdi/)

libUSB libFTDI は libusb を必要とし、以下からダウンロードできます。

[http://www.libusb.org/](http://www.libusb.org/)

以下のサンプルコードは、libFTDI のサンプルファイルと同様の方法でコンパイルできます。簡単な方法として、以下のコードを既存のサンプル .c ファイルの一つにコピーし、ドライバー全体をビルドすることが挙げられます。

./configure

make

**コード例**

```
/*
Blinky.C: UartSBee v3.1 (FT232RL) Bit-Bang モード - 点滅.

回路:
DTR を LED のアノードに接続し、抵抗の一端を GND に、もう一端を LED のカソードに接続します。
*/

#ifdef __WIN32__
#define sleep(x) Sleep(x)
#endif

// I/O ピン用の 8 ビットピンマスク
#define TXD 0x01  
#define RXD 0x02  
#define RTS 0x04  
#define CTS 0x08  
#define DTR 0x10
#define DSR 0x20
#define DCD 0x40
#define RI  0x80

#include <stdio.h>
#include <ftdi.h>    

int main()
{
    unsigned char ouputState = 0;
    struct ftdi_context ftdic;

    /* 1. ftdi デバイスコンテキストを初期化 */
    ftdi_init(&ftdic);  

    /* 2. VID/PID ペアに基づいてデバイスを開く */

    if(ftdi_usb_open(&ftdic, 0x0403, 0x6001) < 0)
    {
        printf("UartSBee v3.1 を開けません");
        return 1;
    }

    /* 3. DTR ライン用に Bit-Bang モードを有効化 */
    ftdi_set_bitmode(&ftdic, DTR, BITMODE_BITBANG);

    /* 4. LED を 1 秒ごとに点滅 */
    while(1) {
        ouputState ^= DTR;
        ftdi_write_data(&ftdic, &ouputState, 1);
        sleep(1);
    }
}
```

FT232RL の Bit-Bang モードは、AVR ISP、JTAG、SPI、I2C ポートを構築するために使用できます。外部リンクを参照してください。

AVR-ISP 接続のアイデア

![](https://files.seeedstudio.com/wiki/UartSBee_V3.1/img/UartSbee_ISP_Connection_BitBang.jpg)

## サポート ##

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum)または**ウィッシュ**で議論することができます。

## ライセンス ##

このドキュメントは[Creative Commons Attribution-Noncommercial-Share Alike License 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)の下でライセンスされています。ソースコードおよびライブラリは**GPL**/**LGPL**の下でライセンスされており、詳細についてはソースコードファイルを参照してください。

## ドキュメントバージョントラッカー ##

| リビジョン | 説明 | 編集者 | リリース日 |
|---|---|---|---|
| V0.9d | 詳細なアプリケーションノート | Visweswara R | 2010年12月23日 |

## ハードウェアバージョントラッカー ##

| リビジョン | 説明 | リリース日 |
|---|---|---|
| UartSBee V3.1 | 底面のBluetoothブレイクアウトを削除、フォームファクターを縮小 | 2010年9月2日 |
| UartSBee V2.3 | 3.3VピンのDC電流を改善し、XBee Proをより良くサポート（最大500mA） | 2009年7月21日 |
| UartSBee V2.1 | 初回公開リリース | 2009年2月1日 |

## バグトラッカー ##

バグトラッカーは、使用中に見つけた可能性のあるバグを公開する場所です。意見を書き込んでください。あなたの回答は私たちの製品改善に役立ちます。

## 追加アイデア ##

追加アイデアは、この製品に関するプロジェクトアイデアや、見つけた他の用途を書き込む場所です。または、プロジェクトページに記載することもできます。

## 回路図オンラインビューア ##

<div className="altium-ecad-viewer" data-project-src="http://garden.seeedstudio.com/images/b/b4/Uartsbee31_Schematic_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

回路図および基板ファイル [[[2]](http://garden.seeedstudio.com/images/b/b4/Uartsbee31_Schematic_Board.zip)];

## 外部リンク ##

- [[3]](https://www.ftdichip.com/Products/ICs/FT232R.htm)[FTDI FT232RL 製品ページ](https://www.ftdichip.com/Products/ICs/FT232R.htm)
- [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm) FTDI 仮想COMポート（VCP）ドライバ
- [FTDI D2XX ドライバ](https://www.ftdichip.com/Drivers/D2XX.htm)
- [FTDI ビットバングモード アプリケーションノート](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**オープンソースドライバ**

- [libFTDI](http://www.intra2net.com/en/developer/libftdi/)
- [libUSB](http://www.libusb.org/)

**FT232RL アプリケーション情報の他のソース**

- [Hackaday - ビットバングモードの紹介](http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/)
- [FT232R JTAG 実装（OpenOCDを使用）](http://vak.ru/doku.php/proj/bitbang/bitbang-jtag)
- [FT232R SPI ビットバングモードの例](http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/)
- [FT232R ビットバングモードでArduinoをフラッシュ](http://www.geocities.co.jp/arduino_diecimila/bootloader/index_en.html)

## 購入方法 ##

UartSBee V3.1は以下で購入できます：[https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html?cPath=104_109](https://www.seeedstudio.com/depot/uartsbee-v31-p-688.html?cPath=104_109)

## ライセンス ##

このドキュメントは、Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) の下でライセンスされています。ソースコードおよびライブラリは [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) の下でライセンスされています。詳細については、ソースコードファイルをご確認ください。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>