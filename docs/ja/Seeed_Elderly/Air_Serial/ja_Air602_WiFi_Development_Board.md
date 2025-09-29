---
description: Air602_WiFi_Development_Board
title: Air602 WiFi 開発ボード
keywords:
- Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Air602_WiFi_Development_Board
last_update:
  date: 05/15/2025
  author: Matthew
---


![picture](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/main.jpg)

この Wiki は、Air602 WiFi 開発ボードおよび Air602 WiFi モジュールの両方に対応しています。

Air602 は、埋め込み型 Wi-Fi SoC チップ (W600) をベースにした 2.4G Wi-Fi モジュールで、12 ピンのスタンプホール拡張インターフェースを備えています。驚くべきことに、切手よりも小さく、わずか 12mm×10mm のサイズです。小型ながらも完全な機能を備え、豊富なインターフェースと完全な機能を提供します。このモジュールは IEEE802.11b/g/n と AT コマンドをサポートしています。

Air602 WiFi 開発ボードは、Air602 Wi-Fi モジュールをベースにしており、USB インターフェースとアンテナを統合しています。このボードをコンピュータに接続すると、「ポート (COM & LPT)」として認識され、シリアルポートツールを使用してコーディングできます。このモジュールは IEEE802.11b/g/n と AT コマンドをサポートしています。

<a href="https://www.seeedstudio.com/Air602-WiFi-Module-p-3139.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

<a href="https://www.seeedstudio.com/Air602-WiFi-Development-Board-p-3140.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

## 特徴

**インターフェース**

• USB インターフェース

• UART/SPI

• 統合 GPIO デバイスコントローラー

**無線**

• IEEE802.11 b/g/e/i/d/k/r/s/w/n をサポート

• 2.4~2.4835 GHz をサポート

• Wi-Fi WMM/WMM-PS/WPA/WPA2/WPS をサポート

• Wi-Fi Direct をサポート

• STBC、GreenField、Short-GI

• 複数のネットワークプロトコルをサポート: TCP/UDP/ICMP/DHCP/DNS/HTTP

**その他**

• ASCII エンコーディングに基づく AT+ 命令プロトコルをサポート (UART インターフェース)

• ユーザーがプログラム可能な GPIO 制御をサポート

## 仕様

|カテゴリ|項目|パラメータ|
|--|---|---|
|無線|Wi-Fi モードのサポート|IEEE802.11b/g/n|
||RF システムインピーダンス|50Ω|
||周波数範囲|2.4~2.4835 GHz|
||受信感度|20MHz MCS7@‐71dBm;<br />40MHz MCS7@‐68dBm;<br />54Mbps@‐73dBm;<br />11Mbps@‐86dBm;<br />1Mbps@‐95dBm;|
||物理層データレート|802.11n MCS 0~7   150Mbps|
||変調方式|DSSS、OFDM、DBPSK、DQPSK、CCK、QAM16/64|
||出力電力|IEEE802.11b, DSSS 1Mbps, POUT = +17dBm;<br />IEEE802.11g, OFDM 54Mbps, POUT = +10dBm;<br />IEEE802.11n, OFDM MCS7, POUT = +10dBm|
|ハードウェア|インターフェースタイプ|UART/SPI/GPIO|
||インターフェース速度|2Mbps@UART (最大) <br />50Mbps@SPI (最大)|
||動作電圧|3.3V(モジュール)/5V(開発ボード)|
||動作湿度|5%~90% (結露しないこと)|
||保管温度|‐40~+125 ℃|
||動作温度|‐40~+85℃|
|ソフトウェア|ネットワークタイプ|STA/AP/AP+STA/Wi‐Fi Direct|
||認証|WEP/WPA‐PSK/WPA2‐PSK|
||暗号化|WEP64/WEP128/TKIP/CCMP(AES)|
||WPS 機能|WPS|
||省エネ|PS‐POLL/スタンバイ|
||ネットワークプロトコル|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
||インターフェースプロトコル|AT+ 命令セット|

## 典型的な用途

- インテリジェント家電
- スマートホーム
- ワイヤレスオーディオおよびビデオ
- スマートトイ
- 医療モニタリング
- 産業制御
- その他のIoTアプリケーション

## ピンアウト

![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_MAP.jpg)
![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_table.jpg)
![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_MAP_B.jpg)

## はじめに

**Air602 WiFi開発ボード**の場合、コンピュータに接続するだけで、ポート（COM & LPT）として認識されます。  
**Air602 WiFiモジュール**の場合、USB-to-Serialツールを使用してRX/TXピンをコンピュータに接続する必要があります。

:::note
Macの場合、一部のバージョンのMacシステムがオンボードのUSB-to-SerialチップCH330Nを認識できないことが判明しています。解決策については[Mac os driver issue](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80)をご確認ください。
:::

シリアルポートツール**sscom**を使用してATコマンドを送信します。お好みのシリアルポートツールを使用できますが、**sscom**を使用したい場合は[こちら](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip)からダウンロードできます。

いずれの場合も、**AddCrLf**オプションをチェックし、ボーレートを**115200**に設定してください。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_2.jpg)

**AT+**を入力して**SEND**をクリックするか、`enter`キーを押して接続が正常に確立されたか確認します。

```cpp
AT+
```

**+OK**が返された場合、ATコマンドを使用してこのモジュールを制御できます。

### SoftAPプロセスを作成する

- 1- **WPRT** ワイヤレスネットワークカードの動作モードをSoftAPに設定します：

