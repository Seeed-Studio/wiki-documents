---
description: UartSBee V4
title: UartSBee V4
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/UartSBee_V4
last_update:
  date: 05/15/2025
  author: shuxu hu
---


 ![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Xbs4.jpg)

**UartSBee v4.0**は、BEEソケット（20ピン 2.0mm）を備えたFTDIケーブル互換の**USBからシリアル**アダプタです。統合された**FT232RL**は、MCUのプログラミングや通信に使用できます。一方で、PCを**Bee**互換モジュールを介してさまざまなワイヤレスアプリケーションに接続することも可能です。UartSBeeは、**FT232RL**のビットバングモードピンのブレークアウトも提供します。このビットバングモードピン（8つのI/Oピン）は、現在では希少なPCパラレルポートを使用するアプリケーションの代替として使用できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/UartSBee-V4-p-688.html)

## ハードウェアバージョントラッカー

<table >
<tr>
<th>リビジョン</th>
<th>説明</th>
<th>リリース日</th>
</tr>
<tr>
<td>UartSBee V3.1</td>
<td>底面のBluetoothブレークアウトを削除、フォームファクタを縮小</td>
<td>2010年9月2日</td>
</tr>
<tr>
<td>UartSBee V2.3</td>
<td>3.3VピンのDC電流を強化、XBee Proをより良くサポートするために最大500mAを提供</td>
<td>2009年7月21日</td>
</tr>
<tr>
<td>UartSBee V2.1</td>
<td>初の公開リリース</td>
<td>2009年2月1日</td>
</tr></table>

## 特徴
---
*   FTDIケーブル互換。
*   USB 2.0互換シリアルインターフェース。
*   3.3Vおよび5V互換I/O。
*   3.3Vおよび5Vのデュアル電源出力。
*   BEEモジュール用のリセットボタン。
*   ビットバングモード対応（8つのシリアルI/OまたはSPIとして）。
*   UARTおよびBEE操作用のLED。

## アプリケーションアイデア
---
*   TTL/CMOSレベルのシリアルデバイスと通信するためのUSBからシリアルアダプタ。
*   Arduino / Seeeduinoおよび互換ボード用のプログラマ。
*   ISP（回路内シリアルプログラミング）を使用したマイクロコントローラ/CPLD用のプログラマ。
*   ブレッドボードMCUアプリケーション用の3.3V / 5V電源。
*   BEEモジュール用のUSBアダプタ（PCのワイヤレス機能用）。
*   FT232RLビットバングモードを使用したUSBベースの並列デバイスとしての無限の可能性 - **AVR-ISP**、低速**JTAG**（OpenOCD使用）、**I2C**として動作することが確認されています。

## 注意事項
---

*   **UartSBee v3.1**は、**電源選択**（3.3Vまたは5V）の**トグルスイッチ**を提供します。<u>他のデバイスに接続する前に</u>、電源選択スイッチを3.3Vまたは5Vのいずれかに設定してください。

## 回路図
---
![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_V4.0_Sch.png)

## 仕様
---
### 主な仕様

<table cellpadding="1" cellspacing="1">
<tr>
<th scope="row">マイクロプロセッサ</th>
<td>FT232RL</td>
</tr>
<tr>
<th scope="row">PCBサイズ</th>
<td>3.1cm x 4.1cm</td>
</tr>
<tr>
<th scope="row">インジケータ</th>
<td>POWER、緑色LED。TxdおよびRxd用のLED</td>
</tr>
<tr>
<th scope="row">電源供給</th>
<td>3.3Vおよび5V DC</td>
</tr>
<tr>
<th scope="row">インターフェース</th>
<td>Mini-B USB、2.54mmピッチピンヘッダ</td>
</tr>
<tr>
<th scope="row">アダプタソケット</th>
<td>XBee互換2.0mmピッチメスピンヘッダ</td>
</tr>
<tr>
<th scope="row">接続性</th>
<td>USB</td>
</tr>
<tr>
<th scope="row">通信プロトコル</th>
<td>UART、ビットバングI/O、SPI</td>
</tr>
<tr>
<th scope="row">ROHS</th>
<td>YES</td>
</tr></table>

