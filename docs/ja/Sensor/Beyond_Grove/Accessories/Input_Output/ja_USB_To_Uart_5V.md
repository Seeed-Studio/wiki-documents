---
title: USB To Uart 5V
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Scream_out_loud-110dBA_fixed_tone_Siren/
slug: /ja/USB_To_Uart_5V
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: USB To Uart 5V
category: Essentials
bzurl: https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html
oldwikiname:  USB To Uart 5V
prodimagename:  USB_To_Uart_5V_photo.jpg
surveyurl: https://www.research.net/r/USB_To_Uart_5V
sku:  103990051
--- -->
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5V_photo.jpg)

USB To Uart 5Vは、CH340をベースとしたUSBからシリアルへのアダプタです。CH340はUSBバス変換チップであり、USBをシリアルインターフェース、IrDA赤外線、またはプリンターインターフェースに変換することができます。このモジュールは、コードのアップロードやMCUとの通信に使用できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html)

## 特徴

---

* フルスピードUSBデバイスインターフェース、USB仕様バージョン2.0に準拠

* ボーレートは2400bpsから115200bpsまで対応

* ハードウェアフルデュプレックスシリアルインターフェース、送受信バッファを設定

* LEDインジケーター

## 仕様

---

* 動作電圧：DC 5V

* 動作電流：&lt;10mA

* 対応オペレーションシステム：Windows、Linux、Mac

## インターフェース機能

---
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5v_interface.jpg)

* ①：電源インジケーター
* ②：Micro USB

* ③：TXインジケーター

* ④：RXインジケーター
* ⑤：Uartブレークアウト

## 使用方法

---
**ドライバーインストール**

USB To Uart 5V/3V3はUSBからシリアルポートインターフェースとして使用されます。ドライバーのインストールが必要です。

**Windows/Linux**

Windowsオペレーションシステムのコンピュータエンドポイントでシリアルアプリケーションプログラムと完全に互換性があります。

* 1) USBポートを介してコンピュータに接続します。

* 2) 数分待つと、デバイスマネージャーで確認できます。

* 3) ポートが見つからない場合は、[こちら](http://wch-ic.com/download/list.asp?id=127)からドライバーをダウンロードしてください。

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/CH340_Driver.jpg)

**Mac OS**

ドライバーのダウンロード：[http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

Mac OS Yosemiteの場合：

* 1) CH340ドライバーをインストールします。

* 2) ターミナルプログラムを開きます（/Applications/Utilities/にあります）。

* 3) コマンドを入力します：sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

* 4）パスワードを入力します。

* 5）コンピュータを再起動します。

Macの設定を元に戻したい場合は、以前の設定にブート引数を再定義するか、以下のようにブート引数をクリアすることで開発者モードを終了できます：sudo nvram -d boot-args

**ハードウェア**

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_Download.jpg)

回路を以下のように接続してください。

### 例

USB To Uart 5Vを使用してSeeeduino Ethernetにコードをダウンロードできます。

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5V_Usage.jpg)

正しいボードタイプとCOMポートを選択する必要があることに注意してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="res/USB_To_Uart_5V_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [USB To Uart 5V v1.0 Eagle File](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_5V_Eagle.zip)

* [PDF形式の回路図](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_5V_v1.0_SCH.pdf)

* [CH340のデータシート](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/CH340DS1_EN.PDF)

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