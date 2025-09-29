---
description: UartSB フレーム
title: UartSB フレーム
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/UartSB_Frame
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Frame_UarSBs_Top.jpg)

**UartSB フレーム**は、FPCソケットを備えた**Seeeduino Film**用のUSBベースのプログラミングアダプタです。統合されたUSB UART IC **FT232RL**は、3.3Vロジックを持つMCUのプログラミングや通信に使用できます。また、"FT232RL" 低電圧（3.3V）ブレイクアウトボードとしても機能します。**UartSB フレーム**は、**FT232RL**のビットバングモードピンのブレイクアウトも提供します。このビットバングモードピン（8つのI/Oピン）は、現在では希少なPCパラレルポートを使用するアプリケーションの代替として使用できます。

**モデル：[PGM31058P](https://www.seeedstudio.com/depot/seeeduino-frame-uartsbs-p-778.html?cPath=132_135)**

## 特徴

* USB 2.0互換のシリアルインターフェース。
* **Seeeduino Film**を接続するための20ピンFPCコネクタ。
* 3.3V互換のI/O。
* 3.3Vおよび5Vのデュアル電源出力。
* ビットバングモード対応（8つのシリアルI/OまたはSPIとして）。
* TxD、RxD、電源用のLED。

## アプリケーションアイデア

* **Seeeduino Film**および3.3V互換ボード用のプログラマ。
* 3.3Vレベルのシリアルデバイスと通信するためのUSB-シリアルアダプタ。
* ISP（インサーキットシリアルプログラミング）を使用したマイクロコントローラ/CPLDのプログラマ。
* ブレッドボードMCUアプリケーション用の3.3V/5V電源。
* 5V電源はSeeeduino Filmバッテリーの充電に使用できます。（このアプリケーションではFPC接続を使用しないでください）
* FT232RLビットバングモードでUSBベースのパラレルデバイスとして無限の可能性 - **AVR-ISP**、低速**JTAG**（OpenOCD使用）、および**I2C**として動作することが確認されています。

## 注意事項

<font color="red">**
**</font>

* **Seeeduino Film プログラマ**セクション（"UartSB_Frame#Seeeduino_Film_Programmer"）に示されているように、UartSB フレームをSeeeduino Filmに接続してください。
* FFC（フレキシブルフラットケーブル）を使用してUartSB フレームをSeeeduino Filmに直接接続しないでください。これにより20ピンFPC接続が逆になります。
* 20ピンFPCコネクタを慎重に扱ってください。
* **UartSB フレーム**は3.3V I/Oでのみ使用してください。

## 回路図

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Schematic_1.png)

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Scehmatic_2.png)

## 仕様

### 主な仕様

| 項目 | 仕様 |
|---|---|
| マイクロプロセッサ | FT232RL |
| PCBサイズ | 35mm x 20mm |
| インジケータ | 電源 - 緑色LED、RXおよびTX - 赤色LED |
| 電源供給 | 3.3Vおよび5V DC |
| インターフェース | Mini-B USB、2.54mmピッチピンヘッダ |
| Seeeduinoプログラミングポート | 20ピンFPCソケット |
| 接続性 | USB |
| 通信プロトコル | UART、ビットバングI/O、SPI |

### 電気的特性

| 仕様 | 最小 | 標準 | 最大 | 単位 |
|---|---|---|---|---|
| 入力電圧 | - | 5 | 5 | Vdc |
| 消費電流 | - | - | 500 | mA |
| 出力電圧 | 3.3 | - | 5 | Vdc |

## ピン定義と定格  

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Outline_35mmx20mm.png)

| パッド名 | 説明 |
|---|---|
| GND | グランドピン |
| 3v3 | 3.3V 電源供給 |
| 5V | USBポートからの5V電源供給 |
| RXD | UARTデータ入力 |
| TXD | UARTデータ出力 |
| CTS | UART送信許可信号 |
| RTS | UART送信要求信号 |
| DTR | UARTデータ端末準備完了信号 |
| DCD | UARTデータキャリア検出信号 |
| DSR | UARTデータセット準備完了信号 |

## 使用方法

### Seeeduino Film プログラマー

**UartSB Frame** は、**Seeeduino Film** のフラッシュ専用に設計されています。PCに接続すると、USBからシリアルポート（COMポート）インターフェースとして機能します。この構成は、MCUのシリアルポートと通信するために使用できます。また、UARTベースのISPをサポートするMCUをプログラムするのにも便利です。

*   FT232RLドライバがインストールされていない場合は、次のセクション（UartSB Frameの設定）に従ってください。

*   以下のようにSeeeduino FilmをUartSB Frameに接続します：

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Film_with_UartSB_Frame.jpg)

*   Arduino IDEでボードタイプを「Arduino ProまたはPro Mini (3.3V, 8MHz) w/ATMega168」に設定します。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/SeeeduinoFilm_Arduino_Board_Selection.jpg)

*   スケッチをアップロードします。

#### **Windows**でのUartSB Frameの設定

