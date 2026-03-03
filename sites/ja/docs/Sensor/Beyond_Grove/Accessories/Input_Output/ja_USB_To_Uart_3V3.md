---
title: USB To Uart 3V3
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Scream_out_loud-110dBA_fixed_tone_Siren/
slug: /ja/USB_To_Uart_3V3
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: USB To Uart 3V3
category: Discontinued
bzurl:
oldwikiname: USB_To_Uart_3V3
prodimagename:
bzprodimageurl: https://www.research.net/r/USB_To_Uart_3V3
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/Photo_USB_To_Uart_5V_3V3.JPG)

USB To Uart 3V3は、CH340というUSBバス変換チップを基にしたUSBからシリアルへのアダプターです。これにより、USBからシリアルインターフェース/IrDA赤外線/プリンターインターフェースへの変換を実現できます。このモジュールは、コードのアップロードやMCUとの通信に使用できます。

## 特徴

* フルスピードUSBデバイスインターフェース、USB仕様バージョン2.0に準拠

* ボーレートは2400bpsから115200bpsまで対応

* ハードウェアフルデュプレックスシリアルインターフェース、送受信バッファを設定

* LEDインジケーター

## 仕様

* 動作電圧：DC 5V

* 動作電流：&lt;10mA

* 対応OS：Windows、Linux、Mac

## インターフェース機能

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_3V3_Interface.jpg)

* ①：電源インジケーター
* ②：Micro USB

* ③：TXインジケーター

* ④：RXインジケーター
* ⑤：Uartブレイクアウト

## 使用方法

#### ドライバーインストール  

USB To Uart 5V/3V3はUSBからシリアルポートインターフェースとして使用されます。ドライバーのインストールが必要です。

##### Windows/Linux

Windowsオペレーションシステムのコンピュータエンドポイントでシリアルアプリケーションプログラムと完全に互換性があります。

* 1) USBポートを介してコンピュータに接続します。

* 2) 数分待つと、デバイスマネージャーで確認できます。

* 3) ポートが見つからない場合は、[こちら](http://wch-ic.com/download/list.asp?id=127)からドライバーをダウンロードしてください。

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/CH340_Driver.jpg)

##### Mac OS

ドライバーのダウンロード：[http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

Mac OS Yosemiteの場合：

* 1) CH340ドライバーをインストールします。

* 2) ターミナルプログラムを開きます（/Applications/Utilities/にあります）。

* 3) コマンドを入力します：sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

* 4) パスワードを入力します。

* 5) コンピュータを再起動します。

Macの設定を元に戻したい場合は、以前の設定にブート引数を再定義するか、以下のようにブート引数をクリアしてください：sudo nvram -d boot-args

#### ハードウェア

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_Download.jpg)

回路をこのように接続する必要があります。

### 例

USB To Uart 3V3を使用してSeeeduino Ethernetにコードをダウンロードできます。

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_5V_3v3_Usage.jpg)

正しいボードタイプとCOMポートを選択する必要があることに注意してください。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **[Eagle]**[USB To Uart 3V3 v1.0 Eagle File](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_Eagle.zip)

* **[PDF]**[USB To Uart_3V3 pdf](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB%20To%20Uart_3V3_Eagle/USB%20To%20Uart_3V3.pdf)

* **[EAGLE]**[USB To Uart_3V3 sch](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB%20To%20Uart_3V3_Eagle/USB%20To%20Uart_3V3.sch)

* **[PDF]**[Schematic in pdf](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_SCH.pdf)

* **[Datasheet]**[Datasheet of CH340](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/CH340DS1_EN.PDF)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>