---
description: XIAOESP32C3-FAQ
title: XIAO ESP32C3 IO割り当てに関する注意事項
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/exp32c3_d9_d6_d8
last_update:
  date: 6/28/2023
  author: cheng.tang
---


ESP32C3には複数のブートモードがあり、電源投入時にどのモードでブートするかはGPIO2、GPIO8、GPIO9によって制御されます。例えば、GPIO2=0、GPIO8=0、GPIO9=0の場合、C3はUART_BOOTモードに入ります。
XIAO esp32c3はGPIO9のみをプルアップし、それを制御するボタンを追加しています。GPIO8とGPIO2はプルアップ/プルダウンされていないため、特定の使用シナリオでお客様がUART_BOOTモードに入ってしまい、プログラムをアップロードできなくなる場合があります。

### D9

XIAO ESP32C3のD9は、ESP32-C3のGPIO9（15）、プルアップ抵抗（R6）、およびBOOTボタンに接続されています。BOOTボタン（およびRESETボタン）により、ESP32-C3のブートモードを手動で切り替えることができます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/10.png" alt="pir" width={600} height="auto" /></div>

BOOTボタンを押すとD9がGNDに接続されます。**そのため、D9はスイッチ入力として使用することをお勧めします**。

### D6

XIAO ESP32C3のD6は、ESP32-C3のU0TXD（28）に接続されています。1次/2次ステージブートローダーの動作状況がテキストとしてU0TXDに出力されます。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/11.png" alt="pir" width={400} height="auto" /></div>

D6は起動時にUART出力として設定されるため、D6を入力として使用すると誤って大電流が発生する可能性があります。**そのため、D6ピンは出力モードでのみ使用することをお勧めします**。

ただし、このD6はUART出力であるため、いくつかの点に注意する必要があります：一つは通信していない待機モード時にHIGHになることです。もう一つは1次/2次ステージブートローダーのテキスト出力です。起動直後に信号がHIGH/LOWに変動するため、必要に応じて対策を講じる必要があります。

そのため、D6の使用は避けるようにしてください。（もちろん、理解した上で使用するのは問題ありません。）

### D8

Seeed Studio XIAO ESP32C3のD8は、ESP32-C3のGPIO8（14）に接続されています。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/12.png" alt="pir" width={300} height="auto" /></div>

GPIO8は、BOOTボタンを押し続けてブートモードをダウンロードブートに設定する際に参照され、その時点でHIGHである必要があります。（[こちら](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf)には「GPIO8 = 0とGPIO9 = 0のストラッピング組み合わせは無効であり、予期しない動作を引き起こします」と記載されています。）

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/13.png" alt="pir" width={700} height="auto" /></div>

ダウンロードブートを使用する場合は、**ブート時にGPIO8をHIGHにするためのプルアップ抵抗を追加してください**。

このセクションのテストと貢献をしてくれたSeeedJPの同僚**matsujirushi**に特別な感謝を表します。以下は元記事への参考リンクです。

- [Seeed Studio XIAO ESP32C3のI/O割り付けに注意](https://lab.seeed.co.jp/entry/2023/04/03/120000)