*   Windows OSでは、デバイスを初めて接続すると、ドライバを求められる場合があります。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Detected_Windows.JPG)

FTDIのウェブサイトから**仮想COMポート**ドライバをダウンロードしてインストールしてください：

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

*   ドライバをインストールするためのウィザードが開きます。「リストまたは特定の場所からインストール」を選択します。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_1.JPG)

*   ダウンロードしたドライバのパスを選択します。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_2.JPG)

*   未署名のドライバをダウンロードした場合、以下のウィンドウが表示されます。「続行」をクリックしてください。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_2.1.JPG)

*   **UartSB Frame** ドライバが正常にインストールされました。Windowsは**FT232RL**に**COM**ポート名（例：**COM10**、**COM11**など）を割り当てます。デバイスマネージャで正確な名前を確認してください。この場合、UartSB Frameには「**COM16**」が割り当てられています。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSbee_Driver_install_3.JPG)

#### **GNU/Linux**でのUartSB Frameの設定

すべての最新の**GNU/Linux OS**にはFT232RLドライバが付属しています。UartSB Frameが検出されているか確認するには、**lsusb**コマンドを実行してください。以下のような出力が表示されるはずです。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Lsub.png)

**GNU/Linux**では、デバイス名として**/dev/ttyUSB0**、**/dev/ttyUSB1**などが割り当てられます。

シリアルポートの動作を確認するには、UartSB Frameの**TxD**と**RxD**ピンを接続し、**cutecom**のようなターミナルアプリケーションを使用して以下のようにデバイスパラメータを設定します。

**ボーレート**: 9600、**データビット**: 8、**ストップビット**: なし、ハンドシェイクなし

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_Txd_Rxd_connected.jpg)

ターミナルで入力した文字がエコーバックされることを確認できます。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartsBee-CuteCom.png)

同じ機能は**Windows**の**ハイパーターミナル**でも確認できます。

### Seeeduino Film用バッテリーチャージャー  

**UartSB Frame**のブレークアウトにあるUSB 5V電源を使用して、**Seeeduino Film**のバッテリーを充電できます。

*   **Seeeduino Film**の電源コネクタを**UartSB Frame**の5VとGNDにハンダ付けします。

*   電源コネクタを**CHG**ジャックに接続します。

*   バッテリーをSeeeduino Filmの**BAT**ジャックに接続します。

*   USBを通電します。

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/SeeeduinoFilm_Battery_Charging_with_UartSBFrame.jpg)

### ビットバングモード  

他のFT232RLベースのUSB-シリアルデバイスと比較して、UartSB Frameの優れた特徴は、すべてのビットバングI/Oがヘッダーピンに引き出されていることです。

ビットバングモードは、FT232RLの特別な機能で、8つのI/Oライン（**D0 - D7**）を汎用の双方向I/Oラインとして使用できます。FT232RLは以下の3つのビットバングモードをサポートしています。

*   **非同期ビットバングモード**

デバイスに書き込まれたデータは、設定された出力ピンにクロックされます。データ転送速度はボーレートジェネレータに基づいて設定されます。このモードでは、8つのI/Oラインのいずれも入力または出力として設定できます。

*   **同期ビットバングモード**

このモードでは、データが同期的に送信されます。出力バイトがデバイスに送信される前に入力が読み取られます。そのため、入力を読み取るには書き込み操作を実行する必要があります。

*   **CBUSビットバングモード**

これはFT232RL EEPROMの再プログラミングを必要とする特別なモードです。このモードでは、信号**C0 - C3**を使用します。

**FT232RL**の**ビットバングモード**は、アプリケーションノート[[1]](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)で詳しく説明されています。

**表: ビットバングI/Oマッピング**

| UartSB Frame信号 | ビットバングI/O信号 |
|---|---|
| TxD | D0 |
| RxD | D1 |
| RTS | D2 |
| CTS | D3 |
| DTR | D4 |
| DSR | D5 |
| DCD | D6 |
| RI | D7 |

**ビットバングモードの操作:**


簡単な非同期ビットバングモードの操作は、以下のブレッドボード配置で示されています。この配置では、DTR（D4）ピンがLEDに接続されています。LEDの点滅速度はPC側のアプリケーションプログラムによって制御されます。

**LED点滅回路**

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSB_Frame_BitBang_demo.jpg)

上記の画像は Fritzing.org を使用して作成されています。

**ビットバングI/Oピン（ISPヘッダー）はボトムレイヤーに表示**

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/Seeeduino_Frame_UarSBs_Bottom.jpg)