### 電気的特性

<table >
<tr>
<th>仕様</th>
<th>最小</th>
<th>標準</th>
<th>最大</th>
<th>単位</th>
</tr>
<tr>
<td>入力電圧</td>
<td>-</td>
<td>5</td>
<td>5</td>
<td>Vdc</td>
</tr>
<tr>
<td>消費電流</td>
<td>-</td>
<td>-</td>
<td>500</td>
<td>mA</td>
</tr>
<tr>
<td>出力電圧</td>
<td>3.3</td>
<td>-</td>
<td>5</td>
<td>Vdc</td>
</tr></table>

## システムブロック図
---
![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Uartsbee-block-diagram.jpg)

* 小型の**リセットスイッチ**が提供されており、**Bee**互換デバイスをリセットすることができます。
* **2 x 10**のBee互換モジュール用ブレークアウトに加えて、**2 x 10ピンヘッダー**、**2 x 3 ISPヘッダー**用の追加パッドが提供されています。ユーザーは適切にピンヘッダーをはんだ付けすることができます。

## アプリケーション
---
### USB – シリアルポート

**UartSBee**は、一般的にUSBからシリアルポート（COMポート）へのインターフェースとして使用されます。この構成は、MCUのシリアルポートと通信したり、UARTベースのISPをサポートするMCUをプログラムするために使用できます。

**Windows**

* Windows OSでは、デバイスを初めて接続すると、ドライバーのインストールを求められる場合があります。

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Detected_Windows.JPG)

**Virtual COM port**ドライバーをFTDIのウェブサイトからダウンロードしてインストールしてください：

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

* ドライバーをインストールするためのウィザードが開きます。「リストまたは特定の場所からインストール」を選択してください。

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_1.JPG)

* ダウンロードしたドライバーパスを選択してください。

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_2.JPG)

* 署名されていないドライバーをダウンロードした場合、以下のウィンドウが表示されます。「続行」をクリックしてください。

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_2.1.JPG)

* **UartSBee**ドライバーが正常にインストールされます。Windowsは**FT232RL**に**COM**ポート名（例：**COM10**、**COM11**など）を割り当てます。デバイスマネージャーで正確な名前を確認してください。この場合、**COM16**がUartSBeeに割り当てられています。

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_Driver_install_3.JPG)

**GNU/Linux**

すべての最新の**GNU/Linux OS**にはFT232RLドライバーが付属しています。UartSBeeが検出されているか確認するには、**lsusb**コマンドを実行してください。以下のような出力が表示されるはずです。

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Lsub.png)

**GNU/Linux**はデバイス名として**/dev/ttyUSB0**、**/dev/ttyUSB1**などを割り当てます。

シリアルポートの動作を確認するには、UartSBeeの**TxD**と**RxD**ピンを接続し、**cutecom**のようなターミナルアプリケーションを使用して以下のようにデバイスパラメータを設定してください。

**ボーレート**: 9600、**データビット**: 8、**ストップビット**: None、ハンドシェイクなし

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/Uartsbee-txd-rxd-connected.JPG)

ターミナルで入力した文字がエコーバックされることを確認できます。

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartsBee-CuteCom.png)

同じ機能は**Windows**の**Hyperterminal**でも確認できます。

### 3.3V / 5V電源供給およびMCUブレッドボード用プログラマー

UartSBeeは3.3Vおよび5Vの電源出力を提供するだけでなく、I/Oピンのロジックレベルを**5.0V TTL**または**3.3V CMOS**操作に選択できます。以下の例では、ブレッドボード上のマイクロコントローラーアプリケーションが示されています。LPC1343 ARM Cortex-M3 MCUがUartSBeeに接続されています。このデバイスは3.3Vデバイスであるため、電源切替スイッチを3.3Vに設定します。LPC1343はUARTを介してプログラム可能です。このアプリケーションは、UARTベースのフラッシングまたはSPIベースのフラッシング（FT232R BitBangモードが必要）をサポートする任意のMCU / CPLDに拡張できます。

