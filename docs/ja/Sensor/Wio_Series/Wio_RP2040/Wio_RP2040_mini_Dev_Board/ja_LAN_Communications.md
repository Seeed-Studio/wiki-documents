---
title: LAN_Communications
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/LAN_Communications/
slug: /ja/LAN_Communications
last_update:
  date: 05/15/2025
  author: gunengyu
---


### 1. LANサーバーの設定

このプロジェクトでは、サーバーとメイン制御ボードが同じローカルエリアネットワーク内で動作する必要があります。原理としては、1台のPCをサーバーとして設定し、メイン制御ボードをローカルエリアネットワークを介してサーバーに接続し、PCとボードが固定ポートを通じて通信します。
まず、ネットワークデバッグアシスタント（このプロジェクトではNet Assistantネットワークデバッグアシスタントソフトウェア）をダウンロードしてインストールしてください。
インストールが成功した場合、ソフトウェアを開き、左上の「TCP Server」を選択して「Protocol」を設定し、その後「Local host addr」と「Local host port」を設定します。すべて完了したら、「Open」をクリックしてサーバーに入ります。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_8.png)

### 2. MicroPythonプログラムのデバッグ

以下のコードをコードエディタに入力してください：
```python
import network
import usocket
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)

print("APIリスト:")
dir(N1)

print("WiFiリスト:")
lis = N1.scan()
for q in lis:
    print(q)
    
N1.connect("CHCK","depot0510")
if N1.isconnected():
    print("    IP               ゲートウェイ           ネットマスク            MAC            SSID")
    print(N1.ifconfig())
    s=usocket.socket()
    addr=('192.168.9.243',9999)
    s.connect(addr)
    s.send('こんにちは! Wio RP2040')
```
17行目（WiFiの名前とパスワード）と22行目（コンピュータサーバーのIPアドレスとポート番号）を記入してください。その後、プログラムを実行すると、ネットワークデバッグアシスタントのデータログにメイン制御ボードから送信されたメッセージが表示されるはずです。

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_9.png)

---

ネットワーク機能を持つプログラムを実行した後に他のコードを実行したい場合は、メイン制御ボードの「RUN」ボタンをクリックして再起動してください。再起動後、メイン制御ボードは他のプログラムを実行することができます。

---

## 技術サポートと製品に関する議論

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を提出してください。
弊社の製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>