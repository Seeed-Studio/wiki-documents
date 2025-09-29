---
description: Grove - Bee Socket
title: Grove - Bee Socket
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Bee_Socket
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Bee_Socket_01.jpg)

Grove - Bee Socket は、Xbee シリーズのアダプタであり、WIFI Bee、RF Bee、Bluetooth Bee などのワイヤレスモジュールを Arduino に接続することができます。Arduino 互換であり、ワイヤレスモジュールによって実行されるピアツーピアおよびメッシュネットワークの操作をより効果的に行うことができます。レギュレータ CJT1117 は、Xbee に安定した 3.3V の電圧を保証します。LED は、Grove の動作モードを明確に表示することができます。
<!-- Grove-Bee Socket は [XBee Shield](/ja/XBee_Shield_V2.0) と同じ機能を持っています。Grove-Bee Socket と Arduino はケーブルで接続され、XB Shield は Arduino に直接差し込むことができる標準アダプタです。 -->

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Bee-Socket-p-1449.html)


## 特徴
---
*   標準 Bee ソケットと Grove インターフェース

*   XBee に電力を供給するためのオンボード 3.3V レギュレータ

*   レベルシフティング回路

*   Bee モジュール用のリセットボタン

*   Bee 操作用の LED

## インターフェース機能
---
![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Bee_Socket_Interface.jpg)

**J1:** Grove インターフェース。Arduino/Seeeduino の UART インターフェースに接続するために使用します。

**J2, J3:** Xbee の各ピンのブレークアウト接続。

**J4, J5:** Bee ソケット。

**U1:** CJT1117 IC、低ドロップアウトリニアレギュレータ。XBee モジュールに 3.3V を供給するために使用します。

**U2, U3:** SN74LVC1G125 IC、XBee を 5V 信号から保護し、3.3V に変換します。

**RSSI インジケータ:** XBee RX 信号強度インジケータ。

**PWR LED:** 電源インジケータ。

**ASSOC インジケータ:** XBee アソシエートインジケータ。

**ON/SLEEP LED:** XBee モジュールのステータスインジケータ。

## 使用方法
---
Grove - Bee Socket を使用すると、Arduino/Seeeduino を介して Bee モジュールを簡単に制御できます。ここでは RF Bee を例に取り、使用方法を説明します。

*   XBee モジュールを Bee ソケットに差し込みます。

*   次に、Grove - Bee Socket を Grove ケーブルを使用して Arduino/Seeeduino の UART インターフェースに接続します。そして、USB ケーブルを介して Arduino/Seeeduino をコンピュータに接続して電源を入れます。

![](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/img/Grove-Bee_Socket.jpg)

*   これで、いくつかの簡単な AT コマンドを送信して RF Bee の基本設定を行い、データの送受信を行うことができます。もちろん、ハードウェア接続を変更せずにファームウェアを更新することも可能です。

通信方法に関する詳細情報が必要な場合は、関連する Bee モジュールの WIKI ページを参照してください。


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---
[Bee Socket Eagle File](https://files.seeedstudio.com/wiki/Grove-Bee_Socket/res/Bee_Socket_Eagle_File.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>