**ブレッドボードプロトタイピング**: **UartSBee v3.1**が3.3V電源供給およびLPC1343用の3.3V UARTフラッシュプログラミングポートとして機能しています。

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_as_uCPowerSupplyAndProgPort_BreadBoard.JPG)

**スイッチ**: 3.3V I/O選択済み
![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UarSBee-Switch_3.3V_selected.jpg)

### Beeモジュールを使用したPCワイヤレスアプリケーション

**PCワイヤレスアドオン**

UartSBeeのBee互換インターフェースを使用して、**XBee**、**Bluetooth Bee**、**RF Bee**、**Wifi Bee**、**GPS Bee**などのBeeモジュールをPC USBに接続できます。これにより、BeeベースのPCワイヤレスアプリケーションが容易になります。これらのBeeモジュールのほとんどはUARTインターフェースをサポートしているため、PCプログラミングも簡単です。

**MCUワイヤレスアドオン**

この構成は、マイクロコントローラー（Seeeduinoなど）のUARTとインターフェースするためにも使用できます。

Beeモジュールの詳細については、対応するドキュメントを参照してください。

**XBee**が**UartSBee**に接続された状態  
**BluetoothBee**が**UartSBee**に接続された状態

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee-hardware.jpg) ![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/BluetoothBee_with_UartSBee.JPG)

### BitBangモード

他のFT232RLベースのUSB-シリアルデバイスと比較して、**UartSBee v3.1**の優れた特徴は、すべてのBit-Bang I/Oがヘッダーピンに引き出されていることです。

Bit-Bangモードは、FT232RLの特別な機能で、8つのI/Oライン（**D0 - D7**）を汎用の双方向I/Oラインとして使用できます。FT232RLは以下の3つのBit-Bangモードをサポートしています。

* **非同期Bit-Bangモード**

デバイスに書き込まれたデータは、設定された出力ピンにクロックされます。データ転送速度はボーレートジェネレーターに基づいて設定されます。このモードでは、8つのI/Oラインのいずれも入力または出力として設定できます。

* **同期Bit-Bangモード**

このモードでは、データが同期的に送信されます。出力バイトがデバイスに送信される前に入力が読み取られます。そのため、入力を読み取るには書き込み操作を実行する必要があります。

* **CBUS Bit-Bangモード**

このモードはFT232RL EEPROMの再プログラミングを必要とする特別なモードです。このモードでは**C0 - C3**信号を使用します。

**FT232RL**の**Bit-Bangモード**は、アプリケーションノートで詳しく説明されています[[1]](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**表: Bit-Bang I/Oマッピング**

<table >
<tr>
<th>UartSBee信号</th>
<th>BitBang I/O信号</th>
</tr>
<tr>
<td>TxD</td>
<td>D0</td>
</tr>
<tr>
<td>RxD</td>
<td>D1</td>
</tr>
<tr>
<td>RTS</td>
<td>D2</td>
</tr>
<tr>
<td>CTS</td>
<td>D3</td>
</tr>
<tr>
<td>DTR</td>
<td>D4</td>
</tr>
<tr>
<td>DSR</td>
<td>D5</td>
</tr>
<tr>
<td>DCD</td>
<td>D6</td>
</tr>
<tr>
<td>RI</td>
<td>D7</td>
</tr></table>

**BitBangモードの操作:**

以下のブレッドボード配置では、DTR (D4) ピンがLEDに接続されているシンプルな非同期Bit-Bangモードの操作が示されています。LEDの点滅速度はPC側のアプリケーションプログラムによって制御されます。

 **LED点滅回路                                                             UartSBee V3.1のBitBang I/O - 底面**

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_bit-bang-DTR.jpg)   ![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSBee_Bottom_Bit_Bang.png)

