---
description: W600モジュール
title: W600モジュール
keywords:
- Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/W600_Module
last_update:
  date: 05/15/2025
  author: Matthew
---


![](https://files.seeedstudio.com/wiki/W600_Module/img/113020031-preview.png)

W600モジュールは、802.11b/g/nをサポートするコスト効率の高い2.4GHz WiFiモジュールです。Seeed W600モジュールは、ARM Cortex-M3を搭載し、1MBのオンチップフラッシュとfreeRTOSカーネルを特徴とするW600チップをベースにしています。

W600チップのピンを取り出し、ボードの裏側に配置しました。これには、I2S/I2C/SPI/GPIO/PWM/UART/SDIOが含まれます。さらに、このモジュールにはオンボードPCBアンテナが搭載されており、アンテナを別途設計する必要がないため、モジュールを迅速に独自のボードに展開できます。また、このモジュールはCE/FCC認証を取得しており、ビジネスプロジェクトに直接使用することができます。

<a href="https://www.seeedstudio.com/W600-Module-p-4020.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

## 特徴

• 統合された32ビット組み込みCortex-M3 CPU、動作周波数80MHz

• 統合された288KB RAM

• 統合された1MBフラッシュ

**インターフェース**

• 統合されたGPIOデバイスコントローラー

• 統合された2つのUARTインターフェース、RTS/CTSをサポート、ボーレート: 1200bps~2Mbps

• 高速SPIコントローラーを統合、動作周波数: 0~50MHz

**ワイヤレス**

• IEEE802.11 b/g/e/i/d/k/r/s/w/nをサポート

• 2.4~2.4835 GHzをサポート

• Wi-Fi WMM/WMM-PS/WPA/WPA2/WPSをサポート

• Wi-Fi Directをサポート

• STBC、GreenField、Short-GI

• 複数のネットワークプロトコルをサポート: TCP/UDP/ICMP/DHCP/DNS/HTTP

**その他**

• ASCIIエンコーディングに基づくAT+命令プロトコルをサポート（UARTインターフェース）

• ユーザーがプログラム可能なGPIO制御をサポート

• オンボードアンテナ

## 仕様

<table>
<tr>
<th>カテゴリ</th>
<th>項目</th>
<th>パラメータ</th>
</tr>
<tr>
<td>ワイヤレス</td>
<td>Wi‐Fiモードのサポート</td>
<td>IEEE802.11b/g/n</td>
</tr>
<tr>
<td></td>
<td>RFシステムインピーダンス</td>
<td>50Ω</td>
</tr>
<tr>
<td></td>
<td>周波数範囲</td>
<td>2.4~2.4835 GHz</td>
</tr>
<tr>
<td></td>
<td>受信感度</td>
<td>20MHz MCS7@‐71dBm;<br />40MHz MCS7@‐68dBm;<br />54Mbps@‐73dBm;<br />11Mbps@‐86dBm;<br />1Mbps@‐95dBm;</td>
</tr>
<tr>
<td></td>
<td>物理層データレート</td>
<td>802.11n MCS 0~7   150Mbps</td>
</tr>
<tr>
<td></td>
<td>変調方式</td>
<td>DSSS、OFDM、DBPSK、DQPSK、CCK、QAM16/64</td>
</tr>
<tr>
<td></td>
<td>出力電力</td>
<td>IEEE802.11b, DSSS 1Mbps, POUT = +17dBm;<br />IEEE802.11g, OFDM 54Mbps, POUT = +10dBm;<br />IEEE802.11n, OFDM MCS7, POUT = +10dBm</td>
</tr>
<tr>
<td>ハードウェア</td>
<td>インターフェースタイプ</td>
<td>UART/SPI/GPIO</td>
</tr>
<tr>
<td></td>
<td>インターフェース速度</td>
<td>2Mbps@UART (最大) <br />50Mbps@SPI (最大)</td>
</tr>
<tr>
<td></td>
<td>動作電圧</td>
<td>3.3V(モジュール)/5V(開発ボード)</td>
</tr>
<tr>
<td></td>
<td>動作湿度</td>
<td>5%~90% (結露なし)</td>
</tr>
<tr>
<td></td>
<td>保存温度</td>
<td>‐40~+125 ℃</td>
</tr>
<tr>
<td></td>
<td>動作温度</td>
<td>‐40~+85℃</td>
</tr>
<tr>
<td>ソフトウェア</td>
<td>ネットワークタイプ</td>
<td>STA/AP/AP+STA/Wi‐Fi Direct</td>
</tr>
<tr>
<td></td>
<td>認証</td>
<td>WEP/WPA‐PSK/WPA2‐PSK</td>
</tr>
<tr>
<td></td>
<td>暗号化</td>
<td>WEP64/WEP128/TKIP/CCMP(AES)</td>
</tr>
<tr>
<td></td>
<td>WPS機能</td>
<td>WPS</td>
</tr>
<tr>
<td></td>
<td>省エネ</td>
<td>PS‐POLL/スタンバイ</td>
</tr>
<tr>
<td></td>
<td>ネットワークプロトコル</td>
<td>TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP</td>
</tr>
<tr>
<td></td>
<td>インターフェースプロトコル</td>
<td>AT+命令セット</td>
</tr>
</table>

:::note
詳細な仕様については、W600 [Specification V1.0.0_EN.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Specification%20V1.0.0_EN.pdf) および [W600 HardwareDesignGuide_v1.0.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf) をご確認ください。
:::

## 典型的なアプリケーション

- インテリジェント家電
- スマートホーム
- ワイヤレスオーディオおよびビデオ
- スマートトイ
- 医療モニタリング
- 産業制御
- その他のIoTアプリケーション

## ハードウェア概要

### ブロック図

<div align="center">
  <figure>
    <a href="https://files.seeedstudio.com/wiki/W600_Module/img/block.png" target="_blank">
      <img src="https://files.seeedstudio.com/wiki/W600_Module/img/block.png" alt="W600モジュールのブロック図" title="W600モジュールのブロック図" />
      <figcaption><i>クリックしてより鮮明なオリジナルファイルを見る</i></figcaption>
    </a>
  </figure>
</div>

### ピン配置

<div align="center">
  <figure>
    <a href="https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg" target="_blank">
      <img src="https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg" alt="W600モジュールのピン配置" title="W600モジュールのピン配置" />
      <figcaption><i>クリックしてより鮮明なオリジナルファイルを見る</i></figcaption>
    </a>
  </figure>
</div>

## はじめに

**W600モジュール**を使用するには、[USB-to-Serialツール](https://www.seeedstudio.com/PL2303-USB-to-Serial-TTL-Module-Adapter-p-2358.html)を使用してRX/TXピンをコンピュータに接続する必要があります。また、このモジュールに**3.3V**と**GND**ピンで電力を供給する必要があります。

:::note
Macの場合、一部のバージョンのMacシステムがオンボードのUSB-to-SerialチップCH330Nを認識できないことが判明しています。解決策については[Mac os driver issue](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80)をご確認ください。
:::

シリアルポートツール**sscom**を使用してATコマンドを送信します。お好みのシリアルポートツールを使用できますが、**sscom**を使用したい場合は[こちら](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip)からダウンロードできます。

いずれの場合でも、**AddCrLf**オプションを有効にし、ボーレートを**115200**に設定してください。

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_2.jpg)

**AT+**を入力して**SEND**をクリックするか、++enter++キーを押して接続が正常に確立されたか確認します。

```cpp
AT+
```

**+OK**が返されると、このモジュールを制御するためにATコマンドを使用できます。

### SoftAPプロセスの作成

- 1- **WPRT**で無線ネットワークカードの動作モードをSoftAPに設定します：

```cpp
AT+WPRT=2
```

- 2- **APSSID**でSTA用のAP SSIDを設定します（例：*MyAP*）：

```cpp
AT+APSSID=MyAp
```

- 3- **APENCRY**で無線ネットワークカードのセキュリティモードをWEP64に設定します：

```cpp
AT+APENCRY=1
```

パラメータ：

open：0，WEP64：1，WEP128：2

- 4- **APKEY**で無線ネットワークカードのキーを*12345*に設定します：

```cpp
AT+APKEY=1,1,12345
```

パラメータ1：キー形式、0はHEX、1はASCII  

パラメータ2：インデックス番号、1から4はWEP暗号化キー用、その他の暗号化方式は0に固定。  

パラメータ3：無線キー（例：12345）  

- 5- **APNIP**でIPアドレスとサブネットマスクを設定します：

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

パラメータ1：アドレスタイプ、0はDHCPを使用した動的割り当て、1は静的アドレス  
パラメータ2：IP：192.168.1.1  
パラメータ3：ネットマスク：255.255.255.0  
パラメータ4：ゲートウェイ：192.168.1.1  
パラメータ5：DNS：192.168.1.1  

- 6- **PMTF**で上記のパラメータをSPIフラッシュに保存します。次回の起動時にはステップ7から開始します。

```cpp
AT+PMTF
```

- 7- **WJOIN**で無線ネットワーク*MyAp*を作成します：

```cpp
AT+WJOIN
```

- 8- **SLIST**でSoftAPに接続されたSTA情報を照会します：

```cpp
AT+SLIST
```

### APスキャンプロセス

無線ネットワークカードがAPをスキャンするためのATコマンドは以下の通りです：

```cpp
AT+WSCAN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_3.jpg)

最後のパラメータは信号強度で、単位はdbです。

### STAがAPに参加するプロセス

- 1- **WPRT**で動作モードをSTAに設定します：

```cpp
AT+WPRT=0
```

- 2- **SSID**で参加するAP名を設定します（例：*TEST_AP*）：

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY**で参加するAPの無線キーを設定します（例：*12345678*）：

```cpp
AT+KEY=1,0,12345678
```

パラメータ1：0はHEX、1はASCII

パラメータ2：インデックス番号、1から4はWEP暗号化キー用、その他の暗号化方式は0に固定。

パラメータ3：無線キー（例：12345678）

- 4- **NIP**でDHCPを有効にします：

```cpp
AT+NIP=0
```

- 5- **PMTF**で上記のパラメータをSPIフラッシュに保存します。次回の起動時にはステップ6から開始します：

```cpp
AT+PMTF
```

- 6- **WJOIN**で無線ネットワーク*TEST_AP*に参加します：

```cpp
AT+WJOIN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_4.jpg)