ビットバングモードには、[D2XX](https://www.ftdichip.com/Drivers/D2XX.htm) と呼ばれる特別なFTDIダイレクトドライバーが必要です。このドライバーをインストールするには、FT232RLチップの仮想COMポートドライバーを削除する必要があります。GNU/Linuxでは、このドライバーはカーネルモードで動作します。D2XXの代替として、[libFTDI](http://www.intra2net.com/en/developer/libftdi/) というオープンソースの無料ドライバーが利用可能です。このドライバーはWindows、GNU/Linux、Mac OSで動作し、GNU/Linuxではユーザーモードで動作するため、既存のFT232RLドライバーを削除する必要はありません。

**libFTDI**

[http://www.intra2net.com/en/developer/libftdi/](http://www.intra2net.com/en/developer/libftdi/)

**libUSB**  
libFTDIはlibusbを必要とし、以下からダウンロードできます：

[http://www.libusb.org/](http://www.libusb.org/)

以下のサンプルコードは、libFTDIのサンプルファイルと同様の方法でコンパイルできます。簡単な方法は、以下のコード内容を既存のサンプル `.c` ファイルの1つにコピーし、以下のコマンドでドライバー全体をビルドすることです：

```
./configure
make
```

**コード例**

Blinky.C: UartSBee v3.1 (FT232RL) ビットバングモード - Blinky.

回路:  
TXDをLEDのアノードに接続し、抵抗の一端をGNDに、もう一端をLEDのカソードに接続します。

```c
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

int main
{ 
    unsigned char ouputState = 0;
    struct ftdi_context ftdic;

    /* 1. ftdiデバイスコンテキストを初期化 */
    ftdi_init(&ftdic);  

    /* 2. VID/PIDペアに基づいてデバイスを開く */
    if(ftdi_usb_open(&ftdic, 0x0403, 0x6001) < 0)
    {
        printf("UartSBs Frameを開けません");
        return 1;
    }

    /* 3. DTRライン用にビットバングモードを有効化 */
    ftdi_set_bitmode(&ftdic, TXD, BITMODE_BITBANG);

    /* 4. 1秒ごとにLEDを点滅 */
    while(1)
    {
        ouputState ^= TXD;
        ftdi_write_data(&ftdic, &ouputState, 1);
        sleep(1);
    }
}
```

FT232RLのビットバングモードは、AVR ISP、JTAG、SPI、I2Cポートを構築するために使用できます。詳細は外部リンクを参照してください。

## 画像ギャラリー

![](https://files.seeedstudio.com/wiki/UartSB_Frame/img/UartSBFrame_SeeeduinoFilm_Programming.jpg) 

## FAQ  

質問をここに記載してください：

## サポート  

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum) または **wish** にて議論してください。

## ドキュメントバージョントラッカー  

| 改訂版 | 説明 | 編集者 | リリース日 |
|---|---|---|---|
| V0.9b | 詳細なアプリケーションノート | Visweswara R | 2010年2月22日 |

## ハードウェアバージョントラッカー  

| リビジョン | 説明 | リリース日 |
|---|---|---|
| UartSBs Frame | 0.9b | 2010年2月22日 |

## バグトラッカー  

バグトラッカーは、使用中に見つけた可能性のあるバグを公開する場所です。ご意見をお書きください。あなたの回答は、私たちの製品改善に役立ちます。

## 追加アイデア  

追加アイデアは、この製品に関するプロジェクトアイデアや、見つけた他の用途について記載する場所です。または、Projectsページに記載することもできます。

## リソース  

- **[Eagle]** [Eagleでの回路図および基板ファイル](https://wiki.seeedstudio.com/ja/images/d/d3/UartSBs_Frame_Schematic_Board.zip)

- **[PDF]** [PDF回路図](https://wiki.seeedstudio.com/ja/images/9/91/UartSBs_0.9b_Schematic.pdf)

## 購入方法  

こちらをクリックして [UartSB Frame](https://www.seeedstudio.com/depot/seeeduino-frame-uartsbs-p-778.html?cPath=132_135) を購入してください。

## ライセンス  

このドキュメントは、Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) の下でライセンスされています。ソースコードおよびライブラリは [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) の下でライセンスされています。詳細はソースコードファイルをご覧ください。

## 外部リンク  

* **[[2]](https://www.ftdichip.com/Products/ICs/FT232R.htm)** [FTDI FT232RL製品ページ](https://www.ftdichip.com/Products/ICs/FT232R.htm)

* [[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)] FTDI仮想COMポート（VCP）ドライバー
* [FTDI D2XXドライバー](https://www.ftdichip.com/Drivers/D2XX.htm)

* [FTDI Bit-Bangモードアプリケーションノート](https://www.ftdichip.com/Support/Documents/AppNotes/AN_232R-01_Bit_Bang_Mode_Available_For_FT232R_and_Ft245R.pdf)

**オープンソースドライバー**

* [libFTDI](http://www.intra2net.com/en/developer/libftdi/)

* [libUSB](http://www.libusb.org/)

**FT232RLアプリケーション情報のその他のソース**

* [Hackaday - Bit-Bangモードの紹介](http://hackaday.com/2009/09/22/introduction-to-ftdi-bitbang-mode/)

* [FT232R JTAGのOpenOCDによる実装](http://vak.ru/doku.php/proj/bitbang/bitbang-jtag)

* [FT232R SPI Bitbangモードの例](http://openschemes.com/2009/11/05/bit-banging-spi-on-arduinos-ft232rl/)

## 技術サポートと製品ディスカッション  

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>