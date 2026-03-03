---
description: Xadow - メインボード
title: Xadow - メインボード
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Main_Board
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_00V1.jpg)

Xadow メインボードモジュールは、コントローラー **ATmega32U4** をベースにしています。このモジュールは高性能かつ低消費電力で、プロジェクトを小型化し、特にウェアラブルプロジェクトに適しています。

オンボードコントローラー **ATmega32U4** は、32K フラッシュ、2.5K SRAM、1K EEPROM を備えており、[Seeeduino Lite](https://www.seeedstudio.com/seeeduino-lite-p-1487.html?cPath=6_7) と同様に USB スレーブモジュールとしても使用できます。このボードは、オンボードの USB 接続またはリチウムバッテリーから電源を供給できます。また、このモジュールには充電回路が搭載されており、USB ポートを介してリチウムバッテリーを充電することができます。

初めてこの Xadow メインボードを使用する場合は、関連するドライバーをインストールし、以下の手順に従って少し修正を加えてください。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Main-Board-p-1524.html)

## 仕様
---
- マイクロコントローラー: ATmega32u4
- 動作電圧: 3.3V
- IO ピンあたりの DC 電流: 40mA
- デジタル I/O ピン: 20
- PWM チャネル: 7
- アナログ入力チャネル: 12
- 動作温度: -20~70 ℃
- 寸法: 25.43mm x 20.35mm

## インターフェース機能
---
![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/XadowMainBoardScreen.jpg)

- J1: Micro USB。リチウムバッテリーの充電およびコードのアップロードに使用できます。
- U2: ATmega32U4 IC、32K バイトの ISP フラッシュと USB コントローラーを備えた 8 ビット AVR マイクロコントローラー。
- RST: リセットボタン。複数の Xadow モジュールを接続している場合、システム全体をリセットできます。
- J2, J3: FPC インターフェース。
- U1: CN3065 IC、充電管理チップ。
- BAT: バッテリーソケット。LiPo バッテリーを接続するために使用されます。インターフェースは JST 1.0 です。
- U4: MIC5205-3.3YM5、電圧レギュレーター。

## ピンの説明
---
Xadow モジュールの両側のピンは対称的です。以下は、J2 インターフェースの上から下までのピンの説明です。

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Pins.jpg)

|Xadow ピン|マイクロコントローラーピン|機能|
|---|---|---|
|1|	9	|(PCINT1/SCLK)PB1|
|2|	10	|(PDI/PCINT2/MOSI)PB2|
|3|	11	|(PDO/PCINT3/MISO)PB3|
|4|	38	|PF5(ADC5/TMS)|
|5|	14,34,24,44	|VCC|
|6|	5,23,35,43	|GND|
|7|	5,23,35,43	|GND|
|8|	14,34,24,44	|VCC|
|9|	18	|(OC0B/SCL/INT0 )PD0|
|10|	19	|(SDA/INT1)PD1|
|11|	20	|(RXD/INT2)PD2|
|12|	21	|(TXD/INT3)PD3|

## ボードのリビジョンと変更点
---
![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_-_Main_board_v1.3.JPG)

**リビジョン 1.3**
1. このバージョンでは、J2 および J3 FPC コネクタをフリップタイプに変更しました。これにより、周辺機器の接続や取り外しがより簡単になりました。
2. パス制御機能を備えた充電回路を最適化しました。
3. MCU と周辺機器の電源供給を分離しました。これにより、MCU の動作がより安定しました。

## Xadow メインボードの使い方
---
Arduino と同様に、Xadow メインボードは単一のマイクロコントローラー（Atmel ATmega32U4）を使用してスケッチを実行し、USB を介してコンピューターと通信します。これにより、プログラムには USB ケーブルだけが必要です。具体的な手順は以下の通りです：
<!-- - Arduino IDE を Xadow に対応させるには、いくつかの手順を実行する必要があります。詳細は [こちら]() を参照してください -->
- ドライバーファイルを [https://github.com/Seeed-Studio/Signed_USB_Serial_Driver](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver) からダウンロードします。
- Micro-USB ケーブルを Xadow メインボードに接続します。
- Micro-USB コネクタのもう一方をコンピューターの USB ポートに接続します。
- 次に、Xadow ドライバーをインストールします。[Arduino のダウンロードとドライバーのインストール](https://wiki.seeedstudio.com/ja/Guide_to_use_demos_downloaded_from_Seeed-s_Github/) を参照して、Xadow ドライバーのインストール方法を学んでください。

![](https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_Driver_step4.jpg)

これで、他の Arduino ボードと同様に Xadow をプログラムして使用することができます。

[Boards.txt と USBCore.cpp](https://github.com/freespace/Files_For_Seeed_Main_Board) for Arduino IDE v1.6.3

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [Xadow メインボードの Eagle ファイル.zip](https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip)
- [Xadow メインボードのライブラリ](https://github.com/Seeed-Studio/Xadow_MainBoard)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>