### APSTAプロセスの作成

- 1- **WPRT**で動作モードをAPSTAに設定します：

```cpp
AT+WPRT=3
```

- 2- **SSID**で参加するAP名を設定します（例：*TEST_AP*）：

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY**で参加するAPの無線キーを設定します（例：*12345678*）：

```cpp
AT+KEY=1,0,12345678
```

パラメータ1：0はHEX、1はASCII

パラメータ2：インデックス番号、1から4はWEP暗号化キー用、その他の暗号化方式は0に固定。

パラメータ3：無線キー（例：12345678）

- 4- **APSSID**で作成するSOFTAPのネットワーク名を設定します：

```cpp
AT+APSSID=”MYSoftAP”
```

- 5- **APENCRY**でSoftAPの暗号化タイプを設定します（例：WPA2-TKIP）：

```cpp
AT+APENCRY=5
```

- 6- **APKEY**でSoftAPのパスワードを設定します（例：ASCIIコード87654321）：

```cpp
AT+APKEY=1,0,87654321
```

- 7- **APNIP**でIPアドレスとサブネットマスクを設定します：

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

- 8- **PMTF**で上記のパラメータをSPIフラッシュに保存します。次回の起動時にはステップ9から開始します：

```cpp
AT+PMTF
```

- 9- **WJOIN**で無線ネットワーク*TEST_AP*に参加します：