Bit-Bangモードには、[D2XX](https://www.ftdichip.com/Drivers/D2XX.htm)と呼ばれる特別なFTDIダイレクトドライバが必要です。このドライバをインストールするには、FT232RLチップの仮想COMポートドライバを削除する必要があります。GNU/Linuxでは、このドライバはカーネルモードで動作します。D2XXの代替として、[libFTDI](http://www.intra2net.com/en/developer/libftdi/)というオープンソースの無料ドライバが利用可能です。このドライバはWindows、GNU/Linux、Mac OSで動作します。GNU/Linuxではユーザーモードで動作するため、既存のFT232RLドライバを削除する必要はありません。

**libFTDI**

[http://www.intra2net.com/en/developer/libftdi/](http://www.intra2net.com/en/developer/libftdi/)

**libUSB**  
libFTDIはlibusbを必要とします。以下からダウンロードできます。

[http://www.libusb.org/](http://www.libusb.org/)

以下のサンプルコードは、libFTDIのサンプルファイルと同様の方法でコンパイルできます。簡単な方法として、以下のコード内容を既存のサンプル`.c`ファイルの1つにコピーし、以下のコマンドでドライバ全体をビルドします。

```
./configure

make
```

 **コード例**
```
/*
Blinky.C : UartSBee v3.1 (FT232RL) Bit-Bangモード - Blinky.

回路:
DTRをLEDのアノードに接続し、抵抗の一端をGNDに、もう一端をLEDのカソードに接続します。
*/

#ifdef __WIN32__
#define sleep(x) Sleep(x)
#endif

// I/Oピン用の8ビットピンマスク
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

    /* 1. ftdiデバイスコンテキストを初期化 */
    ftdi_init(&ftdic);

    /* 2. VID/PIDペアに基づいてデバイスを開く */
    if(ftdi_usb_open(&ftdic, 0x0403, 0x6001) < 0)
    {
        printf("UartSBee v3.1を開けません");
        return 1;
    }

    /* 3. DTRライン用にBit-Bangモードを有効化 */
    ftdi_set_bitmode(&ftdic, DTR, BITMODE_BITBANG);

    /* 4. LEDを1秒ごとに点滅 */
    while(1) {
        ouputState ^= DTR;
        ftdi_write_data(&ftdic, &ouputState, 1);
        sleep(1);
    }
}
```

FT232RLのBit-Bangモードは、AVR ISP、JTAG、SPI、I2Cポートを構築するために使用できます。詳細は外部リンクを参照してください。

**AVR-ISP接続のアイデア**

![](https://files.seeedstudio.com/wiki/UartSBee_V4/img/UartSbee_ISP_Connection_BitBang.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/UartSBee_V4/res/UartSBee_v4.0_Source_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

[回路図および基板ファイル](https://files.seeedstudio.com/wiki/UartSBee_V4/res/UartSBee_v4.0_Source_file.zip);

## 外部リンク

*   [FTDI FT232RL 製品ページ](https://www.ftdichip.com/Products/ICs/FT232R.htm)

*   [FTDI 仮想COMポート (VCP) ドライバー](https://www.ftdichip.com/Drivers/VCP.htm)
*   [FTDI D2XX ドライバー](https://www.ftdichip.com/Drivers/D2XX.htm)

*   [FTDI ビットバングモード アプリケーションノート](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**オープンソースドライバー**

*   [libFTDI](http://www.intra2net.com/en/developer/libftdi/)

*   [libUSB](http://www.libusb.org/)

**FT232RL アプリケーション情報のその他のソース**

*   [Hackaday - ビットバングモードの紹介](http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/)

*   [FT232R JTAG 実装（OpenOCDを使用）](http://vak.ru/doku.php/proj/bitbang/bitbang-jtag)

*   [FT232R SPI ビットバングモードの例](http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/)

*   [FT232R ビットバングモードでArduinoをフラッシュ](http://www.geocities.co.jp/arduino_diecimila/bootloader/index_en.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>