```cpp
AT+WPRT=2
```

- 2- **APSSID** STA用のAP SSIDを設定します。例：*MyAP*：

```cpp
AT+APSSID=MyAp
```

- 3- **APENCRY** ワイヤレスネットワークカードのセキュリティモードをWEP64に設定します：

```cpp
AT+APENCRY=1
```

パラメータ：

open：0，WEP64：1，WEP128：2

- 4- **APKEY** ワイヤレスネットワークカードのキーを*12345*に設定します：

```cpp
AT+APKEY=1,1,12345
```

パラメータ1：キー形式、0はHEX、1はASCII  
パラメータ2：インデックス番号、1から4はWEP暗号化キーに使用され、その他の暗号化方法は0に固定されています。  
パラメータ3：ワイヤレスキー、例：12345  

- 5- **APNIP** IPアドレスとサブネットマスクを設定します：

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

パラメータ1：アドレスタイプ、0はDHCPを使用した動的割り当て、1は静的アドレス  
パラメータ2：IP：192.168.1.1  
パラメータ3：ネットマスク：255.255.255.0  
パラメータ4：ゲートウェイ：192.168.1.1  
パラメータ5：DNS：192.168.1.1  

- 6- **PMTF** 上記のパラメータをSPIフラッシュに保存します。次回の起動時にはステップ7から開始します。

```cpp
AT+PMTF
```

- 7- **WJOIN** ワイヤレスネットワーク*MyAp*を作成します：

```cpp
AT+WJOIN
```

- 8- **SLIST** SoftAPに接続されたSTA情報を照会します：

```cpp
AT+SLIST
```

### APスキャンプロセス

ワイヤレスネットワークカードがAPをスキャンするATコマンドは以下の通りです：

```cpp
AT+WSCAN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_3.jpg)

最後のパラメータは信号強度で、単位はdbです。

### STAがAPに参加するプロセス

- 1- **WPRT** 動作モードをSTAに設定します：

```cpp
AT+WPRT=0
```

- 2- **SSID** 参加するAP名を設定します。例：*TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** 参加するAPのワイヤレスキーを設定します。例：*12345678*

```cpp
AT+KEY=1,0,12345678
```

パラメータ1：0はHEX、1はASCII  
パラメータ2：インデックス番号、1から4はWEP暗号化キーに使用され、その他の暗号化方法は0に固定されています。  
パラメータ3：ワイヤレスキー、例：12345678  

- 4- **NIP** DHCPを有効にします：

```cpp
AT+NIP=0
```

- 5- **PMTF** 上記のパラメータをSPIフラッシュに保存します。次回の起動時にはステップ6から開始します：

```cpp
AT+PMTF
```

- 6- **WJOIN** ワイヤレスネットワークTEST_APに参加します：

```cpp
AT+WJOIN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_4.jpg)

### APSTAプロセスを作成する

- 1- **WPRT** 動作モードをAPSTAに設定します：

```cpp
AT+WPRT=3
```

- 2- **SSID** 参加するAP名を設定します。例：*TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** 参加するAPのワイヤレスキーを設定します。例：*12345678*

```cpp
AT+KEY=1,0,12345678
```

パラメータ1：0はHEX、1はASCII  
パラメータ2：インデックス番号、1から4はWEP暗号化キーに使用され、その他の暗号化方法は0に固定されています。  
パラメータ3：ワイヤレスキー、例：12345678  

- 4- **APSSID** 作成するSOFTAPのネットワーク名を設定します：

```cpp
AT+APSSID=”MYSoftAP”
```

- 5- **APENCRY** SoftAPの暗号化タイプを設定します（例：WPA2-TKIP）

```cpp
AT+APENCRY=5
```

- 6- **APKEY** SoftAPのパスワードを設定します（例：ASCIIコード87654321）

```cpp
AT+APKEY=1,0,87654321
```

- 7- **APNIP** IPアドレスとサブネットマスクを設定します：

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

- 8- **PMTF** 上記のパラメータをSPIフラッシュに保存します。次回の起動時にはステップ9から開始します：

```cpp
AT+PMTF
```

- 9- **WJOIN** ワイヤレスネットワークTEST_APに参加します：

```cpp
AT+WJOIN
```

## ファームウェアプログラミング

ファームウェアプログラミングについては以下をご確認ください：

[Air602 Firmware Programming Manual](https://wiki.seeedstudio.com/ja/Air602_Firmware_Programming_Manual)

## FAQ

**Q1. STAがAPから切断する方法**

A: ワイヤレスネットワークカードがAPを切断するためのATコマンド：

```cpp
AT+WLEAV
```

**Q2. SoftAPが切断された場合**

A: SoftAPがネットワークを切断するためのATコマンド：

```cpp
AT+WLEAV=2
```

**Q3. STAが現在の状態を確認する方法**

A: ワイヤレスネットワークカードが現在のネットワークカードの状態を確認するためのATコマンド：

```cpp
AT+LKSTT
```

**Q4. 現在のSoftAPの状態を確認する方法**

A: 現在のSoftAPの状態を確認するためのATコマンド：

```cpp
AT+APLKSTT
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/AIR602_lbr.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [Air602 AT Command User Manual](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602%20AT%20Command%20User%20Manual.pdf)

- **[PDF]** [Air602 Hardware Design Manual](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602%20Hardware%20Design%20Manual.pdf)

- **[ZIP]** [AIR602_lbr for eagle](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/AIR602_lbr.zip)

- **[ZIP]** [sscom](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>