```cpp
AT+WJOIN
```

:::note
ATコマンドの詳細については、[WM_W60X_SDK_AT Command_V1.0.2.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf)をご確認ください。
:::

## ファームウェアプログラミング

ファームウェアプログラミングについては、以下をご確認ください：

[WM_W60X_SDK_User Manual_V1.0.0.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf) および [WM_W60X_Firmware Generation Guide_V1.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf)

## FAQ

**Q1. STAがAPから切断する方法**

A: ワイヤレスネットワークカードがAPから切断するためのATコマンド：

```cpp
AT+WLEAV
```

**Q2. SoftAPが切断された場合**

A: SoftAPがネットワークを切断するためのATコマンド：

```cpp
AT+WLEAV=2
```

**Q3. STAが現在の状態を確認する方法**

A: ワイヤレスネットワークカードが現在の状態を確認するためのATコマンド：

```cpp
AT+LKSTT
```

**Q4. 現在のSoftAPの状態を確認する方法**

A: 現在のSoftAPの状態を確認するためのATコマンド：

```cpp
AT+APLKSTT
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[PDF]** [WM_W60X_SDK_AT Command_V1.0.2.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf)

- **[PDF]** [W600 HardwareDesignGuide_v1.0.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf)

- **[PDF]** [W60X_SDK_User Manual_V1.0.0.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf)

- **[PDF]** [WM_W60X_Firmware Generation Guide_V1.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf)

- **[ZIP]** [W600 Module schematic files](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip)

- **[ZIP]** [sscom](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip)

## 技術サポート & 製品ディスカッション

<br />
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なるニーズやご希望に応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>