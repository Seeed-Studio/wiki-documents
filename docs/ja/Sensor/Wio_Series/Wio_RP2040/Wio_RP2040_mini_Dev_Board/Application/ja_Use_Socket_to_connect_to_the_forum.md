---
title: ソケットを使用してフォーラムに接続する
nointro:
keywords:
  - ドキュメント
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Use_Socket_to_connect_to_the_forum/
slug: /ja/Use_Socket_to_connect_to_the_forum
last_update:
  date: 05/15/2025
  author: gunengyu
---


ソケットはネットワーク通信の基盤とも言える存在です。このプロジェクトでは、ソケットを使用して指定されたサーバーに接続し、インターネットからその情報を取得します。インターネット上には、telnetプロトコルを使用する多くのサーバーを検索することができます。これらのサーバーに接続することで、ウェブやフォーラムを閲覧したり、ターミナルで文字アニメーションを読むことも可能です。

この例では、「freechess.org」フォーラムに接続し、ターミナルで情報を取得します。
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
    addr_info = usocket.getaddrinfo('freechess.org',5000)
    print(addr_info)
    addr = addr_info[0][-1]
    print(addr)
    s=usocket.socket()
   # addr=('171.160.169.200',23)
    s.connect(addr)
   # s.send('Hello!')
while True:
    data = s.recv(500)
    print(str(data, 'utf8'), end = '')
```
**17行目のWiFi名とパスワードを自分のものに置き換えてからプログラムを実行し、Shellウィンドウで結果を確認してください。**
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_20.png)
インターネット上でtelnetプロトコルをサポートする他のサーバーを見つけ、サーバーアドレスとポートを上記のように入力することもできます。これで、ターミナルを使用してこれらのウェブサイトにアクセスすることができます！
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_21.png)
## 

## 技術サポートと製品に関するディスカッション
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